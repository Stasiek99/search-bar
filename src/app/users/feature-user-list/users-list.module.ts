import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from "@angular/material/table";

import { UsersListComponent } from "./containers/users-list.component";

@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class UsersListModule {}
