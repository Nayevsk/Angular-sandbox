import { Component, OnInit, Input } from '@angular/core';
import {Employee} from '../../mock-employees/employees'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() choosenEmployee?: Employee

  constructor() { }

  ngOnInit(): void {
  }

}
