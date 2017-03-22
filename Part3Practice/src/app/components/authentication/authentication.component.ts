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
  user: any;

  constructor(public userService: UserService ) { }

  ngOnInit() {  }

  register() {
    this.userService.register(this.email.toString(), this.password.toString());
  }

}
