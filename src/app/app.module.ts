import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { CountryDataService } from "./country-search-engine/services/country-data.service";
import { CountrySearchEngineModule } from "./country-search-engine/country-search-engine.module";
import { ViewsModule } from "./views/views.module";
import { SharedModule } from "./shared/shared.module";
import { AuthModule } from "./auth/auth.module";
import { EditUserComponent } from './create-user/components/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    CountrySearchEngineModule,
    ViewsModule,
    SharedModule,
    AuthModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [HttpClientModule, CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
