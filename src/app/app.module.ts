import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ImgFallbackModule } from 'ngx-img-fallback';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShipsComponent } from './ships/ships.component';
import { ShipsListComponent } from './ships-list/ships-list.component';
import { ShipComponent } from './ship/ship.component';
import { RouteExampleComponent } from './route-example/route-example.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ShipsComponent,
    ShipsListComponent,
    ShipComponent,
    NavbarComponent,
    RouteExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ImgFallbackModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [
    CookieService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
