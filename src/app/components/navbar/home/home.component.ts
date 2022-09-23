import { Component, OnInit } from '@angular/core';
import { appServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class navbarHomeComponent implements OnInit {

  loggedIn: boolean;
  constructor(private appService :appServiceService) { }

  ngOnInit(): void {
     this.appService.loggedIn.subscribe(data=>{
      this.loggedIn=data; 
    });
  }

}
