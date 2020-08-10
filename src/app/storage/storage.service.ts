import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { StorageLocation, Container, ContainerTypeEnum, ContainerDivision } from '../models';
import { BaseService } from '../shared/services/base.service';

@Injectable()
export class StorageService extends BaseService {

    constructor(private http: HttpClient) {
      super();
    }

  getLocations(): Observable<StorageLocation[]> {
    return this.http.get<StorageLocation[]>(this.baseUrl + '/api/storageLocations', this.httpOptions)
      .pipe(catchError(this.handleError<StorageLocation[]>('getLocations', [])));
  }

  getLocationsContainers(locationId: number): Observable<Container[]> {
    return this.http.get<Container[]>(this.baseUrl + '/api/storageLocations/' + locationId + '/containers/', this.httpOptions)
    .pipe(
      catchError(this.handleError<Container[]>('getLocationsContainers', []))
    );
  }

  addLocation(newLocation: StorageLocation) {
    return this.http.post(this.baseUrl + '/api/storageLocations/', JSON.stringify(newLocation), this.httpOptions)
      .pipe(catchError(this.handleError<StorageLocation[]>('addLocation', [])));
  }

  getLocation(locationId: number): Observable<StorageLocation> {
    return this.http.get<StorageLocation>(this.baseUrl + '/api/storageLocations/' + locationId, this.httpOptions)
      .pipe(map(location => location ));
      // .pipe(catchError(this.handleError<StorageLocation>('getLocation', null)));
  }

  saveLocation(location: StorageLocation) {
    return this.http.post(this.baseUrl + '/api/storageLocations/' + location.id, JSON.stringify(location), this.httpOptions)
      .pipe(catchError(this.handleError<StorageLocation[]>('addLocation', [])));
  }

  getContainer(containerId: number) {
    return this.http.get<Container>(this.baseUrl + '/api/containers/' + containerId, this.httpOptions)
      .pipe(map(container => container));
  }

  removeLocation(locationId: number) {
    return this.http.delete(this.baseUrl + '/api/storageLocations/' + locationId, this.httpOptions);
  }

  saveContainer(container: Container) {
    return this.http.post(this.baseUrl + '/api/containers/' + container.id, JSON.stringify(container), this.httpOptions);
  }

  addContainer(container: Container) {
    return this.http.post(this.baseUrl + '/api/containers/', JSON.stringify(container), this.httpOptions)
      .pipe(catchError(this.handleError<Container[]>('addContainer', [])));
  }
}
