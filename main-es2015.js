(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/animation/animation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/animation/animation.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>animation works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/canvas/canvas.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/canvas/canvas.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"canvas-container\">\n  <app-frames\n    (addFrame)=\"addFrame()\" (deleteFrame)=\"deleteFrame($event)\" (selectFrame)=\"selectFrame($event)\" (copyFrame)=\"copyFrame($event)\"\n    [frames]=\"frames\" [canvasSize]=\"canvasSize\" [activeFrame]=\"activeFrame\">\n  </app-frames>\n  <div>\n    <canvas #canvas class=\"canvas\"></canvas>\n\n    <mat-toolbar color=\"primary\">\n      <mat-toolbar-row class=\"size-button-container\">\n        <button [ngClass]=\"{selected: 32 === canvasSize, 'size-button': true}\" (click)=\"size(32)\" mat-raised-button color=\"accent\">32</button>\n        <button [ngClass]=\"{selected: 64 === canvasSize, 'size-button': true}\" (click)=\"size(64)\" mat-raised-button color=\"accent\">64</button>\n        <button [ngClass]=\"{selected: 128 === canvasSize, 'size-button': true}\" (click)=\"size(128)\" mat-raised-button color=\"accent\">128</button>\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/frames/frame/frame.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/frames/frame/frame.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"frame\" data-action=\"select\">\n  <canvas [attr.data-id]=\"index\" data-action=\"select\" class=\"canvas\" #canvas></canvas>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/frames/frames.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/frames/frames.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div (click)=\"chooseEvent($event)\" class=\"frames\">\n  <div cdkDropList class=\"frames-list\" (cdkDropListDropped)=\"drop($event)\">\n    <div data-action=\"select\" [attr.data-id]=\"i\" class=\"frames-box\" [ngClass]=\"{selected: i === activeFrame}\" *ngFor=\"let frame of frames; let i = index\" cdkDrag>\n      <app-frame [canvasSize]=\"canvasSize\" [frame]=\"frame\" [index]=\"i\"></app-frame>\n      <div data-action=\"select\" [attr.data-id]=\"i\" class=\"frames-number\">{{i + 1}}</div>\n      <div *ngIf=\"frames.length > 1\" data-action=\"delete\" [attr.data-id]=\"i\" class=\"frames-delete\"></div>\n      <div data-action=\"copy\" [attr.data-id]=\"i\" class=\"frames-copy\"></div>\n      <div *ngIf=\"frames.length > 1\" cdkDragHandle class=\"frames-drag\"></div>\n    </div>\n  </div>\n  <button data-action=\"add-frame\" class=\"frames-btn\" mat-raised-button color=\"primary\">Add new frame</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\n  <h1 class=\"header-title\">Piskel clone</h1>\n  <p class=\"header-text\">Create animations in your browser.</p>\n  <img src=\"https://www.piskelapp.com/static/resources/home/features/feature-live-preview.gif\" alt=\"animation\">\n</div>\n<div class=\"main\">\n  <button class=\"main-button\" mat-raised-button color=\"primary\" routerLink=\"/app\">Create animations</button>\n  <button class=\"main-button\" mat-raised-button color=\"primary\">Sing Up</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tools/tools.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tools/tools.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tools-container\">\n  <mat-toolbar (click)=\"setToolOptions($event)\" class=\"tools\" color=\"primary\">\n    <mat-toolbar-row matTooltip=\"Pen size from 1 to 4 pixel\" class=\"tools-size\">\n      <div [ngClass]=\"{selected: 1 === currentSize}\" class=\"tools-size__item tools-size__item-one\" data-size=\"1\">\n      </div>\n      <div [ngClass]=\"{selected: 2 === currentSize}\" class=\"tools-size__item tools-size__item-two\" data-size=\"2\">\n      </div>\n      <div [ngClass]=\"{selected: 3 === currentSize}\" class=\"tools-size__item tools-size__item-three\" data-size=\"3\">\n      </div>\n      <div [ngClass]=\"{selected: 4 === currentSize}\" class=\"tools-size__item tools-size__item-four\" data-size=\"4\">\n      </div>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <button  [ngClass]=\"{selected: 'pen' === currentTool}\" matTooltip=\"Pen tool\" class=\"tool-icon tool-icon-pen\" data-tool=\"pen\">\n      </button>\n      <span class=\"spacer\"></span>\n      <button [ngClass]=\"{selected: 'mirror' === currentTool}\" matTooltip=\"Vertical mirror tool\" class=\"tool-icon tool-icon-mirror\" data-tool=\"mirror\">\n      </button>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <button [ngClass]=\"{selected: 'bucket' === currentTool}\" matTooltip=\"Paint bucket tool\" class=\"tool-icon tool-icon-bucket\" data-tool=\"bucket\">\n      </button>\n      <span class=\"spacer\"></span>\n      <button [ngClass]=\"{selected: 'swapcolor' === currentTool}\" matTooltip=\"Paint all pixel in same color\" class=\"tool-icon tool-icon-colorswap\" data-tool=\"swapcolor\">\n      </button>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <button [ngClass]=\"{selected: 'eraser' === currentTool}\" matTooltip=\"Eraser tool\" class=\"tool-icon tool-icon-eraser\" data-tool=\"eraser\">\n      </button>\n      <span class=\"spacer\"></span>\n      <button [ngClass]=\"{selected: 'stroke' === currentTool}\" matTooltip=\"Stroke tool\" class=\"tool-icon tool-icon-stroke\" data-tool=\"stroke\">\n      </button>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <button [ngClass]=\"{selected: 'colorpicker' === currentTool}\" matTooltip=\"Color picker\" class=\"tool-icon tool-icon-colorpicker\" data-tool=\"colorpicker\">\n      </button>\n    </mat-toolbar-row>\n\n    <mat-toolbar-row>\n      <input type=\"color\" #primaryColorRef class=\"field-radio\" (change)=\"setColor('primary')\">\n      <span class=\"spacer\"></span>\n      <input type=\"color\" #secondaryColorRef class=\"field-radio\" (change)=\"setColor('secondary')\">\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <app-canvas\n    (colorChange)=\"changeColor($event)\"\n    [primaryColor]=\"primaryColor\"\n    [secondaryColor]=\"secondaryColor\"\n    [currentTool]=\"currentTool\"\n    [currentSize]=\"currentSize\"\n    [colorPrimaryInput]=\"primaryColorRef\"\n  ></app-canvas>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/animation/animation.component.scss":
/*!****************************************************!*\
  !*** ./src/app/animation/animation.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hdGlvbi9hbmltYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/animation/animation.component.ts":
/*!**************************************************!*\
  !*** ./src/app/animation/animation.component.ts ***!
  \**************************************************/
/*! exports provided: AnimationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationComponent", function() { return AnimationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnimationComponent = class AnimationComponent {
    constructor() { }
    ngOnInit() {
    }
};
AnimationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/animation/animation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./animation.component.scss */ "./src/app/animation/animation.component.scss")).default]
    })
], AnimationComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/tools/tools.component.ts");





