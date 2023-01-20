import { AbstractControl, FormGroup } from "@angular/forms";

export interface IEnderecoForm extends FormGroup{
  value: IEndereco;
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

 export interface IEndereco {
  id: number,
  nome: string,
  telefone: string,
  email: string,
  cpf: string,
  cep: string,
  logradouro:string,
  numero: string,
  bairro:string,
  cidade: string,
  estado: string,
  complemento: string
}
