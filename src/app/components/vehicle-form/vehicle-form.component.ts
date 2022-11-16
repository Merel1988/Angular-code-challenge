import {Component, Input, OnInit} from '@angular/core';
import {VehicleType} from "../../shared/interfaces";
import {FormBuilder, Validators} from '@angular/forms';
import {carTypes, motorTypes} from "../../shared/constants";

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})


export class VehicleFormComponent implements OnInit {
  @Input() vehicleType?: VehicleType;

  vehicleInformationForm = this.fb.group({
    vehicleType: [this.vehicleType],
    vehicleSubType: [''],
    licencePlate: ['', Validators.required],
    reportingCode: ['', Validators.required]
  })

  @Input()
  get subTypes() {
    if(this.vehicleType === VehicleType.car) {
      return carTypes;
    }
    if(this.vehicleType === VehicleType.motor) {
      return motorTypes;
    }
    return null;
  }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
