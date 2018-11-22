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
var alpha_vantage_cli_1 = require("alpha-vantage-cli");
var AcaoMenuComponent = /** @class */ (function () {
    function AcaoMenuComponent(route) {
        this.route = route;
        this.yourApiKey = 'NKT6F243BCB0413Z';
        this.alphaVantageAPI = new alpha_vantage_cli_1.AlphaVantageAPI(yourApiKey, 'compact', true);
        //this.acaoService = acaoService;
        /* this.acaoService.buscaIbovespa()
                        .subscribe(data => {
                            this.acao = data;
                        });*/
        alphaVantageAPI.getIntradayData('MSFT', '15min')
            .then(function (intradayData) {
            console.log("Intraday data:");
            console.log(intradayData);
        })
            .catch(function (err) {
            console.error(err);
        });
    }
    AcaoMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'acao-menu',
            templateUrl: './acaoMenu.component.html',
            styleUrls: ['./acaoMenu.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], AcaoMenuComponent);
    return AcaoMenuComponent;
}());
exports.AcaoMenuComponent = AcaoMenuComponent;
//# sourceMappingURL=AcaoMenu.component.js.map