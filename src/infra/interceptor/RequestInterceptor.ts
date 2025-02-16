import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

// Use this to provide this class
// providers: [{
//   provide: HTTP_INTERCEPTORS,
//   useClass: RequestInterceptor,
//   multi: true,
// }]

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const apiRequest = req.clone({ url: environment.apiUrl });

    return next.handle(apiRequest);
  }
}