const routes = [
    { path: '', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: 'app', component: _tools_tools_component__WEBPACK_IMPORTED_MODULE_4__["ToolsComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'piskel-clone';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/canvas/canvas.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _tools_tools_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tools/tools.component */ "./src/app/tools/tools.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _frames_frames_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./frames/frames.component */ "./src/app/frames/frames.component.ts");
/* harmony import */ var _frames_frame_frame_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./frames/frame/frame.component */ "./src/app/frames/frame/frame.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _animation_animation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./animation/animation.component */ "./src/app/animation/animation.component.ts");














let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_6__["CanvasComponent"],
            _tools_tools_component__WEBPACK_IMPORTED_MODULE_8__["ToolsComponent"],
            _frames_frames_component__WEBPACK_IMPORTED_MODULE_10__["FramesComponent"],
            _frames_frame_frame_component__WEBPACK_IMPORTED_MODULE_11__["FrameComponent"],
            _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_12__["LandingPageComponent"],
            _animation_animation_component__WEBPACK_IMPORTED_MODULE_13__["AnimationComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/canvas/canvas.component.scss":
/*!**********************************************!*\
  !*** ./src/app/canvas/canvas.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".canvas-container {\n  display: flex;\n  justify-content: space-between;\n}\n.canvas-container canvas {\n  width: 856px;\n  height: 856px;\n  margin-top: 10px;\n  background-color: #FFFFFF;\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n}\n.canvas-container .size-button {\n  margin-right: 10px;\n}\n.canvas-container .selected {\n  border: 3px solid #529de1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FudmFzL0M6XFx3ZWJcXFJTc2Nob29sXFxnbGVidmV0cm92LVJTMjAxOVEzXFxwaXNrZWwtY2xvbmUvc3JjXFxhcHBcXGNhbnZhc1xcY2FudmFzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FDQ0Y7QURDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtFQUdBLHdDQUFBO01BQUEsaUNBQUE7TUFBQSwwQkFBQTtBQ0RKO0FESUU7RUFDRSxrQkFBQTtBQ0ZKO0FES0U7RUFDRSx5QkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY2FudmFzL2NhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYW52YXMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgY2FudmFzIHtcclxuICAgIHdpZHRoOiA4NTZweDtcclxuICAgIGhlaWdodDogODU2cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xyXG4gIH1cclxuXHJcbiAgLnNpemUtYnV0dG9uIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcblxyXG4gIC5zZWxlY3RlZCB7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCAjNTI5ZGUxO1xyXG4gIH1cclxufVxyXG4iLCIuY2FudmFzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5jYW52YXMtY29udGFpbmVyIGNhbnZhcyB7XG4gIHdpZHRoOiA4NTZweDtcbiAgaGVpZ2h0OiA4NTZweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xufVxuLmNhbnZhcy1jb250YWluZXIgLnNpemUtYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLmNhbnZhcy1jb250YWluZXIgLnNlbGVjdGVkIHtcbiAgYm9yZGVyOiAzcHggc29saWQgIzUyOWRlMTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/canvas/canvas.component.ts":
/*!********************************************!*\
  !*** ./src/app/canvas/canvas.component.ts ***!
  \********************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _tools_pen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/pen.service */ "./src/app/canvas/tools/pen.service.ts");
/* harmony import */ var _tools_mirror_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tools/mirror.service */ "./src/app/canvas/tools/mirror.service.ts");
/* harmony import */ var _tools_bucket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tools/bucket.service */ "./src/app/canvas/tools/bucket.service.ts");
/* harmony import */ var _tools_eraser_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tools/eraser.service */ "./src/app/canvas/tools/eraser.service.ts");
/* harmony import */ var _tools_swapcolor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tools/swapcolor.service */ "./src/app/canvas/tools/swapcolor.service.ts");
/* harmony import */ var _tools_colorpicker_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tools/colorpicker.service */ "./src/app/canvas/tools/colorpicker.service.ts");
/* harmony import */ var _tools_stroke_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tools/stroke.service */ "./src/app/canvas/tools/stroke.service.ts");
/* harmony import */ var _tools_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tools/common */ "./src/app/canvas/tools/common.ts");












