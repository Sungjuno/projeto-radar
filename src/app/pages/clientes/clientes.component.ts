import { AuthService } from './../../shared/auth/auth.service';
import { ICliente } from 'src/app/shared/models/cliente.interface';
import { IClienteForm } from '../../shared/models/cliente.interface';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { take } from 'rxjs';
import { RequestService } from 'src/app/shared/request/request.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private request: RequestService,
    public auth: AuthService
    ) { }

listaEstados = [
      'Acre',
      'Alagoas',
      'Amapá',
      'Amazonas',
      'Bahia',
      'Ceará',
      'Distrito Federal',
      'Espírito Santo',
      'Goiás',
      'Maranhão',
      'Mato Grosso',
      'Mato Grosso do Sul',
      'Minas Gerais',
      'Pará',
      'Paraíba',
      'Paraná',
      'Pernambuco',
      'Piauí',
      'Rio de Janeiro',
      'Rio Grande do Norte',
      'Rio Grande do Sul',
      'Rondônia',
      'Roraima',
      'Santa Catarina',
      'São Paulo',
      'Sergipe',
      'Tocantins'
]

listaCliente: ICliente[] = []

  clienteForm :IClienteForm = this.fb.group({
    id: [0],
    nome: [''],
    telefone: [0],
    email: [''],
    cpf: [0],
    cep: [0],
    logradouro:[''],
    numero: [0],
    bairro:[''],
    cidade: [''],
    estado: [''],
    complemento: ['']
  }) as IClienteForm

  ngOnInit(): void {
    this.getCliente()
  }

  @ViewChild('tabela') list?: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const maxScroll = this.list?.nativeElement.scrollHeight;
    this.list?.nativeElement.scrollTo({ top: maxScroll, behavior: 'smooth' });
  }

  cadastrarCliente(){
    this.request.postCliente(this.clienteForm.value)
    .pipe(take(1))
    .subscribe()
    this.getCliente()
    this.resetForm()
  }

  getCliente(){
    this.request.getCliente()
    .pipe(take(1))
    .subscribe( res => this.listaCliente = <ICliente[]>res)
  }

  removeCliente(id:number){
    this.request.deleteCliente(id)
    .pipe(take(1))
    .subscribe()
    this.getCliente()
  }

  resetForm() {
    this.clienteForm.reset();
  }

}
