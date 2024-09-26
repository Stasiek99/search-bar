import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  @ViewChild("f") userDataForm!: NgForm;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    const value = this.userDataForm.value;
    this.userService.setUser(value);
    this.redirectToUserPresentation();
  }

  redirectToUserPresentation(): void {
    this.router.navigate(["/", "user"]);
  }
}
