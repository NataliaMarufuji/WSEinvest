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
        this.lineChartLabels = [];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartLegend = true;
        this.lineChartType = 'line';
        this.lineChartData = [
            { data: [], label: '' }
        ];
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(184,157,69,0.2)',
                borderColor: 'rgba(31,56,87,1)',
                pointBackgroundColor: 'rgba(31,56,87,1)',
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
        this.acaoService = acaoService;
        this.acaoService.buscaIbovespa()
            .subscribe(function (data) {
            _this.retornoAcoes = data["Time Series (5min)"];
            for (var i = 0; i < Object.keys(_this.retornoAcoes).length; i++) {
                var objKey = Object.keys(_this.retornoAcoes)[i];
                var acao = new Acao_component_1.AcaoComponent();
                var time = objKey.substring(10, 19);
                var date = objKey.substring(0, 10);
                acao.date = date;
                acao.time = time;
                acao.open = _this.retornoAcoes[objKey]["1. open"];
                acao.high = _this.retornoAcoes[objKey]["2. high"];
                acao.low = _this.retornoAcoes[objKey]["3. low"];
                acao.close = _this.retornoAcoes[objKey]["4. close"];
                acao.volume = _this.retornoAcoes[objKey]["5. volume"];
                _this.acoes.push(acao);
            }
            _this.formataDados();
            _this.preencheLabel();
            _this.preencheData();
            console.log(_this.acoes);
        });
    }
    AcaoMenuComponent.prototype.formataDados = function () {
        var listaAcoesProvisoria = [];
        for (var i = this.acoes.length - 1; i >= 0; i--) {
            if (this.acoes[i].date == "2018-11-21") {
                listaAcoesProvisoria.push(this.acoes[i]);
            }
        }
        this.acoes = listaAcoesProvisoria;
    };
    AcaoMenuComponent.prototype.preencheLabel = function () {
        var _this = this;
        this.acoes.forEach(function (atual) {
            _this.lineChartLabels.push(atual.time);
        });
    };
    AcaoMenuComponent.prototype.preencheData = function () {
        var _this = this;
        this.lineChartData = [{ data: [], label: 'Volume' }, { data: [], label: 'High' }, { data: [], label: 'Low' }];
        this.acoes.forEach(function (atual) {
            _this.lineChartData[0].data.push(Number(atual.volume));
            _this.lineChartData[1].data.push(Number(atual.high));
            _this.lineChartData[2].data.push(Number(atual.low));
        });
        console.log(this.lineChartData);
    };
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