import { inject, Injectable, OnDestroy } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UnsubscribeService implements OnDestroy{
  private readonly _destroy = new Subject<void>();
  public readonly destroy = this._destroy.asObservable();

  public ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }
}
