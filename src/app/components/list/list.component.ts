import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {Employee} from '../../mock-employees/employees';
import {EMPLOYEES} from '../../mock-employees/mock-employees';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  employees = EMPLOYEES;
  selectedEmployee ?: Employee;

  onSelect(employee:Employee):void{
    this.selectedEmployee = employee
    console.log(this.selectedEmployee.name)
  }  

  constructor() { }

  ngOnInit(): void {
  }

}
