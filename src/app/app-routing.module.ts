import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderingComponent } from './component/ordering/ordering.component';
import { OrderingListComponent } from './component/ordering-list/ordering-list.component';
import { RepairListComponent } from './component/repair-list/repair-list.component';
import { EmployeeListComponent } from './component/employee-list/employee-list.component';
import { GadgetTypeListComponent } from './component/gadget-type-list/gadget-type-list.component';
import { GadgetListComponent } from './component/gadget-list/gadget-list.component';

const routes: Routes = [
  { path: 'orderings', component: OrderingListComponent },
  { path: 'orderings/add', component: OrderingComponent },
  { path: 'orderings/:id', component: OrderingComponent },
  { path: 'repairs', component: RepairListComponent },
  { path: 'employees', component: EmployeeListComponent },
  { path: 'gadgets', component: GadgetListComponent },
  { path: 'gadgetTypes', component: GadgetTypeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
