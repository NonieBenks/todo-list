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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Projects: () => (/* binding */ Projects)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/modules/store.js\");\n\n\n\nlet store = new _store__WEBPACK_IMPORTED_MODULE_1__.Store();\nclass Projects {\n  constructor() {}\n  project = new _project__WEBPACK_IMPORTED_MODULE_0__.Project(this.id, this.title, this.status, this.tasks);\n\n  addNewProject(title) {\n    let projects = store.retrieveProjectsData();\n\n    this.project.id = projects.length;\n    this.project.title = title;\n    this.project.status = false;\n    this.project.tasks = [];\n\n    projects.push(this.project);\n    this.buildNewProject(this.project);\n    store.save(\"projects\", projects);\n  }\n\n  buildNewProject(projectTemplate) {\n    const addProjectInput = document.querySelector(\".add-quest-btn\");\n    const projectsList = document.querySelector(\".projects\");\n\n    const newProject = document.createElement(\"div\");\n    const projectCheckbox = document.createElement(\"input\");\n\n    newProject.textContent = projectTemplate.title;\n\n    projectCheckbox.type = \"checkbox\";\n\n    projectsList.append(newProject);\n    newProject.prepend(projectCheckbox);\n\n    newProject.classList.add(\n      \"project\",\n      \"bg-sky-50\",\n      \"h-auto\",\n      \"w-auto\",\n      \"rounded-lg\",\n      \"border-2\",\n      \"border-sky-300\",\n      \"p-3\",\n      \"my-3\",\n      \"flex\",\n      \"justify-left\",\n      \"items-center\"\n    );\n    projectCheckbox.className = \"project-checkbox\";\n\n    newProject.addEventListener(\"click\", () => {\n      this.project.displayProjectDetails(projectTemplate.id);\n    });\n\n    projectCheckbox.addEventListener(\"change\", () => {\n      if (projectCheckbox.checked) {\n        project.changeStatus(this.project, true);\n      } else {\n        project.changeStatus(this.project, false);\n      }\n    });\n\n    addProjectInput.value = \"\";\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/projects.js?");

/***/ })

}]);