import { Component, OnInit } from '@angular/core';
import { Container, StorageArea } from '../../models';
import { StorageService } from '../storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent implements OnInit {

  container: Container;
  area: StorageArea;

  constructor(private storageService: StorageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.container) {
        this.container = data.container;
      }
    });

    this.storageService.getArea(this.container.storageAreaId).subscribe(area => this.area = area);
  }

  editContainer() {
    this.router.navigate(['/storage/areas/' + this.area.id + '/containers/' + this.container.id + '/edit/']);
  }
}
