// Angular Imports
import { FormGroup } from '@angular/forms'

export const mustMatch = (controlName: string, matchControlName: string) => {
	return (formGroup: FormGroup): void => {
		const control = formGroup.controls[controlName]
		const matchControl = formGroup.controls[matchControlName]
		if (matchControl.errors && !matchControl.errors['mustMatch']) {
			// return if another validator has already found an error on the matchingControl
			return
		}
		if (control.value !== matchControl.value) {
			// set error on matchingControl if validation fails
			matchControl.setErrors({ mustMatch: true })
		} else {
			matchControl.setErrors(null)
		}
	}
}
