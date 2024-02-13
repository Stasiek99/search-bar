import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { User } from "../user/interfaces/user.interface";
import { UserStateService } from "../user/services/user-state.service";
import { DialogCreateUserComponent } from "./components/dialog-create-user/dialog-create-user.component";
import { CreatedUserSnackbarComponent } from "./components/created-user-snackbar/created-user-snackbar.component";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  durationInSeconds = 5;
  constructor(private userService: UserStateService, private router: Router, private dialog: MatDialog, private _snackbar: MatSnackBar) {
  }

  openDialog(userData: User): void {
    let dialogRef: MatDialogRef<DialogCreateUserComponent> = this.dialog.open(DialogCreateUserComponent, {
      height: "200px",
      width: "400px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.setUser(userData);
        this.openSnackBar();
        this.redirectToUserPreview();
      }
    });
  }

  openSnackBar(): void {
    this._snackbar.openFromComponent(CreatedUserSnackbarComponent, {
      duration: this.durationInSeconds * 1000
    });
  }

  redirectToUserPreview(): void {
    this.router.navigate(["/", "user"]);
  }
}
