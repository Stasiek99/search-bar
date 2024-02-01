import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class ViewsModule {}
