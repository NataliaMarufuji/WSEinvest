import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AcaoService } from '../Acao/Acao.service';

@Component({
    moduleId: module.id,
    selector: 'acao-menu', 
    templateUrl: './acaoMenu.component.html',
    styleUrls: ['./acaoMenu.component.css']
})
export class AcaoMenuComponent { 
    
    acaoService: AcaoService;

    constructor(private route: ActivatedRoute, acaoService: AcaoService) {
        this.acaoService = acaoService;
        this.acaoService.buscaIbovespa()
                        .subscribe(data => {
                            console.log(data);
                        });

        }

}
