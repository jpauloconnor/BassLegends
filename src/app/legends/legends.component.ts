import { Component, OnInit } from '@angular/core';
import { Legend } from '../legend';
import { LEGENDS } from '../mock-legends';


@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {
  legends = LEGENDS;
  
  legend: Legend = {
    id: 1,
    lastName: 'Wooten'
  }
  
  constructor() { }

  ngOnInit() {
  }

}
