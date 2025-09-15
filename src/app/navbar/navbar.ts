import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FontAwesomeModule, CollapseModule, BsDropdownModule, CommonModule],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  faFacebook = faFacebook;
  faYoutube = faYoutube;
  faHome = faHome;
  isCollapsed: boolean = true;

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
  }
}
