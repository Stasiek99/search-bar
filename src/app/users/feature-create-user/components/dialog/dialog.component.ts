import { Component } from '@angular/core';

import { MatDialogRef, MatDialogModule } from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButton
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {
  constructor(private matDialogRef: MatDialogRef<DialogComponent>) {}

  onCloseClicked(): void {
    this.matDialogRef.close();
  }
}
