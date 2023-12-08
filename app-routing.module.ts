import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SoleniComponent } from './modules/admi/soleni/soleni.component';

const routes: Routes = [
  { path: 'soleni', component: SoleniComponent },
  {path: '', loadChildren: () => import('./modules/home/home.module'). then (m => m.HomeModule)},
  {path: 'admi', loadChildren: () => import('./modules/admi/admi.module'). then (m => m.AdmiModule)}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
