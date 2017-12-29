import { Component, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { IWorker, WorkerData } from '../Models/worker.model';
import { WorkerService } from '../Services/WorkerService.service';
import { RouterModule } from '@angular/router';
import { routes } from '../app.router';


@Component({
    selector: 'worker-form',
    //moduleId: module.id,
    templateUrl: 'app/Worker/Workers.component.html',
    styleUrls:[ 'app/Worker/Workers.component.css' ]
})

export class WorkersComponent implements OnInit
{
    constructor(private workerSevice : WorkerService){}
    pageTitle : string = "Helpers list";
    errorMessage:string;
    public SelectedWorker: IWorker;
    Workers : IWorker[];            
   
    ngOnInit() : void
    {
        /*this.workerData.createDb();*/
        this.workerSevice.getWorkers()
            .subscribe(wrkr => this.Workers=wrkr,
            error => this.errorMessage = <any>error);
    }
    showAdditionalData(worker: IWorker) : void
    {
        this.SelectedWorker = worker;
        //this.SelectedWorker.General_Additional_Data = worker.General_Additional_Data;
    }
    hideAdditionalData() : void
    {
        this.SelectedWorker = null;
        alert ('re');
    }
}


