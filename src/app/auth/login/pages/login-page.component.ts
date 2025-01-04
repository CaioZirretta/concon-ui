import { Component, inject, OnInit } from '@angular/core';
import { LoginService, UserLoginReq } from '../service/login.service';
import { SessionService } from '../../../shared/service/session.service';
import { ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'cc-login-page',
  imports: [
    ReactiveFormsModule
  ],
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.css',
    providers: [LoginService, SessionService]
})
export class LoginPageComponent implements OnInit{
  private readonly loginService: LoginService = inject(LoginService);
  private readonly formBuilder: UntypedFormBuilder = inject(UntypedFormBuilder);

  protected form: UntypedFormGroup = this.formBuilder.group({
    username: [ '', [ Validators.required, Validators.min(1) ] ],
    password: [ '', [ Validators.required ], Validators.min(8) ],
  });

  ngOnInit() {
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
