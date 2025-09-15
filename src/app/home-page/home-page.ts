import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CardComponent } from '../card-component/card-component';
import { MapComponent } from '../map-component/map-component';
import { NgxSpinnerModule, NgxSpinnerService } from "ngx-spinner";
import { LoadImage } from "../load-image/load-image";


@Component({
  selector: 'app-home-page',
  imports: [CarouselModule, CardComponent, MapComponent, NgxSpinnerModule, LoadImage],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {

  constructor(
    private spinner: NgxSpinnerService
  ) { }

   ngOnInit(): void {
    this.spinner.show();
    
    setTimeout(() => {
      this.spinner.hide();
    }, 1000);
  }
}
