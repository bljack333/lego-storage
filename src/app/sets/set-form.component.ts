import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.scss']
})
export class SetFormComponent implements OnInit {

  setForm: FormGroup;

  constructor(private route: ActivatedRouteSnapshot, private router: Router) { }

  ngOnInit() {
    this.setupForm();
  }

  setupForm() {
    let isItBuilt = new FormControl();
    let storageArea = new FormControl();
    let haveBox = new FormControl();
    let haveInstructions = new FormControl();
    let haveStickers = new FormControl();
    let stickersOnModel = new FormControl();
    let setState = new FormControl();

    this.setForm = new FormGroup({
      isItBuilt: isItBuilt,
      storageArea: storageArea,
      haveBox: haveBox,
      haveInstructions: haveInstructions,
      haveStickers: haveStickers,
      stickersOnModel: stickersOnModel,
      setState: setState
    })
  }

  cancel() {
    this.router.navigate(['sets']);
  }
}
