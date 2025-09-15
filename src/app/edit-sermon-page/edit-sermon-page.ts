import { Component } from '@angular/core';
import { AddSermonPage } from "../add-sermon-page/add-sermon-page";
import { Sermon } from '../types';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-sermon-page',
  imports: [AddSermonPage],
  templateUrl: './edit-sermon-page.html',
  styleUrl: './edit-sermon-page.css'
})
export class EditSermonPage {
  sermon: Sermon = { 
    title: '',
    date: '',
    speaker: '',
    verse: '',
    videoUrl: ''
  };

  constructor(
    private router: Router, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const sermonId = this.route.snapshot.paramMap.get('id');
  }

  updateSermon($event: Sermon) {
    alert(`Sermon Updated: ${$event.title}`);
    this.router.navigate(['/sermons']);
  }

}
