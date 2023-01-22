import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent {

  constructor(private http_client: HttpClient) { }

  pageType = this.Validate();

  //50% needs 30% wants 20% savings

  totalIncome: number = 10000;

  needs: number = 0.5 * this.totalIncome;
  wants: number = 0.3 * this.totalIncome;
  savings: number = 0.2 * this.totalIncome;

  

percentages = "conic-gradient(blue 1% " + 30 + "%, pink 1% " + 50 + "%, orange 1% " + 20 + "%)"


Validate(): any {
  this.http_client.get<number>('http://localhost:3000/create').pipe(tap({next: (data) => {return data}}))
}

}
 