const FIRST_CANVAS_SIZE = 32;
const CANVAS_STYLE_SIZE = 856;
let CanvasComponent = class CanvasComponent {
    constructor(penService, mirrorService, eraserService, swapcolorService, colorpickerService, strokeService, bucketService, cdr) {
        this.penService = penService;
        this.mirrorService = mirrorService;
        this.eraserService = eraserService;
        this.swapcolorService = swapcolorService;
        this.colorpickerService = colorpickerService;
        this.strokeService = strokeService;
        this.bucketService = bucketService;
        this.cdr = cdr;
        this.img = new Image();
        this.canvasSize = FIRST_CANVAS_SIZE;
        this.activeFrame = 0;
        this.frames = [];
        this.tools = {
            pen: this.penService.pen,
            mirror: this.mirrorService.mirror,
            bucket: this.bucketService.floodFill,
            eraser: this.eraserService.eraser,
            swapcolor: this.swapcolorService.swapcolor,
            stroke: this.strokeService,
            colorpicker: this.colorpickerService.colorpicker
        };
        this.colorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    setColor(color) {
        this.colorChange.emit(color);
    }
    size(num) {
        const canvas = this.canvas.nativeElement;
        if (num === this.canvasSize) {
            return;
        }
        this.canvasSize = canvas.width = canvas.height = num;
        const url = canvas.toDataURL();
        this.frames = this.frames.map(elem => url);
    }
    initEvent() {
        this.mouseMove$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.canvas.nativeElement, 'mousemove');
        this.mouseUp$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.canvas.nativeElement, 'mouseup');
        this.mouseDown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.canvas.nativeElement, 'mousedown');
        this.mouseLeave$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.canvas.nativeElement, 'mouseleave');
    }
    mouseCenter(cor) {
        return Math.floor(cor / (CANVAS_STYLE_SIZE / this.canvasSize));
    }
    initDraw() {
        return this.mouseDown$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(down => {
            this.draw(down);
            return this.mouseMove$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((e) => {
                return {
                    x: this.mouseCenter(e.offsetX),
                    y: this.mouseCenter(e.offsetY)
                };
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.mouseUp$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.mouseLeave$));
        }));
    }
    draw(data) {
        let arrCors;
        if (data.length) {
            const [from, to] = data;
            arrCors = Object(_tools_common__WEBPACK_IMPORTED_MODULE_11__["draw"])(from.x, from.y, to.x, to.y);
        }
        else {
            const x = this.mouseCenter(data.offsetX);
            const y = this.mouseCenter(data.offsetY);
            arrCors = Object(_tools_common__WEBPACK_IMPORTED_MODULE_11__["draw"])(x, y, x, y);
        }
        if (this.currentTool === 'colorpicker') {
            this.tools[this.currentTool](arrCors, this.ctx)
                .subscribe(color => this.setColor(color));
        }
        if (this.currentTool === 'stroke') {
            data.length ? this.tools[this.currentTool].drawStroke(arrCors, this.ctx, this.currentSize, this.primaryColor, this.canvasSize) :
                this.tools[this.currentTool].beginStroke(arrCors, this.ctx, this.currentSize, this.primaryColor, this.frames[this.activeFrame]);
        }
        if (this.tools[this.currentTool] &&
            this.currentTool !== 'colorpicker' &&
            this.currentTool !== 'stroke') {
            this.tools[this.currentTool](arrCors, this.ctx, this.currentSize, this.primaryColor, this.canvasSize);
        }
    }
    saveImg() {
        const img = this.canvas.nativeElement.toDataURL();
        this.frames[this.activeFrame] = img;
        this.img.src = img;
        this.frames = [...this.frames];
        this.cdr.detectChanges();
    }
    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvasSize, this.canvasSize);
    }
    addFrame() {
        this.activeFrame = this.frames.length;
        this.clearCanvas();
        this.saveImg();
    }
    deleteFrame(obj) {
        const { num } = obj;
        if (this.frames.length > 1) {
            this.frames = [...this.frames.slice(0, num), ...this.frames.slice(num + 1)];
            if (this.activeFrame === num) {
                this.selectFrame({ num: num - 1, boo: false });
            }
        }
    }
    copyFrame(obj) {
        const { num } = obj;
        this.frames = [...this.frames.slice(0, num + 1), this.frames[num], ...this.frames.slice(num + 1)];
    }
    selectFrame(obj) {
        const { num, boo } = obj;
        if (num === this.activeFrame && boo) {
            return;
        }
        this.activeFrame = num;
        this.clearCanvas();
        this.img.src = this.frames[this.activeFrame];
        this.img.onload = () => {
            this.ctx.drawImage(this.img, 0, 0);
        };
    }
    ngOnInit() {
        this.saveImg();
        this.canvas.nativeElement.width = this.canvas.nativeElement.height = this.canvasSize;
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.initEvent();
        this.initDraw().subscribe((data) => {
            this.draw(data);
        });
        this.mouseUp$
            .subscribe(data => this.saveImg());
    }
    ngOnDestroy() {
    }
};
CanvasComponent.ctorParameters = () => [
    { type: _tools_pen_service__WEBPACK_IMPORTED_MODULE_4__["PenService"] },
    { type: _tools_mirror_service__WEBPACK_IMPORTED_MODULE_5__["MirrorService"] },
    { type: _tools_eraser_service__WEBPACK_IMPORTED_MODULE_7__["EraserService"] },
    { type: _tools_swapcolor_service__WEBPACK_IMPORTED_MODULE_8__["SwapcolorService"] },
    { type: _tools_colorpicker_service__WEBPACK_IMPORTED_MODULE_9__["ColorpickerService"] },
    { type: _tools_stroke_service__WEBPACK_IMPORTED_MODULE_10__["StrokeService"] },
    { type: _tools_bucket_service__WEBPACK_IMPORTED_MODULE_6__["BucketService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true })
], CanvasComponent.prototype, "canvas", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CanvasComponent.prototype, "primaryColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CanvasComponent.prototype, "secondaryColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CanvasComponent.prototype, "currentTool", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CanvasComponent.prototype, "currentSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CanvasComponent.prototype, "colorPrimaryInput", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CanvasComponent.prototype, "colorChange", void 0);
CanvasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-canvas',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./canvas.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/canvas/canvas.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./canvas.component.scss */ "./src/app/canvas/canvas.component.scss")).default]
    })
], CanvasComponent);



/***/ }),

/***/ "./src/app/canvas/tools/bucket.service.ts":
/*!************************************************!*\
  !*** ./src/app/canvas/tools/bucket.service.ts ***!
  \************************************************/
/*! exports provided: BucketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BucketService", function() { return BucketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/app/canvas/tools/common.ts");




let BucketService = class BucketService {
    floodFill(corArray, ctx, size, color, canvasSize) {
        const rgbColor = Object(_common__WEBPACK_IMPORTED_MODULE_3__["hexToRgba"])(color);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(corArray)
            .subscribe(cors => {
            const [startX, startY] = cors;
            const dstImg = ctx.getImageData(0, 0, canvasSize, canvasSize);
            const dstData = dstImg.data;
            const startPos = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPixelPos"])(startX, startY, canvasSize);
            const startColor = {
                r: dstData[startPos],
                g: dstData[startPos + 1],
                b: dstData[startPos + 2],
                a: dstData[startPos + 3]
            };
            if (Object(_common__WEBPACK_IMPORTED_MODULE_3__["matchColor"])(rgbColor, startColor)) {
                return;
            }
            const todo = [[startX, startY]];
            while (todo.length) {
                const pos = todo.pop();
                const x = pos[0];
                let y = pos[1];
                let currentPos = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPixelPos"])(x, y, canvasSize);
                while ((y-- >= 0) && Object(_common__WEBPACK_IMPORTED_MODULE_3__["matchStartColor"])(dstData, currentPos, startColor)) {
                    currentPos -= canvasSize * 4;
                }
                currentPos += canvasSize * 4;
                ++y;
                let reachLeft = false;
                let reachRight = false;
                while ((y++ < canvasSize - 1) && Object(_common__WEBPACK_IMPORTED_MODULE_3__["matchStartColor"])(dstData, currentPos, startColor)) {
                    Object(_common__WEBPACK_IMPORTED_MODULE_3__["colorPixel"])(dstData, currentPos, rgbColor);
                    if (x > 0) {
                        if (Object(_common__WEBPACK_IMPORTED_MODULE_3__["matchStartColor"])(dstData, currentPos - 4, startColor)) {
                            if (!reachLeft) {
                                todo.push([x - 1, y]);
                                reachLeft = true;
                            }
                        }
                        else if (reachLeft) {
                            reachLeft = false;
                        }
                    }
                    if (x < canvasSize - 1) {
                        if (Object(_common__WEBPACK_IMPORTED_MODULE_3__["matchStartColor"])(dstData, currentPos + 4, startColor)) {
                            if (!reachRight) {
                                todo.push([x + 1, y]);
                                reachRight = true;
                            }
                        }
                        else if (reachRight) {
                            reachRight = false;
                        }
                    }
                    currentPos += canvasSize * 4;
                }
            }
            ctx.putImageData(dstImg, 0, 0);
        });
    }
};
BucketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BucketService);



/***/ }),

