import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";

import { User } from "../../user/interfaces/user.interface";

@Component({
  selector: 'app-user-form',
  templateUrl: 'user-form.component.html',
  styleUrls: ['user-form.component.scss']
})
export class UserFormComponent {
  @Input() userData: User = {} as User;
  @Output() formSubmit: EventEmitter<User> = new EventEmitter<User>();

  constructor(private router: Router) {
  }

  onFormSubmit(form: NgForm): void {
    if (form.valid) {
      this.formSubmit.emit(form.value);
    }
  }

  // onEditUser(editedUser: User): void {
  //   console.log(editedUser);
  //   this.editUser.emit(editedUser);
  //   this.redirectToUserPreview();
  // }

  redirectToUserPreview(): void {
    this.router.navigate(["/", "user"]);
  }
}
