import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from '../Menu/menu.component';
import { UsuarioService } from '../Usuario/usuario.service'
import { UsuarioComponent } from '../Usuario/usuario.component'

@Component({
    moduleId: module.id,
    selector: 'cadastro-usuario', 
    templateUrl: './cadastroUsuario.component.html',
    styleUrls: ['./cadastroUsuario.component.css']
})
export class CadastroUsuarioComponent { 

    usuario: UsuarioComponent = new UsuarioComponent();
    userService: UsuarioService;
    route: ActivatedRoute;
    router: Router;
    confirmaSenha: string;

    constructor(userService: UsuarioService, route: ActivatedRoute, router: Router){
        this.route = route;
        this.router = router;
        this.userService = userService;
    }

    cadastrarUsuario(){
        this.userService.setUsuario(this.usuario);
        this.userService.setAutenticado(true);
        this.router.navigateByUrl('');
    }

}
