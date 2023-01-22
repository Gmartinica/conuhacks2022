import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webRequestService: WebRequestService) { }

  // this.webRequestService.patch('', null);

  getUser() {
    return this.webRequestService.get('username');
  }
}
