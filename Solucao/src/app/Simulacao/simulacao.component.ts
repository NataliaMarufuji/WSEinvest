import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'simulacao', 
    templateUrl: './simulacao.component.html',
    styleUrls: ['./simulacao.component.css']
})
export class SimulacaoComponent { 

    constructor(){
        $.getScript('app/Scripts/tabs.min.js');
    }

    SelecionaInvestimento(tipoInvestimento){
        if(tipoInvestimento == 'prefixado'){
            console.log("prefixado");
        } else if(tipoInvestimento == 'direto'){
            console.log("direto");
        } else if(tipoInvestimento == 'ipca'){
            console.log("ipca");
        } else if(tipoInvestimento == 'cdb_lc'){
            console.log("cdb_lc");
        } else if(tipoInvestimento == 'lci_lca'){
            console.log("lci_lca");
        }
    }
}