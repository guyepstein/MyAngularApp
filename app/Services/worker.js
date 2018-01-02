"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var WorkerData = (function () {
    function WorkerData() {
    }
    //constructor(/*private workerService:WorkerService*/){}
    //workers : IWorker[];
    //errorMessage : string;
    WorkerData.prototype.createDb = function () {
        /*this.*/ var workers = [{
                "id": 1,
                "IDNumber": 289156,
                "FirstName": "Guy",
                "LastName": "Epstein",
                "DateOfBirth": "05/10/1971",
                "PhoneNumber1": "08-088808",
                "PhoneNumber2": "052-6321223",
                "General_Additional_Data": "More that 20 years of experiemce"
            },
            {
                "id": 2,
                "IDNumber": 289157,
                "FirstName": "Efraim",
                "LastName": "Levi",
                "DateOfBirth": "05/11/1981",
                "PhoneNumber1": "08-08434348",
                "PhoneNumber2": "052-63213434",
                "General_Additional_Data": "Very thorough worker"
            },
            {
                "id": 3,
                "IDNumber": 289466,
                "FirstName": "Shira",
                "LastName": "Cohen",
                "DateOfBirth": "05/1/1991",
                "PhoneNumber1": "08-45634348",
                "PhoneNumber2": "052-7613434",
                "General_Additional_Data": "Very professional"
            }];
        /*this.workerService.getWorkers()
            .subscribe(wrkr => {this.workers=wrkr; },
            error => this.errorMessage = <any>error);*/
        return { workers: workers };
    };
    return WorkerData;
}());
WorkerData = __decorate([
    core_1.Injectable()
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
//# sourceMappingURL=worker.js.map