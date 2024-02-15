import { Component } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-dialog-create-user',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(private matDialogRef: MatDialogRef<DialogComponent>) {
  }

  onCloseClicked(): void {
    this.matDialogRef.close();
  }
}
