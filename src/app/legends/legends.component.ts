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
  
  selectedLegend: Legend;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(legend: Legend): void {
    this.selectedLegend = legend;
  }
}
