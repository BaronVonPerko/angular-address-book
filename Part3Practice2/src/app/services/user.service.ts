import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Injectable()
export class UserService {

  public user: any;

  constructor(private angularFire: AngularFire) {
    this.angularFire.auth.subscribe(auth => this.user = auth);
  }

  register(email, password): Promise<any> {
    var promise = new Promise((res, rej) => {
      this.angularFire.auth.createUser({
        email,
        password
      })
      .then(_ => {
        res();
      })
      .catch(err => {
        res(err);
      })
    });

    return promise;
  }

  login(email, password): Promise<any> {
    var promise = new Promise((res, rej) => {
      this.angularFire.auth.login({
        email,
        password
      })
      .then(_ => {
        res();
      })
      .catch(err => {
        res(err);
      });
    });

    return promise;
  }

  logout() {
    this.angularFire.auth.logout();
  }

}
