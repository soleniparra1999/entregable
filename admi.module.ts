import { NgModule } from '@angular/core';
import { AdmiRoutingModule } from './admi-routing.module';
import { AdmiComponent } from './admi.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SoleniComponent } from './soleni/soleni.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AdmiComponent,
    SoleniComponent
  ],
  imports: [
    CommonModule,
    AdmiRoutingModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AdmiComponent]

})
export class AdmiModule { }
