import { Component } from '@angular/core';
import { Router } from "@angular/router";

import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { User } from "../../interfaces/user.interface";
import { UserStateService } from "../../services/user-state.service";
import { UserFormComponent } from "../../../shared/components/user-form/user-form.component";
import { DialogCreateUserComponent } from "../dialog-create-user/dialog-create-user.component";
import { CreatedUserSnackbarComponent } from "./created-user-snackbar/created-user-snackbar.component";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  durationInSecond = 5;

  constructor(private userStateService: UserStateService, private router: Router, private dialog: MatDialog, private _snackbar: MatSnackBar) {
  }

  openDialog(userData: User): void {
    let dialogRef: MatDialogRef<DialogCreateUserComponent> = this.dialog.open(DialogCreateUserComponent, {
      height: "200px",
      width: "400px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userStateService.addUser(userData);
        this.openSnackBar();
        this.redirectToUserPreview();
      }
    });
  }

  openSnackBar(): void {
    this._snackbar.openFromComponent(CreatedUserSnackbarComponent, {
      duration: this.durationInSecond * 1000
    });
  }

  redirectToUserPreview(): void {
    this.router.navigate(["/", "user-preview"]);
  }
}
