import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  authenticate(username, password): boolean {

    if (username === 'azad' && password === '123') {
      return true;
    } else {
      return false;
    }

    return null;
  }
}
