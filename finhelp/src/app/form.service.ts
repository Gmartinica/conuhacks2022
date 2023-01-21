import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, of } from 'rxjs';

export interface userInputs{
  firstName: string;
  lastName: string;
  hourlyIncome: number;
  weeklyHours: number;
  savings: number;
  loan: number;
}


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http_client: HttpClient) { }

  

  post_data(data: userInputs): Observable<any> {
    return this.http_client.post('/', data);
  }
}
