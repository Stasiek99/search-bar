import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { User } from "../../../feature-user-details/interfaces/user.interface";
import { UserStateService } from "../../services/user-state.service";
import { UserFormComponent } from "../../../../shared/ui/user-form/user-form.component";
import { DialogCreateUserComponent } from "../../components/dialog/dialog-create-user.component";
import { CreatedUserSnackbarComponent } from "../../components/snackbar/created-user-snackbar.component";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  durationInSecond = 5;

  constructor(private userStateService: UserStateService, private dialog: MatDialog, private snackbar: MatSnackBar) {
  }

  openDialog(userData: User): void {
    let dialogRef: MatDialogRef<DialogCreateUserComponent> = this.dialog.open(DialogCreateUserComponent, {
      height: "200px",
      width: "400px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userStateService.addUser(userData);
        this.userStateService.setLoggedInUser(userData);
        this.openSnackBar();
      }
    });
  }

  openSnackBar(): void {
    this.snackbar.openFromComponent(CreatedUserSnackbarComponent, {
      duration: this.durationInSecond * 1000
    });
  }
}
