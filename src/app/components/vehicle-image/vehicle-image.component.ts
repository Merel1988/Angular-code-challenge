import {Component, Input, OnInit} from '@angular/core';
import {VehicleType} from "../../shared/enums";

@Component({
  selector: 'app-vehicle-image',
  templateUrl: './vehicle-image.component.html',
  styleUrls: ['./vehicle-image.component.css']
})
export class VehicleImageComponent implements OnInit {
  @Input() vehicleType?: VehicleType;
  constructor() { }

  ngOnInit(): void {
  }

}
