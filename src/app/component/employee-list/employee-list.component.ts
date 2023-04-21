import { Component } from '@angular/core';
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

  constructor(private service: EmployeeService) {
    this.clearForm();
  }

  clearForm() {
    this.employee = new Employee();
  }

  editEmployee(employee : Employee) {
    this.employee = employee;
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  addEmployee() {
    if (this.employee.name === undefined || this.employee.name.length < 4) {
      alert("Name is not available");
      return;
    }
    if (this.employee.phone === undefined || this.employee.phone.length < 4) {
      alert("Phone is not available");
      return;
    }
    if (this.employee.email === undefined || this.employee.email.length < 4) {
      alert("Email is not available");
      return;
    }
    if (this.employee.experience === undefined || this.employee.experience <= 0) {
      alert("Experience is not available");
      return;
    }
    if (this.employee.salary === undefined || this.employee.salary <= 0) {
      alert("Salary is not available");
      return;
    }
    this.service.post(this.employee).subscribe(
      data => {
        if (data !== undefined && data !== null) {
          window.location.reload();
        } else {
          alert("Can't add or change the employee\nMaybe because email or phone already registered");
        }
      }
    );
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
