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
var Acao_service_1 = require("../Acao/Acao.service");
var Acao_component_1 = require("../Acao/Acao.component");
var AcaoMenuComponent = /** @class */ (function () {
    function AcaoMenuComponent(route, acaoService) {
        var _this = this;
        this.route = route;
        this.acoes = [];
        this.acao = new Acao_component_1.AcaoComponent();
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.acaoService = acaoService;
        this.acaoService.buscaIbovespa()
            .subscribe(function (data) {
            _this.retornoAcoes = data["Time Series (5min)"];
            for (var i = 0; i < Object.keys(_this.retornoAcoes).length; i++) {
                console.log(Object.keys(_this.retornoAcoes)[i]);
                var objKey = Object.keys(_this.retornoAcoes)[i];
                _this.acao.open = _this.retornoAcoes[objKey]["1. open"];
                _this.acao.high = _this.retornoAcoes[objKey]["2. high"];
                _this.acao.low = _this.retornoAcoes[objKey]["3. low"];
                _this.acao.close = _this.retornoAcoes[objKey]["4. close"];
                _this.acao.volume = _this.retornoAcoes[objKey]["5. volume"];
                _this.acoes.push(_this.acao);
            }
            console.log(_this.acoes);
        });
    }
    AcaoMenuComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    AcaoMenuComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    AcaoMenuComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    AcaoMenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'acao-menu',
            templateUrl: './acaoMenu.component.html',
            styleUrls: ['./acaoMenu.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, Acao_service_1.AcaoService])
    ], AcaoMenuComponent);
    return AcaoMenuComponent;
}());
exports.AcaoMenuComponent = AcaoMenuComponent;
//# sourceMappingURL=AcaoMenu.component.js.map