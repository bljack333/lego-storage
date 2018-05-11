import { Component, OnInit } from '@angular/core';
import { IContainer, IStorageArea } from '../models';
import { StorageService } from './storage.service';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  container: IContainer;
  area: IStorageArea;

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    
  }

}
