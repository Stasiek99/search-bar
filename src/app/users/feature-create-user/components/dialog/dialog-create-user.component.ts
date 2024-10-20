import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { MatDialogRef, MatDialogModule } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { UserStateService } from "../../services/user-state.service";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButton
  ],
  templateUrl: './dialog-create-user.component.html',
  styleUrl: './dialog-create-user.component.scss'
})
export class DialogCreateUserComponent {
  constructor(private matDialogRef: MatDialogRef<DialogCreateUserComponent>, private router: Router, private userStateService: UserStateService) {}

  onCloseClicked(): void {
    this.matDialogRef.close();
  }

  redirectToUserPreview(): void {
    const loggedInUser = this.userStateService.getLoggedInUser();
    if (loggedInUser) {
      if (loggedInUser.role === "admin") {
        this.router.navigate(["/", "admin"]);
      } else {
        this.router.navigate(["/", "user-preview"]);
      }
    }
  }
}
