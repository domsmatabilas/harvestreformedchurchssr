import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})

export class Footer {
  faFacebook = faFacebook;
  faYoutube = faYoutube;
}
