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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_addTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addTodo.js */ \"./src/modules/addTodo.js\");\n/* harmony import */ var _modules_addProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addProject.js */ \"./src/modules/addProject.js\");\n\n\n\n// Add todo toggle function\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.toggleTodoModal)();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.toggleProjectModal)();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)();\n\n\n// Classes for projects and todos\nnew _modules_addProject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('projectForm');\nnew _modules_addTodo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('todoForm', '.todos');\n\n\n//# sourceURL=webpack://project-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addProject.js":
/*!***********************************!*\
  !*** ./src/modules/addProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n// Submit Project Modal Form\nclass Project {\n    constructor(projectForm) {\n        this.formElement = document.getElementById(projectForm);\n        this.title = document.getElementById('title');\n        this.addEventListener();\n    }\n\n    addEventListener() {\n        this.formElement.addEventListener('submit', this.handleSubmit.bind(this));\n    }\n\n    handleSubmit(event) {\n        event.preventDefault();\n\n        const projectTitle = this.title.value;\n        \n        this.clearInputFields();\n\n        // TODO: send data to DOM\n        console.log(projectTitle);\n    }\n\n    clearInputFields() {\n        this.title.value = '';\n    }\n}\n\n//# sourceURL=webpack://project-todo/./src/modules/addProject.js?");

/***/ }),

/***/ "./src/modules/addTodo.js":
/*!********************************!*\
  !*** ./src/modules/addTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoFormHandler)\n/* harmony export */ });\n/* harmony import */ var _createDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomElement */ \"./src/modules/createDomElement.js\");\n\n\nclass Todo {\n    constructor(title, description, dueDate) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n    }\n\n    render() {\n        const todo = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('li', '', { class: 'todo' });\n        const title = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('span', this.title, { class: 'todoTitle' });\n        const description = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('span', this.description, { class: 'todoDescription' });\n        const dueDate = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('span', this.dueDate, { class: 'dueDate' });\n        const editTodo = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', 'Edit', { class: 'editTodo' });\n        const removeTodo = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', 'Remove', { class: 'removeTodo' });\n        \n        todo.appendChild(title);\n        todo.appendChild(description);\n        todo.appendChild(dueDate);\n        todo.appendChild(editTodo);\n        todo.appendChild(removeTodo);\n\n        return todo;\n    }\n}\n\nclass TodoFormHandler {\n    constructor(formId, todosContainer) {\n        this.form = document.getElementById(formId);\n        this.todosContainer = document.querySelector(todosContainer);\n        this.addEventListeners();\n    }\n\n    addEventListeners() {\n        this.form.addEventListener('submit', this.handleSubmit.bind(this));\n    }\n\n    handleSubmit(event) {\n        event.preventDefault();\n\n        const todoTitle = this.getElementValue('#title');\n        const todoDescription = this.getElementValue('#description');\n        const todoDueDate = this.getElementValue('#dueDate');\n\n        const todo = new Todo(todoTitle, todoDescription, todoDueDate)\n        const todoElement = todo.render();\n\n        this.todosContainer.appendChild(todoElement);\n\n        this.clearInputFields();\n    }\n\n    clearInputFields() {\n        this.setElementValue('#title', '');\n        this.setElementValue('#description', '');\n        this.setElementValue('#dueDate', '');\n    }\n\n    getElementValue(selector) {\n        return this.form.querySelector(selector).value;\n    }\n\n    setElementValue(selector, value) {\n        this.form.querySelector(selector).value = value;\n    }\n}\n\n//# sourceURL=webpack://project-todo/./src/modules/addTodo.js?");

/***/ }),

/***/ "./src/modules/createDomElement.js":
/*!*****************************************!*\
  !*** ./src/modules/createDomElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDOMElement: () => (/* binding */ createDOMElement)\n/* harmony export */ });\nfunction createDOMElement(tag, text, attributes) {\n    const element = document.createElement(tag);\n    if (text) {\n        element.textContent = text;\n    }\n    if (attributes) {\n        for (const attribute in attributes) {\n            element.setAttribute(attribute, attributes[attribute]);\n        }\n    }\n    return element;\n}\n\n//# sourceURL=webpack://project-todo/./src/modules/createDomElement.js?");

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