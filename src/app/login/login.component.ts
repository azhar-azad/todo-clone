import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'azad';
  password = '';

  constructor(
    private authentication: AuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.authentication.authenticate(this.username, this.password)) {
      console.log('authenticated');
    } else {
      console.log('not authenticated');
    }
  }
}
