import { Component, OnInit } from '@angular/core';
import { UserLocalStorageService } from '../user-local-storage.service';
// import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: Object = {
    username: null,
    password: null
  };

  dataLoading: boolean;

  constructor(private UserService: UserLocalStorageService, private Router:Router) { }

  ngOnInit(): void {
    console.log("hola", this.UserService);
    // this.user = {
    //     username: "PabloI",
    //     password: "1234"
    // }
    // this.register();
  }

  register() {
    this.dataLoading = true;
    console.log("this.user", this.user);
    if (this.user && !this.user['username']) {
      return alert('please add username')
    }
    this.UserService.Create(this.user)
      .then(response => {
        if (response && response['success']) {
            this.Router.navigate(['login']);
        } else {
            alert(response['message'])
            this.dataLoading = false;
        }
      });
  }
}
