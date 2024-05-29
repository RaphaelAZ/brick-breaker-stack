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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/app.scss":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/app.scss ***!
  \****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Jaro/Jaro-Regular-VariableFont_opsz.ttf */ \"./fonts/Jaro/Jaro-Regular-VariableFont_opsz.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Audiowide/Audiowide-Regular.ttf */ \"./fonts/Audiowide/Audiowide-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Jaro\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format(\"truetype\");\n}\n@font-face {\n  font-family: \"Audiowide\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format(\"truetype\");\n}\nbody {\n  font-family: \"Audiowide\", sans-serif;\n  background-color: black;\n  overflow: hidden;\n  position: relative;\n}\nbody .star {\n  position: absolute;\n  background-color: white;\n  border-radius: 50%;\n  opacity: 0.8;\n  animation: twinkle 2s infinite;\n}\n@keyframes twinkle {\n  0%, 100% {\n    opacity: 0.8;\n  }\n  50% {\n    opacity: 0.5;\n  }\n}\n\n#gameCanvas {\n  display: block;\n  margin: 0 auto;\n  border: 1px solid black;\n}\n\n#playerModal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.4);\n  padding-top: 60px;\n}\n\n#playerModalContent {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-flow: row nowrap;\n  gap: 2rem;\n  background-color: #1a1a1a;\n  margin: 5% auto;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  max-width: 800px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);\n}\n\n#modalLeft {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 50%;\n}\n#modalLeft .gameNameTitle {\n  color: #FFFFFF;\n}\n#modalLeft label {\n  margin-top: 1rem;\n  color: #FFFFFF;\n  font-size: 1.5rem;\n}\n#modalLeft input {\n  width: 100%;\n  padding: 10px;\n  margin: 10px 0;\n  box-sizing: border-box;\n  border: 2px solid #6a329f;\n  border-radius: 5px;\n  background-color: #333;\n  color: #fff;\n  font-family: \"Audiowide\", sans-serif;\n  font-size: 1.2rem;\n  text-align: center;\n}\n#modalLeft button {\n  width: 100%;\n  padding: 10px;\n  margin: 10px 0;\n  box-sizing: border-box;\n  border: 2px solid #6a329f;\n  border-radius: 5px;\n  background-color: #6a329f;\n  color: #fff;\n  font-family: \"Audiowide\", sans-serif;\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n#modalLeft button:hover {\n  background-color: #532781;\n}\n\n#modalRight {\n  width: 50%;\n  color: #fff;\n}\n#modalRight h2 {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n#modalRight ul {\n  list-style-type: none;\n  padding: 0;\n}\n#modalRight ul li {\n  background: #333;\n  margin-bottom: 0.5rem;\n  padding: 10px;\n  border-radius: 5px;\n  font-size: 1.2rem;\n  text-align: center;\n}\n#modalRight .gameOverTitle {\n  display: none;\n  font-family: \"Jaro\", sans-serif;\n  color: #6a329f;\n}\n#modalRight .gameOverTitle .gameOverScore {\n  color: #FFFFFF;\n}\n\n#startGameButton {\n  display: block;\n  margin: 0 auto;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./scss/app.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\r\n\r\n/*\r\n  MIT License http://www.opensource.org/licenses/mit-license.php\r\n  Author Tobias Koppers @sokra\r\n*/\r\nmodule.exports = function (cssWithMappingToString) {\r\n  var list = [];\r\n\r\n  // return the list of modules as css string\r\n  list.toString = function toString() {\r\n    return this.map(function (item) {\r\n      var content = \"\";\r\n      var needLayer = typeof item[5] !== \"undefined\";\r\n      if (item[4]) {\r\n        content += \"@supports (\".concat(item[4], \") {\");\r\n      }\r\n      if (item[2]) {\r\n        content += \"@media \".concat(item[2], \" {\");\r\n      }\r\n      if (needLayer) {\r\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\r\n      }\r\n      content += cssWithMappingToString(item);\r\n      if (needLayer) {\r\n        content += \"}\";\r\n      }\r\n      if (item[2]) {\r\n        content += \"}\";\r\n      }\r\n      if (item[4]) {\r\n        content += \"}\";\r\n      }\r\n      return content;\r\n    }).join(\"\");\r\n  };\r\n\r\n  // import a list of modules into the list\r\n  list.i = function i(modules, media, dedupe, supports, layer) {\r\n    if (typeof modules === \"string\") {\r\n      modules = [[null, modules, undefined]];\r\n    }\r\n    var alreadyImportedModules = {};\r\n    if (dedupe) {\r\n      for (var k = 0; k < this.length; k++) {\r\n        var id = this[k][0];\r\n        if (id != null) {\r\n          alreadyImportedModules[id] = true;\r\n        }\r\n      }\r\n    }\r\n    for (var _k = 0; _k < modules.length; _k++) {\r\n      var item = [].concat(modules[_k]);\r\n      if (dedupe && alreadyImportedModules[item[0]]) {\r\n        continue;\r\n      }\r\n      if (typeof layer !== \"undefined\") {\r\n        if (typeof item[5] === \"undefined\") {\r\n          item[5] = layer;\r\n        } else {\r\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\r\n          item[5] = layer;\r\n        }\r\n      }\r\n      if (media) {\r\n        if (!item[2]) {\r\n          item[2] = media;\r\n        } else {\r\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\r\n          item[2] = media;\r\n        }\r\n      }\r\n      if (supports) {\r\n        if (!item[4]) {\r\n          item[4] = \"\".concat(supports);\r\n        } else {\r\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\r\n          item[4] = supports;\r\n        }\r\n      }\r\n      list.push(item);\r\n    }\r\n  };\r\n  return list;\r\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (url, options) {\r\n  if (!options) {\r\n    options = {};\r\n  }\r\n  if (!url) {\r\n    return url;\r\n  }\r\n  url = String(url.__esModule ? url.default : url);\r\n\r\n  // If url is already wrapped in quotes, remove them\r\n  if (/^['\"].*['\"]$/.test(url)) {\r\n    url = url.slice(1, -1);\r\n  }\r\n  if (options.hash) {\r\n    url += options.hash;\r\n  }\r\n\r\n  // Should url be wrapped?\r\n  // See https://drafts.csswg.org/css-values-3/#urls\r\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\r\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\r\n  }\r\n  return url;\r\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\r\n\r\nmodule.exports = function (i) {\r\n  return i[1];\r\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./scss/app.scss":
