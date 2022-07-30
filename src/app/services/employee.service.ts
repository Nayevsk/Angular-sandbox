import {Employee} from '../mock-employees/employees'
import { EMPLOYEES } from '../mock-employees/mock-employees';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  getEmployee(): Observable<Employee[]> {
    const employees = of (EMPLOYEES)
    return employees;
  } 

  constructor() { }
}
