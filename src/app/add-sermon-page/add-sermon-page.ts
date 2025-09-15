import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Sermon } from '../types';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-sermon-page',
  imports: [FormsModule, RouterLink],
  templateUrl: './add-sermon-page.html',
  styleUrl: './add-sermon-page.css'
})
export class AddSermonPage {
  @Input() pageTitle: string = 'Add Sermon';
  @Input() buttonText: string = 'Add Sermon';
  @Input() type: string = 'ADD'; // 'ADD' or 'EDIT'
  @Input() sermon: Sermon = {
    title: '',
    date: '',
    speaker: '',
    verse: '',
    videoUrl: ''
  };

  @Output() onSubmit = new EventEmitter<Sermon>();

  constructor(private router: Router) {
  }

  addSermon(type: string) {
    if (type === 'ADD') {
      alert(`Sermon Added: ${this.sermon.title}`);
    } else {
      this.onSubmit.emit(this.sermon);
    }
    this.router.navigate(['/sermons']);
  }
}