/***/ "./src/app/canvas/tools/colorpicker.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/canvas/tools/colorpicker.service.ts ***!
  \*****************************************************/
/*! exports provided: ColorpickerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorpickerService", function() { return ColorpickerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/app/canvas/tools/common.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const PEN_SIZE = 1;
let ColorpickerService = class ColorpickerService {
    colorpicker(corArray, ctx) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(corArray)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(cors => {
            const [x, y] = cors;
            const { data } = ctx.getImageData(x, y, PEN_SIZE, PEN_SIZE);
            const [r, g, b] = data;
            return Object(_common__WEBPACK_IMPORTED_MODULE_2__["rgbToHex"])(r, g, b);
        }));
    }
};
ColorpickerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ColorpickerService);



/***/ }),

/***/ "./src/app/canvas/tools/common.ts":
/*!****************************************!*\
  !*** ./src/app/canvas/tools/common.ts ***!
  \****************************************/
/*! exports provided: componentToHex, rgbToHex, hexToRgba, getPixelPos, matchStartColor, matchColor, colorPixel, pen, draw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentToHex", function() { return componentToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbToHex", function() { return rgbToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hexToRgba", function() { return hexToRgba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPixelPos", function() { return getPixelPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchStartColor", function() { return matchStartColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchColor", function() { return matchColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorPixel", function() { return colorPixel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pen", function() { return pen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "draw", function() { return draw; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}
function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
function hexToRgba(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        a: 255
    } : null;
}
function getPixelPos(x, y, canvasSize) {
    return (y * canvasSize + x) * 4;
}
function matchStartColor(data, pos, startColor) {
    return (data[pos] === startColor.r &&
        data[pos + 1] === startColor.g &&
        data[pos + 2] === startColor.b &&
        data[pos + 3] === startColor.a);
}
function matchColor(color, startColor) {
    return (color.r === startColor.r &&
        color.g === startColor.g &&
        color.b === startColor.b &&
        color.a === startColor.a);
}
function colorPixel(data, pos, color) {
    data[pos] = color.r || 0;
    data[pos + 1] = color.g || 0;
    data[pos + 2] = color.b || 0;
    data[pos + 3] = color.hasOwnProperty('a') ? color.a : 255;
}
function pen(x, y, ctx, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, size, size);
}
function draw(x1, y1, x2, y2) {
    let dx1;
    let dy1;
    let px;
    let py;
    let xe;
    let ye;
    let i;
    let x;
    let y;
    let dx;
    let dy;
    const corArr = [];
    dx = x2 - x1;
    dy = y2 - y1;
    dx1 = Math.abs(dx);
    dy1 = Math.abs(dy);
    px = 2 * dy1 - dx1;
    py = 2 * dx1 - dy1;
    if (dy1 <= dx1) {
        if (dx >= 0) {
            x = x1;
            y = y1;
            xe = x2;
        }
        else {
            x = x2;
            y = y2;
            xe = x1;
        }
        corArr.push([x, y]);
        for (i = 0; x < xe; i++) {
            x = x + 1;
            if (px < 0) {
                px = px + 2 * dy1;
            }
            else {
                if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                    y = y + 1;
                }
                else {
                    y = y - 1;
                }
                px = px + 2 * (dy1 - dx1);
            }
            corArr.push([x, y]);
        }
    }
    else {
        if (dy >= 0) {
            x = x1;
            y = y1;
            ye = y2;
        }
        else {
            x = x2;
            y = y2;
            ye = y1;
        }
        corArr.push([x, y]);
        for (i = 0; y < ye; i++) {
            y = y + 1;
            if (py <= 0) {
                py = py + 2 * dx1;
            }
            else {
                if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
                    x = x + 1;
                }
                else {
                    x = x - 1;
                }
                py = py + 2 * (dx1 - dy1);
            }
            corArr.push([x, y]);
        }
    }
    return corArr;
}


/***/ }),

/***/ "./src/app/canvas/tools/eraser.service.ts":
/*!************************************************!*\
  !*** ./src/app/canvas/tools/eraser.service.ts ***!
  \************************************************/
/*! exports provided: EraserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EraserService", function() { return EraserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let EraserService = class EraserService {
    eraser(corArray, ctx, size) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(corArray)
            .subscribe(cors => {
            const [x, y] = cors;
            ctx.clearRect(x, y, size, size);
        });
    }
};
EraserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EraserService);



/***/ }),

/***/ "./src/app/canvas/tools/mirror.service.ts":
/*!************************************************!*\
  !*** ./src/app/canvas/tools/mirror.service.ts ***!
  \************************************************/
/*! exports provided: MirrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MirrorService", function() { return MirrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _pen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pen.service */ "./src/app/canvas/tools/pen.service.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./src/app/canvas/tools/common.ts");





let MirrorService = class MirrorService {
    constructor(penService) {
        this.penService = penService;
    }
    mirror(corArray, ctx, size, color, canvasSize) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(corArray)
            .subscribe(cors => {
            const [x, y] = cors;
            Object(_common__WEBPACK_IMPORTED_MODULE_4__["pen"])(x, y, ctx, size, color);
            Object(_common__WEBPACK_IMPORTED_MODULE_4__["pen"])(canvasSize - x, y, ctx, size, color);
        });
    }
};
MirrorService.ctorParameters = () => [
    { type: _pen_service__WEBPACK_IMPORTED_MODULE_3__["PenService"] }
];
MirrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MirrorService);



