import {AbstractControl, ValidationErrors} from "@angular/forms";
import {KentekenCheck} from 'rdw-kenteken-check'

export function licencePlateCheckValidator(control: AbstractControl): ValidationErrors | null {
    const kentekenCheck = new KentekenCheck(control.value);
    kentekenCheck.formatLicense();
    const isValidKenteken = kentekenCheck.valid;
    if(! isValidKenteken) {
      return {kentekenCheck: false};
    }
    return null;
}
