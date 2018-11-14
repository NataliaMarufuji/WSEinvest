import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilComponent } from '../Perfil/perfil.component';

@Component({
    moduleId: module.id,
    selector: 'simulacao-menu', 
    templateUrl: './simulacaoMenu.component.html',
    styleUrls: ['./simulacaoMenu.component.css']
})
export class SimulacaoMenuComponent { 

    mostrarPerfil = function(){
        this.showPerfil = true;
    }
}