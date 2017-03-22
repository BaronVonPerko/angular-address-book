import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';


@Injectable()
export class UserService {

  public user: any;

  constructor(private angularFire: AngularFire) { 
    this.angularFire.auth.subscribe(auth => this.user = auth);
  }

  register(email, password) {
    this.angularFire.auth.createUser({
      email,
      password
    });
  }

  logout() {
    this.angularFire.auth.logout();
  }


}
