import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly cookieService: CookieService = inject(CookieService);

  createSession(sessionToken: string, userToken: string): boolean {
    if (sessionToken == null || userToken == null) {
      return false;
    }

    this.cookieService.set("sessionToken", sessionToken);
    this.cookieService.set("userToken", userToken);

    return true;
  }
}
