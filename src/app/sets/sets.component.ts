import { Component, OnInit } from '@angular/core';
import { IMySet, SetState } from '../models';
import { SetsService } from './sets.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sets',
  templateUrl: './sets.component.html',
  styleUrls: ['./sets.component.scss']
})
export class SetsComponent implements OnInit {

  displayed: Array<IMySet>;
  partedOut: Array<IMySet>;
  boxed: Array<IMySet>;
  public unclassified: Array<IMySet>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllSets();
  }

  getAllSets() {
    const allSets = this.route.snapshot.data.sets;

    allSets.forEach(set => {
      if (set.setState === SetState.Displayed) {
        if (this.displayed == null) {
          this.displayed = new Array<IMySet>();
        }
        this.displayed.push(set);
      } else if (set.setState === SetState.Boxed) {
        if (this.boxed == null) {
          this.boxed = new Array<IMySet>();
        }
        this.boxed.push(set);
      } else if (set.setState === SetState.PartedOut) {
        if (this.partedOut == null) {
          this.partedOut = new Array<IMySet>();
        }
        this.partedOut.push(set);
      } else {
        if (this.unclassified == null) {
          this.unclassified = new Array<IMySet>();
        }
        this.unclassified.push(set);
      }
    });
  }
}
