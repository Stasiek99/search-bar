import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { MatSnackBarModule } from "@angular/material/snack-bar";

import { SharedModule } from "../shared/shared.module";
import { UserPresentationComponent } from "./components/user-presentation/user-presentation.component";
import { CreateUserComponent } from "../create-user/create-user.component";
import { DialogCreateUserComponent } from "../create-user/components/dialog-create-user/dialog-create-user.component";
import { CreatedUserSnackbarComponent } from "../create-user/components/created-user-snackbar/created-user-snackbar.component";

@NgModule({
  declarations: [
    UserPresentationComponent,
    DialogCreateUserComponent,
    CreateUserComponent,
    CreatedUserSnackbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    SharedModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [UserPresentationComponent]
})
export class UserModule {}
