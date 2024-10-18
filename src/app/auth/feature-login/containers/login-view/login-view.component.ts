import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle } from "@angular/material/card";
import { MatFormField, MatSuffix } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatInput } from "@angular/material/input";

import { UserStateService } from "../../../../users/feature-create-user/services/user-state.service";


@Component({
  selector: 'app-login-view',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatFormField,
    MatInput,
    MatIcon,
    MatSuffix,
    MatCardActions,
    MatButton,
    MatCardTitle,
    ReactiveFormsModule,
    MatIconButton
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

  constructor(private userStateService: UserStateService, private router: Router) {}

  onSubmit(): void {
    const { login, password } = this.loginForm.value;
    const loginSuccess = this.userStateService.loginUser(login, password);

    if (loginSuccess) {
      if (login === "admin" && password === "admin") {
        console.log("User logged in successfully");
        this.redirectToAdminPanel();
      } else {
        console.log("User logged in successfully");
        this.redirectToUserDashboard();
      }
    } else {
      console.log("Invalid login credentials");
    }
  }

  private redirectToUserDashboard(): void {
    this.router.navigate(['/', "user-preview"]);
  }

  private redirectToAdminPanel(): void {
    this.router.navigate(["/", "admin"]);
  }
}
