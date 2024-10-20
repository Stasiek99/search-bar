import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";

import { User } from "../../../feature-user-details/interfaces/user.interface";
import { UserStateService } from "../../../feature-create-user/services/user-state.service";
import { UserFormComponent } from "../../../../shared/ui/user-form/user-form.component";
import { DialogEditUserComponent } from "../../components/dialog-edit-user/dialog-edit-user.component";
import { SnackbarEditUserComponent } from "../../components/snackbar-edit-user/snackbar-edit-user.component";


@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [UserFormComponent],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss'
})
export class EditUserComponent {
  editedUser: User = {} as User;
  durationInSecond = 5;

  constructor(private userStateService: UserStateService, private dialog: MatDialog, private snackbar: MatSnackBar) {}

  onFormSubmit(editedUser: User): void {
    this.openDialog(editedUser);
  }

  openDialog(editedUser: User): void {
    let dialogRef: MatDialogRef<DialogEditUserComponent> = this.dialog.open(DialogEditUserComponent, {
      height: "200px",
      width: "400px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userStateService.editLoggedInUser(editedUser);
        this.openSnackBar();
      }
    });
  }

  openSnackBar(): void {
    this.snackbar.openFromComponent(SnackbarEditUserComponent, {
      duration: this.durationInSecond * 1000
    })
  }
}
