"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_festival_festival_module_ts"],{

/***/ 6299:
/*!*****************************************************!*\
  !*** ./src/app/festival/festival-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FestivalPageRoutingModule": () => (/* binding */ FestivalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _festival_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./festival.page */ 712);




const routes = [
    {
        path: '',
        component: _festival_page__WEBPACK_IMPORTED_MODULE_0__.FestivalPage
    }
];
let FestivalPageRoutingModule = class FestivalPageRoutingModule {
};
FestivalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FestivalPageRoutingModule);



/***/ }),

/***/ 8980:
/*!*********************************************!*\
  !*** ./src/app/festival/festival.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FestivalPageModule": () => (/* binding */ FestivalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _festival_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./festival-routing.module */ 6299);
/* harmony import */ var _festival_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./festival.page */ 712);
/* harmony import */ var _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer/footer.page */ 67);








let FestivalPageModule = class FestivalPageModule {
};
FestivalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _festival_routing_module__WEBPACK_IMPORTED_MODULE_0__.FestivalPageRoutingModule
        ],
        declarations: [_festival_page__WEBPACK_IMPORTED_MODULE_1__.FestivalPage, _footer_footer_page__WEBPACK_IMPORTED_MODULE_2__.FooterPage]
    })
], FestivalPageModule);



/***/ }),

/***/ 712:
/*!*******************************************!*\
  !*** ./src/app/festival/festival.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FestivalPage": () => (/* binding */ FestivalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _festival_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./festival.page.html?ngResource */ 8139);
/* harmony import */ var _festival_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./festival.page.scss?ngResource */ 5502);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_festival_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/festival-service.service */ 2317);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/crud.service */ 3927);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ 7556);









