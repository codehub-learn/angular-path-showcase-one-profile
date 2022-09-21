import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./modules/home/home.component";
import {JokesListComponent} from "./modules/jokes-list/jokes-list.component";
import {AboutUsComponent} from "./modules/about-us/about-us.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "jokeslist",
    component: JokesListComponent
  },
  {
    path: "aboutus",
    component: AboutUsComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
