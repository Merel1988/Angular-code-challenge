import {Component, Input, OnInit} from '@angular/core';
import {VehicleType} from "../../shared/enums";
import {FormBuilder, Validators} from '@angular/forms';
import {carTypes, motorTypes} from "../../shared/constants";
import {KentekenCheck} from 'rdw-kenteken-check'
import {licencePlateCheckValidator} from "../../shared/validators";

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})


export class VehicleFormComponent implements OnInit {
  @Input()
  vehicleType?: VehicleType;
  formSuccessfully: boolean = false;
  vehicleInformationForm = this.fb.group({
    vehicleType: [this.vehicleType],
    vehicleSubType: [''],
    licencePlate: ['', [Validators.required, licencePlateCheckValidator]],
  })

  get licencePlateInput() {
    return this.vehicleInformationForm.get('licencePlate');
  }

  get subTypes() {
    if (this.vehicleType === VehicleType.car) {
      return carTypes;
    }
    if (this.vehicleType === VehicleType.motor) {
      return motorTypes;
    }
    return null;
  }


  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.vehicleInformationForm.valid){
      this.formSuccessfully = true;
    }
  }

  formatLicencePlate(ev: FocusEvent): void {
    const inputValue = (ev.target as HTMLInputElement).value;
    const licencePlateCheck = new KentekenCheck(inputValue);
    const formatted = licencePlateCheck.formatLicense();
    if (formatted !== 'XX-XX-XX') {
      this.vehicleInformationForm.patchValue({
        licencePlate: formatted
      });
    }
  }


}
