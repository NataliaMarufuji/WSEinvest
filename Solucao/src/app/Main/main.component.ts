import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from '../Menu/menu.component';
import { ListagemBolsaComponent }  from '../ListagemBolsa/listagemBolsa.component';

@Component({
    moduleId: module.id,
    selector: 'main', 
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent { 

    constructor(){
       $.getScript('app/Scripts/carousel.min.js');
       $.getScript('app/Scripts/dropdown-menu.min.js');
    }
}
