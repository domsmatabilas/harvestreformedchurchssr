import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-load-image',
  imports: [],
  templateUrl: './load-image.html',
  styleUrl: './load-image.css'
})
export class LoadImage {
  @Input() imageUrl: string = 'https://placehold.co/600x400.png';
  @Input() cssClass: string = '';
  @Input() styleOverride: string = '';
  @Input() altText: string = 'image';
  @Input() width: number | undefined;

  loading: boolean = true;

  onLoad() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }
}
