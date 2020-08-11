import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { StorageLocation } from '../../models';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html'
})
export class LocationListComponent implements OnInit {
  locations: StorageLocation[];

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.storageService.getLocations().subscribe(locations => this.locations = locations);

  }

  addLocation() {
    this.router.navigate(['/storage/locations/create/']);
  }
}
