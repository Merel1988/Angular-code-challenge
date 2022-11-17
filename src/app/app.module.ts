import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { VehicleSelectionComponent } from './components/vehicle-selection/vehicle-selection.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleImageComponent } from './components/vehicle-image/vehicle-image.component';
import { EnumToArrayPipe } from './shared/enum-to-array.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VehicleSelectionComponent,
    VehicleFormComponent,
    VehicleImageComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
