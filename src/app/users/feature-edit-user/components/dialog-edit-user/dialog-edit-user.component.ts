import { Component } from '@angular/core';
import { Router } from "@angular/router";

import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {UserStateService} from "../../../feature-create-user/services/user-state.service";

@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  constructor(private matDialogRef: MatDialogRef<DialogEditUserComponent>, private router: Router, private userStateService: UserStateService) {}

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
