import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

import { IStorageArea } from '../models';
import { StorageService } from './storage.service';

@Component({
  selector: 'area-list',
  templateUrl: './area-list.component.html',
  styleUrls: ['./area-list.component.css']
})
export class AreaListComponent implements OnInit {
  areas: IStorageArea[];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService.getAreas().subscribe(areas => this.areas = areas);

  }
}
