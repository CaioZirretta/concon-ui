import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../services/session.service';
import { inject } from '@angular/core';


export const AuthGuard: CanActivateFn = (): boolean => {
  const sessionService: SessionService = inject(SessionService);
  const router: Router = inject(Router);

  if (!sessionService.isSessionCreated()) {
    void router.navigate(['/login']);
    return false;
  }

  return true;
}
