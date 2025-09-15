import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Sermon } from '../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sermon-details-page',
  imports: [RouterLink, CommonModule],
  templateUrl: './sermon-details-page.html',
  styleUrl: './sermon-details-page.css'
})
export class SermonDetailsPage {
  sermon: Sermon | null = null;

  constructor(private route: ActivatedRoute) { 
  }

  ngOnInit(): void {
    const sermonId = this.route.snapshot.paramMap.get('id');
          console.error('Sermon id' + sermonId);

    // const sermon = sermonsListing.find(sermon => sermon.date === sermonId);
    // if (sermon) {
    //   this.sermon = sermon;
    //   console.error('Sermon found');
    // } else {
    //   console.error('Sermon not found');
    //   this.sermon = null; // or handle the error as needed
    // }
  }
}
