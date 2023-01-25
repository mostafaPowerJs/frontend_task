import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../../shared/API-Service/services/employee.service'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employees:any = [];
  constructor(private _EmployeeService:EmployeeService) { }

  ngOnInit(): void {
    this.getemployees();
  }

  getemployees(){
    this._EmployeeService.getemployee().subscribe((res) =>{
      this.employees = res;
    },(err) =>{
      console.log('their is a problem');
    },() => {
      console.log('completed');
      
    })
  }
}
