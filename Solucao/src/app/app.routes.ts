import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './Menu/menu.component';
import { MainComponent }  from './Main/main.component';
import { LoginComponent }  from './Login/login.component';
import { CadastroUsuarioComponent }  from './CadastroUsuario/cadastroUsuario.component';
import { SimulacaoComponent }  from './Simulacao/simulacao.component';
import { SimulacaoMenuComponent }  from './SimulacaoMenu/simulacaoMenu.component';
import { PerfilComponent } from './Perfil/perfil.component';

const appRoutes: Routes = [

   { path: '', component: MainComponent },
   { path: 'login', component: LoginComponent},
   { path: 'cadastro-de-usuario', component: CadastroUsuarioComponent},
   { path: 'simulacao-investimento', component: SimulacaoMenuComponent},
   { path: 'perfil-investidor', component: PerfilComponent},
   { path: 'simulacao', component: SimulacaoComponent }
];

export const routing = RouterModule.forRoot(appRoutes);