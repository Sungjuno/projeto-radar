import { ProdutosComponent } from './pages/produtos/produtos.component';
import { EstaLogadoGuard } from './shared/guards/esta-logado.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { FluxosComponent } from './pages/fluxos/fluxos.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'home', component:HomeComponent, canActivate: [EstaLogadoGuard]},
  {path:'produtos', component: ProdutosComponent, canActivate:[EstaLogadoGuard]},
  {path:'clientes', component: ClientesComponent, canActivate:[EstaLogadoGuard]},
  {path:'pedidos', component: PedidosComponent, canActivate:[EstaLogadoGuard]},
  {path:'fluxos', component: FluxosComponent, canActivate:[EstaLogadoGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
