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
var DetalhesInvestimentoComponent = /** @class */ (function () {
    function DetalhesInvestimentoComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DetalhesInvestimentoComponent.prototype, "nome", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DetalhesInvestimentoComponent.prototype, "codigo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DetalhesInvestimentoComponent.prototype, "minimo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DetalhesInvestimentoComponent.prototype, "rentabilidade", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DetalhesInvestimentoComponent.prototype, "dataVencimento", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DetalhesInvestimentoComponent.prototype, "diasParaVencer", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DetalhesInvestimentoComponent.prototype, "pagamentoJuros", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DetalhesInvestimentoComponent.prototype, "IRRendimento", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DetalhesInvestimentoComponent.prototype, "IOFRendimento", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DetalhesInvestimentoComponent.prototype, "rating", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], DetalhesInvestimentoComponent.prototype, "showRating", void 0);
    DetalhesInvestimentoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'detalhes',
            templateUrl: './detalhes.component.html',
            styleUrls: ['./detalhes.component.css']
        })
    ], DetalhesInvestimentoComponent);
    return DetalhesInvestimentoComponent;
}());
exports.DetalhesInvestimentoComponent = DetalhesInvestimentoComponent;
//# sourceMappingURL=detalhes.component.js.map