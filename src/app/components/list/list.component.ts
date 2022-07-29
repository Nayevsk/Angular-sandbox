import { Component, OnInit } from '@angular/core';
import {Employee} from '../../mock-employees/employees';
import {EMPLOYEES} from '../../mock-employees/mock-employees';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  title:string = 'Beggining'
  employees = EMPLOYEES;  

  constructor() { }

  ngOnInit(): void {
  }

}
