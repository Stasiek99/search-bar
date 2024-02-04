import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { CountryDataService } from "./country-search-engine/services/country-data.service";
import { CountrySearchEngineModule } from "./country-search-engine/country-search-engine.module";
import { ViewsModule } from "./views/views.module";
import { AppRoutingModule } from "./app-routing.module";
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountrySearchEngineModule,
    ViewsModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule, CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
