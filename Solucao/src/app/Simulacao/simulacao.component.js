"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SimulacaoComponent = /** @class */ (function () {
    function SimulacaoComponent() {
        $.getScript('app/Scripts/tabs.min.js');
        this.labelMeses = '180';
    }
    SimulacaoComponent.prototype.SelecionaInvestimento = function (tipoInvestimento) {
        this.tipoInvestimento = tipoInvestimento;
        this.updateTextInput(this.labelMeses, true);
    };
    SimulacaoComponent.prototype.updateTextInput = function (event, investimentoMudou) {
        if (!investimentoMudou) {
            this.labelMeses = event.target.value;
        }
        this.investido = this.valor;
        var valorPotencia = this.definePotencia();
        var potencia = 0;
        for (var i = 0; i < Number(this.labelMeses); i++) {
            potencia += (valorPotencia);
            console.log(potencia);
        }
        this.resultado = this.valor * potencia;
        this.rendimento = this.resultado - this.valor;
    };
    SimulacaoComponent.prototype.definePotencia = function () {
        if (this.tipoInvestimento == 'prefixado') {
            return 1.0952;
        }
        else if (this.tipoInvestimento == 'direto') {
            return 1.0054;
        }
        else if (this.tipoInvestimento == 'ipca') {
            return 1.0456;
        }
        else if (this.tipoInvestimento == 'cdb_lc') {
            return 1.0950;
        }
        else if (this.tipoInvestimento == 'lci_lca') {
            return 1.0900;
        }
        else {
            return 1.0952;
        }
    };
    SimulacaoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'simulacao',
            templateUrl: './simulacao.component.html',
            styleUrls: ['./simulacao.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SimulacaoComponent);
    return SimulacaoComponent;
}());
exports.SimulacaoComponent = SimulacaoComponent;
//# sourceMappingURL=simulacao.component.js.map