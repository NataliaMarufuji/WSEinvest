import { NgModule } from '@angular/core';
import { InvestimentoModelComponent } from './investimentoModel.component';
import { InvestimentoModelService } from './investimentoModel.service';
import { CommonModule } from '@angular/common';  
import { MenuComponent } from '../Menu/menu.component';
import { DetalhesInvestimentoComponent } from '../DetalhesInvestimento/detalhes.component';
import { PainelDetalhesComponent } from '../PainelDetalhes/painelDetalhes.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ InvestimentoModelComponent, DetalhesInvestimentoComponent, PainelDetalhesComponent],
    exports: [ InvestimentoModelComponent ],
    providers: [ InvestimentoModelService ]
})
export class InvestimentoModelModule { }