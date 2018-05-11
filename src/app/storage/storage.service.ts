import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators'; 
import { HttpHeaders } from '@angular/common/http';

import { IStorageArea, IContainer, ContainerTypeEnum, IContainerDivision } from '../models';

@Injectable()
export class StorageService {

    constructor(private http: HttpClient) { }

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

  private handleError<T>( operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result);
    }
  }
}
