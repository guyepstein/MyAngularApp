import { Component, OnInit } from '@angular/core';
import { WorkerService } from '../Services/WorkerService.service';
//import { IWorker, Worker } from '../Models/worker.model';
//import { IWorker, Worker } from '../Services/worker.model';
//import { IWorker, Worker } from '../Services/worker.model';
import { IWorker, Worker } from '../Services/worker';
import { ActivatedRoute/*, Router*/ } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
    selector: 'edit-worker',
    templateUrl: 'app/Worker/EditWorker.component.html',
    /*styleUrls:[ 'app/Worker/Workers.component.css' ]*/
})

export class EditWorker /*implements OnInit*/
{
    worker : Worker = new Worker();
    
    constructor()
    {
        this.worker = new Worker();
    }
    /*
    constructor(private workerService : WorkerService, private route : ActivatedRoute )
    {
         this.worker = new Worker();
    }*/
   
    errorMessage : any;
    pageTitle: "Edit Worker";
    ngOnInit()
    {
        //this.worker = new Worker();
    }
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
    save(model : NgForm)
    {
        alert ('test');
    }
}                   
   