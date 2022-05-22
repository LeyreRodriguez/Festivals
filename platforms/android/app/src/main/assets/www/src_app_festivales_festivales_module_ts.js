"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_festivales_festivales_module_ts"],{

/***/ 2347:
/*!*********************************************************!*\
  !*** ./src/app/festivales/festivales-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FestivalesPageRoutingModule": () => (/* binding */ FestivalesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _festivales_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./festivales.page */ 5555);




const routes = [
    {
        path: '',
        component: _festivales_page__WEBPACK_IMPORTED_MODULE_0__.FestivalesPage
    }
];
let FestivalesPageRoutingModule = class FestivalesPageRoutingModule {
};
FestivalesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FestivalesPageRoutingModule);



/***/ }),

/***/ 3749:
/*!*************************************************!*\
  !*** ./src/app/festivales/festivales.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FestivalesPageModule": () => (/* binding */ FestivalesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _festivales_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./festivales-routing.module */ 2347);
/* harmony import */ var _festivales_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./festivales.page */ 5555);
/* harmony import */ var _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.page */ 67);








let FestivalesPageModule = class FestivalesPageModule {
};
FestivalesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _festivales_routing_module__WEBPACK_IMPORTED_MODULE_0__.FestivalesPageRoutingModule
        ],
        declarations: [_festivales_page__WEBPACK_IMPORTED_MODULE_1__.FestivalesPage, _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__.FooterPage]
    })
], FestivalesPageModule);



/***/ }),

/***/ 5555:
/*!***********************************************!*\
  !*** ./src/app/festivales/festivales.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FestivalesPage": () => (/* binding */ FestivalesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _festivales_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./festivales.page.html?ngResource */ 8569);
/* harmony import */ var _festivales_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./festivales.page.scss?ngResource */ 6115);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_festivales_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/festivales.service */ 2825);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);






let FestivalesPage = class FestivalesPage {
    // id: number=5;
    constructor(festivalesService, router) {
        this.festivalesService = festivalesService;
        this.router = router;
        this.listFestivales = [];
        this.categorias = [];
    }
    ngOnInit() {
        this.obtenerFestivales();
    }
    obtenerCategorias() {
        this.categorias = [];
        for (var val of this.listFestivales) {
            for (var cat of val.categorias) {
                if (this.categorias.indexOf(cat) == -1) {
                    this.categorias.push(cat);
                }
            }
        }
    }
    obtenerFestivales() {
        this.festivalesService.obtenerFestivales().subscribe(doc => {
            this.listFestivales = [];
            doc.forEach((element) => {
                this.listFestivales.push(Object.assign({ id: element.payload.doc.id }, element.payload.doc.data()));
            });
            this.obtenerCategorias();
            console.log(this.listFestivales);
        });
    }
    changeRoute(id) {
        this.router.navigate(['/', 'festival', id]);
    }
};
FestivalesPage.ctorParameters = () => [
    { type: _services_festivales_service__WEBPACK_IMPORTED_MODULE_2__.FestivalesService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
FestivalesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-festivales',
        template: _festivales_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_festivales_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FestivalesPage);



/***/ }),

/***/ 2825:
/*!************************************************!*\
  !*** ./src/app/services/festivales.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FestivalesService": () => (/* binding */ FestivalesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);



let FestivalesService = class FestivalesService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    obtenerFestivales() {
        return this.firestore.collection('festivales').snapshotChanges();
    }
};
FestivalesService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
FestivalesService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FestivalesService);



/***/ }),

/***/ 6115:
/*!************************************************************!*\
  !*** ./src/app/festivales/festivales.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZXN0aXZhbGVzLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8569:
/*!************************************************************!*\
  !*** ./src/app/festivales/festivales.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "\n<!--Buscador-->\n<ion-content>\n  <nav class=\" d-flex justify-content-center \" style=\"max-height: 35px;\">\n    <select class=\"dropdown-toggle\" required>\n      <option value=\"1\" selected disabled>Tipo</option>\n      <optgroup>\n          <option value=\"Música\">Música</option>\n          <option value=\"Manga\">Manga</option>\n          <option value=\"Timple\">Timple</option>\n          <option value=\"Gastronomia\">Gastronomia</option>\n      </optgroup>\n    </select>\n    <select class=\"dropdown-toggle\" required>\n        <option value=\"1\" selected disabled>Ubicación</option>\n        <optgroup label=\"Pais\" placeholder=\"Ubicación\">\n            <option value=\"Francia\">Francia</option>\n            <option value=\"España\">España</option>\n            <option value=\"ReinoUnido\">Reino Unido</option>\n        </optgroup>\n        <optgroup label=\"Ciudad\">\n            <option value=\"LyonFrancia\">Lyon, Francia</option>\n            <option value=\"MadridEspaña\">Madrid, España</option>\n            <option value=\"YorkReinoUnido\">York, Reino Unido</option>\n        </optgroup>\n    </select>\n    <input type=\"date\" name=\"Fecha\">\n    <nav>\n      <a [routerLink]=\"['/festivales']\" ><img class=\"img-fluid\" style=\"max-height: 35px;\" src=\"assets/img/buscador.png\" /></a>\n    </nav>\n  </nav>\n  <!--Buscador-->\n  <!-- Botones de filtro\n  <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\">\n    <div *ngFor=\"let item of categorias\" class=\"col\">\n      <button type=\"button\" class=\"btn justify-content-center\">{{ item }}</button>\n    </div>\n  </div> -->\n  <!--Botones de filtro-->\n  <!--Festivales-->\n  <div class=\"row d-flex justify-content-center\">\n\n    <div *ngFor=\"let item of listFestivales\" class=\"col d-flex justify-content-center\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"{{ item.foto }}\" class=\"card-img-top\" alt=\"{{ item.nombre }}\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">{{ item.nombre }}</h5>\n          <p class=\"card-text\">{{ item.fecha }}</p>\n          <p class=\"card-text\">{{ item.informacion_corta }}</p>\n          <!--Arreglar, no funciona el link-->\n          <p>\n            <!-- <a data-toggle=\"collapse\" [routerLink]=\"['#collapseExample']\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n              Más información\n            </a> -->\n            <a data-bs-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n              Más información\n            </a>\n          </p>\n          <div class=\"collapse\" id=\"collapseExample\">\n            <div class=\"card card-body\">\n              <p class=\"card-text\">{{ item.informacion_larga }}</p>\n            </div>\n          </div>\n          <!-- <a [routerLink]=\"['/festival', item.id]\" class=\"btn btn-primary\">Comprar</a> -->\n          <a (click)=\"changeRoute(item.id)\" class=\"btn btn-primary\">Comprar</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--Festivales-->\n  <app-footer></app-footer>\n</ion-content>\n\n\n\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\" crossorigin=\"anonymous\">  \n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script>    \n";

/***/ })

}]);
//# sourceMappingURL=src_app_festivales_festivales_module_ts.js.map