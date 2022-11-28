import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  // Clientes (id, nome, telefone, email, cpf, cep, logradouro, numero, bairro, cidade, estado, complemento)


    cadastroCliente = this.fb.group({
      id: [0],
      nome: [''],
      telefone: [0],
      email: [''],
      cpf: [0],
      cep: [0],
      logradouro: [''],
      numero: [0],
      bairro: [''],
      cidade: [''],
      estado: [''],
      complemento: ['']
    })

    onSubmit(){
      console.log(this.cadastroCliente.value)
    }
}
