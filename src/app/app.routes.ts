import { Routes } from '@angular/router';

import { HomeComponent } from "./home/containers/home/home.component";
import { CountrySearchEngineComponent } from "./search-engine/feature-search-engine/containers/country-search-engine/country-search-engine.component";
import { NotFoundComponent } from "./core/layout/components/not-found/not-found.component";
import { CreateUserComponent } from "./users/feature-create-user/containers/create-user/create-user.component";
import { UserDetailsComponent } from "./users/feature-user-details/containers/user-details/user-details.component";
import { EditUserComponent } from "./users/feature-edit-user/containers/edit-user/edit-user.component";
import { SearchResultListComponent } from "./search-engine/feature-search-result-list/containers/search-result-list/search-result-list.component";
import { LoginViewComponent } from "./auth/feature-login/containers/login-view/login-view.component";
import { UsersListComponent } from "./users/feature-user-list/containers/users-list/users-list.component";
import { UserAuthGuard } from "./auth/guards/user-auth.guard";
import { AdminPanelComponent } from "./users/admin/admin-panel/admin-panel.component";
import { AdminAuthGuard } from "./auth/guards/admin-auth.guard";

export const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "search-bar", component: CountrySearchEngineComponent },
  { path: "search-result-list", component: SearchResultListComponent, canActivate: [UserAuthGuard] },
  { path: "login", component: LoginViewComponent },
  { path: "new-user", component: CreateUserComponent },
  { path: "user-preview", component: UserDetailsComponent },
  { path: "users-list", component: UsersListComponent },
  { path: "edit-user", component: EditUserComponent },
  { path: "admin-panel", component: AdminPanelComponent, canActivate: [AdminAuthGuard] },
  { path: "**", pathMatch: "full", component: NotFoundComponent }
];
