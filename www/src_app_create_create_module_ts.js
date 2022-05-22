"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_create_create_module_ts"],{

/***/ 8407:
/*!*************************************************!*\
  !*** ./src/app/create/create-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePageRoutingModule": () => (/* binding */ CreatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.page */ 7970);




const routes = [
    {
        path: '',
        component: _create_page__WEBPACK_IMPORTED_MODULE_0__.CreatePage
    }
];
let CreatePageRoutingModule = class CreatePageRoutingModule {
};
CreatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CreatePageRoutingModule);



/***/ }),

/***/ 5926:
/*!*****************************************!*\
  !*** ./src/app/create/create.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePageModule": () => (/* binding */ CreatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _create_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-routing.module */ 8407);
/* harmony import */ var _create_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.page */ 7970);







let CreatePageModule = class CreatePageModule {
};
CreatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _create_routing_module__WEBPACK_IMPORTED_MODULE_0__.CreatePageRoutingModule
        ],
        declarations: [_create_page__WEBPACK_IMPORTED_MODULE_1__.CreatePage],
    })
], CreatePageModule);

// this.afAuth.onAuthStateChanged((user) => {
//   if (user) {
//     this.user = user;
//     console.log("Usuario logueado");
//     resolve(true);
//   } else {
//     this.user = null;
//     console.log("No hay usuario logueado");
//     resolve(false);
//   }
// });


/***/ }),

/***/ 7970:
/*!***************************************!*\
  !*** ./src/app/create/create.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CreatePage": () => (/* binding */ CreatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.page.html?ngResource */ 2932);
/* harmony import */ var _create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.page.scss?ngResource */ 1164);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/crud.service */ 3927);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ 7556);






let CreatePage = class CreatePage {
    constructor(crud, auth) {
        this.crud = crud;
        this.auth = auth;
        this.uuidUser = "";
        this.fesnameVal = "";
        this.fesdescVal = "";
        this.authy = auth;
        if (this.checkLogin()) {
            this.crud.databaseConn();
        }
    }
    ionViewDidEnter() {
        //  this.crud.getAllUsers()
        this.crud.getAllFestivals(this.uuidUser);
    }
    remove(uuid, id) {
        this.crud.deleteUser(uuid, id);
    }
    ngOnInit() {
    }
    checkLogin() {
        //this.authy.hola()
        if (this.authy.checkIfCurrentUser()) {
            this.uuidUser = this.authy.getUserUid();
            return true;
        }
        else {
            alert("Para acceder a esta pagina tiene que estar logueado");
            window.location.assign("/festivales");
            return false;
        }
    }
};
CreatePage.ctorParameters = () => [
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_2__.CrudService },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService }
];
CreatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-create',
        template: _create_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_create_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CreatePage);



/***/ }),

/***/ 1164:
/*!****************************************************!*\
  !*** ./src/app/create/create.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2932:
/*!****************************************************!*\
  !*** ./src/app/create/create.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n<ion-content>\n  <!-- <ion-item>\n    <ion-label position=\"floating\">uuid usuario</ion-label>\n    <ion-input [(ngModel)]=\"uuidUser\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">nombre del festival</ion-label>\n    <ion-input [(ngModel)]=\"fesnameVal\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label position=\"floating\">id del festival</ion-label>\n    <ion-input [(ngModel)]=\"fesidVal\"></ion-input>\n  </ion-item> -->\n\n \n  <!-- <ion-button color=\"success\"\n  expand=\"block\" (click)=\"createUser()\">Add Festival</ion-button> -->\n    <h1> TUS FAVORITOS</h1>\n  <ion-item *ngFor=\"let festival of crud.FESTIVALS\">\n    <ion-label>\n      <h2><strong>{{festival.festival_name}}</strong></h2>\n      <p>{{festival.festival_desc}}</p>\n    </ion-label>\n  \n\n  <div class=\"item-note\" item-end>\n    <ion-icon color=\"primary\" name=\"eye-outline\" style=\"zoom:1.3\"\n    [routerLink]=\"['/festival', festival.festival_id]\"></ion-icon>\n\n    <ion-icon color=\"danger\" name=\"trash\" style=\"zoom:1.3\" (click)=\"remove(festival.user_uuid, festival.festival_id)\"></ion-icon>\n \n  </div>\n</ion-item>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_create_create_module_ts.js.map