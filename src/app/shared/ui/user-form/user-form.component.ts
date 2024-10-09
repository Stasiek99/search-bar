import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, Validators, FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";

import { User } from "../../../users/feature-user-details/interfaces/user.interface";

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ MatFormFieldModule, MatInput, MatButton, CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent implements OnInit {
  @Input() userData: User = {} as User;
  @Output() formSubmit: EventEmitter<User> = new EventEmitter<User>();

  userForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: [this.userData.name || "", [Validators.required]],
      login: [this.userData.login || "", [Validators.required]],
      password: [this.userData.password || "", [Validators.required]],
      country: [this.userData.country || "", [Validators.required]],
      age: [this.userData.age || "", [Validators.required, Validators.min(18)]],
    })
  }

  onFormSubmit(): void {
    if (this.userForm?.valid) {
      this.formSubmit.emit(this.userForm.value);
      this.redirectToUserPreview();
    }
  }

  redirectToUserPreview(): void {
    this.router.navigate(["/", "user-preview"]);
  }

  get formControls() {
    return this.userForm.controls;
  }
}
