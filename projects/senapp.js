/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/projects/senapp.tsx":
/*!*********************************!*\
  !*** ./src/projects/senapp.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.SenappPage = void 0;\r\nconst React = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\r\nconst ReactDOM = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\r\nconst PageContainer_1 = __webpack_require__(/*! ../components/page/PageContainer */ \"./src/components/page/PageContainer.tsx\");\r\nconst PageContent_1 = __webpack_require__(/*! ../components/page/PageContent */ \"./src/components/page/PageContent.tsx\");\r\nconst ProjectView_1 = __webpack_require__(/*! ../components/projects/ProjectView */ \"./src/components/projects/ProjectView.tsx\");\r\nconst projects_1 = __webpack_require__(/*! ../framework/projects */ \"./src/framework/projects.ts\");\r\nconst SenappPage = () => {\r\n    const project = projects_1.ProjectStore.get(projects_1.ProjectIdentity.Senapp);\r\n    return (React.createElement(PageContainer_1.PageContainer, null,\r\n        React.createElement(PageContent_1.PageContent, null,\r\n            React.createElement(ProjectView_1.ProjectView, { project: project }))));\r\n};\r\nexports.SenappPage = SenappPage;\r\nReactDOM.render(React.createElement(exports.SenappPage, null), document.getElementById('root'));\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcHJvamVjdHMvc2VuYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxnRkFBK0I7QUFDL0IsMkZBQXNDO0FBQ3RDLCtIQUFpRTtBQUNqRSx5SEFBNkQ7QUFDN0QsaUlBQWlFO0FBQ2pFLG1HQUFzRTtBQUUvRCxNQUFNLFVBQVUsR0FBYSxHQUFHLEVBQUU7SUFDckMsTUFBTSxPQUFPLEdBQUcsdUJBQVksQ0FBQyxHQUFHLENBQUMsMEJBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUV6RCxPQUFPLENBQ0gsb0JBQUMsNkJBQWE7UUFDVixvQkFBQyx5QkFBVztZQUNSLG9CQUFDLHlCQUFXLElBQUMsT0FBTyxFQUFFLE9BQU8sR0FBSSxDQUN2QixDQUNGLENBQ25CLENBQUM7QUFDTixDQUFDLENBQUM7QUFWVyxrQkFBVSxjQVVyQjtBQUVGLFFBQVEsQ0FBQyxNQUFNLENBQUMsb0JBQUMsa0JBQVUsT0FBRyxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FsYmluYmpvcmtsdW5kLy4vc3JjL3Byb2plY3RzL3NlbmFwcC50c3g/MDg4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IFBhZ2VDb250YWluZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3BhZ2UvUGFnZUNvbnRhaW5lcic7XHJcbmltcG9ydCB7IFBhZ2VDb250ZW50IH0gZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlL1BhZ2VDb250ZW50JztcclxuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3RzL1Byb2plY3RWaWV3JztcclxuaW1wb3J0IHsgUHJvamVjdFN0b3JlLCBQcm9qZWN0SWRlbnRpdHkgfSBmcm9tICcuLi9mcmFtZXdvcmsvcHJvamVjdHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFNlbmFwcFBhZ2U6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdCA9IFByb2plY3RTdG9yZS5nZXQoUHJvamVjdElkZW50aXR5LlNlbmFwcCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UGFnZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFBhZ2VDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFByb2plY3RWaWV3IHByb2plY3Q9e3Byb2plY3R9IC8+XHJcbiAgICAgICAgICAgIDwvUGFnZUNvbnRlbnQ+XHJcbiAgICAgICAgPC9QYWdlQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcig8U2VuYXBwUGFnZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/projects/senapp.tsx\n");

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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"projects/senapp": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
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
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkalbinbjorklund"] = self["webpackChunkalbinbjorklund"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-8323c0","src_components_page_PageContainer_tsx","src_components_page_PageContent_tsx-src_framework_projects_ts","src_components_projects_ProjectView_tsx"], () => (__webpack_require__("./src/projects/senapp.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;