import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators'; 
import { HttpHeaders } from '@angular/common/http';

import { IStorageArea, IContainer, ContainerTypeEnum, IContainerDivision } from '../models';
import { BaseService } from '../shared/services/base.service';

@Injectable()
export class StorageService extends BaseService {

    constructor(private http: HttpClient) { 
      super();
    }

  getAreas(): Observable<IStorageArea[]> {
    return this.http.get<IStorageArea[]>(this.baseUrl + '/api/storageAreas', this.httpOptions).pipe(catchError(this.handleError<IStorageArea[]>('getAreas', [])));
  }

  getAreasContainers(areaId: number): Observable<IContainer[]> {
    return this.http.get<IContainer[]>(this.baseUrl + '/api/storageAreas/' + areaId + '/containers/', this.httpOptions)
    .pipe(
      catchError(this.handleError<IContainer[]>('getAreasContainers', []))
    );
  }

  addArea(newArea: IStorageArea) {
    return this.http.post(this.baseUrl + '/api/storageAreas/', JSON.stringify(newArea), this.httpOptions).pipe(catchError(this.handleError<IStorageArea[]>('addArea', [])));
  }

}
