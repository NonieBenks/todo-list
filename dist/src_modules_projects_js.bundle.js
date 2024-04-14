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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddQuest: () => (/* binding */ AddQuest)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/modules/store.js\");\n\n\nlet store = new _store__WEBPACK_IMPORTED_MODULE_0__.Store();\nclass AddQuest {\n  constructor(title, tasks, status) {\n    this.title = title;\n    this.tasks = tasks;\n    this.status = status;\n  }\n\n  newProjectTemplate = {\n    name: \"\",\n    status: false,\n    tasks: [],\n  };\n\n  addNewProject(title) {\n    let projects = store.retrieveProjectsData();\n\n    this.newProjectTemplate.title = title;\n\n    projects.push(this.newProjectTemplate);\n    store.save(\"projects\", projects);\n  }\n\n  buildNewProject() {\n    const input = document.querySelector(\".add-quest-btn\");\n    const sideQuestsList = document.querySelector(\".side-quests\");\n    const newQuest = sideQuestsList.appendChild(document.createElement(\"div\"));\n    newQuest.classList.add(\n      \"project\",\n      \"bg-slate-200\",\n      \"h-auto\",\n      \"w-auto\",\n      \"rounded-lg\",\n      \"border-2\",\n      \"border-sky-300\",\n      \"p-3\",\n      \"my-3\",\n      \"flex\",\n      \"justify-left\",\n      \"items-center\"\n    );\n    newQuest.addEventListener(\"click\", () => {\n      this.displayProjectDetails(input.value);\n    });\n    newQuest.textContent = input.value;\n    this.addNewProject(input.value);\n    input.value = \"\";\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/projects.js?");

/***/ })

}]);