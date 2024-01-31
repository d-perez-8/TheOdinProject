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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_addTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/addTodo.js */ \"./src/modules/addTodo.js\");\n/* harmony import */ var _modules_addProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addProject.js */ \"./src/modules/addProject.js\");\n/* harmony import */ var _modules_deleteItem_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/deleteItem.js */ \"./src/modules/deleteItem.js\");\n\n\n\n\n\n// Add todo toggle function\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.toggleTodoModal)();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.toggleProjectModal)();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.closeModal)();\n(0,_modules_deleteItem_js__WEBPACK_IMPORTED_MODULE_3__.deleteItem)();\n(0,_modules_modal_js__WEBPACK_IMPORTED_MODULE_0__.editTodo)();\n\n\n// Classes for projects and todos\nnew _modules_addProject_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('projectForm', '.projects');\nnew _modules_addTodo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('todoForm', '.todos');\n\n\n//# sourceURL=webpack://project-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/addProject.js":
/*!***********************************!*\
  !*** ./src/modules/addProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectFormHandle)\n/* harmony export */ });\n/* harmony import */ var _createDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomElement */ \"./src/modules/createDomElement.js\");\n/* harmony import */ var _deleteItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deleteItem */ \"./src/modules/deleteItem.js\");\n\n\n\n\n// Submit Project Modal Form\nclass Project {\n    constructor(title) {\n        this.title = title;\n    }\n\n    render() {\n        const project = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('li', '', { class: 'project' });\n        const title = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('span', this.title, { class: 'projectTitle' });\n        const editProject = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', 'E', { class: 'editProject' });\n        const deleteProject = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', 'D', { class: 'deleteProject deleteBtn' });\n\n        project.appendChild(title);\n        project.appendChild(editProject);\n        project.appendChild(deleteProject);\n\n        return project;\n    }\n    \n}\n\nclass ProjectFormHandle {\n    constructor(projectFormId, projectsContainer) {\n        this.form = document.getElementById(projectFormId);\n        this.projectsContainer = document.querySelector(projectsContainer);\n        this.addEventListener();\n    }\n\n    addEventListener() {\n        this.form.addEventListener('submit', this.handleSubmit.bind(this));\n    }\n\n    handleSubmit(event) {\n        event.preventDefault();\n\n        const projectTitle = this.getElementValue('#project-title');\n        \n        const project = new Project(projectTitle);\n        const projectElement = project.render();\n\n        this.projectsContainer.appendChild(projectElement);\n\n        // Reinstantiate function for each new project\n        (0,_deleteItem__WEBPACK_IMPORTED_MODULE_1__.deleteItem)();\n\n        this.clearInputFields();\n    }\n\n    clearInputFields() {\n        this.setElementValue('#project-title', '');\n    }\n\n    getElementValue(selector) {\n        return this.form.querySelector(selector).value;\n    }\n\n    setElementValue(selector, value) {\n        this.form.querySelector(selector).value = value;\n    }\n}\n\n//# sourceURL=webpack://project-todo/./src/modules/addProject.js?");

/***/ }),

/***/ "./src/modules/addTodo.js":
/*!********************************!*\
  !*** ./src/modules/addTodo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TodoFormHandler)\n/* harmony export */ });\n/* harmony import */ var _createDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createDomElement */ \"./src/modules/createDomElement.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _deleteItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deleteItem */ \"./src/modules/deleteItem.js\");\n\n\n\n\nclass Todo {\n    constructor(title, description, dueDate) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n    }\n\n    render() {\n        const todo = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('li', '', { class: 'todo' });\n        const title = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('span', this.title, { class: 'todoTitle' });\n        const description = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('span', this.description, { class: 'todoDescription' });\n        const dueDate = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('span', this.dueDate, { class: 'dueDate' });\n        const editTodo = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', 'Edit', { class: 'editTodo' });\n        const removeTodo = (0,_createDomElement__WEBPACK_IMPORTED_MODULE_0__.createDOMElement)('button', 'Remove', { class: 'removeTodo deleteBtn' });\n        \n        todo.appendChild(title);\n        todo.appendChild(description);\n        todo.appendChild(dueDate);\n        todo.appendChild(editTodo);\n        todo.appendChild(removeTodo);\n\n        return todo;\n    }\n}\n\nclass TodoFormHandler {\n    constructor(formId, todosContainer) {\n        this.form = document.getElementById(formId);\n        this.todosContainer = document.querySelector(todosContainer);\n        this.addEventListeners();\n    }\n\n    addEventListeners() {\n        this.form.addEventListener('submit', this.handleSubmit.bind(this));\n    }\n\n    handleSubmit(event) {\n        event.preventDefault();\n\n        const todoTitle = this.getElementValue('#title');\n        const todoDescription = this.getElementValue('#description');\n        const todoDueDate = this.getElementValue('#dueDate');\n\n        const todo = new Todo(todoTitle, todoDescription, todoDueDate)\n        const todoElement = todo.render();\n\n        this.todosContainer.appendChild(todoElement);\n\n        // Reinstantiate function for each new project\n        (0,_modal__WEBPACK_IMPORTED_MODULE_1__.editTodoModal)();\n        (0,_deleteItem__WEBPACK_IMPORTED_MODULE_2__.deleteItem)();\n\n        this.clearInputFields();\n    }\n\n    clearInputFields() {\n        this.setElementValue('#title', '');\n        this.setElementValue('#description', '');\n        this.setElementValue('#dueDate', '');\n    }\n\n    getElementValue(selector) {\n        return this.form.querySelector(selector).value;\n    }\n\n    setElementValue(selector, value) {\n        this.form.querySelector(selector).value = value;\n    }\n}\n\n//# sourceURL=webpack://project-todo/./src/modules/addTodo.js?");

