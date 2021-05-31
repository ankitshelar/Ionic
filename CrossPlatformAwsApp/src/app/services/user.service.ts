import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  getUsers(): Observable<any>{
    return this.httpService.get(environment.apiBaseUrl+'getUsers')
  }
  postUser(body): Observable<any>{
    return this.httpService.post(body,environment.apiBaseUrl+'postUser')
  }
}
