import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlphaVantageAPI } from 'alpha-vantage-cli';

@Component({
    moduleId: module.id,
    selector: 'acao-menu', 
    templateUrl: './acaoMenu.component.html',
    styleUrls: ['./acaoMenu.component.css']
})
export class AcaoMenuComponent { 

    yourApiKey = 'NKT6F243BCB0413Z';
    alphaVantageAPI = new AlphaVantageAPI(yourApiKey, 'compact', true);
    
    constructor(private route: ActivatedRoute) {
        //this.acaoService = acaoService;
        /* this.acaoService.buscaIbovespa()
                        .subscribe(data => {
                            this.acao = data;
                        });*/
                alphaVantageAPI.getIntradayData('MSFT', '15min')
                .then(intradayData => {
                    console.log("Intraday data:");
                    console.log(intradayData);
                })
                .catch(err => {
                    console.error(err);
                });
        }

}
