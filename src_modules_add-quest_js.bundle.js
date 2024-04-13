"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["src_modules_add-quest_js"],{

/***/ "./src/modules/add-quest.js":
/*!**********************************!*\
  !*** ./src/modules/add-quest.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AddQuest: () => (/* binding */ AddQuest)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store */ \"./src/modules/store.js\");\n\n\nlet store = new _store__WEBPACK_IMPORTED_MODULE_0__.Store();\nclass AddQuest {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n\n  newProjectTemplate = {\n    name: \"\",\n    tasks: [],\n  };\n\n  addNewProject(title) {\n    let storage = store.retrieveLocalStorage();\n\n    this.newProjectTemplate.name = title;\n    storage.projects.push(this.newProjectTemplate);\n    store.save(\"store\", storage);\n    console.log(storage);\n  }\n\n  getAllProjects() {\n    let storeObject = JSON.parse(localStorage.getItem(\"store\"));\n    console.log(storeObject);\n    this.projectsList = storeObject.projects;\n    return storeObject.projects;\n  }\n\n  buildNewProject() {\n    const input = document.querySelector(\".add-quest-btn\");\n    const sideQuestsList = document.querySelector(\".side-quests\");\n    const newQuest = sideQuestsList.appendChild(document.createElement(\"div\"));\n    newQuest.classList.add(\n      \"bg-slate-200\",\n      \"h-auto\",\n      \"w-auto\",\n      \"rounded-lg\",\n      \"border-2\",\n      \"border-sky-300\",\n      \"p-3\",\n      \"my-3\",\n      \"flex\",\n      \"justify-left\",\n      \"items-center\"\n    );\n    newQuest.textContent = input.value;\n    this.addNewProject(input.value);\n    input.value = \"\";\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/add-quest.js?");

/***/ })

}]);