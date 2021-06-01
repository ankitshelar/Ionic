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
      lName: ['', Validators.required],
      id:['']
    })
  }

  ngOnInit() {
    this.getUsersList();
  }

  register(value) {
    if(value.id){
      this.updateUser(value)
    }
    else{
      this.userService.postUser(value).subscribe(data => {
        if (data) {
          this.userService.sendEmail().subscribe(data => {
            
          })
          this.regForm.reset();
          this.getUsersList();
        }
      })
    }
  }

  getUsersList() {
    this.userService.getUsers().subscribe(data => {
      if (data) {
        this.userDetails = data.Items;
      }
    })
  }

  deleteUser(user) {
    this.userService.deleteUser(user).subscribe(data => {
      if (data) {
        this.getUsersList();
      }
    })
  }

  updateUser(user) {
    this.userService.updateUser(user).subscribe(data => {
      if (data) {
        this.regForm.reset();
        this.getUsersList();
      }
    })
  }

  bindUser(user){
    this.regForm.patchValue({
      fName:user.FirstName,
      lName:user.LastName,
      id:user.Id
    })
  }

  reset(){
    this.regForm.reset()
  }
}