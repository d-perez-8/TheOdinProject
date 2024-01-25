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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_addTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addTodo.js */ \"./src/modules/addTodo.js\");\n/* harmony import */ var _modules_addProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addProject.js */ \"./src/modules/addProject.js\");\n\n\n\n// Add todo toggle function\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.toggleTodoModal)();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.toggleProjectModal)();\nconst project = new _modules_addProject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('projectForm');\nconst todo = new _modules_addTodo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('todoForm');\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)();\nconsole.log(project)\n\n//# sourceURL=webpack://project-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addProject.js":
/*!***********************************!*\
  !*** ./src/modules/addProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n// Submit Project Modal Form\nclass Project {\n    constructor(projectForm) {\n        this.formElement = document.getElementById(projectForm);\n        this.title = document.getElementById('title');\n        this.addEventListener();\n    }\n\n    addEventListener() {\n        this.formElement.addEventListener('submit', this.handleSubmit.bind(this));\n    }\n\n    handleSubmit(event) {\n        event.preventDefault();\n\n        const projectTitle = this.title.value;\n        \n        this.clearInputFields();\n\n        console.log(projectTitle);\n    }\n\n    clearInputFields() {\n        this.title.value = '';\n    }\n}\n\n//# sourceURL=webpack://project-todo/./src/modules/addProject.js?");

/***/ }),

/***/ "./src/modules/addTodo.js":
/*!********************************!*\
  !*** ./src/modules/addTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n// Submit Todo Modal Form\nclass Todo {\n    constructor(todoForm) {\n        this.formElement = document.getElementById(todoForm);\n        this.title = document.getElementById('title');\n        this.description = document.getElementById('description');\n        this.dueDate = document.getElementById('dueDate');\n        this.addEventListener();\n    }\n\n    addEventListener() {\n        this.formElement.addEventListener('submit', this.handleSubmit.bind(this));\n    }\n    \n    handleSubmit(event) {\n        event.preventDefault();\n\n        const todoTitle = this.title.value;\n        const todoDescription = this.description.value;\n        const todoDueDate = this.dueDate.value;\n\n        this.clearInputFields();        \n\n        //How do we send this data to the DOM\n        console.log(todoTitle, todoDescription, todoDueDate);\n    }\n\n    clearInputFields() {\n        this.title.value = '';\n        this.description.value = '';\n        this.dueDate.value = '';\n    }\n}\n\n//# sourceURL=webpack://project-todo/./src/modules/addTodo.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   toggleProjectModal: () => (/* binding */ toggleProjectModal),\n/* harmony export */   toggleTodoModal: () => (/* binding */ toggleTodoModal)\n/* harmony export */ });\nconst toggleAddTodoButton = document.querySelector(\".addTodo\");\nconst todoModal = document.querySelector(\".addTodoModal\");\nconst toggleProjectButton = document.querySelector(\".addProject\")\nconst projectModal = document.querySelector(\".addProjectModal\");\n\n// Toggle Todo Modal\nconst toggleTodoModal = () => {\n    toggleAddTodoButton.addEventListener('click', () => {\n        todoModal.classList.toggle('hidden');\n        projectModal.classList.add('hidden');\n    });\n}\n\n// Toggle Project Modal\nconst toggleProjectModal = () => {\n    toggleProjectButton.addEventListener('click', () => {\n        projectModal.classList.toggle('hidden');\n        todoModal.classList.add('hidden');\n    });\n}\n\n// Close modal\nconst closeModal = () => {\n    const cancelButton = document.querySelectorAll(\".cancel\");\n    cancelButton.forEach(btn => btn.addEventListener('click', () => {\n        todoModal.classList.add('hidden');\n        projectModal.classList.add('hidden');\n    }));\n}\n\n//# sourceURL=webpack://project-todo/./src/modules/modal.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;