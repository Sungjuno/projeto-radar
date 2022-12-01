import { AbstractControl, FormGroup } from '@angular/forms';


export interface IPedidoForm extends FormGroup{
  value: IPedido;
  controls: {
  id: AbstractControl,
  cliente_id: AbstractControl,
  valor_total: AbstractControl,
  data: AbstractControl
}
}

export interface IPedido {
    id: number,
    cliente_id: number,
    valor_total: number,
    data: Date
}
