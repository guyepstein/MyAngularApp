import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkersComponent } from './Worker/Workers.component';
import { EditWorkerReactive } from './Worker/EditWorkerReactive.component';
import { WorkDemandComponent } from './WorkDemand/WorkDemand.component';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './shared/PageNotFound.component';
export const router: Routes = [
  { path: '', redirectTo: 'Workers', pathMatch:'full' },
  { path: 'Workers', component: WorkersComponent },
  { path: 'EditWorker', component: EditWorkerReactive},
  { path: 'EditWorker/:id', component: EditWorkerReactive},
  { path: 'WorkDemand', component:WorkDemandComponent },
  { path: '**', component:PageNotFoundComponent}
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);