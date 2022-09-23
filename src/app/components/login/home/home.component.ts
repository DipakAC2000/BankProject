import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { appServiceService } from 'src/app/service.service';
import { User } from '../../register/model/user.model';
import { UserService } from '../../register/service/user.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class loginHomeComponent implements OnInit {

  loginForm: FormGroup;
  users: User[];
  errorMsg: string;


  constructor(private userService : UserService,private appService:appServiceService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(data=>{
      this.users = data;
    })

    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });
  }

  onLoginFormSubmit() {
    let username = this.loginForm.value.username;
    let password = this.loginForm.value.password;


    let user = this.users.find(k=> ( k.username === username && k.password === password));

    if(user) {

      localStorage.setItem("isLoggedIn", "true");

      let token = btoa(username + ":" + password);
      localStorage.setItem("token", token);
      this.appService.loggedIn.next(true);
      alert("Welcome to your portal")
      this.router.navigateByUrl('/');
    }

    else {
      alert("You have entered Invalid Details please check or contact to branch..")
    }
  }

}
