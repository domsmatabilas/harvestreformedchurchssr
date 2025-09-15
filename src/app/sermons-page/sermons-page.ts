import { Component } from '@angular/core';
import { Sermon } from '../types';
import { CommonModule } from '@angular/common';
import { DomSanitizer, Meta } from '@angular/platform-browser';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
import { DataService } from '../data-service';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { delay } from 'rxjs';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-sermons-page',
  imports: [CommonModule, InfiniteScrollDirective, YouTubePlayerModule, NgxSpinnerModule],
  templateUrl: './sermons-page.html',
  styleUrl: './sermons-page.css'
})
export class SermonsPage {
  sermons: Sermon[] = [];
  page: number = 0;
  limit: number = 6;
  hasMoreData: boolean = true;
  isLoading: boolean = false;

  toggleLoading = () => this.isLoading = !this.isLoading;

  apiLoaded = false;

  constructor(
    private sanitizer: DomSanitizer,
    private dataService: DataService,
    private spinner: NgxSpinnerService,
    private meta: Meta
  ) { 
    this.meta.removeTag('name="description"');
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('name="title"');
    this.meta.addTags([
      { name: 'title', content: 'Harvest Reformed Church - Sermons' },
      { name: 'description', content: 'Every Sunday, we record our sermons so other people will also hear the truth from God`s word. You can find our past sermons on this page.' },
      { name: 'keywords', content: 'Harvest Reformed Church, Harvest, Reformed, Church, Werribee, Victoria, Australia, Sermons, Bible Study, Sunday Service, Contact Us, Give' }
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
    this.dataService.getSampleData().pipe(delay(1000)).subscribe(
      (newItems: any[]) => {
        this.sermons = [...this.sermons, ...newItems.slice(this.page, this.page + this.limit)];
        this.page = this.page + this.limit;
        if (this.page < this.limit) {
          this.hasMoreData = false;
        }
      },
      (error: any) => {
        console.error('Error fetching data:', error);
        this.spinner.hide();
      },
      () => {
        this.spinner.hide();
      }
    );
  }

  onScroll(): void {
    this.loadItems();
  }

}
