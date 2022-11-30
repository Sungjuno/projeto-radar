import { AbstractControl, FormGroup } from "@angular/forms";

export interface IClienteForm extends FormGroup{
  value: ICliente;
  controls: {
    id: AbstractControl,
    nome: AbstractControl,
    telefone: AbstractControl,
    email: AbstractControl,
    cpf: AbstractControl,
    cep: AbstractControl,
    logradouro:AbstractControl,
    numero: AbstractControl,
    bairro:AbstractControl,
    cidade: AbstractControl,
    estado: AbstractControl,
    complemento: AbstractControl
  }
}

 export interface ICliente {
  id: number,
  nome: string,
  telefone: number,
  email: string,
  cpf: number,
  cep: number,
  logradouro:string,
  numero: number,
  bairro:string,
  cidade: string,
  estado: string,
  complemento: string
}
