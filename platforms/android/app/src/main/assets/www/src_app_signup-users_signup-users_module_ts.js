"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup-users_signup-users_module_ts"],{

/***/ 7603:
/*!*************************************************************!*\
  !*** ./src/app/signup-users/signup-users-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupUsersPageRoutingModule": () => (/* binding */ SignupUsersPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signup_users_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-users.page */ 6530);




const routes = [
    {
        path: '',
        component: _signup_users_page__WEBPACK_IMPORTED_MODULE_0__.SignupUsersPage
    }
];
let SignupUsersPageRoutingModule = class SignupUsersPageRoutingModule {
};
SignupUsersPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupUsersPageRoutingModule);



/***/ }),

/***/ 4578:
/*!*****************************************************!*\
  !*** ./src/app/signup-users/signup-users.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupUsersPageModule": () => (/* binding */ SignupUsersPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-users-routing.module */ 7603);
/* harmony import */ var _signup_users_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-users.page */ 6530);
/* harmony import */ var _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.page */ 67);








let SignupUsersPageModule = class SignupUsersPageModule {
};
SignupUsersPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _signup_users_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupUsersPageRoutingModule
        ],
        declarations: [_signup_users_page__WEBPACK_IMPORTED_MODULE_1__.SignupUsersPage, _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__.FooterPage]
    })
], SignupUsersPageModule);



/***/ }),

/***/ 6530:
/*!***************************************************!*\
  !*** ./src/app/signup-users/signup-users.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupUsersPage": () => (/* binding */ SignupUsersPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signup_users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-users.page.html?ngResource */ 6817);
/* harmony import */ var _signup_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-users.page.scss?ngResource */ 8219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);







let SignupUsersPage = class SignupUsersPage {
    constructor(fb, authSvc, router) {
        this.fb = fb;
        this.authSvc = authSvc;
        this.router = router;
        this.registerForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/)]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    ngOnInit() {
    }
    onRegister() {
        var _a;
        const password = (_a = this.registerForm.get('password')) === null || _a === void 0 ? void 0 : _a.value;
        const user = {
            firstName: this.registerForm.value.firstName,
            lastName: this.registerForm.value.lastName,
            email: this.registerForm.value.email,
            photoUrl: "https://firebasestorage.googleapis.com/v0/b/festival-ff759.appspot.com/o/User-photo.png?alt=media&token=4fcb3d57-b019-479a-9736-d695faf9810b",
            company: false,
            admin: false,
            festivalesFavoritos: [],
            userName: this.registerForm.value.username
        };
        this.authSvc.register(user, password);
        this.router.navigate(['/', 'main-page']);
    }
};
SignupUsersPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SignupUsersPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signup-users',
        template: _signup_users_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService],
        styles: [_signup_users_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupUsersPage);



/***/ }),

/***/ 8219:
/*!****************************************************************!*\
  !*** ./src/app/signup-users/signup-users.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAtdXNlcnMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6817:
/*!****************************************************************!*\
  !*** ./src/app/signup-users/signup-users.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content>\n  <div class=\"d-flex justify-content-center align-items-center mt-4\">\n    <div>\n      <h1 class=\"d-flex justify-content-center\">Registrarse</h1>\n\n      <form [formGroup]=\"registerForm\" (ngSubmit)=\"onRegister()\" novalidate>\n        <div class=\"mb-3 \">\n          <input type=\"text\" class=\"form-control\" formControlName=\"firstName\" id=\"firstName\" placeholder=\"Nombre*\"\n            required>\n          <div\n            *ngIf=\"registerForm.controls['firstName'].invalid && (registerForm.controls['firstName'].dirty || registerForm.controls['firstName'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"registerForm.controls['firstName'].errors\">\n              El nombre es obligatorio.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"lastName\" id=\"lastName\"\n            placeholder=\"Apellidos*\" required>\n          <div\n            *ngIf=\"registerForm.controls['lastName'].invalid && (registerForm.controls['lastName'].dirty || registerForm.controls['lastName'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"registerForm.controls['lastName'].errors\">\n              El apellido es obligatorio.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Correo*\"\n            required>\n          <div\n            *ngIf=\"registerForm.controls['email'].invalid && (registerForm.controls['email'].dirty || registerForm.controls['email'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"registerForm.controls['email'].errors\">\n              El email es obligatorio.<br>\n              Por favor, cumpla con el formato usuario@example.com\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"password\"\n            placeholder=\"Contraseña*\" required>\n          <div\n            *ngIf=\"registerForm.controls['password'].invalid && (registerForm.controls['password'].dirty || registerForm.controls['password'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"registerForm.controls['password'].errors\">\n              La contraseña es obligatoria.<br>\n              La contraseña debe tener una mayúscula, <br>\n              una minúscula y ser de extension minima 8 caracteres <br>\n              y máxima 15 caracteres.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <input type=\"text\" class=\"form-control\" formControlName=\"username\" id=\"username\"\n            placeholder=\"Nombre de usuario*\" required>\n          <div\n            *ngIf=\"registerForm.controls['username'].invalid && (registerForm.controls['username'].dirty || registerForm.controls['username'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"registerForm.controls['username'].errors\">\n              El nombre de usuario es obligatorio.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"d-flex justify-content-center flex-direction: row align-items-center\">\n          <button type=\"submit\" id=\"Registrarse\" class=\"btn btn-primary d-flex justify-content-center \"\n            [disabled]=\"registerForm.invalid\">Registrarse</button>\n            <p>¿Tiene una cuenta?<a [routerLink]=\"['/login2']\"> Iniciar sesión</a></p>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n\n<app-footer></app-footer>\n\n\n\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\" crossorigin=\"anonymous\">  \n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script>    \n";

/***/ })

}]);
//# sourceMappingURL=src_app_signup-users_signup-users_module_ts.js.map