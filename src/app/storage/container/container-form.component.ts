import { Component, OnInit } from '@angular/core';
import { Container, StorageArea } from '../../models';
import { StorageService } from '../storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-container-form',
  templateUrl: './container-form.component.html'
})
export class ContainerFormComponent implements OnInit {

  container: Container;
  area: StorageArea;
  containerForm: FormGroup;
  id: number;

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
    }

    this.storageService.getArea(this.container.storageAreaId).subscribe(area => this.area = area);

    this.containerForm = this.setupForm(this.container);
  }

  setupForm(container: Container): FormGroup {
    const formGroup = this.fb.group({
      description: container.description,
      rows: container.rows,
      columns: container.columns,
      location: container.location
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
    this.router.navigate(['storage/areas/' + this.container.storageAreaId + '/containers']);
  }

  cancel() {
    this.router.navigate(['storage/areas/' + this.container.storageAreaId + '/containers']);
  }
}
