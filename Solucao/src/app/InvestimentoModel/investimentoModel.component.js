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
var caracteristicas_component_1 = require("../CaracteristicasInvestimento/caracteristicas.component");
var InvestimentoModelComponent = /** @class */ (function () {
    function InvestimentoModelComponent() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InvestimentoModelComponent.prototype, "nome", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InvestimentoModelComponent.prototype, "descricao", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], InvestimentoModelComponent.prototype, "investimentoEspecifico", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InvestimentoModelComponent.prototype, "definicao", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], InvestimentoModelComponent.prototype, "funcionamento", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", caracteristicas_component_1.CaracteristicasInvestimentoComponent)
    ], InvestimentoModelComponent.prototype, "caracteristicas", void 0);
    InvestimentoModelComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'investimento',
            templateUrl: './investimentoModel.component.html',
            styleUrls: ['./investimentoModel.component.css']
        })
    ], InvestimentoModelComponent);
    return InvestimentoModelComponent;
}());
exports.InvestimentoModelComponent = InvestimentoModelComponent;
//# sourceMappingURL=investimentoModel.component.js.map