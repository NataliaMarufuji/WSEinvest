import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'detalhes', 
    templateUrl: './detalhes.component.html',
    styleUrls: ['./detalhes.component.css']
})
export class DetalhesInvestimentoComponent { 
    
    @Input() nome:string;
    @Input() codigo:string;
    @Input() minimo:boolean;
    @Input() rentabilidade: string;
    @Input() dataVencimento: string;
    @Input() diasParaVencer:string;
    @Input() pagamentoJuros:boolean;
    @Input() IRRendimento: string;
    @Input() IOFRendimento: string;
    @Input() rating: string;
    @Input() showRating: boolean;
}
