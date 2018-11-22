import { Http, Headers, Response , RequestOptions} from '@angular/http';
import { AcaoComponent } from './Acao.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class AcaoService { 

    http: Http;
    private _listaAcoes: AcaoComponent[] = [];

    constructor(http: Http) {
        this.http = http;

    }

    public setProductList(listaAcoes: AcaoComponent[]) {
        this._listaAcoes = listaAcoes;
    }

    public getProductList(): AcaoComponent[] {
        return this._listaAcoes;
    }

    buscaIbovespa(){
        
    } 

}

