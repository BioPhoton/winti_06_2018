import {AbstractControl, ValidationErrors} from '@angular/forms';

export function minAge(requiredAge: number) {
  return function (control: AbstractControl): ValidationErrors | null {
    if (control.value < requiredAge) {
      return {
        minAge: {
          // requiredAge: requiredAge,
          requiredAge,
          actualAge: control.value
        }
      }
    }
    return null;
  }
}

/*
 export function minAge(control: AbstractControl): ValidationErrors | null {
 const requiredAge = 10;

 if (control.value < requiredAge) {
 return {
 minAge: {
 // requiredAge: requiredAge,
 requiredAge,
 actualAge: control.value
 }
 }
 }
 return null;
 }
 */
