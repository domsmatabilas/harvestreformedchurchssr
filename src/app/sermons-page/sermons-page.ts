import {afterNextRender, Component} from '@angular/core';
import {Sermon, SermonData, YtPlaylist} from '../types';
import {CommonModule} from '@angular/common';
import {DomSanitizer, Meta} from '@angular/platform-browser';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {map} from 'rxjs';
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {YoutubeDataService} from '../services/youtube-data.service';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TypeaheadModule} from 'ngx-bootstrap/typeahead';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sermons-page',
  imports: [CommonModule, YouTubePlayerModule, NgxSpinnerModule, BsDatepickerModule, PaginationModule, ReactiveFormsModule, FormsModule, TypeaheadModule, FaIconComponent],
  templateUrl: './sermons-page.html',
  styleUrl: './sermons-page.css'
})
export class SermonsPage {
  faMagnifyingGlass = faMagnifyingGlass;
  sermons: Sermon[] = [];
  page: number = 0;
  isLoading: boolean = false;
  nextPageToken: string | undefined = undefined;
  prevPageToken: string | undefined = undefined;
  currentPage: number = 1;
  currentPageSize: number = 30;
  prevPageSize: number = 0;
  totalItems: number = 0;
  itemsPerPage: number = 0;
  searchQuery: string = '';
  isSearching: boolean = false;

  toggleLoading = () => this.isLoading = !this.isLoading;

  apiLoaded = false;

  constructor(
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService,
    private meta: Meta,
    private youtubeDataService: YoutubeDataService
  ) {
    afterNextRender(() => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    });

    this.meta.removeTag('name="description"');
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('name="title"');
    this.meta.addTags([
      {name: 'title', content: 'Harvest Reformed Church - Sermons'},
      {
        name: 'description',
        content: 'Every Sunday, we record our sermons so other people will also hear the truth from God`s word. You can find our past sermons on this page.'
      },
      {
        name: 'keywords',
        content: 'Harvest Reformed Church, Harvest, Reformed, Church, Werribee, Victoria, Australia, Sermons, Bible Study, Sunday Service, Contact Us, Give'
      }
    ], true);
  }

  ngOnInit(): void {
    this.isSearching = false;
    this.loadItems();
  }

  onPageChange(event: any): void {
    if (event.page === this.currentPage) {
      return;
    } else if (event.page < this.currentPage) {
      this.loadItems(this.prevPageToken, false)
    } else {
      this.loadItems(this.nextPageToken, true);
    }

    this.currentPage = event.page;
  }

  deleteSermon(id: string) {
    throw new Error('Method not implemented.');
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadItems(query?: string, nextPage?: boolean): void {
    this.spinner.show();

    (this.isSearching ?
      this.youtubeDataService.findSermons(query, this.searchQuery) :
      this.youtubeDataService.getYoutubeData(query))
      .pipe(
      map((response: YtPlaylist) => {
        const items: Sermon[] = response.items.map((item) => ({
          title: item.snippet.title.includes(' | Harvest Reformed Church') ? item.snippet.title.replace(' | Harvest Reformed Church', '') : item.snippet.title,
          date: item.snippet.publishedAt,
          videoId: item.id?.videoId ? item.id.videoId : item.snippet.resourceId.videoId,
          description: item.snippet.description,
        }));

        const totalResults = response.pageInfo.totalResults;
        const size = response.pageInfo.resultsPerPage;
        const nextPageToken = response.nextPageToken;
        const prevPageToken = response.prevPageToken;


        return {items, nextPageToken, prevPageToken, totalResults, size} as SermonData;
      })
    ).subscribe({
      next: (data: SermonData) => {
        const newItems = data.items;
        this.sermons = [...newItems];

        this.nextPageToken = data.nextPageToken;
        this.prevPageToken = data.prevPageToken;
        this.totalItems = data.totalResults;
        this.itemsPerPage = data.size;

        if ((nextPage === undefined && data.nextPageToken === undefined) || data.totalResults === newItems.length) {
          this.currentPageSize = newItems.length;
        } else if (nextPage) {
          this.currentPageSize = this.currentPageSize + newItems.length;
        } else {
          this.currentPageSize = this.currentPageSize - this.prevPageSize;
        }

        if (data.nextPageToken === undefined && nextPage) {
          this.prevPageSize = newItems.length;
        } else if (data.prevPageToken && data.nextPageToken) {
          this.prevPageSize = data.size;
        }
      },
      error: (error: any) => {
        console.error('Error fetching data:', error);
        this.spinner.hide();
      },
      complete: () => {
        this.spinner.hide();
      }
    });
  }


  onSearch(): void {
    if(!this.searchQuery){
      this.isSearching = false;

      this.loadItems();
      return;
    }

    this.isSearching = true;
    this.nextPageToken = undefined;
    this.page = 0;
    this.sermons = [];

    if (this.searchQuery) {
      this.youtubeDataService.findSermons(this.nextPageToken, this.searchQuery).pipe(
        map((response: YtPlaylist) => {
          const items: Sermon[] = response.items.map((item) => ({
            title: item.snippet.title.includes(' | Harvest Reformed Church') ? item.snippet.title.replace(' | Harvest Reformed Church', '') : item.snippet.title,
            date: item.snippet.publishedAt,
            videoId: item.id.videoId,
            description: item.snippet.description,
          }));

          const totalResults = response.pageInfo.totalResults;
          const size = response.pageInfo.resultsPerPage;
          const nextPageToken = response.nextPageToken;

          return {items, nextPageToken, totalResults, size} as SermonData;
        })
      ).subscribe({
        next: (data: SermonData) => {
          const newItems = data.items;
          this.sermons = [...newItems];

          this.nextPageToken = data.nextPageToken;
          this.prevPageToken = data.prevPageToken;
          this.totalItems = data.totalResults;
          this.itemsPerPage = data.size;

          if (data.nextPageToken === undefined || data.totalResults === newItems.length) {
            this.currentPageSize = newItems.length;
          } else {
            this.currentPageSize = data.size;
          }

          if (data.nextPageToken === undefined) {
            this.prevPageSize = newItems.length;
          } else if (data.prevPageToken && data.nextPageToken) {
            this.prevPageSize = data.size;
          }
        },
        error: (error: any) => {
          console.error('Error fetching data:', error);
          this.spinner.hide();
        },
        complete: () => {
          this.spinner.hide();
        }
      });
    }
  }

  onScroll(): void {
    this.loadItems();
  }

}
