import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { finalize, take, tap } from 'rxjs';
import { RequestService } from 'src/app/shared/request/request.service';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';


@Component({
  selector: 'app-fluxo-caixa',
  templateUrl: './fluxo-caixa.component.html',
  styleUrls: ['./fluxo-caixa.component.css'],
  providers: [DatePipe]
})
export class FluxoCaixaComponent implements OnInit {

  dateInicial = new Date()

  constructor(
    private req: RequestService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    this.chamaApiProduto()
    this.chamaApiClientes()
    this.fluxoPedidoClienteApi()
  }

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

  meses = [
    this.fluxoJaneiro, this.fluxoFevereiro, this.fluxoMarco, this.fluxoAbril,
    this.fluxoMaio, this.fluxoJunho, this.fluxoJulho, this.fluxoAgosto,
    this.fluxoSetembro, this.fluxoOutubro, this.fluxoNovembro, this.fluxoDezembro]

  totalAnual = 0
  dateSelected = this.datePipe.transform(new Date(), "yyyy-MM-dd") as string
  valorDiario: number = 0
  valorMes: number = 0

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
        label: 'Toggle Fluxo',
        fill: false,
        tension: .5,
        borderColor: 'black',
        backgroundColor: 'black',
        pointRadius: 5
      }
    ]
  };
  lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  lineChartLegend = false;

  objetoApi: any

  fluxoPedidoClienteApi() {

    this.req.getPedidoCliente()
      .pipe(
        take(1),
        tap(res => {this.objetoApi = res;}))
      .subscribe(res => {
        this.filtraPorMes(res);
      })
  }

  filtraPorMes(arr: any) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].data.toString().slice(5, -3) == '01') {
          this.fluxoJaneiro += arr[i].valor_total
          this.lineChartData.datasets[0].data[0] = this.fluxoJaneiro
        } else if (arr[i].data.toString().slice(5, -3) == '02') {
          this.fluxoFevereiro += arr[i].valor_total
          this.lineChartData.datasets[0].data[1] = this.fluxoFevereiro
        } else if (arr[i].data.toString().slice(5, -3) == '03') {
          this.fluxoMarco = this.fluxoMarco + arr[i].valor_total
          this.lineChartData.datasets[0].data[2] = this.fluxoMarco
        } else if (arr[i].data.toString().slice(5, -3) == '04') {
          this.fluxoAbril += arr[i].valor_total
          this.lineChartData.datasets[0].data[3] = this.fluxoAbril
        } else if (arr[i].data.toString().slice(5, -3) == '05') {
          this.fluxoMaio += arr[i].valor_total
          this.lineChartData.datasets[0].data[4] = this.fluxoMaio
        } else if (arr[i].data.toString().slice(5, -3) == '06') {
          this.fluxoJunho += arr[i].valor_total
          this.lineChartData.datasets[0].data[5] = this.fluxoJunho
        } else if (arr[i].data.toString().slice(5, -3) == '07') {
          this.fluxoJulho += arr[i].valor_total
          this.lineChartData.datasets[0].data[6] = this.fluxoJulho
        } else if (arr[i].data.toString().slice(5, -3) == '08') {
          this.fluxoAgosto += arr[i].valor_total
          this.lineChartData.datasets[0].data[7] = this.fluxoAgosto
        } else if (arr[i].data.toString().slice(5, -3) == '09') {
          this.fluxoSetembro += arr[i].valor_total
          this.lineChartData.datasets[0].data[8] = this.fluxoSetembro
        } else if (arr[i].data.toString().slice(5, -3) == '10') {
          this.fluxoOutubro += arr[i].valor_total
          this.lineChartData.datasets[0].data[9] = this.fluxoOutubro
        } else if (arr[i].data.toString().slice(5, -3) == '11') {
          this.fluxoNovembro += arr[i].valor_total
          this.lineChartData.datasets[0].data[10] = this.fluxoNovembro
        } else if (arr[i].data.toString().slice(5, -3) == '12') {
          this.fluxoDezembro += arr[i].valor_total
          this.lineChartData.datasets[0].data[11] = this.fluxoDezembro
        }
    }

    this.totalAnual = this.fluxoJaneiro + this.fluxoFevereiro + this.fluxoMarco + this.fluxoAbril + this.fluxoMaio + this.fluxoJulho + this.fluxoJunho + this.fluxoAgosto + this.fluxoSetembro + this.fluxoNovembro + this.fluxoDezembro
    this.comparaDia()
    this.chart?.update()
  }

  comparaDia() {
    this.comparaMes()
    let receitaDia = 0
    for (let i = 0; i < this.objetoApi.length; i++) {
      if(this.objetoApi[i].data == this.dateSelected){
        receitaDia += this.objetoApi[i].valor_total
        this.valorDiario = receitaDia
      }
    }
    if(receitaDia == 0){
      this.valorDiario = 0
    }

  }

  comparaMes() {

    for (let i = 0; i < 11; i++) {
      if (this.dateSelected.toString().slice(5, -3) == '01') {
        this.valorMes = this.fluxoJaneiro
        return
      } else { this.valorMes = 0 }
      if (this.dateSelected.toString().slice(5, -3) == '02') {
        this.valorMes = this.fluxoFevereiro
        return
      } else { this.valorMes = 0 }
      if (this.dateSelected.toString().slice(5, -3) == '03') {
        this.valorMes = this.fluxoMarco
        return
      } else { this.valorMes = 0 }
      if (this.dateSelected.toString().slice(5, -3) == '04') {
        this.valorMes = this.fluxoAbril
        return
      } else { this.valorMes = 0 }
      if (this.dateSelected.toString().slice(5, -3) == '05') {
        this.valorMes = this.fluxoMaio
        return
      } else { this.valorMes = 0 }
      if (this.dateSelected.toString().slice(5, -3) == '06') {
        this.valorMes = this.fluxoJunho
        return
      } else { this.valorMes = 0 }
      if (this.dateSelected.toString().slice(5, -3) == '07') {
        this.valorMes = this.fluxoJulho
        return
      } else { this.valorMes = 0 }
      if (this.dateSelected.toString().slice(5, -3) == '08') {
        this.valorMes = this.fluxoAgosto
        return
      } else { this.valorMes = 0 }
      if (this.dateSelected.toString().slice(5, -3) == '09') {
        this.valorMes = this.fluxoSetembro
        return
      } else { this.valorMes = 0 }
      if (this.dateSelected.toString().slice(5, -3) == '10') {
        this.valorMes = this.fluxoOutubro
        return
      } else { this.valorMes = 0 }
      if (this.dateSelected.toString().slice(5, -3) == '11') {
        this.valorMes = this.fluxoNovembro
        return
      } else { this.valorMes = 0 }
      if (this.dateSelected.toString().slice(5, -3) == '12') {
        this.valorMes = this.fluxoDezembro
        return
      } else { this.valorMes = 0 }
    }
  }

  clientes: number = 0
  produtos: number = 0

  quantidadeClientes(res: any) {
    this.clientes = res.length
  }

  quantidadeProduto(res: any) {
    this.produtos = res.length
  }

  chamaApiClientes() {
    this.req.getCliente()
      .pipe(take(1))
      .subscribe(res => this.quantidadeClientes(res))
  }

  chamaApiProduto() {
    this.req.getProduto()
      .pipe(take(1))
      .subscribe(res => this.quantidadeProduto(res))
  }


}
