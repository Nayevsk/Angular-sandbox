import { Component, OnInit} from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
import {Employee} from '../../mock-employees/employees';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees:Employee[] = [];
  selectedEmployee ?: Employee;

  constructor(private employeeService:EmployeeService, private historyService:HistoryService) { }

  onSelect(employee:Employee):void{
    this.selectedEmployee = employee
    this.historyService.add('Employee Selected: has id=${employee.id}')  
  }  

  getEmployee():void {
    this.employeeService.getEmployee().subscribe(element => this.employees = element)
  }

  ngOnInit(): void {
    this.getEmployee()
    }

}
