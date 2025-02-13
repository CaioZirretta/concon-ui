import { Component, inject, OnInit } from '@angular/core';
import { LoginService, UserLoginReq } from '../../services/login.service';
import { SessionService } from '../../../../shared/services/session.service';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TuiAlert, TuiAlertService } from '@taiga-ui/core';

@Component({
    selector: 'cc-login',
  imports: [
    ReactiveFormsModule
  ],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    providers: [LoginService, SessionService]
})
export class LoginPageComponent implements OnInit{
  private readonly loginService = inject(LoginService);
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

  login(): void {
    if (!this.form.valid) {
      alert("invalid");
    }

    const payload: UserLoginReq = {
      username: this.form.controls['username'].value,
      password: this.form.controls['password'].value,
    }

    this.loginService.login(payload)
      .subscribe({
        next: (result) => {},
      })
  }

}
