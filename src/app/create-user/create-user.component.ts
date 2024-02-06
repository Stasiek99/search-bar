import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";

import { User } from "../user/interfaces/user.interface";
import { UserStateService } from "../user/services/user-state.service";
import { DialogCreateUserComponent } from "./components/dialog-create-user/dialog-create-user.component";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {

  constructor(private userService: UserStateService, private router: Router, private dialog: MatDialog) {
  }

  openDialog(userData: User): void {
    let dialogRef: MatDialogRef<DialogCreateUserComponent> = this.dialog.open(DialogCreateUserComponent, {
      height: "200px",
      width: "400px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.setUser(userData);
        this.redirectToUserPreview();
      }
    });
  }

  redirectToUserPreview(): void {
    this.router.navigate(["/", "user"]);
  }
}
