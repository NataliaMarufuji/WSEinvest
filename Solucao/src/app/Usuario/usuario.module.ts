import { NgModule } from '@angular/core';
import { UsuarioComponent } from './usuario.component';
import { UsuarioService } from './usuario.service';
import { CommonModule } from '@angular/common';  
import { MenuComponent } from '../Menu/menu.component';
import { DetalhesInvestimentoComponent } from '../DetalhesInvestimento/detalhes.component';
import { PainelDetalhesComponent } from '../PainelDetalhes/painelDetalhes.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ UsuarioComponent],
    exports: [ UsuarioComponent ],
    providers: [ UsuarioService ]
})
export class UsuarioModule { }