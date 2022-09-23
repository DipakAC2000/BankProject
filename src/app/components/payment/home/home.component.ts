import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../register/model/user.model';
import { UserService } from '../../register/service/user.service';
import { Account } from '../model/paymentdetails.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class paymentHomeComponent implements OnInit {

  fundTransferForm : FormGroup;
  accounts: Account[];
  account: Account;
  username: string;
  currentUser: User;
  allAccountInfo: Account[];

  constructor(private userService:UserService, private router: Router) {  }

  ngOnInit(): void {
    //Payment form
    this.fundTransferForm = new FormGroup({
      account_number: new FormControl(null),
      balance: new FormControl(null)
    });
    let status= localStorage.getItem("isLoggedIn");
    if(status) {
      let token = localStorage.getItem("token");
      token = atob(token);
      this.username = token.split(":")[0];
    }
    this.userService.getUser(this.username).subscribe(data=>{
      this.currentUser =data;
    });
    this.userService.getAccountInfo().subscribe(data=>{
      this.accounts = data
    });
  }

  onFundTransferForm() {
    let account_number = this.fundTransferForm.value.account_number;
    let balance = this.fundTransferForm.value.balance;

    console.log(account_number);
    console.log(balance);
    

    this.account = this.accounts.find(a=> a.account_number === account_number);
    if(this.account) {
      if(this.currentUser.balance<balance){
        alert("You have insufficient account balance");
      }
      else {
        this.userService.FundTransfer(this.currentUser.id,account_number,balance).subscribe();
        alert("You have transferred money successfully.....");
        this.router.navigateByUrl("/");
      }
    }
    else {
      alert("You have entered wrong account number")
    }
  }

}
