(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".layout{\r\n\tfloat:left;\r\n}\r\n#t-side {\r\n  height:8.5vh;\r\n  background:lightgoldenrodyellow;\r\n}\r\n#l-side {\r\n\twidth:15%;\r\n\theight: 88vh;\r\n\tbackground: rgb(196, 233, 248);\r\n\t\r\n}\r\n#m-side {\r\n\twidth:64%;\r\n\theight: 88vh;\r\n\tbackground: rgb(245, 228, 243);\r\n}\r\n#r-side {\r\n\twidth:20%;\r\n\theight: 88vh;\r\n\tbackground: rgb(232, 247, 238);\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxXQUFXO0NBQ1g7QUFDRDtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7Q0FDakM7QUFDRDtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsK0JBQStCOztDQUUvQjtBQUNEO0NBQ0MsVUFBVTtDQUNWLGFBQWE7Q0FDYiwrQkFBK0I7Q0FDL0I7QUFDRDtDQUNDLFVBQVU7Q0FDVixhQUFhO0NBQ2IsK0JBQStCO0NBQy9CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0e1xyXG5cdGZsb2F0OmxlZnQ7XHJcbn1cclxuI3Qtc2lkZSB7XHJcbiAgaGVpZ2h0OjguNXZoO1xyXG4gIGJhY2tncm91bmQ6bGlnaHRnb2xkZW5yb2R5ZWxsb3c7XHJcbn1cclxuI2wtc2lkZSB7XHJcblx0d2lkdGg6MTUlO1xyXG5cdGhlaWdodDogODh2aDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMTk2LCAyMzMsIDI0OCk7XHJcblx0XHJcbn1cclxuI20tc2lkZSB7XHJcblx0d2lkdGg6NjQlO1xyXG5cdGhlaWdodDogODh2aDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyMjgsIDI0Myk7XHJcbn1cclxuI3Itc2lkZSB7XHJcblx0d2lkdGg6MjAlO1xyXG5cdGhlaWdodDogODh2aDtcclxuXHRiYWNrZ3JvdW5kOiByZ2IoMjMyLCAyNDcsIDIzOCk7XHRcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"t-side\">\n  <app-pageheader></app-pageheader>\n</div>\n<div id=\"l-side\" class=\"layout\"></div>\n<div id=\"m-side\" class=\"layout\">\n    <router-outlet></router-outlet>\n    <!-- <app-maincontent></app-maincontent> -->\n</div>\n<div id=\"r-side\" class=\"layout\">\n  <app-sidenavbar></app-sidenavbar>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'My Spring Angular Learning App';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_print__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-print */ "./node_modules/ngx-print/fesm5/ngx-print.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidenavbar_sidenavbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sidenavbar/sidenavbar.component */ "./src/app/sidenavbar/sidenavbar.component.ts");
/* harmony import */ var _maincontent_maincontent_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./maincontent/maincontent.component */ "./src/app/maincontent/maincontent.component.ts");
/* harmony import */ var _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pageheader/pageheader.component */ "./src/app/pageheader/pageheader.component.ts");
/* harmony import */ var _transactionhistory_transactionhistory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./transactionhistory/transactionhistory.component */ "./src/app/transactionhistory/transactionhistory.component.ts");
/* harmony import */ var _createtransaccomp_createtransaccomp_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./createtransaccomp/createtransaccomp.component */ "./src/app/createtransaccomp/createtransaccomp.component.ts");
/* harmony import */ var _newinventoryentry_newinventoryentry_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./newinventoryentry/newinventoryentry.component */ "./src/app/newinventoryentry/newinventoryentry.component.ts");
/* harmony import */ var _service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./service/urlinfoservice.service */ "./src/app/service/urlinfoservice.service.ts");
/* harmony import */ var _service_httpservice_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/httpservice.service */ "./src/app/service/httpservice.service.ts");
/* harmony import */ var _maincontent_childcomp_childcomp_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./maincontent/childcomp/childcomp.component */ "./src/app/maincontent/childcomp/childcomp.component.ts");
/* harmony import */ var _maincontent_my_custom_pipe_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./maincontent/my-custom-pipe.pipe */ "./src/app/maincontent/my-custom-pipe.pipe.ts");
/* harmony import */ var _item_entry_inventory_item_entry_inventory_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./item-entry-inventory/item-entry-inventory.component */ "./src/app/item-entry-inventory/item-entry-inventory.component.ts");




 // used for [(ngModel)] two way binding


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _sidenavbar_sidenavbar_component__WEBPACK_IMPORTED_MODULE_10__["SidenavbarComponent"],
                _maincontent_maincontent_component__WEBPACK_IMPORTED_MODULE_11__["MaincontentComponent"],
                _pageheader_pageheader_component__WEBPACK_IMPORTED_MODULE_12__["PageheaderComponent"],
                _transactionhistory_transactionhistory_component__WEBPACK_IMPORTED_MODULE_13__["TransactionhistoryComponent"],
                _createtransaccomp_createtransaccomp_component__WEBPACK_IMPORTED_MODULE_14__["CreatetransaccompComponent"],
                _newinventoryentry_newinventoryentry_component__WEBPACK_IMPORTED_MODULE_15__["NewInventoryEntryComponent"],
                _maincontent_childcomp_childcomp_component__WEBPACK_IMPORTED_MODULE_18__["ChildcompComponent"],
                _maincontent_my_custom_pipe_pipe__WEBPACK_IMPORTED_MODULE_19__["MyCustomPipePipe"],
                _item_entry_inventory_item_entry_inventory_component__WEBPACK_IMPORTED_MODULE_20__["ItemEntryInventoryComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                ngx_print__WEBPACK_IMPORTED_MODULE_8__["NgxPrintModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                // AppRoutingModule
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([
                    {
                        path: 'createtransaction',
                        component: _createtransaccomp_createtransaccomp_component__WEBPACK_IMPORTED_MODULE_14__["CreatetransaccompComponent"]
                    }, {
                        path: 'transactionhistory',
                        component: _transactionhistory_transactionhistory_component__WEBPACK_IMPORTED_MODULE_13__["TransactionhistoryComponent"]
                    }, {
                        path: 'createinventory',
                        component: _newinventoryentry_newinventoryentry_component__WEBPACK_IMPORTED_MODULE_15__["NewInventoryEntryComponent"]
                    }, {
                        path: 'itementryininventory',
                        component: _item_entry_inventory_item_entry_inventory_component__WEBPACK_IMPORTED_MODULE_20__["ItemEntryInventoryComponent"]
                    }, {
                        path: 'learningcomp',
                        component: _maincontent_maincontent_component__WEBPACK_IMPORTED_MODULE_11__["MaincontentComponent"]
                    }
                ])
            ],
            providers: [_service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_16__["UrlinfoserviceService"], _service_httpservice_service__WEBPACK_IMPORTED_MODULE_17__["HttpserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/createtransaccomp/createtransaccomp.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/createtransaccomp/createtransaccomp.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#customerIdDiv{\r\n  /*margin-left: -8%; */\r\n  margin-top: -2%;\r\n}\r\n#customerIdDiv > .input{\r\n  width: 200px;\r\n}\r\n#itemInfoDiv {\r\n  margin-top: -1%;\r\n}\r\n.example-form {\r\n     width: 20%;\r\n   }\r\n.example-full-width {\r\n     width: 100%;\r\n     margin-top: 20px;\r\n     margin-left: 20px;\r\n}\r\n.mat-form-field-flex {\r\n     width: 100%;\r\n}\r\n.divpos {\r\n     float:left;\r\n     margin-bottom: 20px;\r\n}\r\n.wrapper {\r\n  border-radius: 2px;\r\n  box-sizing: border-box;\r\n  width: 200px;\r\n}\r\n.input {\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid grey;\r\n  color: #555;\r\n  box-sizing: border-box;\r\n  left: 20%;\r\n  position: relative;\r\n  width: 145px;\r\n  margin-top: 37px;\r\n\r\n}\r\n.input:focus {\r\n  outline: none;  \r\n  border-bottom: 2px solid BLUE;\r\n}\r\n.underline {\r\n  background-color: dodgerblue;\r\n  display: inline-block;\r\n  height: 2px;\r\n  left: 50px;\r\n  margin-top: -4px;\r\n  position: absolute;\r\n  top: 185px;\r\n  transform: scale(0, 1);\r\n  transition: all 0.5s linear;\r\n  width: 202px;\r\n}\r\n#newButton {\r\nbackground:lightgray;\r\nwidth:100px;\r\nmargin-top: 30px;\r\nmargin-left: 25%;\r\n}\r\n#tablecontent {\r\n    background: lightgray;\r\n}\r\n.my-custom-scrollbar {\r\n    max-height: 400px;\r\n    overflow-y: auto;\r\n    clear:both;\r\n}\r\n#printCostDiv{\r\n  margin-left: 73%;\r\n  margin-top: 1.5%;\r\n\r\n}\r\n.printTotalCost{\r\n    float: left;\r\n}\r\n#totalSumLavel{\r\n  margin-top: 10px;\r\n  font-size: 100%;\r\n}\r\n#printdiv{\r\n  width: 100px;\r\n  margin-left: 8px;\r\n  background: lightgray;\r\n}\r\n#tfoot{\r\n  display:none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRldHJhbnNhY2NvbXAvY3JlYXRldHJhbnNhY2NvbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7S0FDSyxXQUFXO0lBQ1o7QUFFSjtLQUNLLFlBQVk7S0FDWixpQkFBaUI7S0FDakIsa0JBQWtCO0NBQ3RCO0FBQ0Q7S0FDSyxZQUFZO0NBQ2hCO0FBQ0Q7S0FDSyxXQUFXO0tBQ1gsb0JBQW9CO0NBQ3hCO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGFBQWE7Q0FDZDtBQUVEO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixpQkFBaUI7O0NBRWxCO0FBQ0Q7RUFDRSxjQUFjO0VBQ2QsOEJBQThCO0NBQy9CO0FBQ0Q7RUFDRSw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixXQUFXO0VBRVgsdUJBQXVCO0VBRXZCLDRCQUE0QjtFQUM1QixhQUFhO0NBQ2Q7QUFDRDtBQUNBLHFCQUFxQjtBQUNyQixZQUFZO0FBQ1osaUJBQWlCO0FBQ2pCLGlCQUFpQjtDQUNoQjtBQUNEO0lBQ0ksc0JBQXNCO0NBQ3pCO0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7Q0FDZDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjs7Q0FFbEI7QUFDRDtJQUNJLFlBQVk7Q0FDZjtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLGFBQWE7Q0FDZCIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZXRyYW5zYWNjb21wL2NyZWF0ZXRyYW5zYWNjb21wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY3VzdG9tZXJJZERpdntcclxuICAvKm1hcmdpbi1sZWZ0OiAtOCU7ICovXHJcbiAgbWFyZ2luLXRvcDogLTIlO1xyXG59XHJcbiNjdXN0b21lcklkRGl2ID4gLmlucHV0e1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4jaXRlbUluZm9EaXYge1xyXG4gIG1hcmdpbi10b3A6IC0xJTtcclxufVxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICAgICB3aWR0aDogMjAlO1xyXG4gICB9XHJcbiAgIFxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGl2cG9zIHtcclxuICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLndyYXBwZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4gICBcclxuLmlucHV0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgY29sb3I6ICM1NTU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBsZWZ0OiAyMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxNDVweDtcclxuICBtYXJnaW4tdG9wOiAzN3B4O1xyXG5cclxufSAgXHJcbi5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTsgIFxyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBCTFVFO1xyXG59XHJcbi51bmRlcmxpbmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTRweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxODVweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XHJcbiAgd2lkdGg6IDIwMnB4O1xyXG59XHJcbiNuZXdCdXR0b24ge1xyXG5iYWNrZ3JvdW5kOmxpZ2h0Z3JheTtcclxud2lkdGg6MTAwcHg7XHJcbm1hcmdpbi10b3A6IDMwcHg7XHJcbm1hcmdpbi1sZWZ0OiAyNSU7XHJcbn1cclxuI3RhYmxlY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbn1cclxuLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgY2xlYXI6Ym90aDtcclxufVxyXG4jcHJpbnRDb3N0RGl2e1xyXG4gIG1hcmdpbi1sZWZ0OiA3MyU7XHJcbiAgbWFyZ2luLXRvcDogMS41JTtcclxuXHJcbn1cclxuLnByaW50VG90YWxDb3N0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuI3RvdGFsU3VtTGF2ZWx7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuI3ByaW50ZGl2e1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxufVxyXG4jdGZvb3R7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/createtransaccomp/createtransaccomp.component.html":
/*!********************************************************************!*\
  !*** ./src/app/createtransaccomp/createtransaccomp.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" id =\"customerIdDiv\">\n  <input class=\"input\" placeholder=\"Enter Customer Id\" type=\"text\" id=\"customerID\" [(ngModel)]=\"customerID\"/>\n  <span class=\"underline\"></span>\n</div>\n<div id=\"itemInfoDiv\">\n    <!-- <form class=\"example-form divpos\">\n      <mat-form-field class=\"example-full-width\">\n        <input value='' id=\"nameinput\"type=\"text\" placeholder=\"Enter item name\" aria-label=\"Assignee\"  matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (ngModelChange)=\"onItemChange()\"/>\n        <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n          <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n            {{option.name}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>  -->  \n  <div class=\"wrapper divpos\" id =\"itemdiv\">\n    <input class=\"input\" placeholder=\"Enter Item barcode\" type=\"text\" id=\"barcode\" [(ngModel)]=\"barcode\"  (keydown)=\"onEnterBarcode($event)\" />\n    <span class=\"underline\"></span>\n  </div>\n  <div class=\"wrapper divpos\" id =\"quantitydiv\">\n    <input class=\"input\" placeholder=\"Enter quantity\" type=\"number\" id=\"quantity\" [(ngModel)]=\"quantity\"  [disabled]=\"disableFlag\" (blur)=\"onQuantityChange()\"/>\n    <span class=\"underline\"></span>\n  </div>\n  <div class=\"wrapper divpos\" id =\"rate\">\n    <input class=\"input\" placeholder=\"Rate of Item\" type=\"number\" id=\"rate\" [(ngModel)]=\"rate\" [disabled]=\"disableFlag\" (blur)=\"onEnterRate()\"/>\n    <span class=\"underline\"></span>\n  </div>\n\n  <!-- <div class=\"wrapper divpos\" id =\"cost\">\n    <input class=\"input\" placeholder=\"Items cost\" type=\"text\" id=\"cost\" [(ngModel)]=\"cost\" [disabled]=\"true\"/>\n    <span class=\"underline\"></span>\n  </div> -->\n\n  <button type=\"button\" class=\"btn btn-primary divpos\" id=\"newButton\" (click)=\"clearItem()\">New</button>  \n</div>\n<div  id=\"print-section\">\n<div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n    <table class=\"table table-bordered table-striped mb-0\" id=\"tablecontent\">\n      <thead>\n        <tr>\n          <th *ngFor=\"let head of headerList\" scope=\"col\">{{head}} </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr  *ngFor=\"let item of itemList\">\n                <th scope=\"row\">{{item.id}}</th>\n                <td>{{item.name}}</td>\n                <td>{{item.quantity}}</td>\n                <td>{{item.rate}}</td>\n                <td>{{item.cost}}</td>\n                <td (click)=\"removeItem(item.id)\">{{item.remove}}</td>\n        </tr>\n      </tbody>\n      <tfoot id=\"tfoot\"> \n                <tr> \n                    <td align=\"right\" colspan=\"5\">Total Cost: {{totalSum}}</td> \n                </tr> \n      </tfoot> \n    </table>\n</div>\n</div>\n<div id=\"printCostDiv\">\n    <div id=\"totalSumDiv\" class=\"printTotalCost\" *ngIf=\"totalSum > 0\">\n      <span class=\"badge\" id = \"totalSumLavel\">Total Cost: {{totalSum}}</span>\n    </div>\n    <div  class=\"printTotalCost\" *ngIf=\"totalSum > 0\">\n      <!-- <button printSectionId=\"print-section\" printTitle=\"Invoice Details\"   ngxPrint id=\"printdiv\" type=\"button\" class=\"btn btn-primary\" (click)=\"printItem()\">Print</button> --> \n      <!--<button printSectionId=\"print-section\" printTitle=\"Invoice Details\"  id=\"printdiv\" type=\"button\" class=\"btn btn-primary\" (click)=\"printItem()\">New</button>  -->\n      <button class=\"btn btn-primary\" id=\"printdiv\" type=\"button\" onclick=\"printJS({printable: itemToPrint\n    , properties: ['id','name', 'quantity', 'rate','cost'], type: 'json', header:docheading})\" (click)=\"printItem()\">\n        Print\n     </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/createtransaccomp/createtransaccomp.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/createtransaccomp/createtransaccomp.component.ts ***!
  \******************************************************************/
/*! exports provided: CreatetransaccompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatetransaccompComponent", function() { return CreatetransaccompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/urlinfoservice.service */ "./src/app/service/urlinfoservice.service.ts");
/* harmony import */ var _service_httpservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/httpservice.service */ "./src/app/service/httpservice.service.ts");
/* harmony import */ var _service_shared_info_container_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/shared-info-container.service */ "./src/app/service/shared-info-container.service.ts");
/* harmony import */ var _service_common_data_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/common-data-container.service */ "./src/app/service/common-data-container.service.ts");






