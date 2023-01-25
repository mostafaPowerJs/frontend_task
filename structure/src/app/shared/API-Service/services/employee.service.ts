import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _HttpClient:HttpClient) { }

  getemployee():Observable<any>{
    return this._HttpClient.get("https://jsonplaceholder.typicode.com/users");
  }
}