/***/ }),

/***/ "./src/app/canvas/tools/pen.service.ts":
/*!*********************************************!*\
  !*** ./src/app/canvas/tools/pen.service.ts ***!
  \*********************************************/
/*! exports provided: PenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PenService", function() { return PenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/app/canvas/tools/common.ts");




let PenService = class PenService {
    pen(corArray, ctx, size, color) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(corArray)
            .subscribe(cors => {
            const [x, y] = cors;
            Object(_common__WEBPACK_IMPORTED_MODULE_3__["pen"])(x, y, ctx, size, color);
        });
    }
};
PenService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PenService);



/***/ }),

/***/ "./src/app/canvas/tools/stroke.service.ts":
/*!************************************************!*\
  !*** ./src/app/canvas/tools/stroke.service.ts ***!
  \************************************************/
/*! exports provided: StrokeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrokeService", function() { return StrokeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/app/canvas/tools/common.ts");




let StrokeService = class StrokeService {
    constructor() {
        this.beginStroke = this.beginStroke.bind(this);
        this.drawStroke = this.drawStroke.bind(this);
    }
    beginStroke(corArray, ctx, size, color, frame) {
        this.img = new Image();
        this.img.src = frame;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(corArray)
            .subscribe(cors => {
            const [x, y] = cors;
            this.starX = x;
            this.starY = y;
            Object(_common__WEBPACK_IMPORTED_MODULE_3__["pen"])(x, y, ctx, size, color);
        });
    }
    drawStroke(corArray, ctx, size, color, canvasSize) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(corArray)
            .subscribe(cors => {
            ctx.clearRect(0, 0, canvasSize, canvasSize);
            ctx.drawImage(this.img, 0, 0);
            const [x, y] = cors;
            const corsArr = Object(_common__WEBPACK_IMPORTED_MODULE_3__["draw"])(this.starX, this.starY, x, y);
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(corsArr)
                .subscribe(coordinates => {
                const [endX, endY] = coordinates;
                Object(_common__WEBPACK_IMPORTED_MODULE_3__["pen"])(endX, endY, ctx, size, color);
            });
        });
    }
};
StrokeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StrokeService);



/***/ }),

/***/ "./src/app/canvas/tools/swapcolor.service.ts":
/*!***************************************************!*\
  !*** ./src/app/canvas/tools/swapcolor.service.ts ***!
  \***************************************************/
/*! exports provided: SwapcolorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwapcolorService", function() { return SwapcolorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common */ "./src/app/canvas/tools/common.ts");




let SwapcolorService = class SwapcolorService {
    constructor() { }
    swapcolor(corArray, ctx, size, color, canvasSize) {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(corArray)
            .subscribe(cors => {
            const [startX, startY] = cors;
            const img = ctx.getImageData(0, 0, canvasSize, canvasSize);
            const { data } = img;
            const startPos = Object(_common__WEBPACK_IMPORTED_MODULE_3__["getPixelPos"])(startX, startY, canvasSize);
            const startColor = {
                r: data[startPos],
                g: data[startPos + 1],
                b: data[startPos + 2],
                a: data[startPos + 3]
            };
            const { r, g, b, a } = startColor;
            const selectColor = Object(_common__WEBPACK_IMPORTED_MODULE_3__["hexToRgba"])(color);
            if (r === selectColor.r && g === selectColor.g && b === selectColor.b && a === selectColor.a) {
                return;
            }
            for (let i = 0; i < data.length; i += 4) {
                if (r === data[i] && g === data[i + 1] && b === data[i + 2] && a === data[i + 3]) {
                    data[i] = selectColor.r;
                    data[i + 1] = selectColor.g;
                    data[i + 2] = selectColor.b;
                    data[i + 3] = selectColor.a;
                }
            }
            ctx.putImageData(img, 0, 0);
        });
    }
};
SwapcolorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SwapcolorService);



/***/ }),

/***/ "./src/app/frames/frame/frame.component.scss":
/*!***************************************************!*\
  !*** ./src/app/frames/frame/frame.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".canvas {\n  width: 100px;\n  height: 100px;\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n}\n\nimg {\n  -ms-interpolation-mode: nearest-neighbor;\n      image-rendering: -moz-crisp-edges;\n      image-rendering: pixelated;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhbWVzL2ZyYW1lL0M6XFx3ZWJcXFJTc2Nob29sXFxnbGVidmV0cm92LVJTMjAxOVEzXFxwaXNrZWwtY2xvbmUvc3JjXFxhcHBcXGZyYW1lc1xcZnJhbWVcXGZyYW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mcmFtZXMvZnJhbWUvZnJhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO01BQUEsaUNBQUE7TUFBQSwwQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0NBQUE7TUFBQSxpQ0FBQTtNQUFBLDBCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mcmFtZXMvZnJhbWUvZnJhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FudmFzIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcclxufVxyXG5cclxuaW1nIHtcclxuICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcclxufVxyXG4iLCIuY2FudmFzIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDtcbn1cblxuaW1nIHtcbiAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/frames/frame/frame.component.ts":
/*!*************************************************!*\
  !*** ./src/app/frames/frame/frame.component.ts ***!
  \*************************************************/
/*! exports provided: FrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameComponent", function() { return FrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FrameComponent = class FrameComponent {
    constructor() {
        this.img = new Image();
    }
    set canvasSize(size) {
        if (size === this.curSize) {
            return;
        }
        this.curSize = this.canvas.nativeElement.width = this.canvas.nativeElement.height = size;
    }
    ngOnInit() {
        const draw = () => {
            this.ctx.drawImage(this.img, 0, 0);
        };
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.img.onload = draw;
        this.img.src = this.frame;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FrameComponent.prototype, "index", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FrameComponent.prototype, "frame", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FrameComponent.prototype, "canvasSize", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', { static: true })
], FrameComponent.prototype, "canvas", void 0);
FrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-frame',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./frame.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/frames/frame/frame.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./frame.component.scss */ "./src/app/frames/frame/frame.component.scss")).default]
    })
], FrameComponent);



/***/ }),

