import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'simulacao', 
    templateUrl: './simulacao.component.html',
    styleUrls: ['./simulacao.component.css']
})
export class SimulacaoComponent { 

    labelMeses: string;
    valor: number;
    deposito: number;
    meses: number;
    investido: number;
    resultado: number;
    rendimento: number;
    tipoInvestimento;

    constructor(){
        $.getScript('app/Scripts/tabs.min.js');
        this.labelMeses = '180';
    }

    SelecionaInvestimento(tipoInvestimento){
        this.tipoInvestimento = tipoInvestimento;
        this.updateTextInput(this.labelMeses, true);
    }

    updateTextInput(event, investimentoMudou){
        if(!investimentoMudou){
            this.labelMeses = event.target.value; 
        }
        this.investido = this.valor;
        var valorPotencia = this.definePotencia();
        var potencia = 0;
        for(var i = 0; i < Number(this.labelMeses); i++){
            potencia+= (valorPotencia);
            console.log(potencia);
        }
        this.resultado = this.valor * potencia;
        this.rendimento = this.resultado - this.valor;
    }

    definePotencia(){
        if(this.tipoInvestimento == 'prefixado'){
            return 1.0952;
        } else if(this.tipoInvestimento == 'direto'){
            return 1.0054;
        } else if(this.tipoInvestimento == 'ipca'){
            return 1.0456;
        } else if(this.tipoInvestimento == 'cdb_lc'){
            return 1.0950;
        } else if(this.tipoInvestimento == 'lci_lca'){
            return 1.0900;
        }else{
            return 1.0952;
        }
    }
}