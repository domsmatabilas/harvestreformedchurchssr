import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-map-component',
  imports: [],
  templateUrl: './map-component.html',
  styleUrl: './map-component.css'
})
export class MapComponent {
  @Input() mapSrc: string = '';
  @Input() mapHeight: string = '450px';
  @Input() mapWidth: string = '100%';
  safeMapSrc: SafeResourceUrl = '';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void{
        this.safeMapSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.mapSrc);
  }
}
