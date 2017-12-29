"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WorkDemandComponent = (function () {
    function WorkDemandComponent() {
    }
    return WorkDemandComponent;
}());
WorkDemandComponent = __decorate([
    core_1.Component({
        selector: 'work-demand',
        //moduleId: module.id,
        //templateUrl: 'app/WorkDemand/WorkDemand.component.html',
        templateUrl: 'app/Worker/EditWorker.component.html' /*,
        styleUrls:[ 'app/Worker/EditWorker.component.css' ]*/
        //styleUrls:[ 'app/WorkDemand/WorkDemand.component.css' ]
    })
], WorkDemandComponent);
exports.WorkDemandComponent = WorkDemandComponent;
//# sourceMappingURL=WorkDemand.component.js.map