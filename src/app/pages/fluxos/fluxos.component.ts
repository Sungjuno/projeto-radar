import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartOptions} from "chart.js";
import { RequestService } from 'src/app/shared/request/request.service';
import { BaseChartDirective } from 'ng2-charts';
import { take } from 'rxjs';


@Component({
  selector: 'app-fluxos',
  templateUrl: './fluxos.component.html',
  styleUrls: ['./fluxos.component.css']
})
export class FluxosComponent implements OnInit {

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

  lineChartData: ChartConfiguration<'line'>['data'] = {
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
        label: 'Fluxo de caixa',
        fill: false,
        tension: .5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };
  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;

  constructor(
    private req: RequestService,
    ) { }

  ngOnInit(): void {
    this.fluxoPedidoClienteApi()
  }

  fluxoPedidoClienteApi(){
    this.req.getPedidoCliente()
    .pipe(take(1))
    .subscribe( res => this.filtraPorMes(res) )
  }

  filtraPorMes(arr:any){

    for(let i = 0; i < arr.length; i++){
      if(arr[i].data.toString().slice(5, -3) == '01'){
        this.fluxoJaneiro += arr[i].valor_total
        this.lineChartData.datasets[0].data[0] = this.fluxoJaneiro
      }else if(arr[i].data.toString().slice(5, -3) == '02'){
        this.fluxoFevereiro += arr[i].valor_total
        this.lineChartData.datasets[0].data[1] = this.fluxoFevereiro
      }else if(arr[i].data.toString().slice(5, -3) == '03'){
        this.fluxoMarco += arr[i].valor_total
        this.lineChartData.datasets[0].data[2] = this.fluxoMarco
      }else if(arr[i].data.toString().slice(5, -3) == '04'){
        this.fluxoAbril += arr[i].valor_total
        this.lineChartData.datasets[0].data[3] = this.fluxoAbril
      }else if(arr[i].data.toString().slice(5, -3) == '05'){
        this.fluxoMaio += arr[i].valor_total
        this.lineChartData.datasets[0].data[4] = this.fluxoMaio
      }else if(arr[i].data.toString().slice(5, -3) == '06'){
        this.fluxoJunho += arr[i].valor_total
        this.lineChartData.datasets[0].data[5] = this.fluxoJunho
      }else if(arr[i].data.toString().slice(5, -3) == '07'){
        this.fluxoJulho += arr[i].valor_total
        this.lineChartData.datasets[0].data[6] = this.fluxoJulho
      }else if(arr[i].data.toString().slice(5, -3) == '08'){
        this.fluxoAgosto += arr[i].valor_total
        this.lineChartData.datasets[0].data[7] = this.fluxoAgosto
      }else if(arr[i].data.toString().slice(5, -3) == '09'){
        this.fluxoSetembro += arr[i].valor_total
        this.lineChartData.datasets[0].data[8] = this.fluxoSetembro
      }else if(arr[i].data.toString().slice(5, -3) == '10'){
        this.fluxoOutubro += arr[i].valor_total
        this.lineChartData.datasets[0].data[9] = this.fluxoOutubro
      }else if(arr[i].data.toString().slice(5, -3) == '11'){
        this.fluxoNovembro += arr[i].valor_total
        this.lineChartData.datasets[0].data[10] = this.fluxoNovembro
      }else if(arr[i].data.toString().slice(5, -3) == '12'){
        this.fluxoDezembro += arr[i].valor_total
        this.lineChartData.datasets[0].data[11] = this.fluxoDezembro
      }
    }
    this.chart?.update()

  }



}

