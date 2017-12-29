import { Injectable } from '@angular/core'
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { IWorker } from '../Models/worker.model';
//import { Workers } from '../Models/worker.model';
//import { WorkDemand } from '../Models/WorkDemand.Model';
import { IKeyValuePair } from '../Models/General.Model';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkDemandService 
{
    private areasAndLocationsURL = "api/WorkerDemand/AreasAndLocation.json";
    constructor(private _http: Http) {}
    GetAreasAndLocations():Observable<IKeyValuePair[]> {
        return this._http.get(this.areasAndLocationsURL)
        .map((response : Response) => <IKeyValuePair[]> response.json());
    }

} 