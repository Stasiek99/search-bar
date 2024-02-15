import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { EditUserComponent } from "./containers/edit-user.component";
///////////////////////TODO
import { SharedModule } from "../../shared/shared.module";
import { UserFormComponent } from "../../shared/ui/user-form/user-form.component";

@NgModule({
  declarations: [EditUserComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    SharedModule
  ],
  exports: [
    EditUserComponent,
    UserFormComponent
  ]
})
export class EditUserModule {}
