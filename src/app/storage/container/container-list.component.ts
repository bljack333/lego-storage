import { Component, OnInit, Input } from '@angular/core';
import { Container } from '../../models';
import { StorageService } from '../storage.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container-list',
  templateUrl: './container-list.component.html'
})
export class ContainerListComponent implements OnInit {
  @Input() storageContainers: Container[];
  @Input() areaId: number;

  showList = false;

  constructor(private storageService: StorageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if (!this.storageContainers) {

      if (this.route.snapshot.params['id']) {
        this.areaId = +this.route.snapshot.params['id'];
      }

      this.storageService.getAreasContainers(this.areaId).subscribe(containers => { this.storageContainers = containers; });
    }

    if (this.route.snapshot.routeConfig.component.name === 'ContainerListComponent') {
      this.showList = false;
    } else {
      this.showList = true;
    }
  }

  addContainer() {
    this.router.navigate(['/storage/areas/' + this.areaId + '/containers/add']);
  }

}
