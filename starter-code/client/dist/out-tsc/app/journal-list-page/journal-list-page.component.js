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
import { GetServiceService } from '../get-service.service';
var JournalListPageComponent = (function () {
    function JournalListPageComponent(myJournalService) {
        this.myJournalService = myJournalService;
        this.journals = [];
        this.errorMessage = '';
    }
    JournalListPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myJournalService.getList()
            .then(function (journalList) {
            _this.journals = journalList;
        })
            .catch(function (err) {
            _this.errorMessage = 'There was an error. Try Again';
        });
    };
    return JournalListPageComponent;
}());
JournalListPageComponent = __decorate([
    Component({
        selector: 'app-journal-list-page',
        templateUrl: './journal-list-page.component.html',
        styleUrls: ['./journal-list-page.component.css']
    }),
    __metadata("design:paramtypes", [GetServiceService])
], JournalListPageComponent);
export { JournalListPageComponent };
//# sourceMappingURL=../../../../src/app/journal-list-page/journal-list-page.component.js.map