"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var main_component_1 = require("./Main/main.component");
var login_component_1 = require("./Login/login.component");
var cadastroUsuario_component_1 = require("./CadastroUsuario/cadastroUsuario.component");
var simulacao_component_1 = require("./Simulacao/simulacao.component");
var simulacaoMenu_component_1 = require("./SimulacaoMenu/simulacaoMenu.component");
var perfil_component_1 = require("./Perfil/perfil.component");
var appRoutes = [
    { path: '', component: main_component_1.MainComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'cadastro-de-usuario', component: cadastroUsuario_component_1.CadastroUsuarioComponent },
    { path: 'simulacao-investimento', component: simulacaoMenu_component_1.SimulacaoMenuComponent },
    { path: 'perfil-investidor', component: perfil_component_1.PerfilComponent },
    { path: 'simulacao', component: simulacao_component_1.SimulacaoComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map