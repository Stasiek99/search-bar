import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";

import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserModule } from "../user/user.module";
import { SidenavComponent } from './components/sidenav/sidenav.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    UserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    RouterLink
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    PageNotFoundComponent
  ]
})
export class ViewsModule {}
