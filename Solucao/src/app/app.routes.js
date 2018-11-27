"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var AcaoMenu_component_1 = require("./AcaoMenu/AcaoMenu.component");
var main_component_1 = require("./Main/main.component");
var login_component_1 = require("./Login/login.component");
var cadastroUsuario_component_1 = require("./CadastroUsuario/cadastroUsuario.component");
var investimentos_component_1 = require("./Investimentos/investimentos.component");
var simulacao_component_1 = require("./Simulacao/simulacao.component");
var simulacaoMenu_component_1 = require("./SimulacaoMenu/simulacaoMenu.component");
var passos_component_1 = require("./Passos/passos.component");
var perfil_component_1 = require("./Perfil/perfil.component");
var ContaUsuario_component_1 = require("./ContaUsuario/ContaUsuario.component");
var investimentoEspecifico_component_1 = require("./InvestimentoEspecifico/investimentoEspecifico.component");
var appRoutes = [
    { path: '', component: main_component_1.MainComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'cadastro-de-usuario', component: cadastroUsuario_component_1.CadastroUsuarioComponent },
    { path: 'simulacao-investimento', component: simulacaoMenu_component_1.SimulacaoMenuComponent },
    { path: 'perfil-investidor', component: perfil_component_1.PerfilComponent },
    { path: 'simulacao', component: simulacao_component_1.SimulacaoComponent },
    { path: 'primeiros-passos', component: passos_component_1.PassosComponent },
    { path: 'investimentos', component: investimentos_component_1.InvestimentosComponent },
    { path: 'investimento/:tipoInvestimento', component: investimentoEspecifico_component_1.InvestimentoEspecificoComponent },
    { path: 'minha-conta', component: ContaUsuario_component_1.ContaUsuarioComponent },
    { path: 'acoes', component: AcaoMenu_component_1.AcaoMenuComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map