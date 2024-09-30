import { Routes } from '@angular/router';

import { HomeComponent } from "./views/components/home/home.component";
import { CountrySearchEngineComponent } from "./country-search-engine/containers/country-search-engine/country-search-engine.component";
import { NotFoundComponent } from "./views/components/not-found/not-found.component";
import { CreateUserComponent } from "./new-user/components/create-user/create-user.component";
import { UserPresentationComponent } from "./new-user/components/user-presentation/user-presentation.component";
import { EditUserComponent } from "./new-user/components/edit-user/edit-user.component";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "search-bar", component: CountrySearchEngineComponent },
  { path: "new-user", component: CreateUserComponent },
  { path: "user-preview", component: UserPresentationComponent },
  { path: "edit-user", component: EditUserComponent },
  { path: "**", pathMatch: "full", component: NotFoundComponent }
];
