import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'acao', 
    templateUrl: './acao.component.html'
})
export class AcaoComponent { 

    open: string;
    high: string;
    low: string;
    close: string;
    volume:string;
    
    
}
