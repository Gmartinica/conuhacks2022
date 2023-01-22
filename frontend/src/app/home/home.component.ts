import { AuthService } from '@auth0/auth0-angular';
import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

// let metadata = {
//     "age": 18,
//     "hourlyIncome": 14.25,
//     "weeklyHours": 20,
//     "checking": 200,
//     "savings": 700,
//     "loans": {
//       "credit": 100,
//       "student": 1000,
//       "subscriptions": 50
//     }
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(public auth: AuthService, private userService: UserService) {
  }

  getUsername() {
    this.userService.getUser().subscribe((res: any) => {
        return res;
    });
  }
}
