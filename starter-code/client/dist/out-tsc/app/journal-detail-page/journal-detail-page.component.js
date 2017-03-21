var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GetServiceService } from '../get-service.service';
var JournalDetailPageComponent = (function () {
    function JournalDetailPageComponent(myJournalService, myRoute, myNavigator) {
        this.myJournalService = myJournalService;
        this.myRoute = myRoute;
        this.myNavigator = myNavigator;
    }
    JournalDetailPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myRoute.params.subscribe(function (params) {
            _this.getJournalDetails(params['id']);
        });
    };
    JournalDetailPageComponent.prototype.getJournalDetails = function (id) {
        var _this = this;
        this.myJournalService.get(id)
            .then(function (theDetails) {
            _this.journal = theDetails;
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return JournalDetailPageComponent;
}());
JournalDetailPageComponent = __decorate([
    Component({
        selector: 'app-journal-detail-page',
        templateUrl: './journal-detail-page.component.html',
        styleUrls: ['./journal-detail-page.component.css']
    }),
    __metadata("design:paramtypes", [GetServiceService,
        ActivatedRoute,
        Router])
], JournalDetailPageComponent);
export { JournalDetailPageComponent };
//# sourceMappingURL=../../../../src/app/journal-detail-page/journal-detail-page.component.js.map