import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeComponent } from "./containers/home.component";

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [CommonModule],
  exports: [HomeComponent]
})
export class HomeModule {}
