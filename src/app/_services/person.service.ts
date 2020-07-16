import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError, pipe} from "rxjs"
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import { Person } from '../_models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {


  public apiURL:string="http://localhost:8080/api/person";
  constructor(private httpClient:HttpClient) { }

  getAllPersons()
  {
    return this.httpClient.get<Person[]>(this.apiURL)
    .pipe(
      map(res => res),
       catchError( this.errorHandler)
      );
  }


  errorHandler(error: Response) {  
    console.log(error);  
    return throwError(error);  
  } 
}