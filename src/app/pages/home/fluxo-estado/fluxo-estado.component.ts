import { take } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { ClientesRequestService } from 'src/app/shared/request/clientes.service';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-fluxo-estado',
  templateUrl: './fluxo-estado.component.html',
  styleUrls: ['./fluxo-estado.component.css']
})
export class FluxoEstadoComponent implements OnInit {



  constructor(
    private req: ClientesRequestService
  ) { }

  ngOnInit(): void {
    this.getClienteEstado()
  }

  @ViewChild('tabela') list?: ElementRef<HTMLDivElement>;

  ngAfterViewInit() {
    const maxScroll = this.list?.nativeElement.scrollHeight;
    this.list?.nativeElement.scrollTo({ top: maxScroll, behavior: 'smooth' });
  }

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;
  listaEstados = [
    'acre',
    'alagoas',
    'amapa',
    'amazonas',
    'bahia',
    'ceara',
    'distritofederal',
    'espiritosanto',
    'goias',
    'maranhao',
    'matogrosso',
    'matogrossodosul',
    'minasgerais',
    'para',
    'paraiba',
    'parana',
    'pernambuco',
    'piaui',
    'riodejaneiro',
    'riograndedonorte',
    'riograndedosul',
    'rondonia',
    'roraima',
    'santacatarina',
    'saopaulo',
    'sergipe',
    'tocantins'
]

acre = 0
alagoas = 0
amapa = 0
amazonas = 0
bahia = 0
ceara = 0
distritofederal = 0
espiritosanto = 0
goias = 0
maranhao = 0
matogrosso = 0
matogrossodosul = 0
minasgerais = 0
para = 0
paraiba = 0
parana = 0
pernambuco = 0
piaui = 0
riodejaneiro = 0
riograndedonorte = 0
riograndedosul = 0
rondonia = 0
roraima = 0
santacatarina = 0
saopaulo = 0
sergipe = 0
tocantins = 0

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
  };

  public pieChartLabels = [ 'Acre',
  'Alagoas',
  'Amapá',
  'Amazonas',
  'Bahia',
  'Ceará',
  'Distrito Federal',
  'Espírito Santo',
  'Goiás',
  'Maranhão',
  'Mato Grosso',
  'Mato Grosso do Sul',
  'Minas Gerais',
  'Pará',
  'Paraíba',
  'Paraná',
  'Pernambuco',
  'Piauí',
  'Rio de Janeiro',
  'Rio Grande do Norte',
  'Rio Grande do Sul',
  'Rondônia',
  'Roraima',
  'Santa Catarina',
  'São Paulo',
  'Sergipe',
  'Tocantins' ];

  public pieChartDatasets = [ {
    data: [
      this.acre,
      this.alagoas,
      this.amapa,
      this.amazonas,
      this.bahia,
      this.ceara,
      this.distritofederal,
      this.espiritosanto,
      this.goias,
      this.maranhao,
      this.matogrosso,
      this.matogrossodosul,
      this.minasgerais,
      this.para,
      this.paraiba,
      this.parana,
      this.pernambuco,
      this.piaui,
      this.riodejaneiro,
      this.riograndedonorte,
      this.riograndedosul,
      this.rondonia,
      this.roraima,
      this.santacatarina,
      this.saopaulo,
      this.sergipe,
      this.tocantins
    ]
  } ];
  public pieChartLegend = false;
  public pieChartPlugins = [];

  getClienteEstado(){
    this.req.getCliente()
    .pipe(take(1))
    .subscribe( res => this.verificaEstado(res))
  }

  verificaEstado(res:any){
    let indexEstadoLista;
    for (let i = 0; i < res.length; i++) {
      if(this.listaEstados.includes(res[i].estado)){
        indexEstadoLista = this.listaEstados.indexOf(res[i].estado)
        this.pieChartDatasets[0].data[indexEstadoLista]++
      }
    }
    this.chart?.update();
    this.mostraListaEstado()
  }
  listaEstadoExistente: string[] = []

  mostraListaEstado(){
    for (let i = 0; i < this.pieChartDatasets[0].data.length; i++) {
      if(this.pieChartDatasets[0].data[i] != 0){
        this.listaEstadoExistente.push(this.pieChartLabels[i])
      }
    }
  }
}
