import { Routes } from "@angular/router";
import { HomeComponent } from "./views/components/home/home.component";
import { CountrySearchEngineComponent } from "./country-search-engine/country-search-engine/country-search-engine.component";

export const routeConfig: Routes = [
  {path: "", component: HomeComponent},
  {path: "search-bar", component: CountrySearchEngineComponent}
];