/*!***********************!*\
  !*** ./scss/app.scss ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./app.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./scss/app.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./scss/app.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar stylesInDOM = [];\r\nfunction getIndexByIdentifier(identifier) {\r\n  var result = -1;\r\n  for (var i = 0; i < stylesInDOM.length; i++) {\r\n    if (stylesInDOM[i].identifier === identifier) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  return result;\r\n}\r\nfunction modulesToDom(list, options) {\r\n  var idCountMap = {};\r\n  var identifiers = [];\r\n  for (var i = 0; i < list.length; i++) {\r\n    var item = list[i];\r\n    var id = options.base ? item[0] + options.base : item[0];\r\n    var count = idCountMap[id] || 0;\r\n    var identifier = \"\".concat(id, \" \").concat(count);\r\n    idCountMap[id] = count + 1;\r\n    var indexByIdentifier = getIndexByIdentifier(identifier);\r\n    var obj = {\r\n      css: item[1],\r\n      media: item[2],\r\n      sourceMap: item[3],\r\n      supports: item[4],\r\n      layer: item[5]\r\n    };\r\n    if (indexByIdentifier !== -1) {\r\n      stylesInDOM[indexByIdentifier].references++;\r\n      stylesInDOM[indexByIdentifier].updater(obj);\r\n    } else {\r\n      var updater = addElementStyle(obj, options);\r\n      options.byIndex = i;\r\n      stylesInDOM.splice(i, 0, {\r\n        identifier: identifier,\r\n        updater: updater,\r\n        references: 1\r\n      });\r\n    }\r\n    identifiers.push(identifier);\r\n  }\r\n  return identifiers;\r\n}\r\nfunction addElementStyle(obj, options) {\r\n  var api = options.domAPI(options);\r\n  api.update(obj);\r\n  var updater = function updater(newObj) {\r\n    if (newObj) {\r\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\r\n        return;\r\n      }\r\n      api.update(obj = newObj);\r\n    } else {\r\n      api.remove();\r\n    }\r\n  };\r\n  return updater;\r\n}\r\nmodule.exports = function (list, options) {\r\n  options = options || {};\r\n  list = list || [];\r\n  var lastIdentifiers = modulesToDom(list, options);\r\n  return function update(newList) {\r\n    newList = newList || [];\r\n    for (var i = 0; i < lastIdentifiers.length; i++) {\r\n      var identifier = lastIdentifiers[i];\r\n      var index = getIndexByIdentifier(identifier);\r\n      stylesInDOM[index].references--;\r\n    }\r\n    var newLastIdentifiers = modulesToDom(newList, options);\r\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\r\n      var _identifier = lastIdentifiers[_i];\r\n      var _index = getIndexByIdentifier(_identifier);\r\n      if (stylesInDOM[_index].references === 0) {\r\n        stylesInDOM[_index].updater();\r\n        stylesInDOM.splice(_index, 1);\r\n      }\r\n    }\r\n    lastIdentifiers = newLastIdentifiers;\r\n  };\r\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\r\n\r\nvar memo = {};\r\n\r\n/* istanbul ignore next  */\r\nfunction getTarget(target) {\r\n  if (typeof memo[target] === \"undefined\") {\r\n    var styleTarget = document.querySelector(target);\r\n\r\n    // Special case to return head of iframe instead of iframe itself\r\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\r\n      try {\r\n        // This will throw an exception if access to iframe is blocked\r\n        // due to cross-origin restrictions\r\n        styleTarget = styleTarget.contentDocument.head;\r\n      } catch (e) {\r\n        // istanbul ignore next\r\n        styleTarget = null;\r\n      }\r\n    }\r\n    memo[target] = styleTarget;\r\n  }\r\n  return memo[target];\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction insertBySelector(insert, style) {\r\n  var target = getTarget(insert);\r\n  if (!target) {\r\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\r\n  }\r\n  target.appendChild(style);\r\n}\r\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction insertStyleElement(options) {\r\n  var element = document.createElement(\"style\");\r\n  options.setAttributes(element, options.attributes);\r\n  options.insert(element, options.options);\r\n  return element;\r\n}\r\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction setAttributesWithoutAttributes(styleElement) {\r\n  var nonce =  true ? __webpack_require__.nc : 0;\r\n  if (nonce) {\r\n    styleElement.setAttribute(\"nonce\", nonce);\r\n  }\r\n}\r\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction apply(styleElement, options, obj) {\r\n  var css = \"\";\r\n  if (obj.supports) {\r\n    css += \"@supports (\".concat(obj.supports, \") {\");\r\n  }\r\n  if (obj.media) {\r\n    css += \"@media \".concat(obj.media, \" {\");\r\n  }\r\n  var needLayer = typeof obj.layer !== \"undefined\";\r\n  if (needLayer) {\r\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\r\n  }\r\n  css += obj.css;\r\n  if (needLayer) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.media) {\r\n    css += \"}\";\r\n  }\r\n  if (obj.supports) {\r\n    css += \"}\";\r\n  }\r\n  var sourceMap = obj.sourceMap;\r\n  if (sourceMap && typeof btoa !== \"undefined\") {\r\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\r\n  }\r\n\r\n  // For old IE\r\n  /* istanbul ignore if  */\r\n  options.styleTagTransform(css, styleElement, options.options);\r\n}\r\nfunction removeStyleElement(styleElement) {\r\n  // istanbul ignore if\r\n  if (styleElement.parentNode === null) {\r\n    return false;\r\n  }\r\n  styleElement.parentNode.removeChild(styleElement);\r\n}\r\n\r\n/* istanbul ignore next  */\r\nfunction domAPI(options) {\r\n  if (typeof document === \"undefined\") {\r\n    return {\r\n      update: function update() {},\r\n      remove: function remove() {}\r\n    };\r\n  }\r\n  var styleElement = options.insertStyleElement(options);\r\n  return {\r\n    update: function update(obj) {\r\n      apply(styleElement, options, obj);\r\n    },\r\n    remove: function remove() {\r\n      removeStyleElement(styleElement);\r\n    }\r\n  };\r\n}\r\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\r\n\r\n/* istanbul ignore next  */\r\nfunction styleTagTransform(css, styleElement) {\r\n  if (styleElement.styleSheet) {\r\n    styleElement.styleSheet.cssText = css;\r\n  } else {\r\n    while (styleElement.firstChild) {\r\n      styleElement.removeChild(styleElement.firstChild);\r\n    }\r\n    styleElement.appendChild(document.createTextNode(css));\r\n  }\r\n}\r\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar manager_1 = __webpack_require__(/*! ./manager */ \"./src/manager.ts\");\n__webpack_require__(/*! ../scss/app.scss */ \"./scss/app.scss\");\ndocument.addEventListener('DOMContentLoaded', function () {\n    new manager_1.Manager();\n});\n\n\n//# sourceURL=webpack:///./src/app.ts?");

/***/ }),

