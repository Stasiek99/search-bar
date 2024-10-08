import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from "@angular/router";
import { FormsModule, NgForm } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { trigger, state, style, transition, animate } from "@angular/animations";

import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatButton } from "@angular/material/button";

import { User } from "../../../users/feature-user-details/interfaces/user.interface";

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInput, MatButton, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
  animations: [  // Definicja animacji dla @transitionMessages
    trigger('transitionMessages', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate('500ms ease-in')]),
      transition(':leave', [animate('500ms ease-out', style({ opacity: 0 }))])
    ])
  ]
})
export class UserFormComponent {
  @Input() userData: User = {} as User;
  @Output() formSubmit: EventEmitter<User> = new EventEmitter<User>();

  constructor(private router: Router) {}

  onFormSubmit(form: NgForm): void {
    if (form.valid) {
      this.formSubmit.emit(form.value);
      this.redirectToUserPreview()
    }
  }

  redirectToUserPreview(): void {
    this.router.navigate(["/", "user-preview"]);
  }
}
