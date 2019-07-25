import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'azad';
  password = '';
  isLoggedIn = false;
  invalidCredentialMsg = 'Invalid Credentials. Please enter the correct username and password';

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.authenticationService.authenticate(this.username, this.password)) {
      console.log('authenticated');
      this.router.navigate(['welcome', this.username]);
      this.isLoggedIn = true;
    } else {
      console.log('not authenticated');
      this.isLoggedIn = false;
    }
  }
}
