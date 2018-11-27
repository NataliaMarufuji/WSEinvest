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
var usuario_service_1 = require("../Usuario/usuario.service");
var usuario_component_1 = require("../Usuario/usuario.component");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(userService, route, router) {
        this.loginOuCadastro = false;
        $.getScript('app/Scripts/dropdown-menu.min.js');
        $.getScript('app/Scripts/select.min.js');
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.usuario = this.userService.getUsuario();
        if (this.usuario != undefined) {
            this.usuarioAutenticado = this.userService.getAutenticado();
        }
    }
    MenuComponent.prototype.verificaAcao = function (acao) {
        if (acao == 1) {
            this.router.navigateByUrl("/minha-conta");
        }
        else if (acao == 2) {
            this.logout();
        }
    };
    MenuComponent.prototype.logout = function () {
        this.usuarioAutenticado = false;
        this.userService.setAutenticado(false);
        this.userService.setUsuario(new usuario_component_1.UsuarioComponent());
        location.reload();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], MenuComponent.prototype, "loginOuCadastro", void 0);
    MenuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'menu-inicial',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.css']
        }),
        __metadata("design:paramtypes", [usuario_service_1.UsuarioService, router_1.ActivatedRoute, router_1.Router])
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=menu.component.js.map