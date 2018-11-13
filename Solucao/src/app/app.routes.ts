import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './Menu/menu.component';
import { MainComponent }  from './Main/main.component';
import { LoginComponent }  from './Login/login.component';
import { CadastroUsuarioComponent }  from './CadastroUsuario/cadastroUsuario.component';

const appRoutes: Routes = [

   { path: '', component: MainComponent },
   { path: 'login', component: LoginComponent},
   { path: 'cadastro-de-usuario', component: CadastroUsuarioComponent}
];

export const routing = RouterModule.forRoot(appRoutes);