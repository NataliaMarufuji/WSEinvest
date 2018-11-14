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
var PerfilComponent = /** @class */ (function () {
    function PerfilComponent() {
        $.getScript('app/Scripts/select.min.js');
        this.mostrarObjetivo = true;
        this.mostrarPrazo = false;
        this.mostrarRisco = false;
        this.mostrarRecebimento = false;
    }
    PerfilComponent.prototype.mostraPrazo = function () {
        this.mostrarObjetivo = false;
        this.mostrarPrazo = true;
        $.getScript('app/Scripts/select.min.js');
    };
    PerfilComponent.prototype.mostraRisco = function () {
        this.mostrarRisco = true;
        this.mostrarPrazo = false;
        $.getScript('app/Scripts/select.min.js');
    };
    PerfilComponent.prototype.mostraRecebimento = function () {
        this.mostrarRisco = false;
        this.mostrarRecebimento = true;
        $.getScript('app/Scripts/select.min.js');
    };
    PerfilComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'perfil-investidor',
            templateUrl: './perfil.component.html',
            styleUrls: ['./perfil.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], PerfilComponent);
    return PerfilComponent;
}());
exports.PerfilComponent = PerfilComponent;
//# sourceMappingURL=perfil.component.js.map