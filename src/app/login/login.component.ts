import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: Object = {
    username: null,
    password: null
  };

  dataLoading: boolean;

  constructor(private AuthService: AuthService, private Router:Router) { }

  ngOnInit(): void {
  }

  login(): void {
    this.dataLoading = true;
    this.AuthService.Login(this.user['username'], this.user['password']).then( response => {
        if (response && response['success']) {
          this.AuthService.SetCredentials(this.user['username'], this.user['password']);
          this.Router.navigate(['ships']);
        } else {
          alert(response['message'])
          this.dataLoading = false;
        }
    });
  };

}