/***/ "./src/components/background-component.ts":
/*!************************************************!*\
  !*** ./src/components/background-component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar BackgroundComponent = /** @class */ (function () {\n    function BackgroundComponent(starCount) {\n        if (starCount === void 0) { starCount = 100; }\n        this.starCount = starCount;\n        this.stars = [];\n        this.init();\n    }\n    BackgroundComponent.prototype.init = function () {\n        this.createStars();\n        // Réajuste la disposition des étoiles quand la taille de fenêtre est modifiée\n        window.addEventListener('resize', this.onResize.bind(this));\n    };\n    /*\n        Création des étoiles sur le body dans des div\n    */\n    BackgroundComponent.prototype.createStars = function () {\n        for (var i = 0; i < this.starCount; i++) {\n            var star = document.createElement('div');\n            star.classList.add('star');\n            this.setPositionAndSize(star);\n            document.body.appendChild(star);\n            this.stars.push(star);\n        }\n    };\n    /*\n        Création des positions/tailles étoiles\n    */\n    BackgroundComponent.prototype.setPositionAndSize = function (star) {\n        var size = Math.random() * 2 + 1;\n        star.style.width = \"\".concat(size, \"px\");\n        star.style.height = \"\".concat(size, \"px\");\n        star.style.left = \"\".concat(Math.random() * window.innerWidth, \"px\");\n        star.style.top = \"\".concat(Math.random() * window.innerHeight, \"px\");\n    };\n    /*\n        Redéfinit la position des étoiles via l'event listener\n    */\n    BackgroundComponent.prototype.onResize = function () {\n        var _this = this;\n        this.stars.forEach(function (star) { return _this.setPositionAndSize(star); });\n    };\n    return BackgroundComponent;\n}());\nexports[\"default\"] = BackgroundComponent;\n\n\n//# sourceURL=webpack:///./src/components/background-component.ts?");

/***/ }),

/***/ "./src/components/ball-component.ts":
/*!******************************************!*\
  !*** ./src/components/ball-component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar BallComponent = /** @class */ (function () {\n    function BallComponent(canvas, paddle, game) {\n        this.canvas = canvas;\n        this.ctx = canvas.getContext('2d');\n        this.paddle = paddle;\n        this.game = game;\n        this.radius = 10;\n        this.reset();\n    }\n    BallComponent.prototype.reset = function () {\n        this.x = this.canvas.width / 2;\n        this.y = this.canvas.height - 30;\n        this.dx = 0; // Vitesse de base horizontale\n        this.dy = -4; // Vitesse de base verticale\n    };\n    BallComponent.prototype.draw = function () {\n        this.ctx.beginPath();\n        this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);\n        this.ctx.fillStyle = \"#9333FF\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    };\n    BallComponent.prototype.move = function () {\n        this.x += this.dx;\n        this.y += this.dy;\n        // Rebond sur l'un des murs\n        if (this.x + this.dx > this.canvas.width - this.radius || this.x + this.dx < this.radius) {\n            this.dx = -this.dx;\n        }\n        // Rebond sur le plafond\n        if (this.y + this.dy < this.radius) {\n            this.dy = -this.dy;\n        }\n        // Rebond sur le paddle si :\n        //\n        // La position + la direction est supérieure la taille du canvas + le radius + la taille du paddle\n        //\n        if (this.y + this.dy > this.canvas.height - this.radius - this.paddle.height) {\n            if (this.x > this.paddle.x && this.x < this.paddle.x + this.paddle.width) {\n                //Calcul de l'angle de rebond sur le paddle\n                var paddleCenter = this.paddle.x + this.paddle.width / 2;\n                var hitPoint = this.x - paddleCenter;\n                var maxBounceAngle = Math.PI / 3; // 60 degrees (à corriger)\n                var angle = hitPoint / (this.paddle.width / 2) * maxBounceAngle;\n                this.dx = 4 * Math.sin(angle);\n                this.dy = -4 * Math.cos(angle);\n            }\n            else if (this.y + this.dy > this.canvas.height - this.radius) {\n                //La balle touche le sol -> le jeu s'arrête\n                this.dy = 0;\n                this.dx = 0;\n                this.onGameOver();\n            }\n        }\n    };\n    BallComponent.prototype.onGameOver = function () {\n        this.game.changeGameRunning();\n    };\n    return BallComponent;\n}());\nexports[\"default\"] = BallComponent;\n\n\n//# sourceURL=webpack:///./src/components/ball-component.ts?");

/***/ }),

/***/ "./src/components/brick-component.ts":
/*!*******************************************!*\
  !*** ./src/components/brick-component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar BrickComponent = /** @class */ (function () {\n    function BrickComponent(x, y) {\n        this.x = x;\n        this.y = y;\n        this.width = 75;\n        this.height = 20;\n        this.status = 1;\n    }\n    BrickComponent.prototype.draw = function (ctx) {\n        if (this.status === 1) {\n            ctx.beginPath();\n            ctx.rect(this.x, this.y, this.width, this.height);\n            ctx.fillStyle = \"#9333FF\";\n            ctx.fill();\n            ctx.closePath();\n        }\n    };\n    return BrickComponent;\n}());\nexports[\"default\"] = BrickComponent;\n\n\n//# sourceURL=webpack:///./src/components/brick-component.ts?");

/***/ }),

/***/ "./src/components/leaderboard-component.ts":
/*!*************************************************!*\
  !*** ./src/components/leaderboard-component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar apiService_1 = __webpack_require__(/*! ../services/apiService */ \"./src/services/apiService.ts\");\nvar LeaderboardComponent = /** @class */ (function () {\n    function LeaderboardComponent() {\n        this.apiService = apiService_1.apiService;\n        this.leaderboardElement = document.getElementById(\"leaderboard\");\n        this.clearLeaderboard();\n        this.loadLeaderboard();\n    }\n    LeaderboardComponent.prototype.loadLeaderboard = function () {\n        var _this = this;\n        this.apiService.fetch(\"/leaderboard\").then(function (data) {\n            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {\n                var player = data_1[_i];\n                _this.displayTopPlayerScore(player);\n            }\n        });\n    };\n    LeaderboardComponent.prototype.displayTopPlayerScore = function (player) {\n        var topPlayer = document.createElement('li');\n        topPlayer.innerText = \"\".concat(player.name, \" - \").concat(player.score);\n        this.leaderboardElement.appendChild(topPlayer);\n    };\n    LeaderboardComponent.prototype.clearLeaderboard = function () {\n        this.leaderboardElement.innerHTML = \"\";\n    };\n    return LeaderboardComponent;\n}());\nexports[\"default\"] = LeaderboardComponent;\n\n\n//# sourceURL=webpack:///./src/components/leaderboard-component.ts?");

/***/ }),

