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

    buscaVariantesTesouroDireto(){
        return this.http.get('app/JsonData/TesouroDireto.json')
            .map(res => res.json());
    } 

    buscaVariantesTesouroSelic(){
        return this.http.get('app/JsonData/TesouroSelic.json')
            .map(res => res.json());
    } 

    buscaVariantesTesouroIPCA(){
        return this.http.get('app/JsonData/TesouroIPCA.json')
            .map(res => res.json());
    } 

    buscaVariantesCDB(){
        return this.http.get('app/JsonData/CDB.json')
            .map(res => res.json());
    } 

    buscaVariantesLC(){
        return this.http.get('app/JsonData/LC.json')
            .map(res => res.json());
    } 

    buscaVariantesLCI(){
        return this.http.get('app/JsonData/LCI.json')
            .map(res => res.json());
    } 

}

