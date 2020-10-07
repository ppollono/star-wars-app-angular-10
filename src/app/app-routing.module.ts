import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ShipsComponent } from './ships/ships.component';
import { RouteExampleComponent } from './route-example/route-example.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ships',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'ships',
    component: ShipsComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'route-example',
    component: RouteExampleComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
