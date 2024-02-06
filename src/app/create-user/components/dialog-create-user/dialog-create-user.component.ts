import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-create-user',
  templateUrl: './dialog-create-user.component.html',
  styleUrls: ['./dialog-create-user.component.scss']
})
export class DialogCreateUserComponent {
  constructor(private matDialogRef: MatDialogRef<DialogCreateUserComponent>) {
  }

  onCloseClicked(): void {
    this.matDialogRef.close();
  }
}
