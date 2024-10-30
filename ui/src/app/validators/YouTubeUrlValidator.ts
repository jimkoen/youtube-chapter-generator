import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { validateYouTubeUrl } from '../common';

export function createYouTubeUrlValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
                const value = control.value;

                if (!value) {
                        return null;
                }

                const isYouTubeUrl = validateYouTubeUrl(value);
                console.log(isYouTubeUrl)

                return !isYouTubeUrl ? { invalidUrl: true } : null;
        }
}
