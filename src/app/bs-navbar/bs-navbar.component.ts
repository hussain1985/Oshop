import { Component } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {observableToBeFn} from 'rxjs/testing/TestScheduler';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../auth.service';
import {AppUser} from '../models/user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  appUser: AppUser;
  //user: firebase.User;
  constructor(public auth: AuthService) {

    //afAuth.authState.subscribe(user => this.user = user);
    auth.appUser$.subscribe(appuser => this.appUser = appuser);
  }

  logout() {
  this.auth.logout();
  }

}
