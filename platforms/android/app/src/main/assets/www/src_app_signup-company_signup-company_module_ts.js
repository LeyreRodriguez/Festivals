"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_signup-company_signup-company_module_ts"],{

/***/ 6130:
/*!*****************************************************************!*\
  !*** ./src/app/signup-company/signup-company-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupCompanyPageRoutingModule": () => (/* binding */ SignupCompanyPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _signup_company_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-company.page */ 4160);




const routes = [
    {
        path: '',
        component: _signup_company_page__WEBPACK_IMPORTED_MODULE_0__.SignupCompanyPage
    }
];
let SignupCompanyPageRoutingModule = class SignupCompanyPageRoutingModule {
};
SignupCompanyPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SignupCompanyPageRoutingModule);



/***/ }),

/***/ 9420:
/*!*********************************************************!*\
  !*** ./src/app/signup-company/signup-company.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupCompanyPageModule": () => (/* binding */ SignupCompanyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _signup_company_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-company-routing.module */ 6130);
/* harmony import */ var _signup_company_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-company.page */ 4160);
/* harmony import */ var _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.page */ 67);








let SignupCompanyPageModule = class SignupCompanyPageModule {
};
SignupCompanyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _signup_company_routing_module__WEBPACK_IMPORTED_MODULE_0__.SignupCompanyPageRoutingModule
        ],
        declarations: [_signup_company_page__WEBPACK_IMPORTED_MODULE_1__.SignupCompanyPage, _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__.FooterPage]
    })
], SignupCompanyPageModule);



/***/ }),

/***/ 4160:
/*!*******************************************************!*\
  !*** ./src/app/signup-company/signup-company.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupCompanyPage": () => (/* binding */ SignupCompanyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _signup_company_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-company.page.html?ngResource */ 4961);
/* harmony import */ var _signup_company_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup-company.page.scss?ngResource */ 9492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 7556);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);







let SignupCompanyPage = class SignupCompanyPage {
    constructor(fb, authSvc, router) {
        this.fb = fb;
        this.authSvc = authSvc;
        this.router = router;
        this.signupBussinesForm = this.fb.group({
            bussinessName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,15}$/)]]
        });
    }
    ngOnInit() {
    }
    onRegister() {
        var _a;
        const password = (_a = this.signupBussinesForm.get('password')) === null || _a === void 0 ? void 0 : _a.value;
        const user = {
            firstName: "",
            lastName: "",
            email: this.signupBussinesForm.value.email,
            photoUrl: "https://firebasestorage.googleapis.com/v0/b/festival-ff759.appspot.com/o/Company-photo.png?alt=media&token=8f0e5a42-ef4c-4f22-af4f-b377d0e86e4a",
            company: true,
            admin: false,
            userName: this.signupBussinesForm.value.bussinessName,
            festivalesFavoritos: [],
        };
        this.authSvc.register(user, password);
        this.router.navigate(['/', 'mainPage']);
    }
};
SignupCompanyPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
SignupCompanyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-signup-company',
        template: _signup_company_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        providers: [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService],
        styles: [_signup_company_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupCompanyPage);



/***/ }),

/***/ 9492:
/*!********************************************************************!*\
  !*** ./src/app/signup-company/signup-company.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWdudXAtY29tcGFueS5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 4961:
/*!********************************************************************!*\
  !*** ./src/app/signup-company/signup-company.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"d-flex justify-content-center align-items-center mt-4\">\n    <div>\n      <h1 class=\"d-flex justify-content-center\">Registrarse</h1>\n\n      <form [formGroup]=\"signupBussinesForm\" (ngSubmit)=\"onRegister()\" novalidate>\n        <div class=\"mb-3 \">\n          <input type=\"text\" class=\"form-control\" formControlName=\"bussinessName\" id=\"bussinessName\"\n            placeholder=\"Nombre empresa*\" required>\n          <div\n            *ngIf=\"signupBussinesForm.controls['bussinessName'].invalid && (signupBussinesForm.controls['bussinessName'].dirty || signupBussinesForm.controls['bussinessName'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"signupBussinesForm.controls['bussinessName'].errors\">\n              El nombre de la empresa es obligatorio.<br>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Correo*\"\n            required>\n          <div\n            *ngIf=\"signupBussinesForm.controls['email'].invalid && (signupBussinesForm.controls['email'].dirty || signupBussinesForm.controls['email'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"signupBussinesForm.controls['email'].errors\">\n              El email es obligatorio.<br>\n              Por favor, cumpla con el formato usuario@example.com\n            </div>\n          </div>\n        </div>\n\n        <div class=\"mb-3\">\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"password\"\n            placeholder=\"Contraseña*\" required>\n          <div\n            *ngIf=\"signupBussinesForm.controls['password'].invalid && (signupBussinesForm.controls['password'].dirty || signupBussinesForm.controls['password'].touched)\"\n            class=\"alert alert-danger\">\n            <div *ngIf=\"signupBussinesForm.controls['password'].errors\">\n              La contraseña es obligatoria.<br>\n              La contraseña debe tener una mayúscula, <br>\n              una minúscula y ser de extension minima 8 caracteres <br>\n              y máxima 15 caracteres.\n            </div>\n          </div>\n        </div>\n\n        <div class=\"d-flex justify-content-center flex-direction: row align-items-center\">\n          <button type=\"submit\" id=\"Registrarse\" class=\"btn btn-primary d-flex justify-content-center \"\n            [disabled]=\"signupBussinesForm.invalid\">Registrarse</button>\n            <p>¿Tiene una cuenta?<a [routerLink]=\"['/login2']\"> Iniciar sesión</a></p>\n        </div>\n      </form>\n    </div>\n  </div>\n</ion-content>\n\n<app-footer></app-footer>\n\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\" crossorigin=\"anonymous\">  \n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script>    \n";

/***/ })

}]);
//# sourceMappingURL=src_app_signup-company_signup-company_module_ts.js.map