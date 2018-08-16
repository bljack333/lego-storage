import { Component, OnInit, Input } from '@angular/core';
import { IMySet } from '../models';

@Component({
  selector: 'set-card',
  templateUrl: './set-card.component.html',
  styleUrls: ['./set-card.component.scss']
})
export class SetCardComponent implements OnInit {
  @Input() set : IMySet;
  
  constructor() { }

  ngOnInit() {
  }

}
