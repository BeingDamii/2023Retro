"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/add-submission/page",{

/***/ "(app-pages-browser)/./app/components/submissionForm.jsx":
/*!*******************************************!*\
  !*** ./app/components/submissionForm.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SubmissionForm = ()=>{\n    _s();\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const handleChange = (e)=>{\n        setContent(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"submission-form-wrapper\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                className: \"submission-textarea\",\n                value: content,\n                onChange: handleChange,\n                placeholder: \"Say something...\"\n            }, void 0, false, {\n                fileName: \"/Users/admin/Documents/Learnings/learning nextJs/2023retro/app/components/submissionForm.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            \".subm\"\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/admin/Documents/Learnings/learning nextJs/2023retro/app/components/submissionForm.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SubmissionForm, \"/im15F/VUGo9PLfvpbeLpqjAvV0=\");\n_c = SubmissionForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SubmissionForm);\nvar _c;\n$RefreshReg$(_c, \"SubmissionForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL3N1Ym1pc3Npb25Gb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDaUM7QUFFakMsTUFBTUMsaUJBQWlCOztJQUNyQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR0gsK0NBQVFBO0lBRXRDLE1BQU1JLGVBQWUsQ0FBQ0M7UUFDbEJGLFdBQVdFLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NELFdBQVU7Z0JBQ1ZGLE9BQU9MO2dCQUNQUyxVQUFVUDtnQkFDVlEsYUFBWTs7Ozs7O1lBQ0Y7Ozs7Ozs7QUFJbEI7R0FqQk1YO0tBQUFBO0FBbUJOLCtEQUFlQSxjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL3N1Ym1pc3Npb25Gb3JtLmpzeD9lNzBhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU3VibWlzc2lvbkZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKCk7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgIHNldENvbnRlbnQoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWlzc2lvbi1mb3JtLXdyYXBwZXJcIj5cbiAgICAgIDx0ZXh0YXJlYVxuICAgICAgICBjbGFzc05hbWU9XCJzdWJtaXNzaW9uLXRleHRhcmVhXCJcbiAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiU2F5IHNvbWV0aGluZy4uLlwiXG4gICAgICA+PC90ZXh0YXJlYT5cbiAgICAgIC5zdWJtXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdWJtaXNzaW9uRm9ybTtcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlN1Ym1pc3Npb25Gb3JtIiwiY29udGVudCIsInNldENvbnRlbnQiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYSIsIm9uQ2hhbmdlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/submissionForm.jsx\n"));

/***/ })

});