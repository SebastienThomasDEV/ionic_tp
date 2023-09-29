import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class FeedService {
  constructor(private readonly http: HttpClient) {}

  getFeed(url: string, api_key: string): Observable<any> {
    // creation des headers pour la requete
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8')
    headers.set('Access-Control-Allow-Origin', '*');
    // requete pour recuperer le flux rss de l'url passé en parametre
    return this.http.get(`https://api.rss2json.com/v1/api.json?rss_url=${url}&api_key=${api_key}`, {headers});
  }

}
