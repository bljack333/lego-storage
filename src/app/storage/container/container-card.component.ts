import { Component, OnInit, Input } from '@angular/core';
import { ContainerTypeEnum, Container } from '../../models';
import { ContainerType2LabelMapper } from '../../shared/mappers/container-type-label-mapper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container-card',
  templateUrl: './container-card.component.html'
})
export class ContainerCardComponent implements OnInit {

  protected enumMapper = ContainerType2LabelMapper;

  @Input() container: Container;

  constructor(private router: Router, ) { }

  ngOnInit() {
  }

  containerType(type: ContainerTypeEnum): string {
    return this.enumMapper[type];
  }

  addSlot() {
    this.router.navigate(['/storage/locations/' + this.container.location + '/containers/' + this.container.id + '/slots/add']);
  }
}
