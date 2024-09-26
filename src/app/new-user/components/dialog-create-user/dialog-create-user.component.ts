import { Component, Inject } from '@angular/core';

import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle, MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";

import { User } from "../../interfaces/user.interface";

@Component({
  selector: 'app-dialog-create-user',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose
  ],
  templateUrl: './dialog-create-user.component.html',
  styleUrl: './dialog-create-user.component.scss'
})
export class DialogCreateUserComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: User, private matDialogRef: MatDialogRef<DialogCreateUserComponent>) {}

  onCloseClicked(): void {
    this.matDialogRef.close();
  }
}
