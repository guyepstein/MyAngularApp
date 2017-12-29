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
var WorkerData = (function () {
    function WorkerData(workerService) {
        this.workerService = workerService;
    }
    WorkerData.prototype.createDb = function (reqInfo) {
        var _this = this;
        this.workerService.getWorkers()
            .subscribe(function (wrkr) { _this.workers = wrkr; }, function (error) { return _this.errorMessage = error; });
        return this.workers;
    };
    return WorkerData;
}());
WorkerData = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [WorkerService_service_1.WorkerService])
], WorkerData);
exports.WorkerData = WorkerData;
var Worker = (function () {
    /*id: number;
    IDNumber: number;
    FirstName?:string;
    LastName?:string;
    Email? : string;
    DateOfBirth?: string;
    PhoneNumber1?: string;
    PhoneNumber2?: string;
    Street1? :string;
    Street2?: string;
    City?: string;
    Zip?:number;
    General_Additional_Data?: string;*/
    function Worker(id, IDNumber, FirstName, LastName, Email, DateOfBirth, PhoneNumber1, PhoneNumber2, Street1, Street2, City, Zip, General_Additional_Data) {
        if (id === void 0) { id = -1; }
        if (IDNumber === void 0) { IDNumber = -1; }
        this.id = id;
        this.IDNumber = IDNumber;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.DateOfBirth = DateOfBirth;
        this.PhoneNumber1 = PhoneNumber1;
        this.PhoneNumber2 = PhoneNumber2;
        this.Street1 = Street1;
        this.Street2 = Street2;
        this.City = City;
        this.Zip = Zip;
        this.General_Additional_Data = General_Additional_Data;
    }
    return Worker;
}());
exports.Worker = Worker;
//# sourceMappingURL=worker.model.js.map