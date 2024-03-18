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

/***/ "./src/images/aiwaves.jpg":
/*!********************************!*\
  !*** ./src/images/aiwaves.jpg ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/aiwaves.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/images/aiwaves.jpg?");

/***/ }),

/***/ "./src/images/burgerman.jpg":
/*!**********************************!*\
  !*** ./src/images/burgerman.jpg ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/burgerman.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/images/burgerman.jpg?");

/***/ }),

/***/ "./src/images/surfcafe.jpg":
/*!*********************************!*\
  !*** ./src/images/surfcafe.jpg ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/surfcafe.jpg\");\n\n//# sourceURL=webpack://restaurant_page/./src/images/surfcafe.jpg?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   homeLoad: () => (/* binding */ homeLoad)\n/* harmony export */ });\nfunction homeLoad() {\nconst homeButton = document.querySelector(\"#home-btn\");\nconst contentArea = document.getElementById(\"content\");\nconst newContent1 = document.createElement('p');\nconst newPic = document.createElement('img');\nconst newContent2 = document.createElement('div');\ncontentArea.style.display = \"grid\";\ncontentArea.style.height = \"75%\";\ncontentArea.style.overflowY = \"scroll\";\nnewPic.src = './images/burgerman.jpg'\nnewPic.style.width = \"98%\";\nhomeButton.style.backgroundColor = \"rgba(0, 40, 40, 0.9)\";\nnewContent1.textContent = \"Driven by his love for both surfing and food, Kai dreamt of a haven where he could indulge in hearty meals without having to leave the beach. A place where the aroma of freshly grilled pineapple and beef mingled with the salty breeze, and sandy feet were not just tolerated but welcomed with open arms.\";\nnewContent2.textContent = \"HIGHTIDE was born, a laid-back oasis nestled along the shoreline, where surfboards leaned against palm trees and the sound of crashing waves provided the perfect backdrop for a culinary adventure. Here, amidst the sandy shores and endless horizons, Kai found not only a place to satisfy his hunger but a way to share his love for surfing and food with the world.\"\ncontentArea.appendChild(newContent1);\ncontentArea.appendChild(newPic);\ncontentArea.appendChild(newContent2);\n}\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _images_surfcafe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/surfcafe.jpg */ \"./src/images/surfcafe.jpg\");\n/* harmony import */ var _images_aiwaves_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/aiwaves.jpg */ \"./src/images/aiwaves.jpg\");\n/* harmony import */ var _images_burgerman_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/burgerman.jpg */ \"./src/images/burgerman.jpg\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n\n \n\n\n\n\n//build webpage basics\n\n//variables\nconst page = document.querySelector('.page');\nconst contentHolder = document.querySelector('.card');\nconst cafeTitle = document.querySelector('#title');\nconst homeButton = document.querySelector(\"#home-btn\");\nconst menuButton = document.querySelector(\"#menu-btn\");\nconst aboutButton = document.querySelector(\"#about-btn\");\nconst cafeST = document.querySelector('#subTitle');\n//functions\nfunction backgroundLoad() {\n    let bg = document.body.style;\n    bg.backgroundImage = 'url(' + _images_aiwaves_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"] + ')';\n    bg.backgroundSize = \"100vw 100vh\";\n    bg.display = \"flex\";\n    bg.justifyContent = \"center\";\n    let p = page.style; \n    p.backgroundImage = 'url(' + _images_surfcafe_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"] + ')';\n    p.backgroundSize = \"cover\"\n    p.height = \"88vh\";\n    p.width = \"66vh\";\n    p.borderRadius = \"20px\";\n    p.padding = \"50px\"; \n    contentHolder.style.backgroundColor = \"rgba(0, 0, 0, 0.9)\";\n    contentHolder.style.borderRadius = \"30px\";\n    contentHolder.style.paddingLeft = \"50px\";\n    contentHolder.style.paddingRight = \"50px\";\n    contentHolder.style.height = \"95%\";\n    contentHolder.style.color = \"white\";\n    contentHolder.style.margin = \"0px\"; \n    contentHolder.style.fontFamily = \"Original Surfer\";\n    let nav = document.querySelector(\"nav\");\n    nav.style.display = \"flex\";\n    nav.style.justifyContent = \"space-around\";\n    nav.style.paddingTop = \"10px\";\n    nav.style.width = \"80%\";\n    nav.style.marginLeft = \"auto\";\n    nav.style.marginRight = \"auto\";\n    nav.style.marginBottom = \"0px\";\n    nav.style.borderRadius = \"20px 20px 0 0 \";  \n    homeButton.style.backgroundColor = \"rgba(0, 0, 0, 0.9)\";\n    homeButton.style.color = \"white\";\n    homeButton.style.padding = \"10px 30px 10px 30px\";\n    homeButton.style.borderRadius = \"10px 10px 0 0 \";\n    homeButton.style.borderStyle = \"none\";\n    menuButton.style.backgroundColor = \"rgba(0, 0, 0, 0.9)\";\n    menuButton.style.color = \"white\";\n    menuButton.style.padding = \"10px 30px 10px 30px\";\n    menuButton.style.borderRadius = \"10px 10px 0 0 \";\n    menuButton.style.borderStyle = \"none\";\n    aboutButton.style.backgroundColor = \"rgba(0, 0, 0, 0.9)\";\n    aboutButton.style.color = \"white\";\n    aboutButton.style.padding = \"10px 20px 10px 20px\";\n    aboutButton.style.borderRadius = \"10px 10px 0 0 \";\n    aboutButton.style.borderStyle = \"none\";\n    let t = cafeTitle.style;\n    t.display = \"grid\";         \n    t.backgroundColor = \"rgba(0, 100, 100, 0.4)\";\n    t.fontSize = \"75px\";\n    t.color = \"aqua\";\n    t.borderRadius = \"30px 30px 0px 0px\";\n    t.justifyItems = \"center\";\n    t.padding = \"5px\"; \n    t.paddingLeft = \"20px\";\n    t.paddingRight = \"20px\";\n    t.marginLeft = \"-50px\";\n    t.marginRight = \"-50px\";\n    let st = cafeST.style;\n    st.display = \"grid\";         \n    st.backgroundColor = \"rgba(0, 100, 100, 0.4)\";\n    st.color = \"orange\";\n    st.fontSize = \"28px\";\n    st.justifyItems = \"center\";\n    st.padding = \"10px\"; \n    st.marginLeft = \"-50px\";\n    st.marginRight = \"-50px\";   \n}\n\nfunction handleHomeButtonClick() {\n    _load_js__WEBPACK_IMPORTED_MODULE_4__.clear();\n    _home_js__WEBPACK_IMPORTED_MODULE_3__.homeLoad();\n}\n\nfunction handleMenuButtonClick() {\n    // Add your code to handle the click event for the menu button\n}\n\nfunction handleAboutButtonClick() {\n    // Add your code to handle the click event for the about button\n}\n\n\n\n\n// button click listeners\nhomeButton.addEventListener(\"click\", handleHomeButtonClick);\nmenuButton.addEventListener(\"click\", handleMenuButtonClick);\naboutButton.addEventListener(\"click\", handleAboutButtonClick);\n\n\n\n\n// code here\n//load page\nbackgroundLoad();\n//default to home?\n\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clear: () => (/* binding */ clear)\n/* harmony export */ });\nfunction clear() {\nconst contentContainer = document.getElementById(\"content\");\ncontentContainer.innerHTML = ''; // This will remove all child elements\n}\n\n\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/load.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;