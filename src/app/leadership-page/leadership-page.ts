import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoadImage } from '../load-image/load-image';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-leadership-page',
  imports: [CommonModule, LoadImage],
  templateUrl: './leadership-page.html',
  styleUrl: './leadership-page.css'
})
export class LeadershipPage {
  loading: boolean = true;

  constructor(
    private meta: Meta
  ) {
    this.meta.removeTag('name="description"');
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('name="title"');
    this.meta.addTags([
      { name: 'title', content: 'Harvest Reformed Church - Leadership' },
      { name: 'description', content: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.' },
      { name: 'keywords', content: 'Leadership of Harvest Reformed Church, Leadership' }
    ]);
  }

  onLoad() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
