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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/*\n! tailwindcss v3.4.3 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \\`sans\\` font-family by default.\n5. Use the user's configured \\`sans\\` font-feature-settings by default.\n6. Use the user's configured \\`sans\\` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \\`html\\` so users can set them as a class directly on the \\`html\\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \\`mono\\` font-family by default.\n2. Use the user's configured \\`mono\\` font-feature-settings by default.\n3. Use the user's configured \\`mono\\` font-variation-settings by default.\n4. Correct the odd \\`em\\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \\`sub\\` and \\`sup\\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \\`:invalid\\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \\`inherit\\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \\`display: block\\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \\`vertical-align: middle\\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.visible {\n  visibility: visible;\n}\n.collapse {\n  visibility: collapse;\n}\n.relative {\n  position: relative;\n}\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n.col-span-4 {\n  grid-column: span 4 / span 4;\n}\n.row-span-3 {\n  grid-row: span 3 / span 3;\n}\n.row-span-4 {\n  grid-row: span 4 / span 4;\n}\n.m-2 {\n  margin: 0.5rem;\n}\n.m-2\\\\.5 {\n  margin: 0.625rem;\n}\n.my-3 {\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.block {\n  display: block;\n}\n.inline-block {\n  display: inline-block;\n}\n.flex {\n  display: flex;\n}\n.table {\n  display: table;\n}\n.grid {\n  display: grid;\n}\n.contents {\n  display: contents;\n}\n.hidden {\n  display: none;\n}\n.h-16 {\n  height: 4rem;\n}\n.h-40 {\n  height: 10rem;\n}\n.h-auto {\n  height: auto;\n}\n.h-screen {\n  height: 100vh;\n}\n.w-64 {\n  width: 16rem;\n}\n.w-auto {\n  width: auto;\n}\n.w-full {\n  width: 100%;\n}\n.w-screen {\n  width: 100vw;\n}\n.min-w-10 {\n  min-width: 2.5rem;\n}\n.border-collapse {\n  border-collapse: collapse;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.resize {\n  resize: both;\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-rows-4 {\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.content-center {\n  align-content: center;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-items-center {\n  justify-items: center;\n}\n.gap-5 {\n  gap: 1.25rem;\n}\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-none {\n  border-style: none;\n}\n.border-sky-300 {\n  --tw-border-opacity: 1;\n  border-color: rgba(125, 211, 252, 1);\n  border-color: rgba(125, 211, 252, var(--tw-border-opacity));\n}\n.bg-amber-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(252, 211, 77, 1);\n  background-color: rgba(252, 211, 77, var(--tw-bg-opacity));\n}\n.bg-blue-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(147, 197, 253, 1);\n  background-color: rgba(147, 197, 253, var(--tw-bg-opacity));\n}\n.bg-lime-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(101, 163, 13, 1);\n  background-color: rgba(101, 163, 13, var(--tw-bg-opacity));\n}\n.bg-orange-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(251, 146, 60, 1);\n  background-color: rgba(251, 146, 60, var(--tw-bg-opacity));\n}\n.bg-red-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(220, 38, 38, 1);\n  background-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n.bg-rose-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(225, 29, 72, 1);\n  background-color: rgba(225, 29, 72, var(--tw-bg-opacity));\n}\n.bg-rose-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(190, 18, 60, 1);\n  background-color: rgba(190, 18, 60, var(--tw-bg-opacity));\n}\n.bg-sky-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(240, 249, 255, 1);\n  background-color: rgba(240, 249, 255, var(--tw-bg-opacity));\n}\n.bg-slate-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(226, 232, 240, 1);\n  background-color: rgba(226, 232, 240, var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, 1);\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.p-2 {\n  padding: 0.5rem;\n}\n.p-3 {\n  padding: 0.75rem;\n}\n.text-left {\n  text-align: left;\n}\n.font-mono {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.underline {\n  text-decoration-line: underline;\n}\n.line-through {\n  text-decoration-line: line-through;\n}\n.outline {\n  outline-style: solid;\n}\n.blur {\n  --tw-blur: blur(8px);\n  filter: blur(8px) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.container{\n    width: -moz-fit-content;\n    width: fit-content;\n    font-size: 1.5rem;\n    display: flex;\n    gap: 30px;\n    flex-direction: column;\n}\n\n.container .typing-text {\n        overflow: hidden;\n        border-right: .15em solid orange;\n        width: 0;\n        white-space: nowrap;\n        animation: typing 1.2s steps(30, end) forwards;\n    }\n\n.project-checkbox {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  height: 20px;\n  margin-right: 10px;\n  width: 20px;\n  border: 3px solid #93c5fd;\n  border-radius: 50%;\n}\n\n.project-checkbox:checked {\n    background-color: #93c5fd;\n  }\n\n.project-details {\n  grid-template-rows: max-content max-content 1fr;\n}\n\n#description {\n  display: grid;\n  grid-template-rows: 1fr 3fr;\n  grid-gap: 5px;\n  gap: 5px;\n}\n\n@keyframes typing {\n    0% { width: 0;}\n    99.99% { border-right: .15em solid orange;}\n    100% { width: 100%; border-right: 0; }\n  }\n\n  input:focus {\n    outline: none;\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_build_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/build-home-page */ \"./src/modules/build-home-page.js\");\n/* harmony import */ var _modules_storage_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage-manager */ \"./src/modules/storage-manager.js\");\n/* harmony import */ var _modules_task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/task */ \"./src/modules/task.js\");\n/* harmony import */ var _modules_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/utils */ \"./src/modules/utils.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\n\nconst storageModule = new _modules_storage_manager__WEBPACK_IMPORTED_MODULE_1__.StorageManager();\nconst homePageModule = new _modules_build_home_page__WEBPACK_IMPORTED_MODULE_0__.BuildHomePage();\nconst taskModule = new _modules_task__WEBPACK_IMPORTED_MODULE_2__.Task();\nconst utilsModule = new _modules_utils__WEBPACK_IMPORTED_MODULE_3__.Utils();\n\nconst projectsList = storageModule.retrieveProjectsData();\n\nutilsModule.clearQueryParams();\nhomePageModule.buildHomePage();\n\nconst btn = document.querySelector(\".add-project-btn\");\nconst projects = document.querySelectorAll(\".project\");\n\nbtn.addEventListener(\"keypress\", (event) => {\n  if (event.key === \"Enter\") {\n    __webpack_require__.e(/*! import() */ \"src_modules_projects_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/projects */ \"./src/modules/projects.js\")).then((Module) => {\n      const projects = new Module.Projects();\n      projects.createNewProject(btn);\n    });\n  }\n});\n\nprojects.forEach((projectItem) => {\n  projectItem.addEventListener(\"click\", () => {\n    prepareCurrentProject(projectsList, projectItem);\n  });\n});\n\nfunction prepareCurrentProject(projectsList, projectItem) {\n  let currentProject = projectsList.find(\n    (project) =>\n      project.id.toString() === projectItem.getAttribute(\"project-id\")\n  );\n\n  Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/project */ \"./src/modules/project.js\")).then((Module) => {\n    const project = new Module.Project();\n\n    project.displayProjectDetails(currentProject.id);\n    const containerBlock = document.querySelector(\".project-details\");\n    containerBlock.setAttribute(\"tabindex\", \"0\");\n    document.addEventListener(\"keypress\", (event) => {\n      const currentPage = utilsModule.getCurrentPage();\n      const newTask = {\n        id: 0,\n        title: \"\",\n        description: \"Change task description\",\n        priority: \"low\",\n        status: false,\n        date: new Date(),\n      };\n      if (event.key === \"n\" && currentPage === \"project\") {\n        taskModule.createNewTask(newTask, currentProject);\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/build-home-page.js":
/*!****************************************!*\
  !*** ./src/modules/build-home-page.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BuildHomePage: () => (/* binding */ BuildHomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/delete.svg */ \"./src/assets/delete.svg\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage-manager */ \"./src/modules/storage-manager.js\");\n\n\n\n\nconst storage = new _storage_manager__WEBPACK_IMPORTED_MODULE_2__.StorageManager();\nconst projectModule = new _project__WEBPACK_IMPORTED_MODULE_1__.Project();\nclass BuildHomePage {\n  constructor() {}\n\n  buildHomePage() {\n    const gridContainer = document.createElement(\"div\");\n    gridContainer.classList.add(\n      \"app-container\",\n      \"grid\",\n      \"grid-rows-4\",\n      \"grid-cols-4\",\n      \"w-screen\",\n      \"h-screen\"\n    );\n    document.body.appendChild(gridContainer);\n\n    this.buildMainSection(gridContainer);\n    this.buildMainQuestSection(gridContainer);\n    this.buildProjectsSection(gridContainer);\n    this.buildAddQuestSection(gridContainer);\n  }\n  buildMainSection(gridContainer) {\n    const mainSection = document.createElement(\"div\");\n    mainSection.classList.add(\n      \"work-space\",\n      \"bg-amber-300\",\n      \"p-3\",\n      \"col-span-3\",\n      \"row-span-4\",\n      \"flex\",\n      \"items-center\",\n      \"text-left\",\n      \"justify-start\"\n    );\n    gridContainer.appendChild(mainSection);\n\n    const container = document.createElement(\"div\");\n    container.classList.add(\"container\", \"inline-block\");\n    mainSection.appendChild(container);\n\n    const typingFirstLine = document.createElement(\"div\");\n    typingFirstLine.textContent = \"Create a new project below\";\n    container.appendChild(typingFirstLine);\n\n    const typingSecondLine = document.createElement(\"div\");\n    typingSecondLine.classList.add(\"typing-text\");\n    typingSecondLine.textContent =\n      \"Press 'n' inside a project to create a task\";\n    container.appendChild(typingSecondLine);\n  }\n\n  buildMainQuestSection(gridContainer) {\n    const mainQuestSection = document.createElement(\"div\");\n    mainQuestSection.classList.add(\"bg-orange-400\", \"p-3\", \"main-quest\");\n    gridContainer.appendChild(mainQuestSection);\n\n    const mainQuestTitle = document.createElement(\"h3\");\n    mainQuestTitle.classList.add(\"text-4xl\", \"font-bold\");\n    mainQuestTitle.textContent = \"Main quest\";\n    mainQuestSection.appendChild(mainQuestTitle);\n\n    const mainQuestDescription = document.createElement(\"p\");\n    mainQuestDescription.textContent = \"Define your ultimate goal\";\n    mainQuestSection.appendChild(mainQuestDescription);\n  }\n\n  buildProjectsSection(gridContainer) {\n    const projectsSection = document.createElement(\"div\");\n    projectsSection.classList.add(\n      \"p-3\",\n      \"projects\",\n      \"bg-lime-600\",\n      \"row-span-4\"\n    );\n    gridContainer.appendChild(projectsSection);\n\n    const projectTitle = document.createElement(\"h3\");\n    projectTitle.classList.add(\"text-3xl\");\n    projectTitle.textContent = \"Projects\";\n    projectsSection.appendChild(projectTitle);\n\n    const projectsList = document.querySelector(\".projects\");\n    let retrievedProjects = storage.retrieveProjectsData();\n\n    retrievedProjects.map((project) => {\n      this.buildProjectItem(projectsList, project);\n    });\n  }\n\n  buildProjectItem(projectsList, project) {\n    let projectInstance = new _project__WEBPACK_IMPORTED_MODULE_1__.Project(\n      project.id,\n      project.title,\n      project.status,\n      project.tasks\n    );\n\n    const projectItem = projectsList.appendChild(document.createElement(\"div\"));\n    projectItem.classList.add(\n      \"project\",\n      \"bg-sky-50\",\n      \"h-auto\",\n      \"w-auto\",\n      \"rounded-lg\",\n      \"border-2\",\n      \"border-sky-300\",\n      \"p-3\",\n      \"my-3\",\n      \"flex\",\n      \"justify-left\",\n      \"items-center\"\n    );\n    projectItem.setAttribute(\"project-id\", project.id);\n\n    projectItem.textContent = project.title;\n    project.status\n      ? projectItem.classList.add(\"line-through\")\n      : projectItem.classList.remove(\"line-through\");\n\n    projectItem.addEventListener(\"click\", () => {\n      projectModule.displayProjectDetails(project.id);\n    });\n\n    let projectCheckbox = document.createElement(\"input\");\n    projectCheckbox.type = \"checkbox\";\n    projectCheckbox.checked = project.status;\n    projectCheckbox.className = \"project-checkbox\";\n    projectCheckbox.addEventListener(\"change\", (event) => {\n      event.stopPropagation();\n      if (projectCheckbox.checked) {\n        project.status = true;\n        projectInstance.changeStatus(project, true);\n      } else {\n        project.status = false;\n        projectInstance.changeStatus(project, false);\n      }\n      project.status\n        ? projectItem.classList.add(\"line-through\")\n        : projectItem.classList.remove(\"line-through\");\n    });\n    projectItem.prepend(projectCheckbox);\n\n    let deleteButton = document.createElement(\"img\");\n    deleteButton.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;\n    deleteButton.classList.add(\n      \"delete-button\",\n      \"material-symbols-outlined\",\n      \"ml-auto\"\n    );\n    deleteButton.textContent = \"delete\";\n\n    deleteButton.addEventListener(\"click\", (event) => {\n      event.stopPropagation();\n      const result = confirm(\"Are you sure you want to delete this project?\");\n      if (result) {\n        projectInstance.deleteProject(project);\n        projectItem.remove();\n      }\n    });\n\n    projectItem.append(deleteButton);\n  }\n\n  buildAddQuestSection(gridContainer) {\n    const addQuestSection = document.createElement(\"div\");\n    addQuestSection.classList.add(\n      \"col-span-4\",\n      \"h-16\",\n      \"text-left\",\n      \"p-3\",\n      \"row-span-3\",\n      \"bg-blue-300\",\n      \"flex\",\n      \"flex-row\",\n      \"content-center\"\n    );\n    gridContainer.append(addQuestSection);\n\n    const plusSpan = document.createElement(\"span\");\n    plusSpan.classList.add(\n      \"flex\",\n      \"items-center\",\n      \"justify-center\",\n      \"min-w-10\"\n    );\n    plusSpan.textContent = \"+\";\n    addQuestSection.append(plusSpan);\n\n    const inputElement = document.createElement(\"input\");\n    inputElement.setAttribute(\"type\", \"text\");\n    inputElement.setAttribute(\"placeholder\", \"Add new project\");\n    inputElement.classList.add(\n      \"add-project-btn\",\n      \"bg-blue-300\",\n      \"w-screen\",\n      \"border-none\",\n      \"p-3\"\n    );\n    addQuestSection.append(inputElement);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/build-home-page.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage-manager */ \"./src/modules/storage-manager.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n\n\n\n\nconst storage = new _storage_manager__WEBPACK_IMPORTED_MODULE_0__.StorageManager();\nconst taskModule = new _task__WEBPACK_IMPORTED_MODULE_1__.Task();\nconst utils = new _utils__WEBPACK_IMPORTED_MODULE_2__.Utils();\n\nclass Project {\n  constructor(id, title, status, tasks) {\n    this.id = id;\n    this.title = title;\n    this.status = status;\n    this.tasks = tasks;\n  }\n\n  changeStatus(updatedProject, status) {\n    let allProjects = storage.retrieveProjectsData();\n\n    let currentProject = allProjects.find(\n      (project) => project.id === updatedProject.id\n    );\n    currentProject.status = status;\n\n    storage.save(\"projects\", allProjects);\n    this.displayProjectDetails(currentProject.id);\n  }\n\n  deleteProject(projectToDelete) {\n    let allProjects = storage.retrieveProjectsData();\n\n    let currentProject = allProjects.find(\n      (project) => project.id === projectToDelete.id\n    );\n    allProjects.splice(allProjects.indexOf(currentProject), 1);\n\n    storage.save(\"projects\", allProjects);\n    window.location.reload();\n  }\n\n  displayProjectDetails(projectId) {\n    let appContainer = document.querySelector(\".app-container\");\n    let workspace = document.querySelector(\".work-space\");\n    workspace.remove();\n\n    let workSpace = document.createElement(\"div\");\n    let titleBlock = document.createElement(\"h3\");\n    let statusBlock = document.createElement(\"h3\");\n    let tasksBlock = document.createElement(\"div\");\n\n    workSpace.classList.add(\n      \"project-details\",\n      \"work-space\",\n      \"col-span-3\",\n      \"row-span-4\",\n      \"w-full\",\n      \"bg-amber-300\",\n      \"grid\"\n    );\n    titleBlock.classList.add(\"flex\", \"justify-center\", \"m-2.5\", \"text-3xl\");\n    statusBlock.classList.add(\"m-2.5\", \"text-2xl\");\n    tasksBlock.classList.add(\n      \"tasks-container\",\n      \"grid\",\n      \"grid-cols-2\",\n      \"w-full\",\n      \"justify-items-center\",\n      \"flex-wrap\",\n      \"gap-5\",\n      \"overflow-y-scroll\",\n      \"scroll-smooth\"\n    );\n\n    let projects = storage.retrieveProjectsData();\n    let project = projects.find((projectItem) => projectItem.id === projectId);\n\n    titleBlock.textContent = project.title;\n    project.status\n      ? titleBlock.classList.add(\"line-through\")\n      : titleBlock.classList.remove(\"line-through\");\n    statusBlock.textContent = project.status\n      ? \"Status: Done\"\n      : \"Status: In Progress\";\n    utils.goToUrl(\"page\", \"project\");\n    utils.goToUrl(\"project-id\", project.id);\n\n    document.addEventListener(\"keypress\", (event) => {\n      const currentPage = utils.getCurrentPage();\n      const currentProjectId = utils.getCurrentProjectId();\n      const currentProject = projects.find(\n        (project) => project.id === currentProjectId\n      );\n      const newTask = {\n        id: 0,\n        title: \"\",\n        description: \"Change task description\",\n        priority: \"low\",\n        status: false,\n        date: new Date(),\n      };\n      if (event.key === \"n\" && currentPage === \"project\") {\n        taskModule.createNewTask(newTask, currentProject);\n      }\n    });\n\n    appContainer.prepend(workSpace);\n    workSpace.append(titleBlock);\n    workSpace.append(statusBlock);\n    workSpace.append(tasksBlock);\n\n    project.tasks.forEach((task) => {\n      taskModule.displayTaskCard(task, project);\n    });\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

