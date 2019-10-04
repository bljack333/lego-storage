import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SetsService } from './sets.service';

@Injectable()
export class SetsResolver implements Resolve<any> {
  constructor(private setsService: SetsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.setsService.getMySets();
  }

}
