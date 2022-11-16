import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VehicleSelectionComponent} from "./components/vehicle-selection/vehicle-selection.component";

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    component: VehicleSelectionComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
