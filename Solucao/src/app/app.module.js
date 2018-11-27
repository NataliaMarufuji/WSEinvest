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
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/map");
var app_routes_1 = require("./app.routes");
var Acao_module_1 = require("./Acao/Acao.module");
var AcaoMenu_component_1 = require("./AcaoMenu/AcaoMenu.component");
var cadastroUsuario_component_1 = require("./CadastroUsuario/cadastroUsuario.component");
var caracteristicas_component_1 = require("./CaracteristicasInvestimento/caracteristicas.component");
var investimentoModel_module_1 = require("./InvestimentoModel/investimentoModel.module");
var investimentos_component_1 = require("./Investimentos/investimentos.component");
var listagemBolsa_component_1 = require("./ListagemBolsa/listagemBolsa.component");
var login_component_1 = require("./Login/login.component");
var menu_component_1 = require("./Menu/menu.component");
var main_component_1 = require("./Main/main.component");
var simulacao_component_1 = require("./Simulacao/simulacao.component");
var simulacaoMenu_component_1 = require("./SimulacaoMenu/simulacaoMenu.component");
var painel_component_1 = require("./Painel/painel.component");
var passos_component_1 = require("./Passos/passos.component");
var perfil_component_1 = require("./Perfil/perfil.component");
var ng2_charts_1 = require("ng2-charts/ng2-charts");
var usuario_module_1 = require("./Usuario/usuario.module");
var ContaUsuario_component_1 = require("./ContaUsuario/ContaUsuario.component");
var investimentoEspecifico_component_1 = require("./InvestimentoEspecifico/investimentoEspecifico.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                app_routes_1.routing,
                forms_1.FormsModule,
                ng2_charts_1.ChartsModule,
                Acao_module_1.AcaoModule,
                investimentoModel_module_1.InvestimentoModelModule,
                usuario_module_1.UsuarioModule,
            ],
            declarations: [app_component_1.AppComponent, AcaoMenu_component_1.AcaoMenuComponent, ContaUsuario_component_1.ContaUsuarioComponent, caracteristicas_component_1.CaracteristicasInvestimentoComponent, menu_component_1.MenuComponent, painel_component_1.PainelComponent, investimentoEspecifico_component_1.InvestimentoEspecificoComponent, main_component_1.MainComponent, listagemBolsa_component_1.ListagemBolsaComponent, login_component_1.LoginComponent, cadastroUsuario_component_1.CadastroUsuarioComponent, simulacaoMenu_component_1.SimulacaoMenuComponent, passos_component_1.PassosComponent, perfil_component_1.PerfilComponent, simulacao_component_1.SimulacaoComponent, investimentos_component_1.InvestimentosComponent],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map