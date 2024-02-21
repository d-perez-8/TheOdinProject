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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_deleteItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/deleteItem */ \"./src/modules/deleteItem.js\");\n\n\n// DOM Elements\nconst todoContainer = document.querySelector(\"#todoContainer\");\nconst todoForm = document.querySelector(\"#todoForm\");\nconst projectForm = document.querySelector('#projectForm');\nconst projectContainer = document.querySelector('#projectContainer');\nconst openTodoFormBtn = document.querySelector('#openTodoForm');\nconst openProjectFormBtn = document.querySelector('#openProjectForm');\nconst addOrUpdateTodoBtn = document.querySelector('#add-or-update-todo-button');\nconst addOrUpdateProjectBtn = document.querySelector('#add-or-update-project-button');\nconst closeTodoFormBtn = document.querySelector('#close-todo-form-button');\nconst closeProjectFormBtn = document.querySelector('#close-project-form-button');\nconst discardTodoBtn = document.querySelector('#discard-btn');\nconst confirmCloseDialog = document.querySelector('#confirm-close-dialog');\nconst cancelTodoBtn = document.querySelector('#cancel-btn');\n\n\n// Input elements\nconst titleInput = document.querySelector(\"#title\");\nconst descriptionInput = document.querySelector(\"#description\");\nconst dueDateInput = document.querySelector(\"#dueDate\");\nconst projectTitleInput = document.querySelector('#project-title');\n\nconst todoData = JSON.parse(localStorage.getItem('data')) || [];\nconst projectData = JSON.parse(localStorage.getItem('projects')) || [];\nlet currentTodo = {};\nlet currentProject = {};\n\nconst addOrUpdateTodo = () => {\n    const dataArrIndex = todoData.findIndex(todo => todo.id === currentTodo.id);\n    const todoObj = {\n        id: `${titleInput.value.toLowerCase()}-${Date.now()}`,\n        title: titleInput.value,\n        description: descriptionInput.value,\n        dueDate: dueDateInput.value\n    };\n\n    if (dataArrIndex < 0) {\n        todoData.push(todoObj);\n    } else {\n        todoData[dataArrIndex] = todoObj;\n    }\n    \n    localStorage.setItem('data', JSON.stringify(todoData));\n    updateTodoContainer();\n    reset();\n}\n\nconst addOrUpdateProject = () => {\n    const projectdataArrIndex = projectData.findIndex(project => project.id === currentProject.id);\n    const projectObj = {\n        id: `${projectTitleInput.value.toLowerCase()}-${Date.now()}`,\n        title: projectTitleInput.value\n    };\n\n    if (projectdataArrIndex < 0) {\n        projectData.push(projectObj);\n    } else {\n        projectData[projectdataArrIndex] = projectObj;\n    }\n    \n    localStorage.setItem('projects', JSON.stringify(projectData));\n    updateProjectContainer();\n    reset();\n}\n\nconst updateTodoContainer = () => {\n    todoContainer.innerHTML = '';\n    todoData.forEach(\n        ({ id, title, description, dueDate }) => {\n            (todoContainer.innerHTML += `\n                <div class=\"todo\" id=\"${id}\">\n                    <span>${title}</span>\n                    <span>${description}</span>\n                    <span>${dueDate}</span>\n                    <button type=\"button\" class=\"edit-btn btn\">Edit</button>\n                    <button type=\"button\" class=\"delete-btn btn\">Delete</button>\n                </div>\n            `)\n        }\n    );\n    const editBtns = document.querySelectorAll('.edit-btn');\n    const deleteBtns = document.querySelectorAll('.delete-btn');\n\n    editBtns.forEach((btn) => {\n        btn.addEventListener('click', (event) => editTodo(event.target))\n    })\n    deleteBtns.forEach((btn) => {\n        btn.addEventListener('click', (event) => (0,_modules_deleteItem__WEBPACK_IMPORTED_MODULE_0__.deleteTodo)(event.target))\n    })\n};\n\nconst updateProjectContainer = () => {\n    projectContainer.innerHTML = '';\n    projectData.forEach(\n        ({ id, title }) => {\n            (projectContainer.innerHTML += `\n                <div class=\"project\" id=\"${id}\">\n                    <span>${title}</span>\n                    <button type='button' class=\"edit-project-btn btn\">Edit</button>\n                    <button type=\"button\" class=\"delete-project-btn btn\">Delete</button>\n                </div>\n            `)\n        }\n    );\n    const editProjectBtns = document.querySelectorAll('.edit-project-btn');\n    const deleteProjectBtns = document.querySelectorAll('.delete-project-btn');\n\n    editProjectBtns.forEach((btn) => {\n        btn.addEventListener('click', (event) => editProject(event.target))\n    })\n    deleteProjectBtns.forEach((btn) => {\n        btn.addEventListener('click', (event) => (0,_modules_deleteItem__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(event.target))\n    })\n}\n\nconst editTodo = (buttonEl) => {\n    const dataArrIndex = todoData.findIndex(todo => todo.id === buttonEl.parentElement.id);\n\n    currentTodo = todoData[dataArrIndex];\n\n    titleInput.value = currentTodo.title;\n    descriptionInput.value = currentTodo.description;\n    dueDateInput.value = currentTodo.date;\n\n    addOrUpdateTodoBtn.innerText = 'Update';\n\n    todoForm.showModal();\n}\n\nconst editProject = (buttonEl) => {\n    const dataArrIndex = projectData.findIndex(project => project.id === buttonEl.parentElement.id);\n\n    currentProject = projectData[dataArrIndex];\n\n    projectTitleInput.value = currentProject.title;\n\n    addOrUpdateProjectBtn.innerText = 'Update';\n\n    projectForm.showModal();\n}\n\nconst reset = () => {\n    titleInput.value = \"\";\n    descriptionInput.value = \"\";\n    dueDateInput.value = \"\";\n    todoForm.close();\n    currentTodo = {};\n}\n\nconst resetProject = () => {\n    titleInput.value = \"\"\n    projectForm.close();\n    currentProject = {};\n}\n\nif (todoData.length) {\n    updateTodoContainer();\n}\n\nif (projectData.length) {\n    updateProjectContainer();\n}\n\nopenTodoFormBtn.addEventListener('click', () => {\n    todoForm.showModal();\n})\n\nopenProjectFormBtn.addEventListener('click', () => {\n    projectForm.showModal();\n})\n\ncloseTodoFormBtn.addEventListener('click', () => {\n    const formInputContainValues = titleInput.value || descriptionInput.value || dueDateInput.value;\n    const formInputValuesUpdated = titleInput.value !== currentTodo.title || descriptionInput.value !== currentTodo.description || dueDateInput.value !== currentTodo.dueDate;\n\n    return (formInputContainValues && formInputValuesUpdated) ? confirmCloseDialog.showModal() : reset();\n})\n\ncloseProjectFormBtn.addEventListener('click', () => {\n    const formInputContainValues = titleInput.value;\n    const formInputValuesUpdated = titleInput.value !== currentProject.title;\n\n    return (formInputContainValues && formInputValuesUpdated) ? confirmCloseDialog.showModal() : resetProject();\n})\n\ncancelTodoBtn.addEventListener('click', () => {\n    reset();\n})\n\ndiscardTodoBtn.addEventListener('click', () => {\n    confirmCloseDialog.close();\n    reset();\n})\n\ntodoForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    addOrUpdateTodo();\n})\n\nprojectForm.addEventListener('submit', (event) => {\n    event.preventDefault();\n    addOrUpdateProject();\n})\n\n//# sourceURL=webpack://project-todo/./src/index.js?");

/***/ }),

/***/ "./src/modules/deleteItem.js":
/*!***********************************!*\
  !*** ./src/modules/deleteItem.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo)\n/* harmony export */ });\n// Delete Project or Todo Item\nconst todoData = JSON.parse(localStorage.getItem('data')) || [];\nconst projectData = JSON.parse(localStorage.getItem('projects')) || [];\n\nconst deleteTodo = (buttonEl) => {\n    const dataArrIndex = todoData.findIndex(todo => todo.id === buttonEl.parentElement.id);\n\n    buttonEl.parentElement.remove();\n    todoData.splice(dataArrIndex, 1);\n    localStorage.setItem(\"data\", JSON.stringify(todoData));\n}\n\nconst deleteProject = (buttonEl) => {\n    const dataArrIndex = projectData.findIndex(project => project.id === buttonEl.parentElement.id);\n\n    buttonEl.parentElement.remove();\n    projectData.splice(dataArrIndex, 1);\n    localStorage.setItem(\"projects\", JSON.stringify(projectData));\n}\n\n\n//# sourceURL=webpack://project-todo/./src/modules/deleteItem.js?");

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