import {Component} from '@angular/core';
import {Sermon, SermonData, YtPlaylist} from '../types';
import {CommonModule} from '@angular/common';
import {DomSanitizer, Meta} from '@angular/platform-browser';
import {InfiniteScrollDirective} from 'ngx-infinite-scroll';
import {YouTubePlayerModule} from '@angular/youtube-player';
import {map} from 'rxjs';
import {NgxSpinnerModule, NgxSpinnerService} from "ngx-spinner";
import {YoutubeDataService} from '../services/youtube-data.service';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-sermons-page',
  imports: [CommonModule, InfiniteScrollDirective, YouTubePlayerModule, NgxSpinnerModule, BsDatepickerModule],
  templateUrl: './sermons-page.html',
  styleUrl: './sermons-page.css'
})
export class SermonsPage {
  sermons: Sermon[] = [];
  page: number = 0;
  hasMoreData: boolean = true;
  isLoading: boolean = false;
  nextPageToken: string | undefined = undefined;
  bsRangeValue: Date[] = [];

  toggleLoading = () => this.isLoading = !this.isLoading;

  apiLoaded = false;

  constructor(
    private sanitizer: DomSanitizer,
    private spinner: NgxSpinnerService,
    private meta: Meta,
    private youtubeDataService: YoutubeDataService
  ) {
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
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    this.loadItems();
  }

  deleteSermon(id: string) {
    throw new Error('Method not implemented.');
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }


  loadItems(): void {
    if (!this.hasMoreData) return;
    this.spinner.show();

    this.youtubeDataService.findSermons(this.nextPageToken, '1970-01-01T00:00:00Z', new Date().toISOString(), 'date').pipe(
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
        this.sermons = [...this.sermons, ...newItems];
        this.page = this.page + data.size;
        if (this.page >= data.totalResults) {
          this.hasMoreData = false;
        }
        this.nextPageToken = data.nextPageToken;
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

  onDateRangeChange(event: any): void {
    const startDate = event[0];
    const endDate = event[1];

    if (startDate && endDate) {
      this.youtubeDataService.findSermons(this.nextPageToken, startDate.toISOString(), endDate.toISOString(), 'date').pipe(
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
          this.page = this.page + data.size;
          if (this.page >= data.totalResults) {
            this.hasMoreData = false;
          }
          this.nextPageToken = data.nextPageToken;
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
