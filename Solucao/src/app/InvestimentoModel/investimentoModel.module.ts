import { NgModule } from '@angular/core';
import { InvestimentoModelComponent } from './investimentoModel.component';
import { InvestimentoModelService } from './investimentoModel.service';

@NgModule({
    declarations: [ InvestimentoModelComponent],
    exports: [ InvestimentoModelComponent ],
    providers: [ InvestimentoModelService ]
})
export class InvestimentoModelModule { }