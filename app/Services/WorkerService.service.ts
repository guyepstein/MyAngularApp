import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { IWorker, WorkerData } from '../Models/worker.model';
//import { IWorker, WorkerData } from '../Services/worker.model';
//import { IWorker, WorkerData } from '../Services/worker';
import { IWorker, WorkerData } from './worker';
import { Shared } from '../shared/shared';
import {JsonDaL } from './JsonDAL.service';
//import { Workers } from '../Models/worker.model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

@Injectable()

export class WorkerService
{
    //private _workerURL = 'api/Worker/Worker.json';
    private _workerURL = 'api/workers';
    private id :number;
    private _singleWorkerURL = `${this._workerURL}/${this.id}`;

    constructor (private _http: Http){}

    get singleWorkerURL() : string
    {
        //return this._singleWorkerURL;
        return `${this._workerURL}/${this.id}`;
    }
    getWorkers(): Observable<IWorker[]>
    {
        /*let jsonDal = new JsonDaL(this._workerURL, this._http);
        return jsonDal.getJsonData();*/
        return this._http.get(this._workerURL)
        .map((response : Response) => <IWorker[]> response.json().data)
        .do(data => console.log('All: ' + JSON.stringify(data)))//Here we can write to the log
        .catch(this.handleError);
    }
    
    
    getWorker(id : number) : Observable<IWorker>
    {
        // if (id ===0)
        // {
        //    return this.getWorkers();
        //    //return Observable.of(this.initializeWorker());
        //    /*return Observable.create((observer: any) => 
        //     {
        //         observer.next(this.initializeWorker());
        //         observer.complete();
        //     });*/
        // }
        this.id =  +id;
        const url = this.singleWorkerURL;
        return this._http.get(url)
            .map((response : Response) => /*this.extractData(response)*/response.json().data)
            .do(response => console.log('getWorker: ' + JSON.stringify(response)))
            .catch(this.handleError);
    }
   
    
    initializeWorker() : /*IWorker*/any
    {
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
        
    }

    private extractData(response : Response)
    {
        let body = response.json;
        return body || {};
    }
    private handleError( error:Response)
    {
        console.error(error);
        return Observable.throw(error.json().error || 'Server Error');    
    }
}
