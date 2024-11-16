import { Routes } from '@angular/router';
import { LoginPageComponent } from './home/login/pages/login-page.component';
import { NotFoundPageComponent } from './home/not-found/pages/not-found-page/not-found-page.component';

export const routes: Routes = [
  {
    path: '/',
    component: LoginPageComponent
  },
  {
    path: '404',
    component: NotFoundPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
