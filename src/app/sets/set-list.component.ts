import { Component, OnInit, Input } from '@angular/core';
import { IMySet } from '../models';

@Component({
  selector: 'app-set-list',
  templateUrl: './set-list.component.html',
  styleUrls: ['./set-list.component.scss']
})
export class SetListComponent implements OnInit {

  @Input() group: Array<IMySet>;

  constructor() { }

  ngOnInit() {
  }

}
