import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../../shared/API-Service/services/employee.service'
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
employees:any = [];
  constructor(private _EmployeeService:EmployeeService,private _Router:Router) { }

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
  delete(){
    Swal.fire({
      icon:"success",
      title:"supose this will delete this record with real (API)",
      timer:3500
  });
  }
  update(){
    Swal.fire({
        icon:"success",
        title:"supose will route to the update component",
        timer:2500
    });
    this._Router.navigate(['/content/admin/insertemployee'])
  }
  
}
