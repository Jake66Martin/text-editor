/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("var butInstall = document.getElementById(\"buttonInstall\");\n\n// Logic for installing the PWA\n// TODO: Add an event handler to the `beforeinstallprompt` event\nwindow.addEventListener(\"beforeinstallprompt\", function (event) {\n  event.preventDefault();\n  console.log(event);\n  butInstall.style.visibility = \"visible\";\n\n  // TODO: Implement a click event handler on the `butInstall` element\n  butInstall.addEventListener(\"click\", function () {\n    event.prompt();\n    butInstall.setAttribute(\"disabled\", true);\n  });\n});\n\n// TODO: Add an handler for the `appinstalled` event\nwindow.addEventListener(\"appinstalled\", function (event) {\n  butInstall.textContent = \"Installed!\";\n});\n\n//# sourceURL=webpack://JATE/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;