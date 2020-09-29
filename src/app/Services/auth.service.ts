import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser(user:any){
  let userData=[];
  userData=JSON.parse(localStorage.getItem('users'));
  return userData.find(u=>u.userName===user.userName && u.password===user.password);;
}
}
