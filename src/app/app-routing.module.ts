import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderingComponent } from './component/ordering/ordering.component';
import { OrderingListComponent } from './component/ordering-list/ordering-list.component';

const routes: Routes = [
  { path: 'orderings', component: OrderingListComponent },
  { path: 'orderings/add', component: OrderingComponent },
  { path: 'orderings/:id', component: OrderingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
