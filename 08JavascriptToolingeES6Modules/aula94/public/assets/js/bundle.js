/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modulo1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modulo1 */ "./src/modulo1.js");
// import { nome, sobrenome, idade, soma, Pessoa } from './modulo1';
// const p1 = new Pessoa('Will', 'Firmino');
// console.log(p1);
// console.log(nome, sobrenome, idade);
// console.log(soma(5, 5));
// -------------------------
// import * as MeuModulo from './modulo1';
// console.log(MeuModulo);

console.log(Object(_modulo1__WEBPACK_IMPORTED_MODULE_0__["default"])(1, 3));

/***/ }),

/***/ "./src/modulo1.js":
/*!************************!*\
  !*** ./src/modulo1.js ***!
  \************************/
/*! exports provided: nome, sobrenome, idade, default, Pessoa */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\src\\modulo1.js: Only one default export allowed per module. (18:9)\n\n\u001b[0m \u001b[90m 16 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 17 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 18 | \u001b[39m\u001b[36mexport\u001b[39m { nome as \u001b[36mdefault\u001b[39m }\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n    at Parser.raise (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\parser\\lib\\index.js:7017:17)\n    at Parser.checkDuplicateExports (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\parser\\lib\\index.js:11988:12)\n    at Parser.checkExport (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\parser\\lib\\index.js:11927:16)\n    at Parser.parseExport (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\parser\\lib\\index.js:11763:12)\n    at Parser.parseStatementContent (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\parser\\lib\\index.js:10794:27)\n    at Parser.parseStatement (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\parser\\lib\\index.js:10690:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\parser\\lib\\index.js:11264:25)\n    at Parser.parseBlockBody (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\parser\\lib\\index.js:11251:10)\n    at Parser.parseTopLevel (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\parser\\lib\\index.js:10621:10)\n    at Parser.parse (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\parser\\lib\\index.js:12222:10)\n    at parse (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\parser\\lib\\index.js:12273:38)\n    at parser (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\core\\lib\\parser\\index.js:54:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:93:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\@babel\\core\\lib\\transform.js:27:41)\n    at transform.next (<anonymous>)\n    at step (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\gensync\\index.js:254:32)\n    at C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\gensync\\index.js:266:13\n    at async.call.result.err.err (C:\\Users\\willi\\Documents\\Dev\\Curso-JS-Udemy\\08 Javascript Tooling e ES6 Modules\\aula94\\node_modules\\gensync\\index.js:216:11)\n    at processTicksAndRejections (internal/process/task_queues.js:93:5)");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map