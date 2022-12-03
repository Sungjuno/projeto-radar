import { ChartConfiguration, registerables } from 'chart.js';
import { ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { take, tap } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { RequestService } from 'src/app/shared/request/request.service';

@Component({
  selector: 'app-fluxo-clientes',
  templateUrl: './fluxo-clientes.component.html',
  styleUrls: ['./fluxo-clientes.component.css']
})
export class FluxoClientesComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  fluxoJaneiro = 0
  fluxoFevereiro = 0
  fluxoMarco = 0
  fluxoAbril = 0
  fluxoMaio = 0
  fluxoJunho = 0
  fluxoJulho = 0
  fluxoAgosto = 0
  fluxoSetembro = 0
  fluxoOutubro = 0
  fluxoNovembro = 0
  fluxoDezembro = 0
  
  constructor( private req: RequestService) { }

  ngOnInit(): void {
    this.chamaApiClientes()
    this.chamaApiProduto()
    this.fluxoPedidoClienteApi()
  }

  clientes: number = 0
  produtos: number = 0

  barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],
    datasets: [
      {
        data: [
          this.fluxoJaneiro,
          this.fluxoFevereiro,
          this.fluxoMarco,
          this.fluxoAbril,
          this.fluxoMaio,
          this.fluxoJunho,
          this.fluxoJulho,
          this.fluxoAgosto,
          this.fluxoSetembro,
          this.fluxoOutubro,
          this.fluxoNovembro,
          this.fluxoDezembro
        ],
        label: 'Nº de Pedidos por Mês',
        barThickness: 20,
        borderColor: 'rgb(0,105,0)',
        backgroundColor: 'rgba(0,105,0,0.7)',
        hoverBorderColor: 'rgb(155,255,0)',
        hoverBackgroundColor: 'rgba(155,255,0,0.7)',
      },
    ]
  }

  public barChartOptions: ChartOptions<'bar'> = {
    responsive: false,
  };

  public barChartLegend = true;

  public barChartColors = [{
    backgroundColor: '#3f80ea',
       borderColor: '#3f80ea',
       pointBackgroundColor: 'rgba(148,159,177,1)',
       pointBorderColor: '#fff',
       pointHoverBackgroundColor: '#fff',
       pointHoverBorderColor: 'rgba(148,159,177,0.8)',
       borderWidth: 3
   }]

  chamaApiClientes(){
    this.req.getCliente()
    .pipe(take(1))
    .subscribe( res => this.quantidadeClientes(res))
  }

  chamaApiProduto(){
    this.req.getProduto()
    .pipe(take(1))
    .subscribe( res => this.quantidadeProduto(res))
  }

  fluxoPedidoClienteApi(){
    this.req.getPedidoCliente()
    .pipe(take(1))
    .subscribe( res => this.filtraPorMes(res) )
  }

  quantidadeClientes(res:any){
   this.clientes = res.length
  }

  quantidadeProduto(res:any){
    this.produtos = res.length
  }

  filtraPorMes(arr:any){

    for(let i = 0; i < arr.length; i++){
      if(arr[i].data.toString().slice(5, -3) == '01'){
        this.fluxoJaneiro += 1
        this.barChartData.datasets[0].data[0] = this.fluxoJaneiro
      }else if(arr[i].data.toString().slice(5, -3) == '02'){
        this.fluxoFevereiro += 1
        this.barChartData.datasets[0].data[1] = this.fluxoFevereiro
      }else if(arr[i].data.toString().slice(5, -3) == '03'){
        this.fluxoMarco += 1
        this.barChartData.datasets[0].data[2] = this.fluxoMarco
      }else if(arr[i].data.toString().slice(5, -3) == '04'){
        this.fluxoAbril += 1
        this.barChartData.datasets[0].data[3] = this.fluxoAbril
      }else if(arr[i].data.toString().slice(5, -3) == '05'){
        this.fluxoMaio += 1
        this.barChartData.datasets[0].data[4] = this.fluxoMaio
      }else if(arr[i].data.toString().slice(5, -3) == '06'){
        this.fluxoJunho += 1
        this.barChartData.datasets[0].data[5] = this.fluxoJunho
      }else if(arr[i].data.toString().slice(5, -3) == '07'){
        this.fluxoJulho += 1
        this.barChartData.datasets[0].data[6] = this.fluxoJulho
      }else if(arr[i].data.toString().slice(5, -3) == '08'){
        this.fluxoAgosto += 1
        this.barChartData.datasets[0].data[7] = this.fluxoAgosto
      }else if(arr[i].data.toString().slice(5, -3) == '09'){
        this.fluxoSetembro += 1
        this.barChartData.datasets[0].data[8] = this.fluxoSetembro
      }else if(arr[i].data.toString().slice(5, -3) == '10'){
        this.fluxoOutubro += 1
        this.barChartData.datasets[0].data[9] = this.fluxoOutubro
      }else if(arr[i].data.toString().slice(5, -3) == '11'){
        this.fluxoNovembro += 1
        this.barChartData.datasets[0].data[10] = this.fluxoNovembro
      }else if(arr[i].data.toString().slice(5, -3) == '12'){
        this.fluxoDezembro += 1
        this.barChartData.datasets[0].data[11] = this.fluxoDezembro
      }
    }
    this.chart?.update()

  }

}
