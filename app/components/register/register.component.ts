import { Component } from "@angular/core";
import { Location } from "@angular/common";
import { SnackBar } from "nativescript-snackbar";
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
        // this.input = {
        //     "firstname": "",
        //     "lastname": "",
        //     "email": "",
        //     "password": ""
        // }
        this.user = new User();
    }

    // public register() {
    //     if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
    //         ApplicationSettings.setString("account", JSON.stringify(this.input));
    //         this.location.back();
    //     } else {
    //         (new SnackBar()).simple("All Fields Required!");
    //     }
    // }

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
