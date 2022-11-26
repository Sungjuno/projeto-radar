import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

    cadastroProduto = this.fb.group({
      id: [0],
      nome: [''],
      descricao: [''],
      valor: [0],
      quantidade: [0]
    })

    onSubmit(){
      console.log(this.cadastroProduto.value)
    }
}
