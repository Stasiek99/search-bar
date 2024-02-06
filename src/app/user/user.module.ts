import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";

import { SharedModule } from "../shared/shared.module";
import { UserPresentationComponent } from "./components/user-presentation/user-presentation.component";
import { CreateUserComponent } from "../create-user/create-user.component";
import { DialogCreateUserComponent } from "../create-user/components/dialog-create-user/dialog-create-user.component";

@NgModule({
  declarations: [
    UserPresentationComponent,
    DialogCreateUserComponent,
    CreateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    SharedModule
  ],
  exports: [UserPresentationComponent]
})
export class UserModule {}
