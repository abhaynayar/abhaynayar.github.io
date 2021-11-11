(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/n2t_wasm.js":
/*!**************************!*\
  !*** ../pkg/n2t_wasm.js ***!
  \**************************/
/*! exports provided: greet, Emu, __wbg_alert_268bbc1ea59d3899, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./n2t_wasm_bg.wasm */ \"../pkg/n2t_wasm_bg.wasm\");\n/* harmony import */ var _n2t_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./n2t_wasm_bg.js */ \"../pkg/n2t_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _n2t_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Emu\", function() { return _n2t_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"Emu\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_268bbc1ea59d3899\", function() { return _n2t_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_268bbc1ea59d3899\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return _n2t_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbindgen_throw\"]; });\n\n\n\n\n//# sourceURL=webpack:///../pkg/n2t_wasm.js?");

/***/ }),

/***/ "../pkg/n2t_wasm_bg.js":
/*!*****************************!*\
  !*** ../pkg/n2t_wasm_bg.js ***!
  \*****************************/
/*! exports provided: greet, Emu, __wbg_alert_268bbc1ea59d3899, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Emu\", function() { return Emu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_268bbc1ea59d3899\", function() { return __wbg_alert_268bbc1ea59d3899; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./n2t_wasm_bg.wasm */ \"../pkg/n2t_wasm_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"greet\"]();\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n/**\n*/\nclass Emu {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Emu.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    __destroy_into_raw() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        return ptr;\n    }\n\n    free() {\n        const ptr = this.__destroy_into_raw();\n        _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_emu_free\"](ptr);\n    }\n    /**\n    * @returns {Emu}\n    */\n    static new() {\n        var ret = _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emu_new\"]();\n        return Emu.__wrap(ret);\n    }\n    /**\n    * @param {number} comp\n    * @returns {number}\n    */\n    alu(comp) {\n        var ret = _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emu_alu\"](this.ptr, comp);\n        return ret;\n    }\n    /**\n    */\n    tick() {\n        _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emu_tick\"](this.ptr);\n    }\n    /**\n    * @param {string} code\n    */\n    load_rom(code) {\n        var ptr0 = passStringToWasm0(code, _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n        var len0 = WASM_VECTOR_LEN;\n        _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emu_load_rom\"](this.ptr, ptr0, len0);\n    }\n    /**\n    * @param {number} address\n    * @param {number} value\n    */\n    store_ram(address, value) {\n        _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emu_store_ram\"](this.ptr, address, value);\n    }\n    /**\n    */\n    run() {\n        _n2t_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"emu_run\"](this.ptr);\n    }\n}\n\nfunction __wbg_alert_268bbc1ea59d3899(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\nfunction __wbindgen_throw(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/n2t_wasm_bg.js?");

/***/ }),

/***/ "../pkg/n2t_wasm_bg.wasm":
/*!*******************************!*\
  !*** ../pkg/n2t_wasm_bg.wasm ***!
  \*******************************/
/*! exports provided: memory, greet, __wbg_emu_free, emu_new, emu_alu, emu_tick, emu_load_rom, emu_store_ram, emu_run, __wbindgen_malloc, __wbindgen_realloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./n2t_wasm_bg.js */ \"../pkg/n2t_wasm_bg.js\");\n\n/* harmony import */ var m1 = __webpack_require__(/*! ../www/index.js */ \"./index.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/n2t_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! exports provided: put_xy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"put_xy\", function() { return put_xy; });\n/* harmony import */ var n2t_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! n2t-wasm */ \"../pkg/n2t_wasm.js\");\n\n\nconst height = 256;\nconst width = 512;\nconst scale = 1;\n\nconst canvas = document.getElementById(\"n2t-wasm-canvas\");\ncanvas.width = width*scale;\ncanvas.height = height*scale;\n\nconst ctx = canvas.getContext('2d');\nctx.imageSmoothingEnabled= false;\nctx.fillStyle = \"#000000\";\n\nfunction put_xy(address, value) {\n\n    // 16 bits per address:\n    // - width  => 512 => 32 cols\n    // - height => 256 => 16 rows\n\n    // Screen starts at address 0x4000\n    var screen = address - 0x4000;\n    var x = screen % 32;\n    var y = screen / 32;\n\n    for (var i=15; i>=0; --i) {\n        var set = value & (1<<i);\n        if (set != 0) ctx.fillStyle = \"#000000\";\n        else ctx.fillStyle = \"#FFFFFF\";\n        ctx.fillRect(((x*16)+i)*scale, y*scale, scale, scale);\n    }\n}\n\n\nconst emu = n2t_wasm__WEBPACK_IMPORTED_MODULE_0__[\"Emu\"].new();\n\n\nvar paused = true;\nfunction play() {\n    paused = false;\n    console.log(\"Started Emulator\");\n}\n\nconst renderLoop = () => {\n    if (!paused) emu.run();\n    requestAnimationFrame(renderLoop);\n};\n\nrequestAnimationFrame(renderLoop);\n\n// Event listeners:\ndocument.getElementById(\"playBtn\").addEventListener(\"click\", play);\ndocument.getElementById('inputfile').addEventListener('change', function() {\n    var fr = new FileReader();\n    fr.onload=function(){ emu.load_rom(fr.result); }\n    fr.readAsText(this.files[0]);\n});\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);