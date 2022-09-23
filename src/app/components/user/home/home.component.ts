import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../register/model/user.model';
import { UserService } from '../../register/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class userHomeComponent implements OnInit {
  username:string;
  loggedIn:boolean;
  user:User;
  updateForm: FormGroup;
  updatedUser: User;

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    //update all the data
    this.updateForm = new FormGroup({
      email: new FormControl(''),
      mobile_no: new FormControl(''),
      address: new FormControl('')
    });

    let status = localStorage.getItem("isLoggedIn");
     if(status){
       this.loggedIn=true;
       let token = localStorage.getItem("token");

       token = atob(token);
       this.username = token.split(":")[0];
     }
     else {
       this.loggedIn = false;
     }

     this.userService.getUser(this.username).subscribe(data=>{
       this.user = data;
     });
  }

  onUpdateClick(){
    this.updatedUser = {
      email: this.updateForm.value.email,
      mobile_no: this.updateForm.value.mobile_no,
      address: this.updateForm.value.address
    };

    this.userService.updateUser(this.username,this.updatedUser).subscribe(data=>{
        this.user = data;
    });
    alert("You KYC updated succesfully.");
    this.router.navigateByUrl("user");
  }
  getUpdateFormControl(){
    return this.updateForm.controls;
  }



}
