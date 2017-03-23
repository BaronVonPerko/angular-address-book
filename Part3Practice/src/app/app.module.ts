import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FirebaseConfig } from './firebase-config';

import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthenticationComponent } from './components/authentication/authentication.component';

import { UserService } from './services/user.service';
import { NavbarComponent } from './components/navbar/navbar.component';

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(FirebaseConfig.myFirebaseConfig, myFirebaseAuthConfig)
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }
