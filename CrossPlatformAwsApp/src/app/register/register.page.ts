import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userDetails: any;
  regForm: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder) {
    this.regForm = fb.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(data => {
      if (data) {
        this.userDetails = data.Items;
      }
    })
  }
  register(value){
  }
}
