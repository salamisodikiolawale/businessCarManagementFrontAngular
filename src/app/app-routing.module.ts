import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import { RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  //{ path:'cars', component: CarListComponent},
  //{ path:'dashboard', component: CarComponent},
  //{ path:'login', component: LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
