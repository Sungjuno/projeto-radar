import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { RequestService } from 'src/app/shared/request/request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private req: RequestService) { }

  ngOnInit(): void {
    this.chamaCliente()
    this.chamaProduto()
  }

  listaClientes:any;
  listaProduto:any

  chamaCliente(){
    this.req.getCliente()
    .pipe(
      take(1)
      )
    .subscribe(
      res => this.listaClientes = res )
  }

  chamaProduto(){
    this.req.getProduto()
    .pipe(take(1))
    .subscribe(res => this.listaProduto = res)
  }

}
