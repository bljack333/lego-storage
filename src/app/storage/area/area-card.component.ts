import { Component, OnInit, Input } from '@angular/core';
import { StorageArea, Container } from '../../models';
import { StorageService } from '../storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-area-card',
  templateUrl: './area-card.component.html'
})
export class AreaCardComponent implements OnInit {
  @Input() area: StorageArea;
  storageContainers: Container[];

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.getContainers();
  }

  getContainers() {
    return this.storageService.getAreasContainers(this.area.id).subscribe(containers => {this.storageContainers = containers; });
  }

  viewContainers() {
    this.router.navigate(['/storage/areas/' + this.area.id + '/containers']);
  }

  removeArea(areaId: number) {
    this.storageService.removeArea(areaId).subscribe();
    this.router.navigate(['/storage/areas/']);
  }
}
