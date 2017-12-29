import { Component } from '@angular/core';
//import { FormsModule} from '@angular/forms';
//import { IWorker } from '../Models/worker.model';
import { WorkDemandService } from '../Services/WorkDemandService.service';
import { WorkDemandModel } from '../Models/WorkDemand.model';

@Component({
    selector: 'work-demand',
    //moduleId: module.id,
    //templateUrl: 'app/WorkDemand/WorkDemand.component.html',
    templateUrl:'app/Worker/EditWorker.component.html'/*,
    styleUrls:[ 'app/Worker/EditWorker.component.css' ]*/
    //styleUrls:[ 'app/WorkDemand/WorkDemand.component.css' ]
})

export class WorkDemandComponent
{
    public WorkDemand : WorkDemandModel;
}