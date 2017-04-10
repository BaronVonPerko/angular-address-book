import { Component, OnInit } from '@angular/core';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'register-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    UserService
  ]
})
export class RegisterComponent implements OnInit {
  email: String;
  password: String;
  confirmPassword: String;
  error: String;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  register() {
    this.error = '';

    if(!this.email) {
      this.error = 'Please enter an email.';
      return;
    }

    if(!this.password) {
      this.error = 'Please enter a password.';
      return;
    }

    if(this.password !== this.confirmPassword) {
      this.error = 'Passwords do not match.';
      return;
    }

    this.userService.register(this.email, this.password).then(res => {
      if(res.message) { this.error = res.message; }
    });
  }

}
