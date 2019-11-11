import { Component, OnInit, Input } from '@angular/core';
import { Summary } from '../../model/summary.interface';

@Component({
  selector: 'practica1-region-summary',
  templateUrl: './region-summary.component.html',
  styleUrls: ['./region-summary.component.css']
})
export class RegionSummaryComponent implements OnInit {

  @Input() public summary: Summary;

  constructor() { }

  ngOnInit() {
  }

}
