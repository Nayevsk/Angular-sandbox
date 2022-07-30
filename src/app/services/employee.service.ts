import {Employee} from '../mock-employees/employees'
import { EMPLOYEES } from '../mock-employees/mock-employees';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HistoryService } from './history.service';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  getEmployee(): Observable<Employee[]> {
    const employees = of (EMPLOYEES)
    this.historyService.add('Employee Service: fetched all employees')
    return employees;
  } 

  constructor(private historyService:HistoryService) { }
}
