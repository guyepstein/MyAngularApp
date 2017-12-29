"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WorkerService_service_1 = require("../Services/WorkerService.service");
var WorkersComponent = (function () {
    function WorkersComponent(workerSevice) {
        this.workerSevice = workerSevice;
        this.pageTitle = "Helpers list";
    }
    WorkersComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*this.workerData.createDb();*/
        this.workerSevice.getWorkers()
            .subscribe(function (wrkr) { return _this.Workers = wrkr; }, function (error) { return _this.errorMessage = error; });
    };
    WorkersComponent.prototype.showAdditionalData = function (worker) {
        this.SelectedWorker = worker;
        //this.SelectedWorker.General_Additional_Data = worker.General_Additional_Data;
    };
    WorkersComponent.prototype.hideAdditionalData = function () {
        this.SelectedWorker = null;
        alert('re');
    };
    return WorkersComponent;
}());
WorkersComponent = __decorate([
    core_1.Component({
        selector: 'worker-form',
        //moduleId: module.id,
        templateUrl: 'app/Worker/Workers.component.html',
        styleUrls: ['app/Worker/Workers.component.css']
    }),
    __metadata("design:paramtypes", [WorkerService_service_1.WorkerService])
], WorkersComponent);
exports.WorkersComponent = WorkersComponent;
//# sourceMappingURL=Workers.component.js.map