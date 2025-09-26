import { Component } from '@angular/core';
import { MapComponent } from '../map-component/map-component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact-us-page',
  imports: [MapComponent],
  templateUrl: './contact-us-page.html',
  styleUrl: './contact-us-page.css'
})
export class ContactUsPage {
  constructor(
    private meta: Meta
  ) {
    this.meta.removeTag('name="description"');
    this.meta.removeTag('name="keywords"');
    this.meta.removeTag('name="title"');
    this.meta.addTags([
      { name: 'title', content: 'Harvest Reformed Church - Contact Us' },
      { name: 'description', content: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.' },
      { name: 'keywords', content: 'Contact Harvest Reformed Church, Get in touch, Contact us' }
    ]);
  }
}
