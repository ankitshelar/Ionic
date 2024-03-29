import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http: HttpClient) { }

  get(url): Observable<any> {
    return this.http.get(url)
  }

  post(body, url): Observable<any> {
    return this.http.post(url, body)
  }
}
