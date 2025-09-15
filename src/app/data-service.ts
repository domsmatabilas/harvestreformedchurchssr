import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sermon } from './types';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getSampleData(): Observable<Sermon[]> {
    return this.http.get<Sermon[]>('assets/data.json');
  }
}