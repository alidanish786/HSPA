import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  FormBuilder,  FormControl,  FormGroup,  Validators,} from '@angular/forms';
import { User } from 'src/app/model/User';
import { UserServiceService } from 'src/app/Services/user-service.service';
import * as alertyfy from 'alertifyjs';
import { AlertifyService } from 'src/app/Services/alertify.service';
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  userSubmitted: boolean;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService,
    private alertifyService:AlertifyService
  ) {}
  registrationForm: FormGroup;
  user: any = {};
  ngOnInit() {
    this.registrationForm = new FormGroup(
      {
        userName: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmPassword: new FormControl(null, [Validators.required]),
        mobile: new FormControl(null, [
          Validators.required,
          Validators.maxLength(10),
        ]),
      },
      this.passwordMatchingValidator
    );

    // this.registrationForm=this.fb.group({
    //   userName:[null,Validators.required],
    //   email:[null,Validators.required,Validators.email],
    //   password:[null,Validators.required,Validators.minLength(6)],
    //   confirmPassword:[null,Validators.required],
    //   mobile:[null,Validators.required,Validators.maxLength(10)],
    // },{Validators:this.passwordMatchingValidator})
    //},this.passwordMatchingValidator)
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value
      ? null
      : { notmatched: true };
  }

  onSubmit() {
    debugger;
    console.log(this.registrationForm);
    this.userSubmitted = true;
    // this.findInvalidControls();
    if (this.registrationForm.valid) {
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.user = this.UserData();
      this.userService.AddUser(this.user);
      this.userSubmitted = false;
      this.onReset();
      this.alertifyService.success('Congrats! your data has been saved!');
    }
    else{
      this.alertifyService.error('Please provide correct data!');
    }
  }

  onReset() {
    this.userSubmitted = false;
    this.registrationForm.reset();
  }

  UserData(): User {
    let user: User;
    return (user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value,
    });
  }

  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
}
