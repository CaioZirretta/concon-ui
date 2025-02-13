import { inject, Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private readonly cookieService: CookieService = inject(CookieService);

  createSession(sessionToken: string, userToken: string): boolean {
    if (sessionToken == null || userToken == null || this.isSessionCreated()) {
      return false;
    }

    this.cookieService.set("sessionToken", sessionToken);
    this.cookieService.set("userToken", userToken);

    return true;
  }

  destroySession() {
    this.cookieService.delete("sessionToken");
    this.cookieService.delete("userToken");
  }

  // Checar posteriormente se será necessário atualizar as  duas tokens simultaneamente ou se serão independetes
  isSessionCreated(): boolean {
    return (this.cookieService.check("sessionToken") && this.cookieService.check("userToken"));
  }
}
