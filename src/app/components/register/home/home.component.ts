import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class registerHomeComponent implements OnInit {

  user:User;
  registrationForm:FormGroup;


  constructor(private userService: UserService,private router: Router) { }

  ngOnInit(): void {
  this.registrationForm = new FormGroup({
    name: new FormControl(''),
    username: new FormControl(''),
    address: new FormControl(''),
    password: new FormControl(''),
    email: new FormControl(''),
    mobile_no: new FormControl(''),
    gender: new FormControl(''),
    account_number: new FormControl(null),
    balance: new FormControl(null)
    
  });
  }

  onRegisterFormSubmit() {
    this.user= {
     name: this.registrationForm.value.name,
     username: this.registrationForm.value.username,
     address: this.registrationForm.value.address,
     password: this.registrationForm.value.password,
     email: this.registrationForm.value.email,
     mobile_no: this.registrationForm.value.mobile_no,
     gender: this.registrationForm.value.gender,
     account_number: this.registrationForm.value.account_number,
     balance: this.registrationForm.value.balance
    }
  

  this.userService.postUser(this.user).subscribe({

  });

  alert("You have succesfully Registered now click on login");
  this.router.navigateByUrl('login');

}
}
