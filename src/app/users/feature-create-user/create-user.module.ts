import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { CreateUserComponent } from "./containers/create-user.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { SnackbarComponent } from "./components/snackbar/snackbar.component";
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    CreateUserComponent,
    DialogComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule,
    SharedModule
  ],
  exports: [CreateUserComponent]
})
export class CreateUserModule { }
