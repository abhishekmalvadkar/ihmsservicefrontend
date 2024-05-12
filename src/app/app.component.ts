import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ihmsservicefrontend';
  user : any;
  isLoggedIn = false;

  constructor(public auth: AngularFireAuth) {}

  signInWithGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((result) => {
        this.user = result.additionalUserInfo?.profile;
        this.isLoggedIn = true;
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  }

}
