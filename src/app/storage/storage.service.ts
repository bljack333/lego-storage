import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { StorageArea, Container, ContainerTypeEnum, ContainerDivision } from '../models';
import { BaseService } from '../shared/services/base.service';

@Injectable()
export class StorageService extends BaseService {

    constructor(private http: HttpClient) {
      super();
    }

  getAreas(): Observable<StorageArea[]> {
    return this.http.get<StorageArea[]>(this.baseUrl + '/api/storageAreas', this.httpOptions)
      .pipe(catchError(this.handleError<StorageArea[]>('getAreas', [])));
  }

  getAreasContainers(areaId: number): Observable<Container[]> {
    return this.http.get<Container[]>(this.baseUrl + '/api/storageAreas/' + areaId + '/containers/', this.httpOptions)
    .pipe(
      catchError(this.handleError<Container[]>('getAreasContainers', []))
    );
  }

  addArea(newArea: StorageArea) {
    return this.http.post(this.baseUrl + '/api/storageAreas/', JSON.stringify(newArea), this.httpOptions)
      .pipe(catchError(this.handleError<StorageArea[]>('addArea', [])));
  }

  getArea(areaId: number): Observable<StorageArea> {
    return this.http.get<StorageArea>(this.baseUrl + '/api/StorageAreas/' + areaId, this.httpOptions)
      .pipe(map(area => area ));
      // .pipe(catchError(this.handleError<StorageArea>('getArea', null)));
  }

  saveArea(area: StorageArea) {
    return this.http.post(this.baseUrl + '/api/storageAreas/' + area.id, JSON.stringify(area), this.httpOptions)
      .pipe(catchError(this.handleError<StorageArea[]>('addArea', [])));
  }

  getContainer(containerId: number) {
    return this.http.get<Container>(this.baseUrl + '/api/containers/' + containerId, this.httpOptions)
      .pipe(map(container => container));
  }

  removeArea(areaId: number) {
    return this.http.delete(this.baseUrl + '/api/storageAreas/' + areaId, this.httpOptions);
  }

  saveContainer(container: Container) {
    return this.http.post(this.baseUrl + '/api/containers/' + container.id, JSON.stringify(container), this.httpOptions);
  }

  addContainer(container: Container) {
    return this.http.post(this.baseUrl + '/api/containers/', JSON.stringify(container), this.httpOptions)
      .pipe(catchError(this.handleError<Container[]>('addContainer', [])));
  }
}