let FestivalPage = class FestivalPage {
    constructor(festivalService, router, rutaActiva, fb, authy, crudd) {
        this.festivalService = festivalService;
        this.router = router;
        this.rutaActiva = rutaActiva;
        this.fb = fb;
        this.authy = authy;
        this.crudd = crudd;
        this.objFestival = [];
        this.listComentarios = [];
        this.listConcursos = [];
        this.listEmpresas = [];
        this.userLogged = false;
        this.isCompany = false;
        // this.authy=auth;
        this.crud = crudd;
        this.comentariosForm = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            comentario: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
        });
    }
    ngOnInit() {
        this.obtenerFestival();
        this.obtenerId();
        this.obtenerComentarios();
        this.obtenerConcursos();
        this.obtenerEmpresas();
    }
    obtenerId() {
        console.log("Entra en obtener Id");
        this.rutaActiva.params.subscribe((params) => {
            this.id = params['id'];
        });
    }
    obtenerFestival() {
        this.festivalService.obtenerFestival().subscribe(doc => {
            this.objFestival = [];
            doc.forEach((element) => {
                if (this.id == element.payload.doc.data().id) {
                    this.objFestival.push(Object.assign({ id: element.payload.doc.id }, element.payload.doc.data()));
                }
            });
        });
    }
    obtenerComentarios() {
        this.festivalService.obtenerComentarios().subscribe(doc => {
            this.listComentarios = [];
            doc.forEach((element) => {
                this.listComentarios.push(Object.assign({ id: element.payload.doc.id }, element.payload.doc.data()));
            });
        });
    }
    agregarComentarios() {
        const entrada = {
            userName: this.comentariosForm.value.userName,
            comentario: this.comentariosForm.value.comentario,
        };
        this.festivalService.agregarComentarios(entrada).then(() => {
            this.comentariosForm.reset();
        }, error => {
            this.toastr.error('Opps.. ocurrio un error', 'Error');
            console.log(error);
        });
    }
    obtenerConcursos() {
        this.festivalService.obtenerConcursos().subscribe(doc => {
            this.listConcursos = [];
            doc.forEach((element) => {
                this.listConcursos.push(Object.assign({ id: element.payload.doc.id }, element.payload.doc.data()));
            });
        });
    }
    obtenerEmpresas() {
        this.festivalService.obtenerEmpresas().subscribe(doc => {
            this.listEmpresas = [];
            doc.forEach((element) => {
                this.listEmpresas.push(Object.assign({ id: element.payload.doc.id }, element.payload.doc.data()));
            });
            console.log(this.listEmpresas);
        });
    }
    addToFavorites() {
        if (this.authy.checkIfCurrentUser()) {
            this.crud.addItem(this.authy.getUserUid(), this.id, this.objFestival[0].nombre, this.objFestival[0].informacion_corta);
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + this.objFestival[0].informacion_corta);
            alert("SE HA AÑADIDO A TUS FAVORITOS");
            return true;
        }
        else {
            alert("Para añadir a favoritos tienes que estar logueado primero");
            alert("SE HA AÑADIDO A TUS FAVORITOS");
            return false;
        }
    }
    deleteFromFavorites() {
        if (this.authy.checkIfCurrentUser()) {
            this.crud.deleteUser(this.authy.getUserUid(), this.id);
            console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA" + this.objFestival[0].nombre);
            alert("SE HA ELIMINADO DE TUS FAVORITOS");
            return true;
        }
        else {
            alert("Para añadir a eliminar de tus favoritos tienes que estar logueado primero");
            return false;
        }
    }
    checkLoggedUser() {
        this.authy.afAuth.onAuthStateChanged((user) => {
            if (user) {
                this.authy.readUser().then((data) => {
                    this.isCompany = data.get("company");
                });
                this.userLogged = true;
            }
            else {
                this.userLogged = false;
            }
        });
    }
    changeRoute() {
        if (this.userLogged) {
            this.router.navigate(['/', 'create']);
        }
    }
    compraRoute() {
        if (this.userLogged) {
            this.router.navigate(['/', 'entradas']);
        }
        else {
            this.router.navigate(['/', 'signupUsers']);
        }
    }
    ventaRoute() {
        if (this.userLogged) {
            this.router.navigate(['/', 'puestoVenta']);
        }
        else {
            this.router.navigate(['/', 'signupCompany']);
        }
    }
};
FestivalPage.ctorParameters = () => [
    { type: _services_festival_service_service__WEBPACK_IMPORTED_MODULE_2__.FestivalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService },
    { type: _services_crud_service__WEBPACK_IMPORTED_MODULE_3__.CrudService }
];
FestivalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-festival',
        template: _festival_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_festival_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FestivalPage);



/***/ }),

/***/ 2317:
/*!******************************************************!*\
  !*** ./src/app/services/festival-service.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FestivalService": () => (/* binding */ FestivalService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2393);



let FestivalService = class FestivalService {
    constructor(firestore) {
        this.firestore = firestore;
    }
    obtenerFestival() {
        return this.firestore.collection('festivales').snapshotChanges();
    }
    obtenerComentarios() {
        return this.firestore.collection('comentarios').snapshotChanges();
    }
    agregarComentarios(comentario) {
        return this.firestore.collection('comentarios').add(comentario);
    }
    obtenerConcursos() {
        return this.firestore.collection('concursosActivos').snapshotChanges();
    }
    obtenerEmpresas() {
        return this.firestore.collection('puestoVenta').snapshotChanges();
    }
};
FestivalService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore }
];
FestivalService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], FestivalService);



/***/ }),

