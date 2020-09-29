import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../Services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  loggedInUser:string;
  constructor(private alertify:AlertifyService) { }

  ngOnInit() {
  }

  Loggedin(){
    this.loggedInUser= localStorage.getItem('token');
    return this.loggedInUser;
  }
  OnLogout(){
    localStorage.removeItem('token');
    this.alertify.success('You are logged out now!');
  }
}
