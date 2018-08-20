import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BaseService } from '../shared/services/base.service';
import { IMySet, SetState } from '../models';

@Injectable()
export class SetsService extends BaseService {

  constructor(private httpClient: HttpClient) {
    super();
   }

  getMySets(): Observable<IMySet[]> {
    return this.httpClient.get<IMySet[]>(this.baseUrl + '/api/sets', this.httpOptions).pipe(catchError(this.handleError<IMySet[]>('getMySets', [])));
  }

  getSetsByState(setState: SetState): Observable<IMySet[]> {
    return this.httpClient.get<IMySet[]>(this.baseUrl + '/api/sets/' + setState, this.httpOptions).pipe(catchError(this.handleError<IMySet[]>('getMySets', [])));
  }
}