/***/ 5502:
/*!********************************************************!*\
  !*** ./src/app/festival/festival.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "@import url(\"https://fonts.googleapis.com/css2?family=Asap:wght@500&family=Slabo+27px&display=swap\");\n.textoCajaExterior {\n  border-radius: 5%;\n  padding: 2%;\n  padding-top: 4%;\n  background-color: #86b4dd;\n  margin-top: 2%;\n}\n.textoCajaInterior {\n  border-radius: 5%;\n  padding: 2%;\n  background-color: aliceblue;\n  max-height: 75vw;\n  overflow-y: scroll;\n}\n.textoCajaInterior2 {\n  border-radius: 5%;\n  padding: 2%;\n  background-color: aliceblue;\n  max-height: 45vw;\n  overflow-y: scroll;\n}\n.margin {\n  height: 100%;\n}\n.recortaImagen {\n  height: 100vw;\n}\nh4, h5, h6 {\n  /* font-family: 'Asap', sans-serif; */\n  font-family: \"Slabo 27px\", serif;\n}\nh1, .h1 {\n  font-family: \"Rockwell\", Helvetica, Arial, sans-serif !important;\n}\n.colorPrecio {\n  background-color: #86b4dd;\n}\n.precioLetra {\n  height: 7vw;\n}\n.foto {\n  border-radius: 10%;\n}\n.listaEmpresa {\n  height: 45vw;\n  overflow-y: scroll;\n  background-color: aliceblue;\n}\n.listaEmpresa2 {\n  height: 30vw;\n  overflow-y: scroll;\n  background-color: aliceblue;\n}\n.botonVendedor {\n  height: 7vw;\n}\n/* .container{\n  width: 100%;\n  margin-left: 5%;\n  margin-right: 0%;\n} */\n.objetfit3 > img {\n  width: 100%;\n  height: 35vw;\n  object-fit: contain;\n  background-color: black;\n  border: 3px solid #423a86;\n  border-radius: 25px 25px 25px 25px;\n  margin: 0 auto;\n}\n.margen-top {\n  margin-top: 3%;\n}\n.padding {\n  padding-top: 3%;\n}\n.separacion {\n  margin: 3%;\n}\n.tabla {\n  height: 15vw;\n  padding: 15%;\n}\n/*lista de comentarios y concursos  */\n.lista-scroll {\n  max-height: 261px;\n  overflow-y: scroll;\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n.lista-scrollMovil {\n  height: 40vw;\n  overflow-y: scroll;\n  margin-top: 1%;\n  margin-bottom: 1%;\n}\n.marg {\n  margin-top: 5%;\n}\n/* enviar comentario */\n.text-area.comment {\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlc3RpdmFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvR0FBQTtBQUNSO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUNGO0FBRUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0Msa0JBQUE7QUFDSDtBQUNBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0FBRUg7QUFDQTtFQUNFLFlBQUE7QUFFRjtBQUFBO0VBQ0UsYUFBQTtBQUdGO0FBREE7RUFDRSxxQ0FBQTtFQUNBLGdDQUFBO0FBSUY7QUFGQTtFQUNFLGdFQUFBO0FBS0Y7QUFEQTtFQUNFLHlCQUFBO0FBSUY7QUFBQTtFQUNJLFdBQUE7QUFHSjtBQURBO0VBQ0Usa0JBQUE7QUFJRjtBQUZBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFLRjtBQUhBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUFNRjtBQUpBO0VBQ0ksV0FBQTtBQU9KO0FBSEE7Ozs7R0FBQTtBQU1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUFLSjtBQUZBO0VBQ0UsY0FBQTtBQUtGO0FBRkE7RUFDRSxlQUFBO0FBS0Y7QUFEQTtFQUNFLFVBQUE7QUFJRjtBQURBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFJRjtBQUZBLHFDQUFBO0FBQ0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBS0Y7QUFGQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUtGO0FBSEE7RUFDRSxjQUFBO0FBTUY7QUFKQSxzQkFBQTtBQUNFO0VBQ0UsWUFBQTtBQU9KIiwiZmlsZSI6ImZlc3RpdmFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFzYXA6d2dodEA1MDAmZmFtaWx5PVNsYWJvKzI3cHgmZGlzcGxheT1zd2FwJyk7XHJcbi50ZXh0b0NhamFFeHRlcmlvciB7XHJcbiAgYm9yZGVyLXJhZGl1czogNSU7XHJcbiAgcGFkZGluZzogMiU7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDE4MCwgMjIxKTtcclxuICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLnRleHRvQ2FqYUludGVyaW9yIHtcclxuICBib3JkZXItcmFkaXVzOiA1JTtcclxuICBwYWRkaW5nOiAyJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbiAgbWF4LWhlaWdodDogNzV2dztcclxuICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi50ZXh0b0NhamFJbnRlcmlvcjIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gIHBhZGRpbmc6IDIlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxuICBtYXgtaGVpZ2h0OiA0NXZ3O1xyXG4gICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuXHJcbi5tYXJnaW4ge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4ucmVjb3J0YUltYWdlbntcclxuICBoZWlnaHQ6IDEwMHZ3O1xyXG59XHJcbmg0LCBoNSwgaDZ7XHJcbiAgLyogZm9udC1mYW1pbHk6ICdBc2FwJywgc2Fucy1zZXJpZjsgKi9cclxuICBmb250LWZhbWlseTogJ1NsYWJvIDI3cHgnLCBzZXJpZjtcclxufVxyXG5oMSwgLmgxe1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvY2t3ZWxsXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmNvbG9yUHJlY2lve1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDEzNCwgMTgwLCAyMjEpO1xyXG5cclxufVxyXG5cclxuLnByZWNpb0xldHJhe1xyXG4gICAgaGVpZ2h0OiA3dnc7XHJcbn1cclxuLmZvdG97XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbi5saXN0YUVtcHJlc2F7XHJcbiAgaGVpZ2h0OiA0NXZ3O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuLmxpc3RhRW1wcmVzYTJ7XHJcbiAgaGVpZ2h0OiAzMHZ3O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuLmJvdG9uVmVuZGVkb3J7XHJcbiAgICBoZWlnaHQ6IDd2dztcclxufVxyXG5cclxuXHJcbi8qIC5jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogMCU7XHJcbn0gKi9cclxuXHJcbi5vYmpldGZpdDMgPiBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzV2dztcclxuICAgIG9iamVjdC1maXQ6Y29udGFpbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzQyM2E4NjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHggMjVweCAyNXB4IDI1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4ubWFyZ2VuLXRvcHtcclxuICBtYXJnaW4tdG9wOiAzJTtcclxufVxyXG5cclxuLnBhZGRpbmd7XHJcbiAgcGFkZGluZy10b3A6IDMlO1xyXG5cclxufVxyXG5cclxuLnNlcGFyYWNpb257XHJcbiAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLnRhYmxhe1xyXG4gIGhlaWdodDogMTV2dztcclxuICBwYWRkaW5nOiAxNSU7XHJcbn1cclxuLypsaXN0YSBkZSBjb21lbnRhcmlvcyB5IGNvbmN1cnNvcyAgKi9cclxuLmxpc3RhLXNjcm9sbHtcclxuICBtYXgtaGVpZ2h0OiAyNjFweDtcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbn1cclxuXHJcbi5saXN0YS1zY3JvbGxNb3ZpbHtcclxuICBoZWlnaHQ6IDQwdnc7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG59XHJcbi5tYXJne1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi8qIGVudmlhciBjb21lbnRhcmlvICovXHJcbiAgLnRleHQtYXJlYS5jb21tZW50e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuIl19 */";

