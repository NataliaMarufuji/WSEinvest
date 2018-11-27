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
var usuario_component_1 = require("../Usuario/usuario.component");
var usuario_service_1 = require("../Usuario/usuario.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, route, router) {
        var _this = this;
        this.users = [];
        this.user = new usuario_component_1.UsuarioComponent();
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.erroAutenticacao = false;
        this.userService.buscaListaUsuarios()
            .subscribe(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.users.forEach(function (usuario) {
            if (usuario.email == _this.user.email) {
                if (usuario.senha == _this.user.senha) {
                    _this.userService.setUsuario(_this.user);
                    _this.userService.setAutenticado(true);
                    _this.router.navigateByUrl('');
                }
            }
        });
        this.erroAutenticacao = true;
        ;
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [usuario_service_1.UsuarioService, router_1.ActivatedRoute, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map