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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this._listaUsuarios = [];
        this.http = http;
    }
    ;
    UsuarioService.prototype.setUsuariosList = function (listaUsuarios) {
        this._listaUsuarios = listaUsuarios;
    };
    UsuarioService.prototype.getUsuariosList = function () {
        return this._listaUsuarios;
    };
    UsuarioService.prototype.setUsuario = function (usuario) {
        this._usuario = usuario;
    };
    UsuarioService.prototype.getUsuario = function () {
        return this._usuario;
    };
    UsuarioService.prototype.setAutenticado = function (isAutenticado) {
        this._usuario.autenticado = isAutenticado;
    };
    UsuarioService.prototype.getAutenticado = function () {
        return this._usuario.autenticado;
    };
    UsuarioService.prototype.buscaListaUsuarios = function () {
        return this.http.get('app/JsonData/Login.json')
            .map(function (res) { return res.json(); });
    };
    UsuarioService.prototype.cadastraUsuario = function (usuario) {
        return this.http
            .post("app/JsonData/Login.json", JSON.stringify(usuario))
            .map(function (res) { return res.json(); });
    };
    UsuarioService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map