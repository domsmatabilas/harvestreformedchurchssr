import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoadImage } from '../load-image/load-image';

@Component({
  selector: 'app-leadership-page',
  imports: [CommonModule, LoadImage],
  templateUrl: './leadership-page.html',
  styleUrl: './leadership-page.css'
})
export class LeadershipPage {
  loading: boolean = true;

  onLoad() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
