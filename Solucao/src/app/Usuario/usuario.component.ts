import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PerfilComponent } from '../Perfil/perfil.component';

@Component({
    moduleId: module.id,
    selector: 'usuario', 
    templateUrl: './usuario.component.html',
    styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent { 

    nome: string;
    sobrenome: string;
    cpf: string;
    email:string;
    senha: string;
    autenticado: boolean;
}