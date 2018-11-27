import { RouterModule, Routes } from '@angular/router';
import { AcaoMenuComponent }  from './AcaoMenu/AcaoMenu.component';
import { MenuComponent } from './Menu/menu.component';
import { MainComponent }  from './Main/main.component';
import { LoginComponent }  from './Login/login.component';
import { CadastroUsuarioComponent }  from './CadastroUsuario/cadastroUsuario.component';
import { InvestimentosComponent }  from './Investimentos/investimentos.component';
import { SimulacaoComponent }  from './Simulacao/simulacao.component';
import { SimulacaoMenuComponent }  from './SimulacaoMenu/simulacaoMenu.component';
import { PassosComponent } from './Passos/passos.component';
import { PerfilComponent } from './Perfil/perfil.component';
import { ContaUsuarioComponent } from './ContaUsuario/ContaUsuario.component';
import { InvestimentoEspecificoComponent } from './InvestimentoEspecifico/investimentoEspecifico.component';

const appRoutes: Routes = [

   { path: '', component: MainComponent },
   { path: 'login', component: LoginComponent},
   { path: 'cadastro-de-usuario', component: CadastroUsuarioComponent},
   { path: 'simulacao-investimento', component: SimulacaoMenuComponent},
   { path: 'perfil-investidor', component: PerfilComponent},
   { path: 'simulacao', component: SimulacaoComponent },
   { path: 'primeiros-passos', component: PassosComponent},
   { path: 'investimentos', component: InvestimentosComponent},
   { path: 'investimento/:tipoInvestimento', component: InvestimentoEspecificoComponent},
   { path: 'minha-conta' , component: ContaUsuarioComponent},
   { path: 'acoes', component: AcaoMenuComponent}
];

export const routing = RouterModule.forRoot(appRoutes);