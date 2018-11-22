import { Http, Headers, Response , RequestOptions} from '@angular/http';
import { InvestimentoModelComponent } from './investimentoModel.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class InvestimentoModelService { 

    http: Http;;
    private _listaInvestimentos: InvestimentoModelComponent[] = [];

    constructor(http: Http) {
        this.http = http;
    }

    public setProductList(listaInvestimentos: InvestimentoModelComponent[]) {
        this._listaInvestimentos = listaInvestimentos;
    }

    public getProductList(): InvestimentoModelComponent[] {
        return this._listaInvestimentos;
    }

    buscaListaInvestimentos(){
        return this.http.get('app/JsonData/Investimentos.json')
            .map(res => res.json());
     }
}

