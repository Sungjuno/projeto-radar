import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { FluxosComponent } from './pages/fluxos/fluxos.component';
import { HttpClientModule } from '@angular/common/http';
import { PedidosComponent } from './pages/pedidos/pedido/pedidos.component';
import { ProdutoPedidoComponent } from './pages/pedidos/pedido-produto/produto-pedido.component';
import { PedidosClientesComponent } from './pages/pedidos/pedidos-clientes/pedidos-clientes.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProdutosComponent,
    ClientesComponent,
    PedidosComponent,
    FluxosComponent,
    ProdutoPedidoComponent,
    PedidosClientesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
