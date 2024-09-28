import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { User } from "../../interfaces/user.interface";
import { UserStateService } from "../../services/user-state.service";
import { UserFormComponent } from "../../../shared/components/user-form/user-form.component";
import { DialogCreateUserComponent } from "../dialog-create-user/dialog-create-user.component";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  constructor(private userStateService: UserStateService, private router: Router, private dialog: MatDialog) {
  }

  openDialog(userData: User): void {
    let dialogRef: MatDialogRef<DialogCreateUserComponent> = this.dialog.open(DialogCreateUserComponent, {
      height: "200px",
      width: "400px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userStateService.setUser(userData);
        this.redirectToUserPreview();
      }
    });
  }

  redirectToUserPreview(): void {
    this.router.navigate(["/", "user"]);
  }
}
