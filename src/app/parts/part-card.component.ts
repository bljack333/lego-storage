import { Component, OnInit, Input } from '@angular/core';
import { IMyPart } from '../models';

@Component({
  selector: 'app-part-card',
  templateUrl: './part-card.component.html',
  styleUrls: ['./part-card.component.scss']
})
export class PartCardComponent implements OnInit {

  @Input() part: IMyPart;
  
  constructor() { }

  ngOnInit() {
  }

}
