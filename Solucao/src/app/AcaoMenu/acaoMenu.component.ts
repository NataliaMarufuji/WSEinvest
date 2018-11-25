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
    acao: AcaoComponent = new AcaoComponent();

    constructor(private route: ActivatedRoute, acaoService: AcaoService) {
        this.acaoService = acaoService;
        this.acaoService.buscaIbovespa()
                        .subscribe(data => {
                          this.retornoAcoes = data["Time Series (5min)"];
                          for(var i=0; i< Object.keys(this.retornoAcoes).length; i++){
                            console.log(Object.keys(this.retornoAcoes)[i]);
                            var objKey = Object.keys(this.retornoAcoes)[i]
                            this.acao.open = this.retornoAcoes[objKey]["1. open"];
                            this.acao.high = this.retornoAcoes[objKey]["2. high"];
                            this.acao.low = this.retornoAcoes[objKey]["3. low"];
                            this.acao.close = this.retornoAcoes[objKey]["4. close"];
                            this.acao.volume = this.retornoAcoes[objKey]["5. volume"];
                            this.acoes.push(this.acao);
                          }
                            console.log(this.acoes);
                        });

        }
        public lineChartData:Array<any> = [
            {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
            {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
            {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
          ];
          public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
          public lineChartOptions:any = {
            responsive: true
          };
          public lineChartColors:Array<any> = [
            { // grey
              backgroundColor: 'rgba(148,159,177,0.2)',
              borderColor: 'rgba(148,159,177,1)',
              pointBackgroundColor: 'rgba(148,159,177,1)',
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
          public lineChartLegend:boolean = true;
          public lineChartType:string = 'line';
         
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
