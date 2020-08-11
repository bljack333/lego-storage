import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { StorageLocation } from '../../models';
import { StorageService } from '../storage.service';
import { Observable, EMPTY,  of } from 'rxjs';
import { take, mergeMap } from 'rxjs/operators';

@Injectable()
export class LocationResolverService implements Resolve<StorageLocation> {
    constructor(private storageService: StorageService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StorageLocation> | Observable<never> {
        const id = +route.paramMap.get('id');

        return this.storageService.getLocation(id).pipe(
            take(1),
            // tslint:disable-next-line:no-shadowed-variable
            mergeMap(StorageLocation => {
                if (StorageLocation) {
                    return of(StorageLocation);
                } else {
                    this.router.navigate(['/storage/locations']);
                    return EMPTY;
                }
            })
        );
    }
}
