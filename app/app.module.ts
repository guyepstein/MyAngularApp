import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component.js';
import { WorkersComponent } from './Worker/Workers.component';
//import { WorkerData } from './Models/worker.model';
//import { WorkerData } from './Services/worker.model';
import { WorkerData } from './Services/worker';
import { WorkDemandComponent } from './WorkDemand/WorkDemand.component';
import { EditWorker } from './Worker/EditWorker.component';
import { EditWorkerReactive } from './Worker/EditWorkerReactive.component';
import { WorkerService } from './Services/WorkerService.service';
import { WorkDemandService } from './Services/WorkDemandService.service';
import { PageNotFoundComponent } from './shared/PageNotFound.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.router';
import {InMemoryWebApiModule } from 'angular-in-memory-web-api';


@NgModule({
  imports: [ BrowserModule, HttpModule, ReactiveFormsModule, FormsModule, RouterModule, routes/*,
  RouterModule.forRoot(
    [
      { path: '',  component: WorkersComponent },
      { path: 'EditWorker', component: EditWorkerReactive}
    ]
  )*/

  , InMemoryWebApiModule.forRoot(WorkerData) ],
  declarations: [ AppComponent, WorkersComponent, WorkDemandComponent, EditWorker, EditWorkerReactive, WorkersComponent, WorkDemandComponent, PageNotFoundComponent ],
  providers: [ WorkerService, WorkDemandService ],
  bootstrap: [ AppComponent/*EditWorkerReactive*//*EditWorker*//*WorkersComponent*/  ]
})
export class AppModule { }
