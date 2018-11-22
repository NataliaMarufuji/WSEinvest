import { NgModule } from '@angular/core';
import { AcaoComponent } from './Acao.component';
import { AcaoService } from './Acao.service';
import { CommonModule } from '@angular/common';  

@NgModule({
    imports: [ CommonModule ],
    declarations: [ AcaoComponent],
    exports: [ AcaoComponent ],
    providers: [ AcaoService ]
})
export class AcaoModule { }