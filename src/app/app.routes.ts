import { Routes } from '@angular/router';
import { LoginPageComponent } from './modules/auth/pages/login/login-page.component';
import { NotFoundPageComponent } from './modules/auth/pages/not-found/not-found-page.component';
import { AuthGuard } from './shared/guard/auth.guard';

export const routes: Routes = [
  {
    path: '',
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
