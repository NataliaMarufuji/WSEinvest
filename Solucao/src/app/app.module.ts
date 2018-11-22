import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { routing }  from './app.routes';
import { AcaoModule }  from './Acao/Acao.module';
import { AcaoMenuComponent }  from './AcaoMenu/AcaoMenu.component';
import { CadastroUsuarioComponent }  from './CadastroUsuario/cadastroUsuario.component';
import { CaracteristicasInvestimentoComponent }  from './CaracteristicasInvestimento/caracteristicas.component';
import { InvestimentoModelModule }  from './InvestimentoModel/investimentoModel.module';
import { InvestimentosComponent }  from './Investimentos/investimentos.component';
import { ListagemBolsaComponent }  from './ListagemBolsa/listagemBolsa.component';
import { LoginComponent }  from './Login/login.component';
import { MenuComponent }  from './Menu/menu.component';
import { MainComponent }  from './Main/main.component';
import { SimulacaoComponent }  from './Simulacao/simulacao.component';
import { SimulacaoMenuComponent }  from './SimulacaoMenu/simulacaoMenu.component';
import { PainelComponent } from './Painel/painel.component';
import { PassosComponent } from './Passos/passos.component';
import { PerfilComponent } from './Perfil/perfil.component';
import { InvestimentoEspecificoComponent } from './InvestimentoEspecifico/investimentoEspecifico.component';



@NgModule({
    imports: [ 
        BrowserModule, 
        HttpModule, 
        routing, 
        AcaoModule,
        InvestimentoModelModule
    ],
    declarations: [ AppComponent, AcaoMenuComponent, CaracteristicasInvestimentoComponent, MenuComponent,PainelComponent,  InvestimentoEspecificoComponent, MainComponent, ListagemBolsaComponent, LoginComponent, CadastroUsuarioComponent, SimulacaoMenuComponent, PassosComponent, PerfilComponent, SimulacaoComponent, InvestimentosComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }