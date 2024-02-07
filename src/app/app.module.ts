import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { CountrySearchLocalStorageService } from "./country-search-engine/services/country-search-local-storage.service";
import { CountrySearchEngineModule } from "./country-search-engine/country-search-engine.module";
import { ViewsModule } from "./views/views.module";
import { SharedModule } from "./shared/shared.module";
import { EditUserComponent } from './create-user/components/edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    CountrySearchEngineModule,
    ViewsModule,
    SharedModule
  ],
  providers: [HttpClientModule, CountrySearchLocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
