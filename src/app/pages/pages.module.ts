import { HomeModule } from './home/home.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from '../pages/produtos/produtos.component';
import { ClientesComponent } from '../pages/clientes/clientes.component';
import { PedidosComponent } from '../pages/pedidos/pedido/pedidos.component';
import { ProdutoPedidoComponent } from '../pages/pedidos/pedido-produto/produto-pedido.component';
import { PedidosClientesComponent } from '../pages/pedidos/pedidos-clientes/pedidos-clientes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormatarTelefonePipe } from '../shared/pipes/formatar-telefone.pipe';
import { FormatarCpfPipe } from '../shared/pipes/formatar-cpf.pipe';
import { NgChartsModule } from 'ng2-charts';
import { PipeEstadoPipe } from './clientes/pipe-estado.pipe';


@NgModule({
  declarations: [
    ProdutosComponent,
    ClientesComponent,
    PedidosComponent,
    ProdutoPedidoComponent,
    PedidosClientesComponent,
    LoginComponent,
    NotFoundComponent,
    FormatarTelefonePipe,
    FormatarCpfPipe,
    PipeEstadoPipe,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgChartsModule,
    FormsModule,
    HomeModule,
  ],
  exports: [
    ProdutosComponent,
    ClientesComponent,
    PedidosComponent,
    ProdutoPedidoComponent,
    PedidosClientesComponent,
    LoginComponent,
  ]
})
export class PagesModule { }
