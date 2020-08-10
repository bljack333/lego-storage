import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMySet } from '../models';
import { SetsService } from './sets.service';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.scss']
})
export class SetFormComponent implements OnInit {
  setForm: FormGroup;
  set: IMySet;

  constructor(private route: ActivatedRoute, private router: Router, private setService: SetsService) { }

  ngOnInit() {
    this.setupForm();

    let setNumber: string = this.route.params['set-number'];

    getSet(setNumber);
  }

  setupForm() {
    const isItBuilt = new FormControl();
    const storageArea = new FormControl();
    const haveBox = new FormControl();
    const haveInstructions = new FormControl();
    const haveStickers = new FormControl();
    const stickersOnModel = new FormControl();
    const setState = new FormControl();

    this.setForm = new FormGroup({
      isItBuilt: isItBuilt,
      storageArea: storageArea,
      haveBox: haveBox,
      haveInstructions: haveInstructions,
      haveStickers: haveStickers,
      stickersOnModel: stickersOnModel,
      setState: setState
    });
  }

  getSet(setNumber: string) {
    this.set = this.setService.getSetBySetNumber(setNumber);
  }

  cancel() {
    this.router.navigate(['sets']);
  }
}
