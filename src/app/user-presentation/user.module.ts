import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserPresentationComponent } from "./components/user-presentation/user-presentation.component";

@NgModule({
  declarations: [UserPresentationComponent],
  imports: [CommonModule],
  exports: [UserPresentationComponent]
})
export class UserModule {}
