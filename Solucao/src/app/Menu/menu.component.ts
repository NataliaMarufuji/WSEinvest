import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../Usuario/usuario.service'
import { UsuarioComponent } from '../Usuario/usuario.component'

@Component({
    moduleId: module.id,
    selector: 'menu-inicial', 
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent { 

    @Input() loginOuCadastro = false;
    usuarioAutenticado: boolean;
    userService: UsuarioService;
    route: ActivatedRoute;
    router: Router;
    usuario: UsuarioComponent;

    constructor(userService: UsuarioService, route: ActivatedRoute, router: Router){
       $.getScript('app/Scripts/dropdown-menu.min.js');
       $.getScript('app/Scripts/select.min.js');

       this.route = route;
       this.router = router;
       this.userService = userService;
       this.usuario = this.userService.getUsuario();
       if(this.usuario != undefined){
            this.usuarioAutenticado = this.userService.getAutenticado();
       }
    }

    verificaAcao(acao:number){
        if(acao == 1){
            this.router.navigateByUrl("/minha-conta");
        }else if(acao == 2){
            this.logout();
        }
    }

    logout(){
        this.usuarioAutenticado = false;
        this.userService.setAutenticado(false);
        this.userService.setUsuario(new UsuarioComponent());
        location.reload();
    }
}