import { Component } from '@angular/core';
import { Repair } from 'src/app/model/repair';
import { RepairService } from 'src/app/service/repair.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-repair-list',
  templateUrl: './repair-list.component.html',
  styleUrls: ['./repair-list.component.css']
})
export class RepairListComponent {
  repairs! : Repair[];
  repair! : Repair;

  constructor(private service: RepairService, private router : Router) {
    this.repair = new Repair();
  }

  addRepair() {
    this.updateRepair(this.repair);
  }

  updateRepair(repair : Repair) {
    if (repair.name === undefined || repair.name.length < 4) {
      alert("Name is not available");
    }
    if (repair.price === undefined) {
      alert("Price is not available");
    }
    this.service.post(repair).subscribe(() => this.router.navigate(['repairs']));
  }

  delete(repair: Repair) {
    this.service.delete(repair.id).subscribe();
    this.repairs.splice(this.repairs.indexOf(repair), 1);
  }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.repairs = data;
    });
  }
}
