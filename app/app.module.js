"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_js_1 = require("./app.component.js");
var Workers_component_1 = require("./Worker/Workers.component");
var WorkDemand_component_1 = require("./WorkDemand/WorkDemand.component");
var EditWorker_component_1 = require("./Worker/EditWorker.component");
var EditWorkerReactive_component_1 = require("./Worker/EditWorkerReactive.component");
var WorkerService_service_1 = require("./Services/WorkerService.service");
var WorkDemandService_service_1 = require("./Services/WorkDemandService.service");
var PageNotFound_component_1 = require("./shared/PageNotFound.component");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_router_1 = require("./app.router");
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, router_1.RouterModule, app_router_1.routes /*,
            RouterModule.forRoot(
              [
                { path: '',  component: WorkersComponent },
                { path: 'EditWorker', component: EditWorkerReactive}
              ]
            )*/
            /*, InMemoryWebApiModule.forRoot(WorkerData)*/ 
        ],
        declarations: [app_component_js_1.AppComponent, Workers_component_1.WorkersComponent, WorkDemand_component_1.WorkDemandComponent, EditWorker_component_1.EditWorker, EditWorkerReactive_component_1.EditWorkerReactive, Workers_component_1.WorkersComponent, WorkDemand_component_1.WorkDemandComponent, PageNotFound_component_1.PageNotFoundComponent],
        providers: [WorkerService_service_1.WorkerService, WorkDemandService_service_1.WorkDemandService],
        bootstrap: [app_component_js_1.AppComponent /*EditWorkerReactive*/ /*EditWorker*/ /*WorkersComponent*/]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map