/***/ "./src/app/frames/frames.component.scss":
/*!**********************************************!*\
  !*** ./src/app/frames/frames.component.scss ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".frames {\n  padding: 10px;\n}\n.frames-btn {\n  margin-top: 10px;\n}\n.frames-list {\n  width: 110px;\n  max-width: 100%;\n  border: solid 1px #ccc;\n  min-height: 60px;\n  display: block;\n  background: white;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.frames-box {\n  position: relative;\n  padding: 5px;\n  border-bottom: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  box-sizing: border-box;\n  background: white;\n  font-size: 14px;\n}\n.frames-number {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 5px;\n  font-weight: bold;\n}\n.frames-delete {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  background-color: #3f3f3f;\n  background-image: url('frame-recyclebin-white.png');\n  cursor: pointer;\n  opacity: 0;\n}\n.frames-delete:hover {\n  opacity: 1;\n}\n.frames-copy {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 30px;\n  height: 30px;\n  background-color: #3f3f3f;\n  background-image: url('frame-duplicate-white.png');\n  cursor: pointer;\n  opacity: 0;\n}\n.frames-copy:hover {\n  opacity: 1;\n}\n.frames-drag {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  background-color: #3f3f3f;\n  background-image: url('frame-dragndrop-white.png');\n  cursor: move;\n  opacity: 0;\n}\n.frames-drag:hover {\n  opacity: 1;\n}\n.frames .selected {\n  border: 3px solid #ff4081;\n}\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-box:last-child {\n  border: none;\n}\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.example-custom-placeholder {\n  background: #ccc;\n  border: dotted 3px #999;\n  min-height: 60px;\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJhbWVzL0M6XFx3ZWJcXFJTc2Nob29sXFxnbGVidmV0cm92LVJTMjAxOVEzXFxwaXNrZWwtY2xvbmUvc3JjXFxhcHBcXGZyYW1lc1xcZnJhbWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9mcmFtZXMvZnJhbWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGO0FEQ0U7RUFDRSxnQkFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNESjtBRElFO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FES0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNISjtBREtNO0VBQ0UsVUFBQTtBQ0hSO0FET0U7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtEQUFBO0VBQ0EsZUFBQTtFQUVBLFVBQUE7QUNOSjtBRFFJO0VBQ0UsVUFBQTtBQ05OO0FEVUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtEQUFBO0VBQ0EsWUFBQTtFQUVBLFVBQUE7QUNUSjtBRFdJO0VBQ0UsVUFBQTtBQ1ROO0FEYUU7RUFDRSx5QkFBQTtBQ1hKO0FEZUE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUhBQUE7QUNaRjtBRGlCQTtFQUNFLHNEQUFBO0FDZEY7QURpQkE7RUFDRSxZQUFBO0FDZEY7QURpQkE7RUFDRSxzREFBQTtBQ2RGO0FEaUJBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0RBQUE7QUNkRiIsImZpbGUiOiJzcmMvYXBwL2ZyYW1lcy9mcmFtZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJhbWVzIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuICAmLWJ0biB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJi1saXN0IHtcclxuICAgIHdpZHRoOiAxMTBweDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XHJcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAmLWJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggI2NjYztcclxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgJi1udW1iZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgJi1kZWxldGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9mcmFtZS9mcmFtZS1yZWN5Y2xlYmluLXdoaXRlLnBuZyk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtY29weSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmM2YzZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2ljb25zL2ZyYW1lL2ZyYW1lLWR1cGxpY2F0ZS13aGl0ZS5wbmcpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLWRyYWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmM2YzZjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2ljb25zL2ZyYW1lL2ZyYW1lLWRyYWduZHJvcC13aGl0ZS5wbmcpO1xyXG4gICAgY3Vyc29yOiBtb3ZlO1xyXG5cclxuICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgI2ZmNDA4MTtcclxuICB9XHJcbn1cclxuXHJcbi5jZGstZHJhZy1wcmV2aWV3IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcclxuICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufVxyXG5cclxuLmV4YW1wbGUtY3VzdG9tLXBsYWNlaG9sZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjY2NjO1xyXG4gIGJvcmRlcjogZG90dGVkIDNweCAjOTk5O1xyXG4gIG1pbi1oZWlnaHQ6IDYwcHg7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcbiIsIi5mcmFtZXMge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuLmZyYW1lcy1idG4ge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmZyYW1lcy1saXN0IHtcbiAgd2lkdGg6IDExMHB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmZyYW1lcy1ib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDVweDtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZnJhbWVzLW51bWJlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmZyYW1lcy1kZWxldGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjNmM2Y7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2ljb25zL2ZyYW1lL2ZyYW1lLXJlY3ljbGViaW4td2hpdGUucG5nKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xufVxuLmZyYW1lcy1kZWxldGU6aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuLmZyYW1lcy1jb3B5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9mcmFtZS9mcmFtZS1kdXBsaWNhdGUtd2hpdGUucG5nKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xufVxuLmZyYW1lcy1jb3B5OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5mcmFtZXMtZHJhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2YzZjNmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9mcmFtZS9mcmFtZS1kcmFnbmRyb3Atd2hpdGUucG5nKTtcbiAgY3Vyc29yOiBtb3ZlO1xuICBvcGFjaXR5OiAwO1xufVxuLmZyYW1lcy1kcmFnOmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbi5mcmFtZXMgLnNlbGVjdGVkIHtcbiAgYm9yZGVyOiAzcHggc29saWQgI2ZmNDA4MTtcbn1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59XG5cbi5leGFtcGxlLWN1c3RvbS1wbGFjZWhvbGRlciB7XG4gIGJhY2tncm91bmQ6ICNjY2M7XG4gIGJvcmRlcjogZG90dGVkIDNweCAjOTk5O1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/frames/frames.component.ts":
/*!********************************************!*\
  !*** ./src/app/frames/frames.component.ts ***!
  \********************************************/
