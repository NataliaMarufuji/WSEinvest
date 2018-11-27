import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcaoService } from '../Acao/Acao.service';
import { AcaoComponent } from '../Acao/Acao.component';

@Component({
    moduleId: module.id,
    selector: 'acao-menu', 
    templateUrl: './acaoMenu.component.html',
    styleUrls: ['./acaoMenu.component.css']
})
export class AcaoMenuComponent { 
    
    acaoService: AcaoService;
    acoes: AcaoComponent[] = [];
    retornoAcoes : Array<any>;
    public lineChartLabels:Array<any> = [];
    public lineChartOptions:any = {
      responsive: true
    };
    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';
    public lineChartData:Array<any> = [
      {data: [], label: ''}
    ];

    constructor(private route: ActivatedRoute, acaoService: AcaoService) {
        this.acaoService = acaoService;
        this.acaoService.buscaIbovespa()
                        .subscribe(data => {
                          this.retornoAcoes = data["Time Series (5min)"];
                          for(var i=0; i< Object.keys(this.retornoAcoes).length; i++){
                            var objKey = Object.keys(this.retornoAcoes)[i]
                            var acao: AcaoComponent = new AcaoComponent();
                            var time = objKey.substring(10,19);
                            var date = objKey.substring(0,10);
                            acao.date = date;
                            acao.time = time;
                            acao.open = this.retornoAcoes[objKey]["1. open"];
                            acao.high = this.retornoAcoes[objKey]["2. high"];
                            acao.low = this.retornoAcoes[objKey]["3. low"];
                            acao.close = this.retornoAcoes[objKey]["4. close"];
                            acao.volume = this.retornoAcoes[objKey]["5. volume"];
                            this.acoes.push(acao);
                          }
                          this.formataDados();
                          this.preencheLabel();
                          this.preencheData();
                            console.log(this.acoes);
                        });

        }

        formataDados(){
          var listaAcoesProvisoria:AcaoComponent[] = [];
          for(var i=this.acoes.length - 1; i >= 0 ; i--){
            if(this.acoes[i].date == "2018-11-26"){
              listaAcoesProvisoria.push(this.acoes[i]);
            }
          }
          this.acoes = listaAcoesProvisoria;
        }

        preencheLabel(){
          this.acoes.forEach(atual => {
              this.lineChartLabels.push(atual.time);
          })
        }

        preencheData(){
          this.lineChartData = [{data:[], label: 'Volume'}, {data:[], label: 'High'}, {data:[], label: 'Low'}];
          this.acoes.forEach(atual => {
            this.lineChartData[0].data.push(Number(atual.volume));
            this.lineChartData[1].data.push(Number(atual.high));
            this.lineChartData[2].data.push(Number(atual.low));
          })
          console.log(this.lineChartData);
        }

          public lineChartColors:Array<any> = [
            { // grey
              backgroundColor: 'rgba(184,157,69,0.2)',
              borderColor: 'rgba(31,56,87,1)',
              pointBackgroundColor: 'rgba(31,56,87,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            { // dark grey
              backgroundColor: 'rgba(77,83,96,0.2)',
              borderColor: 'rgba(77,83,96,1)',
              pointBackgroundColor: 'rgba(77,83,96,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            { // grey
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
              pointBorderColor: '#fff',
              pointHoverBackgroundColor: '#fff',
              pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
          ];
          
         
          public randomize():void {
            let _lineChartData:Array<any> = new Array(this.lineChartData.length);
            for (let i = 0; i < this.lineChartData.length; i++) {
              _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
              for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
              }
            }
            this.lineChartData = _lineChartData;
          }
         
          // events
          public chartClicked(e:any):void {
            console.log(e);
          }
         
          public chartHovered(e:any):void {
            console.log(e);
          }
}
