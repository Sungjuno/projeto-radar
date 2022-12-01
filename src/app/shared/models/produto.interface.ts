import { AbstractControl, FormGroup } from '@angular/forms';


export interface IProdutoForm extends FormGroup{
  value: IProduto;
  controls: {
  id: AbstractControl,
  nome: AbstractControl,
  descricao: AbstractControl,
  valor: AbstractControl,
  qtd_estoque: AbstractControl
}
}

export interface IProduto {
  id: number,
  nome: string,
  descricao: string,
  valor: number,
  qtd_estoque: number
}
