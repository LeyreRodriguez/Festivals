"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_main-page_main-page_module_ts"],{

/***/ 6992:
/*!*******************************************************!*\
  !*** ./src/app/main-page/main-page-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPagePageRoutingModule": () => (/* binding */ MainPagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _main_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.page */ 6819);




const routes = [
    {
        path: '',
        component: _main_page_page__WEBPACK_IMPORTED_MODULE_0__.MainPagePage
    }
];
let MainPagePageRoutingModule = class MainPagePageRoutingModule {
};
MainPagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPagePageRoutingModule);



/***/ }),

/***/ 6698:
/*!***********************************************!*\
  !*** ./src/app/main-page/main-page.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPagePageModule": () => (/* binding */ MainPagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _main_page_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page-routing.module */ 6992);
/* harmony import */ var _main_page_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page.page */ 6819);
/* harmony import */ var _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.page */ 67);








let MainPagePageModule = class MainPagePageModule {
};
MainPagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _main_page_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPagePageRoutingModule
        ],
        declarations: [_main_page_page__WEBPACK_IMPORTED_MODULE_1__.MainPagePage, _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__.FooterPage]
    })
], MainPagePageModule);



/***/ }),

/***/ 6819:
/*!*********************************************!*\
  !*** ./src/app/main-page/main-page.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPagePage": () => (/* binding */ MainPagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _main_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.page.html?ngResource */ 7547);
/* harmony import */ var _main_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page.page.scss?ngResource */ 9181);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_main_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main-page.service */ 7963);





let MainPagePage = class MainPagePage {
    constructor(mainPageService) {
        this.mainPageService = mainPageService;
        this.listTiposFestivales = [];
    }
    ngOnInit() {
        this.obtenerCFestivales();
    }
    obtenerCFestivales() {
        this.mainPageService.obtenerFestivales().subscribe(doc => {
            this.listTiposFestivales = [];
            doc.forEach((element) => {
                this.listTiposFestivales.push(Object.assign({ id: element.payload.doc.id }, element.payload.doc.data()));
            });
            console.log(this.listTiposFestivales);
        });
    }
};
MainPagePage.ctorParameters = () => [
    { type: _services_main_page_service__WEBPACK_IMPORTED_MODULE_2__.MainPageService }
];
MainPagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-main-page',
        template: _main_page_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_main_page_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MainPagePage);



/***/ }),

/***/ 7963:
/*!***********************************************!*\
  !*** ./src/app/services/main-page.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageService": () => (/* binding */ MainPageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);



let MainPageService = class MainPageService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    obtenerFestivales() {
        return this.firestore.collection('tipoFestivales').snapshotChanges();
    }
};
MainPageService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
MainPageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], MainPageService);



/***/ }),

/***/ 9181:
/*!**********************************************************!*\
  !*** ./src/app/main-page/main-page.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXBhZ2UucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7547:
/*!**********************************************************!*\
  !*** ./src/app/main-page/main-page.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content >\n  <div class=\"wrapper\">\n      <!--Buscador-->\n  <nav class=\" d-flex justify-content-center \" style=\"max-height: 35px;\">\n    <select class=\"dropdown-toggle\" required>\n      <option value=\"1\" selected disabled>Tipo</option>\n      <optgroup>\n          <option *ngFor=\"let item of listTiposFestivales\" value=\"Música\">{{item.nameType}}</option>\n      </optgroup>\n    </select>\n    <select class=\"dropdown-toggle\" required>\n        <option value=\"1\" selected disabled>Ubicación</option>\n        <optgroup label=\"Pais\" placeholder=\"Ubicación\">\n            <option value=\"Francia\">Francia</option>\n            <option value=\"España\">España</option>\n            <option value=\"ReinoUnido\">Reino Unido</option>\n        </optgroup>\n        <optgroup label=\"Ciudad\">\n            <option value=\"LyonFrancia\">Lyon, Francia</option>\n            <option value=\"MadridEspaña\">Madrid, España</option>\n            <option value=\"YorkReinoUnido\">York, Reino Unido</option>\n        </optgroup>\n    </select>\n    <input type=\"date\" name=\"Fecha\">\n    <nav>\n      <a [routerLink]=\"['/festivales']\" ><img class=\"img-fluid\" style=\"max-height: 35px;\" src=\"assets/img/buscador.png\" /></a>\n    </nav>\n  </nav>\n  <!--Buscador-->\n  <!--Imagenes pasantes-->\n  <div id=\"carouselExampleSlidesOnly\" class=\"carousel slide\" data-bs-ride=\"carousel\">\n    <div class=\"carousel-inner\">\n      <div class=\"carousel-item active\">\n        <img src=\"assets/img/festival2.jpg\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/img/festival1.jpg\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n      <div class=\"carousel-item\">\n        <img src=\"assets/img/festival3.jpg\" class=\"d-block w-100\" alt=\"...\">\n      </div>\n    </div>\n  </div>\n<!--Imagenes pasantes-->\n\n\n\n  </div>\n\n  <div class=\"push\"></div>\n  <app-footer></app-footer>\n</ion-content>\n\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\" crossorigin=\"anonymous\">  \n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script>    \n";

/***/ })

}]);
//# sourceMappingURL=src_app_main-page_main-page_module_ts.js.map