import { AbstractControl, FormGroup } from '@angular/forms';


export interface ILoginForm extends FormGroup{
  value: ILogin;
  controls: {
  id: AbstractControl,
  email: AbstractControl,
  senha: AbstractControl,
}
}

export interface ILogin {
  id: number,
  email: string,
  senha: string
}
