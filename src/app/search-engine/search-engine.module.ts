import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";

import { SearchEngineComponent } from "./feature-search-engine/containers/search-engine.component";
import { SearchInputComponent } from "./feature-search-engine/components/search-input/search-input.component";
import { SearchAutocompleteComponent } from "./feature-search-engine/components/search-autocomplete/search-autocomplete.component";
import { CountrySearchLocalStorageService } from "./feature-search-result-list/services/country-search-local-storage.service";
import { CountrySearchStateService } from "./feature-search-result-list/services/country-search-state.service";
import { SearchResultListComponent } from './feature-search-result-list/containers/search-result-list.component';
import { SnackbarSearchAutocompleteErrorComponent } from './feature-search-engine/components/snackbar/snackbar-search-autocomplete-error.component';

@NgModule({
  declarations: [
    SearchEngineComponent,
    SearchInputComponent,
    SearchAutocompleteComponent,
    SearchResultListComponent,
    SnackbarSearchAutocompleteErrorComponent
  ],
  exports: [
    SearchEngineComponent
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

export class SearchEngineModule {}
