import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeEstado'
})
export class PipeEstadoPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let estadoPipe = value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/\s/g, '')
    return estadoPipe;
  }

}
