import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/Services/alertify.service';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private auth:AuthService,private alertify:AlertifyService,private router:Router) { }

  ngOnInit() {
  }
  onLogin(formData){
    let token=this.auth.authUser(formData.value);
    if(token){
      this.alertify.success('Log in successfull');
      localStorage.setItem('token',token.userName);
      this.router.navigate(['/']);
    }
    else{
      this.alertify.error('Log in failed');
    }
  }

}
