import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  email: String;
  password: String;
  verifyPassword: String;
  test: String;
  user: any;

  loginError: String;
  registrationError: String;

  constructor(public userService: UserService ) { }

  ngOnInit() {  }

  login() {
    this.userService.login(this.email.toString(), this.password.toString())
      .then((res) => {
        if(res) {
          this.loginError = res.message;
        }
    });
  }

  register() {
    this.registrationError = '';

    if(this.password.toString() != this.verifyPassword.toString()) {
      this.registrationError = "Passwords do not match.";
      return;
    }

    this.userService.register(this.email.toString(), this.password.toString())
      .then((res) => {
        if(res) {
          this.registrationError = res.message;
        }
      })
  }

}
