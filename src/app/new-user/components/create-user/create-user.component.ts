import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { MatFormField } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButton } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatInput } from "@angular/material/input";

import { UserService } from "../../services/user.service";
import { DialogCreateUserComponent } from "../dialog-create-user/dialog-create-user.component";

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule, MatFormField, MatButton, MatInput, MatInputModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {
  @ViewChild("f") userDataForm!: NgForm;
  passedValues: any;

  constructor(private userService: UserService, private router: Router, private dialog: MatDialog) {}

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
