import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {YtPlaylist} from '../types';

@Injectable({
  providedIn: 'root',
})
export class YoutubeDataService {
  constructor(private http: HttpClient) {}

  getYoutubeData(query: string | undefined): Observable<YtPlaylist> {
    let params = new HttpParams()
      .set('part', 'snippet,contentDetails')
      .set('playlistId', 'UUsFZQOWRbNqdsn5DtW3u6tA')
      .set('key', 'AIzaSyBalAwxPfYlnzUPVxSzIohitpQVln9fdDw')
      .set('maxResults', '6');

    if (query) {
      params = params.set('pageToken', query);
    }

    const apiUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems`;

    return this.http.get<YtPlaylist>(apiUrl, { params });
  }
}
