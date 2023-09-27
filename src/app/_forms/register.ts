import { FormControl, FormGroup, Validators } from "@angular/forms";

export const registerForm = new FormGroup({
  email: new FormControl("", [Validators.required, Validators.email]),
  password      : new FormControl("", [Validators.required, Validators.minLength(6)]),
  passwordConfirmation: new FormControl("", [Validators.required,  Validators.minLength(6)]),
})

