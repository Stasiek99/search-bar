import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { MatFormField, MatSuffix } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatIcon } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";

@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatInput,
    MatIcon,
    MatSuffix,
    MatCardActions,
    MatButton,
    MatCardTitle
  ],
  templateUrl: './login-view.component.html',
  styleUrl: './login-view.component.scss'
})
export class LoginViewComponent {
  hide = true;
  loginForm: FormGroup = new FormGroup<any>({
    "login": new FormControl(null, Validators.required),
    "password": new FormControl(null, Validators.required)
  });

  onSubmit(): void {
    console.log(this.loginForm.value);
  }
}
