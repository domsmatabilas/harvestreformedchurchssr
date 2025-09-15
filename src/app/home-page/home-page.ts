import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CardComponent } from '../card-component/card-component';
import { MapComponent } from '../map-component/map-component';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { LoadImage } from "../load-image/load-image";
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-home-page',
  imports: [CarouselModule, CardComponent, MapComponent, NgxSpinnerModule, LoadImage],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  constructor(
    private spinner: NgxSpinnerService,
    private meta: Meta
  ) {
    this.meta.addTags([
      { name: 'title', content: 'Harvest Reformed Church' },
      { name: 'description', content: 'This is the official website of Harvest Reformed Church. We believe and strongly uphold the the five solas of the Reformation, which distinguished the Reformers from the teachings of Rome, include sola scriptura (Scripture alone), solus Christus (Christ alone), sola fide (faith alone), sola gratia (grace alone), and soli Deo gloria (glory to God alone). Harvest Reformed Church is located in Werribee, Victoria 3030 Australia.' },
      { name: 'keywords', content: 'Harvest Reformed Church Sermons, Sermons, Sunday Sermons, Preaching, Sunday Preaching, Harvest Reformed Church Preaching' }
    ]);
  }


  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
