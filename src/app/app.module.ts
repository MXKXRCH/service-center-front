import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderingComponent } from './component/ordering/ordering.component';

import { OrderingListComponent } from './component/ordering-list/ordering-list.component';
import { RepairListComponent } from './component/repair-list/repair-list.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { GadgetTypeListComponent } from './component/gadget-type-list/gadget-type-list.component';
import { GadgetListComponent } from './component/gadget-list/gadget-list.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderingComponent,
    OrderingListComponent,
    RepairListComponent,
    EmployeeListComponent,
    GadgetTypeListComponent,
    GadgetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