/***/ }),

/***/ 8139:
/*!********************************************************!*\
  !*** ./src/app/festival/festival.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n\n<ion-content>\n  \n  <div class=\"container-fluid\">\n    <!-- movil y tablet -->\n    <!-- TITULO E ICONOS -->\n    <ion-fab horizontal=\"start\" vertical=\"top\" slot=\"fixed\">\n      <ion-fab-button color=\"secondary\">\n        <ion-icon md=\"heart-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"end\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"heart-outline\" (click)=\"addToFavorites()\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"heart-dislike-outline\" (click)=\"deleteFromFavorites()\"></ion-icon>\n        </ion-fab-button>\n      \n      </ion-fab-list>\n    </ion-fab>\n    <div class=\"d-block d-sm-none\">\n      <div class=\"row \" id=\"titulo+iconos\" >\n        <div *ngFor=\"let item of objFestival\" class=\"col-12 display-2 d-flex justify-content-center\" id=\"titulo\">\n          {{item.nombre}}\n        </div>\n        <div class=\"col-12 d-flex justify-content-center align-items-center flex-row\" id=\"iconos\" >\n          <div class=\"d-flex justify-content-center\">\n            <a [routerLink]=\"['/concurso']\" >\n              \n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" fill=\"currentColor\" class=\"bi bi-award\" viewBox=\"0 0 16 16\">\n                <path d=\"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z\"/>\n                <path d=\"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z\"/>\n              </svg>\n            </a>\n            <a href=\"#infoconcurs\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" fill=\"currentColor\" class=\"bi bi-patch-question\" viewBox=\"0 0 16 16\" >\n                <path d=\"M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z\"/>\n                <path d=\"m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z\"/>\n                <path d=\"M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z\"/>\n              </svg>\n            </a>\n              <a [routerLink]=\"['/entradas']\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" fill=\"currentColor\" class=\"bi bi-cart2\" viewBox=\"0 0 16 16\" >\n                <path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\"/>\n              </svg></a>\n\n              <a [routerLink]=\"['/create']\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" fill=\"currentColor\" class=\"bi bi-heart\" viewBox=\"0 0 16 16\">\n                <path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/>\n              </svg></a>\n            \n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- solo desktop y tablet -->\n    <ion-fab horizontal=\"start\" vertical=\"top\" slot=\"fixed\">\n      <ion-fab-button color=\"secondary\">\n        <ion-icon md=\"heart-outline\"></ion-icon>\n      </ion-fab-button>\n      <ion-fab-list side=\"end\">\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"heart-outline\" (click)=\"addToFavorites()\"></ion-icon>\n        </ion-fab-button>\n        <ion-fab-button color=\"light\">\n          <ion-icon name=\"heart-dislike-outline\" (click)=\"deleteFromFavorites()\"></ion-icon>\n        </ion-fab-button>\n      \n      </ion-fab-list>\n    </ion-fab>\n\n    <div class=\"d-none d-sm-block\">\n      <div class=\"row \" id=\"titulo+iconos\" >\n        <div *ngFor=\"let item of objFestival\" class=\"col-9 display-2 d-flex justify-content-center\" id=\"titulo\">\n          {{item.nombre}}\n        </div>\n        <div class=\"col-3 d-flex justify-content-end align-items-center flex-row\" id=\"iconos\" >\n          <div class=\"d-flex justify-content-center\">\n            <a [routerLink]=\"['/concurso']\" >\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" fill=\"currentColor\" class=\"bi bi-award\" viewBox=\"0 0 16 16\">\n                <path d=\"M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z\"/>\n                <path d=\"M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z\"/>\n              </svg>\n            </a>\n            <a href=\"#infoconcurs\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" fill=\"currentColor\" class=\"bi bi-patch-question\" viewBox=\"0 0 16 16\" >\n                <path d=\"M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z\"/>\n                <path d=\"m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z\"/>\n                <path d=\"M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z\"/>\n              </svg>\n            </a>\n              <a [routerLink]=\"['/entradas']\"> <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" fill=\"currentColor\" class=\"bi bi-cart2\" viewBox=\"0 0 16 16\" >\n                <path d=\"M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z\"/>\n              </svg></a>\n\n              <a [routerLink]=\"['/favourites']\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"34\" height=\"34\" fill=\"currentColor\" class=\"bi bi-heart\" viewBox=\"0 0 16 16\">\n                <path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/>\n              </svg></a>\n              \n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- movil y tablet -->\n    <!-- FOTO + PRECIO DE LAS ENTRADAS + EMPRESAS -->\n    <div class=\" d-block d-lg-none\">\n      <div class=\"row\" id=\"fotoYempresas\" >\n\n        <div class=\"col-12\">\n          <a class=\"ripple\" href=\"src\\app\\components\\festival\\festival.component.html\"> <!--  NO FUNCIONA EL LINK ESTE -->\n            <div *ngFor=\"let item of objFestival\" class=\" d-flex justify-content-center foto objetfit3\" style=\"margin-top: 3%; background-color: aliceblue;\" >\n              <!-- <img class=\"img-responsive img-fluid\" src=\"https://images.rove.me/w_1920,q_85/rxfutegj378a4177vtbp/vancouver-ubc-apple-festival.jpg\"  > -->\n              <img src=\"{{ item.foto }}\">\n            </div>\n          </a>\n        </div>\n        <div class=\"col-12 \" id=\"empresasyboton \" >\n            <div class=\"row d-flex flex-row justify-content-around align-items-center separacion\" id=\"precio entradas\">\n              <div class=\"col-6\">\n                <div class=\"card \">\n                  <div *ngFor=\"let item of objFestival\" class=\"card-body colorPrecio\">\n                    <h5 class=\"card-title\">Precio de las entradas:</h5>\n                    <p class=\"card-text text-end\">{{item.precio}}</p>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-6 d-flex justify-content-center align-items-end\" id=\"bototnVendedorcol\" >\n                    <button [routerLink]=\"['/venta']\" type=\"button \" class=\"btn btn-primary\">Apuntarse como vendedor</button>\n              </div>\n            </div>\n          <div class=\"row margen-top\" id=\"listaEmpresas\" >\n            <div class=\"col\" id=\"listaEmpresascol\" >\n              <h5>Empresas participantes</h5>\n              <ion-list class=\"infinite-scroll lista-scroll listaEmpresa2\">\n                <ion-card *ngFor=\"let item of listEmpresas\">\n                  <ion-card-header>\n                    <ion-card-title>{{item.inputBusinessName}}</ion-card-title>\n                  </ion-card-header>\n                  \n                </ion-card>\n              </ion-list>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- solo movil -->\n    <!-- INFORMACION CONCURSOS Y COMENTARIOS -->\n    <div class=\"d-block d-sm-none\">\n      <div class=\"row \" id=\"concursosYcomentarios\" >\n          <!-- INFORMACION -->\n          <div class=\"col-12\" id=\"infoconcurs\" >\n            <div *ngFor=\"let item of objFestival\" class=\"textoCajaExterior \">\n              <h4>Información</h4>\n              <div class=\"textoCajaInterior overflow-auto infinite-scroll\">\n                <p>\n                  {{item.informacion_larga}}\n                </p>\n\n              </div>\n            </div>\n          </div>\n          <!-- CONCURSOS -->\n          <div class=\"col-12\" id=\"concursoscol\" style=\" margin-top: 5%\">\n            <h4> Concursos activos</h4>\n\n            <ion-list class=\"infinite-scroll lista-scroll\">\n              <ion-card *ngFor=\"let item of listConcursos\">\n                <ion-card-header>\n                  <ion-card-subtitle>{{item.nombreConcurso}}</ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content>\n                  {{item.descripcionConcurso}}\n                </ion-card-content>\n              </ion-card>\n            </ion-list>\n          </div>\n            <!-- COMENTARIOS -->\n          <div class=\"col-12 \" id=\"comentarioscol\"  style=\" margin-top: 5%\">\n            <h4> Comentarios</h4>\n            <ion-list class=\"infinite-scroll lista-scroll\">\n              <ion-card *ngFor=\"let item of listComentarios\">\n                <ion-card-header>\n                  <ion-card-subtitle>@{{item.userName}}</ion-card-subtitle>\n                </ion-card-header>\n                <ion-card-content>\n                  {{item.comentario}}\n                </ion-card-content>\n              </ion-card>\n            </ion-list>\n            \n          </div>\n            <!-- ENVIAR COMENTARIO -->\n            <form [formGroup]=\"comentariosForm\" (ngSubmit)=\"agregarComentarios()\" class=\"col-12 d-flex justify-content-center flex-column\" id=\"enviarComentario\" style=\"height:100%; width: 100%; \">\n\n              <h5>Envía tu comentario</h5>\n              <a id=\"duda\"></a>\n              <div class=\"input-group\" style=\"margin-bottom: 1.5%;\">\n                  <span for=\"userName\" class=\"input-group-text\" id=\"basic-addon1\">@</span>\n                <input formControlName = \"userName\" type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-label=\"Username\"\n                  aria-describedby=\"basic-addon1\">\n              </div>\n              <div class=\"input-group\" style=\"margin-bottom: 2%;\">\n                  <span for=\"comentario\" class=\"input-group-text text-area.comment\" >Comment</span>\n                <textarea formControlName = \"comentario\" class=\"form-control\" aria-label=\"Comment\"></textarea>\n              </div>\n\n              <button [disabled]=\"comentariosForm.invalid\" type=\"submit\" class=\"btn btn-secondary\">Enviar</button>\n            </form>\n      </div>\n    </div>\n    <!-- solo desktop -->\n    <!-- FOTO + PRECIO DE LAS ENTRADAS + EMPRESAS -->\n    <div class=\"d-none d-lg-block\">\n      <div class=\"row\" id=\"fotoYempresas\">\n        <div class=\"col-8\" id=\"fotoFestival\" >\n          <div *ngFor=\"let item of objFestival\" class=\" d-flex justify-content-center foto\" style=\"height: 50vw; background-color: aliceblue;\" >\n            <!-- <img class=\"img-responsive img-fluid\" src=\"https://images.rove.me/w_1920,q_85/rxfutegj378a4177vtbp/vancouver-ubc-apple-festival.jpg\"  > -->\n            <img class=\" img-rounded img-responsive img-fluid \" src=\"{{ item.foto }}\">\n          </div>\n        </div>\n        <div class=\"col-4\" id=\"empresasyboton\" >\n            <div class=\"row separacion\">\n                <div class=\"col\">\n                  <div class=\"card \">\n                    <div *ngFor=\"let item of objFestival\" class=\"card-body colorPrecio\">\n                      <h5 class=\"card-title\">Precio de las entradas:</h5>\n                      <p class=\"card-text text-end\">{{item.precio}}</p>\n                    </div>\n                  </div>\n                </div>\n          </div>\n          <div class=\"row\" id=\"listaEmpresas\">\n            <div class=\"col\" id=\"listaEmpresascol\" >\n                <h5>Empresas participantes</h5>\n                <ion-list class=\"infinite-scroll lista-scroll listaEmpresa2\">\n                  <ion-card *ngFor=\"let item of listEmpresas\">\n                    <ion-card-header>\n                      <ion-card-title>{{item.inputBusinessName}}</ion-card-title>\n                    </ion-card-header>\n                    \n                  </ion-card>\n                </ion-list>\n            \n              \n            </div>\n          </div>\n          <div class=\"row\" id=\"bototnVendedor\" style=\"margin-bottom: 2%;\">\n            <div class=\"col botonVendedor d-flex justify-content-center align-items-center\" id=\"bototnVendedorcol\" >\n                <button [routerLink]=\"['/puestoDeVenta']\" type=\"button \" class=\"btn btn-primary\">Apuntarse como vendedor</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- tablet y desktop -->\n    <!-- INFORMACION CONCURSOS Y COMENTARIOS -->\n    <div class=\"d-none d-sm-block\">\n      <div class=\"row \" id=\"concursosYcomentarios\" >\n        <div class=\"col-7\" id=\"concursosYcomentariosCOL\" >\n          <!-- IZQUIERDA -->\n\n          <!-- CONCURSOS -->\n          <div class=\"row\" id=\"concursos\" >\n            <div class=\"col\" id=\"concursoscol\" style=\"margin: 2%;\">\n              <h4> Concursos activos</h4>\n              <ion-list class=\"infinite-scroll lista-scroll\">\n                <ion-card *ngFor=\"let item of listConcursos\">\n                  <ion-card-header>\n                    <ion-card-subtitle>{{item.nombreConcurso}}</ion-card-subtitle>\n                  </ion-card-header>\n                  <ion-card-content>\n                    {{item.descripcionConcurso}}\n                  </ion-card-content>\n                </ion-card>\n              </ion-list>\n            </div>\n          </div>\n          <!-- COMENTARIOS -->\n          <div class=\"row\" id=\"comentarios\" >\n            <div class=\"col\" id=\"comentarioscol\" style=\"margin: 2%;\">\n              <h4> Comentarios</h4>\n              <ion-list class=\"infinite-scroll lista-scroll\">\n                <ion-card *ngFor=\"let item of listComentarios\">\n                  <ion-card-header>\n                    <ion-card-subtitle>@{{item.userName}}</ion-card-subtitle>\n                  </ion-card-header>\n                  <ion-card-content>\n                    {{item.comentario}}\n                  </ion-card-content>\n                </ion-card>\n              </ion-list>\n            \n            </div>\n          </div>\n        </div> <!-- concursosYcomentariosCOL -->\n        <!-- DERECHA -->\n        <div class=\"col-5\" id=\"infoconcurs\" >\n\n          <div class=\"row\" id=\"informacion\">\n            <div class=\"col\" id=\"informacion\">\n              <div class=\"textoCajaExterior \" style=\"margin-top: 2%;\">\n                <h4>Información</h4>\n                <div *ngFor=\"let item of objFestival\" class=\"textoCajaInterior2 overflow-auto infinite-scroll\">\n                  <p>\n                    {{item.informacion_larga}}\n                  </p>\n                </div>\n              </div>\n            </div>\n          </div>\n          <form [formGroup]=\"comentariosForm\" (ngSubmit)=\"agregarComentarios()\" class=\"row\">\n            <div class=\"column\" id=\"botonComprar\" style=\"height:100%; width: 100%;\">\n              <div class=\"d-flex justify-content-center flex-column\" style=\"margin: 2%; \">\n                <h5>Envía tu comentario</h5>\n                <a id=\"duda\"></a>\n                <div class=\"input-group\" style=\"margin-bottom: 1.5%;\">\n                  <div class=\"input-group-prepend\">\n                    <span for=\"userName\" class=\"input-group-text\" id=\"basic-addon1\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" formControlName = \"userName\" placeholder=\"Username\" aria-label=\"Username\"\n                    aria-describedby=\"basic-addon1\">\n                </div>\n                <div class=\"input-group \" style=\"margin-bottom: 2%;\">\n                  <div class=\"input-group-prepend\">\n                    <span for=\"comentario\" class=\"input-group-text\" style=\"height: 100%;\">Comment</span>\n                  </div>\n                  <textarea class=\"form-control\" formControlName = \"comentario\" aria-label=\"Comment\"></textarea>\n                </div>\n                <button [disabled]=\"comentariosForm.invalid\" type=\"submit \" class=\"btn btn-secondary\">Enviar</button>\n              </div>\n              <!-- div que tiene los dos inputfields y el boton -->\n            </div>\n          </form>\n        </div>\n      </div> <!-- FIN DIV DE COMENTAIO CONCURSO INFO  id=\"concursosYcomentarios\"-->\n    </div>\n  </div>\n  \n</ion-content>\n\n<app-footer></app-footer>\n\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3\" crossorigin=\"anonymous\">  \n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p\" crossorigin=\"anonymous\"></script>    \n\n\n";

/***/ })

}]);
//# sourceMappingURL=src_app_festival_festival_module_ts.js.map