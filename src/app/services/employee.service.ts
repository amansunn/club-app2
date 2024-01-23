import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: any): Observable<any> {
    return this._http.post('https://aman-app-backend.onrender.com/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`https://aman-app-backend.onrender.com/employees/${id}`, data);
  }

  getEmployeeList(): Observable<any> {
    return this._http.get('https://aman-app-backend.onrender.com/employees');
  }

  deleteMember(id: number): Observable<any> {
    return this._http.delete(`https://aman-app-backend.onrender.com/employees/${id}`);
  }
}