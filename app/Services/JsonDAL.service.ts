import { Injectable } from '@angular/core'
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
//import { IKeyValuePair } from '../Models/General.Model';
import 'rxjs/add/operator/catch';
/*import 'rxjs/add/operator/do';*/
import 'rxjs/add/operator/map';

@Injectable()
export class JsonDaL 
{
    //private areasAndLocationsURL = "api/WorkerDemand/AreasAndLocation.json";
    constructor (private _url: string, private _http:Http)
    {

    }

    get Http(): Http
    {
        return this._http;
    }
    get Url():string
    {
        return this._url;
    }



    getJsonData() : Observable<any[]>
    {
        return this.Http.get(this.Url).map((response: Response) => <any[]> response.json());        
    }

    

    /*
    constructor(private _http: Http) {}
    GetAreasAndLocations():Observable<IKeyValuePair[]> {
        return this._http.get(this.areasAndLocationsURL)
        .map((response : Response) => <IKeyValuePair[]> response.json());
    }*/

} 