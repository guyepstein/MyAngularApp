"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var Workers_component_1 = require("./Worker/Workers.component");
var EditWorkerReactive_component_1 = require("./Worker/EditWorkerReactive.component");
var WorkDemand_component_1 = require("./WorkDemand/WorkDemand.component");
var PageNotFound_component_1 = require("./shared/PageNotFound.component");
exports.router = [
    { path: '', redirectTo: 'Workers', pathMatch: 'full' },
    { path: 'Workers', component: Workers_component_1.WorkersComponent },
    { path: 'EditWorker', component: EditWorkerReactive_component_1.EditWorkerReactive },
    { path: 'EditWorker/:id', component: EditWorkerReactive_component_1.EditWorkerReactive },
    { path: 'WorkDemand', component: WorkDemand_component_1.WorkDemandComponent },
    { path: '**', component: PageNotFound_component_1.PageNotFoundComponent }
];
exports.routes = router_1.RouterModule.forRoot(exports.router);
//# sourceMappingURL=app.router.js.map