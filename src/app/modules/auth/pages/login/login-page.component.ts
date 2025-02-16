import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { LoginService, UserLoginReq } from '../../services/login.service';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TuiAlertService } from '@taiga-ui/core';
import { UnsubscribeService } from '@shared/services/unsubscribe.service';
import { takeUntil } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';

@Component({
    selector: 'cc-login-page',
  imports: [
    ReactiveFormsModule,
    NgOptimizedImage
  ],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    providers: [LoginService, UnsubscribeService]
})
export class LoginPageComponent implements OnInit, OnDestroy {
  private readonly loginService = inject(LoginService);
  private readonly unsubscribeService = inject(UnsubscribeService);
  private readonly formBuilder = inject(UntypedFormBuilder);
  private readonly router = inject(Router);
  private readonly alert = inject(TuiAlertService);

  protected form: UntypedFormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.min(1)]],
    password: ['', [Validators.required, Validators.min(8)]],
  });

  ngOnInit() {
    if (this.loginService.isAuthenticated()) {
      void this.router.navigate(['/']);
    }
  }

  ngOnDestroy() {
  }

  login(): void {
    if (!this.form.valid) {
      this.alert.open("Notification")
        .pipe(takeUntil(this.unsubscribeService.destroy))
        .subscribe();
    }

    const payload: UserLoginReq = {
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value,
    }

    this.loginService.login(payload)
      .pipe(takeUntil(this.unsubscribeService.destroy))
      .subscribe({
        next: () => {},
      })
  }

}
