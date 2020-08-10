import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { StorageLocation } from '../../models/storage.model';
import { StorageService } from '../storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html'
})
export class LocationFormComponent implements OnInit {

  storageLocationForm: FormGroup;
  storageLocation: StorageLocation;
  id: number;

  constructor(private storageService: StorageService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    this.route.data.subscribe(location => {
      if (location.storageLocation) {
        this.storageLocation = location.storageLocation;
        this.id = this.storageLocation.id;
      }
    });

    if (!this.storageLocation) {
      this.storageLocation = new StorageLocation();
      this.id = -1;
    }

    this.setupForm();
  }

  setupForm() {
    this.storageLocationForm = this.fb.group({
      name: this.storageLocation.name,
      description: this.storageLocation.description
    });

    this.storageLocationForm.controls['name'].valueChanges.subscribe((value: string) => {
      this.storageLocation.name = value;
    });

    this.storageLocationForm.controls['description'].valueChanges.subscribe((value: string) => {
      this.storageLocation.description = value;
    });
  }

  saveStorageLocation() {
    if (this.id === -1) {
      this.storageLocation.id = -1;

      this.storageService.addLocation(this.storageLocation).subscribe();

    } else  {
      this.storageService.saveLocation(this.storageLocation).subscribe();
    }
    this.router.navigate(['storage/locations']);
  }

  cancel() {
    this.router.navigate(['storage/locations']);
  }
}