var CreatetransaccompComponent = /** @class */ (function () {
    function CreatetransaccompComponent(urlinfoservice, httpservice, sharedInfo, dataContainer) {
        this.urlinfoservice = urlinfoservice;
        this.httpservice = httpservice;
        this.sharedInfo = sharedInfo;
        this.dataContainer = dataContainer;
        this.itemBarKeyMapItem = new Map(); // to keep track of added item in table
        this.disableFlag = true;
        this.alreadyPrintDone = false;
        this.id = 0;
        this.itemList = [];
        this.totalSum = 0;
        this.headerList = ['Sr.', 'Name', 'Quantity', 'Rate', 'Cost', 'Action'];
    }
    CreatetransaccompComponent.prototype.ngAfterViewInit = function () {
        document.getElementById("customerID").focus();
    };
    CreatetransaccompComponent.prototype.ngOnInit = function () {
        console.log("ngoneint get called");
        clearRecord();
        if (this.dataContainer.getMappedObjectIdToItem()) {
            console.log("itemList already fetched from backend");
            return;
        }
        this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL, this);
    };
    CreatetransaccompComponent.prototype.callBackOnApi = function (items, isPostApiCall) {
        if (isPostApiCall) {
            console.log("call back method after post api call");
            return;
        }
        else {
            console.log("items stored in the inventory:", items);
            var itemMapToId_1 = new Map();
            items.forEach(function (el) {
                itemMapToId_1.set(el.barcode, el);
            });
            this.dataContainer.setMappedObjectIdToItem(itemMapToId_1);
        }
    };
    CreatetransaccompComponent.prototype.onEnterBarcode = function (event) {
        if (event.key === "Enter") {
            if ((this.barcode == undefined) && (this.quantity == undefined)) {
                //document.getElementById("barcode").focus();
                return;
            }
            this.quantity = 1;
            var item = this.dataContainer.getItem(this.barcode);
            if (item == null) {
                this.disableFlag = false;
                document.getElementById("quantity").focus();
                return;
            }
            else {
                this.disableFlag = true;
            }
            var addedItem = this.itemBarKeyMapItem.get(this.barcode);
            if (addedItem) {
                addedItem.quantity += this.quantity; // how many item of same kind getting entered
                addedItem.cost = addedItem.quantity * addedItem.rate;
                this.totalSum += this.quantity * addedItem.rate; // only raise with amount getting added in this call;
                updateRecord(addedItem.id, addedItem.quantity, addedItem.cost, this.totalSum);
                this.barcode = undefined;
                document.getElementById("barcode").focus();
            }
            else {
                this.id = this.id + 1;
                var cost = this.quantity * item.rate;
                var itemTemp = { id: this.id, name: item.name, quantity: this.quantity, rate: item.rate, cost: cost, remove: 'Remove', barcode: this.barcode };
                this.itemList.push(itemTemp);
                this.itemBarKeyMapItem.set(this.barcode, itemTemp);
                this.totalSum = this.totalSum + cost;
                printfunc({ id: this.id, name: item.name, quantity: this.quantity, rate: item.rate, cost: cost }, this.getDocHeader(), this.getDocFooter());
                this.barcode = undefined;
                this.quantity = undefined;
                this.rate = undefined;
                document.getElementById("barcode").focus();
            }
        }
    };
    CreatetransaccompComponent.prototype.onQuantityChange = function () {
        document.getElementById("rate").focus();
    };
    CreatetransaccompComponent.prototype.onEnterRate = function () {
        if (this.rate == undefined) {
            return;
        }
        this.id = this.id + 1;
        var cost = this.quantity * this.rate;
        var itemTemp = { id: this.id, name: this.barcode, quantity: this.quantity, rate: this.rate, cost: cost, remove: 'Remove' };
        this.itemList.push(itemTemp);
        this.totalSum = this.totalSum + cost;
        printfunc({ id: this.id, name: this.barcode, quantity: this.quantity, rate: this.rate, cost: cost }, this.getDocHeader(), this.getDocFooter());
        this.barcode = undefined;
        this.quantity = undefined;
        this.rate = undefined;
        this.disableFlag = true;
        document.getElementById("barcode").focus();
    };
    CreatetransaccompComponent.prototype.clearItem = function () {
        this.itemList = [];
        this.customerID = undefined;
        this.totalSum = 0;
        this.id = 0;
        this.itemBarKeyMapItem.clear();
        clearRecord();
        this.alreadyPrintDone = false; // as starting new transaction so making print function not done. must click new to start new transaction
        document.getElementById("customerID").focus();
    };
    CreatetransaccompComponent.prototype.getDocHeader = function () {
        var docheading;
        if (this.customerID != null) {
            docheading = "Invoice of Customer: " + this.customerID;
        }
        else {
            docheading = "Invoice of Customer";
        }
        return docheading;
    };
    CreatetransaccompComponent.prototype.getDocFooter = function () {
        return [{ id: '-', name: '-', quantity: '-', rate: '-', cost: '-' }, { id: '', name: 'Total Cost', quantity: '', rate: '', cost: this.totalSum }];
    };
    CreatetransaccompComponent.prototype.removeItem = function (id) {
        var tempItem = [];
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.id == id) {
                this.totalSum = this.totalSum - el.cost;
                var docfooter = [{ id: '-', name: '-', quantity: '-', rate: '-', cost: '-' }, { id: '', name: 'Total Cost', quantity: '', rate: '', cost: this.totalSum }];
                removeItemFromPrintList(id, this.getDocFooter());
                this.itemBarKeyMapItem.delete(el.barcode);
            }
            else {
                tempItem.push(el);
            }
            if (el.id > id) {
                el.id = el.id - 1;
            }
        }
        this.itemList = tempItem;
        this.id = this.id - 1;
        tempItem = [];
        document.getElementById("barcode").focus();
    };
    CreatetransaccompComponent.prototype.printItem = function () {
        if (this.alreadyPrintDone) {
            console.log("already this transaction has been saved so not saving it.");
            return;
        }
        var itemList = this.getPayload();
        var transactionSummary = { customerId: this.customerID, customerShoppingList: itemList, totalShoppingAmount: this.totalSum };
        console.log("request payload:");
        console.log(transactionSummary);
        var response = this.httpservice.postApiCall(this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_SAVE_URL, transactionSummary, this);
        this.alreadyPrintDone = true; // as because this transaction saved. now any more print click will not save again and again.
        document.getElementById("customerID").focus();
    };
    CreatetransaccompComponent.prototype.getPayload = function () {
        var itemListStr = JSON.stringify(this.itemList);
        var itemList = JSON.parse(itemListStr);
        console.log("itemList after converting to str:", itemList);
        itemList.forEach(function (item) {
            delete item.id;
            delete item.remove;
        });
        return itemList;
    };
    CreatetransaccompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-createtransaccomp',
            template: __webpack_require__(/*! ./createtransaccomp.component.html */ "./src/app/createtransaccomp/createtransaccomp.component.html"),
            styles: [__webpack_require__(/*! ./createtransaccomp.component.css */ "./src/app/createtransaccomp/createtransaccomp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_2__["UrlinfoserviceService"], _service_httpservice_service__WEBPACK_IMPORTED_MODULE_3__["HttpserviceService"],
            _service_shared_info_container_service__WEBPACK_IMPORTED_MODULE_4__["SharedInfoContainerService"], _service_common_data_container_service__WEBPACK_IMPORTED_MODULE_5__["CommonDataContainerService"]])
    ], CreatetransaccompComponent);
    return CreatetransaccompComponent;
}());



