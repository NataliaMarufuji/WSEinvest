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
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var investimentoModel_service_1 = require("../InvestimentoModel/investimentoModel.service");
var InvestimentoEspecificoComponent = /** @class */ (function () {
    function InvestimentoEspecificoComponent(location, route, investimentoService) {
        this.location = location;
        this.route = route;
        this.investimentoService = investimentoService;
        this.buscaInvestimento();
    }
    ;
    InvestimentoEspecificoComponent.prototype.buscaInvestimento = function () {
        var _this = this;
        this.investimentoService.buscaListaInvestimentos()
            .subscribe(function (data) {
            data.forEach(function (investimento) {
                if (investimento.tipoInvestimento == _this.tipoInvestimento) {
                    _this.investimento = investimento;
                }
            });
        });
    };
    InvestimentoEspecificoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.tipoInvestimento = params['tipoInvestimento'];
            _this.buscaInvestimento();
            console.log("tipo de investimento: " + _this.tipoInvestimento);
        });
    };
    InvestimentoEspecificoComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    InvestimentoEspecificoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'investimento-especifico',
            templateUrl: './investimentoEspecifico.component.html',
            styleUrls: ['./investimentoEspecifico.component.css']
        }),
        __metadata("design:paramtypes", [common_1.Location, router_1.ActivatedRoute, investimentoModel_service_1.InvestimentoModelService])
    ], InvestimentoEspecificoComponent);
    return InvestimentoEspecificoComponent;
}());
exports.InvestimentoEspecificoComponent = InvestimentoEspecificoComponent;
//# sourceMappingURL=investimentoEspecifico.component.js.map