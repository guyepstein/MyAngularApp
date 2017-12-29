import { Injectable } from '@angular/core';
import { InMemoryDbService,RequestInfo } from 'angular-in-memory-web-api';
import { WorkerService } from '../Services/WorkerService.service';

export interface IWorker
{
    id: number;
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
    General_Additional_Data?: string;
}

@Injectable()
export class WorkerData implements InMemoryDbService
{
    constructor(private workerService:WorkerService){}
    workers : IWorker[];
    errorMessage : string;
    createDb(reqInfo?: RequestInfo)
    {
        this.workerService.getWorkers()
            .subscribe(wrkr => {this.workers=wrkr; },
            error => this.errorMessage = <any>error);
        return this.workers;
    }
    /*static initializeWorker() : IWorker
    {
        return 
        {
            id: number = -1;

        };
    }*/
}


export class Worker implements IWorker{
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
    constructor(
        public id =-1,
        public IDNumber = -1,
        public FirstName?:string,
        public LastName?:string,
        public Email? : string,
        public DateOfBirth?: string,
        public PhoneNumber1?: string,
        public PhoneNumber2?: string,
        public Street1? :string,
        public Street2?: string,
        public City?: string,
        public Zip?:number,
        public General_Additional_Data?: string
    ){}
    /*
    constructor(
     public id = -1,
     public IDNumber = -1,
     public FirstName? : string ,
     public LastName? : string,
     public Email? : string ,
     public DateOfBirth? : string,
     public PhoneNumber1? : string, 
     public PhoneNumber2? : string,
     public Street1? : string,
     public Street2? : string,
     public City? : string,
     public Zip? : number,
     public General_Additional_Data = '' 
    )
    { }*/
}