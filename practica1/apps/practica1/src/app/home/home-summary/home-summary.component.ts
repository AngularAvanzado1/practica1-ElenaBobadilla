import { Component, OnInit, Input } from '@angular/core';
import { Summary } from '../../model/summary.interface';

@Component({
  selector: 'practica1-home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.css']
})
export class HomeSummaryComponent implements OnInit {

  @Input() public summary: Summary;

  constructor() { }

  ngOnInit() {
  }

}
