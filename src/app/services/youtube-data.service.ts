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
      .set('maxResults', '30');

    if (query) {
      params = params.set('pageToken', query);
    }

    const apiUrl = `https://youtube.googleapis.com/youtube/v3/playlistItems`;

    return this.http.get<YtPlaylist>(apiUrl, { params });
  }

  findSermons(nextPageToken: string | undefined, publishedAfter: string, publishedBefore: string, order: string | 'date'): Observable<YtPlaylist> {
    let params = new HttpParams()
      .set('part', 'snippet')
      .set('channelId', 'UCsFZQOWRbNqdsn5DtW3u6tA')
      .set('key', 'AIzaSyBalAwxPfYlnzUPVxSzIohitpQVln9fdDw')
      .set('maxResults', '30')
      .set('order', order)
      .set('publishedAfter', publishedAfter)
      .set('publishedBefore', publishedBefore);

    if (nextPageToken) {
      params = params.set('pageToken', nextPageToken);
    }

    const apiUrl = `https://youtube.googleapis.com/youtube/v3/search`;

    return this.http.get<YtPlaylist>(apiUrl, { params });
  }

}
