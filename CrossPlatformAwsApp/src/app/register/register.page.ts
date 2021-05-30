import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userDetails: any;

  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.httpService.httpGet().subscribe(data=>{
      if(data){
        this.userDetails = data.Items;
      }
    })
  }
}
