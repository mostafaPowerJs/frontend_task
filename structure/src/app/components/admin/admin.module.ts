
 
 

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArchwizardModule } from 'angular-archwizard';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
 
import { RouterModule } from '@angular/router';
 
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgxPrintElementModule } from 'ngx-print-element';
 
import { NgApexchartsModule } from 'ng-apexcharts';
 

 

// **  
import {NgxPaginationModule} from 'ngx-pagination';

// cookie 
import { CookieService } from 'ngx-cookie-service'


import { DxReportViewerModule } from 'devexpress-reporting-angular';
import { EmployeeComponent } from './employee/employee.component';
import { InsertEmployeeComponent } from './insert-employee/insert-employee.component';




 @NgModule({
  declarations: [
   
    
  
    EmployeeComponent,
                   InsertEmployeeComponent,
                 
  ],
  imports: [
    DxReportViewerModule,
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ArchwizardModule,
    SweetAlert2Module,
    NgxPaginationModule,
    RouterModule,
    NgApexchartsModule,
    NgxPrintElementModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [
   CookieService
  ],
  
  exports:[ ]
})
export class AdminModule { }
