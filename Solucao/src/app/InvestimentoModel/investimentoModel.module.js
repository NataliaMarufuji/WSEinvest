"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var investimentoModel_component_1 = require("./investimentoModel.component");
var investimentoModel_service_1 = require("./investimentoModel.service");
var InvestimentoModelModule = /** @class */ (function () {
    function InvestimentoModelModule() {
    }
    InvestimentoModelModule = __decorate([
        core_1.NgModule({
            declarations: [investimentoModel_component_1.InvestimentoModelComponent],
            exports: [investimentoModel_component_1.InvestimentoModelComponent],
            providers: [investimentoModel_service_1.InvestimentoModelService]
        })
    ], InvestimentoModelModule);
    return InvestimentoModelModule;
}());
exports.InvestimentoModelModule = InvestimentoModelModule;
//# sourceMappingURL=investimentoModel.module.js.map