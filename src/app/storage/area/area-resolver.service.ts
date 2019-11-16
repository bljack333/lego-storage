import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageArea } from '../../models';
import { StorageService } from '../storage.service';
import { Observable, EMPTY,  of } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable()
export class AreaResolverService implements Resolve<StorageArea> {
    constructor(private storageService: StorageService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StorageArea> | Observable<never> {
        const id = +route.paramMap.get('id');

        return this.storageService.getArea(id).pipe(
            take(1),
            mergeMap(storageArea => {
                if (storageArea) {
                    return of(storageArea);
                } else {
                    this.router.navigate(['/storage/areas']);
                    return EMPTY;
                }
            })
        );
    }
}
