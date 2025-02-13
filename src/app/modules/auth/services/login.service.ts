import { inject, Injectable } from '@angular/core';
import { catchError, map, Observable, of, take, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SessionService } from '../../shared/service/session.service';
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

  private readonly urlLogin: string = '/login';
  private readonly urlLogout: string = '/login';

  login(user: UserLoginReq): Observable<boolean> {
    // return this.http.post<UserLoginRes>(this.urlLogin, user)
    return of<UserLoginRes>({
      sessionToken: "ST-123",
      userToken: "UT-456"
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
            this.alerts.open('Houve um erro ao realizar o login.', { label: 'Erro' }).subscribe().unsubscribe();
            return false;
          }

          return true;
        })
      );
  }

  logout(): Observable<boolean> {
    // const token = ...

    // return this.http.post(token, this.urlLogout)
    //   .pipe(
    //     catchError(error => {
    //       return throwError(() => error);
    //     }),
    //     map(() => this.sessionService.destroySession())
    //   )

    this.sessionService.destroySession();
    return of(true);
  }

  isAuthenticated(): boolean {
    return this.sessionService.isSessionCreated();
  }
}
