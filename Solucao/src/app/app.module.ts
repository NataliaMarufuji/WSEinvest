import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
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
import { ChartsModule } from 'ng2-charts/ng2-charts';
import Chart from 'chart.js';
import { UsuarioModule } from './Usuario/usuario.module';
import { ContaUsuarioComponent } from './ContaUsuario/ContaUsuario.component';
import { InvestimentoEspecificoComponent } from './InvestimentoEspecifico/investimentoEspecifico.component';



@NgModule({
    imports: [ 
        BrowserModule, 
        HttpModule, 
        routing,
        FormsModule,
        ChartsModule,
        AcaoModule,
        InvestimentoModelModule,
        UsuarioModule,
    ],
    declarations: [ AppComponent, AcaoMenuComponent, ContaUsuarioComponent, CaracteristicasInvestimentoComponent, MenuComponent,PainelComponent,  InvestimentoEspecificoComponent, MainComponent, ListagemBolsaComponent, LoginComponent, CadastroUsuarioComponent, SimulacaoMenuComponent, PassosComponent, PerfilComponent, SimulacaoComponent, InvestimentosComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }