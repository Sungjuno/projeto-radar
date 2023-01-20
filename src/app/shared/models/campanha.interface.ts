import { AbstractControl, FormGroup } from "@angular/forms";

export interface ICampanhaForm extends FormGroup{
  value: ICampanha;
  controls: {
    id: AbstractControl,
    loja_id: AbstractControl,
    nome: AbstractControl,
    descricao: AbstractControl,
    dt_criacao: AbstractControl,
    photo_url: AbstractControl,
  }
}

 export interface ICampanha {
  id: number,
  loja_id: number,
  nome: string,
  descricao: string,
  dt_criacao: Date,
  photo_url: string,
}
