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
  user: any;

  constructor(public angularFire: AngularFire) { }

  ngOnInit() {
    this.angularFire.auth.subscribe(auth => this.user = auth);
  }

  register() {
    this.angularFire.auth.createUser({
      email: this.email.toString(),
      password: this.password.toString()
    });
  }

}
