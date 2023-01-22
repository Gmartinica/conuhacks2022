import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private webRequestService: WebRequestService) { }

  // this.webRequestService.patch('', null);
  
  test() {
    console.log("Testing...");
    return this.webRequestService.test();
  }
}
