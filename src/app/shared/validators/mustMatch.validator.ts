// Angular Imports
import { FormGroup } from '@angular/forms'

export const mustMatch = (controlName: string, matchControlName: string) => {
	return (formGroup: FormGroup): void => {
		// Must Match, control check empty space.
		const control = formGroup.controls[controlName]
		// MatchContro = let's assign form group.
		const matchControl = formGroup.controls[matchControlName]
		// Inputs must be complete..
		if (matchControl.errors && !matchControl.errors['mustMatch']) {
			return
		}
		// if the value does not match the field. Changed mustMatch true.
		// else the value does not correctly. null.
		if (control.value !== matchControl.value) {
			matchControl.setErrors({ mustMatch: true })
		} else {
			matchControl.setErrors(null)
		}
	}
}
