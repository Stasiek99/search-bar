import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { UserFormComponent } from "./user-form/user-form.component";

@NgModule({
  declarations: [UserFormComponent],
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [UserFormComponent]
})
export class SharedModule {}