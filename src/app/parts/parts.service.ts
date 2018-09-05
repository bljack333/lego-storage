import { Injectable } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMyPart } from '../models';
import { catchError } from 'rxjs/operators'; 

@Injectable()
export class PartsService extends BaseService {

  constructor(private http: HttpClient) { 
    super();
  }

  getParts() : Observable<IMyPart[]> {
    return this.http.get<IMyPart[]>(this.baseUrl + '/api/parts', this.httpOptions).pipe(catchError(this.handleError<IMyPart[]>('getParts', [])));
  }
}