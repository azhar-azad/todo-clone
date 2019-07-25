import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() {
  }

  authenticate(username, password): boolean {

    if (username === 'azad' && password === '123') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    } else {
      return false;
    }

    return null;
  }

  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticatedUser');
    return !(user === null);
  }

  logout(): void {
    sessionStorage.removeItem('authenticatedUser');
  }
}
