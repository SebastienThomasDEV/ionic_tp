import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

// import * as RSSParser from 'rss-parser';


@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private readonly http: HttpClient) {
  }

  getFeed() {
    const headers = new HttpHeaders();
    headers.append('mode', 'no-cors');
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('method', 'GET');
    return this.http.get('https://www.lemondeinformatique.fr/flux-rss/thematique/services-it/rss.xml', {headers, responseType: 'text'});
  }
}
