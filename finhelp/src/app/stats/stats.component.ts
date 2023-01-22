import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  constructor(private http_client: HttpClient) { }


  Validate(data: any): Observable<any> {
    return this.http_client.get<any>('http://localhost:3000/create', data);
  }

}
