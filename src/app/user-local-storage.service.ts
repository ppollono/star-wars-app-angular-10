import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLocalStorageService {

  service: Object;

  constructor() { }

  GetAll() {
    let promise = new Promise((resolve, reject) => {
      let users = this.getUsers();
      if(users) {
        resolve(users);
      } else {
        reject('error');
      }
    });
    return promise
  }

  GetByUsername(username) {
    let promise = new Promise((resolve, reject) => {
      let users = this.getUsers();
      let filteredUser = users.filter(user => {
        return user.username === username
      })
      if(filteredUser.length) {
        resolve(filteredUser[0]);
      } else {
        resolve({});
      }
    });
    return promise
  }

  Create(newUser) {
    let promise = new Promise((resolve, reject) => {
      this.GetByUsername(newUser['username']).then(user => {
        if(Object.keys(user).length === 0 && user.constructor === Object) {

          let users = this.getUsers();

          // assign id
          let lastUser = users[users.length - 1] || { id: 0 };
          newUser['id'] = lastUser.id + 1;

          // save to local storage
          users.push(newUser);
          this.setUsers(users);

          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Username "' + newUser.username + '" is already taken' });
        }
      });

    });
    return promise;
  }

  getUsers() {
    if(!localStorage.users){
      localStorage.users = JSON.stringify([]);
    }
    return JSON.parse(localStorage.users);
  }

  setUsers(users) {
    localStorage.users = JSON.stringify(users);
  }
}
