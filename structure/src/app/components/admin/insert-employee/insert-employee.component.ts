import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validator, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-insert-employee',
  templateUrl: './insert-employee.component.html',
  styleUrls: ['./insert-employee.component.css']
})
export class InsertEmployeeComponent implements OnInit {
employee:FormGroup;
update:boolean = false;
button:boolean = true;
  constructor(private _FormBuilder:FormBuilder,private _Router:Router) { }

  ngOnInit(): void {
    this.initiate();
  }

  initiate(){
    this.employee = this._FormBuilder.group({
    name:['',Validators.required],
    username:['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    phonenumber:['',[Validators.required,Validators.pattern(`^01[0125][0-9]{8}$`)]],
    })
  }

  get fc(){
    return this.employee.controls;
  }

  onSubmit(){
    if(this.employee.status == "VALID" ){
      Swal.fire({
        icon:"success",
        title:"Employee inserted successfuly , please open the console to the object that will be sent to the API",
        showConfirmButton:false,
        timer:4000
      })
      console.log(this.employee.value);
      this._Router.navigate(['/content/admin/Employee']);
    }else {
      Swal.fire({
        icon:"error",
        title:"the Form is not valid",
        timer:2500
      })
    }

  }
}
