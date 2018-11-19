import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from '../Menu/menu.component';
import { InvestimentoModelService } from '../InvestimentoModel/investimentoModel.service';
import { InvestimentoModelComponent } from '../InvestimentoModel/investimentoModel.component';

@Component({
    moduleId: module.id,
    selector: 'investimento-especifico', 
    templateUrl: './investimentoEspecifico.component.html',
    styleUrls: ['./investimentoEspecifico.component.css']
})
export class InvestimentoEspecificoComponent { 

    investimento: InvestimentoModelComponent;
    tipoInvestimento: String;;
    investimentoService: InvestimentoModelService;
    private sub: any;

    constructor(private route : ActivatedRoute, investimentoService: InvestimentoModelService ) {
        this.investimentoService = investimentoService;
        
        this.investimentoService.buscaListaInvestimentos()
                                .subscribe(data => {
                                    data.forEach(investimento => {
                                        if(investimento.tipoInvestimento == this.tipoInvestimento){
                                            this.investimento = investimento;
                                        }
                                    });
                                }); 
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
           this.tipoInvestimento = params['tipoInvestimento']; 
           console.log("tipo de investimento: " + this.tipoInvestimento)
        });
      }
    
      ngOnDestroy() {
        this.sub.unsubscribe();
      }
}
