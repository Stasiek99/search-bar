import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { CountryDataService } from "./country-search-engine/services/country-data.service";
import { CountrySearchEngineModule } from "./country-search-engine/country-search-engine.module";
import { ViewsModule } from "./views/views.module";
import { routeConfig } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CountrySearchEngineModule,
    ViewsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [HttpClientModule, CountryDataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
