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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/modules/store.js\");\n\n\nconst store = new _store__WEBPACK_IMPORTED_MODULE_0__.Store();\nclass Task {\n  constructor() {}\n\n  createNewTask(task) {\n    const retrievedProjects = store.retrieveProjectsData();\n    const currentProject = retrievedProjects.find(\n      (project) => project.id === this.id\n    );\n    console.log(currentProject);\n  }\n  setDueDate(dueDate) {\n    this.dueDate = dueDate;\n  }\n\n  setDescription(description) {\n    this.description = description;\n  }\n\n  setPriority(priority) {\n    this.priority = priority;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ })

}]);