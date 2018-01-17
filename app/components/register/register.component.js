"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var firebase_service_1 = require("../../services/firebase.service");
var user_model_1 = require("../../models/user.model");
var RegisterComponent = (function () {
    function RegisterComponent(location, firebaseService) {
        this.location = location;
        this.firebaseService = firebaseService;
        this.isAuthenticating = false;
        // this.input = {
        //     "firstname": "",
        //     "lastname": "",
        //     "email": "",
        //     "password": ""
        // }
        this.user = new user_model_1.User();
    }
    // public register() {
    //     if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
    //         ApplicationSettings.setString("account", JSON.stringify(this.input));
    //         this.location.back();
    //     } else {
    //         (new SnackBar()).simple("All Fields Required!");
    //     }
    // }
    RegisterComponent.prototype.goBack = function () {
        this.location.back();
    };
    RegisterComponent.prototype.signUp = function () {
        var _this = this;
        this.firebaseService.register(this.user)
            .then(function () {
            _this.isAuthenticating = false;
            _this.location.back();
            //  this.toggleDisplay();
        })
            .catch(function (message) {
            alert(message);
            _this.isAuthenticating = false;
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "rr-register",
            templateUrl: "register.component.html",
        }),
        __metadata("design:paramtypes", [common_1.Location, firebase_service_1.FirebaseService])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBDQUEyQztBQUczQyxvRUFBZ0U7QUFDaEUsc0RBQTZDO0FBTzdDO0lBSUksMkJBQTJCLFFBQWtCLEVBQVUsZUFBZ0M7UUFBNUQsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUh2RixxQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFJckIsaUJBQWlCO1FBQ2pCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixJQUFJO1FBQ0osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0JBQXNCO0lBQ3RCLG1HQUFtRztJQUNuRyxnRkFBZ0Y7SUFDaEYsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZiwyREFBMkQ7SUFDM0QsUUFBUTtJQUNSLElBQUk7SUFFRyxrQ0FBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ0Qsa0NBQU0sR0FBTjtRQUFBLGlCQVdEO1FBVkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNyQyxJQUFJLENBQUM7WUFDSixLQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkIseUJBQXlCO1FBQ3pCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFDLE9BQVc7WUFDakIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2YsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFyQ1UsaUJBQWlCO1FBTDdCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO3lDQUt1QyxpQkFBUSxFQUEyQixrQ0FBZTtPQUo5RSxpQkFBaUIsQ0F1QzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XG5pbXBvcnQgeyBTbmFja0JhciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtc25hY2tiYXJcIjtcbmltcG9ydCAqIGFzIEFwcGxpY2F0aW9uU2V0dGluZ3MgZnJvbSBcImFwcGxpY2F0aW9uLXNldHRpbmdzXCI7XG5pbXBvcnQge0ZpcmViYXNlU2VydmljZX0gZnJvbSAnLi4vLi4vc2VydmljZXMvZmlyZWJhc2Uuc2VydmljZSc7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uLy4uL21vZGVscy91c2VyLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJyci1yZWdpc3RlclwiLFxuICAgIHRlbXBsYXRlVXJsOiBcInJlZ2lzdGVyLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IHtcbiAgICBpc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgcHVibGljIHVzZXI6IFVzZXI7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb24sIHByaXZhdGUgZmlyZWJhc2VTZXJ2aWNlOiBGaXJlYmFzZVNlcnZpY2UpIHtcbiAgICAgICAgLy8gdGhpcy5pbnB1dCA9IHtcbiAgICAgICAgLy8gICAgIFwiZmlyc3RuYW1lXCI6IFwiXCIsXG4gICAgICAgIC8vICAgICBcImxhc3RuYW1lXCI6IFwiXCIsXG4gICAgICAgIC8vICAgICBcImVtYWlsXCI6IFwiXCIsXG4gICAgICAgIC8vICAgICBcInBhc3N3b3JkXCI6IFwiXCJcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyByZWdpc3RlcigpIHtcbiAgICAvLyAgICAgaWYodGhpcy5pbnB1dC5maXJzdG5hbWUgJiYgdGhpcy5pbnB1dC5sYXN0bmFtZSAmJiB0aGlzLmlucHV0LmVtYWlsICYmIHRoaXMuaW5wdXQucGFzc3dvcmQpIHtcbiAgICAvLyAgICAgICAgIEFwcGxpY2F0aW9uU2V0dGluZ3Muc2V0U3RyaW5nKFwiYWNjb3VudFwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmlucHV0KSk7XG4gICAgLy8gICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICAgIChuZXcgU25hY2tCYXIoKSkuc2ltcGxlKFwiQWxsIEZpZWxkcyBSZXF1aXJlZCFcIik7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBwdWJsaWMgZ29CYWNrKCkge1xuICAgICAgICB0aGlzLmxvY2F0aW9uLmJhY2soKTtcbiAgICB9XG4gICAgc2lnblVwKCkge1xuICAgIHRoaXMuZmlyZWJhc2VTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5pc0F1dGhlbnRpY2F0aW5nID0gZmFsc2U7XG4gICAgICAgIHRoaXMubG9jYXRpb24uYmFjaygpO1xuICAgICAgLy8gIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgobWVzc2FnZTphbnkpID0+IHtcbiAgICAgICAgYWxlcnQobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgfSk7XG4gIH1cblxufVxuIl19