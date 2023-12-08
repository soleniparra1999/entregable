import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmiComponent } from './admi.component';
import { SoleniComponent } from './soleni/soleni.component';


const routes: Routes = [
  {path: '', component:AdmiComponent, children:[
/*
    { path: '', redirectTo: '/encuesta', pathMatch: 'full' }, // Redirige a la encuesta por defecto
    { path: '**', component:AdmiComponent }, // Redirige a las rutas no encontradas
    { path: '', component:HomeComponent}*/
    { path: '', component: SoleniComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmiRoutingModule { }
