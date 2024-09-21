import { Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { CountrySearchEngineComponent } from "./country-search-engine/containers/country-search-engine/country-search-engine.component";
import { NotFoundComponent } from "./views/not-found/not-found.component";
import { CreateUserComponent } from "./new-user/components/create-user/create-user.component";
import { UserPresentationComponent } from "./new-user/components/user-presentation/user-presentation.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "search-bar", component: CountrySearchEngineComponent },
  { path: "create-user", component: CreateUserComponent },
  { path: "user", component: UserPresentationComponent },
  { path: "**", pathMatch: "full", component: NotFoundComponent }
];