/***/ "./src/components/paddle-component.ts":
/*!********************************************!*\
  !*** ./src/components/paddle-component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar PaddleComponent = /** @class */ (function () {\n    function PaddleComponent(canvas) {\n        var _this = this;\n        this.canvas = canvas;\n        this.ctx = this.canvas.getContext('2d');\n        this.width = 75;\n        this.height = 10;\n        this.x = (this.canvas.width - this.width) / 2;\n        this.paddleSpeed = 7;\n        this.rightPressed = false;\n        this.leftPressed = false;\n        document.addEventListener('keydown', function (e) { return _this.keyDownHandler(e); }, false);\n        document.addEventListener('keyup', function (e) { return _this.keyUpHandler(e); }, false);\n    }\n    PaddleComponent.prototype.draw = function () {\n        this.ctx.beginPath();\n        this.ctx.rect(this.x, this.canvas.height - this.height, this.width, this.height);\n        this.ctx.fillStyle = \"#9333FF\";\n        this.ctx.fill();\n        this.ctx.closePath();\n    };\n    PaddleComponent.prototype.move = function () {\n        if (this.rightPressed && this.x < this.canvas.width - this.width) {\n            this.x += this.paddleSpeed;\n        }\n        if (this.leftPressed && this.x > 0) {\n            this.x -= this.paddleSpeed;\n        }\n    };\n    PaddleComponent.prototype.keyDownHandler = function (e) {\n        if (e.key === 'Right' || e.key === 'ArrowRight') {\n            this.rightPressed = true;\n        }\n        else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n            this.leftPressed = true;\n        }\n    };\n    PaddleComponent.prototype.keyUpHandler = function (e) {\n        if (e.key === 'Right' || e.key === 'ArrowRight') {\n            this.rightPressed = false;\n        }\n        else if (e.key === 'Left' || e.key === 'ArrowLeft') {\n            this.leftPressed = false;\n        }\n    };\n    return PaddleComponent;\n}());\nexports[\"default\"] = PaddleComponent;\n\n\n//# sourceURL=webpack:///./src/components/paddle-component.ts?");

/***/ }),

