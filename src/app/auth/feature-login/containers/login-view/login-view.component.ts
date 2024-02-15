import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
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
