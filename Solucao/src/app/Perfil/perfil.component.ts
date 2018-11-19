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
        this.mostraObjetivo();
     }

    mostraObjetivo(){
        this.mostrarObjetivo = true;
        this.mostrarPrazo = false;
        this.mostrarRisco = false;
        this.mostrarRecebimento = false;
        $.getScript('app/Scripts/select.min.js');
    } 

    mostraPrazo(){
        this.mostrarObjetivo = false;
        this.mostrarRisco = false;
        this.mostrarRecebimento = false;
        this.mostrarPrazo = true;
        $.getScript('app/Scripts/select.min.js');
    }

    mostraRisco(){
        this.mostrarRisco = true;
        this.mostrarPrazo = false;
        this.mostrarRecebimento = false;
        this.mostrarObjetivo = false;
        $.getScript('app/Scripts/select.min.js');
    }

    mostraRecebimento(){
        this.mostrarPrazo = false;
        this.mostrarObjetivo = false;
        this.mostrarRisco = false;
        this.mostrarRecebimento = true;
        $.getScript('app/Scripts/select.min.js');
    }
}