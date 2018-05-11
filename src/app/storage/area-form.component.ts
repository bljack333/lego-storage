import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { IStorageArea } from '../models/storage.model';
import { StorageService } from './storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'area-form',
  templateUrl: './area-form.component.html',
  styleUrls: ['./area-form.component.scss']
})
export class AreaFormComponent implements OnInit {

  storageAreaForm: FormGroup;

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    let name = new FormControl();
    let description = new FormControl();

    this.storageAreaForm = new FormGroup({
      name: name,
      description: description
    });
  }

  saveStorageArea(formValues) {
    let newArea: IStorageArea = { id: -1, name: formValues.name, description: formValues.description};

    this.storageService.addArea(newArea).subscribe();

    this.router.navigate(['storage/areas']);
  }

  cancel() {
    this.router.navigate(['storage/areas']);
  }
}
