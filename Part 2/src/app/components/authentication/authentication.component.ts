import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  email: String;
  password: String;

  constructor(public angularFire: AngularFire) { }

  ngOnInit() {
  }

  register() {
    this.angularFire.auth.createUser({
      email: this.email.toString(),
      password: this.password.toString()
    });
  }

}
