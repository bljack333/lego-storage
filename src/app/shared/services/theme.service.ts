import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { ITheme } from '../../models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ThemeService extends BaseService {

  constructor(private http: HttpClient) {
    super();
  }

  getTheme(id: number) : Observable<ITheme> {
    return this.http.get<ITheme>('/api/themes/' + id, this.httpOptions).pipe(catchError(this.handleError<ITheme>('getTheme')));
  }
}
