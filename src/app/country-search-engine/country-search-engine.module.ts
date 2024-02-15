import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";

import { CountrySearchEngineComponent } from "./country-search-engine/country-search-engine.component";
import { SearchInputComponent } from "./components/search-input/search-input.component";
import { SearchAutocompleteComponent } from "./components/search-autocomplete/search-autocomplete.component";
import { CountrySearchLocalStorageService } from "./services/country-search-local-storage.service";
import { CountrySearchStateService } from "./services/country-search-state.service";
import { SearchHistoryComponent } from './components/search-history/search-history.component';
import { SnackbarSearchAutocompleteErrorComponent } from './components/snackbar-search-autocomplete-error/snackbar-search-autocomplete-error.component';

@NgModule({
  declarations: [
    CountrySearchEngineComponent,
    SearchInputComponent,
    SearchAutocompleteComponent,
    SearchHistoryComponent,
    SnackbarSearchAutocompleteErrorComponent
  ],
  exports: [
    CountrySearchEngineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule
  ],
  providers: [HttpClientModule, CountrySearchLocalStorageService, CountrySearchStateService]
})

export class CountrySearchEngineModule {}
