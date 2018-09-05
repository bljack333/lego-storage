import { Component, OnInit } from '@angular/core';
import { PartsService } from './parts.service';
import { IMyPart } from '../models';

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.scss']
})
export class PartsComponent implements OnInit {

  constructor(private partsService: PartsService) { }

  ngOnInit() {
    this.partsService.getParts().subscribe(parts => this.parts = parts);
  }

  parts: IMyPart[];
}
