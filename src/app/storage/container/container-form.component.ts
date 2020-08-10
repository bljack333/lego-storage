import { Component, OnInit } from '@angular/core';
import { Container, StorageLocation, ContainerTypeEnum } from '../../models';
import { StorageService } from '../storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ContainerType2LabelMapper } from '../../shared/mappers/container-type-label-mapper';

@Component({
  selector: 'app-container-form',
  templateUrl: './container-form.component.html'
})
export class ContainerFormComponent implements OnInit {

  container: Container;
  location: StorageLocation;
  containerForm: FormGroup;
  id: number;
  containerType: ContainerTypeEnum;

  protected enumMapper = ContainerType2LabelMapper;
  protected containerTypes = Object.values(ContainerTypeEnum).filter(value => typeof value === 'number');

  constructor(private storageService: StorageService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      if (data.container) {
        this.container = data.container;
      }
    });

    if (!this.container) {
      this.container = new Container();
      this.id = -1;
      this.container.storageLocationId = +this.route.snapshot.paramMap.get('id');
    }

    this.storageService.getLocation(this.container.storageLocationId).subscribe(location => this.location = location);

    this.containerForm = this.setupForm(this.container);
  }

  setupForm(container: Container): FormGroup {
    const formGroup = this.fb.group({
      description: container.description,
      rows: container.rows,
      columns: container.columns,
      location: container.location,
      containerType: container.containerType
    });

    formGroup.controls['description'].valueChanges.subscribe((value: string) => {
      this.container.description = value;
    });

    formGroup.controls['rows'].valueChanges.subscribe((value: number) => {
      this.container.rows = value;
    });

    formGroup.controls['columns'].valueChanges.subscribe((value: number) => {
      this.container.columns = value;
    });

    formGroup.controls['location'].valueChanges.subscribe((value: string) => {
      this.container.location = value;
    });

    formGroup.controls['containerType'].valueChanges.subscribe((value: ContainerTypeEnum) => {
      this.container.containerType = value;
    });

    return formGroup;
  }

  saveContainer(formValues) {
    if (this.id === -1) {
      this.container.id = -1;

      this.storageService.addContainer(this.container).subscribe();

    } else  {
      this.storageService.saveContainer(this.container).subscribe();
    }
    this.router.navigate(['storage/locations/' + this.container.storageLocationId + '/containers']);
  }

  cancel() {
    this.router.navigate(['storage/locations/' + this.container.storageLocationId + '/containers']);
  }
}
