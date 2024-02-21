import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { UserInterface } from "../../feature-user-details/interfaces/user.interface";
import { UserStateService } from "../services/user-state.service";
import { DialogComponent } from "../components/dialog/dialog.component";
import { SnackbarComponent } from "../components/snackbar/snackbar.component";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  durationInSeconds = 5;
  constructor(private userService: UserStateService, private router: Router, private dialog: MatDialog, private snackbar: MatSnackBar) {
  }

  openDialog(userData: UserInterface): void {
    let dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, {
      height: "200px",
      width: "400px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.addUser(userData);
        this.openSnackBar();
        this.redirectToUserPreview();
      }
    });
  }

  openSnackBar(): void {
    this.snackbar.openFromComponent(SnackbarComponent, {
      duration: this.durationInSeconds * 1000
    });
  }

  redirectToUserPreview(): void {
    this.router.navigate(["/", "user"]);
  }
}
