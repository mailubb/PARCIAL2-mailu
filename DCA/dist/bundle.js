/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./service/dataFetch.ts":
/*!******************************!*\
  !*** ./service/dataFetch.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GetApi2\": () => (/* binding */ GetApi2)\n/* harmony export */ });\n//  export const GetApi1 =async () => {\n//      try {\n//          const datos1 = await fetch (\"https:cataas.com/cat/says/hello\").then(res=>res.json())\n//          console.log(datos1)\n//          return datos1.url\n//      } catch (error) {\n//          console.error(error)\n//      }\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nconst GetApi2 = () => __awaiter(void 0, void 0, void 0, function* () {\n    try {\n        const datos2 = yield fetch(\"https://catfact.ninja/fact\").then(res => res.json());\n        console.log(datos2);\n        return datos2;\n    }\n    catch (error) {\n        console.error(error);\n    }\n});\n\n\n//# sourceURL=webpack://dca_scoffolding/./service/dataFetch.ts?");

/***/ }),

/***/ "./src/components/Card/card.ts":
/*!*************************************!*\
  !*** ./src/components/Card/card.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ImgAttribute\": () => (/* binding */ ImgAttribute),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ImgAttribute;\n(function (ImgAttribute) {\n    ImgAttribute[\"img\"] = \"img\";\n    ImgAttribute[\"frase\"] = \"frase\";\n})(ImgAttribute || (ImgAttribute = {}));\nclass Card extends HTMLElement {\n    static get observerdAttributes() {\n        const attrs = {\n            img: null,\n            frase: null\n        };\n        return Object.keys(attrs);\n    }\n    attributeChangedCallback(propName, oldValue, newValue) {\n        switch (propName) {\n            default:\n                this[propName] = newValue;\n                break;\n        }\n    }\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        this.render();\n    }\n    render() {\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\r\n        \r\n        <div>\r\n        <img src=\"${this.img}\" alt=\"\">\r\n        <p>${this.frase}</p>\r\n        </div>\r\n        `;\n        }\n    }\n}\ncustomElements.define(\"my-card\", Card);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/Card/card.ts?");

/***/ }),

/***/ "./src/components/export.ts":
/*!**********************************!*\
  !*** ./src/components/export.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* reexport safe */ _Card_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Card_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card/card */ \"./src/components/Card/card.ts\");\n\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/components/export.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_export__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/export */ \"./src/components/export.ts\");\n/* harmony import */ var _components_Card_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Card/card */ \"./src/components/Card/card.ts\");\n/* harmony import */ var _service_dataFetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/dataFetch */ \"./service/dataFetch.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nclass AppContainer extends HTMLElement {\n    constructor() {\n        super();\n        this.attachShadow({ mode: \"open\" });\n    }\n    connectedCallback() {\n        return __awaiter(this, void 0, void 0, function* () {\n            // const Bringapi1 = await GetApi1()\n            this.render();\n        });\n    }\n    render() {\n        var _a;\n        if (this.shadowRoot) {\n            this.shadowRoot.innerHTML = `\n            `;\n            const button = this.ownerDocument.createElement(\"button\");\n            button.innerText = \"Bring a fact\";\n            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(button);\n            button.addEventListener(\"click\", () => __awaiter(this, void 0, void 0, function* () {\n                var _b;\n                const Bringapi2 = yield (0,_service_dataFetch__WEBPACK_IMPORTED_MODULE_2__.GetApi2)();\n                console.log(Bringapi2.fact);\n                const something1 = this.ownerDocument.createElement(\"my-card\");\n                something1.setAttribute(_components_Card_card__WEBPACK_IMPORTED_MODULE_1__.ImgAttribute.frase, Bringapi2.fact);\n                (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.appendChild(something1);\n                // const Bringapi2 = await GetApi1()\n                // something1.setAttribute(ImgAttribute.frase, Bringapi2.fact)\n                // this.shadowRoot?.appendChild(something1)\n            }));\n        }\n    }\n}\ncustomElements.define('app-container', AppContainer);\n\n\n//# sourceURL=webpack://dca_scoffolding/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;