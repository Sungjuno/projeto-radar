import { take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';
import { RequestService } from 'src/app/shared/request/request.service';

@Component({
  selector: 'app-fluxo-estado',
  templateUrl: './fluxo-estado.component.html',
  styleUrls: ['./fluxo-estado.component.css']
})
export class FluxoEstadoComponent implements OnInit {



  constructor(
    private req: RequestService
  ) { }

  ngOnInit(): void {
    this.getClienteEstado()
  }

  listaEstados = [
    'Acre',
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
    'Tocantins'
]

Acre = 0
Alagoas = 0
Amapa = 0
Amazonas = 0
Bahia = 0
Ceara = 0
DistritoFederal = 0
EspiritoSanto = 0
Goias = 0
Maranhao = 0
MatoGrosso = 0
MatoGrossodoSul = 0
MinasGerais = 0
Para = 0
Paraiba = 0
Parana = 0
Pernambuco = 0
Piaui = 0
RiodeJaneiro = 0
RioGrandedoNorte = 0
RioGrandedoSul = 0
Rondonia = 0
Roraima = 0
SantaCatarina = 0
SaoPaulo = 0
Sergipe = 0
Tocantins = 0

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
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
    data: [ this.Acre,
      this.Alagoas,
      this.Amapa,
      this.Amazonas ,
      this.Bahia,
      this.Ceara,
      this.DistritoFederal ,
      this.EspiritoSanto,
      this.Goias,
      this.Maranhao ,
      this.MatoGrosso ,
      this.MatoGrossodoSul ,
      this.MinasGerais ,
      this.Para,
      this.Paraiba,
      this.Parana,
      this.Pernambuco,
      this.Piaui,
      this.RiodeJaneiro,
      this.RioGrandedoNorte,
      this.RioGrandedoSul,
      this.Rondonia,
      this.Roraima,
      this.SantaCatarina,
      this.SaoPaulo,
      this.Sergipe,
      this.Tocantins]
  } ];
  public pieChartLegend = false;
  public pieChartPlugins = [];

  getClienteEstado(){
    this.req.getCliente()
    .pipe(take(1))
    .subscribe( res => this.verificaEstado(res))
  }

  verificaEstado(res:any){
    let a
    let b
    let listaRegexEstado = this.listaEstados

    for (let i = 0; i < res.length; i++) {
      a =this.listaEstados[i].normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/\s/g, '')
      console.log(a)
      // b = res[i].normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/\s/g, '')
      // if(a.includes(b)){
      //   console.log(a)
      // }

    }
  }
}
