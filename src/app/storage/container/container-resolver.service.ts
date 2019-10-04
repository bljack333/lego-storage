import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Container } from '../../models';
import { StorageService } from '../storage.service';
import { Observable, EMPTY} from 'rxjs';
import { of } from 'rxjs/observable/of';
import { take, mergeMap } from 'rxjs/operators';

@Injectable()
export class ContainerResolverService implements Resolve<Container> {
    constructor(private storageService: StorageService, private router: Router) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Container> | Observable<never> {
        const id = +route.paramMap.get('containerId');

        return this.storageService.getContainer(id).pipe(
            take(1),
            mergeMap(container => {
                if (container) {
                    return of(container);
                } else {
                    const areaId = +route.paramMap.get('id');
                    this.router.navigate(['/storage/areas/' + areaId + '/containers']);
                    return EMPTY;
                }
            })
        );
    }
}