/***/ }),

/***/ "./src/app/item-entry-inventory/item-entry-inventory.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/item-entry-inventory/item-entry-inventory.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pageHeading{\r\n  margin-left:40%;\r\n  margin-top:2%;\r\n}\r\n.example-form {\r\n     width: 20%;\r\n   }\r\n.example-full-width {\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    margin-left: 150px;\r\n}\r\n.mat-form-field-flex {\r\n    width: 100%;\r\n }\r\n.divpos {\r\n     float:left;\r\n     margin-bottom: 20px;\r\n }\r\n.wrapper {\r\n     border-radius: 2px;\r\n     box-sizing: border-box;\r\n     width: 200px;\r\n   }\r\n.input {\r\n    background-color: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid grey;\r\n    color: #555;\r\n    box-sizing: border-box;\r\n    left: 30%;\r\n    position: relative;\r\n    width: 200px;\r\n}\r\n#itembarcode:focus {\r\n    outline: none;  \r\n    border-bottom: 2px solid BLUE;\r\n}\r\n.underline {\r\n     background-color: dodgerblue;\r\n     display: inline-block;\r\n     height: 2px;\r\n     left: 50px;\r\n     margin-top: -4px;\r\n     position: absolute;\r\n     top: 185px;\r\n     transform: scale(0, 1);\r\n     transition: all 0.5s linear;\r\n     width: 202px;\r\n   }\r\n#tablecontent {\r\n     background: lightgray;\r\n }\r\n.my-custom-scrollbar {\r\n     max-height: 400px;\r\n     overflow-y: auto;\r\n     clear:both;\r\n }\r\n#totalSumDiv {\r\n   margin-left: 78.5%;\r\n   margin-top: 15px;\r\n }\r\n#saveButton{\r\n   width:100px;\r\n   background:lightgray;\r\n }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS1lbnRyeS1pbnZlbnRvcnkvaXRlbS1lbnRyeS1pbnZlbnRvcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0NBQ2Y7QUFDRDtLQUNLLFdBQVc7SUFDWjtBQUVKO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLFlBQVk7RUFDZDtBQUNEO0tBQ0ksV0FBVztLQUNYLG9CQUFvQjtFQUN2QjtBQUVEO0tBQ0ksbUJBQW1CO0tBQ25CLHVCQUF1QjtLQUN2QixhQUFhO0lBQ2Q7QUFFSjtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhO0NBQ2hCO0FBQ0Q7SUFDSSxjQUFjO0lBQ2QsOEJBQThCO0NBQ2pDO0FBQ0E7S0FDSSw2QkFBNkI7S0FDN0Isc0JBQXNCO0tBQ3RCLFlBQVk7S0FDWixXQUFXO0tBQ1gsaUJBQWlCO0tBQ2pCLG1CQUFtQjtLQUNuQixXQUFXO0tBRVgsdUJBQXVCO0tBRXZCLDRCQUE0QjtLQUM1QixhQUFhO0lBQ2Q7QUFFSDtLQUNJLHNCQUFzQjtFQUN6QjtBQUNEO0tBQ0ksa0JBQWtCO0tBQ2xCLGlCQUFpQjtLQUNqQixXQUFXO0VBQ2Q7QUFDRDtHQUNFLG1CQUFtQjtHQUNuQixpQkFBaUI7RUFDbEI7QUFDRDtHQUNFLFlBQVk7R0FDWixxQkFBcUI7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9pdGVtLWVudHJ5LWludmVudG9yeS9pdGVtLWVudHJ5LWludmVudG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhZ2VIZWFkaW5ne1xyXG4gIG1hcmdpbi1sZWZ0OjQwJTtcclxuICBtYXJnaW4tdG9wOjIlO1xyXG59XHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gICAgIHdpZHRoOiAyMCU7XHJcbiAgIH1cclxuICAgXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gfVxyXG4gLmRpdnBvcyB7XHJcbiAgICAgZmxvYXQ6bGVmdDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gfVxyXG4gXHJcbiAud3JhcHBlciB7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICB9XHJcbiAgIFxyXG4uaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAyMDBweDtcclxufSAgXHJcbiNpdGVtYmFyY29kZTpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lOyAgXHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgQkxVRTtcclxufVxyXG4gLnVuZGVybGluZSB7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogZG9kZ2VyYmx1ZTtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgbGVmdDogNTBweDtcclxuICAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICB0b3A6IDE4NXB4O1xyXG4gICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcclxuICAgICB0cmFuc2Zvcm06IHNjYWxlKDAsIDEpO1xyXG4gICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xyXG4gICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcclxuICAgICB3aWR0aDogMjAycHg7XHJcbiAgIH1cclxuIFxyXG4gI3RhYmxlY29udGVudCB7XHJcbiAgICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gfVxyXG4gLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgY2xlYXI6Ym90aDtcclxuIH1cclxuICN0b3RhbFN1bURpdiB7XHJcbiAgIG1hcmdpbi1sZWZ0OiA3OC41JTtcclxuICAgbWFyZ2luLXRvcDogMTVweDtcclxuIH1cclxuICNzYXZlQnV0dG9ue1xyXG4gICB3aWR0aDoxMDBweDtcclxuICAgYmFja2dyb3VuZDpsaWdodGdyYXk7XHJcbiB9XHJcbiAiXX0= */"

/***/ }),

/***/ "./src/app/item-entry-inventory/item-entry-inventory.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/item-entry-inventory/item-entry-inventory.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"pageHeading\">\n  <h5>New purchased Item entry</h5>\n</div>\n<div class=\"wrapper divpos\">\n  <input class=\"input\" placeholder=\"Enter item name\" type=\"text\" id=\"itembarcode\" [(ngModel)]=\"itembarcode\" (keydown)=\"onItemEntry($event)\">\n  <span class=\"underline\"></span>\n</div>\n  <!-- <div class=\"wrapper divpos\" id =\"ratediv\">\n    <input class=\"input\" placeholder=\"Enter rate\" type=\"text\" id=\"rate\" [(ngModel)]=\"rate\">\n    <span class=\"underline\"></span>\n  </div> --> \n  <!-- <button type=\"button\" class=\"btn btn-primary product-entry divpos\" id=\"addButton\" (click)=\"addItem()\">Add</button>  -->\n\n  <div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n      <table class=\"table table-bordered table-striped mb-0\" id=\"tablecontent\">\n        <thead>\n          <tr>\n            <th *ngFor=\"let head of headerList\" scope=\"col\">{{head}} </th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr  *ngFor=\"let item of itemList\">\n                  <th scope=\"row\">{{item.id}}</th>\n                  <td>{{item.name}}</td>\n                  <td>{{item.quantity}}</td>\n                  <td>{{item.rate}}</td>\n                  <td (click)=\"removeItem(item.id)\">{{item.remove}}</td>\n          </tr>\n        </tbody>\n        \n      </table>\n    </div>\n    <div id=\"totalSumDiv\" *ngIf=\"id > 0\">\n      <button type=\"button\" class=\"btn btn-primary product-entry\" id=\"saveButton\" (click)=\"saveItem()\">save</button> \n    </div>"

/***/ }),

/***/ "./src/app/item-entry-inventory/item-entry-inventory.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/item-entry-inventory/item-entry-inventory.component.ts ***!
  \************************************************************************/
/*! exports provided: ItemEntryInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEntryInventoryComponent", function() { return ItemEntryInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/urlinfoservice.service */ "./src/app/service/urlinfoservice.service.ts");
/* harmony import */ var _service_httpservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/httpservice.service */ "./src/app/service/httpservice.service.ts");
/* harmony import */ var _service_common_data_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/common-data-container.service */ "./src/app/service/common-data-container.service.ts");






