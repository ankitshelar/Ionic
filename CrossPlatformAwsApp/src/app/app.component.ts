import { Component } from '@angular/core';
import {HttpService} from '../app/services/http.service'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Register', url: '/Register', icon: 'people' },
  ];
  constructor(public httpService:HttpService) {}
  ngOnInit(){
  }
}
