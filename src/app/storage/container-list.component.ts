import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { IContainer } from '../models';

@Component({
  selector: 'container-list',
  templateUrl: './container-list.component.html',
  styleUrls: ['./container-list.component.scss']
})
export class ContainerListComponent implements OnInit {
  @Input() storageContainers: IContainer[];

  constructor() { }

  ngOnInit() {

  }

}