/***/ "./src/components/result-component.ts":
/*!********************************************!*\
  !*** ./src/components/result-component.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.resultComponent = void 0;\nvar apiService_1 = __webpack_require__(/*! ../services/apiService */ \"./src/services/apiService.ts\");\nvar ResultComponent = /** @class */ (function () {\n    function ResultComponent() {\n        this.apiService = apiService_1.apiService;\n    }\n    ResultComponent.prototype.sendNewPlayerScore = function (player) {\n        return __awaiter(this, void 0, void 0, function () {\n            var data;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0: return [4 /*yield*/, this.apiService.fetch('/newplayer', {\n                            method: 'POST',\n                            headers: {\n                                'Content-Type': 'application/json'\n                            },\n                            body: JSON.stringify(player),\n                        })];\n                    case 1:\n                        data = _a.sent();\n                        return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return ResultComponent;\n}());\nexports.resultComponent = new ResultComponent();\n\n\n//# sourceURL=webpack:///./src/components/result-component.ts?");

/***/ }),

/***/ "./src/manager.ts":
/*!************************!*\
  !*** ./src/manager.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Manager = void 0;\nvar gameService_1 = __webpack_require__(/*! ./services/gameService */ \"./src/services/gameService.ts\");\nvar background_component_1 = __webpack_require__(/*! ./components/background-component */ \"./src/components/background-component.ts\");\nvar leaderboard_component_1 = __webpack_require__(/*! ./components/leaderboard-component */ \"./src/components/leaderboard-component.ts\");\nvar result_component_1 = __webpack_require__(/*! ./components/result-component */ \"./src/components/result-component.ts\");\nvar Manager = /** @class */ (function () {\n    function Manager() {\n        this.modal = document.getElementById('playerModal');\n        this.canvas = document.getElementById('gameCanvas');\n        this.gameOvertitle = document.getElementById('gameOvertitle');\n        this.resultComponent = result_component_1.resultComponent;\n        this.game = null;\n        this.nickname = null;\n        this.initModal();\n        new background_component_1.default();\n        new leaderboard_component_1.default();\n    }\n    Manager.prototype.initModal = function () {\n        var _this = this;\n        var startGameButton = document.getElementById('startGameButton');\n        var nicknameInput = document.getElementById('nicknameInput');\n        if (startGameButton && nicknameInput) {\n            startGameButton.onclick = function () {\n                _this.nickname = nicknameInput.value;\n                if (_this.nickname && _this.nickname.trim() !== '') {\n                    _this.toggleModal(false);\n                    _this.toggleCanvas(true);\n                    _this.gameStart();\n                }\n                else {\n                    alert('Veuillez entrer un pseudo valide.');\n                }\n            };\n        }\n        window.onload = function () {\n            _this.modal.style.display = 'block';\n        };\n    };\n    Manager.prototype.toggleCanvas = function (show) {\n        if (this.canvas) {\n            this.canvas.style.display = show ? 'block' : 'none';\n        }\n    };\n    Manager.prototype.toggleModal = function (show) {\n        if (this.modal) {\n            this.modal.style.display = show ? 'block' : 'none';\n        }\n    };\n    Manager.prototype.gameStart = function () {\n        var _this = this;\n        this.game = new gameService_1.default(function (score) { return _this.onGameOver(score); });\n    };\n    Manager.prototype.onGameOver = function (score) {\n        // On réaffiche la modal + game over\n        this.modal.style.display = 'block';\n        this.gameOvertitle.style.display = 'block';\n        var scoreElement = document.getElementById('gameOverScorePoints');\n        scoreElement.innerHTML = score.toString();\n        // On désactive le canvas et on reset le jeu\n        this.toggleCanvas(false);\n        this.game = null;\n        // On envoie le résultat au back\n        this.resultComponent.sendNewPlayerScore({\n            id: null,\n            name: this.nickname,\n            score: score\n        });\n        new leaderboard_component_1.default();\n    };\n    return Manager;\n}());\nexports.Manager = Manager;\n\n\n//# sourceURL=webpack:///./src/manager.ts?");

