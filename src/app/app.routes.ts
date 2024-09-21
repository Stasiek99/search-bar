import { Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { CountrySearchEngineComponent } from "./country-search-engine/containers/country-search-engine/country-search-engine.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "search-bar", component: CountrySearchEngineComponent }
];
