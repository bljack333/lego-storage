import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { StorageArea } from '../../models/storage.model';
import { StorageService } from '../storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-form',
  templateUrl: './area-form.component.html'
})
export class AreaFormComponent implements OnInit {

  storageAreaForm: FormGroup;
  storageArea: StorageArea;
  id: number;

  constructor(private storageService: StorageService, private router: Router, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {

    this.route.data.subscribe(area => {
      if (area.storageArea) {
        this.storageArea = area.storageArea;
        this.id = this.storageArea.id;
      }
    });

    if (!this.storageArea) {
      this.storageArea = new StorageArea();
      this.id = -1;
    }

    this.setupForm();
  }

  setupForm() {
    this.storageAreaForm = this.fb.group({
      name: this.storageArea.name,
      description: this.storageArea.description
    });

    this.storageAreaForm.controls['name'].valueChanges.subscribe((value: string) => {
      this.storageArea.name = value;
    });

    this.storageAreaForm.controls['description'].valueChanges.subscribe((value: string) => {
      this.storageArea.description = value;
    });
  }

  saveStorageArea() {
    if (this.id === -1) {
      this.storageArea.id = -1;

      this.storageService.addArea(this.storageArea).subscribe();

    } else  {
      this.storageService.saveArea(this.storageArea).subscribe();
    }
    this.router.navigate(['storage/areas']);
  }

  cancel() {
    this.router.navigate(['storage/areas']);
  }
}
