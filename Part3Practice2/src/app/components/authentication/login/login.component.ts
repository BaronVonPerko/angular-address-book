import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;
  error: String;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.error = '';

    if(!this.email) {
      this.error = 'Please enter your email.';
      return;
    }

    if(!this.password) {
      this.error = 'Please enter your password.';
      return;
    }

    this.userService.login(this.email, this.password)
    .then(res => {
      if(res && res.message) this.error = res.message;
    });
  }

}
