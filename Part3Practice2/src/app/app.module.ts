import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FirebaseConfig } from './firebase-config';

import { AppComponent } from './app.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { AuthenticationComponent } from './components/authentication/authentication.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MdButtonModule, MdInputModule, MdTabsModule, MdToolbarModule } from '@angular/material';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    AngularFireModule.initializeApp(FirebaseConfig.myFirebaseConfig, myFirebaseAuthConfig),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdButtonModule,
    MdInputModule,
    MdTabsModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
