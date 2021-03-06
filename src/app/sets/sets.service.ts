import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../shared/services/base.service';
import { IMySet, SetState } from '../models';

@Injectable()
export class SetsService extends BaseService {

  constructor(private http: HttpClient) {
    super();
   }

  getMySets(): Observable<IMySet[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<IMySet[]>(this.baseUrl + '/api/sets', this.httpOptions).pipe(catchError(this.handleError<IMySet[]>('getMySets', [])));
  }

  getSetsByState(setState: SetState): Observable<IMySet[]> {
    // tslint:disable-next-line:max-line-length
    return this.http.get<IMySet[]>(this.baseUrl + '/api/sets/' + setState, this.httpOptions).pipe(catchError(this.handleError<IMySet[]>('getSetsByState', [])));
  }

  getSetBySetNumber(setNumber: string) {
    // tslint:disable-next-line:max-line-length
    return this.http.get<IMySet>(this.baseUrl + '/api/sets/' + setNumber, this.httpOptions).pipe(catchError(this.handleError<IMySet>('getSetBySetNumber')));
  }
}
