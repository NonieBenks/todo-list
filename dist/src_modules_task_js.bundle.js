"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["src_modules_task_js"],{

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/modules/store.js\");\n\n\nconst store = new _store__WEBPACK_IMPORTED_MODULE_0__.Store();\nclass Task {\n  constructor() {}\n\n  setDueDate(dueDate) {\n    this.dueDate = dueDate;\n  }\n\n  setDescription(description) {\n    this.description = description;\n  }\n\n  setPriority(priority) {\n    this.priority = priority;\n  }\n\n  displayTaskDetails(task) {\n    let appContainer = document.querySelector(\".app-container\");\n    let workspace = document.querySelector(\".work-space\");\n    workspace.remove();\n\n    let workSpace = document.createElement(\"div\");\n    let titleBlock = document.createElement(\"h3\");\n    let statusBlock = document.createElement(\"h3\");\n\n    workSpace.classList.add(\n      \"work-space\",\n      \"col-span-3\",\n      \"row-span-4\",\n      \"w-full\",\n      \"bg-amber-300\"\n    );\n    titleBlock.classList.add(\"flex\", \"justify-center\", \"m-2.5\", \"text-3xl\");\n    statusBlock.classList.add(\"m-2.5\", \"text-2xl\");\n\n    let projects = store.retrieveProjectsData();\n    let project = projects.find((project) => project.id === projectId);\n\n    titleBlock.textContent = project.title;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ })

}]);