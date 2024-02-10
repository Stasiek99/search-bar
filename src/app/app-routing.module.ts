import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/components/home/home.component";
import { CountrySearchEngineComponent } from "./country-search-engine/country-search-engine/country-search-engine.component";
import { PageNotFoundComponent } from "./views/components/page-not-found/page-not-found.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { UserPresentationComponent } from "./user/components/user-presentation/user-presentation.component";
import { EditUserComponent } from "./create-user/components/edit-user/edit-user.component";
import { SearchHistoryComponent } from "./country-search-engine/components/search-history/search-history.component";

export const routeConfig: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "search-bar", component: CountrySearchEngineComponent},
  {path: "create-new-user", component: CreateUserComponent},
  {path: "user", component: UserPresentationComponent},
  {path: "edit-user", component: EditUserComponent},
  {path: "search-history", component: SearchHistoryComponent},
  {path: "**", pathMatch: "full", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
