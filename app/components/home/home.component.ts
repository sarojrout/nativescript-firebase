import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as ApplicationSettings from "application-settings";

@Component({
    moduleId: module.id,
    selector: "RR-secure",
    templateUrl: "home.component.html",
})
export class HomeComponent implements OnInit {

    public constructor(private router: RouterExtensions) { }

    public ngOnInit() {
        if(!ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/login"], { clearHistory: true });
        }
    }

    public logout() {
        ApplicationSettings.remove("authenticated");
        this.router.navigate(["/login"], { clearHistory: true });
    }

}
