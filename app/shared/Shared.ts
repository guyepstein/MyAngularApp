import { Observable } from 'rxjs/Observable';   

export class Shared
{
    private handleError( error:Response)
    {
        console.error(error);
        return Observable.throw(error.json()/*.error*/ || 'Server Error');    
    }
}