var ItemEntryInventoryComponent = /** @class */ (function () {
    function ItemEntryInventoryComponent(urlinfoservice, httpservice, dataContainer) {
        this.urlinfoservice = urlinfoservice;
        this.httpservice = httpservice;
        this.dataContainer = dataContainer;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.headerList = ['Sr.', 'Item name', 'Count', 'Rate', 'Action'];
        this.itemBarKeyMapItem = new Map(); // to keep track of added item in table
        this.id = 0;
        this.itemList = [];
    }
    ItemEntryInventoryComponent.prototype.ngAfterViewInit = function () {
        document.getElementById("itembarcode").focus();
    };
    ItemEntryInventoryComponent.prototype.ngOnInit = function () {
        if (this.dataContainer.getMappedObjectIdToItem()) {
            console.log("itemList already fetched from backend");
            return;
        }
        this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL, this);
    };
    ItemEntryInventoryComponent.prototype.callBackOnApi = function (items, isPostApiCall) {
        if (isPostApiCall) {
            console.log("call back method after post api call");
            return;
        }
        else {
            console.log("items stored in the inventory:", items);
            var itemMapToId_1 = new Map();
            items.forEach(function (el) {
                itemMapToId_1.set(el.barcode, el);
            });
            this.dataContainer.setMappedObjectIdToItem(itemMapToId_1);
        }
    };
    ItemEntryInventoryComponent.prototype.onItemEntry = function (event) {
        if (event.key === "Enter") {
            console.log(event);
            var item = this.dataContainer.getItem(this.itembarcode);
            if (item == null) {
                return;
            }
            var addedItem = this.itemBarKeyMapItem.get(this.itembarcode);
            console.log("added item:", addedItem);
            if (addedItem) {
                addedItem.quantity += 1; // how many item of same kind getting entered
                this.itembarcode = undefined;
                document.getElementById("itembarcode").focus();
            }
            else {
                this.id = this.id + 1;
                item.id = this.id; // used for sr number in the table;
                item.quantity = 1; // how many item of same kind getting entered
                item.remove = 'remove';
                this.itemList.push(item);
                this.itemBarKeyMapItem.set(this.itembarcode, item);
                this.itembarcode = undefined;
                document.getElementById("itembarcode").focus();
            }
        }
    };
    ItemEntryInventoryComponent.prototype.removeItem = function (id) {
        var tempItem = [];
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.id == id) {
                console.log("deleting item from :", this.itemBarKeyMapItem);
                this.itemBarKeyMapItem.delete(el.barcode);
                console.log("deleting after :", this.itemBarKeyMapItem);
            }
            else {
                tempItem.push(el);
            }
            if (el.id > id) {
                el.id = el.id - 1;
            }
        }
        this.itemList = tempItem;
        this.id = this.id - 1;
        tempItem = [];
        document.getElementById("itembarcode").focus();
    };
    ItemEntryInventoryComponent.prototype.saveItem = function () {
        var itemListStr = JSON.stringify(this.itemList);
        var itemListJson = JSON.parse(itemListStr);
        console.log("=======" + itemListStr);
        itemListJson.map(function (el) {
            delete el.id;
            delete el.remove;
        });
        var response = this.httpservice.postApiCall(this.urlinfoservice.ITEM_ENTRY_UPDATE_URL, itemListJson, this);
        this.itemList = [];
        this.id = 0;
        this.itemBarKeyMapItem.clear();
        document.getElementById("itembarcode").focus();
    };
    ItemEntryInventoryComponent.prototype.getItemInfolist = function () {
    };
    ItemEntryInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-entry-inventory',
            template: __webpack_require__(/*! ./item-entry-inventory.component.html */ "./src/app/item-entry-inventory/item-entry-inventory.component.html"),
            styles: [__webpack_require__(/*! ./item-entry-inventory.component.css */ "./src/app/item-entry-inventory/item-entry-inventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_3__["UrlinfoserviceService"], _service_httpservice_service__WEBPACK_IMPORTED_MODULE_4__["HttpserviceService"],
            _service_common_data_container_service__WEBPACK_IMPORTED_MODULE_5__["CommonDataContainerService"]])
    ], ItemEntryInventoryComponent);
    return ItemEntryInventoryComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/childcomp/childcomp.component.css":
/*!***************************************************************!*\
  !*** ./src/app/maincontent/childcomp/childcomp.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L2NoaWxkY29tcC9jaGlsZGNvbXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/maincontent/childcomp/childcomp.component.html":
/*!****************************************************************!*\
  !*** ./src/app/maincontent/childcomp/childcomp.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  childcomp works!\n  \n</p>\n"

/***/ }),

/***/ "./src/app/maincontent/childcomp/childcomp.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/maincontent/childcomp/childcomp.component.ts ***!
  \**************************************************************/
/*! exports provided: ChildcompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildcompComponent", function() { return ChildcompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ChildcompComponent = /** @class */ (function () {
    function ChildcompComponent() {
    }
    ChildcompComponent.prototype.ngOnChanges = function () {
        console.log("ngOnChanges: data from parent comp:" + this.parentmsg);
    };
    ChildcompComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit: data from parent comp:" + this.parentmsg);
    };
    ChildcompComponent.prototype.ngDoCheck = function () {
        console.log('ngDoCheck get called');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChildcompComponent.prototype, "parentmsg", void 0);
    ChildcompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-childcomp',
            template: __webpack_require__(/*! ./childcomp.component.html */ "./src/app/maincontent/childcomp/childcomp.component.html"),
            styles: [__webpack_require__(/*! ./childcomp.component.css */ "./src/app/maincontent/childcomp/childcomp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChildcompComponent);
    return ChildcompComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/maincontent.component.css":
/*!*******************************************************!*\
  !*** ./src/app/maincontent/maincontent.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW5jb250ZW50L21haW5jb250ZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/maincontent/maincontent.component.html":
/*!********************************************************!*\
  !*** ./src/app/maincontent/maincontent.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>\n    Select the topic for demo!\n</h4>\n<mat-radio-group class = \"tp-radio-group\" [(ngModel)] = \"topicSelected\">\n    <mat-radio-button class = \"tp-radio-button\"\n       *ngFor = \"let topic of learningTopics\" [value] = \"topic\">\n       {{topic}}\n    </mat-radio-button>\n </mat-radio-group>\n <hr/>\n<div *ngIf=\"topicSelected == 'SubscribeEvent'\">\n    <br/>\n    <input  [(ngModel)]=\"name\" placeholder=\"Enter news\">\n    <br/> <br/>\n    <button (click)=\"onClick()\">send news</button>\n    <br/>\n    <div>\n        <hr/>\n        <h4>To get news msg, please click subscribe button</h4>\n        <button (click)=\"subscribeForNewMsg()\">subscribe to get news</button>\n        <!-- <h1 *ngFor=\"let data of sharedData\">{{data}}</h1> -->\n        <h5 *ngIf=\"receivedMsg\">Received message is : {{receivedMsg}}</h5>\n    </div>\n</div>\n<div *ngIf=\"topicSelected == 'Pipe'\">\n    <br/>\n    <input [(ngModel)]=\"name\" placeholder=\"Name to change to caps\">\n    <br/><br/>\n    <h5>Enter name in capital:{{name | myCustomPipe}}</h5>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/maincontent/maincontent.component.ts":
/*!******************************************************!*\
  !*** ./src/app/maincontent/maincontent.component.ts ***!
  \******************************************************/
/*! exports provided: MaincontentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaincontentComponent", function() { return MaincontentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_shared_info_container_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/shared-info-container.service */ "./src/app/service/shared-info-container.service.ts");



var MaincontentComponent = /** @class */ (function () {
    function MaincontentComponent(sharedInfo) {
        this.sharedInfo = sharedInfo;
        this.sharedData = [];
        this.learningTopics = ['SubscribeEvent', 'Pipe'];
        console.log("content page constructor get called");
    }
    MaincontentComponent.prototype.ngOnInit = function () {
        console.log("content page ngOnInit get called");
    };
    MaincontentComponent.prototype.ngOnChanges = function () {
        console.log("content page ngOnChanges get called");
    };
    MaincontentComponent.prototype.ngOnDestroy = function () {
        console.log("content page ngOnDestroy get called");
    };
    MaincontentComponent.prototype.onClick = function () {
        console.log("name entered in the input field");
        //this.sharedData = this.sharedInfo.getData();  // get the data which is updated by different component whith old content tool
        this.sharedInfo.sendMessage(this.name);
        console.log("message sent");
    };
    MaincontentComponent.prototype.subscribeForNewMsg = function () {
        var _this = this;
        this.sharedInfo.getMessage().subscribe(function (msg) {
            _this.receivedMsg = msg.message;
        });
    };
    MaincontentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-maincontent',
            template: __webpack_require__(/*! ./maincontent.component.html */ "./src/app/maincontent/maincontent.component.html"),
            styles: [__webpack_require__(/*! ./maincontent.component.css */ "./src/app/maincontent/maincontent.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_shared_info_container_service__WEBPACK_IMPORTED_MODULE_2__["SharedInfoContainerService"]])
    ], MaincontentComponent);
    return MaincontentComponent;
}());



/***/ }),

/***/ "./src/app/maincontent/my-custom-pipe.pipe.ts":
/*!****************************************************!*\
  !*** ./src/app/maincontent/my-custom-pipe.pipe.ts ***!
  \****************************************************/
/*! exports provided: MyCustomPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCustomPipePipe", function() { return MyCustomPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyCustomPipePipe = /** @class */ (function () {
    function MyCustomPipePipe() {
    }
    MyCustomPipePipe.prototype.transform = function (value, args) {
        return value.toUpperCase();
    };
    MyCustomPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'myCustomPipe'
        })
    ], MyCustomPipePipe);
    return MyCustomPipePipe;
}());



/***/ }),