/***/ }),

/***/ "./src/modules/storage-manager.js":
/*!****************************************!*\
  !*** ./src/modules/storage-manager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StorageManager: () => (/* binding */ StorageManager)\n/* harmony export */ });\nclass StorageManager {\n  constructor() {}\n  save(key, value) {\n    localStorage.setItem(key, JSON.stringify(value));\n    console.log(JSON.parse(localStorage.getItem(key)));\n  }\n\n  retrieveProjectsData() {\n    if (localStorage.getItem(\"projects\") === null) {\n      let projects = [\n        {\n          id: 0,\n          title: \"Training\",\n          status: false,\n          tasks: [],\n        },\n        {\n          id: 1,\n          title: \"Family\",\n          status: true,\n          tasks: [],\n        },\n        {\n          id: 2,\n          title: \"Build a home\",\n          status: false,\n          tasks: [],\n        },\n      ];\n      this.save(\"projects\", projects);\n      return projects;\n    } else {\n      let projects = JSON.parse(localStorage.getItem(\"projects\"));\n      return projects;\n    }\n  }\n\n  retrieveMainQuestData() {\n    if (localStorage.getItem(\"mainQuest\") === null) {\n      let mainQuest = {\n        title: \"Save the princess\",\n        subquests: [\n          \"Get a horse\",\n          \"Find a map\",\n          \"Prepare weapons\",\n          \"Kill a dragon\",\n        ],\n        notes:\n          \"Princess Celestia disappeared a few hours ago. I have only one suspect: a dragon.\",\n        sidequests: [\"Read a book\", \"Find Harold\", \"Buy a silver spear\"],\n      };\n      this.save(\"mainQuest\", mainQuest);\n      return mainQuest;\n    } else {\n      let mainQuest = JSON.parse(localStorage.getItem(\"mainQuest\"));\n      return mainQuest;\n    }\n  }\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/storage-manager.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/delete.svg */ \"./src/assets/delete.svg\");\n/* harmony import */ var _storage_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage-manager */ \"./src/modules/storage-manager.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/modules/utils.js\");\n\n\n\n\nconst storage = new _storage_manager__WEBPACK_IMPORTED_MODULE_1__.StorageManager();\nconst utils = new _utils__WEBPACK_IMPORTED_MODULE_2__.Utils();\nclass Task {\n  constructor() {}\n\n  createNewTask(task, openedProject) {\n    const retrievedProjects = storage.retrieveProjectsData();\n    const currentProject = retrievedProjects.find(\n      (project) => project.id === openedProject.id\n    );\n\n    task.id = currentProject.tasks.length;\n    task.title = `Task${currentProject.tasks.length}`;\n\n    currentProject.tasks.push(task);\n    utils.goToUrl(\"page\", \"task\");\n    storage.save(\"projects\", retrievedProjects);\n    this.displayTaskDetails(task, currentProject);\n  }\n\n  displayTaskDetails(currentTask, currentProject) {\n    let appContainer = document.querySelector(\".app-container\");\n    let workSpace = document.querySelector(\".work-space\");\n    workSpace.remove();\n\n    let newWorkSpace = document.createElement(\"div\");\n\n    newWorkSpace.classList.add(\n      \"work-space\",\n      \"col-span-3\",\n      \"row-span-4\",\n      \"w-full\",\n      \"bg-amber-300\"\n    );\n\n    let tasks = document.createElement(\"div\");\n\n    tasks.classList.add(\n      \"tasks-container\",\n      \"col-span-3\",\n      \"row-span-4\",\n      \"w-full\",\n      \"bg-amber-300\"\n    );\n\n    const titleBlock = createBlock(\"Title:\", currentTask.title, \"title\");\n    const descriptionBlock = createBlock(\n      \"Description:\",\n      currentTask.description,\n      \"description\"\n    );\n    const dueDateBlock = createBlock(\n      \"Due Date:\",\n      currentTask.dueDate || \"Enter date here\",\n      \"dueDate\"\n    );\n    const priorityBlock = createBlock(\n      \"Priority:\",\n      currentTask.priority,\n      \"priority\"\n    );\n\n    document.body.appendChild(titleBlock);\n    document.body.appendChild(descriptionBlock);\n    document.body.appendChild(dueDateBlock);\n    document.body.appendChild(priorityBlock);\n\n    function createBlock(label, defaultValue, reference) {\n      const blockDiv = document.createElement(\"div\");\n      blockDiv.id = reference;\n\n      const labelField = document.createElement(\"h3\");\n      labelField.textContent = label;\n\n      let valueField;\n\n      switch (reference) {\n        case \"dueDate\":\n          valueField = document.createElement(\"input\");\n          valueField.type = \"date\";\n          break;\n        case \"priority\":\n          const selectElement = document.createElement(\"select\");\n          const optionValues = [\"low\", \"medium\", \"high\"];\n\n          optionValues.map((value) => {\n            const optionElement = document.createElement(\"option\");\n            optionElement.textContent = value;\n            selectElement.appendChild(optionElement);\n          });\n          valueField = selectElement;\n          break;\n        case \"description\":\n          valueField = document.createElement(\"textarea\");\n          break;\n        default:\n          valueField = document.createElement(\"input\");\n      }\n\n      valueField.className = \"bg-amber-300\";\n      valueField.value = defaultValue;\n\n      valueField.addEventListener(\"keydown\", function (event) {\n        if (event.key === \"Enter\") {\n          event.preventDefault();\n          this.blur();\n        }\n      });\n\n      valueField.addEventListener(\"blur\", function () {\n        const editedValue = this.value.trim();\n        const currentElement = valueField.parentElement.id;\n        const retrievedProjects = storage.retrieveProjectsData();\n\n        const ourProject = retrievedProjects.find(\n          (project) => project.id === currentProject.id\n        );\n        const ourTask = ourProject.tasks.find(\n          (task) => task.id === currentTask.id\n        );\n        ourTask[currentElement] = editedValue;\n        storage.save(\"projects\", retrievedProjects);\n      });\n\n      blockDiv.appendChild(labelField);\n      blockDiv.appendChild(valueField);\n\n      return blockDiv;\n    }\n\n    appContainer.prepend(newWorkSpace);\n    newWorkSpace.append(tasks);\n    tasks.append(titleBlock);\n    tasks.append(dueDateBlock);\n    tasks.append(priorityBlock);\n    tasks.append(descriptionBlock);\n\n    let tasksElements = tasks.children;\n    for (let i = 0; i < tasksElements.length; i++) {\n      const child = tasksElements[i];\n      child.classList.add(\"flex\", \"m-2.5\", \"text-2xl\");\n    }\n  }\n\n  displayTaskCard(task, project) {\n    let tasksContainer = document.querySelector(\".tasks-container\");\n    let taskCard = document.createElement(\"div\");\n    taskCard.classList.add(\"task-card\", \"h-40\", \"w-64\", \"text-xl\", \"p-3\");\n    switch (task.priority) {\n      case \"low\":\n        taskCard.classList.add(\"bg-lime-600\");\n        break;\n      case \"medium\":\n        taskCard.classList.add(\"bg-orange-400\");\n        break;\n      case \"high\":\n        taskCard.classList.add(\"bg-rose-600\");\n        break;\n      default:\n        taskCard.classList.add(\"bg-white\");\n    }\n\n    taskCard.addEventListener(\"click\", () => {\n      utils.goToUrl(\"page\", \"task\");\n      this.displayTaskDetails(task, project);\n    });\n\n    let taskTitle = document.createElement(\"h3\");\n    taskTitle.classList.add(\"flex\");\n    taskTitle.textContent = task.title;\n    let deleteButton = document.createElement(\"img\");\n    deleteButton.classList.add(\"ml-auto\");\n    deleteButton.src = _assets_delete_svg__WEBPACK_IMPORTED_MODULE_0__;\n    let taskDueDate = document.createElement(\"h3\");\n    taskDueDate.textContent = task.dueDate;\n\n    deleteButton.addEventListener(\"click\", (event) => {\n      event.stopPropagation();\n      const result = confirm(\"Are you sure you want to delete this task?\");\n      if (result) {\n        this.deleteTask(task, project);\n        taskCard.remove();\n      }\n    });\n\n    taskCard.appendChild(taskTitle);\n    taskTitle.appendChild(deleteButton);\n    taskCard.appendChild(taskDueDate);\n    tasksContainer.appendChild(taskCard);\n  }\n\n  deleteTask(taskToDelete, parentProject) {\n    let allProjects = storage.retrieveProjectsData();\n\n    let currentProject = allProjects.find(\n      (project) => project.id === parentProject.id\n    );\n\n    let currentTask = currentProject.tasks.find(\n      (task) => task.id === taskToDelete.id\n    );\n\n    let allTasks = currentProject.tasks;\n    allTasks.splice(allTasks.indexOf(currentTask), 1);\n\n    storage.save(\"projects\", allProjects);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/utils.js":
/*!******************************!*\
  !*** ./src/modules/utils.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Utils: () => (/* binding */ Utils)\n/* harmony export */ });\nclass Utils {\n  goToUrl(param, value) {\n    const queryParams = new URLSearchParams(window.location.search);\n    queryParams.set(param, value);\n    const newUrl = `${window.location.pathname}?${queryParams.toString()}`;\n    window.history.replaceState({}, \"\", newUrl);\n  }\n\n  getCurrentPage() {\n    const queryParams = new URLSearchParams(window.location.search);\n    return queryParams.get(\"page\");\n  }\n\n  getCurrentProjectId() {\n    const queryParams = new URLSearchParams(window.location.search);\n    return parseInt(queryParams.get(\"project-id\"));\n  }\n\n  clearQueryParams() {\n    const urlObj = new URL(window.location);\n    urlObj.search = \"\";\n    window.history.replaceState({}, \"\", urlObj.href);\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/utils.js?");

/***/ }),

/***/ "./src/assets/delete.svg":
/*!*******************************!*\
  !*** ./src/assets/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5dea5c232eb4bd3492a7.svg\";\n\n//# sourceURL=webpack://todo-list/./src/assets/delete.svg?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "todo-list:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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