/***/ }),

/***/ "./src/services/apiService.ts":
/*!************************************!*\
  !*** ./src/services/apiService.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.apiService = void 0;\nvar ApiService = /** @class */ (function () {\n    function ApiService() {\n        this.url = \"http://localhost:3333\";\n    }\n    ApiService.prototype.fetch = function (endpoint, options) {\n        if (options === void 0) { options = {}; }\n        return fetch(this.url + endpoint, options)\n            .then(function (response) { return response.json(); });\n    };\n    return ApiService;\n}());\nexports.apiService = new ApiService();\n\n\n//# sourceURL=webpack:///./src/services/apiService.ts?");

/***/ }),

/***/ "./src/services/gameService.ts":
/*!*************************************!*\
  !*** ./src/services/gameService.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar ball_component_1 = __webpack_require__(/*! ../components/ball-component */ \"./src/components/ball-component.ts\");\nvar paddle_component_1 = __webpack_require__(/*! ../components/paddle-component */ \"./src/components/paddle-component.ts\");\nvar brick_component_1 = __webpack_require__(/*! ../components/brick-component */ \"./src/components/brick-component.ts\");\nvar GameService = /** @class */ (function () {\n    function GameService(onGameOver) {\n        this.canvas = document.getElementById('gameCanvas');\n        this.score = 0;\n        if (!this.canvas) {\n            throw new Error(\"Une erreur est survenue, veuillez contacter un administrateur.\");\n        }\n        this.ctx = this.canvas.getContext('2d');\n        this.paddle = new paddle_component_1.default(this.canvas);\n        this.ball = new ball_component_1.default(this.canvas, this.paddle, this);\n        this.isGameOver = false;\n        this.onGameOver = onGameOver;\n        this.isGameRunning = true;\n        this.brickRowCount = 3;\n        this.brickColumnCount = 7;\n        this.brickPadding = 10;\n        this.brickOffsetTop = 30;\n        this.brickOffsetLeft = (this.canvas.width - (this.brickColumnCount * (75 + this.brickPadding) - this.brickPadding)) / 2;\n        this.bricks = [];\n        for (var c = 0; c < this.brickColumnCount; c++) {\n            this.bricks[c] = [];\n            for (var r = 0; r < this.brickRowCount; r++) {\n                var brickX = c * (75 + this.brickPadding) + this.brickOffsetLeft;\n                var brickY = r * (20 + this.brickPadding) + this.brickOffsetTop;\n                this.bricks[c][r] = new brick_component_1.default(brickX, brickY);\n            }\n        }\n        this.draw = this.draw.bind(this);\n        this.start();\n    }\n    GameService.prototype.start = function () {\n        requestAnimationFrame(this.draw);\n    };\n    GameService.prototype.drawBricks = function () {\n        for (var c = 0; c < this.brickColumnCount; c++) {\n            for (var r = 0; r < this.brickRowCount; r++) {\n                this.bricks[c][r].draw(this.ctx);\n            }\n        }\n    };\n    GameService.prototype.collisionDetection = function () {\n        if (this.isGameRunning) {\n            for (var c = 0; c < this.brickColumnCount; c++) {\n                for (var r = 0; r < this.brickRowCount; r++) {\n                    var b = this.bricks[c][r];\n                    if (b.status === 1) {\n                        if (this.ball.x + this.ball.radius > b.x && this.ball.x - this.ball.radius < b.x + b.width && this.ball.y + this.ball.radius > b.y && this.ball.y - this.ball.radius < b.y + b.height) {\n                            this.ball.dy = -this.ball.dy;\n                            b.status = 0;\n                            this.score += 10;\n                        }\n                    }\n                }\n            }\n        }\n    };\n    GameService.prototype.draw = function () {\n        if (this.isGameOver)\n            return;\n        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n        this.drawBricks();\n        this.ball.draw();\n        this.paddle.draw();\n        this.collisionDetection();\n        this.ball.move();\n        this.paddle.move();\n        if (!this.isGameOver) {\n            requestAnimationFrame(this.draw);\n        }\n    };\n    GameService.prototype.changeGameRunning = function () {\n        this.isGameOver = true;\n        this.isGameRunning = false;\n        this.onGameOver(this.score);\n    };\n    return GameService;\n}());\nexports[\"default\"] = GameService;\n\n\n//# sourceURL=webpack:///./src/services/gameService.ts?");

/***/ }),

/***/ "./fonts/Audiowide/Audiowide-Regular.ttf":
/*!***********************************************!*\
  !*** ./fonts/Audiowide/Audiowide-Regular.ttf ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2017bdb174a62d0daa3e.ttf\";\n\n//# sourceURL=webpack:///./fonts/Audiowide/Audiowide-Regular.ttf?");

/***/ }),

/***/ "./fonts/Jaro/Jaro-Regular-VariableFont_opsz.ttf":
/*!*******************************************************!*\
  !*** ./fonts/Jaro/Jaro-Regular-VariableFont_opsz.ttf ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c9e68ba09c7d06b68df9.ttf\";\n\n//# sourceURL=webpack:///./fonts/Jaro/Jaro-Regular-VariableFont_opsz.ttf?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
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
/******/ 		// no jsonp function
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;