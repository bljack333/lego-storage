import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class BaseService {

  constructor() { }

  baseUrl: string = "http://localhost:56619";

  protected httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' , 'Accept': 'application/json'} )
  };
  
  protected handleError<T>( operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result);
    }
  }

}
