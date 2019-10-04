import { Component, OnInit, Input } from '@angular/core';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { ContainerTypeEnum } from '../../models';

@Component({
  selector: 'app-container-card',
  templateUrl: './container-card.component.html'
})
export class ContainerCardComponent implements OnInit {

  @Input() container: Container;

  constructor() { }

  ngOnInit() {
  }

  containerType(type: ContainerTypeEnum): string {
    return ContainerTypeEnum[type].toString();
  }
}
