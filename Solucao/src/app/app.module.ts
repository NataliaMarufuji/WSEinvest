import { NgModule }  from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { routing }  from './app.routes';
import { CadastroUsuarioComponent }  from './CadastroUsuario/cadastroUsuario.component';
import { ListagemBolsaComponent }  from './ListagemBolsa/listagemBolsa.component';
import { LoginComponent }  from './Login/login.component';
import { MenuComponent }  from './Menu/menu.component';
import { MainComponent }  from './Main/main.component';
import { SimulacaoComponent }  from './Simulacao/simulacao.component';
import { SimulacaoMenuComponent }  from './SimulacaoMenu/simulacaoMenu.component';
import { PassosComponent } from './Passos/passos.component';
import { PerfilComponent } from './Perfil/perfil.component';


@NgModule({
    imports: [ 
        BrowserModule, 
        HttpModule, 
        routing, 
    ],
    declarations: [ AppComponent, MenuComponent, MainComponent, ListagemBolsaComponent, LoginComponent, CadastroUsuarioComponent, SimulacaoMenuComponent, PassosComponent, PerfilComponent, SimulacaoComponent ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }