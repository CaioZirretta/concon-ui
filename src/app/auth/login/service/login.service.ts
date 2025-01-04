import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, take, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../../shared/service/session.service';
import { TuiAlertService } from '@taiga-ui/core';

export type UserLoginReq = {
  username: string,
  password: string
}

export type UserLoginRes = {
  sessionToken: string,
  userToken: string,
}

@Injectable()
export class LoginService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly sessionService: SessionService = inject(SessionService);
  private readonly alerts = inject(TuiAlertService);

  private readonly url: string = '/login';

  login(user: UserLoginReq): Observable<boolean> {
    // return this.http.post<UserLoginRes>(this.url, user)
    return of<UserLoginRes>({
      sessionToken: "123",
      userToken: "456"
    })
      .pipe(
        take(1),
        catchError(error => {
          return throwError(() => error);
        }),
        map(response => {
          const { sessionToken, userToken } = response;

          const sessionSuccess: boolean = this.sessionService.createSession(sessionToken, userToken);

          if (!sessionSuccess) {
            this.alerts.open('Houve um erro ao realizar o login.', { label: 'Erro' }).subscribe();
            return false;
          }

          return true;
        })
      );
  }

  logout(): Observable<boolean> {
    // const userToken = this.sessionService.getSessionToken()
    // return this.http.post(userToken)
    return of(true);
  }
}
