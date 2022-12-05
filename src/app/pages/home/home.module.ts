import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FluxoCaixaComponent } from './fluxo-caixa/fluxo-caixa.component';
import { FluxoClientesComponent } from './fluxo-clientes/fluxo-clientes.component';
import { FluxoEstadoComponent } from './fluxo-estado/fluxo-estado.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [
    HomeComponent,
    FluxoCaixaComponent,
    FluxoClientesComponent,
    FluxoEstadoComponent,
  ],
  imports: [
    CommonModule,
    NgChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    FluxoCaixaComponent,
    FluxoClientesComponent,
    FluxoEstadoComponent,
  ]
})
export class HomeModule { }
