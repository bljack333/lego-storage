import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { StorageArea } from '../../models';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-area-list',
  templateUrl: './area-list.component.html'
})
export class AreaListComponent implements OnInit {
  areas: StorageArea[];

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.storageService.getAreas().subscribe(areas => this.areas = areas);

  }

  addArea() {
    this.router.navigate(['/storage/areas/create/']);
  }
}
