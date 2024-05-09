"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["src_modules_projects_js"],{

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Projects: () => (/* binding */ Projects)\n/* harmony export */ });\n/* harmony import */ var _build_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./build-home-page */ \"./src/modules/build-home-page.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-manager */ \"./src/modules/storage-manager.js\");\n\n\n\n\nconst storageModule = new _storage_manager__WEBPACK_IMPORTED_MODULE_2__.StorageManager();\nconst buildHomePageModule = new _build_home_page__WEBPACK_IMPORTED_MODULE_0__.BuildHomePage();\nclass Projects {\n  constructor() {}\n  project = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(this.id, this.title, this.status, this.tasks);\n\n  createNewProject(btn) {\n    const projects = storageModule.retrieveProjectsData();\n\n    this.project.id = projects.length;\n    this.project.title = btn.value;\n    this.project.status = false;\n    this.project.tasks = [];\n\n    projects.push(this.project);\n    storageModule.save(\"projects\", projects);\n\n    btn.value = \"\";\n\n    const projectsList = document.querySelector(\".projects\");\n    buildHomePageModule.buildProjectItem(projectsList, this.project);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/projects.js?");

/***/ })

}]);