/***/ "./src/app/newinventoryentry/newinventoryentry.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/newinventoryentry/newinventoryentry.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\r\n  width: 20%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n  margin-top: 20px;\r\n  margin-left: 150px;\r\n}\r\n\r\n.mat-form-field-flex {\r\n  width: 100%;\r\n}\r\n\r\n.divpos {\r\n    float:left;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n#namediv{\r\n  margin-left:4%;\r\n}\r\n\r\n#rate{\r\n  left:100px;\r\n}\r\n\r\n.wrapper {\r\n    border-radius: 2px;\r\n    box-sizing: border-box;\r\n    width: 200px;\r\n  }\r\n\r\n.input {\r\n    background-color: transparent;\r\n    border: none;\r\n    border-bottom: 1px solid grey;\r\n    color: #555;\r\n    box-sizing: border-box;\r\n    left: 30%;\r\n    position: relative;\r\n    width: 200px;\r\n    margin-top: 37px;\r\n   \r\n  }\r\n\r\n#itembarcode:focus {\r\n    outline: none;  \r\n    border-bottom: 2px solid BLUE;\r\n  }\r\n\r\n.underline {\r\n    background-color: dodgerblue;\r\n    display: inline-block;\r\n    height: 2px;\r\n    left: 50px;\r\n    margin-top: -4px;\r\n    position: absolute;\r\n    top: 185px;\r\n    transform: scale(0, 1);\r\n    transition: all 0.5s linear;\r\n    width: 202px;\r\n  }\r\n\r\n#addButton {\r\n    background:lightgray;\r\n    width:100px;\r\n    margin-top: 30px;\r\n    margin-left: 180px;\r\n}\r\n\r\n#tablecontent {\r\n    background: lightgray;\r\n}\r\n\r\n.my-custom-scrollbar {\r\n    max-height: 400px;\r\n    overflow-y: auto;\r\n    clear:both;\r\n}\r\n\r\n#totalSumDiv {\r\n  margin-left: 83.5%;\r\n  margin-top: 15px;\r\n}\r\n\r\n#saveButton{\r\n  width:100px;\r\n  background:lightgray;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3aW52ZW50b3J5ZW50cnkvbmV3aW52ZW50b3J5ZW50cnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7Q0FDWjs7QUFFRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsbUJBQW1CO0NBQ3BCOztBQUNEO0VBQ0UsWUFBWTtDQUNiOztBQUNEO0lBQ0ksV0FBVztJQUNYLG9CQUFvQjtDQUN2Qjs7QUFDRDtFQUNFLGVBQWU7Q0FDaEI7O0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7O0FBQ0Q7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7R0FDZDs7QUFFRDtJQUNFLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsaUJBQWlCOztHQUVsQjs7QUFDRDtJQUNFLGNBQWM7SUFDZCw4QkFBOEI7R0FDL0I7O0FBQ0g7SUFDSSw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixXQUFXO0lBRVgsdUJBQXVCO0lBRXZCLDRCQUE0QjtJQUM1QixhQUFhO0dBQ2Q7O0FBRUg7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7Q0FDdEI7O0FBQ0Q7SUFDSSxzQkFBc0I7Q0FDekI7O0FBQ0Q7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7Q0FDZDs7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7Q0FDbEI7O0FBQ0Q7RUFDRSxZQUFZO0VBQ1oscUJBQXFCO0NBQ3RCIiwiZmlsZSI6InNyYy9hcHAvbmV3aW52ZW50b3J5ZW50cnkvbmV3aW52ZW50b3J5ZW50cnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xyXG4gIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGl2cG9zIHtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiNuYW1lZGl2e1xyXG4gIG1hcmdpbi1sZWZ0OjQlO1xyXG59XHJcbiNyYXRle1xyXG4gIGxlZnQ6MTAwcHg7XHJcbn1cclxuLndyYXBwZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICBjb2xvcjogIzU1NTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzN3B4O1xyXG4gICBcclxuICB9ICBcclxuICAjaXRlbWJhcmNvZGU6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTsgIFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIEJMVUU7XHJcbiAgfVxyXG4udW5kZXJsaW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxODVweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcclxuICAgIHdpZHRoOiAyMDJweDtcclxuICB9XHJcblxyXG4jYWRkQnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6bGlnaHRncmF5O1xyXG4gICAgd2lkdGg6MTAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xyXG59XHJcbiN0YWJsZWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG59XHJcbi5teS1jdXN0b20tc2Nyb2xsYmFyIHtcclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGNsZWFyOmJvdGg7XHJcbn1cclxuI3RvdGFsU3VtRGl2IHtcclxuICBtYXJnaW4tbGVmdDogODMuNSU7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4jc2F2ZUJ1dHRvbntcclxuICB3aWR0aDoxMDBweDtcclxuICBiYWNrZ3JvdW5kOmxpZ2h0Z3JheTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/newinventoryentry/newinventoryentry.component.html":
/*!********************************************************************!*\
  !*** ./src/app/newinventoryentry/newinventoryentry.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper divpos\" id =\"barcodediv\">\r\n  <input class=\"input\" placeholder=\"Enter Bar Code\" type=\"text\" id=\"itembarcode\" [(ngModel)]=\"barcode\" (keydown)=\"onBarCodeEnter($event)\">\r\n  <span class=\"underline\"></span>\r\n</div>\r\n<div class=\"wrapper divpos\" id =\"namediv\">\r\n    <input class=\"input\" placeholder=\"Enter Item Name\" type=\"text\" id=\"itemName\" [(ngModel)]=\"name\">\r\n  <span class=\"underline\"></span>\r\n</div>\r\n\r\n<div class=\"wrapper divpos\" id =\"ratediv\">\r\n    <input class=\"input\" placeholder=\"Enter rate\" type=\"text\" id=\"rate\" [(ngModel)]=\"rate\">  \r\n    <span class=\"underline\"></span>\r\n  </div>\r\n\r\n<!-- <form class=\"example-form divpos\">\r\n    <mat-form-field class=\"example-full-width\">\r\n      <input id=\"olditeminput\"type=\"text\" placeholder=\"Enter old item name\" aria-label=\"Assignee\"  matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\" (ngModelChange)=\"onItemChange()\"/>\r\n      <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\r\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\r\n          {{option.name}}\r\n        </mat-option>\r\n      </mat-autocomplete>\r\n    </mat-form-field>\r\n  </form>   -->\r\n\r\n<button type=\"button\" class=\"btn btn-primary product-entry divpos\" id=\"addButton\" (click)=\"addItem()\">Add</button>  \r\n<div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\r\n    <table class=\"table table-bordered table-striped mb-0\" id=\"tablecontent\">\r\n      <thead>\r\n        <tr>\r\n          <th *ngFor=\"let head of headerList\" scope=\"col\">{{head}} </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr  *ngFor=\"let item of itemList\">\r\n                <th scope=\"row\">{{item.id}}</th>\r\n                <td>{{item.barcode}}</td>\r\n                <td>{{item.name}}</td>\r\n                <td>{{item.rate}}</td>\r\n                <td (click)=\"removeItem(item.id)\">{{item.remove}}</td>\r\n        </tr>\r\n      </tbody>\r\n      \r\n    </table>\r\n  </div>\r\n  <div id=\"totalSumDiv\" *ngIf=\"id > 0\">\r\n    <button type=\"button\" class=\"btn btn-primary product-entry\" id=\"saveButton\" (click)=\"saveItem()\">save</button> \r\n  </div>"

/***/ }),

/***/ "./src/app/newinventoryentry/newinventoryentry.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/newinventoryentry/newinventoryentry.component.ts ***!
  \******************************************************************/
/*! exports provided: NewInventoryEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewInventoryEntryComponent", function() { return NewInventoryEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/urlinfoservice.service */ "./src/app/service/urlinfoservice.service.ts");
/* harmony import */ var _service_httpservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/httpservice.service */ "./src/app/service/httpservice.service.ts");
/* harmony import */ var _service_common_data_container_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/common-data-container.service */ "./src/app/service/common-data-container.service.ts");






var NewInventoryEntryComponent = /** @class */ (function () {
    function NewInventoryEntryComponent(urlinfoservice, httpservice, dataContainer) {
        this.urlinfoservice = urlinfoservice;
        this.httpservice = httpservice;
        this.dataContainer = dataContainer;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.headerList = ['Sr.', 'Item Bar Code', 'Item Name', 'Rate', 'Action'];
        this.id = 0;
        this.itemBarKeyMapItem = new Map();
        this.isItemExist = false;
        this.itemList = [];
    }
    NewInventoryEntryComponent.prototype.ngAfterViewInit = function () {
        document.getElementById("itembarcode").focus();
    };
    NewInventoryEntryComponent.prototype.ngOnInit = function () {
        if (this.dataContainer.getMappedObjectIdToItem()) {
            console.log("itemList already fetched from backend");
            return;
        }
        this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL, this);
    };
    NewInventoryEntryComponent.prototype.callBackOnApi = function (items, isPostApiCall) {
        if (isPostApiCall) {
            console.log("call back method after post api call");
            this.httpservice.getApiCall(this.urlinfoservice.ITEM_GET_INFO_URL, this); // to synch to updated item with browser item
            return;
        }
        else {
            console.log("items stored in the inventory:", items);
            var itemMapToId_1 = new Map();
            items.forEach(function (el) {
                itemMapToId_1.set(el.barcode, el);
            });
            this.dataContainer.setMappedObjectIdToItem(itemMapToId_1);
        }
    };
    NewInventoryEntryComponent.prototype.onBarCodeEnter = function (event) {
        if (event.key === "Enter") {
            var item = this.dataContainer.getItem(this.barcode);
            if (item) { // in case we want to update the rate/name of added item, we need to call this.
                this.name = item.name;
                this.rate = item.rate;
                this.isItemExist = true;
            }
            else {
                this.isItemExist = false;
            }
            document.getElementById("itemName").focus();
        }
    };
    NewInventoryEntryComponent.prototype.addItem = function () {
        if ((this.barcode == undefined)) {
            document.getElementById("itembarcode").focus();
            return;
        }
        var addedItem = this.itemBarKeyMapItem.get(this.barcode);
        if (addedItem) { //as this item is already added it the table.. so ignore it
            this.barcode = undefined;
            this.name = undefined;
            this.rate = undefined;
            this.isItemExist = false;
            document.getElementById("itembarcode").focus();
            return;
        }
        this.id = this.id + 1;
        var item = { id: this.id, barcode: this.barcode, name: this.name, rate: this.rate, remove: 'Remove', itemExistFlag: this.isItemExist };
        this.itemBarKeyMapItem.set(this.barcode, item);
        this.itemList.push(item);
        this.barcode = undefined;
        this.name = undefined;
        this.rate = undefined;
        this.isItemExist = false;
        document.getElementById("itembarcode").focus();
        //document.getElementById("nameinput").focus();
    };
    NewInventoryEntryComponent.prototype.removeItem = function (id) {
        var tempItem = [];
        for (var _i = 0, _a = this.itemList; _i < _a.length; _i++) {
            var el = _a[_i];
            if (el.id == id) {
                this.itemBarKeyMapItem.delete(el.barcode);
            }
            else {
                tempItem.push(el);
            }
            if (el.id > id) {
                el.id = el.id - 1;
            }
        }
        this.itemList = tempItem;
        this.id = this.id - 1;
        tempItem = [];
        document.getElementById("itembarcode").focus();
    };
    NewInventoryEntryComponent.prototype.saveItem = function () {
        var itemListStr = JSON.stringify(this.itemList);
        var itemListJson = JSON.parse(itemListStr);
        console.log("=======" + itemListStr);
        itemListJson.map(function (el) {
            delete el.id;
            delete el.remove;
        });
        var response = this.httpservice.postApiCall(this.urlinfoservice.ITEM_ENTRY_UPDATE_URL, itemListJson, this);
        this.itemList = [];
        this.id = 0;
        document.getElementById("itembarcode").focus();
    };
    NewInventoryEntryComponent.prototype.getItemInfolist = function () {
    };
    NewInventoryEntryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-newitementry',
            template: __webpack_require__(/*! ./newinventoryentry.component.html */ "./src/app/newinventoryentry/newinventoryentry.component.html"),
            styles: [__webpack_require__(/*! ./newinventoryentry.component.css */ "./src/app/newinventoryentry/newinventoryentry.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_3__["UrlinfoserviceService"], _service_httpservice_service__WEBPACK_IMPORTED_MODULE_4__["HttpserviceService"],
            _service_common_data_container_service__WEBPACK_IMPORTED_MODULE_5__["CommonDataContainerService"]])
    ], NewInventoryEntryComponent);
    return NewInventoryEntryComponent;
}());



