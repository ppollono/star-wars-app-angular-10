import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navbarOpen: boolean;
  loggedIn: boolean;

  constructor(private AuthService: AuthService, private activeRoute: Router) { }

  ngOnInit(): void {
    this.loggedIn = this.AuthService.isAuthenticated();
    this.activeRoute.events.subscribe((val) => {
        this.loggedIn = this.AuthService.isAuthenticated();
        console.log("this.loggedIn", this.loggedIn);
    });
    console.log("this.loggedIn", this.loggedIn);
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
