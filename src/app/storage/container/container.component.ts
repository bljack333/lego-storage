import { Component, OnInit } from '@angular/core';
import { Container, StorageLocation } from '../../models';
import { StorageService } from '../storage.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html'
})
export class ContainerComponent implements OnInit {

  container: Container;
  location: StorageLocation;

  constructor(private storageService: StorageService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.container) {
        this.container = data.container;
      }
    });

    this.storageService.getLocation(this.container.storageLocationId).subscribe(location => this.location = location);
  }

  editContainer() {
    this.router.navigate(['/storage/locations/' + this.location.id + '/containers/' + this.container.id + '/edit/']);
  }
}