/***/ }),

/***/ "./src/app/pageheader/pageheader.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pageheader/pageheader.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".divpos{\r\n    float: left;\r\n    margin-left: 15%;\r\n    padding-top: 1%;\r\n}\r\n#logout{\r\n    margin-left: 520%;\r\n    width: 100px;\r\n    background-color: lightblue;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZWhlYWRlci9wYWdlaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjtDQUNuQjtBQUNEO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw0QkFBNEI7Q0FDL0IiLCJmaWxlIjoic3JjL2FwcC9wYWdlaGVhZGVyL3BhZ2VoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZwb3N7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNSU7XHJcbiAgICBwYWRkaW5nLXRvcDogMSU7XHJcbn1cclxuI2xvZ291dHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1MjAlO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/pageheader/pageheader.component.html":
/*!******************************************************!*\
  !*** ./src/app/pageheader/pageheader.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <div class=\"divpos\">\r\n        <h5 id =\"pageTitle\">Welcome to your own IMS</h5>\r\n    </div>\r\n    <div class=\"divpos\">\r\n        <button type=\"button\" class=\"btn btn-primary product-entry\" id=\"logout\" (click)=\"logout()\">Logout</button>  \r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pageheader/pageheader.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pageheader/pageheader.component.ts ***!
  \****************************************************/
/*! exports provided: PageheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageheaderComponent", function() { return PageheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/urlinfoservice.service */ "./src/app/service/urlinfoservice.service.ts");
/* harmony import */ var _service_httpservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/httpservice.service */ "./src/app/service/httpservice.service.ts");




var PageheaderComponent = /** @class */ (function () {
    function PageheaderComponent(urlinfoservice, httpservice) {
        this.urlinfoservice = urlinfoservice;
        this.httpservice = httpservice;
    }
    PageheaderComponent.prototype.ngOnInit = function () {
    };
    PageheaderComponent.prototype.logout = function () {
        this.httpservice.getApiCall(this.urlinfoservice.CUSTOMER_LOGOUT_URL, this);
    };
    PageheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pageheader',
            template: __webpack_require__(/*! ./pageheader.component.html */ "./src/app/pageheader/pageheader.component.html"),
            styles: [__webpack_require__(/*! ./pageheader.component.css */ "./src/app/pageheader/pageheader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_2__["UrlinfoserviceService"], _service_httpservice_service__WEBPACK_IMPORTED_MODULE_3__["HttpserviceService"]])
    ], PageheaderComponent);
    return PageheaderComponent;
}());



/***/ }),

/***/ "./src/app/service/common-data-container.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/common-data-container.service.ts ***!
  \**********************************************************/
/*! exports provided: CommonDataContainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonDataContainerService", function() { return CommonDataContainerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonDataContainerService = /** @class */ (function () {
    function CommonDataContainerService() {
        this.mappedItemIdToItem = null;
    }
    CommonDataContainerService.prototype.setMappedObjectIdToItem = function (mappedItems) {
        this.mappedItemIdToItem = mappedItems;
    };
    CommonDataContainerService.prototype.getMappedObjectIdToItem = function () {
        return this.mappedItemIdToItem;
    };
    CommonDataContainerService.prototype.getItem = function (key) {
        if (this.mappedItemIdToItem) {
            return this.mappedItemIdToItem.get(key);
        }
        else {
            return null;
        }
    };
    CommonDataContainerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonDataContainerService);
    return CommonDataContainerService;
}());



/***/ }),

/***/ "./src/app/service/commonutil.service.ts":
/*!***********************************************!*\
  !*** ./src/app/service/commonutil.service.ts ***!
  \***********************************************/
/*! exports provided: CommonutilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonutilService", function() { return CommonutilService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonutilService = /** @class */ (function () {
    function CommonutilService() {
    }
    CommonutilService.prototype.getDateInStringForView = function (date) {
        var d = new Date(date);
        var da = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
        var m = (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1);
        var y = d.getFullYear();
        var h = d.getHours() < 10 ? "0" + d.getHours() : d.getHours();
        var mi = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes();
        var s = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds();
        var temp = da + "/" + m + "/" + y + " " + h + ":" + mi + ":" + s;
        return temp;
    };
    CommonutilService.prototype.getDateStringToSendBackEnd = function (date) {
        var d;
        if ((date == null)) {
            d = new Date();
        }
        else {
            d = new Date(date);
        }
        var temp = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " 00:00:00";
        return temp;
    };
    CommonutilService.prototype.getPlustOneDateStringToSendBackEnd = function (date) {
        var d = new Date(date);
        d.setDate(d.getDate() + 1);
        var temp = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " 00:00:00";
        return temp;
    };
    CommonutilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonutilService);
    return CommonutilService;
}());



/***/ }),

/***/ "./src/app/service/httpservice.service.ts":
/*!************************************************!*\
  !*** ./src/app/service/httpservice.service.ts ***!
  \************************************************/
/*! exports provided: HttpserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpserviceService", function() { return HttpserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var HttpserviceService = /** @class */ (function () {
    function HttpserviceService(http, document) {
        this.http = http;
        this.document = document;
        this.endpoint = 'http://localhost:3000/api/v1/';
        this.httpOptions = {};
        console.log("document obj: ", document);
    }
    /* getApiCall(url:string){
      this.http.get(url)
        .pipe(map((response) => response.json()))
        .subscribe((data) => console.log(data));
    }  */
    HttpserviceService.prototype.getGetHeader = function () {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
    };
    HttpserviceService.prototype.getApiCall = function (endpoint, ref) {
        var _this = this;
        this.getGetHeader();
        return this.http.get(endpoint, this.httpOptions).subscribe(function (data) {
            console.log("Get Item info Request is successful ", data);
            ref.callBackOnApi(data, false);
        }, function (error) {
            console.log("Error", error); // TODO ... not to implement in error code.. but somewhere else...
            if ((error.status == 200) && (error.url != null) && (error.url.indexOf("customLogin.html") != -1)) {
                _this.document.location.href = error.url;
            }
        });
    };
    HttpserviceService.prototype.extractData = function (res) {
        console.log('callback function');
        console.log(res);
        var body = res;
        return body || {};
    };
    HttpserviceService.prototype.getPostHeader = function () {
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            })
        };
    };
    HttpserviceService.prototype.postApiCall = function (endpoint, payload, ref) {
        this.getPostHeader();
        console.log('Post method get called');
        console.log(payload);
        /* return this.http.post(endpoint, JSON.stringify(payload), this.httpOptions)
        .pipe(
          map(this.extractData)); */
        this.http.post(endpoint, JSON.stringify(payload), this.httpOptions)
            .subscribe(function (data) {
            console.log("POST Request is successful ", data);
            ref.callBackOnApi(data, true); // same callbackback function is getting called for two api.. to identify the api..boolean is used
        }, function (error) {
            console.log("Error", error);
        });
    };
    HttpserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Document])
    ], HttpserviceService);
    return HttpserviceService;
}());



/***/ }),

/***/ "./src/app/service/shared-info-container.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/service/shared-info-container.service.ts ***!
  \**********************************************************/
/*! exports provided: SharedInfoContainerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedInfoContainerService", function() { return SharedInfoContainerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var SharedInfoContainerService = /** @class */ (function () {
    function SharedInfoContainerService() {
        this.sharedInfo = [];
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    SharedInfoContainerService.prototype.putData = function (data) {
        this.sharedInfo.push(data);
    };
    SharedInfoContainerService.prototype.getData = function () {
        return this.sharedInfo;
    };
    SharedInfoContainerService.prototype.sendMessage = function (msg) {
        this.subject.next({ message: msg });
    };
    SharedInfoContainerService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    SharedInfoContainerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SharedInfoContainerService);
    return SharedInfoContainerService;
}());



/***/ }),

/***/ "./src/app/service/urlinfoservice.service.ts":
/*!***************************************************!*\
  !*** ./src/app/service/urlinfoservice.service.ts ***!
  \***************************************************/
/*! exports provided: UrlinfoserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlinfoserviceService", function() { return UrlinfoserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UrlinfoserviceService = /** @class */ (function () {
    function UrlinfoserviceService() {
        this.ITEM_GET_INFO_URL = 'http://localhost:8080/springserver/api/getiteminfo/';
        this.ITEM_ENTRY_UPDATE_URL = 'http://localhost:8080/springserver/api/saveorupdatetitem/';
        this.CUSTOMER_SHOPPING_SUMMARY_SAVE_URL = 'http://localhost:8080/springserver/api/saveshoppingsummary/';
        this.CUSTOMER_SHOPPING_SUMMARY_GET_URL = 'http://localhost:8080/springserver/api/getshoppingsummary';
        this.CUSTOMER_LOGOUT_URL = 'http://localhost:8080/springserver/api/logout';
    }
    UrlinfoserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UrlinfoserviceService);
    return UrlinfoserviceService;
}());



/***/ }),

/***/ "./src/app/sidenavbar/sidenavbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/sidenavbar/sidenavbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZGVuYXZiYXIvc2lkZW5hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sidenavbar/sidenavbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/sidenavbar/sidenavbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav flex-column\">\n    <a class=\"nav-link\" href=\"#\" routerLink = \"createtransaction\">Sell Product</a>\n    <a class=\"nav-link active\" routerLink = \"transactionhistory\">Transaction Record(Sell)</a>\n    <a class=\"nav-link active\" routerLink = \"itementryininventory\">Item Entry in Inventory</a>\n    <a class=\"nav-link active\" routerLink = \"createinventory\">Create Inventory</a>\n    <a class=\"nav-link active\" routerLink = \"learningcomp\">LearnComponent</a>\n  </nav>\n\n"

/***/ }),

/***/ "./src/app/sidenavbar/sidenavbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/sidenavbar/sidenavbar.component.ts ***!
  \****************************************************/
