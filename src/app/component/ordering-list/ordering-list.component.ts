import { Component, OnInit } from '@angular/core';
import { Ordering } from 'src/app/model/ordering';
import { OrderingService } from 'src/app/service/ordering.service';

@Component({
  selector: 'app-ordering-list',
  templateUrl: './ordering-list.component.html',
  styleUrls: ['./ordering-list.component.css']
})
export class OrderingListComponent implements OnInit {
  orderings! : Ordering[];

  constructor(private service: OrderingService) {
  }

  delete(ordering: Ordering) {
    this.service.delete(ordering.id).subscribe();
    this.orderings.splice(this.orderings.indexOf(ordering), 1);
  }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.orderings = data;
    });
  }
}
