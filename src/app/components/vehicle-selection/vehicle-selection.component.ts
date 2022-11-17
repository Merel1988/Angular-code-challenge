import { Component, OnInit } from '@angular/core';
import {VehicleType} from "../../shared/enums";

@Component({
  selector: 'app-vehicle-selection',
  templateUrl: './vehicle-selection.component.html',
  styleUrls: ['./vehicle-selection.component.css']
})
export class VehicleSelectionComponent implements OnInit {
  vehicleType : VehicleType = VehicleType.car;
  vehicleTypes = VehicleType;
  constructor() { }

  ngOnInit(): void {
  }

}
