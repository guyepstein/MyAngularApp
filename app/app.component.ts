import { Component } from '@angular/core';
import { WorkerService } from './Services/WorkerService.Service';
/*import { WorkDemandService } from '/Services/Worker-service.Service';*/

@Component({
     selector: 'omh-app',
     /*template: `
        <h1>One More Hand</h1>
        // <work-demand><\work-demand>
        <edit-worker-reactive></edit-worker-reactive>
    `*/
    templateUrl: 'app/app.component.html',
    providers: [WorkerService]
})
export class AppComponent { }
