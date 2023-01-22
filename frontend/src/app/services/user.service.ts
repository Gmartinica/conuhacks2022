import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: any;

  constructor(private webRequestService: WebRequestService) {
    this.getUser().subscribe((res: any) => {
        this.user = res;
    });
  }

  getUser() {
    return this.webRequestService.get('user');
  }
}
