import { Http, Headers, Response , RequestOptions} from '@angular/http';
import { UsuarioComponent } from './usuario.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class UsuarioService { 

    http: Http;;
    private _listaUsuarios: UsuarioComponent[] = [];
    private _usuario: UsuarioComponent;

    constructor(http: Http) {
        this.http = http;
    }

    public setUsuariosList(listaUsuarios: UsuarioComponent[]) {
        this._listaUsuarios = listaUsuarios;
    }

    public getUsuariosList(): UsuarioComponent[] {
        return this._listaUsuarios;
    }

    public setUsuario(usuario: UsuarioComponent){
        this._usuario = usuario;
    }

    public getUsuario(){
        return this._usuario;
    }

    public setAutenticado(isAutenticado: boolean){
        this._usuario.autenticado = isAutenticado
    }

    public getAutenticado(){
        return this._usuario.autenticado;
    }

    buscaListaUsuarios(){
        return this.http.get('app/JsonData/Login.json')
            .map(res => res.json());
    }

    buscaMeusInvestimentos(){
        return this.http.get('app/JsonData/MeusInvestimentos.json')
            .map(res => res.json());
    }
}