/*! exports provided: SidenavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavbarComponent", function() { return SidenavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/urlinfoservice.service */ "./src/app/service/urlinfoservice.service.ts");
/* harmony import */ var _service_httpservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/httpservice.service */ "./src/app/service/httpservice.service.ts");




var SidenavbarComponent = /** @class */ (function () {
    function SidenavbarComponent(urlinfoservice, httpservice) {
        this.urlinfoservice = urlinfoservice;
        this.httpservice = httpservice;
        this.sidebar = 'todo navigation design';
    }
    SidenavbarComponent.prototype.ngOnInit = function () {
    };
    SidenavbarComponent.prototype.callBackOnApi = function (items, isPostApiCall) {
        console.log("logout api called sucessfully");
    };
    SidenavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidenavbar',
            template: __webpack_require__(/*! ./sidenavbar.component.html */ "./src/app/sidenavbar/sidenavbar.component.html"),
            styles: [__webpack_require__(/*! ./sidenavbar.component.css */ "./src/app/sidenavbar/sidenavbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_2__["UrlinfoserviceService"], _service_httpservice_service__WEBPACK_IMPORTED_MODULE_3__["HttpserviceService"]])
    ], SidenavbarComponent);
    return SidenavbarComponent;
}());



/***/ }),

/***/ "./src/app/transactionhistory/transactionhistory.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/transactionhistory/transactionhistory.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#pageHeading{\r\n  clear:both;\r\n  margin-left:40%;\r\n  margin-top:2%;\r\n}\r\n#fetchButton{\r\n  width: 100px;\r\n  margin-left: 8px;\r\n  margin-bottom: 10%;\r\n  background: lightgray;\r\n}\r\n#printdiv{\r\n  width: 100px;\r\n  margin-left: 8px;\r\n  background: lightgray;\r\n}\r\n#tableLabelId{\r\n  margin-top:20px;\r\n  margin-bottom: 20px;\r\n}\r\n.datepickerdiv{\r\n  float: left;\r\n  margin-left:6.5%;\r\n}\r\n.example-form {\r\n    /* min-width: 150px;\r\n     max-width: 500px; */\r\n     width: 20%;\r\n   }\r\n.example-full-width {\r\n     width: 100%;\r\n     margin-top: 20px;\r\n     margin-left: 20px;\r\n   }\r\n.mat-form-field-flex {\r\n     width: 100%;\r\n }\r\n.divpos {\r\n     float:left;\r\n }\r\n.wrapper {\r\n     border-radius: 2px;\r\n     /* box-shadow: 0px 2px 1px 0px #DDD; */\r\n     box-sizing: border-box;\r\n     /* height: 300px; */\r\n     /* left: 50%; */\r\n     /* margin: -150px 0 0 -150px; */\r\n    /* position: absolute; */\r\n     /* top: 50%; */\r\n     width: 200px;\r\n    /* margin-top: 20px;\r\n     margin-left: 20px; */\r\n   }\r\n.input {\r\n     background-color: transparent;\r\n     border: none;\r\n     border-bottom: 1px solid grey;\r\n     color: #555;\r\n     box-sizing: border-box;\r\n     /*font-family: 'Arvo';*/\r\n     /*font-size: 18px;*/\r\n     /* height: 50px; */\r\n     left: 50%;\r\n     /*margin: -25px 0 0 -100px; */\r\n     /* padding: 10px 0px;*/\r\n     position: relative;\r\n     /*top: 50%;*/\r\n     width: 200px;\r\n     margin-top: 37px;\r\n    \r\n   }\r\n#newItemInput:focus {\r\n     outline: none;  \r\n     border-bottom: 2px solid BLUE;\r\n   }\r\n.underline {\r\n     background-color: dodgerblue;\r\n     display: inline-block;\r\n     height: 2px;\r\n     left: 50px;\r\n     margin-top: -4px;\r\n     position: absolute;\r\n     top: 185px;\r\n     transform: scale(0, 1);\r\n     transition: all 0.5s linear;\r\n     width: 202px;\r\n   }\r\n#addButton {\r\n    background:lightgray;\r\n    width:100px;\r\n    margin-top: 30px;\r\n    margin-left: 180px;\r\n}\r\n#tablecontent {\r\n    background: lightgray;\r\n}\r\n.my-custom-scrollbar {\r\n    max-height: 400px;\r\n    overflow-y: auto;\r\n    clear:both;\r\n}\r\n#printCostDiv{\r\n  margin-left: 65%;\r\n  margin-top: 1.5%;\r\n\r\n}\r\n.printTotalCost{\r\n    float: left;\r\n}\r\n#totalSumLavel{\r\n  margin-top: 10px;\r\n  font-size: 100%;\r\n}\r\n#tfoot{\r\n  display:none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHJhbnNhY3Rpb25oaXN0b3J5L3RyYW5zYWN0aW9uaGlzdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0NBQ2Y7QUFDRDtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFFRDtJQUNJO3lCQUNxQjtLQUNwQixXQUFXO0lBQ1o7QUFFRDtLQUNFLFlBQVk7S0FDWixpQkFBaUI7S0FDakIsa0JBQWtCO0lBQ25CO0FBQ0Q7S0FDRSxZQUFZO0VBQ2Y7QUFDRDtLQUNJLFdBQVc7RUFDZDtBQUNEO0tBQ0ksbUJBQW1CO0tBQ25CLHVDQUF1QztLQUN2Qyx1QkFBdUI7S0FDdkIsb0JBQW9CO0tBQ3BCLGdCQUFnQjtLQUNoQixnQ0FBZ0M7SUFDakMseUJBQXlCO0tBQ3hCLGVBQWU7S0FDZixhQUFhO0lBQ2Q7MEJBQ3NCO0lBQ3RCO0FBRUQ7S0FDRSw4QkFBOEI7S0FDOUIsYUFBYTtLQUNiLDhCQUE4QjtLQUM5QixZQUFZO0tBQ1osdUJBQXVCO0tBQ3ZCLHdCQUF3QjtLQUN4QixvQkFBb0I7S0FDcEIsbUJBQW1CO0tBQ25CLFVBQVU7S0FDViw4QkFBOEI7S0FDOUIsdUJBQXVCO0tBQ3ZCLG1CQUFtQjtLQUNuQixhQUFhO0tBQ2IsYUFBYTtLQUNiLGlCQUFpQjs7SUFFbEI7QUFDRDtLQUNFLGNBQWM7S0FDZCw4QkFBOEI7SUFDL0I7QUFDSDtLQUNJLDZCQUE2QjtLQUM3QixzQkFBc0I7S0FDdEIsWUFBWTtLQUNaLFdBQVc7S0FDWCxpQkFBaUI7S0FDakIsbUJBQW1CO0tBQ25CLFdBQVc7S0FFWCx1QkFBdUI7S0FFdkIsNEJBQTRCO0tBQzVCLGFBQWE7SUFDZDtBQUNEO0lBQ0MscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0NBQ3RCO0FBQ0Q7SUFDSSxzQkFBc0I7Q0FDekI7QUFDRDtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztDQUNkO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCOztDQUVsQjtBQUNEO0lBQ0ksWUFBWTtDQUNmO0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0NBQ2pCO0FBQ0Q7RUFDRSxhQUFhO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC90cmFuc2FjdGlvbmhpc3RvcnkvdHJhbnNhY3Rpb25oaXN0b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZUhlYWRpbmd7XHJcbiAgY2xlYXI6Ym90aDtcclxuICBtYXJnaW4tbGVmdDo0MCU7XHJcbiAgbWFyZ2luLXRvcDoyJTtcclxufVxyXG4jZmV0Y2hCdXR0b257XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxufVxyXG4jcHJpbnRkaXZ7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG59XHJcbiN0YWJsZUxhYmVsSWR7XHJcbiAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmRhdGVwaWNrZXJkaXZ7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWxlZnQ6Ni41JTtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgICAvKiBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgIG1heC13aWR0aDogNTAwcHg7ICovXHJcbiAgICAgd2lkdGg6IDIwJTtcclxuICAgfVxyXG4gICBcclxuICAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgfVxyXG4gICAubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiAuZGl2cG9zIHtcclxuICAgICBmbG9hdDpsZWZ0O1xyXG4gfVxyXG4gLndyYXBwZXIge1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAvKiBib3gtc2hhZG93OiAwcHggMnB4IDFweCAwcHggI0RERDsgKi9cclxuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgIC8qIGhlaWdodDogMzAwcHg7ICovXHJcbiAgICAgLyogbGVmdDogNTAlOyAqL1xyXG4gICAgIC8qIG1hcmdpbjogLTE1MHB4IDAgMCAtMTUwcHg7ICovXHJcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXHJcbiAgICAgLyogdG9wOiA1MCU7ICovXHJcbiAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgLyogbWFyZ2luLXRvcDogMjBweDtcclxuICAgICBtYXJnaW4tbGVmdDogMjBweDsgKi9cclxuICAgfVxyXG4gICBcclxuICAgLmlucHV0IHtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XHJcbiAgICAgY29sb3I6ICM1NTU7XHJcbiAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAvKmZvbnQtZmFtaWx5OiAnQXJ2byc7Ki9cclxuICAgICAvKmZvbnQtc2l6ZTogMThweDsqL1xyXG4gICAgIC8qIGhlaWdodDogNTBweDsgKi9cclxuICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgLyptYXJnaW46IC0yNXB4IDAgMCAtMTAwcHg7ICovXHJcbiAgICAgLyogcGFkZGluZzogMTBweCAwcHg7Ki9cclxuICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgLyp0b3A6IDUwJTsqL1xyXG4gICAgIHdpZHRoOiAyMDBweDtcclxuICAgICBtYXJnaW4tdG9wOiAzN3B4O1xyXG4gICAgXHJcbiAgIH0gIFxyXG4gICAjbmV3SXRlbUlucHV0OmZvY3VzIHtcclxuICAgICBvdXRsaW5lOiBub25lOyAgXHJcbiAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIEJMVUU7XHJcbiAgIH1cclxuIC51bmRlcmxpbmUge1xyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGRvZGdlcmJsdWU7XHJcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIGhlaWdodDogMnB4O1xyXG4gICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgbWFyZ2luLXRvcDogLTRweDtcclxuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgdG9wOiAxODVweDtcclxuICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMSk7XHJcbiAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLCAxKTtcclxuICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcclxuICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XHJcbiAgICAgd2lkdGg6IDIwMnB4O1xyXG4gICB9XHJcbiAgICNhZGRCdXR0b24ge1xyXG4gICAgYmFja2dyb3VuZDpsaWdodGdyYXk7XHJcbiAgICB3aWR0aDoxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTgwcHg7XHJcbn1cclxuI3RhYmxlY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XHJcbn1cclxuLm15LWN1c3RvbS1zY3JvbGxiYXIge1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgY2xlYXI6Ym90aDtcclxufVxyXG4jcHJpbnRDb3N0RGl2e1xyXG4gIG1hcmdpbi1sZWZ0OiA2NSU7XHJcbiAgbWFyZ2luLXRvcDogMS41JTtcclxuXHJcbn1cclxuLnByaW50VG90YWxDb3N0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuI3RvdGFsU3VtTGF2ZWx7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDEwMCU7XHJcbn1cclxuI3Rmb290e1xyXG4gIGRpc3BsYXk6bm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/transactionhistory/transactionhistory.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/transactionhistory/transactionhistory.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"pageHeading\">\n  <h5>Transaction History</h5>\n</div>\n<div id = \"tableLabelId\">\n <!-- <form class=\"example-form divpos\">\n    <mat-form-field class=\"example-full-width\">\n      <input id=\"nameinput\"type=\"text\" placeholder=\"Enter item name\" aria-label=\"Assignee\"  matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\"/>\n      <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n        <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n          {{option.name}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </form>   \n  <div class=\"wrapper divpos\" id =\"rate\">\n    <input class=\"input\" placeholder=\"Enter rate\" type=\"text\" id=\"newItemInput\" [(ngModel)]=\"rate\">\n    <span class=\"underline\"></span>\n  </div>\n  <button type=\"button\" class=\"btn btn-primary divpos\" id=\"addButton\" (click)=\"addItem()\">Add</button> -->  \n  <div>\n    <div class=\"datepickerdiv\">\n      <h6>Start Date:</h6>\n    </div>\n    <div class=\"datepickerdiv\">\n      <input [(ngModel)]=\"startDate\" type=\"date\" id=\"startdatepicker\" width=\"276\"/>\n    </div>\n    <div class=\"datepickerdiv\">\n      <h6>End Date:</h6>\n    </div>\n    <div class=\"datepickerdiv\">\n      <input [(ngModel)]=\"endDate\"  type=\"date\" id=\"enddatepicker\" width=\"276\"/>\n    </div>\n    <div  class=\"datepickerdiv\">\n      <!-- <button printSectionId=\"print-section\" printTitle=\"Invoice Details\"   ngxPrint id=\"printdiv\" type=\"button\" class=\"btn btn-primary\" (click)=\"printItem()\">Print</button> --> \n      <!--<button printSectionId=\"print-section\" printTitle=\"Invoice Details\"  id=\"printdiv\" type=\"button\" class=\"btn btn-primary\" (click)=\"printItem()\">New</button>  -->\n      <button class=\"btn btn-primary\" id=\"fetchButton\" type=\"button\" (click)=\"fetchTransactionHistory()\">\n        Fetch\n      </button>\n    </div>\n  </div>\n</div>\n<div class=\"table-wrapper-scroll-y my-custom-scrollbar\">\n  <table class=\"table table-bordered table-striped mb-0\" id=\"tablecontent\" *ngIf=\"!isDetailTransactionInfo\">\n    <thead>\n      <tr>\n        <th *ngFor=\"let head of headerList\" scope=\"col\">{{head}} </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr  *ngFor=\"let item of itemList\" (click)=\"onTableRowClick(item)\" >\n              <th scope=\"row\">{{item.srNum}}</th>\n              <td>{{item.customerId}}</td>\n              <td>{{item.dateToDisplay}}</td>\n              <td>{{item.totalShoppingAmount}}</td>\n              <!--<td (click)=\"removeItem(item.id)\">{{item.remove}}</td> -->\n      </tr>\n    </tbody>\n    \n  </table>\n  <table class=\"table table-bordered table-striped mb-0\" id=\"tablecontent\" *ngIf=\"isDetailTransactionInfo\">\n    <thead>\n      <tr (click)=\"onDetailTableHeaderClick()\">\n        <th *ngFor=\"let head of headerList\" scope=\"col\">{{head}} </th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr  *ngFor=\"let item of itemList\">\n        <th scope=\"row\">{{item.srNum}}</th>\n        <td>{{item.itemName}}</td>\n        <td>{{item.quantity}}</td>\n        <td>{{item.rate}}</td>\n        <td>{{item.cost}}</td>\n        <!--<td (click)=\"removeItem(item.id)\">{{item.remove}}</td> -->\n     </tr>\n\n    </tbody>\n    \n  </table>\n</div>\n<div id=\"printCostDiv\">\n  <div id=\"totalSumDiv\" class=\"printTotalCost\" *ngIf=\"totalTransaction > 0\">\n    <span class=\"badge\" id = \"totalSumLavel\">Total Transaction: {{totalTransaction}}</span>\n  </div>\n <div  class=\"printTotalCost\" *ngIf=\"totalTransaction > 0\">\n    <button class=\"btn btn-primary\" id=\"printdiv\" type=\"button\" onclick=\"printJS({printable: itemToPrint\n  , properties: ['id','customerId', 'shoppingAmount','dateTime'], type: 'json', header:docheading})\" (click)=\"printItem()\">\n      Print\n   </button>\n  </div> \n</div>\n"

