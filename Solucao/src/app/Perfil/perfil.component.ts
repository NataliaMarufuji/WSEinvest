import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'perfil-investidor', 
    templateUrl: './perfil.component.html',
    styleUrls: ['./perfil.component.css']
})
export class PerfilComponent { 

    mostrarObjetivo: boolean;
    mostrarPrazo: boolean;
    mostrarRisco: boolean;
    mostrarRecebimento: boolean;

    constructor(){
        $.getScript('app/Scripts/select.min.js');
        this.mostrarObjetivo = true;
        this.mostrarPrazo = false;
        this.mostrarRisco = false;
        this.mostrarRecebimento = false;
     }

    mostraPrazo(){
        this.mostrarObjetivo = false;
        this.mostrarPrazo = true;
    }

    mostraRisco(){
        this.mostrarRisco = true;
        this.mostrarPrazo = false;
    }

    mostraRecebimento(){
        this.mostrarRisco = false;
        this.mostrarRecebimento = true;
    }
}