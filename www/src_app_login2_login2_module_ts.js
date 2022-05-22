"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login2_login2_module_ts"],{

/***/ 9570:
/*!*************************************************!*\
  !*** ./src/app/login2/login2-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login2PageRoutingModule": () => (/* binding */ Login2PageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login2.page */ 7278);




const routes = [
    {
        path: '',
        component: _login2_page__WEBPACK_IMPORTED_MODULE_0__.Login2Page
    }
];
let Login2PageRoutingModule = class Login2PageRoutingModule {
};
Login2PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], Login2PageRoutingModule);



/***/ }),

/***/ 1490:
/*!*****************************************!*\
  !*** ./src/app/login2/login2.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login2PageModule": () => (/* binding */ Login2PageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login2-routing.module */ 9570);
/* harmony import */ var _login2_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login2.page */ 7278);
/* harmony import */ var _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.page */ 67);








let Login2PageModule = class Login2PageModule {
};
Login2PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _login2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Login2PageRoutingModule
        ],
        declarations: [_login2_page__WEBPACK_IMPORTED_MODULE_1__.Login2Page, _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__.FooterPage]
    })
], Login2PageModule);



/***/ }),

/***/ 7278:
/*!***************************************!*\
  !*** ./src/app/login2/login2.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login2Page": () => (/* binding */ Login2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login2.page.html?ngResource */ 2391);
/* harmony import */ var _login2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login2.page.scss?ngResource */ 7528);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);








let Login2Page = class Login2Page {
    constructor(fb, authSvc, router, location) {
        this.fb = fb;
        this.authSvc = authSvc;
        this.router = router;
        this.location = location;
        this.loginForm = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/)]]
        });
    }
    ngOnInit() {
    }
    onLogin() {
        console.log(this.loginForm);
        const { email, password } = this.loginForm.value;
        try {
            this.authSvc.login(email, password);
            this.location.back();
            // this.router.navigate(['/mainPage']);
        }
        catch (error) {
            console.log(error);
        }
    }
    back() {
        this.location.back();
    }
};
Login2Page.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location }
];
Login2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login2',
        template: _login2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], Login2Page);



/***/ }),

/***/ 7528:
/*!****************************************************!*\
  !*** ./src/app/login2/login2.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbjIucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2391:
/*!****************************************************!*\
  !*** ./src/app/login2/login2.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button [routerLink]=\"['/login']\" >ir a login</ion-button>\n</ion-content> -->\n\n<ion-content>\n\n  <div class=\"d-flex justify-content-center flex-direction: row\">\n    <img class=\"img-fluid\" src=\"assets/img/festival4.jpg\" alt=\"login\">\n\n      <div class=\"\">\n          <h1 class=\"\">¡Ingrese a su cuenta!</h1>\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"onLogin()\" novalidate>\n              <div class=\"mb-3\">\n\n                  <input type=\"text\" class=\"form-control\" formControlName=\"email\" id=\"email\"\n                      placeholder=\"Correo*\">\n                  <div *ngIf=\"loginForm.controls['email'].invalid && (loginForm.controls['email'].dirty || loginForm.controls['email'].touched)\"\n                      class=\"alert alert-danger\">\n                      <div *ngIf=\"loginForm.controls['email'].errors\">\n                          El email es obligatorio.<br>\n                          Por favor, cumpla con el formato usuario@example.com\n                      </div>\n                  </div>\n\n              </div>\n              <div class=\"mb-3\">\n                  <input type=\"password\" class=\"form-control\" id=\"password\" formControlName=\"password\"\n                      placeholder=\"Contraseña*\">\n                  <div *ngIf=\"loginForm.controls['password'].invalid && (loginForm.controls['password'].dirty || loginForm.controls['password'].touched)\"\n                      class=\"alert alert-danger\">\n                      <div *ngIf=\"loginForm.controls['password'].errors\">\n                          La contraseña es obligatoria.<br>\n                          La contraseña debe tener una mayúscula, <br>\n                          una minúscula y ser de extension minima 8 caracteres <br>\n                          y máxima 15 caracteres.\n                      </div>\n                  </div>\n\n\n              </div>\n\n              <div class=\"d-flex justify-content-center flex-direction: row  mx-auto\">\n                  <button type=\"submit\" id=\"InciarSesion\" class=\"btn btn-primary\"\n                      [disabled]=\"loginForm.invalid\">Iniciar sesión</button>\n                  <p>¿No tienes una cuenta?<a [routerLink]=\"['/signup']\">Registrarse</a></p>\n              </div>\n          </form>\n      </div>\n  </div>\n</ion-content>\n\n<app-footer></app-footer>\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\" crossorigin=\"anonymous\">  \n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script>    \n";

/***/ })

}]);
//# sourceMappingURL=src_app_login2_login2_module_ts.js.map