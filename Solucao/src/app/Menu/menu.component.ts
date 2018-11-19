import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'menu-inicial', 
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent { 
    @Input() loginOuCadastro = false;

    constructor(){
       $.getScript('app/Scripts/dropdown-menu.min.js');
    }
}