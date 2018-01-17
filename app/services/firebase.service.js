"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("nativescript-plugin-firebase");
var core_1 = require("@angular/core");
var FirebaseService = (function () {
    function FirebaseService(ngZone) {
        this.ngZone = ngZone;
    }
    FirebaseService.prototype.register = function (user) {
        return firebase.createUser({
            email: user.email,
            password: user.password
        }).then(function (result) {
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService.prototype.login = function (user) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: user.email,
                password: user.password
            }
        }).then(function (result) {
            return JSON.stringify(result);
        }, function (errorMessage) {
            alert(errorMessage);
        });
    };
    FirebaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1REFBMEQ7QUFDMUQsc0NBQWlEO0FBR2pEO0lBQ0UseUJBQ1UsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFHeEIsQ0FBQztJQUVELGtDQUFRLEdBQVIsVUFBUyxJQUFVO1FBQ2YsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDLENBQUMsSUFBSSxDQUNELFVBQVUsTUFBVTtZQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLEVBQ0QsVUFBVSxZQUFnQjtZQUN4QixLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUNKLENBQUE7SUFDTCxDQUFDO0lBRUgsK0JBQUssR0FBTCxVQUFNLElBQVU7UUFDZCxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNwQixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTthQUN4QjtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFXO1lBQ2QsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsQ0FBQyxFQUFFLFVBQUMsWUFBaUI7WUFDbkIsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWpDVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBR08sYUFBTTtPQUZiLGVBQWUsQ0FtQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQW5DRCxJQW1DQztBQW5DWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuaW1wb3J0IHtJbmplY3RhYmxlLCBOZ1pvbmV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gJy4uL21vZGVscy91c2VyLm1vZGVsJztcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxuICApe1xuXG4gIH1cblxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XG4gICAgICByZXR1cm4gZmlyZWJhc2UuY3JlYXRlVXNlcih7XG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgfSkudGhlbihcbiAgICAgICAgICAgIGZ1bmN0aW9uIChyZXN1bHQ6YW55KSB7XG4gICAgICAgICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlcnJvck1lc3NhZ2U6YW55KSB7XG4gICAgICAgICAgICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgbG9naW4odXNlcjogVXNlcikge1xuICAgIHJldHVybiBmaXJlYmFzZS5sb2dpbih7XG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXG4gICAgICBwYXNzd29yZE9wdGlvbnM6IHtcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICB9XG4gICAgfSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcbiAgICAgIH0sIChlcnJvck1lc3NhZ2U6IGFueSkgPT4ge1xuICAgICAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgICAgfSk7XG4gIH1cbiAgXG59XG4iXX0=