import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";

import { UserService } from "../user-presentation/services/user.service";
import { DialogCreateUserComponent } from "./dialog-create-user/dialog-create-user.component";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  @ViewChild("f") userDataForm!: NgForm;
  passedValues: any;

  constructor(private userService: UserService, private router: Router, private dialog: MatDialog) {
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogCreateUserComponent, {
      data: this.userDataForm,
      height: "200px",
      width: "400px"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.passedValues = result.value;
        this.userService.setUser(this.passedValues);
        this.redirectToUserPresentation();
      }
    });
  }

  redirectToUserPresentation(): void {
    this.router.navigate(["/", "user"]);
  }
}
