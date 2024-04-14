"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["src_modules_project_js"],{

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n  constructor(tasks, status) {\n    this.tasks = tasks;\n    this.status = status;\n  }\n\n  addTask(task) {\n    this.tasks.push(task);\n  }\n\n  changeStatus(status) {\n    this.status = status;\n  }\n\n  displayProjectDetails(\n    title,\n    description = \"\",\n    dueDate = \"\",\n    priority = \"Low\"\n  ) {\n    console.log(\"WORKS: \" + title);\n    let workspace = document.querySelector(\".work-space\");\n    let child = workspace.querySelector(\".container\");\n    workspace.removeChild(child);\n\n    let container = document.createElement(\"div\");\n\n    [...arguments].forEach((item) => {\n      console.log(item);\n    });\n\n    // let titleBlock = document.createElement(\"div\");\n    // let descriptionBlock = document.createElement(\"div\");\n    // let dueDateBlock = document.createElement(\"div\");\n    // let priorityBlock = document.createElement(\"div\");\n\n    // titleBlock.textContent = title;\n    // descriptionBlock.textContent = description;\n    // dueDateBlock.textContent = dueDate;\n    // priorityBlock.textContent = priority;\n\n    // container.appendChildren(titleBlock, descriptionBlock, dueDateBlock, priorityBlock);\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ })

}]);