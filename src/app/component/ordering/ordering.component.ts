import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { Gadget } from 'src/app/model/gadget';
import { Ordering } from 'src/app/model/ordering';
import { Repair } from 'src/app/model/repair';
import { EmployeeService } from 'src/app/service/employee.service';
import { GadgetService } from 'src/app/service/gadget.service';
import { OrderingService } from 'src/app/service/ordering.service';
import { RepairService } from 'src/app/service/repair.service';

@Component({
  selector: 'app-ordering',
  templateUrl: './ordering.component.html',
  styleUrls: ['./ordering.component.css']
})
export class OrderingComponent implements OnInit {
  ordering! : Ordering;
  gadgets! : Gadget[];
  employes! : Employee[];
  repairs! : Repair[];
  runningId : number = NaN;

  totalPrice! : number;
  showEmployees : boolean = false;
  showGadgets : boolean = false;
  showRepairs : boolean = false;

  constructor(
    private route : ActivatedRoute, 
    private service : OrderingService,
    private gadgetService : GadgetService,
    private employeeService : EmployeeService,
    private repairService : RepairService,
    private router : Router
  ) {}
    
  ngOnInit() {
    this.totalPrice = 0;
    this.runningId = this.route.snapshot.params['id'];
    if (!Number.isNaN(this.runningId) && this.runningId !== undefined) {
      this.service.getById(this.runningId).subscribe(data => {
        this.ordering = data;
        this.ordering.repairs.forEach(element => {
          this.totalPrice += element.price;
        });
      });
    } else {
      this.ordering = new Ordering();
      this.ordering.repairs = [];
    }
  }

  employeeList() {
    this.showEmployees = !this.showEmployees;
    if (this.showEmployees) {
      this.employeeService.findAll().subscribe(data => {
        this.employes = data;
      });
    }
  }

  gadgetList() {
    this.showGadgets = !this.showGadgets
    if (!this.showGadgets) return;
    this.gadgetService.findAll().subscribe(data => {
      this.gadgets = data;
    });
  }

  repairList() {
    this.showRepairs = !this.showRepairs
    if (!this.showRepairs) return;
    this.repairService.findAll().subscribe(data => {
      this.repairs = data;
    });
  }

  setEmployee(employee : Employee) {
    this.showEmployees = false;
    this.ordering.employee = employee;
  }

  setGadget(gadget : Gadget) {
    this.showGadgets = false;
    this.ordering.gadget = gadget;
  }

  addRepair(repair : Repair) {
    if (this.ordering.repairs.includes(repair)) return;
    this.ordering.repairs.push(repair);
    this.totalPrice += repair.price;
  }

  removeRepair(repair : Repair) {
    this.ordering.repairs.splice(this.ordering.repairs.indexOf(repair), 1);
    this.totalPrice -= repair.price;
  }

  submit() {
    if (this.ordering.employee === undefined || this.ordering.gadget === undefined) {
      alert("Employee or gadget is null");
      return;
    }
    if (this.ordering.repairs === undefined || this.ordering.repairs.length === 0) {
      alert("Repairs are empty or not exist");
      return;
    }
    if (this.ordering.startDate === undefined || this.ordering.endDate === undefined) {
      alert("One of the date is null");
      return;
    }
    if (this.ordering.endDate < this.ordering.startDate) {
      alert("Dates are incorrect");
      return;
    }
    if (this.ordering.description === null || this.ordering.description === undefined || this.ordering.description.length < 4) {
      alert("Description not set or characters count < 4");
      return;
    }
    if (Number.isNaN(this.runningId) || this.runningId === undefined) {
      this.service.post(this.ordering).subscribe(() => this.router.navigate(['orderings']));
    } else {
      this.service.put(this.ordering).subscribe(() => this.router.navigate(['orderings']));
    }
  }
}
