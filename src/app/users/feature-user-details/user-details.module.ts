import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";

import { UserDetailsComponent } from "./containers/user-details.component";

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports: [UserDetailsComponent]
})
export class UserDetailsModule {}
