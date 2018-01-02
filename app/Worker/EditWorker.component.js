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
//import { IWorker, Worker } from '../Models/worker.model';
//import { IWorker, Worker } from '../Services/worker.model';
//import { IWorker, Worker } from '../Services/worker.model';
var worker_1 = require("../Services/worker");
var EditWorker = (function () {
    function EditWorker() {
        this.worker = new worker_1.Worker();
        this.worker = new worker_1.Worker();
    }
    EditWorker.prototype.ngOnInit = function () {
        //this.worker = new Worker();
    };
    /*
    ngOnInit()
    {
         var observable1 = this.route.params.subscribe(
            params =>
            {
                let id = params['id'];
                this.getWorker(id);
            }
        );
    }
    getWorker(id : number) : void
    {
        this.workerService.getWorker(id).subscribe((wrkr : IWorker) => this.onWorkerRetrieved(wrkr),
                                                   ( error: any) => this.errorMessage = <any> error);
    }
    onWorkerRetrieved(wrkr : IWorker)
    {
        this.worker = wrkr;
    }*/
    EditWorker.prototype.save = function (model) {
        alert('test');
    };
    return EditWorker;
}());
EditWorker = __decorate([
    core_1.Component({
        selector: 'edit-worker',
        templateUrl: 'app/Worker/EditWorker.component.html',
    }),
    __metadata("design:paramtypes", [])
], EditWorker);
exports.EditWorker = EditWorker;
//# sourceMappingURL=EditWorker.component.js.map