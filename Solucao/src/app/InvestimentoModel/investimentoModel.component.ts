import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaracteristicasInvestimentoComponent } from '../CaracteristicasInvestimento/caracteristicas.component';

@Component({
    moduleId: module.id,
    selector: 'investimento', 
    templateUrl: './investimentoModel.component.html',
    styleUrls: ['./investimentoModel.component.css']
})
export class InvestimentoModelComponent { 
    
    @Input() nome:string;
    @Input() descricao:string;
    @Input() investimentoEspecifico:boolean;
    @Input() definicao: string;
    @Input() funcionamento: string;
    @Input() caracteristicas: CaracteristicasInvestimentoComponent;
}