/***/ }),

/***/ "./src/modules/createDomElement.js":
/*!*****************************************!*\
  !*** ./src/modules/createDomElement.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createDOMElement: () => (/* binding */ createDOMElement)\n/* harmony export */ });\nfunction createDOMElement(tag, text, attributes) {\n    const element = document.createElement(tag);\n    if (text) {\n        element.textContent = text;\n    }\n    if (attributes) {\n        for (const attribute in attributes) {\n            element.setAttribute(attribute, attributes[attribute]);\n        }\n    }\n    return element;\n}\n\n//# sourceURL=webpack://project-todo/./src/modules/createDomElement.js?");

/***/ }),

/***/ "./src/modules/deleteItem.js":
/*!***********************************!*\
  !*** ./src/modules/deleteItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteItem: () => (/* binding */ deleteItem)\n/* harmony export */ });\n// Delete Project or Todo Item\nconst deleteItem = () => {\n    const deleteItem = document.querySelectorAll('.deleteBtn');\n    deleteItem.forEach(btn => btn.addEventListener('click', event => {\n        if (event.target.classList.contains('deleteBtn')) {\n            event.target.parentElement.remove();\n        }\n    }));\n}\n\n\n//# sourceURL=webpack://project-todo/./src/modules/deleteItem.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   closeModal: () => (/* binding */ closeModal),\n/* harmony export */   editTodo: () => (/* binding */ editTodo),\n/* harmony export */   toggleProjectModal: () => (/* binding */ toggleProjectModal),\n/* harmony export */   toggleTodoModal: () => (/* binding */ toggleTodoModal)\n/* harmony export */ });\nconst toggleAddTodoButton = document.querySelector(\".addTodo\");\nconst todoModal = document.querySelector(\".addTodoModal\");\nconst toggleProjectButton = document.querySelector(\".addProject\");\nconst projectModal = document.querySelector(\".addProjectModal\");\nconst editTodoModal = document.querySelector(\".editTodoModal\");\n\n// Toggle Todo Modal\nconst toggleTodoModal = () => {\n    toggleAddTodoButton.addEventListener('click', () => {\n        todoModal.classList.toggle('hidden');\n        projectModal.classList.add('hidden');\n    });\n}\n\n// Toggle Project Modal\nconst toggleProjectModal = () => {\n    toggleProjectButton.addEventListener('click', () => {\n        projectModal.classList.toggle('hidden');\n        todoModal.classList.add('hidden');\n    });\n}\n\n// Close Modal\nconst closeModal = () => {\n    const cancelButton = document.querySelectorAll(\".cancel\");\n    cancelButton.forEach(btn => btn.addEventListener('click', () => {\n        todoModal.classList.add('hidden');\n        projectModal.classList.add('hidden');\n        editTodoModal.classList.add('hidden');\n    }));\n}\n\n\n/////// TODO: ADD EDITING FUNCTIONALITY //////\n\n\n// Edit Todo Modal\nconst editTodo = () => {\n    // Date From existing todo\n    const editBtn = document.querySelectorAll(\".editTodo\");\n    const todoTitle = document.querySelectorAll(\".todoTitle\");\n    const todoDescription = document.querySelectorAll(\".todoDescription\");\n    const todoDueDate = document.querySelectorAll(\".dueDate\");\n    const editTodoForm = document.querySelector(\"#editTodo\");\n\n    // To Edit Modal\n    const editTitle = document.querySelector(\"#editTitle\");\n    const editDescription = document.querySelector(\"#editDescription\");\n    const editDueDate = document.querySelector(\"#editDueDate\");\n\n    editBtn.forEach((btn, index) => {\n        btn.addEventListener('click', () => {\n            // Show modal \n            editTodoModal.classList.toggle('hidden');\n\n            // Populate modal\n            const title = todoTitle[index].textContent;\n            const description = todoDescription[index].textContent;\n            const dueDate = todoDueDate[index].textContent;\n\n            editTitle.value = title;\n            editDescription.value = description;\n            editDueDate.value = dueDate;\n\n            // Save new edits\n            editTodoForm.addEventListener('submit', (event) => {\n                event.preventDefault();\n                todoTitle[index].textContent = editTitle.value;\n                todoDescription[index].textContent = editDescription.value;\n                todoDueDate[index].textContent = editDueDate.value;\n                editTodoModal.classList.add('hidden');\n            })\n\n        });\n    });\n}\n\n//Edit Project Modal\n\n//# sourceURL=webpack://project-todo/./src/modules/modal.js?");

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