/***/ }),

/***/ "./src/app/transactionhistory/transactionhistory.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/transactionhistory/transactionhistory.component.ts ***!
  \********************************************************************/
/*! exports provided: TransactionhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionhistoryComponent", function() { return TransactionhistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_commonutil_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/commonutil.service */ "./src/app/service/commonutil.service.ts");
/* harmony import */ var _service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/urlinfoservice.service */ "./src/app/service/urlinfoservice.service.ts");
/* harmony import */ var _service_httpservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/httpservice.service */ "./src/app/service/httpservice.service.ts");





var TransactionhistoryComponent = /** @class */ (function () {
    function TransactionhistoryComponent(urlinfoservice, httpservice, util) {
        this.urlinfoservice = urlinfoservice;
        this.httpservice = httpservice;
        this.util = util;
        this.itemList = [];
        this.headerList = [];
        this.totalTransaction = 0;
        this.isDetailTransactionInfo = false;
        this.transactionSummary = [];
    }
    TransactionhistoryComponent.prototype.ngAfterViewInit = function () {
        clearRecord();
        var url = this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_GET_URL;
        var sdate = this.util.getDateStringToSendBackEnd(null); // today date;
        url += "?sdate=" + sdate;
        this.httpservice.getApiCall(url, this);
    };
    TransactionhistoryComponent.prototype.ngOnInit = function () {
    };
    TransactionhistoryComponent.prototype.callBackOnApi = function (items) {
        var _this = this;
        var srNum = 1;
        this.itemList = [];
        clearRecord();
        items.forEach(function (item) {
            _this.totalTransaction = _this.totalTransaction + item.totalShoppingAmount;
            var dateToDisplay = _this.util.getDateInStringForView(item.shoppingTime);
            item.srNum = srNum;
            item.dateToDisplay = dateToDisplay;
            srNum = srNum + 1;
        });
        this.headerList = ['Sr.', 'CustomerId', 'Date and Time', 'Shopping Amount'];
        this.transactionSummary = items;
        this.itemList = this.transactionSummary;
    };
    TransactionhistoryComponent.prototype.onDetailTableHeaderClick = function () {
        this.isDetailTransactionInfo = false;
        this.headerList = ['Sr.', 'CustomerId', 'Date and Time', 'Shopping Amount'];
        this.itemList = this.transactionSummary;
    };
    TransactionhistoryComponent.prototype.getDocHeader = function () {
        return "Transaction summary report time: " + this.util.getDateInStringForView(new Date());
    };
    TransactionhistoryComponent.prototype.getDocFooter = function () {
        return [{ id: '-', customerId: '-', shoppingAmount: '-', dateTime: '-' }, { id: '', customerId: 'Total Cost', shoppingAmount: this.totalTransaction, dateTime: '' }];
    };
    TransactionhistoryComponent.prototype.fetchTransactionHistory = function () {
        var sdate = null, edate = null, url, queryParam = "?";
        url = this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_GET_URL;
        this.startDate = this.startDate == "" ? null : this.startDate;
        this.endDate = this.endDate == "" ? null : this.endDate;
        if ((this.startDate == null) && (this.endDate != null)) {
            return;
        }
        if (this.startDate == null) {
            sdate = this.util.getDateStringToSendBackEnd(null);
        }
        else {
            sdate = this.util.getDateStringToSendBackEnd(this.startDate);
        }
        queryParam += "sdate=" + sdate;
        if ((this.endDate == null) && (this.startDate != null)) {
            edate = this.util.getPlustOneDateStringToSendBackEnd(this.startDate);
        }
        if (this.endDate != null) {
            edate = this.util.getPlustOneDateStringToSendBackEnd(this.endDate);
        }
        queryParam += "&edate=" + edate;
        url = this.urlinfoservice.CUSTOMER_SHOPPING_SUMMARY_GET_URL + queryParam;
        this.httpservice.getApiCall(url, this);
    };
    TransactionhistoryComponent.prototype.onTableRowClick = function (item) {
        console.log("on row click:", item);
        this.isDetailTransactionInfo = true;
        this.headerList = ['Sr.', 'Item Name', 'Quantity', 'Rate', 'cost'];
        var itemDetailInfo = item.customerShoppingList;
        var itemDetailInfoList = [];
        var srNum = 1;
        this.itemList = [];
        this.totalTransaction = 0;
        clearRecord();
        itemDetailInfo.forEach(function (detailItem) {
            // this.totalTransaction = this.totalTransaction + item.totalShoppingAmount;
            // let dateToDisplay = this.util.getDateInStringForView(item.shoppingTime);
            item.srNum = srNum;
            // item.dateToDisplay = dateToDisplay;
            //printfunc({srNum:srNum,itemName:detailItem.name,quantity:detailItem.quantity,rate:detailItem.rate,cost:detailItem.cost}, this.getDocHeader(), this.getDocFooter());
            itemDetailInfoList.push({ srNum: srNum, itemName: detailItem.name, quantity: detailItem.quantity, rate: detailItem.rate, cost: detailItem.cost });
            srNum = srNum + 1;
        });
        this.itemList = itemDetailInfoList;
    };
    TransactionhistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admincomp',
            template: __webpack_require__(/*! ./transactionhistory.component.html */ "./src/app/transactionhistory/transactionhistory.component.html"),
            styles: [__webpack_require__(/*! ./transactionhistory.component.css */ "./src/app/transactionhistory/transactionhistory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_urlinfoservice_service__WEBPACK_IMPORTED_MODULE_3__["UrlinfoserviceService"], _service_httpservice_service__WEBPACK_IMPORTED_MODULE_4__["HttpserviceService"],
            _service_commonutil_service__WEBPACK_IMPORTED_MODULE_2__["CommonutilService"]])
    ], TransactionhistoryComponent);
    return TransactionhistoryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Project_Work\Other_learn\eclipse_workspace_learn\springparent\springweb\src\main\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map