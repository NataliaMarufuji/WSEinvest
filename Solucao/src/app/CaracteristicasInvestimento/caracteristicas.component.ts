import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'caracteristicas', 
    templateUrl: './caracteristicas.component.html'
})
export class CaracteristicasInvestimentoComponent { 
    
    risco:string;
    minimo:string;
    preco:boolean;
    resgate: string;
    imposto: string;
}
