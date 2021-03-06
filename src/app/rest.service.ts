import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import {RequestOptions, ResponseContentType} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private endpoint: string;

  constructor(private http: HttpClient) {
    this.endpoint = 'http://localhost:8080/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


  /** LIGHT COMPONENT */
  getLigths(): Observable<any> {
    return this.http.get(this.endpoint + 'LightService/getAllLights').pipe(
      map(this.extractData));
  }

  setLight(id, value: number | null) {
    return this.http.get(this.endpoint + 'LightService/setLigth/' + id + '/' + value).pipe(
      map(this.extractData));
  }
}
