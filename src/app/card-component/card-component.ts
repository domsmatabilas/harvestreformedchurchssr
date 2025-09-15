import { Component, Input, input } from '@angular/core';
import { LoadImage } from '../load-image/load-image';

@Component({
  selector: 'app-card-component',
  imports: [LoadImage],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css'
})
export class CardComponent {
  @Input() title: string = 'Card with stretched link';
  @Input() text: string = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';
  @Input() imageUrl: string = 'https://placehold.co/600x400.png';
  @Input() buttonText: string | undefined;
  @Input() link: string | undefined;

}
