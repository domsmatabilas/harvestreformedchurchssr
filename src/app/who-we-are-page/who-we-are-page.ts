import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-who-we-are-page',
  imports: [],
  templateUrl: './who-we-are-page.html',
  styleUrl: './who-we-are-page.css'
})
export class WhoWeArePage {
  constructor(
    private meta: Meta
  ) {
    this.meta.removeTag('name="description"');
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('name="title"');
    this.meta.addTags([
      { name: 'title', content: 'Harvest Reformed Church - Who we are' },
      { name: 'description', content: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.' },
      { name: 'keywords', content: 'Who Harvest Reformed Church is, Who we are' }
    ]);
  }
}
