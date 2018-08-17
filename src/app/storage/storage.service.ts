import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators'; 
import { HttpHeaders } from '@angular/common/http';

import { IStorageArea, IContainer, ContainerTypeEnum, IContainerDivision } from '../models';
import { BaseService } from '../shared/base.service';

@Injectable()
export class StorageService extends BaseService {

    constructor(private http: HttpClient) { 
      super();
    }

  getAreas(): Observable<IStorageArea[]> {
    return this.http.get<IStorageArea[]>('/api/storageAreas').pipe(catchError(this.handleError<IStorageArea[]>('getAreas', [])));
  }

  getAreasContainers(areaId: number): Observable<IContainer[]> {
    return this.http.get<IContainer[]>('/api/storageAreas/' + areaId + '/containers')
    .pipe(
      catchError(this.handleError<IContainer[]>('getAreasContainers', []))
    );
  }

  addArea(newArea: IStorageArea) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post('/api/storageAreas', JSON.stringify(newArea), httpOptions).pipe(catchError(this.handleError<IStorageArea[]>('addArea', [])));
  }

}
