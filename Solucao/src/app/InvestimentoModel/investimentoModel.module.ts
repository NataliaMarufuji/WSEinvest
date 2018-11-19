import { NgModule } from '@angular/core';
import { InvestimentoModelComponent } from './investimentoModel.component';
import { InvestimentoModelService } from './investimentoModel.service';
import { CommonModule } from '@angular/common';  

@NgModule({
    imports: [ CommonModule ],
    declarations: [ InvestimentoModelComponent],
    exports: [ InvestimentoModelComponent ],
    providers: [ InvestimentoModelService ]
})
export class InvestimentoModelModule { }