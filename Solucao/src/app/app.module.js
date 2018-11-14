"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var app_routes_1 = require("./app.routes");
var cadastroUsuario_component_1 = require("./CadastroUsuario/cadastroUsuario.component");
var listagemBolsa_component_1 = require("./ListagemBolsa/listagemBolsa.component");
var login_component_1 = require("./Login/login.component");
var menu_component_1 = require("./Menu/menu.component");
var main_component_1 = require("./Main/main.component");
var simulacao_component_1 = require("./Simulacao/simulacao.component");
var simulacaoMenu_component_1 = require("./SimulacaoMenu/simulacaoMenu.component");
var passos_component_1 = require("./Passos/passos.component");
var perfil_component_1 = require("./Perfil/perfil.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routes_1.routing,
            ],
            declarations: [app_component_1.AppComponent, menu_component_1.MenuComponent, main_component_1.MainComponent, listagemBolsa_component_1.ListagemBolsaComponent, login_component_1.LoginComponent, cadastroUsuario_component_1.CadastroUsuarioComponent, simulacaoMenu_component_1.SimulacaoMenuComponent, passos_component_1.PassosComponent, perfil_component_1.PerfilComponent, simulacao_component_1.SimulacaoComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map