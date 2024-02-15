import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { CountryDataService } from "./search-engine/feature-search-engine/services/country-data.service";
import { SearchEngineModule } from "./search-engine/search-engine.module";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { LayoutModule } from "./core/layout/layout.module";
import { HomeModule } from "./home/home.module";
import { CreateUserModule } from "./users/feature-create-user/create-user.module";
import { EditUserModule } from "./users/feature-edit-user/edit-user.module";
import { UserDetailsModule } from "./users/feature-user-details/user-details.module";
import { UsersListModule } from "./users/feature-user-list/users-list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatSidenavModule,
    SearchEngineModule,
    SharedModule,
    AuthModule,
    LayoutModule,
    HomeModule,
    CreateUserModule,
    EditUserModule,
    UserDetailsModule,
    UsersListModule,
    MatSidenavModule
  ],
  providers: [HttpClientModule, CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
