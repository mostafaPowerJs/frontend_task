import { NgModule, Component } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./employee/employee.component";
import { InsertEmployeeComponent } from "./insert-employee/insert-employee.component";
// ChangePassword Component








const routes: Routes = [
    {
        path: "",
        children: [
            

            {
                path: "Employee",
                component: EmployeeComponent,
            },
          
            {
                path: "insertemployee",
                component: InsertEmployeeComponent,
            },
           
            
           
],
    },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
})
export class AdminRoutingModule { }
