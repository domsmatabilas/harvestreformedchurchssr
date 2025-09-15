import { Component } from '@angular/core';
import { CardComponent } from '../card-component/card-component';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-sunday-service-page',
  imports: [CardComponent],
  templateUrl: './sunday-service-page.html',
  styleUrl: './sunday-service-page.css'
})
export class SundayServicePage {

  constructor(
      private meta: Meta
    ) {
      this.meta.removeTag('name="description"');
      this.meta.removeTag('name="keywords"');
      this.meta.removeTag('name="title"');
      this.meta.addTags([
        { name: 'title', content: 'Harvest Reformed Church - Sunday Service' },
        { name: 'description', content: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.' },
        { name: 'keywords', content: 'Harvest Reformed Church Sunday Service, Sunday Service, Sunday Worship' }
      ]);
    }
}
