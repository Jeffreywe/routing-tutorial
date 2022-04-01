import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { HelpComponent } from './help/help.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "help/:ec", component: HelpComponent },
  { path: "history", component: HistoryComponent },
  { path: "admin/login", component: AdminLoginComponent },
  { path: "admin", component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
