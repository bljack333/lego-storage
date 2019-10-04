import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-set-form',
  templateUrl: './set-form.component.html',
  styleUrls: ['./set-form.component.scss']
})
export class SetFormComponent implements OnInit {
  setForm: FormGroup;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.setupForm();
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

  cancel() {
    this.router.navigate(['sets']);
  }
}
