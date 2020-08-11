import { Component, OnInit } from '@angular/core';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { ContainerDivisionSlot, ContainerDivision } from '../../../models';
import { StorageService } from '../../storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-slot-form',
    templateUrl: './slot-form.component.html'
  })
  export class SlotFormComponent implements OnInit {

    containerId: number;
    slot: ContainerDivisionSlot;
    locationId: number;
    division: ContainerDivision;

    constructor(private storageService: StorageService, private route: ActivatedRoute,
      private router: Router, private fb: FormBuilder) { }

    ngOnInit() {

      // Get Container by route param
      // Get Storage Location by route param
    }

    get hasDivision(): boolean {
      return this.slot.containerDivision !== undefined;
    }

    saveSlot() {

    }
  }
