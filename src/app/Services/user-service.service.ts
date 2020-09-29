import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

constructor() { }
AddUser(user:User){
  let users=[];
  if(localStorage.getItem('users')){
    users=JSON.parse(localStorage.getItem('users'));
    users=[user,...users];
  }
  else{
    users=[user];
  }
  localStorage.setItem('users',JSON.stringify(users));
}
}
