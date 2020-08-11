import { Component, OnInit, Input } from '@angular/core';
import { StorageLocation, Container } from '../../models';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html'
})
export class LocationCardComponent implements OnInit {
  @Input() location: StorageLocation;
  storageContainers: Container[];

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.getContainers();
  }

  getContainers() {
    return this.storageService.getLocationsContainers(this.location.id).subscribe(containers => {this.storageContainers = containers; });
  }

  viewContainers() {
    this.router.navigate(['/storage/locations/' + this.location.id + '/containers']);
  }

  removeLocation(locationId: number) {
    this.storageService.removeLocation(locationId).subscribe();
    this.router.navigate(['/storage/locations/']);
  }
}
