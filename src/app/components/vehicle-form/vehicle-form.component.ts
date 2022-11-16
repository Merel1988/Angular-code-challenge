import {Component, Input, OnInit} from '@angular/core';
import {VehicleType} from "../../shared/interfaces";
import {FormBuilder, Validators} from '@angular/forms';
import {carTypes, motorTypes} from "../../shared/constants";
import {KentekenCheck} from 'rdw-kenteken-check'
import {Subscription} from "rxjs";

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})


export class VehicleFormComponent implements OnInit {
  @Input() vehicleType?: VehicleType;
  licencePlateValid: boolean = false;
  showInvalidWarning: boolean = false;
  subscription : Subscription | undefined;
  vehicleInformationForm = this.fb.group({
    vehicleType: [this.vehicleType],
    vehicleSubType: [''],
    licencePlate: ['', Validators.required],
    reportingCode: ['', Validators.required]
  })

  @Input()
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
    this.onChanges();
  }

  onSubmit() {

  }

  onChanges(): void {
    this.subscription = this.vehicleInformationForm.get('licencePlate')?.valueChanges.subscribe(val => {
      if (val && val.length >= 6) {
        this.licencePlateValidation(val);
        console.log('check val? ', val);
      }
    });

  }

  licencePlateValidation(licencePlate: string) {
    let licencePlateInput = new KentekenCheck(licencePlate);
    licencePlateInput.formatLicense();
    console.log(licencePlateInput);
    if (licencePlateInput.newStr.length != 0 && this.subscription && !this.licencePlateValid) {
      this.subscription.unsubscribe();
      this.licencePlateValid = licencePlateInput.valid
      this.vehicleInformationForm.patchValue({licencePlate: licencePlateInput.newStr})
      this.showInvalidWarning = false;
    }
    if(!this.licencePlateValid){
      this.showInvalidWarning = true;
    }

  }


}
