import { Injectable } from '@angular/core';
import { UserLocalStorageService } from './user-local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  globals: Object;

  constructor(private UserService: UserLocalStorageService) { }


  Login(username, password) {

      /* Dummy authentication for testing, uses $timeout to simulate api call
       ----------------------------------------------*/
      let promise = new Promise((resolve, reject) => {
        this.UserService.GetByUsername(username)
          .then(user => {
            if (user !== null && user['password'] === password) {
                resolve({ success: true });
            } else {
                resolve({ success: false, message: 'Username or password is incorrect' });
            }
          });
      });
      return promise;
  }

  SetCredentials(username, password) {
      var authdata = btoa(username + ':' + password);

      this.globals = {
          currentUser: {
              username: username,
              authdata: authdata
          }
      };

      // set default auth header for http requests
      // $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata;

      // store user details in globals cookie that keeps user logged in for 1 week (or until they logout)
      // var cookieExp = new Date();
      // cookieExp.setDate(cookieExp.getDate() + 7);
      // $cookies.putObject('globals', $rootScope.globals, { expires: cookieExp });
  }
}
