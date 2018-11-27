import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from '../Menu/menu.component';
import { UsuarioComponent } from '../Usuario/usuario.component'
import { UsuarioService } from '../Usuario/usuario.service'

@Component({
    moduleId: module.id,
    selector: 'login', 
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent { 

    users: UsuarioComponent[] = [];
    user: UsuarioComponent = new UsuarioComponent();
    userService: UsuarioService;
    route: ActivatedRoute;
    router: Router;
    erroAutenticacao:boolean;

    constructor(userService: UsuarioService, route: ActivatedRoute, router: Router){
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.erroAutenticacao = false;

        this.userService.buscaListaUsuarios()
                        .subscribe(data => {
                            this.users = data
                            console.log(this.users);
                        }); 
    }

    login(){
        this.users.forEach(usuario => {
            if(usuario.email == this.user.email){
                if(usuario.senha == this.user.senha){
                    this.userService.setUsuario(this.user);
                    this.userService.setAutenticado(true);
                    this.router.navigateByUrl('');
                }
            }
        })
        this.erroAutenticacao = true;;
    }
}
