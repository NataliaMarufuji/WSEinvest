import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from '../Menu/menu.component';
import { InvestimentoModelService } from '../InvestimentoModel/investimentoModel.service';
import { InvestimentoModelComponent } from '../InvestimentoModel/investimentoModel.component';

@Component({
    moduleId: module.id,
    selector: 'investimentos', 
    templateUrl: './investimentos.component.html',
    styleUrls: ['./investimentos.component.css']
})
export class InvestimentosComponent { 

    investimentos: InvestimentoModelComponent;
    investimentoService: InvestimentoModelService;

    constructor(investimentoService: InvestimentoModelService ) {
        this.investimentoService = investimentoService;
        
        this.investimentoService.buscaListaInvestimentos()
                                .subscribe(data => {
                                    this.investimentos = data
                                    console.log(this.investimentos);
                                }); 
    }
}
