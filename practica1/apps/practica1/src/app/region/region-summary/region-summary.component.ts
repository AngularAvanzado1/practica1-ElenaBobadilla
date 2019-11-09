import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'practica1-region-summary',
  templateUrl: './region-summary.component.html',
  styleUrls: ['./region-summary.component.css']
})
export class RegionSummaryComponent implements OnInit {

  @Input() public summary: [];
  
  constructor() { }

  ngOnInit() {
  }

}
