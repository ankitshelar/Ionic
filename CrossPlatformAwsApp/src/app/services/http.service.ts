import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(public http:HttpClient) { }

  httpGet(): Observable<any>{
    return this.http.get('http://localhost:3000/api/crudget')
  }
}