import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from '../Menu/menu.component';
import { UsuarioService } from '../Usuario/usuario.service'
import { UsuarioComponent } from '../Usuario/usuario.component'

@Component({
    moduleId: module.id,
    selector: 'conta-usuario', 
    templateUrl: './contaUsuario.component.html',
    styleUrls: ['./contaUsuario.component.css']
})
export class ContaUsuarioComponent { 

    usuario: UsuarioComponent = new UsuarioComponent();
    userService: UsuarioService;

    constructor(userService: UsuarioService) {
        $.getScript('app/Scripts/collapsible.min.js');
        this.userService = userService;
        this.usuario = this.userService.getUsuario();
    }
}
