import { Component } from '@angular/core';

import { MatDialogRef, MatDialogModule } from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-dialog-create-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButton
  ],
  templateUrl: './dialog-create-user.component.html',
  styleUrl: './dialog-create-user.component.scss'
})
export class DialogCreateUserComponent {
  constructor(private matDialogRef: MatDialogRef<DialogCreateUserComponent>) {}

  onCloseClicked(): void {
    this.matDialogRef.close();
  }
}
