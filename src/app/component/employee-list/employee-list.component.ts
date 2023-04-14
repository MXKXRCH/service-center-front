import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees! : Employee[];
  employee! : Employee;

  constructor(private service: EmployeeService, private router : Router) {
    this.clearForm();
  }

  clearForm() {
    this.employee = new Employee();
  }

  editEmployee(employee : Employee) {
    this.employee = employee;
  }

  addEmployee() {
    if (this.employee.name === undefined || this.employee.name.length < 4) {
      alert("Name is not available");
    }
    if (this.employee.phone === undefined || this.employee.phone.length < 4) {
      alert("Phone is not available");
    }
    if (this.employee.email === undefined || this.employee.email.length < 4) {
      alert("Email is not available");
    }
    if (this.employee.experience === undefined || this.employee.experience <= 0) {
      alert("Experience is not available");
    }
    if (this.employee.salary === undefined || this.employee.salary <= 0) {
      alert("Salary is not available");
    }
    this.service.post(this.employee).subscribe(() => this.router.navigate(['employees']));
  }

  delete(employee: Employee) {
    this.service.delete(employee.id).subscribe();
    this.employees.splice(this.employees.indexOf(employee), 1);
  }

  ngOnInit() {
    this.service.findAll().subscribe(data => {
      this.employees = data;
    });
  }
}
