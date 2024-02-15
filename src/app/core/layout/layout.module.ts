import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import { SidenavComponent} from "./components/sidenav/sidenav.component";


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    SidenavComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    PageNotFoundComponent
  ]
})
export class LayoutModule { }
