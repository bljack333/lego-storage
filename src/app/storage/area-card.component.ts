import { Component, OnInit, Input } from '@angular/core';
import { IStorageArea, IContainer } from '../models';
import { StorageService } from './storage.service';

@Component({
  selector: 'area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss']
})
export class AreaCardComponent implements OnInit {
  @Input() area: IStorageArea;
  storageContainers: IContainer[];

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.getContainers();
  }

  getContainers() {
    return this.storageService.getAreasContainers(this.area.id).subscribe(containers => {this.storageContainers = containers});
  }
}