/*! exports provided: FramesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FramesComponent", function() { return FramesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");



let FramesComponent = class FramesComponent {
    constructor() {
        this.actions = {
            delete: (obj) => this.deleteFrame.emit(obj),
            copy: (obj) => this.copyFrame.emit(obj),
            select: (obj) => this.selectFrame.emit(obj),
            add: () => this.addFrame.emit()
        };
        this.addFrame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deleteFrame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectFrame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.copyFrame = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.frames, event.previousIndex, event.currentIndex);
        this.actions.select({ num: event.currentIndex, boo: false });
    }
    chooseEvent(e) {
        if (e.target.innerText === 'Add new frame') {
            this.actions.add();
            return;
        }
        const id = parseInt(e.target.dataset.id, 10);
        const action = e.target.dataset.action;
        if (id !== undefined && action) {
            this.actions[action]({ num: id, boo: true });
        }
    }
    ngOnChanges(changes) {
        // console.log(changes);
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FramesComponent.prototype, "frames", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FramesComponent.prototype, "canvasSize", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FramesComponent.prototype, "activeFrame", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FramesComponent.prototype, "addFrame", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FramesComponent.prototype, "deleteFrame", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FramesComponent.prototype, "selectFrame", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FramesComponent.prototype, "copyFrame", void 0);
FramesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-frames',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./frames.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/frames/frames.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./frames.component.scss */ "./src/app/frames/frames.component.scss")).default]
    })
], FramesComponent);



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1, p {\n  margin: 20px;\n  color: #3f3f3f;\n}\n\n.header {\n  padding: 50px;\n  background-color: #00BFFF;\n}\n\n.main {\n  padding: 50px;\n  background-color: #1f7e9a;\n}\n\n.main-button {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy1wYWdlL0M6XFx3ZWJcXFJTc2Nob29sXFxnbGVidmV0cm92LVJTMjAxOVEzXFxwaXNrZWwtY2xvbmUvc3JjXFxhcHBcXGxhbmRpbmctcGFnZVxcbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUNDRjs7QURFQTtFQUNHLGFBQUE7RUFDQSx5QkFBQTtBQ0NIOztBREVBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSxrQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxLCBwIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgY29sb3I6ICMzZjNmM2Y7XHJcbn1cclxuXHJcbi5oZWFkZXIge1xyXG4gICBwYWRkaW5nOiA1MHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBCRkZGO1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY3ZTlhO1xyXG5cclxuICAmLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcbiIsImgxLCBwIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBjb2xvcjogIzNmM2YzZjtcbn1cblxuLmhlYWRlciB7XG4gIHBhZGRpbmc6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMEJGRkY7XG59XG5cbi5tYWluIHtcbiAgcGFkZGluZzogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFmN2U5YTtcbn1cbi5tYWluLWJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LandingPageComponent = class LandingPageComponent {
    constructor() { }
    ngOnInit() {
    }
};
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./landing-page.component.scss */ "./src/app/landing-page/landing-page.component.scss")).default]
    })
], LandingPageComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm2015/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm2015/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm2015/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm2015/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm2015/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm2015/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm2015/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm2015/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm2015/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm2015/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm2015/tree.js");











































