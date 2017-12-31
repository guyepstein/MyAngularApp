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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var JsonDAL_service_1 = require("./JsonDAL.service");
//import { Workers } from '../Models/worker.model';
require("rxjs/add/operator/catch");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/of");
var WorkerService = (function () {
    function WorkerService(_http) {
        this._http = _http;
        this._workerURL = 'api/Worker/Worker.json';
        this._singleWorkerURL = this._workerURL + "/" + this.id;
    }
    WorkerService.prototype.getWorkers = function () {
        var jsonDal = new JsonDAL_service_1.JsonDaL(this._workerURL, this._http);
        return jsonDal.getJsonData();
        /*return this._http.get(this._workerURL)
        .map((response : Response) => <IWorker[]> response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))//Here we can write to the log
        .catch(this.handleError);*/
    };
    WorkerService.prototype.getWorker = function (id) {
        if (id === 0) {
            return this.getWorkers();
            //return Observable.of(this.initializeWorker());
            /*return Observable.create((observer: any) =>
             {
                 observer.next(this.initializeWorker());
                 observer.complete();
             });*/
        }
        var url = this._singleWorkerURL;
        return this._http.get(url)
            .map(this.extractData)
            .do(function (data) { return console.log('getWorker: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    WorkerService.prototype.initializeWorker = function () {
        return null;
        /*{
            id:0,
            IDNumber: 0,
            FirstName:null,
            LastName:null,
            DateOfBirth: null,
            PhoneNumber1: null,
            PhoneNumber2: null,
            General_Additional_Data: null
        };*/
    };
    WorkerService.prototype.extractData = function (response) {
        var body = response.json;
        return body || {};
    };
    WorkerService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server Error');
    };
    return WorkerService;
}());
WorkerService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], WorkerService);
exports.WorkerService = WorkerService;
//# sourceMappingURL=WorkerService.Service.js.map