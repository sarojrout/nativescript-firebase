import { Component } from "@angular/core";
import { Location } from "@angular/common";
import * as ApplicationSettings from "application-settings";
import {FirebaseService} from '../../services/firebase.service';
import {User} from '../../models/user.model';

@Component({
    moduleId: module.id,
    selector: "rr-register",
    templateUrl: "register.component.html",
})
export class RegisterComponent {
    isAuthenticating = false;
    public user: User;

    public constructor(private location: Location, private firebaseService: FirebaseService) {

        this.user = new User();
    }

    public goBack() {
        this.location.back();
    }
    signUp() {
    this.firebaseService.register(this.user)
      .then(() => {
        this.isAuthenticating = false;
        this.location.back();
      //  this.toggleDisplay();
      })
      .catch((message:any) => {
        alert(message);
        this.isAuthenticating = false;
      });
  }

}