let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ],
        entryComponents: [],
        exports: [
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/tools/tools.component.scss":
/*!********************************************!*\
  !*** ./src/app/tools/tools.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tools {\n  width: 200px;\n  padding: 10px;\n}\n.tools-container {\n  display: flex;\n}\n.tools-size {\n  display: flex;\n  justify-content: center;\n}\n.tools-size__item {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 20px;\n  height: 20px;\n  margin-right: 5px;\n  background-color: #ff4081;\n}\n.tools-size__item-one:before {\n  content: \"\";\n  width: 6px;\n  height: 6px;\n  background-color: #ffffff;\n}\n.tools-size__item-two:before {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  background-color: #ffffff;\n}\n.tools-size__item-three:before {\n  content: \"\";\n  width: 12px;\n  height: 12px;\n  background-color: #ffffff;\n}\n.tools-size__item-four:before {\n  content: \"\";\n  width: 16px;\n  height: 16px;\n  background-color: #ffffff;\n}\n.tools .spacer {\n  flex: 1 1 auto;\n}\n.tools .tool-icon {\n  width: 56px;\n  height: 56px;\n  background-color: #ff4081;\n  background-position: center;\n  border: 0;\n  border-radius: 50%;\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n  box-sizing: border-box;\n}\n.tools .tool-icon-pen {\n  background-image: url('tool-pen.png');\n}\n.tools .tool-icon-mirror {\n  background-image: url('tool-vertical-mirror-pen.png');\n}\n.tools .tool-icon-bucket {\n  background-image: url('tool-paint-bucket.png');\n}\n.tools .tool-icon-colorswap {\n  background-image: url('tool-colorswap.png');\n}\n.tools .tool-icon-colorpicker {\n  background-image: url('tool-colorpicker.png');\n}\n.tools .tool-icon-eraser {\n  background-image: url('tool-eraser.png');\n}\n.tools .tool-icon-stroke {\n  background-image: url('tool-stroke.png');\n}\n.tools .selected {\n  border: 3px solid #529de1;\n}\n.tools .color {\n  border-radius: 100%;\n  width: 56px;\n  height: 56px;\n  border: none;\n  outline: none;\n  -webkit-appearance: none;\n  padding: 0;\n  overflow: hidden;\n}\n.tools .field-radio {\n  width: 56px;\n  padding: 0;\n  height: 56px;\n  border: none;\n  border-radius: 50%;\n  outline: none;\n  -webkit-appearance: none;\n}\n.tools .field-radio::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n.tools .field-radio::-webkit-color-swatch {\n  border: none;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9vbHMvQzpcXHdlYlxcUlNzY2hvb2xcXGdsZWJ2ZXRyb3YtUlMyMDE5UTNcXHBpc2tlbC1jbG9uZS9zcmNcXGFwcFxcdG9vbHNcXHRvb2xzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC90b29scy90b29scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7QURDRTtFQUNFLGFBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDQUo7QURFSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDQU47QURFTTtFQUNFLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDQVI7QURHTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRFI7QURJTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDRlI7QURLTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDSFI7QURRRTtFQUNFLGNBQUE7QUNOSjtBRFNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUhBQUE7RUFDQSxzQkFBQTtBQ1BKO0FEU0k7RUFDRSxxQ0FBQTtBQ1BOO0FEVUk7RUFDRSxxREFBQTtBQ1JOO0FEV0k7RUFDRSw4Q0FBQTtBQ1ROO0FEWUk7RUFDRSwyQ0FBQTtBQ1ZOO0FEYUk7RUFDRSw2Q0FBQTtBQ1hOO0FEY0k7RUFDRSx3Q0FBQTtBQ1pOO0FEZUk7RUFDRSx3Q0FBQTtBQ2JOO0FEaUJFO0VBQ0UseUJBQUE7QUNmSjtBRGtCRTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDaEJKO0FEbUJFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDakJKO0FEb0JFO0VBQ0UsVUFBQTtBQ2xCSjtBRHFCRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ25CSiIsImZpbGUiOiJzcmMvYXBwL3Rvb2xzL3Rvb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xzIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuXHJcbiAgJi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gICYtc2l6ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcclxuXHJcbiAgICAgICYtb25lOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogNnB4O1xyXG4gICAgICAgIGhlaWdodDogNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtdHdvOmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICB3aWR0aDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi10aHJlZTpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtZm91cjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zcGFjZXIge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgfVxyXG5cclxuICAudG9vbC1pY29uIHtcclxuICAgIHdpZHRoOiA1NnB4O1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAmLXBlbiB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvdG9vbHMvdG9vbC1wZW4ucG5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICYtbWlycm9yIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pY29ucy90b29scy90b29sLXZlcnRpY2FsLW1pcnJvci1wZW4ucG5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICYtYnVja2V0IHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pY29ucy90b29scy90b29sLXBhaW50LWJ1Y2tldC5wbmdcIik7XHJcbiAgICB9XHJcblxyXG4gICAgJi1jb2xvcnN3YXAge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2ljb25zL3Rvb2xzL3Rvb2wtY29sb3Jzd2FwLnBuZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAmLWNvbG9ycGlja2VyIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pY29ucy90b29scy90b29sLWNvbG9ycGlja2VyLnBuZ1wiKTtcclxuICAgIH1cclxuXHJcbiAgICAmLWVyYXNlciB7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvdG9vbHMvdG9vbC1lcmFzZXIucG5nXCIpO1xyXG4gICAgfVxyXG5cclxuICAgICYtc3Ryb2tlIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pY29ucy90b29scy90b29sLXN0cm9rZS5wbmdcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0ZWQge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgIzUyOWRlMTtcclxuICB9XHJcblxyXG4gIC5jb2xvciB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG5cclxuICAuZmllbGQtcmFkaW8ge1xyXG4gICAgd2lkdGg6IDU2cHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgaGVpZ2h0OiA1NnB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICB9XHJcblxyXG4gIC5maWVsZC1yYWRpbzo6LXdlYmtpdC1jb2xvci1zd2F0Y2gtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgLmZpZWxkLXJhZGlvOjotd2Via2l0LWNvbG9yLXN3YXRjaCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcbiIsIi50b29scyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi50b29scy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLnRvb2xzLXNpemUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi50b29scy1zaXplX19pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xufVxuLnRvb2xzLXNpemVfX2l0ZW0tb25lOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiA2cHg7XG4gIGhlaWdodDogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLnRvb2xzLXNpemVfX2l0ZW0tdHdvOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG4udG9vbHMtc2l6ZV9faXRlbS10aHJlZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLnRvb2xzLXNpemVfX2l0ZW0tZm91cjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuLnRvb2xzIC5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi50b29scyAudG9vbC1pY29uIHtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4udG9vbHMgLnRvb2wtaWNvbi1wZW4ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2ljb25zL3Rvb2xzL3Rvb2wtcGVuLnBuZ1wiKTtcbn1cbi50b29scyAudG9vbC1pY29uLW1pcnJvciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvdG9vbHMvdG9vbC12ZXJ0aWNhbC1taXJyb3ItcGVuLnBuZ1wiKTtcbn1cbi50b29scyAudG9vbC1pY29uLWJ1Y2tldCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvdG9vbHMvdG9vbC1wYWludC1idWNrZXQucG5nXCIpO1xufVxuLnRvb2xzIC50b29sLWljb24tY29sb3Jzd2FwIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2ltZy9pY29ucy90b29scy90b29sLWNvbG9yc3dhcC5wbmdcIik7XG59XG4udG9vbHMgLnRvb2wtaWNvbi1jb2xvcnBpY2tlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvdG9vbHMvdG9vbC1jb2xvcnBpY2tlci5wbmdcIik7XG59XG4udG9vbHMgLnRvb2wtaWNvbi1lcmFzZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1nL2ljb25zL3Rvb2xzL3Rvb2wtZXJhc2VyLnBuZ1wiKTtcbn1cbi50b29scyAudG9vbC1pY29uLXN0cm9rZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9pbWcvaWNvbnMvdG9vbHMvdG9vbC1zdHJva2UucG5nXCIpO1xufVxuLnRvb2xzIC5zZWxlY3RlZCB7XG4gIGJvcmRlcjogM3B4IHNvbGlkICM1MjlkZTE7XG59XG4udG9vbHMgLmNvbG9yIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDU2cHg7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udG9vbHMgLmZpZWxkLXJhZGlvIHtcbiAgd2lkdGg6IDU2cHg7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogNTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbi50b29scyAuZmllbGQtcmFkaW86Oi13ZWJraXQtY29sb3Itc3dhdGNoLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwO1xufVxuLnRvb2xzIC5maWVsZC1yYWRpbzo6LXdlYmtpdC1jb2xvci1zd2F0Y2gge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tools/tools.component.ts":
/*!******************************************!*\
  !*** ./src/app/tools/tools.component.ts ***!
  \******************************************/
/*! exports provided: ToolsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsComponent", function() { return ToolsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ToolsComponent = class ToolsComponent {
    constructor() {
        this.currentTool = 'pen';
        this.currentSize = 1;
        this.primaryColor = '#000000';
        this.secondaryColor = '#ffffff';
    }
    setToolOptions($event) {
        const tool = $event.target.dataset.tool;
        if (tool) {
            if (tool === this.currentTool) {
                return;
            }
            this.currentTool = $event.target.dataset.tool;
        }
        const size = parseInt($event.target.dataset.size, 10);
        if (size) {
            if (size === this.currentSize) {
                return;
            }
            this.currentSize = size;
        }
    }
    changeColor(color) {
        if (typeof color === 'string') {
            this.primaryColor = this.primaryColorRef.nativeElement.value = color;
        }
    }
    setColor(type) {
        if (type === 'primary') {
            this.primaryColor = this.primaryColorRef.nativeElement.value;
            return;
        }
        this.secondaryColor = this.secondaryColorRef.nativeElement.value;
    }
    ngOnInit() {
        this.primaryColorRef.nativeElement.value = this.primaryColor;
        this.secondaryColorRef.nativeElement.value = this.secondaryColor;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('primaryColorRef', { static: true })
], ToolsComponent.prototype, "primaryColorRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('secondaryColorRef', { static: true })
], ToolsComponent.prototype, "secondaryColorRef", void 0);
ToolsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tools',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tools.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tools/tools.component.html")).default,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tools.component.scss */ "./src/app/tools/tools.component.scss")).default]
    })
], ToolsComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\web\RSschool\glebvetrov-RS2019Q3\piskel-clone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);