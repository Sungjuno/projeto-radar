import { AuthService } from './../../shared/auth/auth.service';
import { ICliente } from 'src/app/shared/models/cliente.interface';
import { IClienteForm } from '../../shared/models/cliente.interface';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs';
import { ClienteRequestService } from 'src/app/shared/request/cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(
    private fb:FormBuilder,
    private request: ClienteRequestService,
    public auth: AuthService
    ) { }

id = -1;
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
    nome: ['' , [Validators.required, Validators.minLength(3)]],
    telefone: [''],
    email: ['', [Validators.required, Validators.email]],
    cpf: [''],
    cep: [''],
    logradouro:[''],
    numero: [''],
    bairro:[''],
    cidade: [''],
    estado: ['' , Validators.required],
    complemento: ['']
  }) as IClienteForm

  validador = true;

  ngOnInit(): void {
    this.getCliente()
    this.listaCliente= [ {id: 0,
    nome: 'Guilherme' ,
    telefone: 'a',
    email: 'guihenrisampaio@gmail.com',
    cpf: 'a',
    cep: 'a',
    logradouro:'a',
    numero: 'a',
    bairro:'a',
    cidade: 'a',
    estado: 'a',
    complemento: 'a'}]
  }

  @ViewChild('tabela') list?: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const maxScroll = this.list?.nativeElement.scrollHeight;
    this.list?.nativeElement.scrollTo({ top: maxScroll, behavior: 'smooth' });
  }

  cadastrarCliente(){

    if(this.clienteForm.status == 'INVALID'){
      this.validador = false
    }
    if(this.clienteForm.status == 'VALID'){
      this.request.postCliente(this.clienteForm.value)
      .pipe(take(1))
      .subscribe()
      this.validador = true
      this.getCliente()
      this.resetForm()
    }
  }

  editarCliente(){
    this.request.updateCliente(this.clienteForm.value)
        .pipe(take(1))
        .subscribe()
    this.validador = true
    this.getCliente()
    this.resetForm()
    this.id=-1;
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

  pushCliente(event:any){
    let cliente = this.listaCliente[event]
    this.id=cliente.id;
    this.clienteForm=this.fb.group({
      id: [cliente.id],
      nome: [cliente.nome],
      telefone: [cliente.telefone],
      email: [cliente.email],
      cpf: [cliente.cpf],
      cep: [cliente.cep],
      logradouro:[cliente.logradouro],
      numero: [cliente.numero],
      bairro:[cliente.bairro],
      cidade: [cliente.cidade],
      estado: [cliente.estado],
      complemento: [cliente.complemento]
    }) as IClienteForm
  }

  resetForm() {
    this.clienteForm.reset();
  }

}
