import { NgModule} from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/containers/home.component";
import { SearchEngineComponent } from "./search-engine/feature-search-engine/containers/search-engine.component";
import { PageNotFoundComponent } from "./core/layout/components/page-not-found/page-not-found.component";
import { CreateUserComponent } from "./users/feature-create-user/containers/create-user.component";
import { UserDetailsComponent } from "./users/feature-user-details/containers/user-details.component";
import { EditUserComponent } from "./users/feature-edit-user/containers/edit-user.component";
import { SearchResultListComponent } from "./search-engine/feature-search-result-list/containers/search-result-list.component";
import { LoginViewComponent } from "./auth/feature-login/containers/login-view/login-view.component";
import { UsersListComponent } from "./users/feature-user-list/containers/users-list.component";

export const routeConfig: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "search-bar", component: SearchEngineComponent},
  {path: "search-history", component: SearchResultListComponent},
  {path: "login", component: LoginViewComponent},
  {path: "create-new-user", component: CreateUserComponent},
  {path: "user", component: UserDetailsComponent},
  {path: "edit-user", component: EditUserComponent},
  {path: "users-list", component: UsersListComponent},
  {path: "**", pathMatch: "full", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
