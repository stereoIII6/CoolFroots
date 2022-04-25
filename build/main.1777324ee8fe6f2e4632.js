/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@metamask/detect-provider/dist/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@metamask/detect-provider/dist/index.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";

/**
 * Returns a Promise that resolves to the value of window.ethereum if it is
 * set within the given timeout, or null.
 * The Promise will not reject, but an error will be thrown if invalid options
 * are provided.
 *
 * @param options - Options bag.
 * @param options.mustBeMetaMask - Whether to only look for MetaMask providers.
 * Default: false
 * @param options.silent - Whether to silence console errors. Does not affect
 * thrown errors. Default: false
 * @param options.timeout - Milliseconds to wait for 'ethereum#initialized' to
 * be dispatched. Default: 3000
 * @returns A Promise that resolves with the Provider if it is detected within
 * given timeout, otherwise null.
 */
function detectEthereumProvider({ mustBeMetaMask = false, silent = false, timeout = 3000, } = {}) {
    _validateInputs();
    let handled = false;
    return new Promise((resolve) => {
        if (window.ethereum) {
            handleEthereum();
        }
        else {
            window.addEventListener('ethereum#initialized', handleEthereum, { once: true });
            setTimeout(() => {
                handleEthereum();
            }, timeout);
        }
        function handleEthereum() {
            if (handled) {
                return;
            }
            handled = true;
            window.removeEventListener('ethereum#initialized', handleEthereum);
            const { ethereum } = window;
            if (ethereum && (!mustBeMetaMask || ethereum.isMetaMask)) {
                resolve(ethereum);
            }
            else {
                const message = mustBeMetaMask && ethereum
                    ? 'Non-MetaMask window.ethereum detected.'
                    : 'Unable to detect window.ethereum.';
                !silent && console.error('@metamask/detect-provider:', message);
                resolve(null);
            }
        }
    });
    function _validateInputs() {
        if (typeof mustBeMetaMask !== 'boolean') {
            throw new Error(`@metamask/detect-provider: Expected option 'mustBeMetaMask' to be a boolean.`);
        }
        if (typeof silent !== 'boolean') {
            throw new Error(`@metamask/detect-provider: Expected option 'silent' to be a boolean.`);
        }
        if (typeof timeout !== 'number') {
            throw new Error(`@metamask/detect-provider: Expected option 'timeout' to be a number.`);
        }
    }
}
module.exports = detectEthereumProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQVlBOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNILFNBQVMsc0JBQXNCLENBQUMsRUFDOUIsY0FBYyxHQUFHLEtBQUssRUFDdEIsTUFBTSxHQUFHLEtBQUssRUFDZCxPQUFPLEdBQUcsSUFBSSxHQUNmLEdBQUcsRUFBRTtJQUVKLGVBQWUsRUFBRSxDQUFDO0lBRWxCLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQztJQUVwQixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7UUFDN0IsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBRW5CLGNBQWMsRUFBRSxDQUFDO1NBRWxCO2FBQU07WUFFTCxNQUFNLENBQUMsZ0JBQWdCLENBQ3JCLHNCQUFzQixFQUN0QixjQUFjLEVBQ2QsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQ2YsQ0FBQztZQUVGLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2QsY0FBYyxFQUFFLENBQUM7WUFDbkIsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2I7UUFFRCxTQUFTLGNBQWM7WUFFckIsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsT0FBTzthQUNSO1lBQ0QsT0FBTyxHQUFHLElBQUksQ0FBQztZQUVmLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUVuRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDO1lBRTVCLElBQUksUUFBUSxJQUFJLENBQUMsQ0FBQyxjQUFjLElBQUksUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUN4RCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkI7aUJBQU07Z0JBRUwsTUFBTSxPQUFPLEdBQUcsY0FBYyxJQUFJLFFBQVE7b0JBQ3hDLENBQUMsQ0FBQyx3Q0FBd0M7b0JBQzFDLENBQUMsQ0FBQyxtQ0FBbUMsQ0FBQztnQkFFeEMsQ0FBQyxNQUFNLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyw0QkFBNEIsRUFBRSxPQUFPLENBQUMsQ0FBQztnQkFDaEUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2Y7UUFDSCxDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLGVBQWU7UUFDdEIsSUFBSSxPQUFPLGNBQWMsS0FBSyxTQUFTLEVBQUU7WUFDdkMsTUFBTSxJQUFJLEtBQUssQ0FBQyw4RUFBOEUsQ0FBQyxDQUFDO1NBQ2pHO1FBQ0QsSUFBSSxPQUFPLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1NBQ3pGO1FBQ0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxzRUFBc0UsQ0FBQyxDQUFDO1NBQ3pGO0lBQ0gsQ0FBQztBQUNILENBQUM7QUFsRkQsaUJBQVMsc0JBQXNCLENBQUMifQ==

/***/ }),

/***/ "./node_modules/@protobufjs/aspromise/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@protobufjs/aspromise/index.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

module.exports = asPromise;

/**
 * Callback as used by {@link util.asPromise}.
 * @typedef asPromiseCallback
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {...*} params Additional arguments
 * @returns {undefined}
 */

/**
 * Returns a promise from a node-style callback function.
 * @memberof util
 * @param {asPromiseCallback} fn Function to call
 * @param {*} ctx Function context
 * @param {...*} params Function arguments
 * @returns {Promise<*>} Promisified function
 */
function asPromise(fn, ctx/*, varargs */) {
    var params  = new Array(arguments.length - 1),
        offset  = 0,
        index   = 2,
        pending = true;
    while (index < arguments.length)
        params[offset++] = arguments[index++];
    return new Promise(function executor(resolve, reject) {
        params[offset] = function callback(err/*, varargs */) {
            if (pending) {
                pending = false;
                if (err)
                    reject(err);
                else {
                    var params = new Array(arguments.length - 1),
                        offset = 0;
                    while (offset < params.length)
                        params[offset++] = arguments[offset];
                    resolve.apply(null, params);
                }
            }
        };
        try {
            fn.apply(ctx || null, params);
        } catch (err) {
            if (pending) {
                pending = false;
                reject(err);
            }
        }
    });
}


/***/ }),

/***/ "./node_modules/@protobufjs/base64/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@protobufjs/base64/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * A minimal base64 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var base64 = exports;

/**
 * Calculates the byte length of a base64 encoded string.
 * @param {string} string Base64 encoded string
 * @returns {number} Byte length
 */
base64.length = function length(string) {
    var p = string.length;
    if (!p)
        return 0;
    var n = 0;
    while (--p % 4 > 1 && string.charAt(p) === "=")
        ++n;
    return Math.ceil(string.length * 3) / 4 - n;
};

// Base64 encoding table
var b64 = new Array(64);

// Base64 decoding table
var s64 = new Array(123);

// 65..90, 97..122, 48..57, 43, 47
for (var i = 0; i < 64;)
    s64[b64[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;

/**
 * Encodes a buffer to a base64 encoded string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} Base64 encoded string
 */
base64.encode = function encode(buffer, start, end) {
    var parts = null,
        chunk = [];
    var i = 0, // output index
        j = 0, // goto index
        t;     // temporary
    while (start < end) {
        var b = buffer[start++];
        switch (j) {
            case 0:
                chunk[i++] = b64[b >> 2];
                t = (b & 3) << 4;
                j = 1;
                break;
            case 1:
                chunk[i++] = b64[t | b >> 4];
                t = (b & 15) << 2;
                j = 2;
                break;
            case 2:
                chunk[i++] = b64[t | b >> 6];
                chunk[i++] = b64[b & 63];
                j = 0;
                break;
        }
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (j) {
        chunk[i++] = b64[t];
        chunk[i++] = 61;
        if (j === 1)
            chunk[i++] = 61;
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

var invalidEncoding = "invalid encoding";

/**
 * Decodes a base64 encoded string to a buffer.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Number of bytes written
 * @throws {Error} If encoding is invalid
 */
base64.decode = function decode(string, buffer, offset) {
    var start = offset;
    var j = 0, // goto index
        t;     // temporary
    for (var i = 0; i < string.length;) {
        var c = string.charCodeAt(i++);
        if (c === 61 && j > 1)
            break;
        if ((c = s64[c]) === undefined)
            throw Error(invalidEncoding);
        switch (j) {
            case 0:
                t = c;
                j = 1;
                break;
            case 1:
                buffer[offset++] = t << 2 | (c & 48) >> 4;
                t = c;
                j = 2;
                break;
            case 2:
                buffer[offset++] = (t & 15) << 4 | (c & 60) >> 2;
                t = c;
                j = 3;
                break;
            case 3:
                buffer[offset++] = (t & 3) << 6 | c;
                j = 0;
                break;
        }
    }
    if (j === 1)
        throw Error(invalidEncoding);
    return offset - start;
};

/**
 * Tests if the specified string appears to be base64 encoded.
 * @param {string} string String to test
 * @returns {boolean} `true` if probably base64 encoded, otherwise false
 */
base64.test = function test(string) {
    return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(string);
};


/***/ }),

/***/ "./node_modules/@protobufjs/eventemitter/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@protobufjs/eventemitter/index.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";

module.exports = EventEmitter;

/**
 * Constructs a new event emitter instance.
 * @classdesc A minimal event emitter.
 * @memberof util
 * @constructor
 */
function EventEmitter() {

    /**
     * Registered listeners.
     * @type {Object.<string,*>}
     * @private
     */
    this._listeners = {};
}

/**
 * Registers an event listener.
 * @param {string} evt Event name
 * @param {function} fn Listener
 * @param {*} [ctx] Listener context
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.on = function on(evt, fn, ctx) {
    (this._listeners[evt] || (this._listeners[evt] = [])).push({
        fn  : fn,
        ctx : ctx || this
    });
    return this;
};

/**
 * Removes an event listener or any matching listeners if arguments are omitted.
 * @param {string} [evt] Event name. Removes all listeners if omitted.
 * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.off = function off(evt, fn) {
    if (evt === undefined)
        this._listeners = {};
    else {
        if (fn === undefined)
            this._listeners[evt] = [];
        else {
            var listeners = this._listeners[evt];
            for (var i = 0; i < listeners.length;)
                if (listeners[i].fn === fn)
                    listeners.splice(i, 1);
                else
                    ++i;
        }
    }
    return this;
};

/**
 * Emits an event by calling its listeners with the specified arguments.
 * @param {string} evt Event name
 * @param {...*} args Arguments
 * @returns {util.EventEmitter} `this`
 */
EventEmitter.prototype.emit = function emit(evt) {
    var listeners = this._listeners[evt];
    if (listeners) {
        var args = [],
            i = 1;
        for (; i < arguments.length;)
            args.push(arguments[i++]);
        for (i = 0; i < listeners.length;)
            listeners[i].fn.apply(listeners[i++].ctx, args);
    }
    return this;
};


/***/ }),

/***/ "./node_modules/@protobufjs/float/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@protobufjs/float/index.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = factory(factory);

/**
 * Reads / writes floats / doubles from / to buffers.
 * @name util.float
 * @namespace
 */

/**
 * Writes a 32 bit float to a buffer using little endian byte order.
 * @name util.float.writeFloatLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 32 bit float to a buffer using big endian byte order.
 * @name util.float.writeFloatBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 32 bit float from a buffer using little endian byte order.
 * @name util.float.readFloatLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 32 bit float from a buffer using big endian byte order.
 * @name util.float.readFloatBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Writes a 64 bit double to a buffer using little endian byte order.
 * @name util.float.writeDoubleLE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Writes a 64 bit double to a buffer using big endian byte order.
 * @name util.float.writeDoubleBE
 * @function
 * @param {number} val Value to write
 * @param {Uint8Array} buf Target buffer
 * @param {number} pos Target buffer offset
 * @returns {undefined}
 */

/**
 * Reads a 64 bit double from a buffer using little endian byte order.
 * @name util.float.readDoubleLE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

/**
 * Reads a 64 bit double from a buffer using big endian byte order.
 * @name util.float.readDoubleBE
 * @function
 * @param {Uint8Array} buf Source buffer
 * @param {number} pos Source buffer offset
 * @returns {number} Value read
 */

// Factory function for the purpose of node-based testing in modified global environments
function factory(exports) {

    // float: typed array
    if (typeof Float32Array !== "undefined") (function() {

        var f32 = new Float32Array([ -0 ]),
            f8b = new Uint8Array(f32.buffer),
            le  = f8b[3] === 128;

        function writeFloat_f32_cpy(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
        }

        function writeFloat_f32_rev(val, buf, pos) {
            f32[0] = val;
            buf[pos    ] = f8b[3];
            buf[pos + 1] = f8b[2];
            buf[pos + 2] = f8b[1];
            buf[pos + 3] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeFloatLE = le ? writeFloat_f32_cpy : writeFloat_f32_rev;
        /* istanbul ignore next */
        exports.writeFloatBE = le ? writeFloat_f32_rev : writeFloat_f32_cpy;

        function readFloat_f32_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            return f32[0];
        }

        function readFloat_f32_rev(buf, pos) {
            f8b[3] = buf[pos    ];
            f8b[2] = buf[pos + 1];
            f8b[1] = buf[pos + 2];
            f8b[0] = buf[pos + 3];
            return f32[0];
        }

        /* istanbul ignore next */
        exports.readFloatLE = le ? readFloat_f32_cpy : readFloat_f32_rev;
        /* istanbul ignore next */
        exports.readFloatBE = le ? readFloat_f32_rev : readFloat_f32_cpy;

    // float: ieee754
    })(); else (function() {

        function writeFloat_ieee754(writeUint, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0)
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos);
            else if (isNaN(val))
                writeUint(2143289344, buf, pos);
            else if (val > 3.4028234663852886e+38) // +-Infinity
                writeUint((sign << 31 | 2139095040) >>> 0, buf, pos);
            else if (val < 1.1754943508222875e-38) // denormal
                writeUint((sign << 31 | Math.round(val / 1.401298464324817e-45)) >>> 0, buf, pos);
            else {
                var exponent = Math.floor(Math.log(val) / Math.LN2),
                    mantissa = Math.round(val * Math.pow(2, -exponent) * 8388608) & 8388607;
                writeUint((sign << 31 | exponent + 127 << 23 | mantissa) >>> 0, buf, pos);
            }
        }

        exports.writeFloatLE = writeFloat_ieee754.bind(null, writeUintLE);
        exports.writeFloatBE = writeFloat_ieee754.bind(null, writeUintBE);

        function readFloat_ieee754(readUint, buf, pos) {
            var uint = readUint(buf, pos),
                sign = (uint >> 31) * 2 + 1,
                exponent = uint >>> 23 & 255,
                mantissa = uint & 8388607;
            return exponent === 255
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 1.401298464324817e-45 * mantissa
                : sign * Math.pow(2, exponent - 150) * (mantissa + 8388608);
        }

        exports.readFloatLE = readFloat_ieee754.bind(null, readUintLE);
        exports.readFloatBE = readFloat_ieee754.bind(null, readUintBE);

    })();

    // double: typed array
    if (typeof Float64Array !== "undefined") (function() {

        var f64 = new Float64Array([-0]),
            f8b = new Uint8Array(f64.buffer),
            le  = f8b[7] === 128;

        function writeDouble_f64_cpy(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[0];
            buf[pos + 1] = f8b[1];
            buf[pos + 2] = f8b[2];
            buf[pos + 3] = f8b[3];
            buf[pos + 4] = f8b[4];
            buf[pos + 5] = f8b[5];
            buf[pos + 6] = f8b[6];
            buf[pos + 7] = f8b[7];
        }

        function writeDouble_f64_rev(val, buf, pos) {
            f64[0] = val;
            buf[pos    ] = f8b[7];
            buf[pos + 1] = f8b[6];
            buf[pos + 2] = f8b[5];
            buf[pos + 3] = f8b[4];
            buf[pos + 4] = f8b[3];
            buf[pos + 5] = f8b[2];
            buf[pos + 6] = f8b[1];
            buf[pos + 7] = f8b[0];
        }

        /* istanbul ignore next */
        exports.writeDoubleLE = le ? writeDouble_f64_cpy : writeDouble_f64_rev;
        /* istanbul ignore next */
        exports.writeDoubleBE = le ? writeDouble_f64_rev : writeDouble_f64_cpy;

        function readDouble_f64_cpy(buf, pos) {
            f8b[0] = buf[pos    ];
            f8b[1] = buf[pos + 1];
            f8b[2] = buf[pos + 2];
            f8b[3] = buf[pos + 3];
            f8b[4] = buf[pos + 4];
            f8b[5] = buf[pos + 5];
            f8b[6] = buf[pos + 6];
            f8b[7] = buf[pos + 7];
            return f64[0];
        }

        function readDouble_f64_rev(buf, pos) {
            f8b[7] = buf[pos    ];
            f8b[6] = buf[pos + 1];
            f8b[5] = buf[pos + 2];
            f8b[4] = buf[pos + 3];
            f8b[3] = buf[pos + 4];
            f8b[2] = buf[pos + 5];
            f8b[1] = buf[pos + 6];
            f8b[0] = buf[pos + 7];
            return f64[0];
        }

        /* istanbul ignore next */
        exports.readDoubleLE = le ? readDouble_f64_cpy : readDouble_f64_rev;
        /* istanbul ignore next */
        exports.readDoubleBE = le ? readDouble_f64_rev : readDouble_f64_cpy;

    // double: ieee754
    })(); else (function() {

        function writeDouble_ieee754(writeUint, off0, off1, val, buf, pos) {
            var sign = val < 0 ? 1 : 0;
            if (sign)
                val = -val;
            if (val === 0) {
                writeUint(0, buf, pos + off0);
                writeUint(1 / val > 0 ? /* positive */ 0 : /* negative 0 */ 2147483648, buf, pos + off1);
            } else if (isNaN(val)) {
                writeUint(0, buf, pos + off0);
                writeUint(2146959360, buf, pos + off1);
            } else if (val > 1.7976931348623157e+308) { // +-Infinity
                writeUint(0, buf, pos + off0);
                writeUint((sign << 31 | 2146435072) >>> 0, buf, pos + off1);
            } else {
                var mantissa;
                if (val < 2.2250738585072014e-308) { // denormal
                    mantissa = val / 5e-324;
                    writeUint(mantissa >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | mantissa / 4294967296) >>> 0, buf, pos + off1);
                } else {
                    var exponent = Math.floor(Math.log(val) / Math.LN2);
                    if (exponent === 1024)
                        exponent = 1023;
                    mantissa = val * Math.pow(2, -exponent);
                    writeUint(mantissa * 4503599627370496 >>> 0, buf, pos + off0);
                    writeUint((sign << 31 | exponent + 1023 << 20 | mantissa * 1048576 & 1048575) >>> 0, buf, pos + off1);
                }
            }
        }

        exports.writeDoubleLE = writeDouble_ieee754.bind(null, writeUintLE, 0, 4);
        exports.writeDoubleBE = writeDouble_ieee754.bind(null, writeUintBE, 4, 0);

        function readDouble_ieee754(readUint, off0, off1, buf, pos) {
            var lo = readUint(buf, pos + off0),
                hi = readUint(buf, pos + off1);
            var sign = (hi >> 31) * 2 + 1,
                exponent = hi >>> 20 & 2047,
                mantissa = 4294967296 * (hi & 1048575) + lo;
            return exponent === 2047
                ? mantissa
                ? NaN
                : sign * Infinity
                : exponent === 0 // denormal
                ? sign * 5e-324 * mantissa
                : sign * Math.pow(2, exponent - 1075) * (mantissa + 4503599627370496);
        }

        exports.readDoubleLE = readDouble_ieee754.bind(null, readUintLE, 0, 4);
        exports.readDoubleBE = readDouble_ieee754.bind(null, readUintBE, 4, 0);

    })();

    return exports;
}

// uint helpers

function writeUintLE(val, buf, pos) {
    buf[pos    ] =  val        & 255;
    buf[pos + 1] =  val >>> 8  & 255;
    buf[pos + 2] =  val >>> 16 & 255;
    buf[pos + 3] =  val >>> 24;
}

function writeUintBE(val, buf, pos) {
    buf[pos    ] =  val >>> 24;
    buf[pos + 1] =  val >>> 16 & 255;
    buf[pos + 2] =  val >>> 8  & 255;
    buf[pos + 3] =  val        & 255;
}

function readUintLE(buf, pos) {
    return (buf[pos    ]
          | buf[pos + 1] << 8
          | buf[pos + 2] << 16
          | buf[pos + 3] << 24) >>> 0;
}

function readUintBE(buf, pos) {
    return (buf[pos    ] << 24
          | buf[pos + 1] << 16
          | buf[pos + 2] << 8
          | buf[pos + 3]) >>> 0;
}


/***/ }),

/***/ "./node_modules/@protobufjs/inquire/index.js":
/*!***************************************************!*\
  !*** ./node_modules/@protobufjs/inquire/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";

module.exports = inquire;

/**
 * Requires a module only if available.
 * @memberof util
 * @param {string} moduleName Module to require
 * @returns {?Object} Required module if available and not empty, otherwise `null`
 */
function inquire(moduleName) {
    try {
        var mod = eval("quire".replace(/^/,"re"))(moduleName); // eslint-disable-line no-eval
        if (mod && (mod.length || Object.keys(mod).length))
            return mod;
    } catch (e) {} // eslint-disable-line no-empty
    return null;
}


/***/ }),

/***/ "./node_modules/@protobufjs/pool/index.js":
/*!************************************************!*\
  !*** ./node_modules/@protobufjs/pool/index.js ***!
  \************************************************/
/***/ ((module) => {

"use strict";

module.exports = pool;

/**
 * An allocator as used by {@link util.pool}.
 * @typedef PoolAllocator
 * @type {function}
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */

/**
 * A slicer as used by {@link util.pool}.
 * @typedef PoolSlicer
 * @type {function}
 * @param {number} start Start offset
 * @param {number} end End offset
 * @returns {Uint8Array} Buffer slice
 * @this {Uint8Array}
 */

/**
 * A general purpose buffer pool.
 * @memberof util
 * @function
 * @param {PoolAllocator} alloc Allocator
 * @param {PoolSlicer} slice Slicer
 * @param {number} [size=8192] Slab size
 * @returns {PoolAllocator} Pooled allocator
 */
function pool(alloc, slice, size) {
    var SIZE   = size || 8192;
    var MAX    = SIZE >>> 1;
    var slab   = null;
    var offset = SIZE;
    return function pool_alloc(size) {
        if (size < 1 || size > MAX)
            return alloc(size);
        if (offset + size > SIZE) {
            slab = alloc(SIZE);
            offset = 0;
        }
        var buf = slice.call(slab, offset, offset += size);
        if (offset & 7) // align to 32 bit
            offset = (offset | 7) + 1;
        return buf;
    };
}


/***/ }),

/***/ "./node_modules/@protobufjs/utf8/index.js":
/*!************************************************!*\
  !*** ./node_modules/@protobufjs/utf8/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * A minimal UTF8 implementation for number arrays.
 * @memberof util
 * @namespace
 */
var utf8 = exports;

/**
 * Calculates the UTF8 byte length of a string.
 * @param {string} string String
 * @returns {number} Byte length
 */
utf8.length = function utf8_length(string) {
    var len = 0,
        c = 0;
    for (var i = 0; i < string.length; ++i) {
        c = string.charCodeAt(i);
        if (c < 128)
            len += 1;
        else if (c < 2048)
            len += 2;
        else if ((c & 0xFC00) === 0xD800 && (string.charCodeAt(i + 1) & 0xFC00) === 0xDC00) {
            ++i;
            len += 4;
        } else
            len += 3;
    }
    return len;
};

/**
 * Reads UTF8 bytes as a string.
 * @param {Uint8Array} buffer Source buffer
 * @param {number} start Source start
 * @param {number} end Source end
 * @returns {string} String read
 */
utf8.read = function utf8_read(buffer, start, end) {
    var len = end - start;
    if (len < 1)
        return "";
    var parts = null,
        chunk = [],
        i = 0, // char offset
        t;     // temporary
    while (start < end) {
        t = buffer[start++];
        if (t < 128)
            chunk[i++] = t;
        else if (t > 191 && t < 224)
            chunk[i++] = (t & 31) << 6 | buffer[start++] & 63;
        else if (t > 239 && t < 365) {
            t = ((t & 7) << 18 | (buffer[start++] & 63) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63) - 0x10000;
            chunk[i++] = 0xD800 + (t >> 10);
            chunk[i++] = 0xDC00 + (t & 1023);
        } else
            chunk[i++] = (t & 15) << 12 | (buffer[start++] & 63) << 6 | buffer[start++] & 63;
        if (i > 8191) {
            (parts || (parts = [])).push(String.fromCharCode.apply(String, chunk));
            i = 0;
        }
    }
    if (parts) {
        if (i)
            parts.push(String.fromCharCode.apply(String, chunk.slice(0, i)));
        return parts.join("");
    }
    return String.fromCharCode.apply(String, chunk.slice(0, i));
};

/**
 * Writes a string as UTF8 bytes.
 * @param {string} string Source string
 * @param {Uint8Array} buffer Destination buffer
 * @param {number} offset Destination offset
 * @returns {number} Bytes written
 */
utf8.write = function utf8_write(string, buffer, offset) {
    var start = offset,
        c1, // character 1
        c2; // character 2
    for (var i = 0; i < string.length; ++i) {
        c1 = string.charCodeAt(i);
        if (c1 < 128) {
            buffer[offset++] = c1;
        } else if (c1 < 2048) {
            buffer[offset++] = c1 >> 6       | 192;
            buffer[offset++] = c1       & 63 | 128;
        } else if ((c1 & 0xFC00) === 0xD800 && ((c2 = string.charCodeAt(i + 1)) & 0xFC00) === 0xDC00) {
            c1 = 0x10000 + ((c1 & 0x03FF) << 10) + (c2 & 0x03FF);
            ++i;
            buffer[offset++] = c1 >> 18      | 240;
            buffer[offset++] = c1 >> 12 & 63 | 128;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        } else {
            buffer[offset++] = c1 >> 12      | 224;
            buffer[offset++] = c1 >> 6  & 63 | 128;
            buffer[offset++] = c1       & 63 | 128;
        }
    }
    return offset - start;
};


/***/ }),

/***/ "./node_modules/abort-controller/browser.js":
/*!**************************************************!*\
  !*** ./node_modules/abort-controller/browser.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
/*globals self, window */


/*eslint-disable @mysticatea/prettier */
const { AbortController, AbortSignal } =
    typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    /* otherwise */ undefined
/*eslint-enable @mysticatea/prettier */

module.exports = AbortController
module.exports.AbortSignal = AbortSignal
module.exports["default"] = AbortController


/***/ }),

/***/ "./node_modules/any-signal/index.js":
/*!******************************************!*\
  !*** ./node_modules/any-signal/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { AbortController } = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js")

/**
 * Takes an array of AbortSignals and returns a single signal.
 * If any signals are aborted, the returned signal will be aborted.
 * @param {Array<AbortSignal>} signals
 * @returns {AbortSignal}
 */
function anySignal (signals) {
  const controller = new AbortController()

  function onAbort () {
    controller.abort()

    for (const signal of signals) {
      if (!signal || !signal.removeEventListener) continue
      signal.removeEventListener('abort', onAbort)
    }
  }

  for (const signal of signals) {
    if (!signal || !signal.addEventListener) continue
    if (signal.aborted) {
      onAbort()
      break
    }
    signal.addEventListener('abort', onAbort)
  }

  return controller.signal
}

module.exports = anySignal
module.exports.anySignal = anySignal


/***/ }),

/***/ "./node_modules/blob-to-it/index.js":
/*!******************************************!*\
  !*** ./node_modules/blob-to-it/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint-env browser */



const browserReadableStreamToIt = __webpack_require__(/*! browser-readablestream-to-it */ "./node_modules/browser-readablestream-to-it/index.js")

/**
 * @param {Blob} blob
 * @returns {AsyncIterable<Uint8Array>}
 */
function blobToIt (blob) {
  if (typeof blob.stream === 'function') {
    // @ts-ignore missing some properties
    return browserReadableStreamToIt(blob.stream())
  }

  // firefox < 69 does not support blob.stream()
  // @ts-ignore - response.body is optional, but in practice it's a stream.
  return browserReadableStreamToIt(new Response(blob).body)
}

module.exports = blobToIt


/***/ }),

/***/ "./node_modules/browser-readablestream-to-it/index.js":
/*!************************************************************!*\
  !*** ./node_modules/browser-readablestream-to-it/index.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


/**
 * Turns a browser readable stream into an async iterable. Async iteration over
 * returned iterable will lock give stream, preventing any other consumer from
 * acquiring a reader. The lock will be released if iteration loop is broken. To
 * prevent stream cancelling optional `{ preventCancel: true }` could be passed
 * as a second argument.
 * @template T
 * @param {ReadableStream<T>} stream
 * @param {Object} [options]
 * @param {boolean} [options.preventCancel=boolean]
 * @returns {AsyncIterable<T>}
 */
async function * browserReadableStreamToIt (stream, options = {}) {
  const reader = stream.getReader()

  try {
    while (true) {
      const result = await reader.read()

      if (result.done) {
        return
      }

      yield result.value
    }
  } finally {
    if (options.preventCancel !== true) {
      reader.cancel()
    }

    reader.releaseLock()
  }
}

module.exports = browserReadableStreamToIt


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/app.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/app.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\n#dark {\n  background: black;\n  color: #bcc2be;\n  border-color: #535353;\n}\n#dark .navbar {\n  background: rgba(188, 194, 190, 0.8);\n}\n#dark .toggle-nav .bar {\n  background: #2e0b38;\n}\n#dark .jumbotron {\n  background: #2e0b38;\n}\n#dark button {\n  background: #2e0b38;\n  color: #bcc2be;\n  border-color: #1d1d1d;\n}\n\n#irie {\n  background: black;\n  color: mediumseagreen;\n  border-color: white;\n}\n#irie .navbar {\n  background: rgba(60, 179, 113, 0.8);\n}\n#irie .toggle-nav .bar {\n  background: yellow;\n}\n#irie .jumbotron {\n  background: rgba(255, 255, 0, 0.8);\n}\n#irie button {\n  background: yellow;\n  color: mediumseagreen;\n  border-color: darkgrey;\n}\n\n#light {\n  background: ivory;\n  color: #3353ac;\n  border-color: #f3de1e;\n}\n#light .navbar {\n  background: rgba(51, 83, 172, 0.8);\n}\n#light .toggle-nav .bar {\n  background: lightgray;\n}\n#light .jumbotron {\n  background: rgba(211, 211, 211, 0.8);\n}\n#light button {\n  background: rgba(211, 211, 211, 0.3);\n  color: #3353ac;\n  border-color: #700303;\n}\n\n#woody {\n  background: black;\n  color: #bcc2be;\n  border-color: #535353;\n}\n#woody .navbar {\n  background: rgba(188, 194, 190, 0.8);\n}\n#woody .toggle-nav .bar {\n  background: #2e0b38;\n}\n#woody .jumbotron {\n  background: rgba(46, 11, 56, 0.8);\n}\n#woody button {\n  background: #2e0b38;\n  color: #bcc2be;\n  border-color: #1d1d1d;\n}\n\n#metal {\n  background: black;\n  color: #bcc2be;\n  border-color: #535353;\n}\n#metal .navbar {\n  background: rgba(188, 194, 190, 0.8);\n}\n#metal .toggle-nav .bar {\n  background: #2e0b38;\n}\n#metal .jumbotron {\n  background: rgba(46, 11, 56, 0.8);\n}\n#metal button {\n  background: #2e0b38;\n  color: #bcc2be;\n  border-color: #1d1d1d;\n}\n\nbody {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\nsvg {\n  user-select: none;\n  /* supported by Chrome and Opera */\n  -webkit-user-select: none;\n  /* Safari */\n  -khtml-user-select: none;\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Firefox */\n  -ms-user-select: none;\n  pointer-events: none;\n  cursor: default;\n}\n\ncanvas {\n  position: fixed;\n  top: 0%;\n  left: 0%;\n  z-index: -999;\n}\n\nbutton {\n  width: auto;\n  border-radius: 9px;\n  border: 0;\n}\n\nimg {\n  width: calc(100% - 2em);\n  margin: 1em;\n}\n\n.body {\n  width: 100%;\n  margin: 0;\n  padding-top: 0em;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\n.navbar {\n  text-align: center;\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: auto;\n  grid-row: 1/1;\n}\n\nnav {\n  position: relative;\n  text-align: left;\n  top: 0em;\n  left: 0em;\n  width: 100%;\n  height: auto;\n}\n\n.logo {\n  position: relative;\n  top: 0.2rem;\n  left: 0.2em;\n  padding: 0;\n  margin: 0;\n  font-size: 1em;\n}\n\nnav ul {\n  width: 100%;\n  margin: 0;\n  margin-top: 0.5em;\n  padding: 0;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n}\n\nnav li {\n  margin-bottom: 0em;\n  margin-left: 1em;\n  list-style: none;\n  width: auto;\n}\n\nnav button {\n  font-size: 0.8em;\n  text-transform: uppercase;\n  padding: 0.33em;\n  margin-left: 1em;\n}\n\nnav button:first-child {\n  margin-left: 0;\n}\n\n.toggle-nav {\n  width: 52px;\n  height: 42px;\n  background: none !important;\n  display: none;\n}\n\n.toggle-nav .bar {\n  height: 3px;\n  width: 100%;\n}\n\n.toggle-nav .bar:last-child {\n  width: 66%;\n}\n\n.iconic {\n  height: 18px !important;\n  width: 18px !important;\n  float: left;\n  margin: 0;\n  margin-left: 3px !important;\n  margin-right: 10px !important;\n  padding: 0px !important;\n}\n\n#home {\n  grid-column: 1/2;\n  grid-row: 1;\n}\n\n#links {\n  grid-column: 2/7;\n  grid-row: 1;\n}\n\n#lookup {\n  grid-column: 7/9;\n  grid-row: 1;\n}\n\n#defi {\n  grid-column: 9/13;\n  grid-row: 1;\n  text-align: right;\n  margin-right: 2em;\n}\n\n#seek {\n  width: 66%;\n}\n\n.stage {\n  grid-row: 1/13;\n  grid-column: 1/13;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  width: 100%;\n  height: 100%;\n  padding-top: 3em;\n}\n\n#links {\n  grid-row: 1;\n  grid-column: 11/13;\n}\n\n#myProBtn {\n  width: 100%;\n}\n\n#allMemBtn {\n  width: 100%;\n}\n\n#form {\n  grid-row: 2/5;\n  grid-column: 11/13;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n  grid-template-columns: 1fr;\n  width: 100%;\n}\n\n#fuid {\n  grid-row: 1;\n  width: 100%;\n}\n\n#fname {\n  grid-row: 2;\n  width: 100%;\n}\n\n#frank {\n  grid-row: 3;\n  width: 100%;\n}\n\n#fsince {\n  grid-row: 4;\n  width: 100%;\n}\n\n#fbday {\n  grid-row: 5;\n  width: 100%;\n}\n\n#fstatus {\n  grid-row: 6;\n  width: 100%;\n}\n\n#formBtn {\n  grid-row: 8;\n  width: 100%;\n}\n\n#board {\n  grid-row: 1/9;\n  grid-column: 1/11;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-template-rows: 1fr 1fr 1fr;\n  grid-gap: 1em;\n  padding: 1em;\n}\n\n#proCard {\n  min-width: 350px;\n  background: lightgrey;\n  border-radius: 9px;\n  padding: 2em;\n  overflow: hidden;\n}\n\n#account {\n  grid-row: 1/7;\n  grid-column: 1/7;\n  padding: 1em;\n  margin: 1em;\n}\n\n.propic {\n  width: 100%;\n  height: auto;\n}\n\n#userForm {\n  grid-row: 4/7;\n  grid-column: 7/13;\n  padding: 1em;\n  margin: 1em;\n}\n\n#file {\n  opacity: 0;\n  position: absolute;\n  z-index: -1;\n}\n\n#pusher, #uploader {\n  cursor: pointer;\n  opacity: 1;\n}\n\n#connections {\n  grid-row: 7/13;\n  grid-column: 1/13;\n  padding: 1em;\n  margin: 1em;\n}\n\n#modal {\n  width: calc(50% - 6em);\n  height: 50%;\n  z-index: 1000;\n  position: absolute;\n  top: 20%;\n  left: 25%;\n  padding: 3em;\n  background: rgba(255, 255, 240, 0.5);\n  display: none;\n  border-radius: 9px;\n}\n\n#close {\n  border-radius: 50%;\n  background: tomato;\n  border: 2px white solid;\n  width: 18px;\n  height: 18px;\n  padding: -5px;\n  color: white;\n  text-align: center;\n  vertical-align: top;\n  overflow: hidden;\n  font-size: 1.2em;\n  font-weight: 900;\n  position: absolute;\n  top: -6px;\n  right: -6px;\n}\n\n#closer {\n  position: relative;\n  top: -8px;\n}\n\n#msgForm, #s0xForm, #groupForm {\n  display: none;\n  text-align: center;\n}\n\n#s0xTitle {\n  display: none;\n}\n\n.labeled {\n  background: grey;\n  width: 1.8em;\n  height: 1.3em;\n  padding: 0em;\n  margin: 0em;\n}\n\n@media (max-width: 1300px) {\n  nav ul {\n    grid-template-columns: 1fr 5fr 6fr;\n  }\n\n  .navbar {\n    bottom: 0;\n    grid-row: 12/13;\n  }\n\n  nav button {\n    font-size: 0.8em;\n  }\n\n  .logo {\n    text-align: right;\n  }\n\n  #home {\n    grid-column: 1/2;\n    grid-row: 2;\n  }\n\n  #links {\n    grid-column: 1/9;\n    grid-row: 1;\n  }\n\n  #lookup {\n    grid-column: 2/13;\n    grid-row: 2;\n    text-align: right;\n    margin-right: 2em;\n  }\n\n  #defi {\n    grid-column: 2/13;\n    grid-row: 1;\n    text-align: right;\n  }\n\n  .stage {\n    grid-row: 1/12;\n    grid-column: 1/13;\n  }\n\n  #account {\n    grid-row: 1/13;\n    grid-column: 1/13;\n    padding: 1em;\n    margin: 1em;\n  }\n\n  #userForm {\n    grid-row: 1/13;\n    grid-column: 13/13;\n    padding: 1em;\n    margin: 1em;\n  }\n}\n@media (max-width: 720px) {\n  #lookup {\n    display: none;\n  }\n\n  #defi {\n    grid-column: 2/13;\n    grid-row: 2;\n    text-align: right;\n  }\n}\n@media (max-width: 520) {\n  #links {\n    display: none;\n  }\n\n  #defi {\n    display: none;\n  }\n\n  nav li, nav ul, nav button {\n    width: 100%;\n  }\n\n  nav button {\n    font-size: 0.8em;\n  }\n}", "",{"version":3,"sources":["webpack://./public/app.scss","webpack://./public/cols/dark.scss","webpack://./public/cols/irie.scss","webpack://./public/cols/light.scss","webpack://./public/cols/woody.scss","webpack://./public/cols/metal.scss"],"names":[],"mappings":"AAAA;EAAE,sBAAA;AAEF;;AADA;EAEI,iBCFC;EDGD,cCDC;EDED,qBCCC;ADEL;AAFI;EAAQ,oCAAA;AAKZ;AAJI;EAAiB,mBAAA;AAOrB;AANI;EAAW,mBAAA;AASf;AARI;EACI,mBCRH;EDSG,cCRH;EDSG,qBCPH;ADiBL;;AAPA;EAEI,iBEhBC;EFiBD,qBEfC;EFgBD,mBEbC;AFsBL;AARI;EAAQ,mCAAA;AAWZ;AAVI;EAAiB,kBAAA;AAarB;AAZI;EAAW,kCAAA;AAef;AAdI;EACI,kBEtBH;EFuBG,qBEtBH;EFuBG,sBErBH;AFqCL;;AAbA;EAEI,iBG9BC;EH+BD,cG7BC;EH8BD,qBG3BC;AH0CL;AAdI;EAAQ,kCAAA;AAiBZ;AAhBI;EAAiB,qBAAA;AAmBrB;AAlBI;EAAW,oCAAA;AAqBf;AApBI;EACI,oCAAA;EACA,cGpCH;EHqCG,qBGnCH;AHyDL;;AAnBA;EAEI,iBI5CC;EJ6CD,cI3CC;EJ4CD,qBIzCC;AJ8DL;AApBI;EAAQ,oCAAA;AAuBZ;AAtBI;EAAiB,mBAAA;AAyBrB;AAxBI;EAAW,iCAAA;AA2Bf;AA1BI;EACI,mBIlDH;EJmDG,cIlDH;EJmDG,qBIjDH;AJ6EL;;AAzBA;EAEI,iBK1DC;EL2DD,cKzDC;EL0DD,qBKvDC;ALkFL;AA1BI;EAAQ,oCAAA;AA6BZ;AA5BI;EAAiB,mBAAA;AA+BrB;AA9BI;EAAW,iCAAA;AAiCf;AAhCI;EACI,mBKhEH;ELiEG,cKhEH;ELiEG,qBK/DH;ALiGL;;AA/BA;EAAK,SAAA;EAAS,WAAA;EAAW,YAAA;EAAY,gBAAA;AAsCrC;;AArCA;EACI,iBAAA;EAAmB,kCAAA;EACpB,yBAAA;EAA2B,WAAA;EAC3B,wBAAA;EAA0B,mBAAA;EAC1B,sBAAA;EAAwB,YAAA;EACxB,qBAAA;EACA,oBAAA;EACH,eAAA;AA4CA;;AA1CA;EAAO,eAAA;EAAe,OAAA;EAAQ,QAAA;EAAS,aAAA;AAiDvC;;AAhDA;EAAO,WAAA;EAAa,kBAAA;EAAoB,SAAA;AAsDxC;;AArDA;EAAI,uBAAA;EAAuB,WAAA;AA0D3B;;AAzDA;EACI,WAAA;EACA,SAAA;EACA,gBAAA;EACA,aAAA;EACA,sEAAA;EACA,mEAAA;AA4DJ;;AAzDA;EAAS,kBAAA;EAAmB,eAAA;EAAiB,YAAA;EAAY,WAAA;EAAY,YAAA;EAAY,aAAA;AAkEjF;;AAjEA;EAAI,kBAAA;EAAoB,gBAAA;EAAkB,QAAA;EAAU,SAAA;EAAU,WAAA;EAAW,YAAA;AA0EzE;;AAzEQ;EACI,kBAAA;EACA,WAAA;EACA,WAAA;EACA,UAAA;EACA,SAAA;EACA,cAAA;AA4EZ;;AA1EQ;EACI,WAAA;EACA,SAAA;EACA,iBAAA;EACA,UAAA;EACA,aAAA;EACA,sEAAA;AA6EZ;;AA3EQ;EACI,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,WAAA;AA8EZ;;AA5EQ;EACI,gBAAA;EACA,yBAAA;EACA,eAAA;EACA,gBAAA;AA+EZ;;AA7EQ;EAAuB,cAAA;AAiF/B;;AAhFQ;EACI,WAAA;EACA,YAAA;EACA,2BAAA;EACA,aAAA;AAmFZ;;AAjFQ;EACI,WAAA;EACA,WAAA;AAoFZ;;AAlFQ;EAA4B,UAAA;AAsFpC;;AArFQ;EAAQ,uBAAA;EAAwB,sBAAA;EAAsB,WAAA;EAAW,SAAA;EAAS,2BAAA;EAA4B,6BAAA;EAA8B,uBAAA;AA+F5I;;AA9FQ;EAAM,gBAAA;EAAiB,WAAA;AAmG/B;;AAlGQ;EAAO,gBAAA;EAAiB,WAAA;AAuGhC;;AAtGQ;EAAQ,gBAAA;EAAiB,WAAA;AA2GjC;;AA1GQ;EAAM,iBAAA;EAAkB,WAAA;EAAY,iBAAA;EAAiB,iBAAA;AAiH7D;;AAhHQ;EAAM,UAAA;AAoHd;;AAlHA;EACQ,cAAA;EACA,iBAAA;EACI,aAAA;EACA,sEAAA;EACA,mEAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;AAqHZ;;AAnHY;EACI,WAAA;EACA,kBAAA;AAsHhB;;AApHgB;EAAU,WAAA;AAwH1B;;AAvHgB;EAAW,WAAA;AA2H3B;;AA1HY;EACI,aAAA;EACA,kBAAA;EACA,aAAA;EACA,mDAAA;EACA,0BAAA;EACA,WAAA;AA6HhB;;AA3HgB;EAAM,WAAA;EAAY,WAAA;AAgIlC;;AA/HgB;EAAO,WAAA;EAAY,WAAA;AAoInC;;AAnIgB;EAAO,WAAA;EAAY,WAAA;AAwInC;;AAvIgB;EAAQ,WAAA;EAAY,WAAA;AA4IpC;;AA3IgB;EAAO,WAAA;EAAY,WAAA;AAgJnC;;AA/IgB;EAAS,WAAA;EAAY,WAAA;AAoJrC;;AAnJgB;EAAS,WAAA;EAAY,WAAA;AAwJrC;;AAvJY;EACI,aAAA;EACA,iBAAA;EACA,aAAA;EACA,kCAAA;EACA,+BAAA;EACA,aAAA;EACA,YAAA;AA0JhB;;AAxJgB;EACI,gBAAA;EACA,qBAAA;EACA,kBAAA;EACA,YAAA;EACA,gBAAA;AA2JpB;;AAzJY;EACI,aAAA;EACA,gBAAA;EACA,YAAA;EACA,WAAA;AA4JhB;;AA1JY;EAAQ,WAAA;EAAa,YAAA;AA+JjC;;AA9JY;EACI,aAAA;EACA,iBAAA;EACA,YAAA;EACA,WAAA;AAiKhB;;AA/JoB;EAAM,UAAA;EACF,kBAAA;EACA,WAAA;AAmKxB;;AAjKoB;EAAkB,eAAA;EAAgB,UAAA;AAsKtD;;AArKY;EACI,cAAA;EACA,iBAAA;EACA,YAAA;EACA,WAAA;AAwKhB;;AAtKY;EACI,sBAAA;EACA,WAAA;EACA,aAAA;EACA,kBAAA;EACA,QAAA;EACA,SAAA;EACA,YAAA;EACA,oCAAA;EACA,aAAA;EACA,kBAAA;AAyKhB;;AAvKgB;EACI,kBAAA;EACA,kBAAA;EACA,uBAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,YAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;EACA,SAAA;EACA,WAAA;AA0KpB;;AAxKgB;EACI,kBAAA;EACA,SAAA;AA2KpB;;AAzKgB;EAA6B,aAAA;EAAa,kBAAA;AA8K1D;;AA7KoB;EACI,aAAA;AAgLxB;;AA9KoB;EAAS,gBAAA;EAAkB,YAAA;EAAc,aAAA;EAAc,YAAA;EAAa,WAAA;AAsLxF;;AAnLA;EACI;IAAO,kCAAA;EAuLT;;EAtLE;IAAQ,SAAA;IAAS,eAAA;EA2LnB;;EA1LE;IAAW,gBAAA;EA8Lb;;EA7LE;IAAM,iBAAA;EAiMR;;EAhME;IAAM,gBAAA;IAAiB,WAAA;EAqMzB;;EApME;IAAO,gBAAA;IAAiB,WAAA;EAyM1B;;EAxME;IAAQ,iBAAA;IAAkB,WAAA;IAAY,iBAAA;IAAiB,iBAAA;EA+MzD;;EA9ME;IAAM,iBAAA;IAAkB,WAAA;IAAY,iBAAA;EAoNtC;;EAnNE;IAAO,cAAA;IAAc,iBAAA;EAwNvB;;EAvNE;IACI,cAAA;IACA,iBAAA;IACA,YAAA;IACA,WAAA;EA0NN;;EAxNE;IACI,cAAA;IACA,kBAAA;IACA,YAAA;IACA,WAAA;EA2NN;AACF;AAzNA;EACI;IAAQ,aAAA;EA4NV;;EA3NE;IAAM,iBAAA;IAAkB,WAAA;IAAY,iBAAA;EAiOtC;AACF;AAhOA;EACI;IAAO,aAAA;EAmOT;;EAlOE;IAAM,aAAA;EAsOR;;EArOE;IAA2B,WAAA;EAyO7B;;EAxOE;IAAW,gBAAA;EA4Ob;AACF","sourcesContent":["*{box-sizing: border-box;}\r\n#dark {\r\n    @import './cols/dark.scss';\r\n    background: $bg;\r\n    color: $fc;\r\n    border-color: $sc;\r\n    .navbar{background: rgba($fc,0.8)}\r\n    .toggle-nav .bar{background: rgba($bc,1)}\r\n    .jumbotron{background: rgba($bc,1)}\r\n    button{\r\n        background: $bc;\r\n        color: $fc;\r\n        border-color: $lc;\r\n    }\r\n}\r\n#irie {\r\n    @import './cols/irie.scss';\r\n    background: $bg;\r\n    color: $fc;\r\n    border-color: $sc;\r\n    .navbar{background: rgba($fc,0.8)}\r\n    .toggle-nav .bar{background: rgba($bc,1)}\r\n    .jumbotron{background: rgba($bc,.8)}\r\n    button{\r\n        background: $bc;\r\n        color: $fc;\r\n        border-color: $lc;\r\n    }\r\n}\r\n#light {\r\n    @import './cols/light.scss';\r\n    background: $bg;\r\n    color: $fc;\r\n    border-color: $sc;\r\n    .navbar{background: rgba($fc,0.8)}\r\n    .toggle-nav .bar{background: rgba($bc,1)}\r\n    .jumbotron{background: rgba($bc,.8)}\r\n    button{\r\n        background: rgba($bc,0.3);\r\n        color: $fc;\r\n        border-color: $lc;\r\n    }\r\n}\r\n#woody {\r\n    @import './cols/woody.scss';\r\n    background: $bg;\r\n    color: $fc;\r\n    border-color: $sc;\r\n    .navbar{background: rgba($fc,0.8)}\r\n    .toggle-nav .bar{background: rgba($bc,1)}\r\n    .jumbotron{background: rgba($bc,.8)}\r\n    button{\r\n        background: $bc;\r\n        color: $fc;\r\n        border-color: $lc;\r\n    }\r\n}\r\n#metal {\r\n    @import './cols/metal.scss';\r\n    background: $bg;\r\n    color: $fc;\r\n    border-color: $sc;\r\n    .navbar{background: rgba($fc,0.8)}\r\n    .toggle-nav .bar{background: rgba($bc,1)}\r\n    .jumbotron{background: rgba($bc,.8)}\r\n    button{\r\n        background: $bc;\r\n        color: $fc;\r\n        border-color: $lc;\r\n    }\r\n}\r\nbody{margin:0;width:100%;height:100%;overflow: hidden;}\r\nsvg{  \r\n    user-select: none; /* supported by Chrome and Opera */\r\n   -webkit-user-select: none; /* Safari */\r\n   -khtml-user-select: none; /* Konqueror HTML */\r\n   -moz-user-select: none; /* Firefox */\r\n   -ms-user-select: none;\r\n   pointer-events: none;\r\ncursor: default;\r\n}\r\ncanvas{position:fixed;top:-0%;left:-0%;z-index: -999;}\r\nbutton{width: auto; border-radius: 9px; border: 0;}\r\nimg{width:calc(100% - 2em);margin:1em;}\r\n.body{\r\n    width:100%;\r\n    margin:  0;\r\n    padding-top: 0em;\r\n    display:grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\r\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\r\n    \r\n}\r\n.navbar{ text-align:center; position: fixed; z-index:999;width: 100%;height:auto;grid-row: 1/1;}\r\nnav{position: relative; text-align: left; top: 0em; left:0em; width:100%;height:auto;}\r\n        .logo{\r\n            position: relative;\r\n            top: 0.2rem;\r\n            left: 0.2em;\r\n            padding: 0;\r\n            margin: 0;\r\n            font-size: 1em;\r\n        }\r\n        nav ul {\r\n            width:100%;\r\n            margin:  0;\r\n            margin-top: .5em;\r\n            padding: 0;\r\n            display: grid;\r\n            grid-template-columns:  1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\r\n        }\r\n        nav li {\r\n            margin-bottom: 0em;\r\n            margin-left: 1em;\r\n            list-style: none;\r\n            width: auto;\r\n        }\r\n        nav button {\r\n            font-size: 0.8em;\r\n            text-transform: uppercase;\r\n            padding: .33em;\r\n            margin-left: 1em;\r\n        }\r\n        nav button:first-child{margin-left: 0;}\r\n        .toggle-nav{\r\n            width: 52px;\r\n            height: 42px;\r\n            background: none !important;\r\n            display:none;\r\n        }\r\n        .toggle-nav .bar{\r\n            height:3px;\r\n            width: 100%;   \r\n        }\r\n        .toggle-nav .bar:last-child{width:66%;}\r\n        .iconic{height:18px !important; width:18px !important;float:left;margin:0;margin-left:3px !important; margin-right:10px !important; padding:0px !important; }\r\n        #home{grid-column: 1/2;grid-row: 1;}\r\n        #links{grid-column: 2/7;grid-row: 1;}\r\n        #lookup{grid-column: 7/9;grid-row: 1;}\r\n        #defi{grid-column: 9/13;grid-row: 1;text-align:right;margin-right: 2em;}\r\n        #seek{width: 66%;}\r\n\r\n.stage{\r\n        grid-row:1/13;\r\n        grid-column: 1/13;\r\n            display:grid;\r\n            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\r\n            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr ;\r\n            width: 100%;\r\n            height: 100%;\r\n            padding-top:3em;\r\n        }\r\n            #links{\r\n                grid-row: 1;\r\n                grid-column: 11/13;\r\n            }\r\n                #myProBtn{width:100%;}\r\n                #allMemBtn{width:100%;}\r\n            #form{ \r\n                grid-row: 2/5;\r\n                grid-column: 11/13;\r\n                display: grid;\r\n                grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\r\n                grid-template-columns: 1fr;\r\n                width:100%;\r\n            }\r\n                #fuid{grid-row: 1;width:100%;}\r\n                #fname{grid-row: 2;width:100%;}\r\n                #frank{grid-row: 3;width:100%;}\r\n                #fsince{grid-row: 4;width:100%;}\r\n                #fbday{grid-row: 5;width:100%;}\r\n                #fstatus{grid-row: 6;width:100%;}\r\n                #formBtn{grid-row: 8;width:100%;}\r\n            #board{\r\n                grid-row: 1/9;\r\n                grid-column: 1/11;\r\n                display:grid;\r\n                grid-template-columns: 1fr 1fr 1fr;\r\n                grid-template-rows: 1fr 1fr 1fr;\r\n                grid-gap: 1em;\r\n                padding:1em;\r\n            }\r\n                #proCard{\r\n                    min-width: 350px;\r\n                    background: lightgrey;\r\n                    border-radius: 9px;\r\n                    padding:2em;\r\n                    overflow: hidden;\r\n                }\r\n            #account{\r\n                grid-row: 1/7;\r\n                grid-column: 1/7;\r\n                padding: 1em;\r\n                margin: 1em;\r\n            }\r\n            .propic{width: 100%; height: auto;}\r\n            #userForm{\r\n                grid-row: 4/7;\r\n                grid-column: 7/13;\r\n                padding: 1em;\r\n                margin: 1em;\r\n            }\r\n                    #file{opacity: 0;\r\n                        position: absolute;\r\n                        z-index: -1;\r\n                    }\r\n                    #pusher,#uploader{cursor: pointer;opacity: 1}\r\n            #connections{\r\n                grid-row: 7/13;\r\n                grid-column: 1/13;\r\n                padding: 1em;\r\n                margin: 1em;\r\n            }\r\n            #modal{ \r\n                width: calc(50% - 6em); \r\n                height: 50%; \r\n                z-index: 1000; \r\n                position: absolute; \r\n                top: 20%; \r\n                left:25%;\r\n                padding:3em;\r\n                background:rgba(ivory,0.5);\r\n                display:none;\r\n                border-radius: 9px;\r\n            }\r\n                #close{\r\n                    border-radius:50%;\r\n                    background:tomato;\r\n                    border: 2px white solid;\r\n                    width:18px; \r\n                    height: 18px;\r\n                    padding:-5px;\r\n                    color:white;\r\n                    text-align: center;\r\n                    vertical-align:top;\r\n                    overflow: hidden;\r\n                    font-size: 1.2em;\r\n                    font-weight: 900;\r\n                    position: absolute;\r\n                    top: -6px;\r\n                    right: -6px;\r\n                }\r\n                #closer{\r\n                    position: relative;\r\n                    top: -8px;\r\n                }\r\n                #msgForm,#s0xForm,#groupForm{display:none;text-align: center;}\r\n                    #s0xTitle{\r\n                        display: none;\r\n                    }\r\n                    .labeled{background: grey; width: 1.8em; height: 1.3em;padding:0em; margin:0em;}\r\n\r\n\r\n@media(max-width: 1300px){\r\n    nav ul{grid-template-columns: 1fr 5fr 6fr;}\r\n    .navbar{bottom:0;grid-row: 12/13;}\r\n    nav button{font-size:0.8em}\r\n    .logo{text-align: right; }\r\n    #home{grid-column: 1/2;grid-row: 2;}\r\n    #links{grid-column: 1/9;grid-row: 1;}\r\n    #lookup{grid-column: 2/13;grid-row: 2;text-align:right;margin-right:2em}\r\n    #defi{grid-column: 2/13;grid-row: 1;text-align:right;}  \r\n    .stage{grid-row:1/12;grid-column: 1/13;}\r\n    #account{\r\n        grid-row: 1/13;\r\n        grid-column: 1/13;\r\n        padding: 1em;\r\n        margin: 1em;\r\n    }\r\n    #userForm{\r\n        grid-row: 1/13;\r\n        grid-column: 13/13;\r\n        padding: 1em;\r\n        margin: 1em;\r\n    }\r\n}\r\n@media(max-width:720px){\r\n    #lookup{display:none;}\r\n    #defi{grid-column: 2/13;grid-row: 2;text-align:right;}  \r\n}\r\n@media(max-width:520){\r\n    #links{display:none;}\r\n    #defi{display:none;}\r\n    nav li, nav ul, nav button{width: 100%}\r\n    nav button{font-size:0.8em}\r\n}\r\n","// dark\r\n$bg: black;\r\n$bc: rgb(46, 11, 56);\r\n$fc: rgb(188, 194, 190);\r\n$hc: rgb(211, 190, 214);\r\n$lc: rgb(29, 29, 29);\r\n$sc: rgb(83, 83, 83);\r\n","// irie\r\n$bg: black;\r\n$bc: yellow;\r\n$fc: mediumseagreen;\r\n$hc: red;\r\n$lc: darkgrey;\r\n$sc: white;\r\n","// light\r\n$bg: ivory;\r\n$bc: lightgrey;\r\n$fc: rgb(51, 83, 172);\r\n$hc: rgb(70, 116, 155);\r\n$lc: rgb(112, 3, 3);\r\n$sc: rgb(243, 222, 30);","// dark\r\n$bg: black;\r\n$bc: rgb(46, 11, 56);\r\n$fc: rgb(188, 194, 190);\r\n$hc: rgb(211, 190, 214);\r\n$lc: rgb(29, 29, 29);\r\n$sc: rgb(83, 83, 83);\r\n","// dark\r\n$bg: black;\r\n$bc: rgb(46, 11, 56);\r\n$fc: rgb(188, 194, 190);\r\n$hc: rgb(211, 190, 214);\r\n$lc: rgb(29, 29, 29);\r\n$sc: rgb(83, 83, 83);\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/debug/src/browser.js":
/*!*******************************************!*\
  !*** ./node_modules/debug/src/browser.js ***!
  \*******************************************/
/***/ ((module, exports, __webpack_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __webpack_require__(/*! ./common */ "./node_modules/debug/src/common.js")(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ "./node_modules/debug/src/common.js":
/*!******************************************!*\
  !*** ./node_modules/debug/src/common.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ "./node_modules/err-code/index.js":
/*!****************************************!*\
  !*** ./node_modules/err-code/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


/**
 * @typedef {{ [key: string]: any }} Extensions
 * @typedef {Error} Err
 * @property {string} message
 */

/**
 *
 * @param {Error} obj
 * @param {Extensions} props
 * @returns {Error & Extensions}
 */
function assign(obj, props) {
    for (const key in props) {
        Object.defineProperty(obj, key, {
            value: props[key],
            enumerable: true,
            configurable: true,
        });
    }

    return obj;
}

/**
 *
 * @param {any} err - An Error
 * @param {string|Extensions} code - A string code or props to set on the error
 * @param {Extensions} [props] - Props to set on the error
 * @returns {Error & Extensions}
 */
function createError(err, code, props) {
    if (!err || typeof err === 'string') {
        throw new TypeError('Please pass an Error to err-code');
    }

    if (!props) {
        props = {};
    }

    if (typeof code === 'object') {
        props = code;
        code = '';
    }

    if (code) {
        props.code = code;
    }

    try {
        return assign(err, props);
    } catch (_) {
        props.message = err.message;
        props.stack = err.stack;

        const ErrClass = function () {};

        ErrClass.prototype = Object.create(Object.getPrototypeOf(err));

        // @ts-ignore
        const output = assign(new ErrClass(), props);

        return output;
    }
}

module.exports = createError;


/***/ }),

/***/ "./node_modules/ip-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/ip-regex/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


const word = '[a-fA-F\\d:]';
const b = options => options && options.includeBoundaries ?
	`(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))` :
	'';

const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

const v6seg = '[a-fA-F\\d]{1,4}';
const v6 = `
(?:
(?:${v6seg}:){7}(?:${v6seg}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6seg}:){6}(?:${v4}|:${v6seg}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6seg}:){5}(?::${v4}|(?::${v6seg}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6seg}:){4}(?:(?::${v6seg}){0,1}:${v4}|(?::${v6seg}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6seg}:){3}(?:(?::${v6seg}){0,2}:${v4}|(?::${v6seg}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6seg}:){2}(?:(?::${v6seg}){0,3}:${v4}|(?::${v6seg}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6seg}:){1}(?:(?::${v6seg}){0,4}:${v4}|(?::${v6seg}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6seg}){0,5}:${v4}|(?::${v6seg}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

// Pre-compile only the exact regexes because adding a global flag make regexes stateful
const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
const v4exact = new RegExp(`^${v4}$`);
const v6exact = new RegExp(`^${v6}$`);

const ip = options => options && options.exact ?
	v46Exact :
	new RegExp(`(?:${b(options)}${v4}${b(options)})|(?:${b(options)}${v6}${b(options)})`, 'g');

ip.v4 = options => options && options.exact ? v4exact : new RegExp(`${b(options)}${v4}${b(options)}`, 'g');
ip.v6 = options => options && options.exact ? v6exact : new RegExp(`${b(options)}${v6}${b(options)}`, 'g');

module.exports = ip;


/***/ }),

/***/ "./node_modules/ipfs-utils/src/env.js":
/*!********************************************!*\
  !*** ./node_modules/ipfs-utils/src/env.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const isElectron = __webpack_require__(/*! is-electron */ "./node_modules/is-electron/index.js")

const IS_ENV_WITH_DOM = typeof window === 'object' && typeof document === 'object' && document.nodeType === 9
// @ts-ignore
const IS_ELECTRON = isElectron()
const IS_BROWSER = IS_ENV_WITH_DOM && !IS_ELECTRON
const IS_ELECTRON_MAIN = IS_ELECTRON && !IS_ENV_WITH_DOM
const IS_ELECTRON_RENDERER = IS_ELECTRON && IS_ENV_WITH_DOM
const IS_NODE =  true && typeof process !== 'undefined' && typeof process.release !== 'undefined' && process.release.name === 'node' && !IS_ELECTRON
// @ts-ignore - we either ignore worker scope or dom scope
const IS_WEBWORKER = typeof importScripts === 'function' && typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope
const IS_TEST = typeof process !== 'undefined' && typeof process.env !== 'undefined' && "development" === 'test'
const IS_REACT_NATIVE = typeof navigator !== 'undefined' && navigator.product === 'ReactNative'

module.exports = {
  isTest: IS_TEST,
  isElectron: IS_ELECTRON,
  isElectronMain: IS_ELECTRON_MAIN,
  isElectronRenderer: IS_ELECTRON_RENDERER,
  isNode: IS_NODE,
  /**
   * Detects browser main thread  **NOT** web worker or service worker
   */
  isBrowser: IS_BROWSER,
  isWebWorker: IS_WEBWORKER,
  isEnvWithDom: IS_ENV_WITH_DOM,
  isReactNative: IS_REACT_NATIVE
}


/***/ }),

/***/ "./node_modules/ipfs-utils/src/fetch.js":
/*!**********************************************!*\
  !*** ./node_modules/ipfs-utils/src/fetch.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { isElectronMain } = __webpack_require__(/*! ./env */ "./node_modules/ipfs-utils/src/env.js")

if (isElectronMain) {
  module.exports = __webpack_require__(/*! electron-fetch */ "?714b")
} else {
// use window.fetch if it is available, fall back to node-fetch if not
  module.exports = __webpack_require__(/*! native-fetch */ "./node_modules/native-fetch/src/index.js")
}


/***/ }),

/***/ "./node_modules/ipfs-utils/src/files/url-source.js":
/*!*********************************************************!*\
  !*** ./node_modules/ipfs-utils/src/files/url-source.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const HTTP = __webpack_require__(/*! ../http */ "./node_modules/ipfs-utils/src/http.js")

/**
 *
 * @param {string} url
 * @param {import("../types").HTTPOptions} [options]
 * @returns {{ path: string; content?: AsyncIterable<Uint8Array> }}
 */
const urlSource = (url, options) => {
  return {
    path: decodeURIComponent(new URL(url).pathname.split('/').pop() || ''),
    content: readURLContent(url, options)
  }
}

/**
 *
 * @param {string} url
 * @param {import("../types").HTTPOptions} [options]
 * @returns {AsyncIterable<Uint8Array>}
 */
async function * readURLContent (url, options) {
  const http = new HTTP()
  const response = await http.get(url, options)

  yield * response.iterator()
}

module.exports = urlSource


/***/ }),

/***/ "./node_modules/ipfs-utils/src/http.js":
/*!*********************************************!*\
  !*** ./node_modules/ipfs-utils/src/http.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* eslint-disable no-undef */


const { fetch, Request, Headers } = __webpack_require__(/*! ./http/fetch */ "./node_modules/ipfs-utils/src/http/fetch.browser.js")
const { TimeoutError, HTTPError } = __webpack_require__(/*! ./http/error */ "./node_modules/ipfs-utils/src/http/error.js")
const merge = (__webpack_require__(/*! merge-options */ "./node_modules/merge-options/index.js").bind)({ ignoreUndefined: true })
const { URL, URLSearchParams } = __webpack_require__(/*! iso-url */ "./node_modules/iso-url/index.js")
const { AbortController } = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js")
const anySignal = __webpack_require__(/*! any-signal */ "./node_modules/any-signal/index.js")

/**
 * @typedef {import('stream').Readable} NodeReadableStream
 * @typedef {import('./types').HTTPOptions} HTTPOptions
 * @typedef {import('./types').ExtendedResponse} ExtendedResponse
 */

/**
 * @template TResponse
 * @param {Promise<TResponse>} promise
 * @param {number | undefined} ms
 * @param {AbortController} abortController
 * @returns {Promise<TResponse>}
 */
const timeout = (promise, ms, abortController) => {
  if (ms === undefined) {
    return promise
  }

  const start = Date.now()

  const timedOut = () => {
    const time = Date.now() - start

    return time >= ms
  }

  return new Promise((resolve, reject) => {
    const timeoutID = setTimeout(() => {
      if (timedOut()) {
        reject(new TimeoutError())
        abortController.abort()
      }
    }, ms)

    /**
     * @param {(value: any) => void } next
     */
    const after = (next) => {
      /**
       * @param {any} res
       */
      const fn = (res) => {
        clearTimeout(timeoutID)

        if (timedOut()) {
          reject(new TimeoutError())
          return
        }

        next(res)
      }
      return fn
    }

    promise
      .then(after(resolve), after(reject))
  })
}

const defaults = {
  throwHttpErrors: true,
  credentials: 'same-origin'
}

class HTTP {
  /**
   *
   * @param {HTTPOptions} options
   */
  constructor (options = {}) {
    /** @type {HTTPOptions} */
    this.opts = merge(defaults, options)
  }

  /**
   * Fetch
   *
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   * @returns {Promise<ExtendedResponse>}
   */
  async fetch (resource, options = {}) {
    /** @type {HTTPOptions} */
    const opts = merge(this.opts, options)
    const headers = new Headers(opts.headers)

    // validate resource type
    if (typeof resource !== 'string' && !(resource instanceof URL || resource instanceof Request)) {
      throw new TypeError('`resource` must be a string, URL, or Request')
    }

    const url = new URL(resource.toString(), opts.base)

    const {
      searchParams,
      transformSearchParams,
      json
    } = opts

    if (searchParams) {
      if (typeof transformSearchParams === 'function') {
        // @ts-ignore
        url.search = transformSearchParams(new URLSearchParams(opts.searchParams))
      } else {
        // @ts-ignore
        url.search = new URLSearchParams(opts.searchParams)
      }
    }

    if (json) {
      opts.body = JSON.stringify(opts.json)
      headers.set('content-type', 'application/json')
    }

    const abortController = new AbortController()
    // @ts-ignore
    const signal = anySignal([abortController.signal, opts.signal])

    const response = await timeout(
      fetch(
        url.toString(),
        {
          ...opts,
          signal,
          timeout: undefined,
          headers
        }
      ),
      opts.timeout,
      abortController
    )

    if (!response.ok && opts.throwHttpErrors) {
      if (opts.handleError) {
        await opts.handleError(response)
      }
      throw new HTTPError(response)
    }

    response.iterator = function () {
      return fromStream(response.body)
    }

    response.ndjson = async function * () {
      for await (const chunk of ndjson(response.iterator())) {
        if (options.transform) {
          yield options.transform(chunk)
        } else {
          yield chunk
        }
      }
    }

    return response
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  post (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'POST' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  get (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'GET' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  put (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'PUT' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  delete (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'DELETE' })
  }

  /**
   * @param {string | Request} resource
   * @param {HTTPOptions} options
   */
  options (resource, options = {}) {
    return this.fetch(resource, { ...options, method: 'OPTIONS' })
  }
}

/**
 * Parses NDJSON chunks from an iterator
 *
 * @param {AsyncIterable<Uint8Array>} source
 * @returns {AsyncIterable<any>}
 */
const ndjson = async function * (source) {
  const decoder = new TextDecoder()
  let buf = ''

  for await (const chunk of source) {
    buf += decoder.decode(chunk, { stream: true })
    const lines = buf.split(/\r?\n/)

    for (let i = 0; i < lines.length - 1; i++) {
      const l = lines[i].trim()
      if (l.length > 0) {
        yield JSON.parse(l)
      }
    }
    buf = lines[lines.length - 1]
  }
  buf += decoder.decode()
  buf = buf.trim()
  if (buf.length !== 0) {
    yield JSON.parse(buf)
  }
}

/**
 * Stream to AsyncIterable
 *
 * @template TChunk
 * @param {ReadableStream<TChunk> | NodeReadableStream | null} source
 * @returns {AsyncIterable<TChunk>}
 */
const fromStream = (source) => {
  // Workaround for https://github.com/node-fetch/node-fetch/issues/766
  if (isNodeReadableStream(source)) {
    const iter = source[Symbol.asyncIterator]()
    return {
      [Symbol.asyncIterator] () {
        return {
          next: iter.next.bind(iter),
          return (value) {
            source.destroy()
            if (typeof iter.return === 'function') {
              return iter.return()
            }
            return Promise.resolve({ done: true, value })
          }
        }
      }
    }
  }

  if (isWebReadableStream(source)) {
    const reader = source.getReader()
    return (async function * () {
      try {
        while (true) {
          // Read from the stream
          const { done, value } = await reader.read()
          // Exit if we're done
          if (done) return
          // Else yield the chunk
          if (value) {
            yield value
          }
        }
      } finally {
        reader.releaseLock()
      }
    })()
  }

  if (isAsyncIterable(source)) {
    return source
  }

  throw new TypeError('Body can\'t be converted to AsyncIterable')
}

/**
 * Check if it's an AsyncIterable
 *
 * @template {unknown} TChunk
 * @template {any} Other
 * @param {Other|AsyncIterable<TChunk>} value
 * @returns {value is AsyncIterable<TChunk>}
 */
const isAsyncIterable = (value) => {
  return typeof value === 'object' &&
  value !== null &&
  typeof /** @type {any} */(value)[Symbol.asyncIterator] === 'function'
}

/**
 * Check for web readable stream
 *
 * @template {unknown} TChunk
 * @template {any} Other
 * @param {Other|ReadableStream<TChunk>} value
 * @returns {value is ReadableStream<TChunk>}
 */
const isWebReadableStream = (value) => {
  return value && typeof /** @type {any} */(value).getReader === 'function'
}

/**
 * @param {any} value
 * @returns {value is NodeReadableStream}
 */
const isNodeReadableStream = (value) =>
  Object.prototype.hasOwnProperty.call(value, 'readable') &&
  Object.prototype.hasOwnProperty.call(value, 'writable')

HTTP.HTTPError = HTTPError
HTTP.TimeoutError = TimeoutError
HTTP.streamToAsyncIterator = fromStream

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.post = (resource, options) => new HTTP(options).post(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.get = (resource, options) => new HTTP(options).get(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.put = (resource, options) => new HTTP(options).put(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.delete = (resource, options) => new HTTP(options).delete(resource, options)

/**
 * @param {string | Request} resource
 * @param {HTTPOptions} [options]
 */
HTTP.options = (resource, options) => new HTTP(options).options(resource, options)

module.exports = HTTP


/***/ }),

/***/ "./node_modules/ipfs-utils/src/http/error.js":
/*!***************************************************!*\
  !*** ./node_modules/ipfs-utils/src/http/error.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


class TimeoutError extends Error {
  constructor (message = 'Request timed out') {
    super(message)
    this.name = 'TimeoutError'
  }
}
exports.TimeoutError = TimeoutError

class AbortError extends Error {
  constructor (message = 'The operation was aborted.') {
    super(message)
    this.name = 'AbortError'
  }
}
exports.AbortError = AbortError

class HTTPError extends Error {
  /**
   * @param {Response} response
   */
  constructor (response) {
    super(response.statusText)
    this.name = 'HTTPError'
    this.response = response
  }
}
exports.HTTPError = HTTPError


/***/ }),

/***/ "./node_modules/ipfs-utils/src/http/fetch.browser.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-utils/src/http/fetch.browser.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { TimeoutError, AbortError } = __webpack_require__(/*! ./error */ "./node_modules/ipfs-utils/src/http/error.js")
const { Response, Request, Headers, default: fetch } = __webpack_require__(/*! ../fetch */ "./node_modules/ipfs-utils/src/fetch.js")

/**
 * @typedef {import('../types').FetchOptions} FetchOptions
 * @typedef {import('../types').ProgressFn} ProgressFn
 */

/**
 * Fetch with progress
 *
 * @param {string | Request} url
 * @param {FetchOptions} [options]
 * @returns {Promise<ResponseWithURL>}
 */
const fetchWithProgress = (url, options = {}) => {
  const request = new XMLHttpRequest()
  request.open(options.method || 'GET', url.toString(), true)

  const { timeout, headers } = options

  if (timeout && timeout > 0 && timeout < Infinity) {
    request.timeout = timeout
  }

  if (options.overrideMimeType != null) {
    request.overrideMimeType(options.overrideMimeType)
  }

  if (headers) {
    for (const [name, value] of new Headers(headers)) {
      request.setRequestHeader(name, value)
    }
  }

  if (options.signal) {
    options.signal.onabort = () => request.abort()
  }

  if (options.onUploadProgress) {
    request.upload.onprogress = options.onUploadProgress
  }

  // Note: Need to use `arraybuffer` here instead of `blob` because `Blob`
  // instances coming from JSDOM are not compatible with `Response` from
  // node-fetch (which is the setup we get when testing with jest because
  // it uses JSDOM which does not provide a global fetch
  // https://github.com/jsdom/jsdom/issues/1724)
  request.responseType = 'arraybuffer'

  return new Promise((resolve, reject) => {
    /**
     * @param {Event} event
     */
    const handleEvent = (event) => {
      switch (event.type) {
        case 'error': {
          resolve(Response.error())
          break
        }
        case 'load': {
          resolve(
            new ResponseWithURL(request.responseURL, request.response, {
              status: request.status,
              statusText: request.statusText,
              headers: parseHeaders(request.getAllResponseHeaders())
            })
          )
          break
        }
        case 'timeout': {
          reject(new TimeoutError())
          break
        }
        case 'abort': {
          reject(new AbortError())
          break
        }
        default: {
          break
        }
      }
    }
    request.onerror = handleEvent
    request.onload = handleEvent
    request.ontimeout = handleEvent
    request.onabort = handleEvent

    // @ts-expect-error options.body can be a node readable stream, which isn't compatible with XHR, but this
    // file is a browser override so you won't get a node readable stream so ignore the error
    request.send(options.body)
  })
}

const fetchWithStreaming = fetch

/**
 * @param {string | Request} url
 * @param {FetchOptions} options
 */
const fetchWith = (url, options = {}) =>
  (options.onUploadProgress != null)
    ? fetchWithProgress(url, options)
    : fetchWithStreaming(url, options)

/**
 * Parse Headers from a XMLHttpRequest
 *
 * @param {string} input
 * @returns {Headers}
 */
const parseHeaders = (input) => {
  const headers = new Headers()
  for (const line of input.trim().split(/[\r\n]+/)) {
    const index = line.indexOf(': ')
    if (index > 0) {
      headers.set(line.slice(0, index), line.slice(index + 1))
    }
  }

  return headers
}

class ResponseWithURL extends Response {
  /**
   * @param {string} url
   * @param {BodyInit} body
   * @param {ResponseInit} options
   */
  constructor (url, body, options) {
    super(body, options)
    Object.defineProperty(this, 'url', { value: url })
  }
}

module.exports = {
  fetch: fetchWith,
  Request,
  Headers
}


/***/ }),

/***/ "./node_modules/is-electron/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-electron/index.js ***!
  \*******************************************/
/***/ ((module) => {

// https://github.com/electron/electron/issues/2288
function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to false
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

module.exports = isElectron;


/***/ }),

/***/ "./node_modules/is-ip/index.js":
/*!*************************************!*\
  !*** ./node_modules/is-ip/index.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

const ipRegex = __webpack_require__(/*! ip-regex */ "./node_modules/ip-regex/index.js");

const isIp = string => ipRegex({exact: true}).test(string);
isIp.v4 = string => ipRegex.v4({exact: true}).test(string);
isIp.v6 = string => ipRegex.v6({exact: true}).test(string);
isIp.version = string => isIp(string) ? (isIp.v4(string) ? 4 : 6) : undefined;

module.exports = isIp;


/***/ }),

/***/ "./node_modules/is-plain-obj/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-plain-obj/index.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = value => {
	if (Object.prototype.toString.call(value) !== '[object Object]') {
		return false;
	}

	const prototype = Object.getPrototypeOf(value);
	return prototype === null || prototype === Object.prototype;
};


/***/ }),

/***/ "./node_modules/iso-url/index.js":
/*!***************************************!*\
  !*** ./node_modules/iso-url/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const {
  URLWithLegacySupport,
  format,
  URLSearchParams,
  defaultBase
} = __webpack_require__(/*! ./src/url */ "./node_modules/iso-url/src/url-browser.js")
const relative = __webpack_require__(/*! ./src/relative */ "./node_modules/iso-url/src/relative.js")

module.exports = {
  URL: URLWithLegacySupport,
  URLSearchParams,
  format,
  relative,
  defaultBase
}


/***/ }),

/***/ "./node_modules/iso-url/src/relative.js":
/*!**********************************************!*\
  !*** ./node_modules/iso-url/src/relative.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const { URLWithLegacySupport, format } = __webpack_require__(/*! ./url */ "./node_modules/iso-url/src/url-browser.js")

/**
 * @param {string | undefined} url
 * @param {any} [location]
 * @param {any} [protocolMap]
 * @param {any} [defaultProtocol]
 */
module.exports = (url, location = {}, protocolMap = {}, defaultProtocol) => {
  let protocol = location.protocol
    ? location.protocol.replace(':', '')
    : 'http'

  // Check protocol map
  protocol = (protocolMap[protocol] || defaultProtocol || protocol) + ':'
  let urlParsed

  try {
    urlParsed = new URLWithLegacySupport(url)
  } catch (err) {
    urlParsed = {}
  }

  const base = Object.assign({}, location, {
    protocol: protocol || urlParsed.protocol,
    host: location.host || urlParsed.host
  })

  return new URLWithLegacySupport(url, format(base)).toString()
}


/***/ }),

/***/ "./node_modules/iso-url/src/url-browser.js":
/*!*************************************************!*\
  !*** ./node_modules/iso-url/src/url-browser.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


const isReactNative =
    typeof navigator !== 'undefined' &&
    navigator.product === 'ReactNative'

function getDefaultBase () {
  if (isReactNative) {
    return 'http://localhost'
  }
  // in some environments i.e. cloudflare workers location is not available
  if (!self.location) {
    return ''
  }

  return self.location.protocol + '//' + self.location.host
}

const URL = self.URL
const defaultBase = getDefaultBase()

class URLWithLegacySupport {
  constructor (url = '', base = defaultBase) {
    this.super = new URL(url, base)
    this.path = this.pathname + this.search
    this.auth =
            this.username && this.password
              ? this.username + ':' + this.password
              : null

    this.query =
            this.search && this.search.startsWith('?')
              ? this.search.slice(1)
              : null
  }

  get hash () {
    return this.super.hash
  }

  get host () {
    return this.super.host
  }

  get hostname () {
    return this.super.hostname
  }

  get href () {
    return this.super.href
  }

  get origin () {
    return this.super.origin
  }

  get password () {
    return this.super.password
  }

  get pathname () {
    return this.super.pathname
  }

  get port () {
    return this.super.port
  }

  get protocol () {
    return this.super.protocol
  }

  get search () {
    return this.super.search
  }

  get searchParams () {
    return this.super.searchParams
  }

  get username () {
    return this.super.username
  }

  set hash (hash) {
    this.super.hash = hash
  }

  set host (host) {
    this.super.host = host
  }

  set hostname (hostname) {
    this.super.hostname = hostname
  }

  set href (href) {
    this.super.href = href
  }

  set password (password) {
    this.super.password = password
  }

  set pathname (pathname) {
    this.super.pathname = pathname
  }

  set port (port) {
    this.super.port = port
  }

  set protocol (protocol) {
    this.super.protocol = protocol
  }

  set search (search) {
    this.super.search = search
  }

  set username (username) {
    this.super.username = username
  }

  /**
   * @param {any} o
   */
  static createObjectURL (o) {
    return URL.createObjectURL(o)
  }

  /**
   * @param {string} o
   */
  static revokeObjectURL (o) {
    URL.revokeObjectURL(o)
  }

  toJSON () {
    return this.super.toJSON()
  }

  toString () {
    return this.super.toString()
  }

  format () {
    return this.toString()
  }
}

/**
 * @param {string | import('url').UrlObject} obj
 */
function format (obj) {
  if (typeof obj === 'string') {
    const url = new URL(obj)

    return url.toString()
  }

  if (!(obj instanceof URL)) {
    const userPass =
            // @ts-ignore its not supported in node but we normalise
            obj.username && obj.password
              // @ts-ignore its not supported in node but we normalise
              ? `${obj.username}:${obj.password}@`
              : ''
    const auth = obj.auth ? obj.auth + '@' : ''
    const port = obj.port ? ':' + obj.port : ''
    const protocol = obj.protocol ? obj.protocol + '//' : ''
    const host = obj.host || ''
    const hostname = obj.hostname || ''
    const search = obj.search || (obj.query ? '?' + obj.query : '')
    const hash = obj.hash || ''
    const pathname = obj.pathname || ''
    // @ts-ignore - path is not supported in node but we normalise
    const path = obj.path || pathname + search

    return `${protocol}${userPass || auth}${
            host || hostname + port
        }${path}${hash}`
  }
}

module.exports = {
  URLWithLegacySupport,
  URLSearchParams: self.URLSearchParams,
  defaultBase,
  format
}


/***/ }),

/***/ "./node_modules/it-all/index.js":
/*!**************************************!*\
  !*** ./node_modules/it-all/index.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


/**
 * Collects all values from an (async) iterable into an array and returns it.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */
const all = async (source) => {
  const arr = []

  for await (const entry of source) {
    arr.push(entry)
  }

  return arr
}

module.exports = all


/***/ }),

/***/ "./node_modules/it-first/index.js":
/*!****************************************!*\
  !*** ./node_modules/it-first/index.js ***!
  \****************************************/
/***/ ((module) => {

"use strict";


/**
 * Returns the first result from an (async) iterable, unless empty, in which
 * case returns `undefined`.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */
const first = async (source) => {
  for await (const entry of source) { // eslint-disable-line no-unreachable-loop
    return entry
  }

  return undefined
}

module.exports = first


/***/ }),

/***/ "./node_modules/it-last/index.js":
/*!***************************************!*\
  !*** ./node_modules/it-last/index.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";


/**
 * Returns the last item of an (async) iterable, unless empty, in which case
 * return `undefined`.
 *
 * @template T
 * @param {AsyncIterable<T>|Iterable<T>} source
 */
const last = async (source) => {
  let res

  for await (const entry of source) {
    res = entry
  }

  return res
}

module.exports = last


/***/ }),

/***/ "./node_modules/it-map/index.js":
/*!**************************************!*\
  !*** ./node_modules/it-map/index.js ***!
  \**************************************/
/***/ ((module) => {

"use strict";


/**
 * Takes an (async) iterable and returns one with each item mapped by the passed
 * function.
 *
 * @template I,O
 * @param {AsyncIterable<I>|Iterable<I>} source
 * @param {function(I):O|Promise<O>} func
 * @returns {AsyncIterable<O>}
 */
const map = async function * (source, func) {
  for await (const val of source) {
    yield func(val)
  }
}

module.exports = map


/***/ }),

/***/ "./node_modules/it-peekable/index.js":
/*!*******************************************!*\
  !*** ./node_modules/it-peekable/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


/**
 * @template T
 * @typedef {Object} Peek
 * @property {() => IteratorResult<T, void>} peek
 */

/**
 * @template T
 * @typedef {Object} AsyncPeek
 * @property {() => Promise<IteratorResult<T, void>>} peek
 */

/**
 * @template T
 * @typedef {Object} Push
 * @property {(value:T) => void} push
 */

/**
 * @template T
 * @typedef {Iterable<T> & Peek<T> & Push<T> & Iterator<T>} Peekable<T>
 */

/**
 * @template T
 * @typedef {AsyncIterable<T> & AsyncPeek<T> & Push<T> & AsyncIterator<T>} AsyncPeekable<T>
 */

/**
 * @template {Iterable<any> | AsyncIterable<any>} I
 * @param {I} iterable
 * @returns {I extends Iterable<infer T>
 *  ? Peekable<T>
 *  : I extends AsyncIterable<infer T>
 *  ? AsyncPeekable<T>
 *  : never
 * }
 */
function peekableIterator (iterable) {
  // @ts-ignore
  const [iterator, symbol] = iterable[Symbol.asyncIterator]
    // @ts-ignore
    ? [iterable[Symbol.asyncIterator](), Symbol.asyncIterator]
    // @ts-ignore
    : [iterable[Symbol.iterator](), Symbol.iterator]

  /** @type {any[]} */
  const queue = []

  // @ts-ignore
  return {
    peek: () => {
      return iterator.next()
    },
    push: (value) => {
      queue.push(value)
    },
    next: () => {
      if (queue.length) {
        return {
          done: false,
          value: queue.shift()
        }
      }

      return iterator.next()
    },
    [symbol] () {
      return this
    }
  }
}

module.exports = peekableIterator


/***/ }),

/***/ "./node_modules/merge-options/index.js":
/*!*********************************************!*\
  !*** ./node_modules/merge-options/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

const isOptionObject = __webpack_require__(/*! is-plain-obj */ "./node_modules/is-plain-obj/index.js");

const {hasOwnProperty} = Object.prototype;
const {propertyIsEnumerable} = Object;
const defineProperty = (object, name, value) => Object.defineProperty(object, name, {
	value,
	writable: true,
	enumerable: true,
	configurable: true
});

const globalThis = this;
const defaultMergeOptions = {
	concatArrays: false,
	ignoreUndefined: false
};

const getEnumerableOwnPropertyKeys = value => {
	const keys = [];

	for (const key in value) {
		if (hasOwnProperty.call(value, key)) {
			keys.push(key);
		}
	}

	/* istanbul ignore else  */
	if (Object.getOwnPropertySymbols) {
		const symbols = Object.getOwnPropertySymbols(value);

		for (const symbol of symbols) {
			if (propertyIsEnumerable.call(value, symbol)) {
				keys.push(symbol);
			}
		}
	}

	return keys;
};

function clone(value) {
	if (Array.isArray(value)) {
		return cloneArray(value);
	}

	if (isOptionObject(value)) {
		return cloneOptionObject(value);
	}

	return value;
}

function cloneArray(array) {
	const result = array.slice(0, 0);

	getEnumerableOwnPropertyKeys(array).forEach(key => {
		defineProperty(result, key, clone(array[key]));
	});

	return result;
}

function cloneOptionObject(object) {
	const result = Object.getPrototypeOf(object) === null ? Object.create(null) : {};

	getEnumerableOwnPropertyKeys(object).forEach(key => {
		defineProperty(result, key, clone(object[key]));
	});

	return result;
}

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {string[]} keys keys to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */
const mergeKeys = (merged, source, keys, config) => {
	keys.forEach(key => {
		if (typeof source[key] === 'undefined' && config.ignoreUndefined) {
			return;
		}

		// Do not recurse into prototype chain of merged
		if (key in merged && merged[key] !== Object.getPrototypeOf(merged)) {
			defineProperty(merged, key, merge(merged[key], source[key], config));
		} else {
			defineProperty(merged, key, clone(source[key]));
		}
	});

	return merged;
};

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 *
 * see [Array.prototype.concat ( ...arguments )](http://www.ecma-international.org/ecma-262/6.0/#sec-array.prototype.concat)
 */
const concatArrays = (merged, source, config) => {
	let result = merged.slice(0, 0);
	let resultIndex = 0;

	[merged, source].forEach(array => {
		const indices = [];

		// `result.concat(array)` with cloning
		for (let k = 0; k < array.length; k++) {
			if (!hasOwnProperty.call(array, k)) {
				continue;
			}

			indices.push(String(k));

			if (array === merged) {
				// Already cloned
				defineProperty(result, resultIndex++, array[k]);
			} else {
				defineProperty(result, resultIndex++, clone(array[k]));
			}
		}

		// Merge non-index keys
		result = mergeKeys(result, array, getEnumerableOwnPropertyKeys(array).filter(key => !indices.includes(key)), config);
	});

	return result;
};

/**
 * @param {*} merged already cloned
 * @param {*} source something to merge
 * @param {Object} config Config Object
 * @returns {*} cloned Object
 */
function merge(merged, source, config) {
	if (config.concatArrays && Array.isArray(merged) && Array.isArray(source)) {
		return concatArrays(merged, source, config);
	}

	if (!isOptionObject(source) || !isOptionObject(merged)) {
		return clone(source);
	}

	return mergeKeys(merged, source, getEnumerableOwnPropertyKeys(source), config);
}

module.exports = function (...options) {
	const config = merge(clone(defaultMergeOptions), (this !== globalThis && this) || {}, defaultMergeOptions);
	let merged = {_: {}};

	for (const option of options) {
		if (option === undefined) {
			continue;
		}

		if (!isOptionObject(option)) {
			throw new TypeError('`' + option + '` is not an Option Object');
		}

		merged = merge(merged, {_: option}, config);
	}

	return merged._;
};


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ "./node_modules/multiaddr-to-uri/index.js":
/*!************************************************!*\
  !*** ./node_modules/multiaddr-to-uri/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { Multiaddr } = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js")

const reduceValue = (_, v) => v
const tcpUri = (str, port, parts, opts) => {
  // return tcp when explicitly requested
  if (opts && opts.assumeHttp === false) return `tcp://${str}:${port}`
  // check if tcp is the last protocol in multiaddr
  let protocol = 'tcp'
  let explicitPort = `:${port}`
  const last = parts[parts.length - 1]
  if (last.protocol === 'tcp') {
    // assume http and produce clean urls
    protocol = port === '443' ? 'https' : 'http'
    explicitPort = port === '443' || port === '80' ? '' : explicitPort
  }
  return `${protocol}://${str}${explicitPort}`
}

const Reducers = {
  ip4: reduceValue,
  ip6: (str, content, i, parts) => (
    parts.length === 1 && parts[0].protocol === 'ip6'
      ? content
      : `[${content}]`
  ),
  tcp: (str, content, i, parts, opts) => (
    parts.some(p => ['http', 'https', 'ws', 'wss'].includes(p.protocol))
      ? `${str}:${content}`
      : tcpUri(str, content, parts, opts)
  ),
  udp: (str, content) => `udp://${str}:${content}`,
  dnsaddr: reduceValue,
  dns4: reduceValue,
  dns6: reduceValue,
  ipfs: (str, content) => `${str}/ipfs/${content}`,
  p2p: (str, content) => `${str}/p2p/${content}`,
  http: str => `http://${str}`,
  https: str => `https://${str}`,
  ws: str => `ws://${str}`,
  wss: str => `wss://${str}`,
  'p2p-websocket-star': str => `${str}/p2p-websocket-star`,
  'p2p-webrtc-star': str => `${str}/p2p-webrtc-star`,
  'p2p-webrtc-direct': str => `${str}/p2p-webrtc-direct`
}

module.exports = (multiaddr, opts) => {
  const ma = new Multiaddr(multiaddr)
  const parts = multiaddr.toString().split('/').slice(1)
  return ma
    .tuples()
    .map(tuple => ({
      protocol: parts.shift(),
      content: tuple[1] ? parts.shift() : null
    }))
    .reduce((str, part, i, parts) => {
      const reduce = Reducers[part.protocol]
      if (!reduce) throw new Error(`Unsupported protocol ${part.protocol}`)
      return reduce(str, part.content, i, parts, opts)
    }, '')
}


/***/ }),

/***/ "./node_modules/multiaddr/src/codec.js":
/*!*********************************************!*\
  !*** ./node_modules/multiaddr/src/codec.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const convert = __webpack_require__(/*! ./convert */ "./node_modules/multiaddr/src/convert.js")
const protocols = __webpack_require__(/*! ./protocols-table */ "./node_modules/multiaddr/src/protocols-table.js")
const varint = __webpack_require__(/*! varint */ "./node_modules/varint/index.js")
const { concat: uint8ArrayConcat } = __webpack_require__(/*! uint8arrays/concat */ "./node_modules/uint8arrays/esm/src/concat.js")
const { toString: uint8ArrayToString } = __webpack_require__(/*! uint8arrays/to-string */ "./node_modules/uint8arrays/esm/src/to-string.js")

// export codec
module.exports = {
  stringToStringTuples,
  stringTuplesToString,

  tuplesToStringTuples,
  stringTuplesToTuples,

  bytesToTuples,
  tuplesToBytes,

  bytesToString,
  stringToBytes,

  fromString,
  fromBytes,
  validateBytes,
  isValidBytes,
  cleanPath,

  ParseError,
  protoFromTuple,

  sizeForAddr
}

// string -> [[str name, str addr]... ]
/**
 * @param {string} str
 */
function stringToStringTuples (str) {
  const tuples = []
  const parts = str.split('/').slice(1) // skip first empty elem
  if (parts.length === 1 && parts[0] === '') {
    return []
  }

  for (let p = 0; p < parts.length; p++) {
    const part = parts[p]
    const proto = protocols(part)

    if (proto.size === 0) {
      tuples.push([part])
      continue
    }

    p++ // advance addr part
    if (p >= parts.length) {
      throw ParseError('invalid address: ' + str)
    }

    // if it's a path proto, take the rest
    if (proto.path) {
      tuples.push([
        part,
        // TODO: should we need to check each path part to see if it's a proto?
        // This would allow for other protocols to be added after a unix path,
        // however it would have issues if the path had a protocol name in the path
        cleanPath(parts.slice(p).join('/'))
      ])
      break
    }

    tuples.push([part, parts[p]])
  }

  return tuples
}

// [[str name, str addr]... ] -> string
/**
 * @param {[number, string?][]} tuples
 */
function stringTuplesToString (tuples) {
  /** @type {Array<string | undefined>} */
  const parts = []
  tuples.map((tup) => {
    const proto = protoFromTuple(tup)
    parts.push(proto.name)
    if (tup.length > 1) {
      parts.push(tup[1])
    }
    return null
  })

  return cleanPath(parts.join('/'))
}

// [[str name, str addr]... ] -> [[int code, Uint8Array]... ]
/**
 * @param {Array<string[] | string >} tuples
 * @returns {[number , Uint8Array?][]}
 */
function stringTuplesToTuples (tuples) {
  return tuples.map((tup) => {
    if (!Array.isArray(tup)) {
      tup = [tup]
    }
    const proto = protoFromTuple(tup)
    if (tup.length > 1) {
      return [proto.code, convert.toBytes(proto.code, tup[1])]
    }
    return [proto.code]
  })
}

/**
 * Convert tuples to string tuples
 *
 * [[int code, Uint8Array]... ] -> [[int code, str addr]... ]
 *
 * @param {Array<[number, Uint8Array?]>} tuples
 * @returns {Array<[number, string?]>}
 */

function tuplesToStringTuples (tuples) {
  return tuples.map(tup => {
    const proto = protoFromTuple(tup)
    if (tup[1]) {
      return [proto.code, convert.toString(proto.code, tup[1])]
    }
    return [proto.code]
  })
}

// [[int code, Uint8Array ]... ] -> Uint8Array
/**
 * @param {[number, Uint8Array?][]} tuples
 */
function tuplesToBytes (tuples) {
  return fromBytes(uint8ArrayConcat(tuples.map((/** @type {any[]} */ tup) => {
    const proto = protoFromTuple(tup)
    let buf = Uint8Array.from(varint.encode(proto.code))

    if (tup.length > 1) {
      buf = uint8ArrayConcat([buf, tup[1]]) // add address buffer
    }

    return buf
  })))
}

/**
 * @param {import("./types").Protocol} p
 * @param {Uint8Array | number[]} addr
 */
function sizeForAddr (p, addr) {
  if (p.size > 0) {
    return p.size / 8
  } else if (p.size === 0) {
    return 0
  } else {
    const size = varint.decode(addr)
    return size + varint.decode.bytes
  }
}

/**
 *
 * @param {Uint8Array} buf
 * @returns {Array<[number, Uint8Array?]>}
 */
function bytesToTuples (buf) {
  /** @type {Array<[number, Uint8Array?]>} */
  const tuples = []
  let i = 0
  while (i < buf.length) {
    const code = varint.decode(buf, i)
    const n = varint.decode.bytes

    const p = protocols(code)

    const size = sizeForAddr(p, buf.slice(i + n))

    if (size === 0) {
      tuples.push([code])
      i += n
      continue
    }

    const addr = buf.slice(i + n, i + n + size)

    i += (size + n)

    if (i > buf.length) { // did not end _exactly_ at buffer.length
      throw ParseError('Invalid address Uint8Array: ' + uint8ArrayToString(buf, 'base16'))
    }

    // ok, tuple seems good.
    tuples.push([code, addr])
  }

  return tuples
}

// Uint8Array -> String
/**
 * @param {Uint8Array} buf
 */
function bytesToString (buf) {
  const a = bytesToTuples(buf)
  const b = tuplesToStringTuples(a)
  return stringTuplesToString(b)
}

// String -> Uint8Array
/**
 * @param {string} str
 */
function stringToBytes (str) {
  str = cleanPath(str)
  const a = stringToStringTuples(str)
  const b = stringTuplesToTuples(a)

  return tuplesToBytes(b)
}

// String -> Uint8Array
/**
 * @param {string} str
 */
function fromString (str) {
  return stringToBytes(str)
}

// Uint8Array -> Uint8Array
/**
 * @param {Uint8Array} buf
 */
function fromBytes (buf) {
  const err = validateBytes(buf)
  if (err) throw err
  return Uint8Array.from(buf) // copy
}

/**
 * @param {Uint8Array} buf
 */
function validateBytes (buf) {
  try {
    bytesToTuples(buf) // try to parse. will throw if breaks
  } catch (err) {
    return err
  }
}

/**
 * @param {Uint8Array} buf
 */
function isValidBytes (buf) {
  return validateBytes(buf) === undefined
}

/**
 * @param {string} str
 */
function cleanPath (str) {
  return '/' + str.trim().split('/').filter((/** @type {any} */ a) => a).join('/')
}

/**
 * @param {string} str
 */
function ParseError (str) {
  return new Error('Error parsing address: ' + str)
}

/**
 * @param {any[]} tup
 */
function protoFromTuple (tup) {
  const proto = protocols(tup[0])
  return proto
}


/***/ }),

/***/ "./node_modules/multiaddr/src/convert.js":
/*!***********************************************!*\
  !*** ./node_modules/multiaddr/src/convert.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const ip = __webpack_require__(/*! ./ip */ "./node_modules/multiaddr/src/ip.js")
const protocols = __webpack_require__(/*! ./protocols-table */ "./node_modules/multiaddr/src/protocols-table.js")
const { CID } = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js")
const { base32 } = __webpack_require__(/*! multiformats/bases/base32 */ "./node_modules/multiformats/esm/src/bases/base32.js")
const { base58btc } = __webpack_require__(/*! multiformats/bases/base58 */ "./node_modules/multiformats/esm/src/bases/base58.js")
const Digest = __webpack_require__(/*! multiformats/hashes/digest */ "./node_modules/multiformats/esm/src/hashes/digest.js")
const varint = __webpack_require__(/*! varint */ "./node_modules/varint/index.js")
const { toString: uint8ArrayToString } = __webpack_require__(/*! uint8arrays/to-string */ "./node_modules/uint8arrays/esm/src/to-string.js")
const { fromString: uint8ArrayFromString } = __webpack_require__(/*! uint8arrays/from-string */ "./node_modules/uint8arrays/esm/src/from-string.js")
const { concat: uint8ArrayConcat } = __webpack_require__(/*! uint8arrays/concat */ "./node_modules/uint8arrays/esm/src/concat.js")

module.exports = Convert

// converts (serializes) addresses
/**
 * @param {string} proto
 * @param {string | Uint8Array} a
 */
function Convert (proto, a) {
  if (a instanceof Uint8Array) {
    return Convert.toString(proto, a)
  } else {
    return Convert.toBytes(proto, a)
  }
}

/**
 * Convert [code,Uint8Array] to string
 *
 * @param {number|string} proto
 * @param {Uint8Array} buf
 * @returns {string}
 */
Convert.toString = function convertToString (proto, buf) {
  const protocol = protocols(proto)
  switch (protocol.code) {
    case 4: // ipv4
    case 41: // ipv6
      return bytes2ip(buf)

    case 6: // tcp
    case 273: // udp
    case 33: // dccp
    case 132: // sctp
      return bytes2port(buf).toString()

    case 53: // dns
    case 54: // dns4
    case 55: // dns6
    case 56: // dnsaddr
    case 400: // unix
    case 777: // memory
      return bytes2str(buf)

    case 421: // ipfs
      return bytes2mh(buf)
    case 444: // onion
      return bytes2onion(buf)
    case 445: // onion3
      return bytes2onion(buf)
    default:
      return uint8ArrayToString(buf, 'base16') // no clue. convert to hex
  }
}

Convert.toBytes = function convertToBytes (/** @type {string | number } */ proto, /** @type {string} */ str) {
  const protocol = protocols(proto)
  switch (protocol.code) {
    case 4: // ipv4
      return ip2bytes(str)
    case 41: // ipv6
      return ip2bytes(str)

    case 6: // tcp
    case 273: // udp
    case 33: // dccp
    case 132: // sctp
      return port2bytes(parseInt(str, 10))

    case 53: // dns
    case 54: // dns4
    case 55: // dns6
    case 56: // dnsaddr
    case 400: // unix
    case 777: // memory
      return str2bytes(str)

    case 421: // ipfs
      return mh2bytes(str)
    case 444: // onion
      return onion2bytes(str)
    case 445: // onion3
      return onion32bytes(str)
    default:
      return uint8ArrayFromString(str, 'base16') // no clue. convert from hex
  }
}

/**
 * @param {string} ipString
 */
function ip2bytes (ipString) {
  if (!ip.isIP(ipString)) {
    throw new Error('invalid ip address')
  }
  return ip.toBytes(ipString)
}

/**
 * @param {Uint8Array} ipBuff
 */
function bytes2ip (ipBuff) {
  const ipString = ip.toString(ipBuff)
  if (!ipString || !ip.isIP(ipString)) {
    throw new Error('invalid ip address')
  }
  return ipString
}

/**
 * @param {number} port
 */
function port2bytes (port) {
  const buf = new ArrayBuffer(2)
  const view = new DataView(buf)
  view.setUint16(0, port)

  return new Uint8Array(buf)
}

/**
 * @param {Uint8Array} buf
 */
function bytes2port (buf) {
  const view = new DataView(buf.buffer)
  return view.getUint16(buf.byteOffset)
}

/**
 * @param {string} str
 */
function str2bytes (str) {
  const buf = uint8ArrayFromString(str)
  const size = Uint8Array.from(varint.encode(buf.length))
  return uint8ArrayConcat([size, buf], size.length + buf.length)
}

/**
 * @param {Uint8Array} buf
 */
function bytes2str (buf) {
  const size = varint.decode(buf)
  buf = buf.slice(varint.decode.bytes)

  if (buf.length !== size) {
    throw new Error('inconsistent lengths')
  }

  return uint8ArrayToString(buf)
}

/**
 * @param {string} hash - base58btc string
 */
function mh2bytes (hash) {
  let mh

  if (hash[0] === 'Q' || hash[0] === '1') {
    mh = Digest.decode(base58btc.decode(`z${hash}`)).bytes
  } else {
    mh = CID.parse(hash).multihash.bytes
  }

  // the address is a varint prefixed multihash string representation
  const size = Uint8Array.from(varint.encode(mh.length))
  return uint8ArrayConcat([size, mh], size.length + mh.length)
}

/**
 * Converts bytes to bas58btc string
 *
 * @param {Uint8Array} buf
 * @returns {string} base58btc string
 */
function bytes2mh (buf) {
  const size = varint.decode(buf)
  const address = buf.slice(varint.decode.bytes)

  if (address.length !== size) {
    throw new Error('inconsistent lengths')
  }

  return uint8ArrayToString(address, 'base58btc')
}

/**
 * @param {string} str
 */
function onion2bytes (str) {
  const addr = str.split(':')
  if (addr.length !== 2) {
    throw new Error('failed to parse onion addr: ' + addr + ' does not contain a port number')
  }
  if (addr[0].length !== 16) {
    throw new Error('failed to parse onion addr: ' + addr[0] + ' not a Tor onion address.')
  }

  // onion addresses do not include the multibase prefix, add it before decoding
  const buf = base32.decode('b' + addr[0])

  // onion port number
  const port = parseInt(addr[1], 10)
  if (port < 1 || port > 65536) {
    throw new Error('Port number is not in range(1, 65536)')
  }
  const portBuf = port2bytes(port)
  return uint8ArrayConcat([buf, portBuf], buf.length + portBuf.length)
}

/**
 * @param {string} str
 */
function onion32bytes (str) {
  const addr = str.split(':')
  if (addr.length !== 2) {
    throw new Error('failed to parse onion addr: ' + addr + ' does not contain a port number')
  }
  if (addr[0].length !== 56) {
    throw new Error('failed to parse onion addr: ' + addr[0] + ' not a Tor onion3 address.')
  }
  // onion addresses do not include the multibase prefix, add it before decoding
  const buf = base32.decode('b' + addr[0])

  // onion port number
  const port = parseInt(addr[1], 10)
  if (port < 1 || port > 65536) {
    throw new Error('Port number is not in range(1, 65536)')
  }
  const portBuf = port2bytes(port)
  return uint8ArrayConcat([buf, portBuf], buf.length + portBuf.length)
}

/**
 * @param {Uint8Array} buf
 */
function bytes2onion (buf) {
  const addrBytes = buf.slice(0, buf.length - 2)
  const portBytes = buf.slice(buf.length - 2)
  const addr = uint8ArrayToString(addrBytes, 'base32')
  const port = bytes2port(portBytes)
  return addr + ':' + port
}


/***/ }),

/***/ "./node_modules/multiaddr/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/multiaddr/src/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const codec = __webpack_require__(/*! ./codec */ "./node_modules/multiaddr/src/codec.js")
const protocols = __webpack_require__(/*! ./protocols-table */ "./node_modules/multiaddr/src/protocols-table.js")
const varint = __webpack_require__(/*! varint */ "./node_modules/varint/index.js")
const { CID } = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js")
const { base58btc } = __webpack_require__(/*! multiformats/bases/base58 */ "./node_modules/multiformats/esm/src/bases/base58.js")
const errCode = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js")
const inspect = Symbol.for('nodejs.util.inspect.custom')
const { toString: uint8ArrayToString } = __webpack_require__(/*! uint8arrays/to-string */ "./node_modules/uint8arrays/esm/src/to-string.js")
const { equals: uint8ArrayEquals } = __webpack_require__(/*! uint8arrays/equals */ "./node_modules/uint8arrays/esm/src/equals.js")

/**
 * @typedef {(addr: Multiaddr) => Promise<string[]>} Resolver
 * @typedef {string | Multiaddr | Uint8Array | null} MultiaddrInput
 * @typedef {import('./types').MultiaddrObject} MultiaddrObject
 * @typedef {import('./types').Protocol} Protocol
 */

/** @type {Map<string, Resolver>} */
const resolvers = new Map()
const symbol = Symbol.for('@multiformats/js-multiaddr/multiaddr')

/**
 * Creates a [multiaddr](https://github.com/multiformats/multiaddr) from
 * a Uint8Array, String or another Multiaddr instance
 * public key.
 *
 */
class Multiaddr {
  /**
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   * ```
   *
   * @param {MultiaddrInput} [addr] - If String or Uint8Array, needs to adhere to the address format of a [multiaddr](https://github.com/multiformats/multiaddr#string-format)
   */
  constructor (addr) {
    // default
    if (addr == null) {
      addr = ''
    }

    // Define symbol
    Object.defineProperty(this, symbol, { value: true })

    if (addr instanceof Uint8Array) {
      /** @type {Uint8Array} - The raw bytes representing this multiaddress */
      this.bytes = codec.fromBytes(addr)
    } else if (typeof addr === 'string') {
      if (addr.length > 0 && addr.charAt(0) !== '/') {
        throw new Error(`multiaddr "${addr}" must start with a "/"`)
      }
      this.bytes = codec.fromString(addr)
    } else if (Multiaddr.isMultiaddr(addr)) { // Multiaddr
      this.bytes = codec.fromBytes(addr.bytes) // validate + copy buffer
    } else {
      throw new Error('addr must be a string, Buffer, or another Multiaddr')
    }
  }

  /**
   * Returns Multiaddr as a String
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').toString()
   * // '/ip4/127.0.0.1/tcp/4001'
   * ```
   */
  toString () {
    return codec.bytesToString(this.bytes)
  }

  /**
   * Returns Multiaddr as a JSON encoded object
   *
   * @example
   * ```js
   * JSON.stringify(new Multiaddr('/ip4/127.0.0.1/tcp/4001'))
   * // '/ip4/127.0.0.1/tcp/4001'
   * ```
   */
  toJSON () {
    return this.toString()
  }

  /**
   * Returns Multiaddr as a convinient options object to be used with net.createConnection
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').toOptions()
   * // { family: 4, host: '127.0.0.1', transport: 'tcp', port: 4001 }
   * ```
   */
  toOptions () {
    /** @type {MultiaddrObject} */
    const opts = {}
    const parsed = this.toString().split('/')
    opts.family = parsed[1] === 'ip4' ? 4 : 6
    opts.host = parsed[2]
    opts.transport = parsed[3]
    opts.port = parseInt(parsed[4])
    return opts
  }

  /**
   * Returns the protocols the Multiaddr is defined with, as an array of objects, in
   * left-to-right order. Each object contains the protocol code, protocol name,
   * and the size of its address space in bits.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').protos()
   * // [ { code: 4, size: 32, name: 'ip4' },
   * //   { code: 6, size: 16, name: 'tcp' } ]
   * ```
   *
   * @returns {Protocol[]} protocols - All the protocols the address is composed of
   */
  protos () {
    return this.protoCodes().map(code => Object.assign({}, protocols(code)))
  }

  /**
   * Returns the codes of the protocols in left-to-right order.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * ```js
   * Multiaddr('/ip4/127.0.0.1/tcp/4001').protoCodes()
   * // [ 4, 6 ]
   * ```
   *
   * @returns {number[]} protocol codes
   */
  protoCodes () {
    const codes = []
    const buf = this.bytes
    let i = 0
    while (i < buf.length) {
      const code = varint.decode(buf, i)
      const n = varint.decode.bytes

      const p = protocols(code)
      const size = codec.sizeForAddr(p, buf.slice(i + n))

      i += (size + n)
      codes.push(code)
    }

    return codes
  }

  /**
   * Returns the names of the protocols in left-to-right order.
   * [See list of protocols](https://github.com/multiformats/multiaddr/blob/master/protocols.csv)
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').protoNames()
   * // [ 'ip4', 'tcp' ]
   * ```
   *
   * @returns {string[]} protocol names
   */
  protoNames () {
    return this.protos().map(proto => proto.name)
  }

  /**
   * Returns a tuple of parts
   *
   * @example
   * ```js
   * new Multiaddr("/ip4/127.0.0.1/tcp/4001").tuples()
   * // [ [ 4, <Buffer 7f 00 00 01> ], [ 6, <Buffer 0f a1> ] ]
   * ```
   */
  tuples () {
    return codec.bytesToTuples(this.bytes)
  }

  /**
   * Returns a tuple of string/number parts
   * - tuples[][0] = code of protocol
   * - tuples[][1] = contents of address
   *
   * @example
   * ```js
   * new Multiaddr("/ip4/127.0.0.1/tcp/4001").stringTuples()
   * // [ [ 4, '127.0.0.1' ], [ 6, '4001' ] ]
   * ```
   */
  stringTuples () {
    const t = codec.bytesToTuples(this.bytes)
    return codec.tuplesToStringTuples(t)
  }

  /**
   * Encapsulates a Multiaddr in another Multiaddr
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
   *
   * mh3.toString()
   * // '/ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001'
   * ```
   *
   * @param {MultiaddrInput} addr - Multiaddr to add into this Multiaddr
   */
  encapsulate (addr) {
    addr = new Multiaddr(addr)
    return new Multiaddr(this.toString() + addr.toString())
  }

  /**
   * Decapsulates a Multiaddr from another Multiaddr
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 0408080808060438047f000001060fa1 - /ip4/8.8.8.8/tcp/1080/ip4/127.0.0.1/tcp/4001>
   *
   * mh3.decapsulate(mh2).toString()
   * // '/ip4/8.8.8.8/tcp/1080'
   * ```
   *
   * @param {Multiaddr | string} addr - Multiaddr to remove from this Multiaddr
   * @returns {Multiaddr}
   */
  decapsulate (addr) {
    const addrString = addr.toString()
    const s = this.toString()
    const i = s.lastIndexOf(addrString)
    if (i < 0) {
      throw new Error('Address ' + this + ' does not contain subaddress: ' + addr)
    }
    return new Multiaddr(s.slice(0, i))
  }

  /**
   * A more reliable version of `decapsulate` if you are targeting a
   * specific code, such as 421 (the `p2p` protocol code). The last index of the code
   * will be removed from the `Multiaddr`, and a new instance will be returned.
   * If the code is not present, the original `Multiaddr` is returned.
   *
   * @example
   * ```js
   * const addr = new Multiaddr('/ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC')
   * // <Multiaddr 0400... - /ip4/0.0.0.0/tcp/8080/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSupNKC>
   *
   * addr.decapsulateCode(421).toString()
   * // '/ip4/0.0.0.0/tcp/8080'
   *
   * new Multiaddr('/ip4/127.0.0.1/tcp/8080').decapsulateCode(421).toString()
   * // '/ip4/127.0.0.1/tcp/8080'
   * ```
   *
   * @param {number} code - The code of the protocol to decapsulate from this Multiaddr
   * @returns {Multiaddr}
   */
  decapsulateCode (code) {
    const tuples = this.tuples()
    for (let i = tuples.length - 1; i >= 0; i--) {
      if (tuples[i][0] === code) {
        return new Multiaddr(codec.tuplesToBytes(tuples.slice(0, i)))
      }
    }
    return this
  }

  /**
   * Extract the peerId if the multiaddr contains one
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/ipfs/QmValidBase58string>
   *
   * // should return QmValidBase58string or null if the id is missing or invalid
   * const peerId = mh1.getPeerId()
   * ```
   *
   * @returns {string | null} peerId - The id of the peer or null if invalid or missing from the ma
   */
  getPeerId () {
    try {
      const tuples = this.stringTuples().filter((tuple) => {
        if (tuple[0] === protocols.names.ipfs.code) {
          return true
        }
        return false
      })

      // Get the last ipfs tuple ['ipfs', 'peerid string']
      const tuple = tuples.pop()
      if (tuple && tuple[1]) {
        const peerIdStr = tuple[1]

        // peer id is base58btc encoded string but not multibase encoded so add the `z`
        // prefix so we can validate that it is correctly encoded
        if (peerIdStr[0] === 'Q' || peerIdStr[0] === '1') {
          return uint8ArrayToString(base58btc.decode(`z${peerIdStr}`), 'base58btc')
        }

        // try to parse peer id as CID
        return uint8ArrayToString(CID.parse(peerIdStr).multihash.bytes, 'base58btc')
      }

      return null
    } catch (e) {
      return null
    }
  }

  /**
   * Extract the path if the multiaddr contains one
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080/unix/tmp/p2p.sock>
   *
   * // should return utf8 string or null if the id is missing or invalid
   * const path = mh1.getPath()
   * ```js
   *
   * @returns {string | null} path - The path of the multiaddr, or null if no path protocol is present
   */
  getPath () {
    let path = null
    try {
      path = this.stringTuples().filter((tuple) => {
        const proto = protocols(tuple[0])
        if (proto.path) {
          return true
        }
        return false
      })[0][1]

      if (!path) {
        path = null
      }
    } catch (e) {
      path = null
    }
    return path
  }

  /**
   * Checks if two Multiaddrs are the same
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/8.8.8.8/tcp/1080')
   * // <Multiaddr 0408080808060438 - /ip4/8.8.8.8/tcp/1080>
   *
   * const mh2 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   *
   * mh1.equals(mh1)
   * // true
   *
   * mh1.equals(mh2)
   * // false
   * ```
   *
   * @param {Multiaddr} addr
   * @returns {boolean}
   */
  equals (addr) {
    return uint8ArrayEquals(this.bytes, addr.bytes)
  }

  /**
   * Resolve multiaddr if containing resolvable hostname.
   *
   * @example
   * ```js
   * Multiaddr.resolvers.set('dnsaddr', resolverFunction)
   * const mh1 = new Multiaddr('/dnsaddr/bootstrap.libp2p.io/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb')
   * const resolvedMultiaddrs = await mh1.resolve()
   * // [
   * //   <Multiaddr 04934b5353060fa1a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/tcp/4001/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>,
   * //   <Multiaddr 04934b53530601bbde03a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/tcp/443/wss/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>,
   * //   <Multiaddr 04934b535391020fa1cc03a503221220c10f9319dac35c270a6b74cd644cb3acfc1f6efc8c821f8eb282599fd1814f64 - /ip4/147.75.83.83/udp/4001/quic/p2p/QmbLHAnMoJPWSCR5Zhtx6BHJX9KiKNN6tpvbUcqanj75Nb>
   * // ]
   * ```
   *
   * @returns {Promise<Array<Multiaddr>>}
   */
  async resolve () {
    const resolvableProto = this.protos().find((p) => p.resolvable)

    // Multiaddr is not resolvable?
    if (!resolvableProto) {
      return [this]
    }

    const resolver = resolvers.get(resolvableProto.name)
    if (!resolver) {
      throw errCode(new Error(`no available resolver for ${resolvableProto.name}`), 'ERR_NO_AVAILABLE_RESOLVER')
    }

    const addresses = await resolver(this)
    return addresses.map((a) => new Multiaddr(a))
  }

  /**
   * Gets a Multiaddrs node-friendly address object. Note that protocol information
   * is left out: in Node (and most network systems) the protocol is unknowable
   * given only the address.
   *
   * Has to be a ThinWaist Address, otherwise throws error
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').nodeAddress()
   * // {family: 4, address: '127.0.0.1', port: 4001}
   * ```
   *
   * @returns {{family: 4 | 6, address: string, port: number}}
   * @throws {Error} Throws error if Multiaddr is not a Thin Waist address
   */
  nodeAddress () {
    const codes = this.protoCodes()
    const names = this.protoNames()
    const parts = this.toString().split('/').slice(1)

    if (parts.length < 4) {
      throw new Error('multiaddr must have a valid format: "/{ip4, ip6, dns4, dns6}/{address}/{tcp, udp}/{port}".')
    } else if (codes[0] !== 4 && codes[0] !== 41 && codes[0] !== 54 && codes[0] !== 55) {
      throw new Error(`no protocol with name: "'${names[0]}'". Must have a valid family name: "{ip4, ip6, dns4, dns6}".`)
    } else if (parts[2] !== 'tcp' && parts[2] !== 'udp') {
      throw new Error(`no protocol with name: "'${names[1]}'". Must have a valid transport protocol: "{tcp, udp}".`)
    }

    return {
      family: (codes[0] === 41 || codes[0] === 55) ? 6 : 4,
      address: parts[1],
      port: parseInt(parts[3]) // tcp or udp port
    }
  }

  /**
   * Returns if a Multiaddr is a Thin Waist address or not.
   *
   * Thin Waist is if a Multiaddr adheres to the standard combination of:
   *
   * `{IPv4, IPv6}/{TCP, UDP}`
   *
   * @example
   * ```js
   * const mh1 = new Multiaddr('/ip4/127.0.0.1/tcp/4001')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   * const mh2 = new Multiaddr('/ip4/192.168.2.1/tcp/5001')
   * // <Multiaddr 04c0a80201061389 - /ip4/192.168.2.1/tcp/5001>
   * const mh3 = mh1.encapsulate(mh2)
   * // <Multiaddr 047f000001060fa104c0a80201061389 - /ip4/127.0.0.1/tcp/4001/ip4/192.168.2.1/tcp/5001>
   * const mh4 = new Multiaddr('/ip4/127.0.0.1/tcp/2000/wss/p2p-webrtc-star/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSooo2a')
   * // <Multiaddr 047f0000010607d0de039302a503221220d52ebb89d85b02a284948203a62ff28389c57c9f42beec4ec20db76a64835843 - /ip4/127.0.0.1/tcp/2000/wss/p2p-webrtc-star/p2p/QmcgpsyWgH8Y8ajJz1Cu72KnS5uo2Aa2LpzU7kinSooo2a>
   * mh1.isThinWaistAddress()
   * // true
   * mh2.isThinWaistAddress()
   * // true
   * mh3.isThinWaistAddress()
   * // false
   * mh4.isThinWaistAddress()
   * // false
   * ```
   *
   * @param {Multiaddr} [addr] - Defaults to using `this` instance
   */
  isThinWaistAddress (addr) {
    const protos = (addr || this).protos()

    if (protos.length !== 2) {
      return false
    }

    if (protos[0].code !== 4 && protos[0].code !== 41) {
      return false
    }
    if (protos[1].code !== 6 && protos[1].code !== 273) {
      return false
    }
    return true
  }

  /**
   * Creates a Multiaddr from a node-friendly address object
   *
   * @example
   * ```js
   * Multiaddr.fromNodeAddress({address: '127.0.0.1', port: '4001'}, 'tcp')
   * // <Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>
   * ```
   *
   * @param {{family: 4 | 6, address: string, port: number}} addr
   * @param {string} transport
   */
  static fromNodeAddress (addr, transport) {
    if (!addr) { throw new Error('requires node address object') }
    if (!transport) { throw new Error('requires transport protocol') }
    let ip
    switch (addr.family) {
      case 4:
        ip = 'ip4'
        break
      case 6:
        ip = 'ip6'
        break
      default:
        throw Error(`Invalid addr family. Got '${addr.family}' instead of 4 or 6`)
    }
    return new Multiaddr('/' + [ip, addr.address, transport, addr.port].join('/'))
  }

  /**
   * Returns if something is a Multiaddr that is a name
   *
   * @param {Multiaddr} addr
   * @returns {boolean} isName
   */
  static isName (addr) {
    if (!Multiaddr.isMultiaddr(addr)) {
      return false
    }

    // if a part of the multiaddr is resolvable, then return true
    return addr.protos().some((proto) => proto.resolvable)
  }

  /**
   * Check if object is a CID instance
   *
   * @param {any} value
   * @returns {value is Multiaddr}
   */
  static isMultiaddr (value) {
    return value instanceof Multiaddr || Boolean(value && value[symbol])
  }

  /**
   * Returns Multiaddr as a human-readable string.
   * For post Node.js v10.0.0.
   * https://nodejs.org/api/deprecations.html#deprecations_dep0079_custom_inspection_function_on_objects_via_inspect
   *
   * @example
   * ```js
   * console.log(new Multiaddr('/ip4/127.0.0.1/tcp/4001'))
   * // '<Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>'
   * ```
   *
   * @returns {string}
   */
  [inspect] () {
    return '<Multiaddr ' +
    uint8ArrayToString(this.bytes, 'base16') + ' - ' +
    codec.bytesToString(this.bytes) + '>'
  }

  /**
   * Returns Multiaddr as a human-readable string.
   * Fallback for pre Node.js v10.0.0.
   * https://nodejs.org/api/deprecations.html#deprecations_dep0079_custom_inspection_function_on_objects_via_inspect
   *
   * @example
   * ```js
   * new Multiaddr('/ip4/127.0.0.1/tcp/4001').inspect()
   * // '<Multiaddr 047f000001060fa1 - /ip4/127.0.0.1/tcp/4001>'
   * ```
   *
   * @returns {string}
   */
  inspect () {
    return '<Multiaddr ' +
      uint8ArrayToString(this.bytes, 'base16') + ' - ' +
      codec.bytesToString(this.bytes) + '>'
  }
}

/**
 * Object containing table, names and codes of all supported protocols.
 * To get the protocol values from a Multiaddr, you can use
 * [`.protos()`](#multiaddrprotos),
 * [`.protoCodes()`](#multiaddrprotocodes) or
 * [`.protoNames()`](#multiaddrprotonames)
 *
 * @returns {{table: Array, names: Object, codes: Object}}
 */
Multiaddr.protocols = protocols

Multiaddr.resolvers = resolvers

/**
 * Static factory
 *
 * @param {MultiaddrInput} addr
 */
function multiaddr (addr) {
  return new Multiaddr(addr)
}

module.exports = { Multiaddr, multiaddr, protocols, resolvers }


/***/ }),

/***/ "./node_modules/multiaddr/src/ip.js":
/*!******************************************!*\
  !*** ./node_modules/multiaddr/src/ip.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const isIp = __webpack_require__(/*! is-ip */ "./node_modules/is-ip/index.js")
const { toString: uint8ArrayToString } = __webpack_require__(/*! uint8arrays/to-string */ "./node_modules/uint8arrays/esm/src/to-string.js")

const isIP = isIp
const isV4 = isIp.v4
const isV6 = isIp.v6

// Copied from https://github.com/indutny/node-ip/blob/master/lib/ip.js#L7
// @ts-ignore - this is copied from the link above better to keep it the same
const toBytes = function (ip, buff, offset) {
  offset = ~~offset

  let result

  if (isV4(ip)) {
    result = buff || new Uint8Array(offset + 4)
    // @ts-ignore
    // eslint-disable-next-line array-callback-return
    ip.split(/\./g).map(function (byte) {
      result[offset++] = parseInt(byte, 10) & 0xff
    })
  } else if (isV6(ip)) {
    const sections = ip.split(':', 8)

    let i
    for (i = 0; i < sections.length; i++) {
      const isv4 = isV4(sections[i])
      let v4Buffer

      if (isv4) {
        v4Buffer = toBytes(sections[i])
        sections[i] = uint8ArrayToString(v4Buffer.slice(0, 2), 'base16')
      }

      if (v4Buffer && ++i < 8) {
        sections.splice(i, 0, uint8ArrayToString(v4Buffer.slice(2, 4), 'base16'))
      }
    }

    if (sections[0] === '') {
      while (sections.length < 8) sections.unshift('0')
    } else if (sections[sections.length - 1] === '') {
      while (sections.length < 8) sections.push('0')
    } else if (sections.length < 8) {
      for (i = 0; i < sections.length && sections[i] !== ''; i++);
      const argv = [i, '1']
      for (i = 9 - sections.length; i > 0; i--) {
        argv.push('0')
      }
      sections.splice.apply(sections, argv)
    }

    result = buff || new Uint8Array(offset + 16)
    for (i = 0; i < sections.length; i++) {
      const word = parseInt(sections[i], 16)
      result[offset++] = (word >> 8) & 0xff
      result[offset++] = word & 0xff
    }
  }

  if (!result) {
    throw Error('Invalid ip address: ' + ip)
  }

  return result
}

// Copied from https://github.com/indutny/node-ip/blob/master/lib/ip.js#L63
// @ts-ignore - this is copied from the link above better to keep it the same
const toString = function (buff, offset, length) {
  offset = ~~offset
  length = length || (buff.length - offset)

  const result = []
  let string
  const view = new DataView(buff.buffer)
  if (length === 4) {
    // IPv4
    for (let i = 0; i < length; i++) {
      result.push(buff[offset + i])
    }
    string = result.join('.')
  } else if (length === 16) {
    // IPv6
    for (let i = 0; i < length; i += 2) {
      result.push(view.getUint16(offset + i).toString(16))
    }
    string = result.join(':')
    string = string.replace(/(^|:)0(:0)*:0(:|$)/, '$1::$3')
    string = string.replace(/:{3,4}/, '::')
  }

  return string
}

module.exports = {
  isIP,
  isV4,
  isV6,
  toBytes,
  toString
}


/***/ }),

/***/ "./node_modules/multiaddr/src/protocols-table.js":
/*!*******************************************************!*\
  !*** ./node_modules/multiaddr/src/protocols-table.js ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";

/** @typedef {import("./types").Protocol} Protocol */

/**
 * Protocols
 *
 * @param {number | string} proto
 * @returns {Protocol}
 */
function Protocols (proto) {
  if (typeof (proto) === 'number') {
    if (Protocols.codes[proto]) {
      return Protocols.codes[proto]
    }

    throw new Error('no protocol with code: ' + proto)
  } else if (typeof (proto) === 'string') {
    if (Protocols.names[proto]) {
      return Protocols.names[proto]
    }

    throw new Error('no protocol with name: ' + proto)
  }

  throw new Error('invalid protocol id type: ' + proto)
}

const V = -1
Protocols.lengthPrefixedVarSize = V
Protocols.V = V

/** @type {Array<[number, number, string, (string|boolean)?, string?]>} */
Protocols.table = [
  [4, 32, 'ip4'],
  [6, 16, 'tcp'],
  [33, 16, 'dccp'],
  [41, 128, 'ip6'],
  [42, V, 'ip6zone'],
  [53, V, 'dns', 'resolvable'],
  [54, V, 'dns4', 'resolvable'],
  [55, V, 'dns6', 'resolvable'],
  [56, V, 'dnsaddr', 'resolvable'],
  [132, 16, 'sctp'],
  [273, 16, 'udp'],
  [275, 0, 'p2p-webrtc-star'],
  [276, 0, 'p2p-webrtc-direct'],
  [277, 0, 'p2p-stardust'],
  [290, 0, 'p2p-circuit'],
  [301, 0, 'udt'],
  [302, 0, 'utp'],
  [400, V, 'unix', false, 'path'],
  // `ipfs` is added before `p2p` for legacy support.
  // All text representations will default to `p2p`, but `ipfs` will
  // still be supported
  [421, V, 'ipfs'],
  // `p2p` is the preferred name for 421, and is now the default
  [421, V, 'p2p'],
  [443, 0, 'https'],
  [444, 96, 'onion'],
  [445, 296, 'onion3'],
  [446, V, 'garlic64'],
  [460, 0, 'quic'],
  [477, 0, 'ws'],
  [478, 0, 'wss'],
  [479, 0, 'p2p-websocket-star'],
  [480, 0, 'http'],
  [777, V, 'memory']
]
/** @type {Record<string,Protocol>} */
Protocols.names = {}
/** @type {Record<number,Protocol>} */
Protocols.codes = {}

// populate tables
Protocols.table.map(row => {
  const proto = p.apply(null, row)
  Protocols.codes[proto.code] = proto
  Protocols.names[proto.name] = proto
  return null
})

Protocols.object = p

/**
 *
 * Create a protocol
 *
 * @param {number} code
 * @param {number} size
 * @param {string} name
 * @param {any} [resolvable]
 * @param {any} [path]
 * @returns {Protocol}
 */
function p (code, size, name, resolvable, path) {
  return {
    code,
    size,
    name,
    resolvable: Boolean(resolvable),
    path: Boolean(path)
  }
}

module.exports = Protocols


/***/ }),

/***/ "./node_modules/native-abort-controller/src/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/native-abort-controller/src/index.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


let impl

if (globalThis.AbortController && globalThis.AbortSignal) {
  impl = globalThis
} else {
  impl = __webpack_require__(/*! abort-controller */ "./node_modules/abort-controller/browser.js")
}

module.exports.AbortSignal = impl.AbortSignal
module.exports.AbortController = impl.AbortController


/***/ }),

/***/ "./node_modules/native-fetch/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/native-fetch/src/index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (globalThis.fetch && globalThis.Headers && globalThis.Request && globalThis.Response) {
  module.exports = {
    default: globalThis.fetch,
    Headers: globalThis.Headers,
    Request: globalThis.Request,
    Response: globalThis.Response
  }
} else {
  module.exports = {
    default: (__webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js")["default"]),
    Headers: (__webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js").Headers),
    Request: (__webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js").Request),
    Response: (__webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js").Response)
  }
}


/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports["default"] = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/protobufjs/minimal.js":
/*!********************************************!*\
  !*** ./node_modules/protobufjs/minimal.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// minimal library entry point.


module.exports = __webpack_require__(/*! ./src/index-minimal */ "./node_modules/protobufjs/src/index-minimal.js");


/***/ }),

/***/ "./node_modules/protobufjs/src/index-minimal.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/index-minimal.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var protobuf = exports;

/**
 * Build type, one of `"full"`, `"light"` or `"minimal"`.
 * @name build
 * @type {string}
 * @const
 */
protobuf.build = "minimal";

// Serialization
protobuf.Writer       = __webpack_require__(/*! ./writer */ "./node_modules/protobufjs/src/writer.js");
protobuf.BufferWriter = __webpack_require__(/*! ./writer_buffer */ "./node_modules/protobufjs/src/writer_buffer.js");
protobuf.Reader       = __webpack_require__(/*! ./reader */ "./node_modules/protobufjs/src/reader.js");
protobuf.BufferReader = __webpack_require__(/*! ./reader_buffer */ "./node_modules/protobufjs/src/reader_buffer.js");

// Utility
protobuf.util         = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");
protobuf.rpc          = __webpack_require__(/*! ./rpc */ "./node_modules/protobufjs/src/rpc.js");
protobuf.roots        = __webpack_require__(/*! ./roots */ "./node_modules/protobufjs/src/roots.js");
protobuf.configure    = configure;

/* istanbul ignore next */
/**
 * Reconfigures the library according to the environment.
 * @returns {undefined}
 */
function configure() {
    protobuf.util._configure();
    protobuf.Writer._configure(protobuf.BufferWriter);
    protobuf.Reader._configure(protobuf.BufferReader);
}

// Set up buffer utility according to the environment
configure();


/***/ }),

/***/ "./node_modules/protobufjs/src/reader.js":
/*!***********************************************!*\
  !*** ./node_modules/protobufjs/src/reader.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Reader;

var util      = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

var BufferReader; // cyclic

var LongBits  = util.LongBits,
    utf8      = util.utf8;

/* istanbul ignore next */
function indexOutOfRange(reader, writeLength) {
    return RangeError("index out of range: " + reader.pos + " + " + (writeLength || 1) + " > " + reader.len);
}

/**
 * Constructs a new reader instance using the specified buffer.
 * @classdesc Wire format reader using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 * @param {Uint8Array} buffer Buffer to read from
 */
function Reader(buffer) {

    /**
     * Read buffer.
     * @type {Uint8Array}
     */
    this.buf = buffer;

    /**
     * Read buffer position.
     * @type {number}
     */
    this.pos = 0;

    /**
     * Read buffer length.
     * @type {number}
     */
    this.len = buffer.length;
}

var create_array = typeof Uint8Array !== "undefined"
    ? function create_typed_array(buffer) {
        if (buffer instanceof Uint8Array || Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    }
    /* istanbul ignore next */
    : function create_array(buffer) {
        if (Array.isArray(buffer))
            return new Reader(buffer);
        throw Error("illegal buffer");
    };

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup(buffer) {
            return (Reader.create = function create_buffer(buffer) {
                return util.Buffer.isBuffer(buffer)
                    ? new BufferReader(buffer)
                    /* istanbul ignore next */
                    : create_array(buffer);
            })(buffer);
        }
        /* istanbul ignore next */
        : create_array;
};

/**
 * Creates a new reader using the specified buffer.
 * @function
 * @param {Uint8Array|Buffer} buffer Buffer to read from
 * @returns {Reader|BufferReader} A {@link BufferReader} if `buffer` is a Buffer, otherwise a {@link Reader}
 * @throws {Error} If `buffer` is not a valid buffer
 */
Reader.create = create();

Reader.prototype._slice = util.Array.prototype.subarray || /* istanbul ignore next */ util.Array.prototype.slice;

/**
 * Reads a varint as an unsigned 32 bit value.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.uint32 = (function read_uint32_setup() {
    var value = 4294967295; // optimizer type-hint, tends to deopt otherwise (?!)
    return function read_uint32() {
        value = (         this.buf[this.pos] & 127       ) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) <<  7) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 14) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] & 127) << 21) >>> 0; if (this.buf[this.pos++] < 128) return value;
        value = (value | (this.buf[this.pos] &  15) << 28) >>> 0; if (this.buf[this.pos++] < 128) return value;

        /* istanbul ignore if */
        if ((this.pos += 5) > this.len) {
            this.pos = this.len;
            throw indexOutOfRange(this, 10);
        }
        return value;
    };
})();

/**
 * Reads a varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.int32 = function read_int32() {
    return this.uint32() | 0;
};

/**
 * Reads a zig-zag encoded varint as a signed 32 bit value.
 * @returns {number} Value read
 */
Reader.prototype.sint32 = function read_sint32() {
    var value = this.uint32();
    return value >>> 1 ^ -(value & 1) | 0;
};

/* eslint-disable no-invalid-this */

function readLongVarint() {
    // tends to deopt with local vars for octet etc.
    var bits = new LongBits(0, 0);
    var i = 0;
    if (this.len - this.pos > 4) { // fast route (lo)
        for (; i < 4; ++i) {
            // 1st..4th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 5th
        bits.lo = (bits.lo | (this.buf[this.pos] & 127) << 28) >>> 0;
        bits.hi = (bits.hi | (this.buf[this.pos] & 127) >>  4) >>> 0;
        if (this.buf[this.pos++] < 128)
            return bits;
        i = 0;
    } else {
        for (; i < 3; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 1st..3th
            bits.lo = (bits.lo | (this.buf[this.pos] & 127) << i * 7) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
        // 4th
        bits.lo = (bits.lo | (this.buf[this.pos++] & 127) << i * 7) >>> 0;
        return bits;
    }
    if (this.len - this.pos > 4) { // fast route (hi)
        for (; i < 5; ++i) {
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    } else {
        for (; i < 5; ++i) {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
            // 6th..10th
            bits.hi = (bits.hi | (this.buf[this.pos] & 127) << i * 7 + 3) >>> 0;
            if (this.buf[this.pos++] < 128)
                return bits;
        }
    }
    /* istanbul ignore next */
    throw Error("invalid varint encoding");
}

/* eslint-enable no-invalid-this */

/**
 * Reads a varint as a signed 64 bit value.
 * @name Reader#int64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as an unsigned 64 bit value.
 * @name Reader#uint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a zig-zag encoded varint as a signed 64 bit value.
 * @name Reader#sint64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a varint as a boolean.
 * @returns {boolean} Value read
 */
Reader.prototype.bool = function read_bool() {
    return this.uint32() !== 0;
};

function readFixed32_end(buf, end) { // note that this uses `end`, not `pos`
    return (buf[end - 4]
          | buf[end - 3] << 8
          | buf[end - 2] << 16
          | buf[end - 1] << 24) >>> 0;
}

/**
 * Reads fixed 32 bits as an unsigned 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.fixed32 = function read_fixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4);
};

/**
 * Reads fixed 32 bits as a signed 32 bit integer.
 * @returns {number} Value read
 */
Reader.prototype.sfixed32 = function read_sfixed32() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    return readFixed32_end(this.buf, this.pos += 4) | 0;
};

/* eslint-disable no-invalid-this */

function readFixed64(/* this: Reader */) {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 8);

    return new LongBits(readFixed32_end(this.buf, this.pos += 4), readFixed32_end(this.buf, this.pos += 4));
}

/* eslint-enable no-invalid-this */

/**
 * Reads fixed 64 bits.
 * @name Reader#fixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads zig-zag encoded fixed 64 bits.
 * @name Reader#sfixed64
 * @function
 * @returns {Long} Value read
 */

/**
 * Reads a float (32 bit) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.float = function read_float() {

    /* istanbul ignore if */
    if (this.pos + 4 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readFloatLE(this.buf, this.pos);
    this.pos += 4;
    return value;
};

/**
 * Reads a double (64 bit float) as a number.
 * @function
 * @returns {number} Value read
 */
Reader.prototype.double = function read_double() {

    /* istanbul ignore if */
    if (this.pos + 8 > this.len)
        throw indexOutOfRange(this, 4);

    var value = util.float.readDoubleLE(this.buf, this.pos);
    this.pos += 8;
    return value;
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @returns {Uint8Array} Value read
 */
Reader.prototype.bytes = function read_bytes() {
    var length = this.uint32(),
        start  = this.pos,
        end    = this.pos + length;

    /* istanbul ignore if */
    if (end > this.len)
        throw indexOutOfRange(this, length);

    this.pos += length;
    if (Array.isArray(this.buf)) // plain array
        return this.buf.slice(start, end);
    return start === end // fix for IE 10/Win8 and others' subarray returning array of size 1
        ? new this.buf.constructor(0)
        : this._slice.call(this.buf, start, end);
};

/**
 * Reads a string preceeded by its byte length as a varint.
 * @returns {string} Value read
 */
Reader.prototype.string = function read_string() {
    var bytes = this.bytes();
    return utf8.read(bytes, 0, bytes.length);
};

/**
 * Skips the specified number of bytes if specified, otherwise skips a varint.
 * @param {number} [length] Length if known, otherwise a varint is assumed
 * @returns {Reader} `this`
 */
Reader.prototype.skip = function skip(length) {
    if (typeof length === "number") {
        /* istanbul ignore if */
        if (this.pos + length > this.len)
            throw indexOutOfRange(this, length);
        this.pos += length;
    } else {
        do {
            /* istanbul ignore if */
            if (this.pos >= this.len)
                throw indexOutOfRange(this);
        } while (this.buf[this.pos++] & 128);
    }
    return this;
};

/**
 * Skips the next element of the specified wire type.
 * @param {number} wireType Wire type received
 * @returns {Reader} `this`
 */
Reader.prototype.skipType = function(wireType) {
    switch (wireType) {
        case 0:
            this.skip();
            break;
        case 1:
            this.skip(8);
            break;
        case 2:
            this.skip(this.uint32());
            break;
        case 3:
            while ((wireType = this.uint32() & 7) !== 4) {
                this.skipType(wireType);
            }
            break;
        case 5:
            this.skip(4);
            break;

        /* istanbul ignore next */
        default:
            throw Error("invalid wire type " + wireType + " at offset " + this.pos);
    }
    return this;
};

Reader._configure = function(BufferReader_) {
    BufferReader = BufferReader_;
    Reader.create = create();
    BufferReader._configure();

    var fn = util.Long ? "toLong" : /* istanbul ignore next */ "toNumber";
    util.merge(Reader.prototype, {

        int64: function read_int64() {
            return readLongVarint.call(this)[fn](false);
        },

        uint64: function read_uint64() {
            return readLongVarint.call(this)[fn](true);
        },

        sint64: function read_sint64() {
            return readLongVarint.call(this).zzDecode()[fn](false);
        },

        fixed64: function read_fixed64() {
            return readFixed64.call(this)[fn](true);
        },

        sfixed64: function read_sfixed64() {
            return readFixed64.call(this)[fn](false);
        }

    });
};


/***/ }),

/***/ "./node_modules/protobufjs/src/reader_buffer.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/reader_buffer.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = BufferReader;

// extends Reader
var Reader = __webpack_require__(/*! ./reader */ "./node_modules/protobufjs/src/reader.js");
(BufferReader.prototype = Object.create(Reader.prototype)).constructor = BufferReader;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer reader instance.
 * @classdesc Wire format reader using node buffers.
 * @extends Reader
 * @constructor
 * @param {Buffer} buffer Buffer to read from
 */
function BufferReader(buffer) {
    Reader.call(this, buffer);

    /**
     * Read buffer.
     * @name BufferReader#buf
     * @type {Buffer}
     */
}

BufferReader._configure = function () {
    /* istanbul ignore else */
    if (util.Buffer)
        BufferReader.prototype._slice = util.Buffer.prototype.slice;
};


/**
 * @override
 */
BufferReader.prototype.string = function read_string_buffer() {
    var len = this.uint32(); // modifies pos
    return this.buf.utf8Slice
        ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + len, this.len))
        : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + len, this.len));
};

/**
 * Reads a sequence of bytes preceeded by its length as a varint.
 * @name BufferReader#bytes
 * @function
 * @returns {Buffer} Value read
 */

BufferReader._configure();


/***/ }),

/***/ "./node_modules/protobufjs/src/roots.js":
/*!**********************************************!*\
  !*** ./node_modules/protobufjs/src/roots.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";

module.exports = {};

/**
 * Named roots.
 * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
 * Can also be used manually to make roots available accross modules.
 * @name roots
 * @type {Object.<string,Root>}
 * @example
 * // pbjs -r myroot -o compiled.js ...
 *
 * // in another module:
 * require("./compiled.js");
 *
 * // in any subsequent module:
 * var root = protobuf.roots["myroot"];
 */


/***/ }),

/***/ "./node_modules/protobufjs/src/rpc.js":
/*!********************************************!*\
  !*** ./node_modules/protobufjs/src/rpc.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


/**
 * Streaming RPC helpers.
 * @namespace
 */
var rpc = exports;

/**
 * RPC implementation passed to {@link Service#create} performing a service request on network level, i.e. by utilizing http requests or websockets.
 * @typedef RPCImpl
 * @type {function}
 * @param {Method|rpc.ServiceMethod<Message<{}>,Message<{}>>} method Reflected or static method being called
 * @param {Uint8Array} requestData Request data
 * @param {RPCImplCallback} callback Callback function
 * @returns {undefined}
 * @example
 * function rpcImpl(method, requestData, callback) {
 *     if (protobuf.util.lcFirst(method.name) !== "myMethod") // compatible with static code
 *         throw Error("no such method");
 *     asynchronouslyObtainAResponse(requestData, function(err, responseData) {
 *         callback(err, responseData);
 *     });
 * }
 */

/**
 * Node-style callback as used by {@link RPCImpl}.
 * @typedef RPCImplCallback
 * @type {function}
 * @param {Error|null} error Error, if any, otherwise `null`
 * @param {Uint8Array|null} [response] Response data or `null` to signal end of stream, if there hasn't been an error
 * @returns {undefined}
 */

rpc.Service = __webpack_require__(/*! ./rpc/service */ "./node_modules/protobufjs/src/rpc/service.js");


/***/ }),

/***/ "./node_modules/protobufjs/src/rpc/service.js":
/*!****************************************************!*\
  !*** ./node_modules/protobufjs/src/rpc/service.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Service;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

// Extends EventEmitter
(Service.prototype = Object.create(util.EventEmitter.prototype)).constructor = Service;

/**
 * A service method callback as used by {@link rpc.ServiceMethod|ServiceMethod}.
 *
 * Differs from {@link RPCImplCallback} in that it is an actual callback of a service method which may not return `response = null`.
 * @typedef rpc.ServiceMethodCallback
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {Error|null} error Error, if any
 * @param {TRes} [response] Response message
 * @returns {undefined}
 */

/**
 * A service method part of a {@link rpc.Service} as created by {@link Service.create}.
 * @typedef rpc.ServiceMethod
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 * @type {function}
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} [callback] Node-style callback called with the error, if any, and the response message
 * @returns {Promise<Message<TRes>>} Promise if `callback` has been omitted, otherwise `undefined`
 */

/**
 * Constructs a new RPC service instance.
 * @classdesc An RPC service as returned by {@link Service#create}.
 * @exports rpc.Service
 * @extends util.EventEmitter
 * @constructor
 * @param {RPCImpl} rpcImpl RPC implementation
 * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
 * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
 */
function Service(rpcImpl, requestDelimited, responseDelimited) {

    if (typeof rpcImpl !== "function")
        throw TypeError("rpcImpl must be a function");

    util.EventEmitter.call(this);

    /**
     * RPC implementation. Becomes `null` once the service is ended.
     * @type {RPCImpl|null}
     */
    this.rpcImpl = rpcImpl;

    /**
     * Whether requests are length-delimited.
     * @type {boolean}
     */
    this.requestDelimited = Boolean(requestDelimited);

    /**
     * Whether responses are length-delimited.
     * @type {boolean}
     */
    this.responseDelimited = Boolean(responseDelimited);
}

/**
 * Calls a service method through {@link rpc.Service#rpcImpl|rpcImpl}.
 * @param {Method|rpc.ServiceMethod<TReq,TRes>} method Reflected or static method
 * @param {Constructor<TReq>} requestCtor Request constructor
 * @param {Constructor<TRes>} responseCtor Response constructor
 * @param {TReq|Properties<TReq>} request Request message or plain object
 * @param {rpc.ServiceMethodCallback<TRes>} callback Service callback
 * @returns {undefined}
 * @template TReq extends Message<TReq>
 * @template TRes extends Message<TRes>
 */
Service.prototype.rpcCall = function rpcCall(method, requestCtor, responseCtor, request, callback) {

    if (!request)
        throw TypeError("request must be specified");

    var self = this;
    if (!callback)
        return util.asPromise(rpcCall, self, method, requestCtor, responseCtor, request);

    if (!self.rpcImpl) {
        setTimeout(function() { callback(Error("already ended")); }, 0);
        return undefined;
    }

    try {
        return self.rpcImpl(
            method,
            requestCtor[self.requestDelimited ? "encodeDelimited" : "encode"](request).finish(),
            function rpcCallback(err, response) {

                if (err) {
                    self.emit("error", err, method);
                    return callback(err);
                }

                if (response === null) {
                    self.end(/* endedByRPC */ true);
                    return undefined;
                }

                if (!(response instanceof responseCtor)) {
                    try {
                        response = responseCtor[self.responseDelimited ? "decodeDelimited" : "decode"](response);
                    } catch (err) {
                        self.emit("error", err, method);
                        return callback(err);
                    }
                }

                self.emit("data", response, method);
                return callback(null, response);
            }
        );
    } catch (err) {
        self.emit("error", err, method);
        setTimeout(function() { callback(err); }, 0);
        return undefined;
    }
};

/**
 * Ends this service and emits the `end` event.
 * @param {boolean} [endedByRPC=false] Whether the service has been ended by the RPC implementation.
 * @returns {rpc.Service} `this`
 */
Service.prototype.end = function end(endedByRPC) {
    if (this.rpcImpl) {
        if (!endedByRPC) // signal end to rpcImpl
            this.rpcImpl(null, null, null);
        this.rpcImpl = null;
        this.emit("end").off();
    }
    return this;
};


/***/ }),

/***/ "./node_modules/protobufjs/src/util/longbits.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/util/longbits.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = LongBits;

var util = __webpack_require__(/*! ../util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs new long bits.
 * @classdesc Helper class for working with the low and high bits of a 64 bit value.
 * @memberof util
 * @constructor
 * @param {number} lo Low 32 bits, unsigned
 * @param {number} hi High 32 bits, unsigned
 */
function LongBits(lo, hi) {

    // note that the casts below are theoretically unnecessary as of today, but older statically
    // generated converter code might still call the ctor with signed 32bits. kept for compat.

    /**
     * Low bits.
     * @type {number}
     */
    this.lo = lo >>> 0;

    /**
     * High bits.
     * @type {number}
     */
    this.hi = hi >>> 0;
}

/**
 * Zero bits.
 * @memberof util.LongBits
 * @type {util.LongBits}
 */
var zero = LongBits.zero = new LongBits(0, 0);

zero.toNumber = function() { return 0; };
zero.zzEncode = zero.zzDecode = function() { return this; };
zero.length = function() { return 1; };

/**
 * Zero hash.
 * @memberof util.LongBits
 * @type {string}
 */
var zeroHash = LongBits.zeroHash = "\0\0\0\0\0\0\0\0";

/**
 * Constructs new long bits from the specified number.
 * @param {number} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.fromNumber = function fromNumber(value) {
    if (value === 0)
        return zero;
    var sign = value < 0;
    if (sign)
        value = -value;
    var lo = value >>> 0,
        hi = (value - lo) / 4294967296 >>> 0;
    if (sign) {
        hi = ~hi >>> 0;
        lo = ~lo >>> 0;
        if (++lo > 4294967295) {
            lo = 0;
            if (++hi > 4294967295)
                hi = 0;
        }
    }
    return new LongBits(lo, hi);
};

/**
 * Constructs new long bits from a number, long or string.
 * @param {Long|number|string} value Value
 * @returns {util.LongBits} Instance
 */
LongBits.from = function from(value) {
    if (typeof value === "number")
        return LongBits.fromNumber(value);
    if (util.isString(value)) {
        /* istanbul ignore else */
        if (util.Long)
            value = util.Long.fromString(value);
        else
            return LongBits.fromNumber(parseInt(value, 10));
    }
    return value.low || value.high ? new LongBits(value.low >>> 0, value.high >>> 0) : zero;
};

/**
 * Converts this long bits to a possibly unsafe JavaScript number.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {number} Possibly unsafe number
 */
LongBits.prototype.toNumber = function toNumber(unsigned) {
    if (!unsigned && this.hi >>> 31) {
        var lo = ~this.lo + 1 >>> 0,
            hi = ~this.hi     >>> 0;
        if (!lo)
            hi = hi + 1 >>> 0;
        return -(lo + hi * 4294967296);
    }
    return this.lo + this.hi * 4294967296;
};

/**
 * Converts this long bits to a long.
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long} Long
 */
LongBits.prototype.toLong = function toLong(unsigned) {
    return util.Long
        ? new util.Long(this.lo | 0, this.hi | 0, Boolean(unsigned))
        /* istanbul ignore next */
        : { low: this.lo | 0, high: this.hi | 0, unsigned: Boolean(unsigned) };
};

var charCodeAt = String.prototype.charCodeAt;

/**
 * Constructs new long bits from the specified 8 characters long hash.
 * @param {string} hash Hash
 * @returns {util.LongBits} Bits
 */
LongBits.fromHash = function fromHash(hash) {
    if (hash === zeroHash)
        return zero;
    return new LongBits(
        ( charCodeAt.call(hash, 0)
        | charCodeAt.call(hash, 1) << 8
        | charCodeAt.call(hash, 2) << 16
        | charCodeAt.call(hash, 3) << 24) >>> 0
    ,
        ( charCodeAt.call(hash, 4)
        | charCodeAt.call(hash, 5) << 8
        | charCodeAt.call(hash, 6) << 16
        | charCodeAt.call(hash, 7) << 24) >>> 0
    );
};

/**
 * Converts this long bits to a 8 characters long hash.
 * @returns {string} Hash
 */
LongBits.prototype.toHash = function toHash() {
    return String.fromCharCode(
        this.lo        & 255,
        this.lo >>> 8  & 255,
        this.lo >>> 16 & 255,
        this.lo >>> 24      ,
        this.hi        & 255,
        this.hi >>> 8  & 255,
        this.hi >>> 16 & 255,
        this.hi >>> 24
    );
};

/**
 * Zig-zag encodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzEncode = function zzEncode() {
    var mask =   this.hi >> 31;
    this.hi  = ((this.hi << 1 | this.lo >>> 31) ^ mask) >>> 0;
    this.lo  = ( this.lo << 1                   ^ mask) >>> 0;
    return this;
};

/**
 * Zig-zag decodes this long bits.
 * @returns {util.LongBits} `this`
 */
LongBits.prototype.zzDecode = function zzDecode() {
    var mask = -(this.lo & 1);
    this.lo  = ((this.lo >>> 1 | this.hi << 31) ^ mask) >>> 0;
    this.hi  = ( this.hi >>> 1                  ^ mask) >>> 0;
    return this;
};

/**
 * Calculates the length of this longbits when encoded as a varint.
 * @returns {number} Length
 */
LongBits.prototype.length = function length() {
    var part0 =  this.lo,
        part1 = (this.lo >>> 28 | this.hi << 4) >>> 0,
        part2 =  this.hi >>> 24;
    return part2 === 0
         ? part1 === 0
           ? part0 < 16384
             ? part0 < 128 ? 1 : 2
             : part0 < 2097152 ? 3 : 4
           : part1 < 16384
             ? part1 < 128 ? 5 : 6
             : part1 < 2097152 ? 7 : 8
         : part2 < 128 ? 9 : 10;
};


/***/ }),

/***/ "./node_modules/protobufjs/src/util/minimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/protobufjs/src/util/minimal.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var util = exports;

// used to return a Promise where callback is omitted
util.asPromise = __webpack_require__(/*! @protobufjs/aspromise */ "./node_modules/@protobufjs/aspromise/index.js");

// converts to / from base64 encoded strings
util.base64 = __webpack_require__(/*! @protobufjs/base64 */ "./node_modules/@protobufjs/base64/index.js");

// base class of rpc.Service
util.EventEmitter = __webpack_require__(/*! @protobufjs/eventemitter */ "./node_modules/@protobufjs/eventemitter/index.js");

// float handling accross browsers
util.float = __webpack_require__(/*! @protobufjs/float */ "./node_modules/@protobufjs/float/index.js");

// requires modules optionally and hides the call from bundlers
util.inquire = __webpack_require__(/*! @protobufjs/inquire */ "./node_modules/@protobufjs/inquire/index.js");

// converts to / from utf8 encoded strings
util.utf8 = __webpack_require__(/*! @protobufjs/utf8 */ "./node_modules/@protobufjs/utf8/index.js");

// provides a node-like buffer pool in the browser
util.pool = __webpack_require__(/*! @protobufjs/pool */ "./node_modules/@protobufjs/pool/index.js");

// utility to work with the low and high bits of a 64 bit value
util.LongBits = __webpack_require__(/*! ./longbits */ "./node_modules/protobufjs/src/util/longbits.js");

/**
 * Whether running within node or not.
 * @memberof util
 * @type {boolean}
 */
util.isNode = Boolean(typeof __webpack_require__.g !== "undefined"
                   && __webpack_require__.g
                   && __webpack_require__.g.process
                   && __webpack_require__.g.process.versions
                   && __webpack_require__.g.process.versions.node);

/**
 * Global object reference.
 * @memberof util
 * @type {Object}
 */
util.global = util.isNode && __webpack_require__.g
           || typeof window !== "undefined" && window
           || typeof self   !== "undefined" && self
           || this; // eslint-disable-line no-invalid-this

/**
 * An immuable empty array.
 * @memberof util
 * @type {Array.<*>}
 * @const
 */
util.emptyArray = Object.freeze ? Object.freeze([]) : /* istanbul ignore next */ []; // used on prototypes

/**
 * An immutable empty object.
 * @type {Object}
 * @const
 */
util.emptyObject = Object.freeze ? Object.freeze({}) : /* istanbul ignore next */ {}; // used on prototypes

/**
 * Tests if the specified value is an integer.
 * @function
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is an integer
 */
util.isInteger = Number.isInteger || /* istanbul ignore next */ function isInteger(value) {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
};

/**
 * Tests if the specified value is a string.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a string
 */
util.isString = function isString(value) {
    return typeof value === "string" || value instanceof String;
};

/**
 * Tests if the specified value is a non-null object.
 * @param {*} value Value to test
 * @returns {boolean} `true` if the value is a non-null object
 */
util.isObject = function isObject(value) {
    return value && typeof value === "object";
};

/**
 * Checks if a property on a message is considered to be present.
 * This is an alias of {@link util.isSet}.
 * @function
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isset =

/**
 * Checks if a property on a message is considered to be present.
 * @param {Object} obj Plain object or message instance
 * @param {string} prop Property name
 * @returns {boolean} `true` if considered to be present, otherwise `false`
 */
util.isSet = function isSet(obj, prop) {
    var value = obj[prop];
    if (value != null && obj.hasOwnProperty(prop)) // eslint-disable-line eqeqeq, no-prototype-builtins
        return typeof value !== "object" || (Array.isArray(value) ? value.length : Object.keys(value).length) > 0;
    return false;
};

/**
 * Any compatible Buffer instance.
 * This is a minimal stand-alone definition of a Buffer instance. The actual type is that exported by node's typings.
 * @interface Buffer
 * @extends Uint8Array
 */

/**
 * Node's Buffer class if available.
 * @type {Constructor<Buffer>}
 */
util.Buffer = (function() {
    try {
        var Buffer = util.inquire("buffer").Buffer;
        // refuse to use non-node buffers if not explicitly assigned (perf reasons):
        return Buffer.prototype.utf8Write ? Buffer : /* istanbul ignore next */ null;
    } catch (e) {
        /* istanbul ignore next */
        return null;
    }
})();

// Internal alias of or polyfull for Buffer.from.
util._Buffer_from = null;

// Internal alias of or polyfill for Buffer.allocUnsafe.
util._Buffer_allocUnsafe = null;

/**
 * Creates a new buffer of whatever type supported by the environment.
 * @param {number|number[]} [sizeOrArray=0] Buffer size or number array
 * @returns {Uint8Array|Buffer} Buffer
 */
util.newBuffer = function newBuffer(sizeOrArray) {
    /* istanbul ignore next */
    return typeof sizeOrArray === "number"
        ? util.Buffer
            ? util._Buffer_allocUnsafe(sizeOrArray)
            : new util.Array(sizeOrArray)
        : util.Buffer
            ? util._Buffer_from(sizeOrArray)
            : typeof Uint8Array === "undefined"
                ? sizeOrArray
                : new Uint8Array(sizeOrArray);
};

/**
 * Array implementation used in the browser. `Uint8Array` if supported, otherwise `Array`.
 * @type {Constructor<Uint8Array>}
 */
util.Array = typeof Uint8Array !== "undefined" ? Uint8Array /* istanbul ignore next */ : Array;

/**
 * Any compatible Long instance.
 * This is a minimal stand-alone definition of a Long instance. The actual type is that exported by long.js.
 * @interface Long
 * @property {number} low Low bits
 * @property {number} high High bits
 * @property {boolean} unsigned Whether unsigned or not
 */

/**
 * Long.js's Long class if available.
 * @type {Constructor<Long>}
 */
util.Long = /* istanbul ignore next */ util.global.dcodeIO && /* istanbul ignore next */ util.global.dcodeIO.Long
         || /* istanbul ignore next */ util.global.Long
         || util.inquire("long");

/**
 * Regular expression used to verify 2 bit (`bool`) map keys.
 * @type {RegExp}
 * @const
 */
util.key2Re = /^true|false|0|1$/;

/**
 * Regular expression used to verify 32 bit (`int32` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key32Re = /^-?(?:0|[1-9][0-9]*)$/;

/**
 * Regular expression used to verify 64 bit (`int64` etc.) map keys.
 * @type {RegExp}
 * @const
 */
util.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/;

/**
 * Converts a number or long to an 8 characters long hash string.
 * @param {Long|number} value Value to convert
 * @returns {string} Hash
 */
util.longToHash = function longToHash(value) {
    return value
        ? util.LongBits.from(value).toHash()
        : util.LongBits.zeroHash;
};

/**
 * Converts an 8 characters long hash string to a long or number.
 * @param {string} hash Hash
 * @param {boolean} [unsigned=false] Whether unsigned or not
 * @returns {Long|number} Original value
 */
util.longFromHash = function longFromHash(hash, unsigned) {
    var bits = util.LongBits.fromHash(hash);
    if (util.Long)
        return util.Long.fromBits(bits.lo, bits.hi, unsigned);
    return bits.toNumber(Boolean(unsigned));
};

/**
 * Merges the properties of the source object into the destination object.
 * @memberof util
 * @param {Object.<string,*>} dst Destination object
 * @param {Object.<string,*>} src Source object
 * @param {boolean} [ifNotSet=false] Merges only if the key is not already set
 * @returns {Object.<string,*>} Destination object
 */
function merge(dst, src, ifNotSet) { // used by converters
    for (var keys = Object.keys(src), i = 0; i < keys.length; ++i)
        if (dst[keys[i]] === undefined || !ifNotSet)
            dst[keys[i]] = src[keys[i]];
    return dst;
}

util.merge = merge;

/**
 * Converts the first character of a string to lower case.
 * @param {string} str String to convert
 * @returns {string} Converted string
 */
util.lcFirst = function lcFirst(str) {
    return str.charAt(0).toLowerCase() + str.substring(1);
};

/**
 * Creates a custom error constructor.
 * @memberof util
 * @param {string} name Error name
 * @returns {Constructor<Error>} Custom error constructor
 */
function newError(name) {

    function CustomError(message, properties) {

        if (!(this instanceof CustomError))
            return new CustomError(message, properties);

        // Error.call(this, message);
        // ^ just returns a new error instance because the ctor can be called as a function

        Object.defineProperty(this, "message", { get: function() { return message; } });

        /* istanbul ignore next */
        if (Error.captureStackTrace) // node
            Error.captureStackTrace(this, CustomError);
        else
            Object.defineProperty(this, "stack", { value: new Error().stack || "" });

        if (properties)
            merge(this, properties);
    }

    (CustomError.prototype = Object.create(Error.prototype)).constructor = CustomError;

    Object.defineProperty(CustomError.prototype, "name", { get: function() { return name; } });

    CustomError.prototype.toString = function toString() {
        return this.name + ": " + this.message;
    };

    return CustomError;
}

util.newError = newError;

/**
 * Constructs a new protocol error.
 * @classdesc Error subclass indicating a protocol specifc error.
 * @memberof util
 * @extends Error
 * @template T extends Message<T>
 * @constructor
 * @param {string} message Error message
 * @param {Object.<string,*>} [properties] Additional properties
 * @example
 * try {
 *     MyMessage.decode(someBuffer); // throws if required fields are missing
 * } catch (e) {
 *     if (e instanceof ProtocolError && e.instance)
 *         console.log("decoded so far: " + JSON.stringify(e.instance));
 * }
 */
util.ProtocolError = newError("ProtocolError");

/**
 * So far decoded message instance.
 * @name util.ProtocolError#instance
 * @type {Message<T>}
 */

/**
 * A OneOf getter as returned by {@link util.oneOfGetter}.
 * @typedef OneOfGetter
 * @type {function}
 * @returns {string|undefined} Set field name, if any
 */

/**
 * Builds a getter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfGetter} Unbound getter
 */
util.oneOfGetter = function getOneOf(fieldNames) {
    var fieldMap = {};
    for (var i = 0; i < fieldNames.length; ++i)
        fieldMap[fieldNames[i]] = 1;

    /**
     * @returns {string|undefined} Set field name, if any
     * @this Object
     * @ignore
     */
    return function() { // eslint-disable-line consistent-return
        for (var keys = Object.keys(this), i = keys.length - 1; i > -1; --i)
            if (fieldMap[keys[i]] === 1 && this[keys[i]] !== undefined && this[keys[i]] !== null)
                return keys[i];
    };
};

/**
 * A OneOf setter as returned by {@link util.oneOfSetter}.
 * @typedef OneOfSetter
 * @type {function}
 * @param {string|undefined} value Field name
 * @returns {undefined}
 */

/**
 * Builds a setter for a oneof's present field name.
 * @param {string[]} fieldNames Field names
 * @returns {OneOfSetter} Unbound setter
 */
util.oneOfSetter = function setOneOf(fieldNames) {

    /**
     * @param {string} name Field name
     * @returns {undefined}
     * @this Object
     * @ignore
     */
    return function(name) {
        for (var i = 0; i < fieldNames.length; ++i)
            if (fieldNames[i] !== name)
                delete this[fieldNames[i]];
    };
};

/**
 * Default conversion options used for {@link Message#toJSON} implementations.
 *
 * These options are close to proto3's JSON mapping with the exception that internal types like Any are handled just like messages. More precisely:
 *
 * - Longs become strings
 * - Enums become string keys
 * - Bytes become base64 encoded strings
 * - (Sub-)Messages become plain objects
 * - Maps become plain objects with all string keys
 * - Repeated fields become arrays
 * - NaN and Infinity for float and double fields become strings
 *
 * @type {IConversionOptions}
 * @see https://developers.google.com/protocol-buffers/docs/proto3?hl=en#json
 */
util.toJSONOptions = {
    longs: String,
    enums: String,
    bytes: String,
    json: true
};

// Sets up buffer utility according to the environment (called in index-minimal)
util._configure = function() {
    var Buffer = util.Buffer;
    /* istanbul ignore if */
    if (!Buffer) {
        util._Buffer_from = util._Buffer_allocUnsafe = null;
        return;
    }
    // because node 4.x buffers are incompatible & immutable
    // see: https://github.com/dcodeIO/protobuf.js/pull/665
    util._Buffer_from = Buffer.from !== Uint8Array.from && Buffer.from ||
        /* istanbul ignore next */
        function Buffer_from(value, encoding) {
            return new Buffer(value, encoding);
        };
    util._Buffer_allocUnsafe = Buffer.allocUnsafe ||
        /* istanbul ignore next */
        function Buffer_allocUnsafe(size) {
            return new Buffer(size);
        };
};


/***/ }),

/***/ "./node_modules/protobufjs/src/writer.js":
/*!***********************************************!*\
  !*** ./node_modules/protobufjs/src/writer.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = Writer;

var util      = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

var BufferWriter; // cyclic

var LongBits  = util.LongBits,
    base64    = util.base64,
    utf8      = util.utf8;

/**
 * Constructs a new writer operation instance.
 * @classdesc Scheduled writer operation.
 * @constructor
 * @param {function(*, Uint8Array, number)} fn Function to call
 * @param {number} len Value byte length
 * @param {*} val Value to write
 * @ignore
 */
function Op(fn, len, val) {

    /**
     * Function to call.
     * @type {function(Uint8Array, number, *)}
     */
    this.fn = fn;

    /**
     * Value byte length.
     * @type {number}
     */
    this.len = len;

    /**
     * Next operation.
     * @type {Writer.Op|undefined}
     */
    this.next = undefined;

    /**
     * Value to write.
     * @type {*}
     */
    this.val = val; // type varies
}

/* istanbul ignore next */
function noop() {} // eslint-disable-line no-empty-function

/**
 * Constructs a new writer state instance.
 * @classdesc Copied writer state.
 * @memberof Writer
 * @constructor
 * @param {Writer} writer Writer to copy state from
 * @ignore
 */
function State(writer) {

    /**
     * Current head.
     * @type {Writer.Op}
     */
    this.head = writer.head;

    /**
     * Current tail.
     * @type {Writer.Op}
     */
    this.tail = writer.tail;

    /**
     * Current buffer length.
     * @type {number}
     */
    this.len = writer.len;

    /**
     * Next state.
     * @type {State|null}
     */
    this.next = writer.states;
}

/**
 * Constructs a new writer instance.
 * @classdesc Wire format writer using `Uint8Array` if available, otherwise `Array`.
 * @constructor
 */
function Writer() {

    /**
     * Current length.
     * @type {number}
     */
    this.len = 0;

    /**
     * Operations head.
     * @type {Object}
     */
    this.head = new Op(noop, 0, 0);

    /**
     * Operations tail
     * @type {Object}
     */
    this.tail = this.head;

    /**
     * Linked forked states.
     * @type {Object|null}
     */
    this.states = null;

    // When a value is written, the writer calculates its byte length and puts it into a linked
    // list of operations to perform when finish() is called. This both allows us to allocate
    // buffers of the exact required size and reduces the amount of work we have to do compared
    // to first calculating over objects and then encoding over objects. In our case, the encoding
    // part is just a linked list walk calling operations with already prepared values.
}

var create = function create() {
    return util.Buffer
        ? function create_buffer_setup() {
            return (Writer.create = function create_buffer() {
                return new BufferWriter();
            })();
        }
        /* istanbul ignore next */
        : function create_array() {
            return new Writer();
        };
};

/**
 * Creates a new writer.
 * @function
 * @returns {BufferWriter|Writer} A {@link BufferWriter} when Buffers are supported, otherwise a {@link Writer}
 */
Writer.create = create();

/**
 * Allocates a buffer of the specified size.
 * @param {number} size Buffer size
 * @returns {Uint8Array} Buffer
 */
Writer.alloc = function alloc(size) {
    return new util.Array(size);
};

// Use Uint8Array buffer pool in the browser, just like node does with buffers
/* istanbul ignore else */
if (util.Array !== Array)
    Writer.alloc = util.pool(Writer.alloc, util.Array.prototype.subarray);

/**
 * Pushes a new operation to the queue.
 * @param {function(Uint8Array, number, *)} fn Function to call
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @returns {Writer} `this`
 * @private
 */
Writer.prototype._push = function push(fn, len, val) {
    this.tail = this.tail.next = new Op(fn, len, val);
    this.len += len;
    return this;
};

function writeByte(val, buf, pos) {
    buf[pos] = val & 255;
}

function writeVarint32(val, buf, pos) {
    while (val > 127) {
        buf[pos++] = val & 127 | 128;
        val >>>= 7;
    }
    buf[pos] = val;
}

/**
 * Constructs a new varint writer operation instance.
 * @classdesc Scheduled varint writer operation.
 * @extends Op
 * @constructor
 * @param {number} len Value byte length
 * @param {number} val Value to write
 * @ignore
 */
function VarintOp(len, val) {
    this.len = len;
    this.next = undefined;
    this.val = val;
}

VarintOp.prototype = Object.create(Op.prototype);
VarintOp.prototype.fn = writeVarint32;

/**
 * Writes an unsigned 32 bit value as a varint.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.uint32 = function write_uint32(value) {
    // here, the call to this.push has been inlined and a varint specific Op subclass is used.
    // uint32 is by far the most frequently used operation and benefits significantly from this.
    this.len += (this.tail = this.tail.next = new VarintOp(
        (value = value >>> 0)
                < 128       ? 1
        : value < 16384     ? 2
        : value < 2097152   ? 3
        : value < 268435456 ? 4
        :                     5,
    value)).len;
    return this;
};

/**
 * Writes a signed 32 bit value as a varint.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.int32 = function write_int32(value) {
    return value < 0
        ? this._push(writeVarint64, 10, LongBits.fromNumber(value)) // 10 bytes per spec
        : this.uint32(value);
};

/**
 * Writes a 32 bit value as a varint, zig-zag encoded.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sint32 = function write_sint32(value) {
    return this.uint32((value << 1 ^ value >> 31) >>> 0);
};

function writeVarint64(val, buf, pos) {
    while (val.hi) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = (val.lo >>> 7 | val.hi << 25) >>> 0;
        val.hi >>>= 7;
    }
    while (val.lo > 127) {
        buf[pos++] = val.lo & 127 | 128;
        val.lo = val.lo >>> 7;
    }
    buf[pos++] = val.lo;
}

/**
 * Writes an unsigned 64 bit value as a varint.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.uint64 = function write_uint64(value) {
    var bits = LongBits.from(value);
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a signed 64 bit value as a varint.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.int64 = Writer.prototype.uint64;

/**
 * Writes a signed 64 bit value as a varint, zig-zag encoded.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sint64 = function write_sint64(value) {
    var bits = LongBits.from(value).zzEncode();
    return this._push(writeVarint64, bits.length(), bits);
};

/**
 * Writes a boolish value as a varint.
 * @param {boolean} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.bool = function write_bool(value) {
    return this._push(writeByte, 1, value ? 1 : 0);
};

function writeFixed32(val, buf, pos) {
    buf[pos    ] =  val         & 255;
    buf[pos + 1] =  val >>> 8   & 255;
    buf[pos + 2] =  val >>> 16  & 255;
    buf[pos + 3] =  val >>> 24;
}

/**
 * Writes an unsigned 32 bit value as fixed 32 bits.
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.fixed32 = function write_fixed32(value) {
    return this._push(writeFixed32, 4, value >>> 0);
};

/**
 * Writes a signed 32 bit value as fixed 32 bits.
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.sfixed32 = Writer.prototype.fixed32;

/**
 * Writes an unsigned 64 bit value as fixed 64 bits.
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.fixed64 = function write_fixed64(value) {
    var bits = LongBits.from(value);
    return this._push(writeFixed32, 4, bits.lo)._push(writeFixed32, 4, bits.hi);
};

/**
 * Writes a signed 64 bit value as fixed 64 bits.
 * @function
 * @param {Long|number|string} value Value to write
 * @returns {Writer} `this`
 * @throws {TypeError} If `value` is a string and no long library is present.
 */
Writer.prototype.sfixed64 = Writer.prototype.fixed64;

/**
 * Writes a float (32 bit).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.float = function write_float(value) {
    return this._push(util.float.writeFloatLE, 4, value);
};

/**
 * Writes a double (64 bit float).
 * @function
 * @param {number} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.double = function write_double(value) {
    return this._push(util.float.writeDoubleLE, 8, value);
};

var writeBytes = util.Array.prototype.set
    ? function writeBytes_set(val, buf, pos) {
        buf.set(val, pos); // also works for plain array values
    }
    /* istanbul ignore next */
    : function writeBytes_for(val, buf, pos) {
        for (var i = 0; i < val.length; ++i)
            buf[pos + i] = val[i];
    };

/**
 * Writes a sequence of bytes.
 * @param {Uint8Array|string} value Buffer or base64 encoded string to write
 * @returns {Writer} `this`
 */
Writer.prototype.bytes = function write_bytes(value) {
    var len = value.length >>> 0;
    if (!len)
        return this._push(writeByte, 1, 0);
    if (util.isString(value)) {
        var buf = Writer.alloc(len = base64.length(value));
        base64.decode(value, buf, 0);
        value = buf;
    }
    return this.uint32(len)._push(writeBytes, len, value);
};

/**
 * Writes a string.
 * @param {string} value Value to write
 * @returns {Writer} `this`
 */
Writer.prototype.string = function write_string(value) {
    var len = utf8.length(value);
    return len
        ? this.uint32(len)._push(utf8.write, len, value)
        : this._push(writeByte, 1, 0);
};

/**
 * Forks this writer's state by pushing it to a stack.
 * Calling {@link Writer#reset|reset} or {@link Writer#ldelim|ldelim} resets the writer to the previous state.
 * @returns {Writer} `this`
 */
Writer.prototype.fork = function fork() {
    this.states = new State(this);
    this.head = this.tail = new Op(noop, 0, 0);
    this.len = 0;
    return this;
};

/**
 * Resets this instance to the last state.
 * @returns {Writer} `this`
 */
Writer.prototype.reset = function reset() {
    if (this.states) {
        this.head   = this.states.head;
        this.tail   = this.states.tail;
        this.len    = this.states.len;
        this.states = this.states.next;
    } else {
        this.head = this.tail = new Op(noop, 0, 0);
        this.len  = 0;
    }
    return this;
};

/**
 * Resets to the last state and appends the fork state's current write length as a varint followed by its operations.
 * @returns {Writer} `this`
 */
Writer.prototype.ldelim = function ldelim() {
    var head = this.head,
        tail = this.tail,
        len  = this.len;
    this.reset().uint32(len);
    if (len) {
        this.tail.next = head.next; // skip noop
        this.tail = tail;
        this.len += len;
    }
    return this;
};

/**
 * Finishes the write operation.
 * @returns {Uint8Array} Finished buffer
 */
Writer.prototype.finish = function finish() {
    var head = this.head.next, // skip noop
        buf  = this.constructor.alloc(this.len),
        pos  = 0;
    while (head) {
        head.fn(head.val, buf, pos);
        pos += head.len;
        head = head.next;
    }
    // this.head = this.tail = null;
    return buf;
};

Writer._configure = function(BufferWriter_) {
    BufferWriter = BufferWriter_;
    Writer.create = create();
    BufferWriter._configure();
};


/***/ }),

/***/ "./node_modules/protobufjs/src/writer_buffer.js":
/*!******************************************************!*\
  !*** ./node_modules/protobufjs/src/writer_buffer.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = BufferWriter;

// extends Writer
var Writer = __webpack_require__(/*! ./writer */ "./node_modules/protobufjs/src/writer.js");
(BufferWriter.prototype = Object.create(Writer.prototype)).constructor = BufferWriter;

var util = __webpack_require__(/*! ./util/minimal */ "./node_modules/protobufjs/src/util/minimal.js");

/**
 * Constructs a new buffer writer instance.
 * @classdesc Wire format writer using node buffers.
 * @extends Writer
 * @constructor
 */
function BufferWriter() {
    Writer.call(this);
}

BufferWriter._configure = function () {
    /**
     * Allocates a buffer of the specified size.
     * @function
     * @param {number} size Buffer size
     * @returns {Buffer} Buffer
     */
    BufferWriter.alloc = util._Buffer_allocUnsafe;

    BufferWriter.writeBytesBuffer = util.Buffer && util.Buffer.prototype instanceof Uint8Array && util.Buffer.prototype.set.name === "set"
        ? function writeBytesBuffer_set(val, buf, pos) {
          buf.set(val, pos); // faster than copy (requires node >= 4 where Buffers extend Uint8Array and set is properly inherited)
          // also works for plain array values
        }
        /* istanbul ignore next */
        : function writeBytesBuffer_copy(val, buf, pos) {
          if (val.copy) // Buffer values
            val.copy(buf, pos, 0, val.length);
          else for (var i = 0; i < val.length;) // plain array values
            buf[pos++] = val[i++];
        };
};


/**
 * @override
 */
BufferWriter.prototype.bytes = function write_bytes_buffer(value) {
    if (util.isString(value))
        value = util._Buffer_from(value, "base64");
    var len = value.length >>> 0;
    this.uint32(len);
    if (len)
        this._push(BufferWriter.writeBytesBuffer, len, value);
    return this;
};

function writeStringBuffer(val, buf, pos) {
    if (val.length < 40) // plain js is faster for short strings (probably due to redundant assertions)
        util.utf8.write(val, buf, pos);
    else if (buf.utf8Write)
        buf.utf8Write(val, pos);
    else
        buf.write(val, pos);
}

/**
 * @override
 */
BufferWriter.prototype.string = function write_string_buffer(value) {
    var len = util.Buffer.byteLength(value);
    this.uint32(len);
    if (len)
        this._push(writeStringBuffer, len, value);
    return this;
};


/**
 * Finishes the write operation.
 * @name BufferWriter#finish
 * @function
 * @returns {Buffer} Finished buffer
 */

BufferWriter._configure();


/***/ }),

/***/ "./node_modules/stream-to-it/source.js":
/*!*********************************************!*\
  !*** ./node_modules/stream-to-it/source.js ***!
  \*********************************************/
/***/ ((module) => {

module.exports = readable => {
  // Node.js stream
  if (readable[Symbol.asyncIterator]) return readable

  // Browser ReadableStream
  if (readable.getReader) {
    return (async function * () {
      const reader = readable.getReader()

      try {
        while (true) {
          const { done, value } = await reader.read()
          if (done) return
          yield value
        }
      } finally {
        reader.releaseLock()
      }
    })()
  }

  throw new Error('unknown stream')
}


/***/ }),

/***/ "./public/app.scss":
/*!*************************!*\
  !*** ./public/app.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./public/app.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_app_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/varint/decode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/decode.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = read

var MSB = 0x80
  , REST = 0x7F

function read(buf, offset) {
  var res    = 0
    , offset = offset || 0
    , shift  = 0
    , counter = offset
    , b
    , l = buf.length

  do {
    if (counter >= l || shift > 49) {
      read.bytes = 0
      throw new RangeError('Could not decode varint')
    }
    b = buf[counter++]
    res += shift < 28
      ? (b & REST) << shift
      : (b & REST) * Math.pow(2, shift)
    shift += 7
  } while (b >= MSB)

  read.bytes = counter - offset

  return res
}


/***/ }),

/***/ "./node_modules/varint/encode.js":
/*!***************************************!*\
  !*** ./node_modules/varint/encode.js ***!
  \***************************************/
/***/ ((module) => {

module.exports = encode

var MSB = 0x80
  , REST = 0x7F
  , MSBALL = ~REST
  , INT = Math.pow(2, 31)

function encode(num, out, offset) {
  if (Number.MAX_SAFE_INTEGER && num > Number.MAX_SAFE_INTEGER) {
    encode.bytes = 0
    throw new RangeError('Could not encode varint')
  }
  out = out || []
  offset = offset || 0
  var oldOffset = offset

  while(num >= INT) {
    out[offset++] = (num & 0xFF) | MSB
    num /= 128
  }
  while(num & MSBALL) {
    out[offset++] = (num & 0xFF) | MSB
    num >>>= 7
  }
  out[offset] = num | 0
  
  encode.bytes = offset - oldOffset + 1
  
  return out
}


/***/ }),

/***/ "./node_modules/varint/index.js":
/*!**************************************!*\
  !*** ./node_modules/varint/index.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = {
    encode: __webpack_require__(/*! ./encode.js */ "./node_modules/varint/encode.js")
  , decode: __webpack_require__(/*! ./decode.js */ "./node_modules/varint/decode.js")
  , encodingLength: __webpack_require__(/*! ./length.js */ "./node_modules/varint/length.js")
}


/***/ }),

/***/ "./node_modules/varint/length.js":
/*!***************************************!*\
  !*** ./node_modules/varint/length.js ***!
  \***************************************/
/***/ ((module) => {


var N1 = Math.pow(2,  7)
var N2 = Math.pow(2, 14)
var N3 = Math.pow(2, 21)
var N4 = Math.pow(2, 28)
var N5 = Math.pow(2, 35)
var N6 = Math.pow(2, 42)
var N7 = Math.pow(2, 49)
var N8 = Math.pow(2, 56)
var N9 = Math.pow(2, 63)

module.exports = function (value) {
  return (
    value < N1 ? 1
  : value < N2 ? 2
  : value < N3 ? 3
  : value < N4 ? 4
  : value < N5 ? 5
  : value < N6 ? 6
  : value < N7 ? 7
  : value < N8 ? 8
  : value < N9 ? 9
  :              10
  )
}


/***/ }),

/***/ "?df0e":
/*!*****************************************************!*\
  !*** ipfs-utils/src/files/glob-source.js (ignored) ***!
  \*****************************************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?714b":
/*!********************************!*\
  !*** electron-fetch (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./node_modules/@ipld/dag-cbor/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@ipld/dag-cbor/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "decode": () => (/* binding */ decode)
/* harmony export */ });
/* harmony import */ var cborg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cborg */ "./node_modules/cborg/esm/cborg.js");
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");


const CID_CBOR_TAG = 42;
function cidEncoder(obj) {
  if (obj.asCID !== obj) {
    return null;
  }
  const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(obj);
  if (!cid) {
    return null;
  }
  const bytes = new Uint8Array(cid.bytes.byteLength + 1);
  bytes.set(cid.bytes, 1);
  return [
    new cborg__WEBPACK_IMPORTED_MODULE_0__.Token(cborg__WEBPACK_IMPORTED_MODULE_0__.Type.tag, CID_CBOR_TAG),
    new cborg__WEBPACK_IMPORTED_MODULE_0__.Token(cborg__WEBPACK_IMPORTED_MODULE_0__.Type.bytes, bytes)
  ];
}
function undefinedEncoder() {
  throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded');
}
function numberEncoder(num) {
  if (Number.isNaN(num)) {
    throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded');
  }
  if (num === Infinity || num === -Infinity) {
    throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded');
  }
  return null;
}
const encodeOptions = {
  float64: true,
  typeEncoders: {
    Object: cidEncoder,
    undefined: undefinedEncoder,
    number: numberEncoder
  }
};
function cidDecoder(bytes) {
  if (bytes[0] !== 0) {
    throw new Error('Invalid CID for CBOR tag 42; expected leading 0x00');
  }
  return multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.decode(bytes.subarray(1));
}
const decodeOptions = {
  allowIndefinite: false,
  coerceUndefinedToNull: true,
  allowNaN: false,
  allowInfinity: false,
  allowBigInt: true,
  strict: true,
  useMaps: false,
  tags: []
};
decodeOptions.tags[CID_CBOR_TAG] = cidDecoder;
const name = 'dag-cbor';
const code = 113;
const encode = node => cborg__WEBPACK_IMPORTED_MODULE_0__.encode(node, encodeOptions);
const decode = data => cborg__WEBPACK_IMPORTED_MODULE_0__.decode(data, decodeOptions);

/***/ }),

/***/ "./node_modules/@ipld/dag-json/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/@ipld/dag-json/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "decode": () => (/* binding */ decode)
/* harmony export */ });
/* harmony import */ var multiformats__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats */ "./node_modules/multiformats/esm/src/index.js");
/* harmony import */ var multiformats_bases_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiformats/bases/base64 */ "./node_modules/multiformats/esm/src/bases/base64.js");
/* harmony import */ var cborg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cborg */ "./node_modules/cborg/esm/cborg.js");
/* harmony import */ var cborg_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cborg/json */ "./node_modules/cborg/esm/lib/json/json.js");




function cidEncoder(obj) {
  if (obj.asCID !== obj) {
    return null;
  }
  const cid = multiformats__WEBPACK_IMPORTED_MODULE_0__.CID.asCID(obj);
  if (!cid) {
    return null;
  }
  const cidString = cid.toString();
  return [
    new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type.map, Infinity, 1),
    new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type.string, '/', 1),
    new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type.string, cidString, cidString.length),
    new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type["break"], undefined, 1)
  ];
}
function bytesEncoder(bytes) {
  const bytesString = multiformats_bases_base64__WEBPACK_IMPORTED_MODULE_1__.base64.encode(bytes).slice(1);
  return [
    new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type.map, Infinity, 1),
    new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type.string, '/', 1),
    new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type.map, Infinity, 1),
    new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type.string, 'bytes', 5),
    new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type.string, bytesString, bytesString.length),
    new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type["break"], undefined, 1),
    new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type["break"], undefined, 1)
  ];
}
function undefinedEncoder() {
  throw new Error('`undefined` is not supported by the IPLD Data Model and cannot be encoded');
}
function numberEncoder(num) {
  if (Number.isNaN(num)) {
    throw new Error('`NaN` is not supported by the IPLD Data Model and cannot be encoded');
  }
  if (num === Infinity || num === -Infinity) {
    throw new Error('`Infinity` and `-Infinity` is not supported by the IPLD Data Model and cannot be encoded');
  }
  return null;
}
const encodeOptions = {
  typeEncoders: {
    Object: cidEncoder,
    Uint8Array: bytesEncoder,
    Buffer: bytesEncoder,
    undefined: undefinedEncoder,
    number: numberEncoder
  }
};
class DagJsonTokenizer extends cborg_json__WEBPACK_IMPORTED_MODULE_3__.Tokenizer {
  constructor(data, options) {
    super(data, options);
    this.tokenBuffer = [];
  }
  done() {
    return this.tokenBuffer.length === 0 && super.done();
  }
  _next() {
    if (this.tokenBuffer.length > 0) {
      return this.tokenBuffer.pop();
    }
    return super.next();
  }
  next() {
    const token = this._next();
    if (token.type === cborg__WEBPACK_IMPORTED_MODULE_2__.Type.map) {
      const keyToken = this._next();
      if (keyToken.type === cborg__WEBPACK_IMPORTED_MODULE_2__.Type.string && keyToken.value === '/') {
        const valueToken = this._next();
        if (valueToken.type === cborg__WEBPACK_IMPORTED_MODULE_2__.Type.string) {
          const breakToken = this._next();
          if (breakToken.type !== cborg__WEBPACK_IMPORTED_MODULE_2__.Type["break"]) {
            throw new Error('Invalid encoded CID form');
          }
          this.tokenBuffer.push(valueToken);
          return new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type.tag, 42, 0);
        }
        if (valueToken.type === cborg__WEBPACK_IMPORTED_MODULE_2__.Type.map) {
          const innerKeyToken = this._next();
          if (innerKeyToken.type === cborg__WEBPACK_IMPORTED_MODULE_2__.Type.string && innerKeyToken.value === 'bytes') {
            const innerValueToken = this._next();
            if (innerValueToken.type === cborg__WEBPACK_IMPORTED_MODULE_2__.Type.string) {
              for (let i = 0; i < 2; i++) {
                const breakToken = this._next();
                if (breakToken.type !== cborg__WEBPACK_IMPORTED_MODULE_2__.Type["break"]) {
                  throw new Error('Invalid encoded Bytes form');
                }
              }
              const bytes = multiformats_bases_base64__WEBPACK_IMPORTED_MODULE_1__.base64.decode(`m${ innerValueToken.value }`);
              return new cborg__WEBPACK_IMPORTED_MODULE_2__.Token(cborg__WEBPACK_IMPORTED_MODULE_2__.Type.bytes, bytes, innerValueToken.value.length);
            }
            this.tokenBuffer.push(innerValueToken);
          }
          this.tokenBuffer.push(innerKeyToken);
        }
        this.tokenBuffer.push(valueToken);
      }
      this.tokenBuffer.push(keyToken);
    }
    return token;
  }
}
const decodeOptions = {
  allowIndefinite: false,
  allowUndefined: false,
  allowNaN: false,
  allowInfinity: false,
  allowBigInt: true,
  strict: true,
  useMaps: false,
  tags: []
};
decodeOptions.tags[42] = multiformats__WEBPACK_IMPORTED_MODULE_0__.CID.parse;
const name = 'dag-json';
const code = 297;
const encode = node => cborg_json__WEBPACK_IMPORTED_MODULE_3__.encode(node, encodeOptions);
const decode = data => {
  const options = Object.assign(decodeOptions, { tokenizer: new DagJsonTokenizer(data, decodeOptions) });
  return cborg_json__WEBPACK_IMPORTED_MODULE_3__.decode(data, options);
};

/***/ }),

/***/ "./node_modules/@ipld/dag-pb/esm/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/esm/src/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "prepare": () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__.prepare),
/* harmony export */   "validate": () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__.validate),
/* harmony export */   "createNode": () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__.createNode),
/* harmony export */   "createLink": () => (/* reexport safe */ _util_js__WEBPACK_IMPORTED_MODULE_3__.createLink)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _pb_decode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pb-decode.js */ "./node_modules/@ipld/dag-pb/esm/src/pb-decode.js");
/* harmony import */ var _pb_encode_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pb-encode.js */ "./node_modules/@ipld/dag-pb/esm/src/pb-encode.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./node_modules/@ipld/dag-pb/esm/src/util.js");




const name = 'dag-pb';
const code = 112;
function encode(node) {
  (0,_util_js__WEBPACK_IMPORTED_MODULE_3__.validate)(node);
  const pbn = {};
  if (node.Links) {
    pbn.Links = node.Links.map(l => {
      const link = {};
      if (l.Hash) {
        link.Hash = l.Hash.bytes;
      }
      if (l.Name !== undefined) {
        link.Name = l.Name;
      }
      if (l.Tsize !== undefined) {
        link.Tsize = l.Tsize;
      }
      return link;
    });
  }
  if (node.Data) {
    pbn.Data = node.Data;
  }
  return (0,_pb_encode_js__WEBPACK_IMPORTED_MODULE_2__.encodeNode)(pbn);
}
function decode(bytes) {
  const pbn = (0,_pb_decode_js__WEBPACK_IMPORTED_MODULE_1__.decodeNode)(bytes);
  const node = {};
  if (pbn.Data) {
    node.Data = pbn.Data;
  }
  if (pbn.Links) {
    node.Links = pbn.Links.map(l => {
      const link = {};
      try {
        link.Hash = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.decode(l.Hash);
      } catch (e) {
      }
      if (!link.Hash) {
        throw new Error('Invalid Hash field found in link, expected CID');
      }
      if (l.Name !== undefined) {
        link.Name = l.Name;
      }
      if (l.Tsize !== undefined) {
        link.Tsize = l.Tsize;
      }
      return link;
    });
  }
  return node;
}


/***/ }),

/***/ "./node_modules/@ipld/dag-pb/esm/src/pb-decode.js":
/*!********************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/esm/src/pb-decode.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeNode": () => (/* binding */ decodeNode)
/* harmony export */ });
const textDecoder = new TextDecoder();
function decodeVarint(bytes, offset) {
  let v = 0;
  for (let shift = 0;; shift += 7) {
    if (shift >= 64) {
      throw new Error('protobuf: varint overflow');
    }
    if (offset >= bytes.length) {
      throw new Error('protobuf: unexpected end of data');
    }
    const b = bytes[offset++];
    v += shift < 28 ? (b & 127) << shift : (b & 127) * 2 ** shift;
    if (b < 128) {
      break;
    }
  }
  return [
    v,
    offset
  ];
}
function decodeBytes(bytes, offset) {
  let byteLen;
  [byteLen, offset] = decodeVarint(bytes, offset);
  const postOffset = offset + byteLen;
  if (byteLen < 0 || postOffset < 0) {
    throw new Error('protobuf: invalid length');
  }
  if (postOffset > bytes.length) {
    throw new Error('protobuf: unexpected end of data');
  }
  return [
    bytes.subarray(offset, postOffset),
    postOffset
  ];
}
function decodeKey(bytes, index) {
  let wire;
  [wire, index] = decodeVarint(bytes, index);
  return [
    wire & 7,
    wire >> 3,
    index
  ];
}
function decodeLink(bytes) {
  const link = {};
  const l = bytes.length;
  let index = 0;
  while (index < l) {
    let wireType, fieldNum;
    [wireType, fieldNum, index] = decodeKey(bytes, index);
    if (fieldNum === 1) {
      if (link.Hash) {
        throw new Error('protobuf: (PBLink) duplicate Hash section');
      }
      if (wireType !== 2) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${ wireType }) for Hash`);
      }
      if (link.Name !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Name before Hash');
      }
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Tsize before Hash');
      }
      ;
      [link.Hash, index] = decodeBytes(bytes, index);
    } else if (fieldNum === 2) {
      if (link.Name !== undefined) {
        throw new Error('protobuf: (PBLink) duplicate Name section');
      }
      if (wireType !== 2) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${ wireType }) for Name`);
      }
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) invalid order, found Tsize before Name');
      }
      let byts;
      [byts, index] = decodeBytes(bytes, index);
      link.Name = textDecoder.decode(byts);
    } else if (fieldNum === 3) {
      if (link.Tsize !== undefined) {
        throw new Error('protobuf: (PBLink) duplicate Tsize section');
      }
      if (wireType !== 0) {
        throw new Error(`protobuf: (PBLink) wrong wireType (${ wireType }) for Tsize`);
      }
      ;
      [link.Tsize, index] = decodeVarint(bytes, index);
    } else {
      throw new Error(`protobuf: (PBLink) invalid fieldNumber, expected 1, 2 or 3, got ${ fieldNum }`);
    }
  }
  if (index > l) {
    throw new Error('protobuf: (PBLink) unexpected end of data');
  }
  return link;
}
function decodeNode(bytes) {
  const l = bytes.length;
  let index = 0;
  let links;
  let linksBeforeData = false;
  let data;
  while (index < l) {
    let wireType, fieldNum;
    [wireType, fieldNum, index] = decodeKey(bytes, index);
    if (wireType !== 2) {
      throw new Error(`protobuf: (PBNode) invalid wireType, expected 2, got ${ wireType }`);
    }
    if (fieldNum === 1) {
      if (data) {
        throw new Error('protobuf: (PBNode) duplicate Data section');
      }
      ;
      [data, index] = decodeBytes(bytes, index);
      if (links) {
        linksBeforeData = true;
      }
    } else if (fieldNum === 2) {
      if (linksBeforeData) {
        throw new Error('protobuf: (PBNode) duplicate Links section');
      } else if (!links) {
        links = [];
      }
      let byts;
      [byts, index] = decodeBytes(bytes, index);
      links.push(decodeLink(byts));
    } else {
      throw new Error(`protobuf: (PBNode) invalid fieldNumber, expected 1 or 2, got ${ fieldNum }`);
    }
  }
  if (index > l) {
    throw new Error('protobuf: (PBNode) unexpected end of data');
  }
  const node = {};
  if (data) {
    node.Data = data;
  }
  node.Links = links || [];
  return node;
}

/***/ }),

/***/ "./node_modules/@ipld/dag-pb/esm/src/pb-encode.js":
/*!********************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/esm/src/pb-encode.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeNode": () => (/* binding */ encodeNode)
/* harmony export */ });
const textEncoder = new TextEncoder();
const maxInt32 = 2 ** 32;
const maxUInt32 = 2 ** 31;
function encodeLink(link, bytes) {
  let i = bytes.length;
  if (typeof link.Tsize === 'number') {
    if (link.Tsize < 0) {
      throw new Error('Tsize cannot be negative');
    }
    if (!Number.isSafeInteger(link.Tsize)) {
      throw new Error('Tsize too large for encoding');
    }
    i = encodeVarint(bytes, i, link.Tsize) - 1;
    bytes[i] = 24;
  }
  if (typeof link.Name === 'string') {
    const nameBytes = textEncoder.encode(link.Name);
    i -= nameBytes.length;
    bytes.set(nameBytes, i);
    i = encodeVarint(bytes, i, nameBytes.length) - 1;
    bytes[i] = 18;
  }
  if (link.Hash) {
    i -= link.Hash.length;
    bytes.set(link.Hash, i);
    i = encodeVarint(bytes, i, link.Hash.length) - 1;
    bytes[i] = 10;
  }
  return bytes.length - i;
}
function encodeNode(node) {
  const size = sizeNode(node);
  const bytes = new Uint8Array(size);
  let i = size;
  if (node.Data) {
    i -= node.Data.length;
    bytes.set(node.Data, i);
    i = encodeVarint(bytes, i, node.Data.length) - 1;
    bytes[i] = 10;
  }
  if (node.Links) {
    for (let index = node.Links.length - 1; index >= 0; index--) {
      const size = encodeLink(node.Links[index], bytes.subarray(0, i));
      i -= size;
      i = encodeVarint(bytes, i, size) - 1;
      bytes[i] = 18;
    }
  }
  return bytes;
}
function sizeLink(link) {
  let n = 0;
  if (link.Hash) {
    const l = link.Hash.length;
    n += 1 + l + sov(l);
  }
  if (typeof link.Name === 'string') {
    const l = textEncoder.encode(link.Name).length;
    n += 1 + l + sov(l);
  }
  if (typeof link.Tsize === 'number') {
    n += 1 + sov(link.Tsize);
  }
  return n;
}
function sizeNode(node) {
  let n = 0;
  if (node.Data) {
    const l = node.Data.length;
    n += 1 + l + sov(l);
  }
  if (node.Links) {
    for (const link of node.Links) {
      const l = sizeLink(link);
      n += 1 + l + sov(l);
    }
  }
  return n;
}
function encodeVarint(bytes, offset, v) {
  offset -= sov(v);
  const base = offset;
  while (v >= maxUInt32) {
    bytes[offset++] = v & 127 | 128;
    v /= 128;
  }
  while (v >= 128) {
    bytes[offset++] = v & 127 | 128;
    v >>>= 7;
  }
  bytes[offset] = v;
  return base;
}
function sov(x) {
  if (x % 2 === 0) {
    x++;
  }
  return Math.floor((len64(x) + 6) / 7);
}
function len64(x) {
  let n = 0;
  if (x >= maxInt32) {
    x = Math.floor(x / maxInt32);
    n = 32;
  }
  if (x >= 1 << 16) {
    x >>>= 16;
    n += 16;
  }
  if (x >= 1 << 8) {
    x >>>= 8;
    n += 8;
  }
  return n + len8tab[x];
}
const len8tab = [
  0,
  1,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  6,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  7,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8,
  8
];

/***/ }),

/***/ "./node_modules/@ipld/dag-pb/esm/src/util.js":
/*!***************************************************!*\
  !*** ./node_modules/@ipld/dag-pb/esm/src/util.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "prepare": () => (/* binding */ prepare),
/* harmony export */   "validate": () => (/* binding */ validate),
/* harmony export */   "createNode": () => (/* binding */ createNode),
/* harmony export */   "createLink": () => (/* binding */ createLink)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");

const pbNodeProperties = [
  'Data',
  'Links'
];
const pbLinkProperties = [
  'Hash',
  'Name',
  'Tsize'
];
const textEncoder = new TextEncoder();
function linkComparator(a, b) {
  if (a === b) {
    return 0;
  }
  const abuf = a.Name ? textEncoder.encode(a.Name) : [];
  const bbuf = b.Name ? textEncoder.encode(b.Name) : [];
  let x = abuf.length;
  let y = bbuf.length;
  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (abuf[i] !== bbuf[i]) {
      x = abuf[i];
      y = bbuf[i];
      break;
    }
  }
  return x < y ? -1 : y < x ? 1 : 0;
}
function hasOnlyProperties(node, properties) {
  return !Object.keys(node).some(p => !properties.includes(p));
}
function asLink(link) {
  if (typeof link.asCID === 'object') {
    const Hash = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.asCID(link);
    if (!Hash) {
      throw new TypeError('Invalid DAG-PB form');
    }
    return { Hash };
  }
  if (typeof link !== 'object' || Array.isArray(link)) {
    throw new TypeError('Invalid DAG-PB form');
  }
  const pbl = {};
  if (link.Hash) {
    let cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.asCID(link.Hash);
    try {
      if (!cid) {
        if (typeof link.Hash === 'string') {
          cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(link.Hash);
        } else if (link.Hash instanceof Uint8Array) {
          cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.decode(link.Hash);
        }
      }
    } catch (e) {
      throw new TypeError(`Invalid DAG-PB form: ${ e.message }`);
    }
    if (cid) {
      pbl.Hash = cid;
    }
  }
  if (!pbl.Hash) {
    throw new TypeError('Invalid DAG-PB form');
  }
  if (typeof link.Name === 'string') {
    pbl.Name = link.Name;
  }
  if (typeof link.Tsize === 'number') {
    pbl.Tsize = link.Tsize;
  }
  return pbl;
}
function prepare(node) {
  if (node instanceof Uint8Array || typeof node === 'string') {
    node = { Data: node };
  }
  if (typeof node !== 'object' || Array.isArray(node)) {
    throw new TypeError('Invalid DAG-PB form');
  }
  const pbn = {};
  if (node.Data !== undefined) {
    if (typeof node.Data === 'string') {
      pbn.Data = textEncoder.encode(node.Data);
    } else if (node.Data instanceof Uint8Array) {
      pbn.Data = node.Data;
    } else {
      throw new TypeError('Invalid DAG-PB form');
    }
  }
  if (node.Links !== undefined) {
    if (Array.isArray(node.Links)) {
      pbn.Links = node.Links.map(asLink);
      pbn.Links.sort(linkComparator);
    } else {
      throw new TypeError('Invalid DAG-PB form');
    }
  } else {
    pbn.Links = [];
  }
  return pbn;
}
function validate(node) {
  if (!node || typeof node !== 'object' || Array.isArray(node)) {
    throw new TypeError('Invalid DAG-PB form');
  }
  if (!hasOnlyProperties(node, pbNodeProperties)) {
    throw new TypeError('Invalid DAG-PB form (extraneous properties)');
  }
  if (node.Data !== undefined && !(node.Data instanceof Uint8Array)) {
    throw new TypeError('Invalid DAG-PB form (Data must be a Uint8Array)');
  }
  if (!Array.isArray(node.Links)) {
    throw new TypeError('Invalid DAG-PB form (Links must be an array)');
  }
  for (let i = 0; i < node.Links.length; i++) {
    const link = node.Links[i];
    if (!link || typeof link !== 'object' || Array.isArray(link)) {
      throw new TypeError('Invalid DAG-PB form (bad link object)');
    }
    if (!hasOnlyProperties(link, pbLinkProperties)) {
      throw new TypeError('Invalid DAG-PB form (extraneous properties on link object)');
    }
    if (!link.Hash) {
      throw new TypeError('Invalid DAG-PB form (link must have a Hash)');
    }
    if (link.Hash.asCID !== link.Hash) {
      throw new TypeError('Invalid DAG-PB form (link Hash must be a CID)');
    }
    if (link.Name !== undefined && typeof link.Name !== 'string') {
      throw new TypeError('Invalid DAG-PB form (link Name must be a string)');
    }
    if (link.Tsize !== undefined && (typeof link.Tsize !== 'number' || link.Tsize % 1 !== 0)) {
      throw new TypeError('Invalid DAG-PB form (link Tsize must be an integer)');
    }
    if (i > 0 && linkComparator(link, node.Links[i - 1]) === -1) {
      throw new TypeError('Invalid DAG-PB form (links must be sorted by Name bytes)');
    }
  }
}
function createNode(data, links = []) {
  return prepare({
    Data: data,
    Links: links
  });
}
function createLink(name, size, cid) {
  return asLink({
    Hash: cid,
    Name: name,
    Tsize: size
  });
}

/***/ }),

/***/ "./node_modules/cborg/esm/cborg.js":
/*!*****************************************!*\
  !*** ./node_modules/cborg/esm/cborg.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* reexport safe */ _lib_decode_js__WEBPACK_IMPORTED_MODULE_1__.decode),
/* harmony export */   "encode": () => (/* reexport safe */ _lib_encode_js__WEBPACK_IMPORTED_MODULE_0__.encode),
/* harmony export */   "Token": () => (/* reexport safe */ _lib_token_js__WEBPACK_IMPORTED_MODULE_2__.Token),
/* harmony export */   "Type": () => (/* reexport safe */ _lib_token_js__WEBPACK_IMPORTED_MODULE_2__.Type)
/* harmony export */ });
/* harmony import */ var _lib_encode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/encode.js */ "./node_modules/cborg/esm/lib/encode.js");
/* harmony import */ var _lib_decode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/decode.js */ "./node_modules/cborg/esm/lib/decode.js");
/* harmony import */ var _lib_token_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/token.js */ "./node_modules/cborg/esm/lib/token.js");





/***/ }),

/***/ "./node_modules/cborg/esm/lib/0uint.js":
/*!*********************************************!*\
  !*** ./node_modules/cborg/esm/lib/0uint.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uintBoundaries": () => (/* binding */ uintBoundaries),
/* harmony export */   "readUint8": () => (/* binding */ readUint8),
/* harmony export */   "readUint16": () => (/* binding */ readUint16),
/* harmony export */   "readUint32": () => (/* binding */ readUint32),
/* harmony export */   "readUint64": () => (/* binding */ readUint64),
/* harmony export */   "decodeUint8": () => (/* binding */ decodeUint8),
/* harmony export */   "decodeUint16": () => (/* binding */ decodeUint16),
/* harmony export */   "decodeUint32": () => (/* binding */ decodeUint32),
/* harmony export */   "decodeUint64": () => (/* binding */ decodeUint64),
/* harmony export */   "encodeUint": () => (/* binding */ encodeUint),
/* harmony export */   "encodeUintValue": () => (/* binding */ encodeUintValue)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/esm/lib/common.js");


const uintBoundaries = [
  24,
  256,
  65536,
  4294967296,
  BigInt('18446744073709551616')
];
function readUint8(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, offset, 1);
  const value = data[offset];
  if (options.strict === true && value < uintBoundaries[0]) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint16(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, offset, 2);
  const value = data[offset] << 8 | data[offset + 1];
  if (options.strict === true && value < uintBoundaries[1]) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint32(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, offset, 4);
  const value = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
  if (options.strict === true && value < uintBoundaries[2]) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } integer encoded in more bytes than necessary (strict decode)`);
  }
  return value;
}
function readUint64(data, offset, options) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, offset, 8);
  const hi = data[offset] * 16777216 + (data[offset + 1] << 16) + (data[offset + 2] << 8) + data[offset + 3];
  const lo = data[offset + 4] * 16777216 + (data[offset + 5] << 16) + (data[offset + 6] << 8) + data[offset + 7];
  const value = (BigInt(hi) << BigInt(32)) + BigInt(lo);
  if (options.strict === true && value < uintBoundaries[3]) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } integer encoded in more bytes than necessary (strict decode)`);
  }
  if (value <= Number.MAX_SAFE_INTEGER) {
    return Number(value);
  }
  if (options.allowBigInt === true) {
    return value;
  }
  throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } integers outside of the safe integer range are not supported`);
}
function decodeUint8(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint, readUint8(data, pos + 1, options), 2);
}
function decodeUint16(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint, readUint16(data, pos + 1, options), 3);
}
function decodeUint32(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint, readUint32(data, pos + 1, options), 5);
}
function decodeUint64(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint, readUint64(data, pos + 1, options), 9);
}
function encodeUint(buf, token) {
  return encodeUintValue(buf, 0, token.value);
}
function encodeUintValue(buf, major, uint) {
  if (uint < uintBoundaries[0]) {
    const nuint = Number(uint);
    buf.push([major | nuint]);
  } else if (uint < uintBoundaries[1]) {
    const nuint = Number(uint);
    buf.push([
      major | 24,
      nuint
    ]);
  } else if (uint < uintBoundaries[2]) {
    const nuint = Number(uint);
    buf.push([
      major | 25,
      nuint >>> 8,
      nuint & 255
    ]);
  } else if (uint < uintBoundaries[3]) {
    const nuint = Number(uint);
    buf.push([
      major | 26,
      nuint >>> 24 & 255,
      nuint >>> 16 & 255,
      nuint >>> 8 & 255,
      nuint & 255
    ]);
  } else {
    const buint = BigInt(uint);
    if (buint < uintBoundaries[4]) {
      const set = [
        major | 27,
        0,
        0,
        0,
        0,
        0,
        0,
        0
      ];
      let lo = Number(buint & BigInt(4294967295));
      let hi = Number(buint >> BigInt(32) & BigInt(4294967295));
      set[8] = lo & 255;
      lo = lo >> 8;
      set[7] = lo & 255;
      lo = lo >> 8;
      set[6] = lo & 255;
      lo = lo >> 8;
      set[5] = lo & 255;
      set[4] = hi & 255;
      hi = hi >> 8;
      set[3] = hi & 255;
      hi = hi >> 8;
      set[2] = hi & 255;
      hi = hi >> 8;
      set[1] = hi & 255;
      buf.push(set);
    } else {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } encountered BigInt larger than allowable range`);
    }
  }
}
encodeUint.encodedSize = function encodedSize(token) {
  return encodeUintValue.encodedSize(token.value);
};
encodeUintValue.encodedSize = function encodedSize(uint) {
  if (uint < uintBoundaries[0]) {
    return 1;
  }
  if (uint < uintBoundaries[1]) {
    return 2;
  }
  if (uint < uintBoundaries[2]) {
    return 3;
  }
  if (uint < uintBoundaries[3]) {
    return 5;
  }
  return 9;
};
encodeUint.compareTokens = function compareTokens(tok1, tok2) {
  return tok1.value < tok2.value ? -1 : tok1.value > tok2.value ? 1 : 0;
};

/***/ }),

/***/ "./node_modules/cborg/esm/lib/1negint.js":
/*!***********************************************!*\
  !*** ./node_modules/cborg/esm/lib/1negint.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeNegint8": () => (/* binding */ decodeNegint8),
/* harmony export */   "decodeNegint16": () => (/* binding */ decodeNegint16),
/* harmony export */   "decodeNegint32": () => (/* binding */ decodeNegint32),
/* harmony export */   "decodeNegint64": () => (/* binding */ decodeNegint64),
/* harmony export */   "encodeNegint": () => (/* binding */ encodeNegint)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/esm/lib/0uint.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/esm/lib/common.js");



function decodeNegint8(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, -1 - _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint8(data, pos + 1, options), 2);
}
function decodeNegint16(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, -1 - _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint16(data, pos + 1, options), 3);
}
function decodeNegint32(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, -1 - _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint32(data, pos + 1, options), 5);
}
const neg1b = BigInt(-1);
const pos1b = BigInt(1);
function decodeNegint64(data, pos, _minor, options) {
  const int = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint64(data, pos + 1, options);
  if (typeof int !== 'bigint') {
    const value = -1 - int;
    if (value >= Number.MIN_SAFE_INTEGER) {
      return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, value, 9);
    }
  }
  if (options.allowBigInt !== true) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__.decodeErrPrefix } integers outside of the safe integer range are not supported`);
  }
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, neg1b - BigInt(int), 9);
}
function encodeNegint(buf, token) {
  const negint = token.value;
  const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUintValue(buf, token.type.majorEncoded, unsigned);
}
encodeNegint.encodedSize = function encodedSize(token) {
  const negint = token.value;
  const unsigned = typeof negint === 'bigint' ? negint * neg1b - pos1b : negint * -1 - 1;
  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__.uintBoundaries[0]) {
    return 1;
  }
  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__.uintBoundaries[1]) {
    return 2;
  }
  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__.uintBoundaries[2]) {
    return 3;
  }
  if (unsigned < _0uint_js__WEBPACK_IMPORTED_MODULE_1__.uintBoundaries[3]) {
    return 5;
  }
  return 9;
};
encodeNegint.compareTokens = function compareTokens(tok1, tok2) {
  return tok1.value < tok2.value ? 1 : tok1.value > tok2.value ? -1 : 0;
};

/***/ }),

/***/ "./node_modules/cborg/esm/lib/2bytes.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/2bytes.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeBytesCompact": () => (/* binding */ decodeBytesCompact),
/* harmony export */   "decodeBytes8": () => (/* binding */ decodeBytes8),
/* harmony export */   "decodeBytes16": () => (/* binding */ decodeBytes16),
/* harmony export */   "decodeBytes32": () => (/* binding */ decodeBytes32),
/* harmony export */   "decodeBytes64": () => (/* binding */ decodeBytes64),
/* harmony export */   "encodeBytes": () => (/* binding */ encodeBytes),
/* harmony export */   "compareBytes": () => (/* binding */ compareBytes)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/esm/lib/common.js");
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/esm/lib/0uint.js");
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./byte-utils.js */ "./node_modules/cborg/esm/lib/byte-utils.js");




function toToken(data, pos, prefix, length) {
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, pos, prefix + length);
  const buf = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_3__.slice)(data, pos + prefix, pos + prefix + length);
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.bytes, buf, prefix + length);
}
function decodeBytesCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeBytes8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint8(data, pos + 1, options));
}
function decodeBytes16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint16(data, pos + 1, options));
}
function decodeBytes32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint32(data, pos + 1, options));
}
function decodeBytes64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } 64-bit integer bytes lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
function tokenBytes(token) {
  if (token.encodedBytes === undefined) {
    token.encodedBytes = token.type === _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.string ? (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_3__.fromString)(token.value) : token.value;
  }
  return token.encodedBytes;
}
function encodeBytes(buf, token) {
  const bytes = tokenBytes(token);
  _0uint_js__WEBPACK_IMPORTED_MODULE_2__.encodeUintValue(buf, token.type.majorEncoded, bytes.length);
  buf.push(bytes);
}
encodeBytes.encodedSize = function encodedSize(token) {
  const bytes = tokenBytes(token);
  return _0uint_js__WEBPACK_IMPORTED_MODULE_2__.encodeUintValue.encodedSize(bytes.length) + bytes.length;
};
encodeBytes.compareTokens = function compareTokens(tok1, tok2) {
  return compareBytes(tokenBytes(tok1), tokenBytes(tok2));
};
function compareBytes(b1, b2) {
  return b1.length < b2.length ? -1 : b1.length > b2.length ? 1 : (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_3__.compare)(b1, b2);
}

/***/ }),

/***/ "./node_modules/cborg/esm/lib/3string.js":
/*!***********************************************!*\
  !*** ./node_modules/cborg/esm/lib/3string.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeStringCompact": () => (/* binding */ decodeStringCompact),
/* harmony export */   "decodeString8": () => (/* binding */ decodeString8),
/* harmony export */   "decodeString16": () => (/* binding */ decodeString16),
/* harmony export */   "decodeString32": () => (/* binding */ decodeString32),
/* harmony export */   "decodeString64": () => (/* binding */ decodeString64),
/* harmony export */   "encodeString": () => (/* binding */ encodeString)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/esm/lib/common.js");
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/esm/lib/0uint.js");
/* harmony import */ var _2bytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./2bytes.js */ "./node_modules/cborg/esm/lib/2bytes.js");
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./byte-utils.js */ "./node_modules/cborg/esm/lib/byte-utils.js");





function toToken(data, pos, prefix, length) {
  const totLength = prefix + length;
  (0,_common_js__WEBPACK_IMPORTED_MODULE_1__.assertEnoughData)(data, pos, totLength);
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.string, (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_4__.toString)(data, pos + prefix, pos + totLength), totLength);
}
function decodeStringCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeString8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint8(data, pos + 1, options));
}
function decodeString16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint16(data, pos + 1, options));
}
function decodeString32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint32(data, pos + 1, options));
}
function decodeString64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_2__.readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } 64-bit integer string lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
const encodeString = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.encodeBytes;

/***/ }),

/***/ "./node_modules/cborg/esm/lib/4array.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/4array.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeArrayCompact": () => (/* binding */ decodeArrayCompact),
/* harmony export */   "decodeArray8": () => (/* binding */ decodeArray8),
/* harmony export */   "decodeArray16": () => (/* binding */ decodeArray16),
/* harmony export */   "decodeArray32": () => (/* binding */ decodeArray32),
/* harmony export */   "decodeArray64": () => (/* binding */ decodeArray64),
/* harmony export */   "decodeArrayIndefinite": () => (/* binding */ decodeArrayIndefinite),
/* harmony export */   "encodeArray": () => (/* binding */ encodeArray)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/esm/lib/0uint.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/esm/lib/common.js");



function toToken(_data, _pos, prefix, length) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array, length, prefix);
}
function decodeArrayCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeArray8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint8(data, pos + 1, options));
}
function decodeArray16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint16(data, pos + 1, options));
}
function decodeArray32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint32(data, pos + 1, options));
}
function decodeArray64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__.decodeErrPrefix } 64-bit integer array lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
function decodeArrayIndefinite(data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__.decodeErrPrefix } indefinite length items not allowed`);
  }
  return toToken(data, pos, 1, Infinity);
}
function encodeArray(buf, token) {
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUintValue(buf, _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array.majorEncoded, token.value);
}
encodeArray.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUint.compareTokens;

/***/ }),

/***/ "./node_modules/cborg/esm/lib/5map.js":
/*!********************************************!*\
  !*** ./node_modules/cborg/esm/lib/5map.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeMapCompact": () => (/* binding */ decodeMapCompact),
/* harmony export */   "decodeMap8": () => (/* binding */ decodeMap8),
/* harmony export */   "decodeMap16": () => (/* binding */ decodeMap16),
/* harmony export */   "decodeMap32": () => (/* binding */ decodeMap32),
/* harmony export */   "decodeMap64": () => (/* binding */ decodeMap64),
/* harmony export */   "decodeMapIndefinite": () => (/* binding */ decodeMapIndefinite),
/* harmony export */   "encodeMap": () => (/* binding */ encodeMap)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/esm/lib/0uint.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/esm/lib/common.js");



function toToken(_data, _pos, prefix, length) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map, length, prefix);
}
function decodeMapCompact(data, pos, minor, _options) {
  return toToken(data, pos, 1, minor);
}
function decodeMap8(data, pos, _minor, options) {
  return toToken(data, pos, 2, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint8(data, pos + 1, options));
}
function decodeMap16(data, pos, _minor, options) {
  return toToken(data, pos, 3, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint16(data, pos + 1, options));
}
function decodeMap32(data, pos, _minor, options) {
  return toToken(data, pos, 5, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint32(data, pos + 1, options));
}
function decodeMap64(data, pos, _minor, options) {
  const l = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint64(data, pos + 1, options);
  if (typeof l === 'bigint') {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__.decodeErrPrefix } 64-bit integer map lengths not supported`);
  }
  return toToken(data, pos, 9, l);
}
function decodeMapIndefinite(data, pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__.decodeErrPrefix } indefinite length items not allowed`);
  }
  return toToken(data, pos, 1, Infinity);
}
function encodeMap(buf, token) {
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUintValue(buf, _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map.majorEncoded, token.value);
}
encodeMap.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUint.compareTokens;

/***/ }),

/***/ "./node_modules/cborg/esm/lib/6tag.js":
/*!********************************************!*\
  !*** ./node_modules/cborg/esm/lib/6tag.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeTagCompact": () => (/* binding */ decodeTagCompact),
/* harmony export */   "decodeTag8": () => (/* binding */ decodeTag8),
/* harmony export */   "decodeTag16": () => (/* binding */ decodeTag16),
/* harmony export */   "decodeTag32": () => (/* binding */ decodeTag32),
/* harmony export */   "decodeTag64": () => (/* binding */ decodeTag64),
/* harmony export */   "encodeTag": () => (/* binding */ encodeTag)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/esm/lib/0uint.js");


function decodeTagCompact(_data, _pos, minor, _options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag, minor, 1);
}
function decodeTag8(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint8(data, pos + 1, options), 2);
}
function decodeTag16(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint16(data, pos + 1, options), 3);
}
function decodeTag32(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint32(data, pos + 1, options), 5);
}
function decodeTag64(data, pos, _minor, options) {
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag, _0uint_js__WEBPACK_IMPORTED_MODULE_1__.readUint64(data, pos + 1, options), 9);
}
function encodeTag(buf, token) {
  _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUintValue(buf, _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag.majorEncoded, token.value);
}
encodeTag.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.encodeUint.compareTokens;

/***/ }),

/***/ "./node_modules/cborg/esm/lib/7float.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/7float.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeUndefined": () => (/* binding */ decodeUndefined),
/* harmony export */   "decodeBreak": () => (/* binding */ decodeBreak),
/* harmony export */   "decodeFloat16": () => (/* binding */ decodeFloat16),
/* harmony export */   "decodeFloat32": () => (/* binding */ decodeFloat32),
/* harmony export */   "decodeFloat64": () => (/* binding */ decodeFloat64),
/* harmony export */   "encodeFloat": () => (/* binding */ encodeFloat)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/esm/lib/common.js");
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/esm/lib/0uint.js");



const MINOR_FALSE = 20;
const MINOR_TRUE = 21;
const MINOR_NULL = 22;
const MINOR_UNDEFINED = 23;
function decodeUndefined(_data, _pos, _minor, options) {
  if (options.allowUndefined === false) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } undefined values are not supported`);
  } else if (options.coerceUndefinedToNull === true) {
    return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type["null"], null, 1);
  }
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.undefined, undefined, 1);
}
function decodeBreak(_data, _pos, _minor, options) {
  if (options.allowIndefinite === false) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } indefinite length items not allowed`);
  }
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type["break"], undefined, 1);
}
function createToken(value, bytes, options) {
  if (options) {
    if (options.allowNaN === false && Number.isNaN(value)) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } NaN values are not supported`);
    }
    if (options.allowInfinity === false && (value === Infinity || value === -Infinity)) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } Infinity values are not supported`);
    }
  }
  return new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.float, value, bytes);
}
function decodeFloat16(data, pos, _minor, options) {
  return createToken(readFloat16(data, pos + 1), 3, options);
}
function decodeFloat32(data, pos, _minor, options) {
  return createToken(readFloat32(data, pos + 1), 5, options);
}
function decodeFloat64(data, pos, _minor, options) {
  return createToken(readFloat64(data, pos + 1), 9, options);
}
function encodeFloat(buf, token, options) {
  const float = token.value;
  if (float === false) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.float.majorEncoded | MINOR_FALSE]);
  } else if (float === true) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.float.majorEncoded | MINOR_TRUE]);
  } else if (float === null) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.float.majorEncoded | MINOR_NULL]);
  } else if (float === undefined) {
    buf.push([_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.float.majorEncoded | MINOR_UNDEFINED]);
  } else {
    let decoded;
    let success = false;
    if (!options || options.float64 !== true) {
      encodeFloat16(float);
      decoded = readFloat16(ui8a, 1);
      if (float === decoded || Number.isNaN(float)) {
        ui8a[0] = 249;
        buf.push(ui8a.slice(0, 3));
        success = true;
      } else {
        encodeFloat32(float);
        decoded = readFloat32(ui8a, 1);
        if (float === decoded) {
          ui8a[0] = 250;
          buf.push(ui8a.slice(0, 5));
          success = true;
        }
      }
    }
    if (!success) {
      encodeFloat64(float);
      decoded = readFloat64(ui8a, 1);
      ui8a[0] = 251;
      buf.push(ui8a.slice(0, 9));
    }
  }
}
encodeFloat.encodedSize = function encodedSize(token, options) {
  const float = token.value;
  if (float === false || float === true || float === null || float === undefined) {
    return 1;
  }
  let decoded;
  if (!options || options.float64 !== true) {
    encodeFloat16(float);
    decoded = readFloat16(ui8a, 1);
    if (float === decoded || Number.isNaN(float)) {
      return 3;
    }
    encodeFloat32(float);
    decoded = readFloat32(ui8a, 1);
    if (float === decoded) {
      return 5;
    }
  }
  return 9;
};
const buffer = new ArrayBuffer(9);
const dataView = new DataView(buffer, 1);
const ui8a = new Uint8Array(buffer, 0);
function encodeFloat16(inp) {
  if (inp === Infinity) {
    dataView.setUint16(0, 31744, false);
  } else if (inp === -Infinity) {
    dataView.setUint16(0, 64512, false);
  } else if (Number.isNaN(inp)) {
    dataView.setUint16(0, 32256, false);
  } else {
    dataView.setFloat32(0, inp);
    const valu32 = dataView.getUint32(0);
    const exponent = (valu32 & 2139095040) >> 23;
    const mantissa = valu32 & 8388607;
    if (exponent === 255) {
      dataView.setUint16(0, 31744, false);
    } else if (exponent === 0) {
      dataView.setUint16(0, (inp & 2147483648) >> 16 | mantissa >> 13, false);
    } else {
      const logicalExponent = exponent - 127;
      if (logicalExponent < -24) {
        dataView.setUint16(0, 0);
      } else if (logicalExponent < -14) {
        dataView.setUint16(0, (valu32 & 2147483648) >> 16 | 1 << 24 + logicalExponent, false);
      } else {
        dataView.setUint16(0, (valu32 & 2147483648) >> 16 | logicalExponent + 15 << 10 | mantissa >> 13, false);
      }
    }
  }
}
function readFloat16(ui8a, pos) {
  if (ui8a.length - pos < 2) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } not enough data for float16`);
  }
  const half = (ui8a[pos] << 8) + ui8a[pos + 1];
  if (half === 31744) {
    return Infinity;
  }
  if (half === 64512) {
    return -Infinity;
  }
  if (half === 32256) {
    return NaN;
  }
  const exp = half >> 10 & 31;
  const mant = half & 1023;
  let val;
  if (exp === 0) {
    val = mant * 2 ** -24;
  } else if (exp !== 31) {
    val = (mant + 1024) * 2 ** (exp - 25);
  } else {
    val = mant === 0 ? Infinity : NaN;
  }
  return half & 32768 ? -val : val;
}
function encodeFloat32(inp) {
  dataView.setFloat32(0, inp, false);
}
function readFloat32(ui8a, pos) {
  if (ui8a.length - pos < 4) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } not enough data for float32`);
  }
  const offset = (ui8a.byteOffset || 0) + pos;
  return new DataView(ui8a.buffer, offset, 4).getFloat32(0, false);
}
function encodeFloat64(inp) {
  dataView.setFloat64(0, inp, false);
}
function readFloat64(ui8a, pos) {
  if (ui8a.length - pos < 8) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_1__.decodeErrPrefix } not enough data for float64`);
  }
  const offset = (ui8a.byteOffset || 0) + pos;
  return new DataView(ui8a.buffer, offset, 8).getFloat64(0, false);
}
encodeFloat.compareTokens = _0uint_js__WEBPACK_IMPORTED_MODULE_2__.encodeUint.compareTokens;

/***/ }),

/***/ "./node_modules/cborg/esm/lib/bl.js":
/*!******************************************!*\
  !*** ./node_modules/cborg/esm/lib/bl.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bl": () => (/* binding */ Bl)
/* harmony export */ });
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./byte-utils.js */ "./node_modules/cborg/esm/lib/byte-utils.js");

const defaultChunkSize = 256;
class Bl {
  constructor(chunkSize = defaultChunkSize) {
    this.chunkSize = chunkSize;
    this.cursor = 0;
    this.maxCursor = -1;
    this.chunks = [];
    this._initReuseChunk = null;
  }
  reset() {
    this.chunks = [];
    this.cursor = 0;
    this.maxCursor = -1;
    if (this._initReuseChunk !== null) {
      this.chunks.push(this._initReuseChunk);
      this.maxCursor = this._initReuseChunk.length - 1;
    }
  }
  push(bytes) {
    let topChunk = this.chunks[this.chunks.length - 1];
    const newMax = this.cursor + bytes.length;
    if (newMax <= this.maxCursor + 1) {
      const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
      topChunk.set(bytes, chunkPos);
    } else {
      if (topChunk) {
        const chunkPos = topChunk.length - (this.maxCursor - this.cursor) - 1;
        if (chunkPos < topChunk.length) {
          this.chunks[this.chunks.length - 1] = topChunk.subarray(0, chunkPos);
          this.maxCursor = this.cursor - 1;
        }
      }
      if (bytes.length < 64 && bytes.length < this.chunkSize) {
        topChunk = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_0__.alloc)(this.chunkSize);
        this.chunks.push(topChunk);
        this.maxCursor += topChunk.length;
        if (this._initReuseChunk === null) {
          this._initReuseChunk = topChunk;
        }
        topChunk.set(bytes, 0);
      } else {
        this.chunks.push(bytes);
        this.maxCursor += bytes.length;
      }
    }
    this.cursor += bytes.length;
  }
  toBytes(reset = false) {
    let byts;
    if (this.chunks.length === 1) {
      const chunk = this.chunks[0];
      if (reset && this.cursor > chunk.length / 2) {
        byts = this.cursor === chunk.length ? chunk : chunk.subarray(0, this.cursor);
        this._initReuseChunk = null;
        this.chunks = [];
      } else {
        byts = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_0__.slice)(chunk, 0, this.cursor);
      }
    } else {
      byts = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_0__.concat)(this.chunks, this.cursor);
    }
    if (reset) {
      this.reset();
    }
    return byts;
  }
}

/***/ }),

/***/ "./node_modules/cborg/esm/lib/byte-utils.js":
/*!**************************************************!*\
  !*** ./node_modules/cborg/esm/lib/byte-utils.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useBuffer": () => (/* binding */ useBuffer),
/* harmony export */   "asU8A": () => (/* binding */ asU8A),
/* harmony export */   "toString": () => (/* binding */ toString),
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "fromArray": () => (/* binding */ fromArray),
/* harmony export */   "slice": () => (/* binding */ slice),
/* harmony export */   "concat": () => (/* binding */ concat),
/* harmony export */   "alloc": () => (/* binding */ alloc),
/* harmony export */   "toHex": () => (/* binding */ toHex),
/* harmony export */   "fromHex": () => (/* binding */ fromHex),
/* harmony export */   "compare": () => (/* binding */ compare),
/* harmony export */   "decodeCodePointsArray": () => (/* binding */ decodeCodePointsArray)
/* harmony export */ });
const useBuffer = globalThis.process && !globalThis.process.browser && globalThis.Buffer && typeof globalThis.Buffer.isBuffer === 'function';
const textDecoder = new TextDecoder();
const textEncoder = new TextEncoder();
function isBuffer(buf) {
  return useBuffer && globalThis.Buffer.isBuffer(buf);
}
function asU8A(buf) {
  if (!(buf instanceof Uint8Array)) {
    return Uint8Array.from(buf);
  }
  return isBuffer(buf) ? new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength) : buf;
}
const toString = useBuffer ? (bytes, start, end) => {
  return end - start > 64 ? globalThis.Buffer.from(bytes.subarray(start, end)).toString('utf8') : utf8Slice(bytes, start, end);
} : (bytes, start, end) => {
  return end - start > 64 ? textDecoder.decode(bytes.subarray(start, end)) : utf8Slice(bytes, start, end);
};
const fromString = useBuffer ? string => {
  return string.length > 64 ? globalThis.Buffer.from(string) : utf8ToBytes(string);
} : string => {
  return string.length > 64 ? textEncoder.encode(string) : utf8ToBytes(string);
};
const fromArray = arr => {
  return Uint8Array.from(arr);
};
const slice = useBuffer ? (bytes, start, end) => {
  if (isBuffer(bytes)) {
    return new Uint8Array(bytes.subarray(start, end));
  }
  return bytes.slice(start, end);
} : (bytes, start, end) => {
  return bytes.slice(start, end);
};
const concat = useBuffer ? (chunks, length) => {
  chunks = chunks.map(c => c instanceof Uint8Array ? c : globalThis.Buffer.from(c));
  return asU8A(globalThis.Buffer.concat(chunks, length));
} : (chunks, length) => {
  const out = new Uint8Array(length);
  let off = 0;
  for (let b of chunks) {
    if (off + b.length > out.length) {
      b = b.subarray(0, out.length - off);
    }
    out.set(b, off);
    off += b.length;
  }
  return out;
};
const alloc = useBuffer ? size => {
  return globalThis.Buffer.allocUnsafe(size);
} : size => {
  return new Uint8Array(size);
};
const toHex = useBuffer ? d => {
  if (typeof d === 'string') {
    return d;
  }
  return globalThis.Buffer.from(toBytes(d)).toString('hex');
} : d => {
  if (typeof d === 'string') {
    return d;
  }
  return Array.prototype.reduce.call(toBytes(d), (p, c) => `${ p }${ c.toString(16).padStart(2, '0') }`, '');
};
const fromHex = useBuffer ? hex => {
  if (hex instanceof Uint8Array) {
    return hex;
  }
  return globalThis.Buffer.from(hex, 'hex');
} : hex => {
  if (hex instanceof Uint8Array) {
    return hex;
  }
  if (!hex.length) {
    return new Uint8Array(0);
  }
  return new Uint8Array(hex.split('').map((c, i, d) => i % 2 === 0 ? `0x${ c }${ d[i + 1] }` : '').filter(Boolean).map(e => parseInt(e, 16)));
};
function toBytes(obj) {
  if (obj instanceof Uint8Array && obj.constructor.name === 'Uint8Array') {
    return obj;
  }
  if (obj instanceof ArrayBuffer) {
    return new Uint8Array(obj);
  }
  if (ArrayBuffer.isView(obj)) {
    return new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength);
  }
  throw new Error('Unknown type, must be binary type');
}
function compare(b1, b2) {
  if (isBuffer(b1) && isBuffer(b2)) {
    return b1.compare(b2);
  }
  for (let i = 0; i < b1.length; i++) {
    if (b1[i] === b2[i]) {
      continue;
    }
    return b1[i] < b2[i] ? -1 : 1;
  }
  return 0;
}
function utf8ToBytes(string, units = Infinity) {
  let codePoint;
  const length = string.length;
  let leadSurrogate = null;
  const bytes = [];
  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i);
    if (codePoint > 55295 && codePoint < 57344) {
      if (!leadSurrogate) {
        if (codePoint > 56319) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        } else if (i + 1 === length) {
          if ((units -= 3) > -1)
            bytes.push(239, 191, 189);
          continue;
        }
        leadSurrogate = codePoint;
        continue;
      }
      if (codePoint < 56320) {
        if ((units -= 3) > -1)
          bytes.push(239, 191, 189);
        leadSurrogate = codePoint;
        continue;
      }
      codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
    } else if (leadSurrogate) {
      if ((units -= 3) > -1)
        bytes.push(239, 191, 189);
    }
    leadSurrogate = null;
    if (codePoint < 128) {
      if ((units -= 1) < 0)
        break;
      bytes.push(codePoint);
    } else if (codePoint < 2048) {
      if ((units -= 2) < 0)
        break;
      bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
    } else if (codePoint < 65536) {
      if ((units -= 3) < 0)
        break;
      bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else if (codePoint < 1114112) {
      if ((units -= 4) < 0)
        break;
      bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
    } else {
      throw new Error('Invalid code point');
    }
  }
  return bytes;
}
function utf8Slice(buf, offset, end) {
  const res = [];
  while (offset < end) {
    const firstByte = buf[offset];
    let codePoint = null;
    let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
    if (offset + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
      case 1:
        if (firstByte < 128) {
          codePoint = firstByte;
        }
        break;
      case 2:
        secondByte = buf[offset + 1];
        if ((secondByte & 192) === 128) {
          tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
          if (tempCodePoint > 127) {
            codePoint = tempCodePoint;
          }
        }
        break;
      case 3:
        secondByte = buf[offset + 1];
        thirdByte = buf[offset + 2];
        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
          tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
          if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
            codePoint = tempCodePoint;
          }
        }
        break;
      case 4:
        secondByte = buf[offset + 1];
        thirdByte = buf[offset + 2];
        fourthByte = buf[offset + 3];
        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
          tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
          if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
            codePoint = tempCodePoint;
          }
        }
      }
    }
    if (codePoint === null) {
      codePoint = 65533;
      bytesPerSequence = 1;
    } else if (codePoint > 65535) {
      codePoint -= 65536;
      res.push(codePoint >>> 10 & 1023 | 55296);
      codePoint = 56320 | codePoint & 1023;
    }
    res.push(codePoint);
    offset += bytesPerSequence;
  }
  return decodeCodePointsArray(res);
}
const MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
  const len = codePoints.length;
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints);
  }
  let res = '';
  let i = 0;
  while (i < len) {
    res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
  }
  return res;
}

/***/ }),

/***/ "./node_modules/cborg/esm/lib/common.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/common.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodeErrPrefix": () => (/* binding */ decodeErrPrefix),
/* harmony export */   "encodeErrPrefix": () => (/* binding */ encodeErrPrefix),
/* harmony export */   "uintMinorPrefixBytes": () => (/* binding */ uintMinorPrefixBytes),
/* harmony export */   "assertEnoughData": () => (/* binding */ assertEnoughData)
/* harmony export */ });
const decodeErrPrefix = 'CBOR decode error:';
const encodeErrPrefix = 'CBOR encode error:';
const uintMinorPrefixBytes = [];
uintMinorPrefixBytes[23] = 1;
uintMinorPrefixBytes[24] = 2;
uintMinorPrefixBytes[25] = 3;
uintMinorPrefixBytes[26] = 5;
uintMinorPrefixBytes[27] = 9;
function assertEnoughData(data, pos, need) {
  if (data.length - pos < need) {
    throw new Error(`${ decodeErrPrefix } not enough data for type`);
  }
}


/***/ }),

/***/ "./node_modules/cborg/esm/lib/decode.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/decode.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tokeniser": () => (/* binding */ Tokeniser),
/* harmony export */   "tokensToObject": () => (/* binding */ tokensToObject),
/* harmony export */   "decode": () => (/* binding */ decode)
/* harmony export */ });
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/esm/lib/common.js");
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _jump_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jump.js */ "./node_modules/cborg/esm/lib/jump.js");



const defaultDecodeOptions = {
  strict: false,
  allowIndefinite: true,
  allowUndefined: true,
  allowBigInt: true
};
class Tokeniser {
  constructor(data, options = {}) {
    this.pos = 0;
    this.data = data;
    this.options = options;
  }
  done() {
    return this.pos >= this.data.length;
  }
  next() {
    const byt = this.data[this.pos];
    let token = _jump_js__WEBPACK_IMPORTED_MODULE_2__.quick[byt];
    if (token === undefined) {
      const decoder = _jump_js__WEBPACK_IMPORTED_MODULE_2__.jump[byt];
      if (!decoder) {
        throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } no decoder for major type ${ byt >>> 5 } (byte 0x${ byt.toString(16).padStart(2, '0') })`);
      }
      const minor = byt & 31;
      token = decoder(this.data, this.pos, minor, this.options);
    }
    this.pos += token.encodedLength;
    return token;
  }
}
const DONE = Symbol.for('DONE');
const BREAK = Symbol.for('BREAK');
function tokenToArray(token, tokeniser, options) {
  const arr = [];
  for (let i = 0; i < token.value; i++) {
    const value = tokensToObject(tokeniser, options);
    if (value === BREAK) {
      if (token.value === Infinity) {
        break;
      }
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } got unexpected break to lengthed array`);
    }
    if (value === DONE) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } found array but not enough entries (got ${ i }, expected ${ token.value })`);
    }
    arr[i] = value;
  }
  return arr;
}
function tokenToMap(token, tokeniser, options) {
  const useMaps = options.useMaps === true;
  const obj = useMaps ? undefined : {};
  const m = useMaps ? new Map() : undefined;
  for (let i = 0; i < token.value; i++) {
    const key = tokensToObject(tokeniser, options);
    if (key === BREAK) {
      if (token.value === Infinity) {
        break;
      }
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } got unexpected break to lengthed map`);
    }
    if (key === DONE) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } found map but not enough entries (got ${ i } [no key], expected ${ token.value })`);
    }
    if (useMaps !== true && typeof key !== 'string') {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } non-string keys not supported (got ${ typeof key })`);
    }
    const value = tokensToObject(tokeniser, options);
    if (value === DONE) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } found map but not enough entries (got ${ i } [no value], expected ${ token.value })`);
    }
    if (useMaps) {
      m.set(key, value);
    } else {
      obj[key] = value;
    }
  }
  return useMaps ? m : obj;
}
function tokensToObject(tokeniser, options) {
  if (tokeniser.done()) {
    return DONE;
  }
  const token = tokeniser.next();
  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"]) {
    return BREAK;
  }
  if (token.type.terminal) {
    return token.value;
  }
  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__.Type.array) {
    return tokenToArray(token, tokeniser, options);
  }
  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__.Type.map) {
    return tokenToMap(token, tokeniser, options);
  }
  if (token.type === _token_js__WEBPACK_IMPORTED_MODULE_1__.Type.tag) {
    if (options.tags && typeof options.tags[token.value] === 'function') {
      const tagged = tokensToObject(tokeniser, options);
      return options.tags[token.value](tagged);
    }
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } tag not supported (${ token.value })`);
  }
  throw new Error('unsupported');
}
function decode(data, options) {
  if (!(data instanceof Uint8Array)) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } data to decode must be a Uint8Array`);
  }
  options = Object.assign({}, defaultDecodeOptions, options);
  const tokeniser = options.tokenizer || new Tokeniser(data, options);
  const decoded = tokensToObject(tokeniser, options);
  if (decoded === DONE) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } did not find any content to decode`);
  }
  if (decoded === BREAK) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } got unexpected break`);
  }
  if (!tokeniser.done()) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_0__.decodeErrPrefix } too many terminals, data makes no sense`);
  }
  return decoded;
}


/***/ }),

/***/ "./node_modules/cborg/esm/lib/encode.js":
/*!**********************************************!*\
  !*** ./node_modules/cborg/esm/lib/encode.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectToTokens": () => (/* binding */ objectToTokens),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "encodeCustom": () => (/* binding */ encodeCustom),
/* harmony export */   "Ref": () => (/* binding */ Ref)
/* harmony export */ });
/* harmony import */ var _is_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is.js */ "./node_modules/cborg/esm/lib/is.js");
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _bl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bl.js */ "./node_modules/cborg/esm/lib/bl.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/esm/lib/common.js");
/* harmony import */ var _jump_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jump.js */ "./node_modules/cborg/esm/lib/jump.js");
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./byte-utils.js */ "./node_modules/cborg/esm/lib/byte-utils.js");
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/esm/lib/0uint.js");
/* harmony import */ var _1negint_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./1negint.js */ "./node_modules/cborg/esm/lib/1negint.js");
/* harmony import */ var _2bytes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./2bytes.js */ "./node_modules/cborg/esm/lib/2bytes.js");
/* harmony import */ var _3string_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./3string.js */ "./node_modules/cborg/esm/lib/3string.js");
/* harmony import */ var _4array_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./4array.js */ "./node_modules/cborg/esm/lib/4array.js");
/* harmony import */ var _5map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./5map.js */ "./node_modules/cborg/esm/lib/5map.js");
/* harmony import */ var _6tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./6tag.js */ "./node_modules/cborg/esm/lib/6tag.js");
/* harmony import */ var _7float_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./7float.js */ "./node_modules/cborg/esm/lib/7float.js");














const defaultEncodeOptions = {
  float64: false,
  mapSorter,
  quickEncodeToken: _jump_js__WEBPACK_IMPORTED_MODULE_4__.quickEncodeToken
};
const cborEncoders = [];
cborEncoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.uint.major] = _0uint_js__WEBPACK_IMPORTED_MODULE_6__.encodeUint;
cborEncoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.negint.major] = _1negint_js__WEBPACK_IMPORTED_MODULE_7__.encodeNegint;
cborEncoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.bytes.major] = _2bytes_js__WEBPACK_IMPORTED_MODULE_8__.encodeBytes;
cborEncoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.string.major] = _3string_js__WEBPACK_IMPORTED_MODULE_9__.encodeString;
cborEncoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.array.major] = _4array_js__WEBPACK_IMPORTED_MODULE_10__.encodeArray;
cborEncoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.map.major] = _5map_js__WEBPACK_IMPORTED_MODULE_11__.encodeMap;
cborEncoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.tag.major] = _6tag_js__WEBPACK_IMPORTED_MODULE_12__.encodeTag;
cborEncoders[_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.float.major] = _7float_js__WEBPACK_IMPORTED_MODULE_13__.encodeFloat;
const buf = new _bl_js__WEBPACK_IMPORTED_MODULE_2__.Bl();
class Ref {
  constructor(obj, parent) {
    this.obj = obj;
    this.parent = parent;
  }
  includes(obj) {
    let p = this;
    do {
      if (p.obj === obj) {
        return true;
      }
    } while (p = p.parent);
    return false;
  }
  static createCheck(stack, obj) {
    if (stack && stack.includes(obj)) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.encodeErrPrefix } object contains circular references`);
    }
    return new Ref(obj, stack);
  }
}
const simpleTokens = {
  null: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["null"], null),
  undefined: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.undefined, undefined),
  true: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["true"], true),
  false: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["false"], false),
  emptyArray: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.array, 0),
  emptyMap: new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.map, 0)
};
const typeEncoders = {
  number(obj, _typ, _options, _refStack) {
    if (!Number.isInteger(obj) || !Number.isSafeInteger(obj)) {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.float, obj);
    } else if (obj >= 0) {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.uint, obj);
    } else {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.negint, obj);
    }
  },
  bigint(obj, _typ, _options, _refStack) {
    if (obj >= BigInt(0)) {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.uint, obj);
    } else {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.negint, obj);
    }
  },
  Uint8Array(obj, _typ, _options, _refStack) {
    return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.bytes, obj);
  },
  string(obj, _typ, _options, _refStack) {
    return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.string, obj);
  },
  boolean(obj, _typ, _options, _refStack) {
    return obj ? simpleTokens.true : simpleTokens.false;
  },
  null(_obj, _typ, _options, _refStack) {
    return simpleTokens.null;
  },
  undefined(_obj, _typ, _options, _refStack) {
    return simpleTokens.undefined;
  },
  ArrayBuffer(obj, _typ, _options, _refStack) {
    return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.bytes, new Uint8Array(obj));
  },
  DataView(obj, _typ, _options, _refStack) {
    return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.bytes, new Uint8Array(obj.buffer, obj.byteOffset, obj.byteLength));
  },
  Array(obj, _typ, options, refStack) {
    if (!obj.length) {
      if (options.addBreakTokens === true) {
        return [
          simpleTokens.emptyArray,
          new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"])
        ];
      }
      return simpleTokens.emptyArray;
    }
    refStack = Ref.createCheck(refStack, obj);
    const entries = [];
    let i = 0;
    for (const e of obj) {
      entries[i++] = objectToTokens(e, options, refStack);
    }
    if (options.addBreakTokens) {
      return [
        new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.array, obj.length),
        entries,
        new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"])
      ];
    }
    return [
      new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.array, obj.length),
      entries
    ];
  },
  Object(obj, typ, options, refStack) {
    const isMap = typ !== 'Object';
    const keys = isMap ? obj.keys() : Object.keys(obj);
    const length = isMap ? obj.size : keys.length;
    if (!length) {
      if (options.addBreakTokens === true) {
        return [
          simpleTokens.emptyMap,
          new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"])
        ];
      }
      return simpleTokens.emptyMap;
    }
    refStack = Ref.createCheck(refStack, obj);
    const entries = [];
    let i = 0;
    for (const key of keys) {
      entries[i++] = [
        objectToTokens(key, options, refStack),
        objectToTokens(isMap ? obj.get(key) : obj[key], options, refStack)
      ];
    }
    sortMapEntries(entries, options);
    if (options.addBreakTokens) {
      return [
        new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.map, length),
        entries,
        new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"])
      ];
    }
    return [
      new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.map, length),
      entries
    ];
  }
};
typeEncoders.Map = typeEncoders.Object;
typeEncoders.Buffer = typeEncoders.Uint8Array;
for (const typ of 'Uint8Clamped Uint16 Uint32 Int8 Int16 Int32 BigUint64 BigInt64 Float32 Float64'.split(' ')) {
  typeEncoders[`${ typ }Array`] = typeEncoders.DataView;
}
function objectToTokens(obj, options = {}, refStack) {
  const typ = (0,_is_js__WEBPACK_IMPORTED_MODULE_0__.is)(obj);
  const customTypeEncoder = options && options.typeEncoders && options.typeEncoders[typ] || typeEncoders[typ];
  if (typeof customTypeEncoder === 'function') {
    const tokens = customTypeEncoder(obj, typ, options, refStack);
    if (tokens != null) {
      return tokens;
    }
  }
  const typeEncoder = typeEncoders[typ];
  if (!typeEncoder) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.encodeErrPrefix } unsupported type: ${ typ }`);
  }
  return typeEncoder(obj, typ, options, refStack);
}
function sortMapEntries(entries, options) {
  if (options.mapSorter) {
    entries.sort(options.mapSorter);
  }
}
function mapSorter(e1, e2) {
  const keyToken1 = Array.isArray(e1[0]) ? e1[0][0] : e1[0];
  const keyToken2 = Array.isArray(e2[0]) ? e2[0][0] : e2[0];
  if (keyToken1.type !== keyToken2.type) {
    return keyToken1.type.compare(keyToken2.type);
  }
  const major = keyToken1.type.major;
  const tcmp = cborEncoders[major].compareTokens(keyToken1, keyToken2);
  if (tcmp === 0) {
    console.warn('WARNING: complex key types used, CBOR key sorting guarantees are gone');
  }
  return tcmp;
}
function tokensToEncoded(buf, tokens, encoders, options) {
  if (Array.isArray(tokens)) {
    for (const token of tokens) {
      tokensToEncoded(buf, token, encoders, options);
    }
  } else {
    encoders[tokens.type.major](buf, tokens, options);
  }
}
function encodeCustom(data, encoders, options) {
  const tokens = objectToTokens(data, options);
  if (!Array.isArray(tokens) && options.quickEncodeToken) {
    const quickBytes = options.quickEncodeToken(tokens);
    if (quickBytes) {
      return quickBytes;
    }
    const encoder = encoders[tokens.type.major];
    if (encoder.encodedSize) {
      const size = encoder.encodedSize(tokens, options);
      const buf = new _bl_js__WEBPACK_IMPORTED_MODULE_2__.Bl(size);
      encoder(buf, tokens, options);
      if (buf.chunks.length !== 1) {
        throw new Error(`Unexpected error: pre-calculated length for ${ tokens } was wrong`);
      }
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_5__.asU8A)(buf.chunks[0]);
    }
  }
  tokensToEncoded(buf, tokens, encoders, options);
  return buf.toBytes(true);
}
function encode(data, options) {
  options = Object.assign({}, defaultEncodeOptions, options);
  return encodeCustom(data, cborEncoders, options);
}


/***/ }),

/***/ "./node_modules/cborg/esm/lib/is.js":
/*!******************************************!*\
  !*** ./node_modules/cborg/esm/lib/is.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "is": () => (/* binding */ is)
/* harmony export */ });
const typeofs = [
  'string',
  'number',
  'bigint',
  'symbol'
];
const objectTypeNames = [
  'Function',
  'Generator',
  'AsyncGenerator',
  'GeneratorFunction',
  'AsyncGeneratorFunction',
  'AsyncFunction',
  'Observable',
  'Array',
  'Buffer',
  'Object',
  'RegExp',
  'Date',
  'Error',
  'Map',
  'Set',
  'WeakMap',
  'WeakSet',
  'ArrayBuffer',
  'SharedArrayBuffer',
  'DataView',
  'Promise',
  'URL',
  'HTMLElement',
  'Int8Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Int16Array',
  'Uint16Array',
  'Int32Array',
  'Uint32Array',
  'Float32Array',
  'Float64Array',
  'BigInt64Array',
  'BigUint64Array'
];
function is(value) {
  if (value === null) {
    return 'null';
  }
  if (value === undefined) {
    return 'undefined';
  }
  if (value === true || value === false) {
    return 'boolean';
  }
  const typeOf = typeof value;
  if (typeofs.includes(typeOf)) {
    return typeOf;
  }
  if (typeOf === 'function') {
    return 'Function';
  }
  if (Array.isArray(value)) {
    return 'Array';
  }
  if (isBuffer(value)) {
    return 'Buffer';
  }
  const objectType = getObjectType(value);
  if (objectType) {
    return objectType;
  }
  return 'Object';
}
function isBuffer(value) {
  return value && value.constructor && value.constructor.isBuffer && value.constructor.isBuffer.call(null, value);
}
function getObjectType(value) {
  const objectTypeName = Object.prototype.toString.call(value).slice(8, -1);
  if (objectTypeNames.includes(objectTypeName)) {
    return objectTypeName;
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/cborg/esm/lib/json/decode.js":
/*!***************************************************!*\
  !*** ./node_modules/cborg/esm/lib/json/decode.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "Tokenizer": () => (/* binding */ Tokenizer)
/* harmony export */ });
/* harmony import */ var _decode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../decode.js */ "./node_modules/cborg/esm/lib/decode.js");
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../byte-utils.js */ "./node_modules/cborg/esm/lib/byte-utils.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common.js */ "./node_modules/cborg/esm/lib/common.js");




class Tokenizer {
  constructor(data, options = {}) {
    this.pos = 0;
    this.data = data;
    this.options = options;
    this.modeStack = ['value'];
    this.lastToken = '';
  }
  done() {
    return this.pos >= this.data.length;
  }
  ch() {
    return this.data[this.pos];
  }
  currentMode() {
    return this.modeStack[this.modeStack.length - 1];
  }
  skipWhitespace() {
    let c = this.ch();
    while (c === 32 || c === 9 || c === 13 || c === 10) {
      c = this.data[++this.pos];
    }
  }
  expect(str) {
    if (this.data.length - this.pos < str.length) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected end of input at position ${ this.pos }`);
    }
    for (let i = 0; i < str.length; i++) {
      if (this.data[this.pos++] !== str[i]) {
        throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected token at position ${ this.pos }, expected to find '${ String.fromCharCode(...str) }'`);
      }
    }
  }
  parseNumber() {
    const startPos = this.pos;
    let negative = false;
    let float = false;
    const swallow = chars => {
      while (!this.done()) {
        const ch = this.ch();
        if (chars.includes(ch)) {
          this.pos++;
        } else {
          break;
        }
      }
    };
    if (this.ch() === 45) {
      negative = true;
      this.pos++;
    }
    if (this.ch() === 48) {
      this.pos++;
      if (this.ch() === 46) {
        this.pos++;
        float = true;
      } else {
        return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.uint, 0, this.pos - startPos);
      }
    }
    swallow([
      48,
      49,
      50,
      51,
      52,
      53,
      54,
      55,
      56,
      57
    ]);
    if (negative && this.pos === startPos + 1) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected token at position ${ this.pos }`);
    }
    if (!this.done() && this.ch() === 46) {
      if (float) {
        throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected token at position ${ this.pos }`);
      }
      float = true;
      this.pos++;
      swallow([
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57
      ]);
    }
    if (!this.done() && (this.ch() === 101 || this.ch() === 69)) {
      float = true;
      this.pos++;
      if (!this.done() && (this.ch() === 43 || this.ch() === 45)) {
        this.pos++;
      }
      swallow([
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57
      ]);
    }
    const numStr = String.fromCharCode.apply(null, this.data.subarray(startPos, this.pos));
    const num = parseFloat(numStr);
    if (float) {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.float, num, this.pos - startPos);
    }
    if (this.options.allowBigInt !== true || Number.isSafeInteger(num)) {
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(num >= 0 ? _token_js__WEBPACK_IMPORTED_MODULE_1__.Type.uint : _token_js__WEBPACK_IMPORTED_MODULE_1__.Type.negint, num, this.pos - startPos);
    }
    return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(num >= 0 ? _token_js__WEBPACK_IMPORTED_MODULE_1__.Type.uint : _token_js__WEBPACK_IMPORTED_MODULE_1__.Type.negint, BigInt(numStr), this.pos - startPos);
  }
  parseString() {
    if (this.ch() !== 34) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected character at position ${ this.pos }; this shouldn't happen`);
    }
    this.pos++;
    for (let i = this.pos, l = 0; i < this.data.length && l < 65536; i++, l++) {
      const ch = this.data[i];
      if (ch === 92 || ch < 32 || ch >= 128) {
        break;
      }
      if (ch === 34) {
        const str = String.fromCharCode.apply(null, this.data.subarray(this.pos, i));
        this.pos = i + 1;
        return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.string, str, l);
      }
    }
    const startPos = this.pos;
    const chars = [];
    const readu4 = () => {
      if (this.pos + 4 >= this.data.length) {
        throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected end of unicode escape sequence at position ${ this.pos }`);
      }
      let u4 = 0;
      for (let i = 0; i < 4; i++) {
        let ch = this.ch();
        if (ch >= 48 && ch <= 57) {
          ch -= 48;
        } else if (ch >= 97 && ch <= 102) {
          ch = ch - 97 + 10;
        } else if (ch >= 65 && ch <= 70) {
          ch = ch - 65 + 10;
        } else {
          throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected unicode escape character at position ${ this.pos }`);
        }
        u4 = u4 * 16 + ch;
        this.pos++;
      }
      return u4;
    };
    const readUtf8Char = () => {
      const firstByte = this.ch();
      let codePoint = null;
      let bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
      if (this.pos + bytesPerSequence > this.data.length) {
        throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected unicode sequence at position ${ this.pos }`);
      }
      let secondByte, thirdByte, fourthByte, tempCodePoint;
      switch (bytesPerSequence) {
      case 1:
        if (firstByte < 128) {
          codePoint = firstByte;
        }
        break;
      case 2:
        secondByte = this.data[this.pos + 1];
        if ((secondByte & 192) === 128) {
          tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
          if (tempCodePoint > 127) {
            codePoint = tempCodePoint;
          }
        }
        break;
      case 3:
        secondByte = this.data[this.pos + 1];
        thirdByte = this.data[this.pos + 2];
        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
          tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
          if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) {
            codePoint = tempCodePoint;
          }
        }
        break;
      case 4:
        secondByte = this.data[this.pos + 1];
        thirdByte = this.data[this.pos + 2];
        fourthByte = this.data[this.pos + 3];
        if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
          tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
          if (tempCodePoint > 65535 && tempCodePoint < 1114112) {
            codePoint = tempCodePoint;
          }
        }
      }
      if (codePoint === null) {
        codePoint = 65533;
        bytesPerSequence = 1;
      } else if (codePoint > 65535) {
        codePoint -= 65536;
        chars.push(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      chars.push(codePoint);
      this.pos += bytesPerSequence;
    };
    while (!this.done()) {
      const ch = this.ch();
      let ch1;
      switch (ch) {
      case 92:
        this.pos++;
        if (this.done()) {
          throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected string termination at position ${ this.pos }`);
        }
        ch1 = this.ch();
        this.pos++;
        switch (ch1) {
        case 34:
        case 39:
        case 92:
        case 47:
          chars.push(ch1);
          break;
        case 98:
          chars.push(8);
          break;
        case 116:
          chars.push(9);
          break;
        case 110:
          chars.push(10);
          break;
        case 102:
          chars.push(12);
          break;
        case 114:
          chars.push(13);
          break;
        case 117:
          chars.push(readu4());
          break;
        default:
          throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected string escape character at position ${ this.pos }`);
        }
        break;
      case 34:
        this.pos++;
        return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.string, (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_2__.decodeCodePointsArray)(chars), this.pos - startPos);
      default:
        if (ch < 32) {
          throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } invalid control character at position ${ this.pos }`);
        } else if (ch < 128) {
          chars.push(ch);
          this.pos++;
        } else {
          readUtf8Char();
        }
      }
    }
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected end of string at position ${ this.pos }`);
  }
  parseValue() {
    switch (this.ch()) {
    case 123:
      this.modeStack.push('obj-start');
      this.pos++;
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.map, Infinity, 1);
    case 91:
      this.modeStack.push('array-start');
      this.pos++;
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type.array, Infinity, 1);
    case 34: {
        return this.parseString();
      }
    case 110:
      this.expect([
        110,
        117,
        108,
        108
      ]);
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["null"], null, 4);
    case 102:
      this.expect([
        102,
        97,
        108,
        115,
        101
      ]);
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["false"], false, 5);
    case 116:
      this.expect([
        116,
        114,
        117,
        101
      ]);
      return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["true"], true, 4);
    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.parseNumber();
    default:
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected character at position ${ this.pos }`);
    }
  }
  next() {
    this.skipWhitespace();
    switch (this.currentMode()) {
    case 'value':
      this.modeStack.pop();
      return this.parseValue();
    case 'array-value': {
        this.modeStack.pop();
        if (this.ch() === 93) {
          this.pos++;
          this.skipWhitespace();
          return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"], undefined, 1);
        }
        if (this.ch() !== 44) {
          throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected character at position ${ this.pos }, was expecting array delimiter but found '${ String.fromCharCode(this.ch()) }'`);
        }
        this.pos++;
        this.modeStack.push('array-value');
        this.skipWhitespace();
        return this.parseValue();
      }
    case 'array-start': {
        this.modeStack.pop();
        if (this.ch() === 93) {
          this.pos++;
          this.skipWhitespace();
          return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"], undefined, 1);
        }
        this.modeStack.push('array-value');
        this.skipWhitespace();
        return this.parseValue();
      }
    case 'obj-key':
      if (this.ch() === 125) {
        this.modeStack.pop();
        this.pos++;
        this.skipWhitespace();
        return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"], undefined, 1);
      }
      if (this.ch() !== 44) {
        throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected character at position ${ this.pos }, was expecting object delimiter but found '${ String.fromCharCode(this.ch()) }'`);
      }
      this.pos++;
      this.skipWhitespace();
    case 'obj-start': {
        this.modeStack.pop();
        if (this.ch() === 125) {
          this.pos++;
          this.skipWhitespace();
          return new _token_js__WEBPACK_IMPORTED_MODULE_1__.Token(_token_js__WEBPACK_IMPORTED_MODULE_1__.Type["break"], undefined, 1);
        }
        const token = this.parseString();
        this.skipWhitespace();
        if (this.ch() !== 58) {
          throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected character at position ${ this.pos }, was expecting key/value delimiter ':' but found '${ String.fromCharCode(this.ch()) }'`);
        }
        this.pos++;
        this.modeStack.push('obj-value');
        return token;
      }
    case 'obj-value': {
        this.modeStack.pop();
        this.modeStack.push('obj-key');
        this.skipWhitespace();
        return this.parseValue();
      }
    default:
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_3__.decodeErrPrefix } unexpected parse state at position ${ this.pos }; this shouldn't happen`);
    }
  }
}
function decode(data, options) {
  options = Object.assign({ tokenizer: new Tokenizer(data, options) }, options);
  return (0,_decode_js__WEBPACK_IMPORTED_MODULE_0__.decode)(data, options);
}


/***/ }),

/***/ "./node_modules/cborg/esm/lib/json/encode.js":
/*!***************************************************!*\
  !*** ./node_modules/cborg/esm/lib/json/encode.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encode": () => (/* binding */ encode)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _encode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../encode.js */ "./node_modules/cborg/esm/lib/encode.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.js */ "./node_modules/cborg/esm/lib/common.js");
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../byte-utils.js */ "./node_modules/cborg/esm/lib/byte-utils.js");




class JSONEncoder extends Array {
  constructor() {
    super();
    this.inRecursive = [];
  }
  prefix(buf) {
    const recurs = this.inRecursive[this.inRecursive.length - 1];
    if (recurs) {
      if (recurs.type === _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array) {
        recurs.elements++;
        if (recurs.elements !== 1) {
          buf.push([44]);
        }
      }
      if (recurs.type === _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map) {
        recurs.elements++;
        if (recurs.elements !== 1) {
          if (recurs.elements % 2 === 1) {
            buf.push([44]);
          } else {
            buf.push([58]);
          }
        }
      }
    }
  }
  [_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint.major](buf, token) {
    this.prefix(buf);
    const is = String(token.value);
    const isa = [];
    for (let i = 0; i < is.length; i++) {
      isa[i] = is.charCodeAt(i);
    }
    buf.push(isa);
  }
  [_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint.major](buf, token) {
    this[_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint.major](buf, token);
  }
  [_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.bytes.major](_buf, _token) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__.encodeErrPrefix } unsupported type: Uint8Array`);
  }
  [_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.string.major](buf, token) {
    this.prefix(buf);
    const byts = (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_3__.fromString)(JSON.stringify(token.value));
    buf.push(byts.length > 32 ? (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_3__.asU8A)(byts) : byts);
  }
  [_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array.major](buf, _token) {
    this.prefix(buf);
    this.inRecursive.push({
      type: _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array,
      elements: 0
    });
    buf.push([91]);
  }
  [_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map.major](buf, _token) {
    this.prefix(buf);
    this.inRecursive.push({
      type: _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map,
      elements: 0
    });
    buf.push([123]);
  }
  [_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.tag.major](_buf, _token) {
  }
  [_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.float.major](buf, token) {
    if (token.type.name === 'break') {
      const recurs = this.inRecursive.pop();
      if (recurs) {
        if (recurs.type === _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array) {
          buf.push([93]);
        } else if (recurs.type === _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map) {
          buf.push([125]);
        } else {
          throw new Error('Unexpected recursive type; this should not happen!');
        }
        return;
      }
      throw new Error('Unexpected break; this should not happen!');
    }
    if (token.value === undefined) {
      throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__.encodeErrPrefix } unsupported type: undefined`);
    }
    this.prefix(buf);
    if (token.type.name === 'true') {
      buf.push([
        116,
        114,
        117,
        101
      ]);
      return;
    } else if (token.type.name === 'false') {
      buf.push([
        102,
        97,
        108,
        115,
        101
      ]);
      return;
    } else if (token.type.name === 'null') {
      buf.push([
        110,
        117,
        108,
        108
      ]);
      return;
    }
    const is = String(token.value);
    const isa = [];
    let dp = false;
    for (let i = 0; i < is.length; i++) {
      isa[i] = is.charCodeAt(i);
      if (!dp && (isa[i] === 46 || isa[i] === 101 || isa[i] === 69)) {
        dp = true;
      }
    }
    if (!dp) {
      isa.push(46);
      isa.push(48);
    }
    buf.push(isa);
  }
}
function mapSorter(e1, e2) {
  if (Array.isArray(e1[0]) || Array.isArray(e2[0])) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__.encodeErrPrefix } complex map keys are not supported`);
  }
  const keyToken1 = e1[0];
  const keyToken2 = e2[0];
  if (keyToken1.type !== _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.string || keyToken2.type !== _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.string) {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__.encodeErrPrefix } non-string map keys are not supported`);
  }
  if (keyToken1 < keyToken2) {
    return -1;
  }
  if (keyToken1 > keyToken2) {
    return 1;
  }
  throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_2__.encodeErrPrefix } unexpected duplicate map keys, this is not supported`);
}
const defaultEncodeOptions = {
  addBreakTokens: true,
  mapSorter
};
function encode(data, options) {
  options = Object.assign({}, defaultEncodeOptions, options);
  return (0,_encode_js__WEBPACK_IMPORTED_MODULE_1__.encodeCustom)(data, new JSONEncoder(), options);
}


/***/ }),

/***/ "./node_modules/cborg/esm/lib/json/json.js":
/*!*************************************************!*\
  !*** ./node_modules/cborg/esm/lib/json/json.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encode": () => (/* reexport safe */ _encode_js__WEBPACK_IMPORTED_MODULE_0__.encode),
/* harmony export */   "decode": () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_1__.decode),
/* harmony export */   "Tokenizer": () => (/* reexport safe */ _decode_js__WEBPACK_IMPORTED_MODULE_1__.Tokenizer)
/* harmony export */ });
/* harmony import */ var _encode_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./encode.js */ "./node_modules/cborg/esm/lib/json/encode.js");
/* harmony import */ var _decode_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decode.js */ "./node_modules/cborg/esm/lib/json/decode.js");




/***/ }),

/***/ "./node_modules/cborg/esm/lib/jump.js":
/*!********************************************!*\
  !*** ./node_modules/cborg/esm/lib/jump.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "jump": () => (/* binding */ jump),
/* harmony export */   "quick": () => (/* binding */ quick),
/* harmony export */   "quickEncodeToken": () => (/* binding */ quickEncodeToken)
/* harmony export */ });
/* harmony import */ var _token_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token.js */ "./node_modules/cborg/esm/lib/token.js");
/* harmony import */ var _0uint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./0uint.js */ "./node_modules/cborg/esm/lib/0uint.js");
/* harmony import */ var _1negint_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./1negint.js */ "./node_modules/cborg/esm/lib/1negint.js");
/* harmony import */ var _2bytes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./2bytes.js */ "./node_modules/cborg/esm/lib/2bytes.js");
/* harmony import */ var _3string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./3string.js */ "./node_modules/cborg/esm/lib/3string.js");
/* harmony import */ var _4array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./4array.js */ "./node_modules/cborg/esm/lib/4array.js");
/* harmony import */ var _5map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./5map.js */ "./node_modules/cborg/esm/lib/5map.js");
/* harmony import */ var _6tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./6tag.js */ "./node_modules/cborg/esm/lib/6tag.js");
/* harmony import */ var _7float_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./7float.js */ "./node_modules/cborg/esm/lib/7float.js");
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common.js */ "./node_modules/cborg/esm/lib/common.js");
/* harmony import */ var _byte_utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./byte-utils.js */ "./node_modules/cborg/esm/lib/byte-utils.js");











function invalidMinor(data, pos, minor) {
  throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_9__.decodeErrPrefix } encountered invalid minor (${ minor }) for major ${ data[pos] >>> 5 }`);
}
function errorer(msg) {
  return () => {
    throw new Error(`${ _common_js__WEBPACK_IMPORTED_MODULE_9__.decodeErrPrefix } ${ msg }`);
  };
}
const jump = [];
for (let i = 0; i <= 23; i++) {
  jump[i] = invalidMinor;
}
jump[24] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.decodeUint8;
jump[25] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.decodeUint16;
jump[26] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.decodeUint32;
jump[27] = _0uint_js__WEBPACK_IMPORTED_MODULE_1__.decodeUint64;
jump[28] = invalidMinor;
jump[29] = invalidMinor;
jump[30] = invalidMinor;
jump[31] = invalidMinor;
for (let i = 32; i <= 55; i++) {
  jump[i] = invalidMinor;
}
jump[56] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__.decodeNegint8;
jump[57] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__.decodeNegint16;
jump[58] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__.decodeNegint32;
jump[59] = _1negint_js__WEBPACK_IMPORTED_MODULE_2__.decodeNegint64;
jump[60] = invalidMinor;
jump[61] = invalidMinor;
jump[62] = invalidMinor;
jump[63] = invalidMinor;
for (let i = 64; i <= 87; i++) {
  jump[i] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.decodeBytesCompact;
}
jump[88] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.decodeBytes8;
jump[89] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.decodeBytes16;
jump[90] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.decodeBytes32;
jump[91] = _2bytes_js__WEBPACK_IMPORTED_MODULE_3__.decodeBytes64;
jump[92] = invalidMinor;
jump[93] = invalidMinor;
jump[94] = invalidMinor;
jump[95] = errorer('indefinite length bytes/strings are not supported');
for (let i = 96; i <= 119; i++) {
  jump[i] = _3string_js__WEBPACK_IMPORTED_MODULE_4__.decodeStringCompact;
}
jump[120] = _3string_js__WEBPACK_IMPORTED_MODULE_4__.decodeString8;
jump[121] = _3string_js__WEBPACK_IMPORTED_MODULE_4__.decodeString16;
jump[122] = _3string_js__WEBPACK_IMPORTED_MODULE_4__.decodeString32;
jump[123] = _3string_js__WEBPACK_IMPORTED_MODULE_4__.decodeString64;
jump[124] = invalidMinor;
jump[125] = invalidMinor;
jump[126] = invalidMinor;
jump[127] = errorer('indefinite length bytes/strings are not supported');
for (let i = 128; i <= 151; i++) {
  jump[i] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArrayCompact;
}
jump[152] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArray8;
jump[153] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArray16;
jump[154] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArray32;
jump[155] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArray64;
jump[156] = invalidMinor;
jump[157] = invalidMinor;
jump[158] = invalidMinor;
jump[159] = _4array_js__WEBPACK_IMPORTED_MODULE_5__.decodeArrayIndefinite;
for (let i = 160; i <= 183; i++) {
  jump[i] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMapCompact;
}
jump[184] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMap8;
jump[185] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMap16;
jump[186] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMap32;
jump[187] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMap64;
jump[188] = invalidMinor;
jump[189] = invalidMinor;
jump[190] = invalidMinor;
jump[191] = _5map_js__WEBPACK_IMPORTED_MODULE_6__.decodeMapIndefinite;
for (let i = 192; i <= 215; i++) {
  jump[i] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__.decodeTagCompact;
}
jump[216] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__.decodeTag8;
jump[217] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__.decodeTag16;
jump[218] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__.decodeTag32;
jump[219] = _6tag_js__WEBPACK_IMPORTED_MODULE_7__.decodeTag64;
jump[220] = invalidMinor;
jump[221] = invalidMinor;
jump[222] = invalidMinor;
jump[223] = invalidMinor;
for (let i = 224; i <= 243; i++) {
  jump[i] = errorer('simple values are not supported');
}
jump[244] = invalidMinor;
jump[245] = invalidMinor;
jump[246] = invalidMinor;
jump[247] = _7float_js__WEBPACK_IMPORTED_MODULE_8__.decodeUndefined;
jump[248] = errorer('simple values are not supported');
jump[249] = _7float_js__WEBPACK_IMPORTED_MODULE_8__.decodeFloat16;
jump[250] = _7float_js__WEBPACK_IMPORTED_MODULE_8__.decodeFloat32;
jump[251] = _7float_js__WEBPACK_IMPORTED_MODULE_8__.decodeFloat64;
jump[252] = invalidMinor;
jump[253] = invalidMinor;
jump[254] = invalidMinor;
jump[255] = _7float_js__WEBPACK_IMPORTED_MODULE_8__.decodeBreak;
const quick = [];
for (let i = 0; i < 24; i++) {
  quick[i] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint, i, 1);
}
for (let i = -1; i >= -24; i--) {
  quick[31 - i] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint, i, 1);
}
quick[64] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.bytes, new Uint8Array(0), 1);
quick[96] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.string, '', 1);
quick[128] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array, 0, 1);
quick[160] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map, 0, 1);
quick[244] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type["false"], false, 1);
quick[245] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type["true"], true, 1);
quick[246] = new _token_js__WEBPACK_IMPORTED_MODULE_0__.Token(_token_js__WEBPACK_IMPORTED_MODULE_0__.Type["null"], null, 1);
function quickEncodeToken(token) {
  switch (token.type) {
  case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type["false"]:
    return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([244]);
  case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type["true"]:
    return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([245]);
  case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type["null"]:
    return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([246]);
  case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.bytes:
    if (!token.value.length) {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([64]);
    }
    return;
  case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.string:
    if (token.value === '') {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([96]);
    }
    return;
  case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.array:
    if (token.value === 0) {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([128]);
    }
    return;
  case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.map:
    if (token.value === 0) {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([160]);
    }
    return;
  case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.uint:
    if (token.value < 24) {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([Number(token.value)]);
    }
    return;
  case _token_js__WEBPACK_IMPORTED_MODULE_0__.Type.negint:
    if (token.value >= -24) {
      return (0,_byte_utils_js__WEBPACK_IMPORTED_MODULE_10__.fromArray)([31 - Number(token.value)]);
    }
  }
}

/***/ }),

/***/ "./node_modules/cborg/esm/lib/token.js":
/*!*********************************************!*\
  !*** ./node_modules/cborg/esm/lib/token.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Type": () => (/* binding */ Type),
/* harmony export */   "Token": () => (/* binding */ Token)
/* harmony export */ });
class Type {
  constructor(major, name, terminal) {
    this.major = major;
    this.majorEncoded = major << 5;
    this.name = name;
    this.terminal = terminal;
  }
  toString() {
    return `Type[${ this.major }].${ this.name }`;
  }
  compare(typ) {
    return this.major < typ.major ? -1 : this.major > typ.major ? 1 : 0;
  }
}
Type.uint = new Type(0, 'uint', true);
Type.negint = new Type(1, 'negint', true);
Type.bytes = new Type(2, 'bytes', true);
Type.string = new Type(3, 'string', true);
Type.array = new Type(4, 'array', false);
Type.map = new Type(5, 'map', false);
Type.tag = new Type(6, 'tag', false);
Type.float = new Type(7, 'float', true);
Type.false = new Type(7, 'false', true);
Type.true = new Type(7, 'true', true);
Type.null = new Type(7, 'null', true);
Type.undefined = new Type(7, 'undefined', true);
Type.break = new Type(7, 'break', true);
class Token {
  constructor(type, value, encodedLength) {
    this.type = type;
    this.value = value;
    this.encodedLength = encodedLength;
    this.encodedBytes = undefined;
  }
  toString() {
    return `Token[${ this.type }].${ this.value }`;
  }
}


/***/ }),

/***/ "./node_modules/crypto-hash/browser.js":
/*!*********************************************!*\
  !*** ./node_modules/crypto-hash/browser.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sha1": () => (/* binding */ sha1),
/* harmony export */   "sha256": () => (/* binding */ sha256),
/* harmony export */   "sha384": () => (/* binding */ sha384),
/* harmony export */   "sha512": () => (/* binding */ sha512)
/* harmony export */ });
/* eslint-env browser */

const bufferToHex = buffer => {
	const view = new DataView(buffer);

	let hexCodes = '';
	for (let index = 0; index < view.byteLength; index += 4) {
		hexCodes += view.getUint32(index).toString(16).padStart(8, '0');
	}

	return hexCodes;
};

const create = algorithm => async (buffer, {outputFormat = 'hex'} = {}) => {
	if (typeof buffer === 'string') {
		buffer = new globalThis.TextEncoder().encode(buffer);
	}

	const hash = await globalThis.crypto.subtle.digest(algorithm, buffer);

	return outputFormat === 'hex' ? bufferToHex(hash) : hash;
};

const sha1 = create('SHA-1');
const sha256 = create('SHA-256');
const sha384 = create('SHA-384');
const sha512 = create('SHA-512');


/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/agent.browser.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/agent.browser.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {
});

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/files/normalise-candidate-multiple.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/files/normalise-candidate-multiple.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseCandidateMultiple": () => (/* binding */ normaliseCandidateMultiple)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");
/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-readablestream-to-it */ "./node_modules/browser-readablestream-to-it/index.js");
/* harmony import */ var it_peekable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! it-peekable */ "./node_modules/it-peekable/index.js");
/* harmony import */ var it_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! it-map */ "./node_modules/it-map/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/ipfs-core-utils/esm/src/files/utils.js");
/* harmony import */ var ipfs_unixfs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ipfs-unixfs */ "./node_modules/ipfs-unixfs/esm/src/index.js");






async function* normaliseCandidateMultiple(input, normaliseContent) {
  if (typeof input === 'string' || input instanceof String || (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isBytes)(input) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isBlob)(input) || input._readableState) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
  }
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isReadableStream)(input)) {
    input = browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_1__(input);
  }
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    const peekable = it_peekable__WEBPACK_IMPORTED_MODULE_2__(input);
    const {value, done} = await peekable.peek();
    if (done) {
      yield* [];
      return;
    }
    peekable.push(value);
    if (Number.isInteger(value)) {
      throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
    }
    if (value._readableState) {
      yield* it_map__WEBPACK_IMPORTED_MODULE_3__(peekable, value => toFileObject({ content: value }, normaliseContent));
      return;
    }
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isBytes)(value)) {
      yield toFileObject({ content: peekable }, normaliseContent);
      return;
    }
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isFileObject)(value) || value[Symbol.iterator] || value[Symbol.asyncIterator] || (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isReadableStream)(value) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isBlob)(value)) {
      yield* it_map__WEBPACK_IMPORTED_MODULE_3__(peekable, value => toFileObject(value, normaliseContent));
      return;
    }
  }
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isFileObject)(input)) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: single item passed - if you are using ipfs.addAll, please use ipfs.add instead'), 'ERR_UNEXPECTED_INPUT');
  }
  throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
}
async function toFileObject(input, normaliseContent) {
  const {path, mode, mtime, content} = input;
  const file = {
    path: path || '',
    mode: (0,ipfs_unixfs__WEBPACK_IMPORTED_MODULE_5__.parseMode)(mode),
    mtime: (0,ipfs_unixfs__WEBPACK_IMPORTED_MODULE_5__.parseMtime)(mtime)
  };
  if (content) {
    file.content = await normaliseContent(content);
  } else if (!path) {
    file.content = await normaliseContent(input);
  }
  return file;
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/files/normalise-candidate-single.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/files/normalise-candidate-single.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseCandidateSingle": () => (/* binding */ normaliseCandidateSingle)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");
/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! browser-readablestream-to-it */ "./node_modules/browser-readablestream-to-it/index.js");
/* harmony import */ var it_peekable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! it-peekable */ "./node_modules/it-peekable/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ "./node_modules/ipfs-core-utils/esm/src/files/utils.js");
/* harmony import */ var ipfs_unixfs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ipfs-unixfs */ "./node_modules/ipfs-unixfs/esm/src/index.js");





async function* normaliseCandidateSingle(input, normaliseContent) {
  if (input === null || input === undefined) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error(`Unexpected input: ${ input }`), 'ERR_UNEXPECTED_INPUT');
  }
  if (typeof input === 'string' || input instanceof String) {
    yield toFileObject(input.toString(), normaliseContent);
    return;
  }
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isBytes)(input) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isBlob)(input)) {
    yield toFileObject(input, normaliseContent);
    return;
  }
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isReadableStream)(input)) {
    input = browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_1__(input);
  }
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    const peekable = it_peekable__WEBPACK_IMPORTED_MODULE_2__(input);
    const {value, done} = await peekable.peek();
    if (done) {
      yield { content: [] };
      return;
    }
    peekable.push(value);
    if (Number.isInteger(value) || (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isBytes)(value) || typeof value === 'string' || value instanceof String) {
      yield toFileObject(peekable, normaliseContent);
      return;
    }
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: multiple items passed - if you are using ipfs.add, please use ipfs.addAll instead'), 'ERR_UNEXPECTED_INPUT');
  }
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.isFileObject)(input)) {
    yield toFileObject(input, normaliseContent);
    return;
  }
  throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: cannot convert "' + typeof input + '" into ImportCandidate'), 'ERR_UNEXPECTED_INPUT');
}
async function toFileObject(input, normaliseContent) {
  const {path, mode, mtime, content} = input;
  const file = {
    path: path || '',
    mode: (0,ipfs_unixfs__WEBPACK_IMPORTED_MODULE_4__.parseMode)(mode),
    mtime: (0,ipfs_unixfs__WEBPACK_IMPORTED_MODULE_4__.parseMtime)(mtime)
  };
  if (content) {
    file.content = await normaliseContent(content);
  } else if (!path) {
    file.content = await normaliseContent(input);
  }
  return file;
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/files/normalise-content.browser.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/files/normalise-content.browser.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseContent": () => (/* binding */ normaliseContent)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");
/* harmony import */ var it_peekable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! it-peekable */ "./node_modules/it-peekable/index.js");
/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser-readablestream-to-it */ "./node_modules/browser-readablestream-to-it/index.js");
/* harmony import */ var it_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! it-all */ "./node_modules/it-all/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./node_modules/ipfs-core-utils/esm/src/files/utils.js");





async function normaliseContent(input) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isBytes)(input)) {
    return new Blob([input]);
  }
  if (typeof input === 'string' || input instanceof String) {
    return new Blob([input.toString()]);
  }
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isBlob)(input)) {
    return input;
  }
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isReadableStream)(input)) {
    input = browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_2__(input);
  }
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    const peekable = it_peekable__WEBPACK_IMPORTED_MODULE_1__(input);
    const {value, done} = await peekable.peek();
    if (done) {
      return itToBlob(peekable);
    }
    peekable.push(value);
    if (Number.isInteger(value)) {
      return new Blob([Uint8Array.from(await it_all__WEBPACK_IMPORTED_MODULE_3__(peekable))]);
    }
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_4__.isBytes)(value) || typeof value === 'string' || value instanceof String) {
      return itToBlob(peekable);
    }
  }
  throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error(`Unexpected input: ${ input }`), 'ERR_UNEXPECTED_INPUT');
}
async function itToBlob(stream) {
  const parts = [];
  for await (const chunk of stream) {
    parts.push(chunk);
  }
  return new Blob(parts);
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/files/normalise-content.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/files/normalise-content.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseContent": () => (/* binding */ normaliseContent)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");
/* harmony import */ var uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uint8arrays/from-string */ "./node_modules/uint8arrays/esm/src/from-string.js");
/* harmony import */ var browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! browser-readablestream-to-it */ "./node_modules/browser-readablestream-to-it/index.js");
/* harmony import */ var blob_to_it__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! blob-to-it */ "./node_modules/blob-to-it/index.js");
/* harmony import */ var it_peekable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! it-peekable */ "./node_modules/it-peekable/index.js");
/* harmony import */ var it_all__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! it-all */ "./node_modules/it-all/index.js");
/* harmony import */ var it_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! it-map */ "./node_modules/it-map/index.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils.js */ "./node_modules/ipfs-core-utils/esm/src/files/utils.js");








async function* toAsyncIterable(thing) {
  yield thing;
}
async function normaliseContent(input) {
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.isBytes)(input)) {
    return toAsyncIterable(toBytes(input));
  }
  if (typeof input === 'string' || input instanceof String) {
    return toAsyncIterable(toBytes(input.toString()));
  }
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.isBlob)(input)) {
    return blob_to_it__WEBPACK_IMPORTED_MODULE_3__(input);
  }
  if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.isReadableStream)(input)) {
    input = browser_readablestream_to_it__WEBPACK_IMPORTED_MODULE_2__(input);
  }
  if (Symbol.iterator in input || Symbol.asyncIterator in input) {
    const peekable = it_peekable__WEBPACK_IMPORTED_MODULE_4__(input);
    const {value, done} = await peekable.peek();
    if (done) {
      return toAsyncIterable(new Uint8Array(0));
    }
    peekable.push(value);
    if (Number.isInteger(value)) {
      return toAsyncIterable(Uint8Array.from(await it_all__WEBPACK_IMPORTED_MODULE_5__(peekable)));
    }
    if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_7__.isBytes)(value) || typeof value === 'string' || value instanceof String) {
      return it_map__WEBPACK_IMPORTED_MODULE_6__(peekable, toBytes);
    }
  }
  throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error(`Unexpected input: ${ input }`), 'ERR_UNEXPECTED_INPUT');
}
function toBytes(chunk) {
  if (chunk instanceof Uint8Array) {
    return chunk;
  }
  if (ArrayBuffer.isView(chunk)) {
    return new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength);
  }
  if (chunk instanceof ArrayBuffer) {
    return new Uint8Array(chunk);
  }
  if (Array.isArray(chunk)) {
    return Uint8Array.from(chunk);
  }
  return (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_1__.fromString)(chunk.toString());
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/files/normalise-input-multiple.browser.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/files/normalise-input-multiple.browser.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseInput": () => (/* binding */ normaliseInput)
/* harmony export */ });
/* harmony import */ var _normalise_content_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalise-content.browser.js */ "./node_modules/ipfs-core-utils/esm/src/files/normalise-content.browser.js");
/* harmony import */ var _normalise_candidate_multiple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalise-candidate-multiple.js */ "./node_modules/ipfs-core-utils/esm/src/files/normalise-candidate-multiple.js");


function normaliseInput(input) {
  return (0,_normalise_candidate_multiple_js__WEBPACK_IMPORTED_MODULE_1__.normaliseCandidateMultiple)(input, _normalise_content_browser_js__WEBPACK_IMPORTED_MODULE_0__.normaliseContent, true);
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/files/normalise-input-single.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/files/normalise-input-single.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseInput": () => (/* binding */ normaliseInput)
/* harmony export */ });
/* harmony import */ var _normalise_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./normalise-content.js */ "./node_modules/ipfs-core-utils/esm/src/files/normalise-content.js");
/* harmony import */ var _normalise_candidate_single_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./normalise-candidate-single.js */ "./node_modules/ipfs-core-utils/esm/src/files/normalise-candidate-single.js");


function normaliseInput(input) {
  return (0,_normalise_candidate_single_js__WEBPACK_IMPORTED_MODULE_1__.normaliseCandidateSingle)(input, _normalise_content_js__WEBPACK_IMPORTED_MODULE_0__.normaliseContent);
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/files/utils.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/files/utils.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isBytes": () => (/* binding */ isBytes),
/* harmony export */   "isBlob": () => (/* binding */ isBlob),
/* harmony export */   "isFileObject": () => (/* binding */ isFileObject),
/* harmony export */   "isReadableStream": () => (/* binding */ isReadableStream)
/* harmony export */ });
function isBytes(obj) {
  return ArrayBuffer.isView(obj) || obj instanceof ArrayBuffer;
}
function isBlob(obj) {
  return obj.constructor && (obj.constructor.name === 'Blob' || obj.constructor.name === 'File') && typeof obj.stream === 'function';
}
function isFileObject(obj) {
  return typeof obj === 'object' && (obj.path || obj.content);
}
const isReadableStream = value => value && typeof value.getReader === 'function';

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/mode-to-string.js":
/*!****************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/mode-to-string.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modeToString": () => (/* binding */ modeToString)
/* harmony export */ });
function modeToString(mode) {
  if (mode == null) {
    return undefined;
  }
  if (typeof mode === 'string') {
    return mode;
  }
  return mode.toString(8).padStart(4, '0');
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/multibases.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/multibases.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Multibases": () => (/* binding */ Multibases)
/* harmony export */ });
const LOAD_BASE = name => Promise.reject(new Error(`No base found for "${ name }"`));
class Multibases {
  constructor(options) {
    this._basesByName = {};
    this._basesByPrefix = {};
    this._loadBase = options.loadBase || LOAD_BASE;
    for (const base of options.bases) {
      this.addBase(base);
    }
  }
  addBase(base) {
    if (this._basesByName[base.name] || this._basesByPrefix[base.prefix]) {
      throw new Error(`Codec already exists for codec "${ base.name }"`);
    }
    this._basesByName[base.name] = base;
    this._basesByPrefix[base.prefix] = base;
  }
  removeBase(base) {
    delete this._basesByName[base.name];
    delete this._basesByPrefix[base.prefix];
  }
  async getBase(nameOrPrefix) {
    if (this._basesByName[nameOrPrefix]) {
      return this._basesByName[nameOrPrefix];
    }
    if (this._basesByPrefix[nameOrPrefix]) {
      return this._basesByPrefix[nameOrPrefix];
    }
    const base = await this._loadBase(nameOrPrefix);
    if (this._basesByName[base.name] == null && this._basesByPrefix[base.prefix] == null) {
      this.addBase(base);
    }
    return base;
  }
  listBases() {
    return Object.values(this._basesByName);
  }
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/multicodecs.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/multicodecs.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Multicodecs": () => (/* binding */ Multicodecs)
/* harmony export */ });
const LOAD_CODEC = codeOrName => Promise.reject(new Error(`No codec found for "${ codeOrName }"`));
class Multicodecs {
  constructor(options) {
    this._codecsByName = {};
    this._codecsByCode = {};
    this._loadCodec = options.loadCodec || LOAD_CODEC;
    for (const codec of options.codecs) {
      this.addCodec(codec);
    }
  }
  addCodec(codec) {
    if (this._codecsByName[codec.name] || this._codecsByCode[codec.code]) {
      throw new Error(`Resolver already exists for codec "${ codec.name }"`);
    }
    this._codecsByName[codec.name] = codec;
    this._codecsByCode[codec.code] = codec;
  }
  removeCodec(codec) {
    delete this._codecsByName[codec.name];
    delete this._codecsByCode[codec.code];
  }
  async getCodec(code) {
    const table = typeof code === 'string' ? this._codecsByName : this._codecsByCode;
    if (table[code]) {
      return table[code];
    }
    const codec = await this._loadCodec(code);
    if (table[code] == null) {
      this.addCodec(codec);
    }
    return codec;
  }
  listCodecs() {
    return Object.values(this._codecsByName);
  }
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/multihashes.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/multihashes.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Multihashes": () => (/* binding */ Multihashes)
/* harmony export */ });
const LOAD_HASHER = codeOrName => Promise.reject(new Error(`No hasher found for "${ codeOrName }"`));
class Multihashes {
  constructor(options) {
    this._hashersByName = {};
    this._hashersByCode = {};
    this._loadHasher = options.loadHasher || LOAD_HASHER;
    for (const hasher of options.hashers) {
      this.addHasher(hasher);
    }
  }
  addHasher(hasher) {
    if (this._hashersByName[hasher.name] || this._hashersByCode[hasher.code]) {
      throw new Error(`Resolver already exists for codec "${ hasher.name }"`);
    }
    this._hashersByName[hasher.name] = hasher;
    this._hashersByCode[hasher.code] = hasher;
  }
  removeHasher(hasher) {
    delete this._hashersByName[hasher.name];
    delete this._hashersByCode[hasher.code];
  }
  async getHasher(code) {
    const table = typeof code === 'string' ? this._hashersByName : this._hashersByCode;
    if (table[code]) {
      return table[code];
    }
    const hasher = await this._loadHasher(code);
    if (table[code] == null) {
      this.addHasher(hasher);
    }
    return hasher;
  }
  listHashers() {
    return Object.values(this._hashersByName);
  }
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "multipartRequest": () => (/* binding */ multipartRequest)
/* harmony export */ });
/* harmony import */ var _files_normalise_input_multiple_browser_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./files/normalise-input-multiple.browser.js */ "./node_modules/ipfs-core-utils/esm/src/files/normalise-input-multiple.browser.js");
/* harmony import */ var _mode_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mode-to-string.js */ "./node_modules/ipfs-core-utils/esm/src/mode-to-string.js");


async function multipartRequest(source, abortController, headers = {}) {
  const parts = [];
  const formData = new FormData();
  let index = 0;
  let total = 0;
  for await (const {content, path, mode, mtime} of (0,_files_normalise_input_multiple_browser_js__WEBPACK_IMPORTED_MODULE_0__.normaliseInput)(source)) {
    let fileSuffix = '';
    const type = content ? 'file' : 'dir';
    if (index > 0) {
      fileSuffix = `-${ index }`;
    }
    let fieldName = type + fileSuffix;
    const qs = [];
    if (mode !== null && mode !== undefined) {
      qs.push(`mode=${ (0,_mode_to_string_js__WEBPACK_IMPORTED_MODULE_1__.modeToString)(mode) }`);
    }
    if (mtime != null) {
      const {secs, nsecs} = mtime;
      qs.push(`mtime=${ secs }`);
      if (nsecs != null) {
        qs.push(`mtime-nsecs=${ nsecs }`);
      }
    }
    if (qs.length) {
      fieldName = `${ fieldName }?${ qs.join('&') }`;
    }
    if (content) {
      formData.set(fieldName, content, path != null ? encodeURIComponent(path) : undefined);
      const end = total + content.size;
      parts.push({
        name: path,
        start: total,
        end
      });
      total = end;
    } else if (path != null) {
      formData.set(fieldName, new File([''], encodeURIComponent(path), { type: 'application/x-directory' }));
    } else {
      throw new Error('path or content or both must be set');
    }
    index++;
  }
  return {
    total,
    parts,
    headers,
    body: formData
  };
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/pins/normalise-input.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/pins/normalise-input.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normaliseInput": () => (/* binding */ normaliseInput)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");


async function* normaliseInput(input) {
  if (input === null || input === undefined) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error(`Unexpected input: ${ input }`), 'ERR_UNEXPECTED_INPUT');
  }
  const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(input);
  if (cid) {
    yield toPin({ cid });
    return;
  }
  if (input instanceof String || typeof input === 'string') {
    yield toPin({ path: input });
    return;
  }
  if (input.cid != null || input.path != null) {
    return yield toPin(input);
  }
  if (Symbol.iterator in input) {
    const iterator = input[Symbol.iterator]();
    const first = iterator.next();
    if (first.done)
      return iterator;
    if (multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(first.value) || first.value instanceof String || typeof first.value === 'string') {
      yield toPin({ cid: first.value });
      for (const cid of iterator) {
        yield toPin({ cid });
      }
      return;
    }
    if (first.value.cid != null || first.value.path != null) {
      yield toPin(first.value);
      for (const obj of iterator) {
        yield toPin(obj);
      }
      return;
    }
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
  }
  if (Symbol.asyncIterator in input) {
    const iterator = input[Symbol.asyncIterator]();
    const first = await iterator.next();
    if (first.done)
      return iterator;
    if (multiformats_cid__WEBPACK_IMPORTED_MODULE_1__.CID.asCID(first.value) || first.value instanceof String || typeof first.value === 'string') {
      yield toPin({ cid: first.value });
      for await (const cid of iterator) {
        yield toPin({ cid });
      }
      return;
    }
    if (first.value.cid != null || first.value.path != null) {
      yield toPin(first.value);
      for await (const obj of iterator) {
        yield toPin(obj);
      }
      return;
    }
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
  }
  throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: ' + typeof input), 'ERR_UNEXPECTED_INPUT');
}
function toPin(input) {
  const path = input.cid || `${ input.path }`;
  if (!path) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Unexpected input: Please path either a CID or an IPFS path'), 'ERR_UNEXPECTED_INPUT');
  }
  const pin = {
    path,
    recursive: input.recursive !== false
  };
  if (input.metadata != null) {
    pin.metadata = input.metadata;
  }
  return pin;
}

/***/ }),

/***/ "./node_modules/ipfs-core-utils/esm/src/to-url-string.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-core-utils/esm/src/to-url-string.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toUrlString": () => (/* binding */ toUrlString)
/* harmony export */ });
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");
/* harmony import */ var multiaddr_to_uri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiaddr-to-uri */ "./node_modules/multiaddr-to-uri/index.js");


function toUrlString(url) {
  try {
    url = multiaddr_to_uri__WEBPACK_IMPORTED_MODULE_1__(new multiaddr__WEBPACK_IMPORTED_MODULE_0__.Multiaddr(url));
  } catch (err) {
  }
  url = url.toString();
  return url;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/add-all.js":
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/add-all.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddAll": () => (/* binding */ createAddAll)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ipfs-core-utils/multipart-request */ "./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/abort-signal.js */ "./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js");
/* harmony import */ var native_abort_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js");







const createAddAll = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(api => {
  async function* addAll(source, options = {}) {
    const controller = new native_abort_controller__WEBPACK_IMPORTED_MODULE_6__.AbortController();
    const signal = (0,_lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_5__.abortSignal)(controller.signal, options.signal);
    const {headers, body, total, parts} = await (0,ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_3__.multipartRequest)(source, controller, options.headers);
    const [progressFn, onUploadProgress] = typeof options.progress === 'function' ? createProgressHandler(total, parts, options.progress) : [
      undefined,
      undefined
    ];
    const res = await api.post('add', {
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__.toUrlSearchParams)({
        'stream-channels': true,
        ...options,
        progress: Boolean(progressFn)
      }),
      onUploadProgress,
      signal,
      headers,
      body
    });
    for await (let file of res.ndjson()) {
      file = (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_1__.objectToCamel)(file);
      if (file.hash !== undefined) {
        yield toCoreInterface(file);
      } else if (progressFn) {
        progressFn(file.bytes || 0, file.name);
      }
    }
  }
  return addAll;
});
const createProgressHandler = (total, parts, progress) => parts ? [
  undefined,
  createOnUploadProgress(total, parts, progress)
] : [
  progress,
  undefined
];
const createOnUploadProgress = (size, parts, progress) => {
  let index = 0;
  const count = parts.length;
  return ({loaded, total}) => {
    const position = Math.floor(loaded / total * size);
    while (index < count) {
      const {start, end, name} = parts[index];
      if (position < end) {
        progress(position - start, name);
        break;
      } else {
        progress(end - start, name);
        index += 1;
      }
    }
  };
};
function toCoreInterface({name, hash, size, mode, mtime, mtimeNsecs}) {
  const output = {
    path: name,
    cid: multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(hash),
    size: parseInt(size)
  };
  if (mode != null) {
    output.mode = parseInt(mode, 8);
  }
  if (mtime != null) {
    output.mtime = {
      secs: mtime,
      nsecs: mtimeNsecs || 0
    };
  }
  return output;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/add.js":
/*!******************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/add.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAdd": () => (/* binding */ createAdd)
/* harmony export */ });
/* harmony import */ var _add_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-all.js */ "./node_modules/ipfs-http-client/esm/src/add-all.js");
/* harmony import */ var it_last__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! it-last */ "./node_modules/it-last/index.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var ipfs_core_utils_files_normalise_input_single__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ipfs-core-utils/files/normalise-input-single */ "./node_modules/ipfs-core-utils/esm/src/files/normalise-input-single.js");




function createAdd(options) {
  const all = (0,_add_all_js__WEBPACK_IMPORTED_MODULE_0__.createAddAll)(options);
  return (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(() => {
    async function add(input, options = {}) {
      return await it_last__WEBPACK_IMPORTED_MODULE_1__(all((0,ipfs_core_utils_files_normalise_input_single__WEBPACK_IMPORTED_MODULE_3__.normaliseInput)(input), options));
    }
    return add;
  })(options);
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/bitswap/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/bitswap/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBitswap": () => (/* binding */ createBitswap)
/* harmony export */ });
/* harmony import */ var _wantlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wantlist.js */ "./node_modules/ipfs-http-client/esm/src/bitswap/wantlist.js");
/* harmony import */ var _wantlist_for_peer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wantlist-for-peer.js */ "./node_modules/ipfs-http-client/esm/src/bitswap/wantlist-for-peer.js");
/* harmony import */ var _stat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stat.js */ "./node_modules/ipfs-http-client/esm/src/bitswap/stat.js");
/* harmony import */ var _unwant_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./unwant.js */ "./node_modules/ipfs-http-client/esm/src/bitswap/unwant.js");




function createBitswap(config) {
  return {
    wantlist: (0,_wantlist_js__WEBPACK_IMPORTED_MODULE_0__.createWantlist)(config),
    wantlistForPeer: (0,_wantlist_for_peer_js__WEBPACK_IMPORTED_MODULE_1__.createWantlistForPeer)(config),
    unwant: (0,_unwant_js__WEBPACK_IMPORTED_MODULE_3__.createUnwant)(config),
    stat: (0,_stat_js__WEBPACK_IMPORTED_MODULE_2__.createStat)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/bitswap/stat.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/bitswap/stat.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStat": () => (/* binding */ createStat)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createStat = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function stat(options = {}) {
    const res = await api.post('bitswap/stat', {
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      signal: options.signal,
      headers: options.headers
    });
    return toCoreInterface(await res.json());
  }
  return stat;
});
function toCoreInterface(res) {
  return {
    provideBufLen: res.ProvideBufLen,
    wantlist: (res.Wantlist || []).map(k => multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(k['/'])),
    peers: res.Peers || [],
    blocksReceived: BigInt(res.BlocksReceived),
    dataReceived: BigInt(res.DataReceived),
    blocksSent: BigInt(res.BlocksSent),
    dataSent: BigInt(res.DataSent),
    dupBlksReceived: BigInt(res.DupBlksReceived),
    dupDataReceived: BigInt(res.DupDataReceived)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/bitswap/unwant.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/bitswap/unwant.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUnwant": () => (/* binding */ createUnwant)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createUnwant = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function unwant(cid, options = {}) {
    const res = await api.post('bitswap/unwant', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    });
    return res.json();
  }
  return unwant;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/bitswap/wantlist-for-peer.js":
/*!****************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/bitswap/wantlist-for-peer.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWantlistForPeer": () => (/* binding */ createWantlistForPeer)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createWantlistForPeer = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function wantlistForPeer(peerId, options = {}) {
    const res = await (await api.post('bitswap/wantlist', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        ...options,
        peer: peerId.toString()
      }),
      headers: options.headers
    })).json();
    return (res.Keys || []).map(k => multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(k['/']));
  }
  return wantlistForPeer;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/bitswap/wantlist.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/bitswap/wantlist.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWantlist": () => (/* binding */ createWantlist)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createWantlist = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function wantlist(options = {}) {
    const res = await (await api.post('bitswap/wantlist', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      headers: options.headers
    })).json();
    return (res.Keys || []).map(k => multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(k['/']));
  }
  return wantlist;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/block/get.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/block/get.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGet": () => (/* binding */ createGet)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createGet = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function get(cid, options = {}) {
    const res = await api.post('block/get', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    });
    return new Uint8Array(await res.arrayBuffer());
  }
  return get;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/block/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/block/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBlock": () => (/* binding */ createBlock)
/* harmony export */ });
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get.js */ "./node_modules/ipfs-http-client/esm/src/block/get.js");
/* harmony import */ var _put_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./put.js */ "./node_modules/ipfs-http-client/esm/src/block/put.js");
/* harmony import */ var _rm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rm.js */ "./node_modules/ipfs-http-client/esm/src/block/rm.js");
/* harmony import */ var _stat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stat.js */ "./node_modules/ipfs-http-client/esm/src/block/stat.js");




function createBlock(config) {
  return {
    get: (0,_get_js__WEBPACK_IMPORTED_MODULE_0__.createGet)(config),
    put: (0,_put_js__WEBPACK_IMPORTED_MODULE_1__.createPut)(config),
    rm: (0,_rm_js__WEBPACK_IMPORTED_MODULE_2__.createRm)(config),
    stat: (0,_stat_js__WEBPACK_IMPORTED_MODULE_3__.createStat)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/block/put.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/block/put.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPut": () => (/* binding */ createPut)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ipfs-core-utils/multipart-request */ "./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/abort-signal.js */ "./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js");
/* harmony import */ var native_abort_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js");






const createPut = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(api => {
  async function put(data, options = {}) {
    const controller = new native_abort_controller__WEBPACK_IMPORTED_MODULE_5__.AbortController();
    const signal = (0,_lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_4__.abortSignal)(controller.signal, options.signal);
    let res;
    try {
      const response = await api.post('block/put', {
        signal: signal,
        searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__.toUrlSearchParams)(options),
        ...await (0,ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_1__.multipartRequest)([data], controller, options.headers)
      });
      res = await response.json();
    } catch (err) {
      if (options.format === 'dag-pb') {
        return put(data, {
          ...options,
          format: 'protobuf'
        });
      } else if (options.format === 'dag-cbor') {
        return put(data, {
          ...options,
          format: 'cbor'
        });
      }
      throw err;
    }
    return multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(res.Key);
  }
  return put;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/block/rm.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/block/rm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRm": () => (/* binding */ createRm)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createRm = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function* rm(cid, options = {}) {
    if (!Array.isArray(cid)) {
      cid = [cid];
    }
    const res = await api.post('block/rm', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: cid.map(cid => cid.toString()),
        'stream-channels': true,
        ...options
      }),
      headers: options.headers
    });
    for await (const removed of res.ndjson()) {
      yield toCoreInterface(removed);
    }
  }
  return rm;
});
function toCoreInterface(removed) {
  const out = { cid: multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(removed.Hash) };
  if (removed.Error) {
    out.error = new Error(removed.Error);
  }
  return out;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/block/stat.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/block/stat.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStat": () => (/* binding */ createStat)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createStat = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function stat(cid, options = {}) {
    const res = await api.post('block/stat', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return {
      cid: multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(data.Key),
      size: data.Size
    };
  }
  return stat;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/bootstrap/add.js":
/*!****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/bootstrap/add.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAdd": () => (/* binding */ createAdd)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");



const createAdd = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function add(addr, options = {}) {
    const res = await api.post('bootstrap/add', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: addr,
        ...options
      }),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return { Peers: Peers.map(ma => new multiaddr__WEBPACK_IMPORTED_MODULE_2__.Multiaddr(ma)) };
  }
  return add;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/bootstrap/clear.js":
/*!******************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/bootstrap/clear.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createClear": () => (/* binding */ createClear)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");



const createClear = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function clear(options = {}) {
    const res = await api.post('bootstrap/rm', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        ...options,
        all: true
      }),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return { Peers: Peers.map(ma => new multiaddr__WEBPACK_IMPORTED_MODULE_2__.Multiaddr(ma)) };
  }
  return clear;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/bootstrap/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/bootstrap/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBootstrap": () => (/* binding */ createBootstrap)
/* harmony export */ });
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add.js */ "./node_modules/ipfs-http-client/esm/src/bootstrap/add.js");
/* harmony import */ var _clear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear.js */ "./node_modules/ipfs-http-client/esm/src/bootstrap/clear.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./node_modules/ipfs-http-client/esm/src/bootstrap/list.js");
/* harmony import */ var _reset_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reset.js */ "./node_modules/ipfs-http-client/esm/src/bootstrap/reset.js");
/* harmony import */ var _rm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rm.js */ "./node_modules/ipfs-http-client/esm/src/bootstrap/rm.js");





function createBootstrap(config) {
  return {
    add: (0,_add_js__WEBPACK_IMPORTED_MODULE_0__.createAdd)(config),
    clear: (0,_clear_js__WEBPACK_IMPORTED_MODULE_1__.createClear)(config),
    list: (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.createList)(config),
    reset: (0,_reset_js__WEBPACK_IMPORTED_MODULE_3__.createReset)(config),
    rm: (0,_rm_js__WEBPACK_IMPORTED_MODULE_4__.createRm)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/bootstrap/list.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/bootstrap/list.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");



const createList = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function list(options = {}) {
    const res = await api.post('bootstrap/list', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return { Peers: Peers.map(ma => new multiaddr__WEBPACK_IMPORTED_MODULE_2__.Multiaddr(ma)) };
  }
  return list;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/bootstrap/reset.js":
/*!******************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/bootstrap/reset.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createReset": () => (/* binding */ createReset)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");



const createReset = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function reset(options = {}) {
    const res = await api.post('bootstrap/add', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        ...options,
        default: true
      }),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return { Peers: Peers.map(ma => new multiaddr__WEBPACK_IMPORTED_MODULE_2__.Multiaddr(ma)) };
  }
  return reset;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/bootstrap/rm.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/bootstrap/rm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRm": () => (/* binding */ createRm)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");



const createRm = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function rm(addr, options = {}) {
    const res = await api.post('bootstrap/rm', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: addr,
        ...options
      }),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return { Peers: Peers.map(ma => new multiaddr__WEBPACK_IMPORTED_MODULE_2__.Multiaddr(ma)) };
  }
  return rm;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/cat.js":
/*!******************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/cat.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCat": () => (/* binding */ createCat)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createCat = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* cat(path, options = {}) {
    const res = await api.post('cat', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: path.toString(),
        ...options
      }),
      headers: options.headers
    });
    yield* res.iterator();
  }
  return cat;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/commands.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/commands.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCommands": () => (/* binding */ createCommands)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createCommands = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  const commands = async (options = {}) => {
    const res = await api.post('commands', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    });
    return res.json();
  };
  return commands;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/config/get-all.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/config/get-all.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGetAll": () => (/* binding */ createGetAll)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createGetAll = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  const getAll = async (options = {}) => {
    const res = await api.post('config/show', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({ ...options }),
      headers: options.headers
    });
    const data = await res.json();
    return data;
  };
  return getAll;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/config/get.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/config/get.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGet": () => (/* binding */ createGet)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createGet = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  const get = async (key, options = {}) => {
    if (!key) {
      throw new Error('key argument is required');
    }
    const res = await api.post('config', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: key,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return data.Value;
  };
  return get;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/config/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/config/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConfig": () => (/* binding */ createConfig)
/* harmony export */ });
/* harmony import */ var _profiles_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profiles/index.js */ "./node_modules/ipfs-http-client/esm/src/config/profiles/index.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./node_modules/ipfs-http-client/esm/src/config/get.js");
/* harmony import */ var _get_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-all.js */ "./node_modules/ipfs-http-client/esm/src/config/get-all.js");
/* harmony import */ var _replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./replace.js */ "./node_modules/ipfs-http-client/esm/src/config/replace.js");
/* harmony import */ var _set_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./set.js */ "./node_modules/ipfs-http-client/esm/src/config/set.js");





function createConfig(config) {
  return {
    getAll: (0,_get_all_js__WEBPACK_IMPORTED_MODULE_2__.createGetAll)(config),
    get: (0,_get_js__WEBPACK_IMPORTED_MODULE_1__.createGet)(config),
    set: (0,_set_js__WEBPACK_IMPORTED_MODULE_4__.createSet)(config),
    replace: (0,_replace_js__WEBPACK_IMPORTED_MODULE_3__.createReplace)(config),
    profiles: (0,_profiles_index_js__WEBPACK_IMPORTED_MODULE_0__.createProfiles)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/config/profiles/apply.js":
/*!************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/config/profiles/apply.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createApply": () => (/* binding */ createApply)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createApply = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function apply(profile, options = {}) {
    const res = await api.post('config/profile/apply', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: profile,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return {
      original: data.OldCfg,
      updated: data.NewCfg
    };
  }
  return apply;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/config/profiles/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/config/profiles/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProfiles": () => (/* binding */ createProfiles)
/* harmony export */ });
/* harmony import */ var _apply_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apply.js */ "./node_modules/ipfs-http-client/esm/src/config/profiles/apply.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ "./node_modules/ipfs-http-client/esm/src/config/profiles/list.js");


function createProfiles(config) {
  return {
    apply: (0,_apply_js__WEBPACK_IMPORTED_MODULE_0__.createApply)(config),
    list: (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.createList)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/config/profiles/list.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/config/profiles/list.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createList = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function list(options = {}) {
    const res = await api.post('config/profile/list', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      headers: options.headers
    });
    const data = await res.json();
    return data.map(profile => (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(profile));
  }
  return list;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/config/replace.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/config/replace.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createReplace": () => (/* binding */ createReplace)
/* harmony export */ });
/* harmony import */ var uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uint8arrays/from-string */ "./node_modules/uint8arrays/esm/src/from-string.js");
/* harmony import */ var ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ipfs-core-utils/multipart-request */ "./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/abort-signal.js */ "./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js");
/* harmony import */ var native_abort_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js");






const createReplace = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(api => {
  const replace = async (config, options = {}) => {
    const controller = new native_abort_controller__WEBPACK_IMPORTED_MODULE_5__.AbortController();
    const signal = (0,_lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_4__.abortSignal)(controller.signal, options.signal);
    const res = await api.post('config/replace', {
      signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__.toUrlSearchParams)(options),
      ...await (0,ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_1__.multipartRequest)([(0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_0__.fromString)(JSON.stringify(config))], controller, options.headers)
    });
    await res.text();
  };
  return replace;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/config/set.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/config/set.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSet": () => (/* binding */ createSet)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createSet = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  const set = async (key, value, options = {}) => {
    if (typeof key !== 'string') {
      throw new Error('Invalid key type');
    }
    const params = {
      ...options,
      ...encodeParam(key, value)
    };
    const res = await api.post('config', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(params),
      headers: options.headers
    });
    await res.text();
  };
  return set;
});
const encodeParam = (key, value) => {
  switch (typeof value) {
  case 'boolean':
    return {
      arg: [
        key,
        value.toString()
      ],
      bool: true
    };
  case 'string':
    return {
      arg: [
        key,
        value
      ]
    };
  default:
    return {
      arg: [
        key,
        JSON.stringify(value)
      ],
      json: true
    };
  }
};

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dag/export.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dag/export.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createExport": () => (/* binding */ createExport)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createExport = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* dagExport(root, options = {}) {
    const res = await api.post('dag/export', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({ arg: root.toString() }),
      headers: options.headers
    });
    yield* res.iterator();
  }
  return dagExport;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dag/get.js":
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dag/get.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGet": () => (/* binding */ createGet)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_resolve_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/resolve.js */ "./node_modules/ipfs-http-client/esm/src/lib/resolve.js");
/* harmony import */ var it_first__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! it-first */ "./node_modules/it-first/index.js");
/* harmony import */ var it_last__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! it-last */ "./node_modules/it-last/index.js");
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");
/* harmony import */ var _block_get_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../block/get.js */ "./node_modules/ipfs-http-client/esm/src/block/get.js");






const createGet = (codecs, options) => {
  const fn = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)((api, opts) => {
    const getBlock = (0,_block_get_js__WEBPACK_IMPORTED_MODULE_5__.createGet)(opts);
    const get = async (cid, options = {}) => {
      if (options.path) {
        const entry = options.localResolve ? await it_first__WEBPACK_IMPORTED_MODULE_2__((0,_lib_resolve_js__WEBPACK_IMPORTED_MODULE_1__.resolve)(cid, options.path, codecs, getBlock, options)) : await it_last__WEBPACK_IMPORTED_MODULE_3__((0,_lib_resolve_js__WEBPACK_IMPORTED_MODULE_1__.resolve)(cid, options.path, codecs, getBlock, options));
        const result = entry;
        if (!result) {
          throw err_code__WEBPACK_IMPORTED_MODULE_4__(new Error('Not found'), 'ERR_NOT_FOUND');
        }
        return result;
      }
      const codec = await codecs.getCodec(cid.code);
      const block = await getBlock(cid, options);
      const node = codec.decode(block);
      return {
        value: node,
        remainderPath: ''
      };
    };
    return get;
  });
  return fn(options);
};

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dag/import.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dag/import.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createImport": () => (/* binding */ createImport)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/abort-signal.js */ "./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js");
/* harmony import */ var ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ipfs-core-utils/multipart-request */ "./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js");
/* harmony import */ var native_abort_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js");
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");






const createImport = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* dagImport(source, options = {}) {
    const controller = new native_abort_controller__WEBPACK_IMPORTED_MODULE_4__.AbortController();
    const signal = (0,_lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_2__.abortSignal)(controller.signal, options.signal);
    const {headers, body} = await (0,ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_3__.multipartRequest)(source, controller, options.headers);
    const res = await api.post('dag/import', {
      signal,
      headers,
      body,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({ 'pin-roots': options.pinRoots })
    });
    for await (const {Root} of res.ndjson()) {
      if (Root !== undefined) {
        const {
          Cid: {'/': Cid},
          PinErrorMsg
        } = Root;
        yield {
          root: {
            cid: multiformats_cid__WEBPACK_IMPORTED_MODULE_5__.CID.parse(Cid),
            pinErrorMsg: PinErrorMsg
          }
        };
      }
    }
  }
  return dagImport;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dag/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dag/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDag": () => (/* binding */ createDag)
/* harmony export */ });
/* harmony import */ var _export_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./export.js */ "./node_modules/ipfs-http-client/esm/src/dag/export.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./node_modules/ipfs-http-client/esm/src/dag/get.js");
/* harmony import */ var _import_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import.js */ "./node_modules/ipfs-http-client/esm/src/dag/import.js");
/* harmony import */ var _put_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./put.js */ "./node_modules/ipfs-http-client/esm/src/dag/put.js");
/* harmony import */ var _resolve_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolve.js */ "./node_modules/ipfs-http-client/esm/src/dag/resolve.js");





function createDag(codecs, config) {
  return {
    export: (0,_export_js__WEBPACK_IMPORTED_MODULE_0__.createExport)(config),
    get: (0,_get_js__WEBPACK_IMPORTED_MODULE_1__.createGet)(codecs, config),
    import: (0,_import_js__WEBPACK_IMPORTED_MODULE_2__.createImport)(config),
    put: (0,_put_js__WEBPACK_IMPORTED_MODULE_3__.createPut)(codecs, config),
    resolve: (0,_resolve_js__WEBPACK_IMPORTED_MODULE_4__.createResolve)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dag/put.js":
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dag/put.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPut": () => (/* binding */ createPut)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ipfs-core-utils/multipart-request */ "./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/abort-signal.js */ "./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js");
/* harmony import */ var native_abort_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js");






const createPut = (codecs, options) => {
  const fn = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
    const put = async (dagNode, options = {}) => {
      const settings = {
        storeCodec: 'dag-cbor',
        hashAlg: 'sha2-256',
        ...options
      };
      let serialized;
      if (settings.inputCodec) {
        if (!(dagNode instanceof Uint8Array)) {
          throw new Error('Can only inputCodec on raw bytes that can be decoded');
        }
        serialized = dagNode;
      } else {
        const storeCodec = await codecs.getCodec(settings.storeCodec);
        serialized = storeCodec.encode(dagNode);
        settings.inputCodec = settings.storeCodec;
      }
      const controller = new native_abort_controller__WEBPACK_IMPORTED_MODULE_5__.AbortController();
      const signal = (0,_lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_4__.abortSignal)(controller.signal, settings.signal);
      const res = await api.post('dag/put', {
        timeout: settings.timeout,
        signal,
        searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__.toUrlSearchParams)(settings),
        ...await (0,ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_2__.multipartRequest)([serialized], controller, settings.headers)
      });
      const data = await res.json();
      return multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(data.Cid['/']);
    };
    return put;
  });
  return fn(options);
};

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dag/resolve.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dag/resolve.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createResolve": () => (/* binding */ createResolve)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createResolve = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  const resolve = async (ipfsPath, options = {}) => {
    const res = await api.post('dag/resolve', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: `${ ipfsPath }${ options.path ? `/${ options.path }`.replace(/\/[/]+/g, '/') : '' }`,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return {
      cid: multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(data.Cid['/']),
      remainderPath: data.RemPath
    };
  };
  return resolve;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dht/find-peer.js":
/*!****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dht/find-peer.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFindPeer": () => (/* binding */ createFindPeer)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _map_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-event.js */ "./node_modules/ipfs-http-client/esm/src/dht/map-event.js");



const createFindPeer = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* findPeer(peerId, options = {}) {
    const res = await api.post('dht/findpeer', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: peerId,
        ...options
      }),
      headers: options.headers
    });
    for await (const event of res.ndjson()) {
      yield (0,_map_event_js__WEBPACK_IMPORTED_MODULE_2__.mapEvent)(event);
    }
  }
  return findPeer;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dht/find-provs.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dht/find-provs.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFindProvs": () => (/* binding */ createFindProvs)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _map_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-event.js */ "./node_modules/ipfs-http-client/esm/src/dht/map-event.js");



const createFindProvs = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* findProvs(cid, options = {}) {
    const res = await api.post('dht/findprovs', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: cid.toString(),
        ...options
      }),
      headers: options.headers
    });
    for await (const event of res.ndjson()) {
      yield (0,_map_event_js__WEBPACK_IMPORTED_MODULE_2__.mapEvent)(event);
    }
  }
  return findProvs;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dht/get.js":
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dht/get.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGet": () => (/* binding */ createGet)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _map_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-event.js */ "./node_modules/ipfs-http-client/esm/src/dht/map-event.js");
/* harmony import */ var uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uint8arrays/to-string */ "./node_modules/uint8arrays/esm/src/to-string.js");




const createGet = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* get(key, options = {}) {
    const res = await api.post('dht/get', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: key instanceof Uint8Array ? (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_3__.toString)(key) : key.toString(),
        ...options
      }),
      headers: options.headers
    });
    for await (const event of res.ndjson()) {
      yield (0,_map_event_js__WEBPACK_IMPORTED_MODULE_2__.mapEvent)(event);
    }
  }
  return get;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dht/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dht/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDht": () => (/* binding */ createDht)
/* harmony export */ });
/* harmony import */ var _find_peer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./find-peer.js */ "./node_modules/ipfs-http-client/esm/src/dht/find-peer.js");
/* harmony import */ var _find_provs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./find-provs.js */ "./node_modules/ipfs-http-client/esm/src/dht/find-provs.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get.js */ "./node_modules/ipfs-http-client/esm/src/dht/get.js");
/* harmony import */ var _provide_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provide.js */ "./node_modules/ipfs-http-client/esm/src/dht/provide.js");
/* harmony import */ var _put_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./put.js */ "./node_modules/ipfs-http-client/esm/src/dht/put.js");
/* harmony import */ var _query_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./query.js */ "./node_modules/ipfs-http-client/esm/src/dht/query.js");






function createDht(config) {
  return {
    findPeer: (0,_find_peer_js__WEBPACK_IMPORTED_MODULE_0__.createFindPeer)(config),
    findProvs: (0,_find_provs_js__WEBPACK_IMPORTED_MODULE_1__.createFindProvs)(config),
    get: (0,_get_js__WEBPACK_IMPORTED_MODULE_2__.createGet)(config),
    provide: (0,_provide_js__WEBPACK_IMPORTED_MODULE_3__.createProvide)(config),
    put: (0,_put_js__WEBPACK_IMPORTED_MODULE_4__.createPut)(config),
    query: (0,_query_js__WEBPACK_IMPORTED_MODULE_5__.createQuery)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dht/map-event.js":
/*!****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dht/map-event.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapEvent": () => (/* binding */ mapEvent)
/* harmony export */ });
/* harmony import */ var uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uint8arrays/from-string */ "./node_modules/uint8arrays/esm/src/from-string.js");
/* harmony import */ var _response_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response-types.js */ "./node_modules/ipfs-http-client/esm/src/dht/response-types.js");
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");



const mapEvent = event => {
  if (event.Type === _response_types_js__WEBPACK_IMPORTED_MODULE_1__.SendingQuery) {
    return {
      to: event.ID,
      name: 'SENDING_QUERY',
      type: event.Type
    };
  }
  if (event.Type === _response_types_js__WEBPACK_IMPORTED_MODULE_1__.PeerResponse) {
    return {
      from: event.ID,
      name: 'PEER_RESPONSE',
      type: event.Type,
      messageType: 0,
      messageName: 'PUT_VALUE',
      closer: (event.Responses || []).map(({ID, Addrs}) => ({
        id: ID,
        multiaddrs: Addrs.map(addr => new multiaddr__WEBPACK_IMPORTED_MODULE_2__.Multiaddr(addr))
      })),
      providers: (event.Responses || []).map(({ID, Addrs}) => ({
        id: ID,
        multiaddrs: Addrs.map(addr => new multiaddr__WEBPACK_IMPORTED_MODULE_2__.Multiaddr(addr))
      }))
    };
  }
  if (event.Type === _response_types_js__WEBPACK_IMPORTED_MODULE_1__.FinalPeer) {
    let peer = {
      id: event.ID,
      multiaddrs: []
    };
    if (event.Responses && event.Responses.length) {
      peer = {
        id: event.Responses[0].ID,
        multiaddrs: event.Responses[0].Addrs.map(addr => new multiaddr__WEBPACK_IMPORTED_MODULE_2__.Multiaddr(addr))
      };
    }
    return {
      from: event.ID,
      name: 'FINAL_PEER',
      type: event.Type,
      peer
    };
  }
  if (event.Type === _response_types_js__WEBPACK_IMPORTED_MODULE_1__.QueryError) {
    return {
      from: event.ID,
      name: 'QUERY_ERROR',
      type: event.Type,
      error: new Error(event.Extra)
    };
  }
  if (event.Type === _response_types_js__WEBPACK_IMPORTED_MODULE_1__.Provider) {
    return {
      from: event.ID,
      name: 'PROVIDER',
      type: event.Type,
      providers: event.Responses.map(({ID, Addrs}) => ({
        id: ID,
        multiaddrs: Addrs.map(addr => new multiaddr__WEBPACK_IMPORTED_MODULE_2__.Multiaddr(addr))
      }))
    };
  }
  if (event.Type === _response_types_js__WEBPACK_IMPORTED_MODULE_1__.Value) {
    return {
      from: event.ID,
      name: 'VALUE',
      type: event.Type,
      value: (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_0__.fromString)(event.Extra, 'base64pad')
    };
  }
  if (event.Type === _response_types_js__WEBPACK_IMPORTED_MODULE_1__.AddingPeer) {
    const peers = event.Responses.map(({ID}) => ID);
    if (!peers.length) {
      throw new Error('No peer found');
    }
    return {
      name: 'ADDING_PEER',
      type: event.Type,
      peer: peers[0]
    };
  }
  if (event.Type === _response_types_js__WEBPACK_IMPORTED_MODULE_1__.DialingPeer) {
    return {
      name: 'DIALING_PEER',
      type: event.Type,
      peer: event.ID
    };
  }
  throw new Error('Unknown DHT event type');
};

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dht/provide.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dht/provide.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProvide": () => (/* binding */ createProvide)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _map_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-event.js */ "./node_modules/ipfs-http-client/esm/src/dht/map-event.js");



const createProvide = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* provide(cids, options = { recursive: false }) {
    const cidArr = Array.isArray(cids) ? cids : [cids];
    const res = await api.post('dht/provide', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: cidArr.map(cid => cid.toString()),
        ...options
      }),
      headers: options.headers
    });
    for await (const event of res.ndjson()) {
      yield (0,_map_event_js__WEBPACK_IMPORTED_MODULE_2__.mapEvent)(event);
    }
  }
  return provide;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dht/put.js":
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dht/put.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPut": () => (/* binding */ createPut)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ipfs-core-utils/multipart-request */ "./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js");
/* harmony import */ var _lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/abort-signal.js */ "./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js");
/* harmony import */ var native_abort_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js");
/* harmony import */ var uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uint8arrays/to-string */ "./node_modules/uint8arrays/esm/src/to-string.js");
/* harmony import */ var _map_event_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map-event.js */ "./node_modules/ipfs-http-client/esm/src/dht/map-event.js");







const createPut = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* put(key, value, options = {}) {
    const controller = new native_abort_controller__WEBPACK_IMPORTED_MODULE_4__.AbortController();
    const signal = (0,_lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_3__.abortSignal)(controller.signal, options.signal);
    const res = await api.post('dht/put', {
      signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: key instanceof Uint8Array ? (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_5__.toString)(key) : key.toString(),
        ...options
      }),
      ...await (0,ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_2__.multipartRequest)([value], controller, options.headers)
    });
    for await (const event of res.ndjson()) {
      yield (0,_map_event_js__WEBPACK_IMPORTED_MODULE_6__.mapEvent)(event);
    }
  }
  return put;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dht/query.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dht/query.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createQuery": () => (/* binding */ createQuery)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _map_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-event.js */ "./node_modules/ipfs-http-client/esm/src/dht/map-event.js");



const createQuery = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* query(peerId, options = {}) {
    const res = await api.post('dht/query', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: peerId.toString(),
        ...options
      }),
      headers: options.headers
    });
    for await (const event of res.ndjson()) {
      yield (0,_map_event_js__WEBPACK_IMPORTED_MODULE_2__.mapEvent)(event);
    }
  }
  return query;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dht/response-types.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dht/response-types.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SendingQuery": () => (/* binding */ SendingQuery),
/* harmony export */   "PeerResponse": () => (/* binding */ PeerResponse),
/* harmony export */   "FinalPeer": () => (/* binding */ FinalPeer),
/* harmony export */   "QueryError": () => (/* binding */ QueryError),
/* harmony export */   "Provider": () => (/* binding */ Provider),
/* harmony export */   "Value": () => (/* binding */ Value),
/* harmony export */   "AddingPeer": () => (/* binding */ AddingPeer),
/* harmony export */   "DialingPeer": () => (/* binding */ DialingPeer)
/* harmony export */ });
const SendingQuery = 0;
const PeerResponse = 1;
const FinalPeer = 2;
const QueryError = 3;
const Provider = 4;
const Value = 5;
const AddingPeer = 6;
const DialingPeer = 7;

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/diag/cmds.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/diag/cmds.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCmds": () => (/* binding */ createCmds)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createCmds = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function cmds(options = {}) {
    const res = await api.post('diag/cmds', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    });
    return res.json();
  }
  return cmds;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/diag/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/diag/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDiag": () => (/* binding */ createDiag)
/* harmony export */ });
/* harmony import */ var _cmds_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cmds.js */ "./node_modules/ipfs-http-client/esm/src/diag/cmds.js");
/* harmony import */ var _net_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./net.js */ "./node_modules/ipfs-http-client/esm/src/diag/net.js");
/* harmony import */ var _sys_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sys.js */ "./node_modules/ipfs-http-client/esm/src/diag/sys.js");



function createDiag(config) {
  return {
    cmds: (0,_cmds_js__WEBPACK_IMPORTED_MODULE_0__.createCmds)(config),
    net: (0,_net_js__WEBPACK_IMPORTED_MODULE_1__.createNet)(config),
    sys: (0,_sys_js__WEBPACK_IMPORTED_MODULE_2__.createSys)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/diag/net.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/diag/net.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNet": () => (/* binding */ createNet)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createNet = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function net(options = {}) {
    const res = await api.post('diag/net', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    });
    return res.json();
  }
  return net;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/diag/sys.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/diag/sys.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSys": () => (/* binding */ createSys)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createSys = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function sys(options = {}) {
    const res = await api.post('diag/sys', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    });
    return res.json();
  }
  return sys;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/dns.js":
/*!******************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/dns.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDns": () => (/* binding */ createDns)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createDns = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  const dns = async (domain, options = {}) => {
    const res = await api.post('dns', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: domain,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return data.Path;
  };
  return dns;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/chmod.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/chmod.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createChmod": () => (/* binding */ createChmod)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createChmod = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function chmod(path, mode, options = {}) {
    const res = await api.post('files/chmod', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: path,
        mode,
        ...options
      }),
      headers: options.headers
    });
    await res.text();
  }
  return chmod;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/cp.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/cp.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCp": () => (/* binding */ createCp)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createCp = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function cp(sources, destination, options = {}) {
    const sourceArr = Array.isArray(sources) ? sources : [sources];
    const res = await api.post('files/cp', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: sourceArr.concat(destination).map(src => multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.asCID(src) ? `/ipfs/${ src }` : src),
        ...options
      }),
      headers: options.headers
    });
    await res.text();
  }
  return cp;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/flush.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/flush.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFlush": () => (/* binding */ createFlush)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createFlush = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function flush(path, options = {}) {
    if (!path || typeof path !== 'string') {
      throw new Error('ipfs.files.flush requires a path');
    }
    const res = await api.post('files/flush', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(data.Cid);
  }
  return flush;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFiles": () => (/* binding */ createFiles)
/* harmony export */ });
/* harmony import */ var _chmod_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chmod.js */ "./node_modules/ipfs-http-client/esm/src/files/chmod.js");
/* harmony import */ var _cp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cp.js */ "./node_modules/ipfs-http-client/esm/src/files/cp.js");
/* harmony import */ var _flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flush.js */ "./node_modules/ipfs-http-client/esm/src/files/flush.js");
/* harmony import */ var _ls_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ls.js */ "./node_modules/ipfs-http-client/esm/src/files/ls.js");
/* harmony import */ var _mkdir_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mkdir.js */ "./node_modules/ipfs-http-client/esm/src/files/mkdir.js");
/* harmony import */ var _mv_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mv.js */ "./node_modules/ipfs-http-client/esm/src/files/mv.js");
/* harmony import */ var _read_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./read.js */ "./node_modules/ipfs-http-client/esm/src/files/read.js");
/* harmony import */ var _rm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rm.js */ "./node_modules/ipfs-http-client/esm/src/files/rm.js");
/* harmony import */ var _stat_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./stat.js */ "./node_modules/ipfs-http-client/esm/src/files/stat.js");
/* harmony import */ var _touch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./touch.js */ "./node_modules/ipfs-http-client/esm/src/files/touch.js");
/* harmony import */ var _write_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./write.js */ "./node_modules/ipfs-http-client/esm/src/files/write.js");











function createFiles(config) {
  return {
    chmod: (0,_chmod_js__WEBPACK_IMPORTED_MODULE_0__.createChmod)(config),
    cp: (0,_cp_js__WEBPACK_IMPORTED_MODULE_1__.createCp)(config),
    flush: (0,_flush_js__WEBPACK_IMPORTED_MODULE_2__.createFlush)(config),
    ls: (0,_ls_js__WEBPACK_IMPORTED_MODULE_3__.createLs)(config),
    mkdir: (0,_mkdir_js__WEBPACK_IMPORTED_MODULE_4__.createMkdir)(config),
    mv: (0,_mv_js__WEBPACK_IMPORTED_MODULE_5__.createMv)(config),
    read: (0,_read_js__WEBPACK_IMPORTED_MODULE_6__.createRead)(config),
    rm: (0,_rm_js__WEBPACK_IMPORTED_MODULE_7__.createRm)(config),
    stat: (0,_stat_js__WEBPACK_IMPORTED_MODULE_8__.createStat)(config),
    touch: (0,_touch_js__WEBPACK_IMPORTED_MODULE_9__.createTouch)(config),
    write: (0,_write_js__WEBPACK_IMPORTED_MODULE_10__.createWrite)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/ls.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/ls.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLs": () => (/* binding */ createLs)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_object_to_camel_with_metadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/object-to-camel-with-metadata.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel-with-metadata.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");




const createLs = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(api => {
  async function* ls(path, options = {}) {
    if (!path) {
      throw new Error('ipfs.files.ls requires a path');
    }
    const res = await api.post('files/ls', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__.toUrlSearchParams)({
        arg: multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.asCID(path) ? `/ipfs/${ path }` : path,
        long: true,
        ...options,
        stream: true
      }),
      headers: options.headers
    });
    for await (const result of res.ndjson()) {
      if ('Entries' in result) {
        for (const entry of result.Entries || []) {
          yield toCoreInterface((0,_lib_object_to_camel_with_metadata_js__WEBPACK_IMPORTED_MODULE_1__.objectToCamelWithMetadata)(entry));
        }
      } else {
        yield toCoreInterface((0,_lib_object_to_camel_with_metadata_js__WEBPACK_IMPORTED_MODULE_1__.objectToCamelWithMetadata)(result));
      }
    }
  }
  return ls;
});
function toCoreInterface(entry) {
  if (entry.hash) {
    entry.cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(entry.hash);
  }
  delete entry.hash;
  entry.type = entry.type === 1 ? 'directory' : 'file';
  return entry;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/mkdir.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/mkdir.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMkdir": () => (/* binding */ createMkdir)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createMkdir = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function mkdir(path, options = {}) {
    const res = await api.post('files/mkdir', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    await res.text();
  }
  return mkdir;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/mv.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/mv.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMv": () => (/* binding */ createMv)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createMv = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function mv(sources, destination, options = {}) {
    if (!Array.isArray(sources)) {
      sources = [sources];
    }
    const res = await api.post('files/mv', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: sources.concat(destination),
        ...options
      }),
      headers: options.headers
    });
    await res.text();
  }
  return mv;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/read.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/read.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRead": () => (/* binding */ createRead)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var stream_to_it_source_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stream-to-it/source.js */ "./node_modules/stream-to-it/source.js");



const createRead = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* read(path, options = {}) {
    const res = await api.post('files/read', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: path,
        count: options.length,
        ...options
      }),
      headers: options.headers
    });
    yield* stream_to_it_source_js__WEBPACK_IMPORTED_MODULE_2__(res.body);
  }
  return read;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/rm.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/rm.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRm": () => (/* binding */ createRm)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var ipfs_utils_src_http_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ipfs-utils/src/http.js */ "./node_modules/ipfs-utils/src/http.js");



const createRm = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function rm(path, options = {}) {
    const res = await api.post('files/rm', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    const body = await res.text();
    if (body !== '') {
      const error = new ipfs_utils_src_http_js__WEBPACK_IMPORTED_MODULE_2__.HTTPError(res);
      error.message = body;
      throw error;
    }
  }
  return rm;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/stat.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/stat.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStat": () => (/* binding */ createStat)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_object_to_camel_with_metadata_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/object-to-camel-with-metadata.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel-with-metadata.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");




const createStat = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(api => {
  async function stat(path, options = {}) {
    const res = await api.post('files/stat', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__.toUrlSearchParams)({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    data.WithLocality = data.WithLocality || false;
    return toCoreInterface((0,_lib_object_to_camel_with_metadata_js__WEBPACK_IMPORTED_MODULE_1__.objectToCamelWithMetadata)(data));
  }
  return stat;
});
function toCoreInterface(entry) {
  entry.cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(entry.hash);
  delete entry.hash;
  return entry;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/touch.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/touch.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTouch": () => (/* binding */ createTouch)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createTouch = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function touch(path, options = {}) {
    const res = await api.post('files/touch', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    await res.text();
  }
  return touch;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/files/write.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/files/write.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWrite": () => (/* binding */ createWrite)
/* harmony export */ });
/* harmony import */ var _lib_mode_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/mode-to-string.js */ "./node_modules/ipfs-http-client/esm/src/lib/mode-to-string.js");
/* harmony import */ var _lib_parse_mtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/parse-mtime.js */ "./node_modules/ipfs-http-client/esm/src/lib/parse-mtime.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ipfs-core-utils/multipart-request */ "./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/abort-signal.js */ "./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js");
/* harmony import */ var native_abort_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js");







const createWrite = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(api => {
  async function write(path, input, options = {}) {
    const controller = new native_abort_controller__WEBPACK_IMPORTED_MODULE_6__.AbortController();
    const signal = (0,_lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_5__.abortSignal)(controller.signal, options.signal);
    const res = await api.post('files/write', {
      signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_4__.toUrlSearchParams)({
        arg: path,
        streamChannels: true,
        count: options.length,
        ...options
      }),
      ...await (0,ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_3__.multipartRequest)([{
          content: input,
          path: 'arg',
          mode: (0,_lib_mode_to_string_js__WEBPACK_IMPORTED_MODULE_0__.modeToString)(options.mode),
          mtime: (0,_lib_parse_mtime_js__WEBPACK_IMPORTED_MODULE_1__.parseMtime)(options.mtime)
        }], controller, options.headers)
    });
    await res.text();
  }
  return write;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/get-endpoint-config.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/get-endpoint-config.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGetEndpointConfig": () => (/* binding */ createGetEndpointConfig)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");

const createGetEndpointConfig = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  return () => {
    const url = new URL(api.opts.base || '');
    return {
      host: url.hostname,
      port: url.port,
      protocol: url.protocol,
      pathname: url.pathname,
      'api-path': url.pathname
    };
  };
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/get.js":
/*!******************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/get.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGet": () => (/* binding */ createGet)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createGet = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function* get(path, options = {}) {
    const opts = {
      arg: `${ path instanceof Uint8Array ? multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.decode(path) : path }`,
      ...options
    };
    if (opts.compressionLevel) {
      opts['compression-level'] = opts.compressionLevel;
      delete opts.compressionLevel;
    }
    const res = await api.post('get', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(opts),
      headers: options.headers
    });
    yield* res.iterator();
  }
  return get;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/id.js":
/*!*****************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/id.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createId": () => (/* binding */ createId)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");




const createId = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(api => {
  async function id(options = {}) {
    const res = await api.post('id', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__.toUrlSearchParams)({
        arg: options.peerId ? options.peerId.toString() : undefined,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    const output = { ...(0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(data) };
    if (output.addresses) {
      output.addresses = output.addresses.map(ma => new multiaddr__WEBPACK_IMPORTED_MODULE_1__.Multiaddr(ma));
    }
    return output;
  }
  return id;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/index.js":
/*!********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "CID": () => (/* reexport safe */ multiformats_cid__WEBPACK_IMPORTED_MODULE_43__.CID),
/* harmony export */   "multiaddr": () => (/* reexport safe */ multiaddr__WEBPACK_IMPORTED_MODULE_44__.Multiaddr),
/* harmony export */   "urlSource": () => (/* reexport default export from named module */ ipfs_utils_src_files_url_source_js__WEBPACK_IMPORTED_MODULE_45__),
/* harmony export */   "globSource": () => (/* binding */ globSource)
/* harmony export */ });
/* harmony import */ var ipfs_core_utils_multibases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ipfs-core-utils/multibases */ "./node_modules/ipfs-core-utils/esm/src/multibases.js");
/* harmony import */ var ipfs_core_utils_multicodecs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ipfs-core-utils/multicodecs */ "./node_modules/ipfs-core-utils/esm/src/multicodecs.js");
/* harmony import */ var ipfs_core_utils_multihashes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ipfs-core-utils/multihashes */ "./node_modules/ipfs-core-utils/esm/src/multihashes.js");
/* harmony import */ var _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ipld/dag-pb */ "./node_modules/@ipld/dag-pb/esm/src/index.js");
/* harmony import */ var _ipld_dag_cbor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ipld/dag-cbor */ "./node_modules/@ipld/dag-cbor/esm/index.js");
/* harmony import */ var _ipld_dag_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ipld/dag-json */ "./node_modules/@ipld/dag-json/esm/index.js");
/* harmony import */ var multiformats_hashes_identity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! multiformats/hashes/identity */ "./node_modules/multiformats/esm/src/hashes/identity.js");
/* harmony import */ var multiformats_basics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! multiformats/basics */ "./node_modules/multiformats/esm/src/basics.js");
/* harmony import */ var _bitswap_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bitswap/index.js */ "./node_modules/ipfs-http-client/esm/src/bitswap/index.js");
/* harmony import */ var _block_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./block/index.js */ "./node_modules/ipfs-http-client/esm/src/block/index.js");
/* harmony import */ var _bootstrap_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bootstrap/index.js */ "./node_modules/ipfs-http-client/esm/src/bootstrap/index.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./config/index.js */ "./node_modules/ipfs-http-client/esm/src/config/index.js");
/* harmony import */ var _dag_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dag/index.js */ "./node_modules/ipfs-http-client/esm/src/dag/index.js");
/* harmony import */ var _dht_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dht/index.js */ "./node_modules/ipfs-http-client/esm/src/dht/index.js");
/* harmony import */ var _diag_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./diag/index.js */ "./node_modules/ipfs-http-client/esm/src/diag/index.js");
/* harmony import */ var _files_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./files/index.js */ "./node_modules/ipfs-http-client/esm/src/files/index.js");
/* harmony import */ var _key_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./key/index.js */ "./node_modules/ipfs-http-client/esm/src/key/index.js");
/* harmony import */ var _log_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./log/index.js */ "./node_modules/ipfs-http-client/esm/src/log/index.js");
/* harmony import */ var _name_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./name/index.js */ "./node_modules/ipfs-http-client/esm/src/name/index.js");
/* harmony import */ var _object_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./object/index.js */ "./node_modules/ipfs-http-client/esm/src/object/index.js");
/* harmony import */ var _pin_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pin/index.js */ "./node_modules/ipfs-http-client/esm/src/pin/index.js");
/* harmony import */ var _pubsub_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pubsub/index.js */ "./node_modules/ipfs-http-client/esm/src/pubsub/index.js");
/* harmony import */ var _refs_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./refs/index.js */ "./node_modules/ipfs-http-client/esm/src/refs/index.js");
/* harmony import */ var _repo_index_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./repo/index.js */ "./node_modules/ipfs-http-client/esm/src/repo/index.js");
/* harmony import */ var _stats_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./stats/index.js */ "./node_modules/ipfs-http-client/esm/src/stats/index.js");
/* harmony import */ var _swarm_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./swarm/index.js */ "./node_modules/ipfs-http-client/esm/src/swarm/index.js");
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./add.js */ "./node_modules/ipfs-http-client/esm/src/add.js");
/* harmony import */ var _add_all_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./add-all.js */ "./node_modules/ipfs-http-client/esm/src/add-all.js");
/* harmony import */ var _cat_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cat.js */ "./node_modules/ipfs-http-client/esm/src/cat.js");
/* harmony import */ var _commands_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./commands.js */ "./node_modules/ipfs-http-client/esm/src/commands.js");
/* harmony import */ var _dns_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dns.js */ "./node_modules/ipfs-http-client/esm/src/dns.js");
/* harmony import */ var _get_endpoint_config_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./get-endpoint-config.js */ "./node_modules/ipfs-http-client/esm/src/get-endpoint-config.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./get.js */ "./node_modules/ipfs-http-client/esm/src/get.js");
/* harmony import */ var _id_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./id.js */ "./node_modules/ipfs-http-client/esm/src/id.js");
/* harmony import */ var _is_online_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./is-online.js */ "./node_modules/ipfs-http-client/esm/src/is-online.js");
/* harmony import */ var _ls_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./ls.js */ "./node_modules/ipfs-http-client/esm/src/ls.js");
/* harmony import */ var _mount_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./mount.js */ "./node_modules/ipfs-http-client/esm/src/mount.js");
/* harmony import */ var _ping_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./ping.js */ "./node_modules/ipfs-http-client/esm/src/ping.js");
/* harmony import */ var _resolve_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./resolve.js */ "./node_modules/ipfs-http-client/esm/src/resolve.js");
/* harmony import */ var _start_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./start.js */ "./node_modules/ipfs-http-client/esm/src/start.js");
/* harmony import */ var _stop_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./stop.js */ "./node_modules/ipfs-http-client/esm/src/stop.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./version.js */ "./node_modules/ipfs-http-client/esm/src/version.js");
/* harmony import */ var ipfs_utils_src_files_glob_source_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ipfs-utils/src/files/glob-source.js */ "?df0e");
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");
/* harmony import */ var ipfs_utils_src_files_url_source_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ipfs-utils/src/files/url-source.js */ "./node_modules/ipfs-utils/src/files/url-source.js");











































function create(options = {}) {
  const id = {
    name: multiformats_hashes_identity__WEBPACK_IMPORTED_MODULE_6__.identity.name,
    code: multiformats_hashes_identity__WEBPACK_IMPORTED_MODULE_6__.identity.code,
    encode: id => id,
    decode: id => id
  };
  const multibaseCodecs = Object.values(multiformats_basics__WEBPACK_IMPORTED_MODULE_7__.bases);
  (options.ipld && options.ipld.bases ? options.ipld.bases : []).forEach(base => multibaseCodecs.push(base));
  const multibases = new ipfs_core_utils_multibases__WEBPACK_IMPORTED_MODULE_0__.Multibases({
    bases: multibaseCodecs,
    loadBase: options.ipld && options.ipld.loadBase
  });
  const blockCodecs = Object.values(multiformats_basics__WEBPACK_IMPORTED_MODULE_7__.codecs);
  [
    _ipld_dag_pb__WEBPACK_IMPORTED_MODULE_3__,
    _ipld_dag_cbor__WEBPACK_IMPORTED_MODULE_4__,
    _ipld_dag_json__WEBPACK_IMPORTED_MODULE_5__,
    id
  ].concat(options.ipld && options.ipld.codecs || []).forEach(codec => blockCodecs.push(codec));
  const multicodecs = new ipfs_core_utils_multicodecs__WEBPACK_IMPORTED_MODULE_1__.Multicodecs({
    codecs: blockCodecs,
    loadCodec: options.ipld && options.ipld.loadCodec
  });
  const multihashHashers = Object.values(multiformats_basics__WEBPACK_IMPORTED_MODULE_7__.hashes);
  (options.ipld && options.ipld.hashers ? options.ipld.hashers : []).forEach(hasher => multihashHashers.push(hasher));
  const multihashes = new ipfs_core_utils_multihashes__WEBPACK_IMPORTED_MODULE_2__.Multihashes({
    hashers: multihashHashers,
    loadHasher: options.ipld && options.ipld.loadHasher
  });
  const client = {
    add: (0,_add_js__WEBPACK_IMPORTED_MODULE_26__.createAdd)(options),
    addAll: (0,_add_all_js__WEBPACK_IMPORTED_MODULE_27__.createAddAll)(options),
    bitswap: (0,_bitswap_index_js__WEBPACK_IMPORTED_MODULE_8__.createBitswap)(options),
    block: (0,_block_index_js__WEBPACK_IMPORTED_MODULE_9__.createBlock)(options),
    bootstrap: (0,_bootstrap_index_js__WEBPACK_IMPORTED_MODULE_10__.createBootstrap)(options),
    cat: (0,_cat_js__WEBPACK_IMPORTED_MODULE_28__.createCat)(options),
    commands: (0,_commands_js__WEBPACK_IMPORTED_MODULE_29__.createCommands)(options),
    config: (0,_config_index_js__WEBPACK_IMPORTED_MODULE_11__.createConfig)(options),
    dag: (0,_dag_index_js__WEBPACK_IMPORTED_MODULE_12__.createDag)(multicodecs, options),
    dht: (0,_dht_index_js__WEBPACK_IMPORTED_MODULE_13__.createDht)(options),
    diag: (0,_diag_index_js__WEBPACK_IMPORTED_MODULE_14__.createDiag)(options),
    dns: (0,_dns_js__WEBPACK_IMPORTED_MODULE_30__.createDns)(options),
    files: (0,_files_index_js__WEBPACK_IMPORTED_MODULE_15__.createFiles)(options),
    get: (0,_get_js__WEBPACK_IMPORTED_MODULE_32__.createGet)(options),
    getEndpointConfig: (0,_get_endpoint_config_js__WEBPACK_IMPORTED_MODULE_31__.createGetEndpointConfig)(options),
    id: (0,_id_js__WEBPACK_IMPORTED_MODULE_33__.createId)(options),
    isOnline: (0,_is_online_js__WEBPACK_IMPORTED_MODULE_34__.createIsOnline)(options),
    key: (0,_key_index_js__WEBPACK_IMPORTED_MODULE_16__.createKey)(options),
    log: (0,_log_index_js__WEBPACK_IMPORTED_MODULE_17__.createLog)(options),
    ls: (0,_ls_js__WEBPACK_IMPORTED_MODULE_35__.createLs)(options),
    mount: (0,_mount_js__WEBPACK_IMPORTED_MODULE_36__.createMount)(options),
    name: (0,_name_index_js__WEBPACK_IMPORTED_MODULE_18__.createName)(options),
    object: (0,_object_index_js__WEBPACK_IMPORTED_MODULE_19__.createObject)(multicodecs, options),
    pin: (0,_pin_index_js__WEBPACK_IMPORTED_MODULE_20__.createPin)(options),
    ping: (0,_ping_js__WEBPACK_IMPORTED_MODULE_37__.createPing)(options),
    pubsub: (0,_pubsub_index_js__WEBPACK_IMPORTED_MODULE_21__.createPubsub)(options),
    refs: (0,_refs_index_js__WEBPACK_IMPORTED_MODULE_22__.createRefs)(options),
    repo: (0,_repo_index_js__WEBPACK_IMPORTED_MODULE_23__.createRepo)(options),
    resolve: (0,_resolve_js__WEBPACK_IMPORTED_MODULE_38__.createResolve)(options),
    start: (0,_start_js__WEBPACK_IMPORTED_MODULE_39__.createStart)(options),
    stats: (0,_stats_index_js__WEBPACK_IMPORTED_MODULE_24__.createStats)(options),
    stop: (0,_stop_js__WEBPACK_IMPORTED_MODULE_40__.createStop)(options),
    swarm: (0,_swarm_index_js__WEBPACK_IMPORTED_MODULE_25__.createSwarm)(options),
    version: (0,_version_js__WEBPACK_IMPORTED_MODULE_41__.createVersion)(options),
    bases: multibases,
    codecs: multicodecs,
    hashers: multihashes
  };
  return client;
}



const globSource = ipfs_utils_src_files_glob_source_js__WEBPACK_IMPORTED_MODULE_42__;

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/is-online.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/is-online.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createIsOnline": () => (/* binding */ createIsOnline)
/* harmony export */ });
/* harmony import */ var _id_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id.js */ "./node_modules/ipfs-http-client/esm/src/id.js");

const createIsOnline = options => {
  const id = (0,_id_js__WEBPACK_IMPORTED_MODULE_0__.createId)(options);
  async function isOnline(options = {}) {
    const res = await id(options);
    return Boolean(res && res.addresses && res.addresses.length);
  }
  return isOnline;
};

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/key/export.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/key/export.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createExport": () => (/* binding */ createExport)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");


const createExport = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  const exportKey = async (name, password, options = {}) => {
    throw err_code__WEBPACK_IMPORTED_MODULE_1__(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
  };
  return exportKey;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/key/gen.js":
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/key/gen.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGen": () => (/* binding */ createGen)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createGen = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function gen(name, options = {
    type: 'rsa',
    size: 2048
  }) {
    const res = await api.post('key/gen', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: name,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(data);
  }
  return gen;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/key/import.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/key/import.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createImport": () => (/* binding */ createImport)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createImport = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function importKey(name, pem, password, options = {}) {
    const res = await api.post('key/import', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: name,
        pem,
        password,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(data);
  }
  return importKey;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/key/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/key/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createKey": () => (/* binding */ createKey)
/* harmony export */ });
/* harmony import */ var _export_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./export.js */ "./node_modules/ipfs-http-client/esm/src/key/export.js");
/* harmony import */ var _gen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gen.js */ "./node_modules/ipfs-http-client/esm/src/key/gen.js");
/* harmony import */ var _import_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./import.js */ "./node_modules/ipfs-http-client/esm/src/key/import.js");
/* harmony import */ var _info_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.js */ "./node_modules/ipfs-http-client/esm/src/key/info.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./list.js */ "./node_modules/ipfs-http-client/esm/src/key/list.js");
/* harmony import */ var _rename_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rename.js */ "./node_modules/ipfs-http-client/esm/src/key/rename.js");
/* harmony import */ var _rm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rm.js */ "./node_modules/ipfs-http-client/esm/src/key/rm.js");







function createKey(config) {
  return {
    export: (0,_export_js__WEBPACK_IMPORTED_MODULE_0__.createExport)(config),
    gen: (0,_gen_js__WEBPACK_IMPORTED_MODULE_1__.createGen)(config),
    import: (0,_import_js__WEBPACK_IMPORTED_MODULE_2__.createImport)(config),
    info: (0,_info_js__WEBPACK_IMPORTED_MODULE_3__.createInfo)(config),
    list: (0,_list_js__WEBPACK_IMPORTED_MODULE_4__.createList)(config),
    rename: (0,_rename_js__WEBPACK_IMPORTED_MODULE_5__.createRename)(config),
    rm: (0,_rm_js__WEBPACK_IMPORTED_MODULE_6__.createRm)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/key/info.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/key/info.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInfo": () => (/* binding */ createInfo)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");


const createInfo = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  const info = async (name, options = {}) => {
    throw err_code__WEBPACK_IMPORTED_MODULE_1__(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
  };
  return info;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/key/list.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/key/list.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createList": () => (/* binding */ createList)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createList = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function list(options = {}) {
    const res = await api.post('key/list', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      headers: options.headers
    });
    const data = await res.json();
    return (data.Keys || []).map(k => (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(k));
  }
  return list;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/key/rename.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/key/rename.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRename": () => (/* binding */ createRename)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createRename = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function rename(oldName, newName, options = {}) {
    const res = await api.post('key/rename', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: [
          oldName,
          newName
        ],
        ...options
      }),
      headers: options.headers
    });
    return (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(await res.json());
  }
  return rename;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/key/rm.js":
/*!*********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/key/rm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRm": () => (/* binding */ createRm)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createRm = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function rm(name, options = {}) {
    const res = await api.post('key/rm', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: name,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(data.Keys[0]);
  }
  return rm;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abortSignal": () => (/* binding */ abortSignal)
/* harmony export */ });
/* harmony import */ var any_signal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! any-signal */ "./node_modules/any-signal/index.js");

function filter(signals) {
  return signals.filter(Boolean);
}
function abortSignal(...signals) {
  return (0,any_signal__WEBPACK_IMPORTED_MODULE_0__.anySignal)(filter(signals));
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/lib/configure.js":
/*!****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/lib/configure.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configure": () => (/* binding */ configure)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/ipfs-http-client/esm/src/lib/core.js");

const configure = fn => {
  return options => {
    return fn(new _core_js__WEBPACK_IMPORTED_MODULE_0__.Client(options), options);
  };
};

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/lib/core.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/lib/core.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "errorHandler": () => (/* binding */ errorHandler),
/* harmony export */   "Client": () => (/* binding */ Client),
/* harmony export */   "HTTPError": () => (/* binding */ HTTPError)
/* harmony export */ });
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");
/* harmony import */ var ipfs_utils_src_env_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ipfs-utils/src/env.js */ "./node_modules/ipfs-utils/src/env.js");
/* harmony import */ var parse_duration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parse-duration */ "./node_modules/parse-duration/index.mjs");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var ipfs_utils_src_http_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ipfs-utils/src/http.js */ "./node_modules/ipfs-utils/src/http.js");
/* harmony import */ var merge_options__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! merge-options */ "./node_modules/merge-options/index.mjs");
/* harmony import */ var ipfs_core_utils_to_url_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ipfs-core-utils/to-url-string */ "./node_modules/ipfs-core-utils/esm/src/to-url-string.js");
/* harmony import */ var ipfs_core_utils_agent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ipfs-core-utils/agent */ "./node_modules/ipfs-core-utils/esm/src/agent.browser.js");








const log = debug__WEBPACK_IMPORTED_MODULE_3__('ipfs-http-client:lib:error-handler');
const merge = merge_options__WEBPACK_IMPORTED_MODULE_5__["default"].bind({ ignoreUndefined: true });
const DEFAULT_PROTOCOL = ipfs_utils_src_env_js__WEBPACK_IMPORTED_MODULE_1__.isBrowser || ipfs_utils_src_env_js__WEBPACK_IMPORTED_MODULE_1__.isWebWorker ? location.protocol : 'http';
const DEFAULT_HOST = ipfs_utils_src_env_js__WEBPACK_IMPORTED_MODULE_1__.isBrowser || ipfs_utils_src_env_js__WEBPACK_IMPORTED_MODULE_1__.isWebWorker ? location.hostname : 'localhost';
const DEFAULT_PORT = ipfs_utils_src_env_js__WEBPACK_IMPORTED_MODULE_1__.isBrowser || ipfs_utils_src_env_js__WEBPACK_IMPORTED_MODULE_1__.isWebWorker ? location.port : '5001';
const normalizeOptions = (options = {}) => {
  let url;
  let opts = {};
  let agent;
  if (typeof options === 'string' || multiaddr__WEBPACK_IMPORTED_MODULE_0__.Multiaddr.isMultiaddr(options)) {
    url = new URL((0,ipfs_core_utils_to_url_string__WEBPACK_IMPORTED_MODULE_6__.toUrlString)(options));
  } else if (options instanceof URL) {
    url = options;
  } else if (typeof options.url === 'string' || multiaddr__WEBPACK_IMPORTED_MODULE_0__.Multiaddr.isMultiaddr(options.url)) {
    url = new URL((0,ipfs_core_utils_to_url_string__WEBPACK_IMPORTED_MODULE_6__.toUrlString)(options.url));
    opts = options;
  } else if (options.url instanceof URL) {
    url = options.url;
    opts = options;
  } else {
    opts = options || {};
    const protocol = (opts.protocol || DEFAULT_PROTOCOL).replace(':', '');
    const host = (opts.host || DEFAULT_HOST).split(':')[0];
    const port = opts.port || DEFAULT_PORT;
    url = new URL(`${ protocol }://${ host }:${ port }`);
  }
  if (opts.apiPath) {
    url.pathname = opts.apiPath;
  } else if (url.pathname === '/' || url.pathname === undefined) {
    url.pathname = 'api/v0';
  }
  if (ipfs_utils_src_env_js__WEBPACK_IMPORTED_MODULE_1__.isNode) {
    const Agent = (0,ipfs_core_utils_agent__WEBPACK_IMPORTED_MODULE_7__["default"])(url);
    agent = opts.agent || new Agent({
      keepAlive: true,
      maxSockets: 6
    });
  }
  return {
    ...opts,
    host: url.host,
    protocol: url.protocol.replace(':', ''),
    port: Number(url.port),
    apiPath: url.pathname,
    url,
    agent
  };
};
const errorHandler = async response => {
  let msg;
  try {
    if ((response.headers.get('Content-Type') || '').startsWith('application/json')) {
      const data = await response.json();
      log(data);
      msg = data.Message || data.message;
    } else {
      msg = await response.text();
    }
  } catch (err) {
    log('Failed to parse error response', err);
    msg = err.message;
  }
  let error = new ipfs_utils_src_http_js__WEBPACK_IMPORTED_MODULE_4__.HTTPError(response);
  if (msg) {
    if (msg.includes('deadline has elapsed')) {
      error = new ipfs_utils_src_http_js__WEBPACK_IMPORTED_MODULE_4__.TimeoutError();
    }
    if (msg && msg.includes('context deadline exceeded')) {
      error = new ipfs_utils_src_http_js__WEBPACK_IMPORTED_MODULE_4__.TimeoutError();
    }
  }
  if (msg && msg.includes('request timed out')) {
    error = new ipfs_utils_src_http_js__WEBPACK_IMPORTED_MODULE_4__.TimeoutError();
  }
  if (msg) {
    error.message = msg;
  }
  throw error;
};
const KEBAB_REGEX = /[A-Z\u00C0-\u00D6\u00D8-\u00DE]/g;
const kebabCase = str => {
  return str.replace(KEBAB_REGEX, function (match) {
    return '-' + match.toLowerCase();
  });
};
const parseTimeout = value => {
  return typeof value === 'string' ? (0,parse_duration__WEBPACK_IMPORTED_MODULE_2__["default"])(value) : value;
};
class Client extends ipfs_utils_src_http_js__WEBPACK_IMPORTED_MODULE_4__ {
  constructor(options = {}) {
    const opts = normalizeOptions(options);
    super({
      timeout: parseTimeout(opts.timeout || 0) || undefined,
      headers: opts.headers,
      base: `${ opts.url }`,
      handleError: errorHandler,
      transformSearchParams: search => {
        const out = new URLSearchParams();
        for (const [key, value] of search) {
          if (value !== 'undefined' && value !== 'null' && key !== 'signal') {
            out.append(kebabCase(key), value);
          }
          if (key === 'timeout' && !isNaN(value)) {
            out.append(kebabCase(key), value);
          }
        }
        return out;
      },
      agent: opts.agent
    });
    delete this.get;
    delete this.put;
    delete this.delete;
    delete this.options;
    const fetch = this.fetch;
    this.fetch = (resource, options = {}) => {
      if (typeof resource === 'string' && !resource.startsWith('/')) {
        resource = `${ opts.url }/${ resource }`;
      }
      return fetch.call(this, resource, merge(options, { method: 'POST' }));
    };
  }
}
const HTTPError = ipfs_utils_src_http_js__WEBPACK_IMPORTED_MODULE_4__.HTTPError;

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/lib/http-rpc-wire-format.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/lib/http-rpc-wire-format.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rpcArrayToTextArray": () => (/* binding */ rpcArrayToTextArray),
/* harmony export */   "rpcToText": () => (/* binding */ rpcToText),
/* harmony export */   "rpcToBytes": () => (/* binding */ rpcToBytes),
/* harmony export */   "textToUrlSafeRpc": () => (/* binding */ textToUrlSafeRpc)
/* harmony export */ });
/* harmony import */ var uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uint8arrays/from-string */ "./node_modules/uint8arrays/esm/src/from-string.js");
/* harmony import */ var uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uint8arrays/to-string */ "./node_modules/uint8arrays/esm/src/to-string.js");
/* harmony import */ var multiformats_bases_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! multiformats/bases/base64 */ "./node_modules/multiformats/esm/src/bases/base64.js");



const rpcArrayToTextArray = strings => {
  if (Array.isArray(strings)) {
    return strings.map(rpcToText);
  }
  return strings;
};
const rpcToText = mb => (0,uint8arrays_to_string__WEBPACK_IMPORTED_MODULE_1__.toString)(rpcToBytes(mb));
const rpcToBytes = mb => multiformats_bases_base64__WEBPACK_IMPORTED_MODULE_2__.base64url.decode(mb);
const textToUrlSafeRpc = text => multiformats_bases_base64__WEBPACK_IMPORTED_MODULE_2__.base64url.encode((0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_0__.fromString)(text));


/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/lib/mode-to-string.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/lib/mode-to-string.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modeToString": () => (/* binding */ modeToString)
/* harmony export */ });
function modeToString(mode) {
  if (mode == null) {
    return undefined;
  }
  if (typeof mode === 'string') {
    return mode;
  }
  return mode.toString(8).padStart(4, '0');
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel-with-metadata.js":
/*!************************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/lib/object-to-camel-with-metadata.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectToCamelWithMetadata": () => (/* binding */ objectToCamelWithMetadata)
/* harmony export */ });
/* harmony import */ var _object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");

function objectToCamelWithMetadata(entry) {
  const file = (0,_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(entry);
  if (Object.prototype.hasOwnProperty.call(file, 'mode')) {
    file.mode = parseInt(file.mode, 8);
  }
  if (Object.prototype.hasOwnProperty.call(file, 'mtime')) {
    file.mtime = {
      secs: file.mtime,
      nsecs: file.mtimeNsecs || 0
    };
    delete file.mtimeNsecs;
  }
  return file;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "objectToCamel": () => (/* binding */ objectToCamel)
/* harmony export */ });
function objectToCamel(obj) {
  if (obj == null) {
    return obj;
  }
  const caps = /^[A-Z]+$/;
  const output = {};
  return Object.keys(obj).reduce((camelObj, k) => {
    if (caps.test(k)) {
      camelObj[k.toLowerCase()] = obj[k];
    } else if (caps.test(k[0])) {
      camelObj[k[0].toLowerCase() + k.slice(1)] = obj[k];
    } else {
      camelObj[k] = obj[k];
    }
    return camelObj;
  }, output);
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/lib/parse-mtime.js":
/*!******************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/lib/parse-mtime.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseMtime": () => (/* binding */ parseMtime)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");

function parseMtime(input) {
  if (input == null) {
    return undefined;
  }
  let mtime;
  if (input.secs != null) {
    mtime = {
      secs: input.secs,
      nsecs: input.nsecs
    };
  }
  if (input.Seconds != null) {
    mtime = {
      secs: input.Seconds,
      nsecs: input.FractionalNanoseconds
    };
  }
  if (Array.isArray(input)) {
    mtime = {
      secs: input[0],
      nsecs: input[1]
    };
  }
  if (input instanceof Date) {
    const ms = input.getTime();
    const secs = Math.floor(ms / 1000);
    mtime = {
      secs: secs,
      nsecs: (ms - secs * 1000) * 1000
    };
  }
  if (!Object.prototype.hasOwnProperty.call(mtime, 'secs')) {
    return undefined;
  }
  if (mtime != null && mtime.nsecs != null && (mtime.nsecs < 0 || mtime.nsecs > 999999999)) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('mtime-nsecs must be within the range [0,999999999]'), 'ERR_INVALID_MTIME_NSECS');
  }
  return mtime;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/lib/resolve.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/lib/resolve.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resolve": () => (/* binding */ resolve)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");


async function* resolve(cid, path, codecs, getBlock, options) {
  const load = async cid => {
    const codec = await codecs.getCodec(cid.code);
    const block = await getBlock(cid, options);
    return codec.decode(block);
  };
  const parts = path.split('/').filter(Boolean);
  let value = await load(cid);
  let lastCid = cid;
  while (parts.length) {
    const key = parts.shift();
    if (!key) {
      throw err_code__WEBPACK_IMPORTED_MODULE_1__(new Error(`Could not resolve path "${ path }"`), 'ERR_INVALID_PATH');
    }
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      value = value[key];
      yield {
        value,
        remainderPath: parts.join('/')
      };
    } else {
      throw err_code__WEBPACK_IMPORTED_MODULE_1__(new Error(`no link named "${ key }" under ${ lastCid }`), 'ERR_NO_LINK');
    }
    const cid = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.asCID(value);
    if (cid) {
      lastCid = cid;
      value = await load(value);
    }
  }
  yield {
    value,
    remainderPath: ''
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toUrlSearchParams": () => (/* binding */ toUrlSearchParams)
/* harmony export */ });
/* harmony import */ var _mode_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mode-to-string.js */ "./node_modules/ipfs-http-client/esm/src/lib/mode-to-string.js");
/* harmony import */ var _lib_parse_mtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/parse-mtime.js */ "./node_modules/ipfs-http-client/esm/src/lib/parse-mtime.js");


function toUrlSearchParams({arg, searchParams, hashAlg, mtime, mode, ...options} = {}) {
  if (searchParams) {
    options = {
      ...options,
      ...searchParams
    };
  }
  if (hashAlg) {
    options.hash = hashAlg;
  }
  if (mtime != null) {
    mtime = (0,_lib_parse_mtime_js__WEBPACK_IMPORTED_MODULE_1__.parseMtime)(mtime);
    options.mtime = mtime.secs;
    options.mtimeNsecs = mtime.nsecs;
  }
  if (mode != null) {
    options.mode = (0,_mode_to_string_js__WEBPACK_IMPORTED_MODULE_0__.modeToString)(mode);
  }
  if (options.timeout && !isNaN(options.timeout)) {
    options.timeout = `${ options.timeout }ms`;
  }
  if (arg === undefined || arg === null) {
    arg = [];
  } else if (!Array.isArray(arg)) {
    arg = [arg];
  }
  const urlSearchParams = new URLSearchParams(options);
  arg.forEach(arg => urlSearchParams.append('arg', arg));
  return urlSearchParams;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/log/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/log/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLog": () => (/* binding */ createLog)
/* harmony export */ });
/* harmony import */ var _level_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./level.js */ "./node_modules/ipfs-http-client/esm/src/log/level.js");
/* harmony import */ var _ls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ls.js */ "./node_modules/ipfs-http-client/esm/src/log/ls.js");
/* harmony import */ var _tail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tail.js */ "./node_modules/ipfs-http-client/esm/src/log/tail.js");



function createLog(config) {
  return {
    level: (0,_level_js__WEBPACK_IMPORTED_MODULE_0__.createLevel)(config),
    ls: (0,_ls_js__WEBPACK_IMPORTED_MODULE_1__.createLs)(config),
    tail: (0,_tail_js__WEBPACK_IMPORTED_MODULE_2__.createTail)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/log/level.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/log/level.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLevel": () => (/* binding */ createLevel)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createLevel = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function level(subsystem, level, options = {}) {
    const res = await api.post('log/level', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: [
          subsystem,
          level
        ],
        ...options
      }),
      headers: options.headers
    });
    return (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(await res.json());
  }
  return level;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/log/ls.js":
/*!*********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/log/ls.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLs": () => (/* binding */ createLs)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createLs = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function ls(options = {}) {
    const res = await api.post('log/ls', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    });
    const data = await res.json();
    return data.Strings;
  }
  return ls;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/log/tail.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/log/tail.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTail": () => (/* binding */ createTail)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createTail = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* tail(options = {}) {
    const res = await api.post('log/tail', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    });
    yield* res.ndjson();
  }
  return tail;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/ls.js":
/*!*****************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/ls.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLs": () => (/* binding */ createLs)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _files_stat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/stat.js */ "./node_modules/ipfs-http-client/esm/src/files/stat.js");




const createLs = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)((api, opts) => {
  async function* ls(path, options = {}) {
    const pathStr = `${ path instanceof Uint8Array ? multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.decode(path) : path }`;
    async function mapLink(link) {
      let hash = link.Hash;
      if (hash.includes('/')) {
        const ipfsPath = hash.startsWith('/ipfs/') ? hash : `/ipfs/${ hash }`;
        const stats = await (0,_files_stat_js__WEBPACK_IMPORTED_MODULE_3__.createStat)(opts)(ipfsPath);
        hash = stats.cid;
      } else {
        hash = multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(hash);
      }
      const entry = {
        name: link.Name,
        path: pathStr + (link.Name ? `/${ link.Name }` : ''),
        size: link.Size,
        cid: hash,
        type: typeOf(link)
      };
      if (link.Mode) {
        entry.mode = parseInt(link.Mode, 8);
      }
      if (link.Mtime !== undefined && link.Mtime !== null) {
        entry.mtime = { secs: link.Mtime };
        if (link.MtimeNsecs !== undefined && link.MtimeNsecs !== null) {
          entry.mtime.nsecs = link.MtimeNsecs;
        }
      }
      return entry;
    }
    const res = await api.post('ls', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: pathStr,
        ...options
      }),
      headers: options.headers
    });
    for await (let result of res.ndjson()) {
      result = result.Objects;
      if (!result) {
        throw new Error('expected .Objects in results');
      }
      result = result[0];
      if (!result) {
        throw new Error('expected one array in results.Objects');
      }
      const links = result.Links;
      if (!Array.isArray(links)) {
        throw new Error('expected one array in results.Objects[0].Links');
      }
      if (!links.length) {
        yield mapLink(result);
        return;
      }
      yield* links.map(mapLink);
    }
  }
  return ls;
});
function typeOf(link) {
  switch (link.Type) {
  case 1:
  case 5:
    return 'dir';
  case 2:
    return 'file';
  default:
    return 'file';
  }
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/mount.js":
/*!********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/mount.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMount": () => (/* binding */ createMount)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createMount = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function mount(options = {}) {
    const res = await api.post('dns', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      headers: options.headers
    });
    return (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(await res.json());
  }
  return mount;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/name/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/name/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createName": () => (/* binding */ createName)
/* harmony export */ });
/* harmony import */ var _publish_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./publish.js */ "./node_modules/ipfs-http-client/esm/src/name/publish.js");
/* harmony import */ var _resolve_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resolve.js */ "./node_modules/ipfs-http-client/esm/src/name/resolve.js");
/* harmony import */ var _pubsub_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub/index.js */ "./node_modules/ipfs-http-client/esm/src/name/pubsub/index.js");



function createName(config) {
  return {
    publish: (0,_publish_js__WEBPACK_IMPORTED_MODULE_0__.createPublish)(config),
    resolve: (0,_resolve_js__WEBPACK_IMPORTED_MODULE_1__.createResolve)(config),
    pubsub: (0,_pubsub_index_js__WEBPACK_IMPORTED_MODULE_2__.createPubsub)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/name/publish.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/name/publish.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPublish": () => (/* binding */ createPublish)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createPublish = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function publish(path, options = {}) {
    const res = await api.post('name/publish', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: `${ path }`,
        ...options
      }),
      headers: options.headers
    });
    return (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(await res.json());
  }
  return publish;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/name/pubsub/cancel.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/name/pubsub/cancel.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCancel": () => (/* binding */ createCancel)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createCancel = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function cancel(name, options = {}) {
    const res = await api.post('name/pubsub/cancel', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: name,
        ...options
      }),
      headers: options.headers
    });
    return (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(await res.json());
  }
  return cancel;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/name/pubsub/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/name/pubsub/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPubsub": () => (/* binding */ createPubsub)
/* harmony export */ });
/* harmony import */ var _cancel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cancel.js */ "./node_modules/ipfs-http-client/esm/src/name/pubsub/cancel.js");
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state.js */ "./node_modules/ipfs-http-client/esm/src/name/pubsub/state.js");
/* harmony import */ var _subs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subs.js */ "./node_modules/ipfs-http-client/esm/src/name/pubsub/subs.js");



function createPubsub(config) {
  return {
    cancel: (0,_cancel_js__WEBPACK_IMPORTED_MODULE_0__.createCancel)(config),
    state: (0,_state_js__WEBPACK_IMPORTED_MODULE_1__.createState)(config),
    subs: (0,_subs_js__WEBPACK_IMPORTED_MODULE_2__.createSubs)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/name/pubsub/state.js":
/*!********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/name/pubsub/state.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createState": () => (/* binding */ createState)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createState = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function state(options = {}) {
    const res = await api.post('name/pubsub/state', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      headers: options.headers
    });
    return (0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(await res.json());
  }
  return state;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/name/pubsub/subs.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/name/pubsub/subs.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSubs": () => (/* binding */ createSubs)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createSubs = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function subs(options = {}) {
    const res = await api.post('name/pubsub/subs', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    });
    const data = await res.json();
    return data.Strings || [];
  }
  return subs;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/name/resolve.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/name/resolve.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createResolve": () => (/* binding */ createResolve)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createResolve = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* resolve(path, options = {}) {
    const res = await api.post('name/resolve', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: path,
        stream: true,
        ...options
      }),
      headers: options.headers
    });
    for await (const result of res.ndjson()) {
      yield result.Path;
    }
  }
  return resolve;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/data.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/data.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createData": () => (/* binding */ createData)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createData = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function data(cid, options = {}) {
    const res = await api.post('object/data', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: `${ cid instanceof Uint8Array ? multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.decode(cid) : cid }`,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.arrayBuffer();
    return new Uint8Array(data, 0, data.byteLength);
  }
  return data;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/get.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/get.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGet": () => (/* binding */ createGet)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uint8arrays/from-string */ "./node_modules/uint8arrays/esm/src/from-string.js");




const createGet = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function get(cid, options = {}) {
    const res = await api.post('object/get', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: `${ cid instanceof Uint8Array ? multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.decode(cid) : cid }`,
        dataEncoding: 'base64',
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return {
      Data: (0,uint8arrays_from_string__WEBPACK_IMPORTED_MODULE_3__.fromString)(data.Data, 'base64pad'),
      Links: (data.Links || []).map(link => ({
        Name: link.Name,
        Hash: multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(link.Hash),
        Tsize: link.Size
      }))
    };
  }
  return get;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createObject": () => (/* binding */ createObject)
/* harmony export */ });
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./node_modules/ipfs-http-client/esm/src/object/data.js");
/* harmony import */ var _get_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get.js */ "./node_modules/ipfs-http-client/esm/src/object/get.js");
/* harmony import */ var _links_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./links.js */ "./node_modules/ipfs-http-client/esm/src/object/links.js");
/* harmony import */ var _new_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new.js */ "./node_modules/ipfs-http-client/esm/src/object/new.js");
/* harmony import */ var _put_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./put.js */ "./node_modules/ipfs-http-client/esm/src/object/put.js");
/* harmony import */ var _stat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stat.js */ "./node_modules/ipfs-http-client/esm/src/object/stat.js");
/* harmony import */ var _patch_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patch/index.js */ "./node_modules/ipfs-http-client/esm/src/object/patch/index.js");







function createObject(codecs, config) {
  return {
    data: (0,_data_js__WEBPACK_IMPORTED_MODULE_0__.createData)(config),
    get: (0,_get_js__WEBPACK_IMPORTED_MODULE_1__.createGet)(config),
    links: (0,_links_js__WEBPACK_IMPORTED_MODULE_2__.createLinks)(config),
    new: (0,_new_js__WEBPACK_IMPORTED_MODULE_3__.createNew)(config),
    put: (0,_put_js__WEBPACK_IMPORTED_MODULE_4__.createPut)(codecs, config),
    stat: (0,_stat_js__WEBPACK_IMPORTED_MODULE_5__.createStat)(config),
    patch: (0,_patch_index_js__WEBPACK_IMPORTED_MODULE_6__.createPatch)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/links.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/links.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLinks": () => (/* binding */ createLinks)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createLinks = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function links(cid, options = {}) {
    const res = await api.post('object/links', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: `${ cid instanceof Uint8Array ? multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.decode(cid) : cid }`,
        ...options
      }),
      headers: options.headers
    });
    const data = await res.json();
    return (data.Links || []).map(l => ({
      Name: l.Name,
      Tsize: l.Size,
      Hash: multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(l.Hash)
    }));
  }
  return links;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/new.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/new.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNew": () => (/* binding */ createNew)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createNew = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function newObject(options = {}) {
    const res = await api.post('object/new', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: options.template,
        ...options
      }),
      headers: options.headers
    });
    const {Hash} = await res.json();
    return multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(Hash);
  }
  return newObject;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/patch/add-link.js":
/*!************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/patch/add-link.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddLink": () => (/* binding */ createAddLink)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createAddLink = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function addLink(cid, dLink, options = {}) {
    const res = await api.post('object/patch/add-link', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: [
          `${ cid }`,
          dLink.Name || dLink.name || '',
          (dLink.Hash || dLink.cid || '').toString() || null
        ],
        ...options
      }),
      headers: options.headers
    });
    const {Hash} = await res.json();
    return multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(Hash);
  }
  return addLink;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/patch/append-data.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/patch/append-data.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAppendData": () => (/* binding */ createAppendData)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ipfs-core-utils/multipart-request */ "./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/abort-signal.js */ "./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js");
/* harmony import */ var native_abort_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js");






const createAppendData = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(api => {
  async function appendData(cid, data, options = {}) {
    const controller = new native_abort_controller__WEBPACK_IMPORTED_MODULE_5__.AbortController();
    const signal = (0,_lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_4__.abortSignal)(controller.signal, options.signal);
    const res = await api.post('object/patch/append-data', {
      signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__.toUrlSearchParams)({
        arg: `${ cid }`,
        ...options
      }),
      ...await (0,ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_1__.multipartRequest)([data], controller, options.headers)
    });
    const {Hash} = await res.json();
    return multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(Hash);
  }
  return appendData;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/patch/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/patch/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPatch": () => (/* binding */ createPatch)
/* harmony export */ });
/* harmony import */ var _add_link_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-link.js */ "./node_modules/ipfs-http-client/esm/src/object/patch/add-link.js");
/* harmony import */ var _append_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./append-data.js */ "./node_modules/ipfs-http-client/esm/src/object/patch/append-data.js");
/* harmony import */ var _rm_link_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rm-link.js */ "./node_modules/ipfs-http-client/esm/src/object/patch/rm-link.js");
/* harmony import */ var _set_data_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-data.js */ "./node_modules/ipfs-http-client/esm/src/object/patch/set-data.js");




function createPatch(config) {
  return {
    addLink: (0,_add_link_js__WEBPACK_IMPORTED_MODULE_0__.createAddLink)(config),
    appendData: (0,_append_data_js__WEBPACK_IMPORTED_MODULE_1__.createAppendData)(config),
    rmLink: (0,_rm_link_js__WEBPACK_IMPORTED_MODULE_2__.createRmLink)(config),
    setData: (0,_set_data_js__WEBPACK_IMPORTED_MODULE_3__.createSetData)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/patch/rm-link.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/patch/rm-link.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRmLink": () => (/* binding */ createRmLink)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createRmLink = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function rmLink(cid, dLink, options = {}) {
    const res = await api.post('object/patch/rm-link', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: [
          `${ cid }`,
          dLink.Name || dLink.name || null
        ],
        ...options
      }),
      headers: options.headers
    });
    const {Hash} = await res.json();
    return multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(Hash);
  }
  return rmLink;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/patch/set-data.js":
/*!************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/patch/set-data.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSetData": () => (/* binding */ createSetData)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ipfs-core-utils/multipart-request */ "./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/abort-signal.js */ "./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js");
/* harmony import */ var native_abort_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js");






const createSetData = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(api => {
  async function setData(cid, data, options = {}) {
    const controller = new native_abort_controller__WEBPACK_IMPORTED_MODULE_5__.AbortController();
    const signal = (0,_lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_4__.abortSignal)(controller.signal, options.signal);
    const res = await api.post('object/patch/set-data', {
      signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__.toUrlSearchParams)({
        arg: [`${ cid }`],
        ...options
      }),
      ...await (0,ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_1__.multipartRequest)([data], controller, options.headers)
    });
    const {Hash} = await res.json();
    return multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(Hash);
  }
  return setData;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/put.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/put.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPut": () => (/* binding */ createPut)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _dag_put_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dag/put.js */ "./node_modules/ipfs-http-client/esm/src/dag/put.js");


const createPut = (codecs, options) => {
  const fn = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
    const dagPut = (0,_dag_put_js__WEBPACK_IMPORTED_MODULE_1__.createPut)(codecs, options);
    async function put(obj, options = {}) {
      return dagPut(obj, {
        ...options,
        storeCodec: 'dag-pb',
        hashAlg: 'sha2-256',
        version: 1
      });
    }
    return put;
  });
  return fn(options);
};

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/object/stat.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/object/stat.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStat": () => (/* binding */ createStat)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createStat = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function stat(cid, options = {}) {
    const res = await api.post('object/stat', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: `${ cid }`,
        ...options
      }),
      headers: options.headers
    });
    const output = await res.json();
    return {
      ...output,
      Hash: multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(output.Hash)
    };
  }
  return stat;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/add-all.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/add-all.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddAll": () => (/* binding */ createAddAll)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var ipfs_core_utils_pins_normalise_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ipfs-core-utils/pins/normalise-input */ "./node_modules/ipfs-core-utils/esm/src/pins/normalise-input.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");




const createAddAll = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function* addAll(source, options = {}) {
    for await (const {path, recursive, metadata} of (0,ipfs_core_utils_pins_normalise_input__WEBPACK_IMPORTED_MODULE_2__.normaliseInput)(source)) {
      const res = await api.post('pin/add', {
        signal: options.signal,
        searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__.toUrlSearchParams)({
          ...options,
          arg: path,
          recursive,
          metadata: metadata ? JSON.stringify(metadata) : undefined,
          stream: true
        }),
        headers: options.headers
      });
      for await (const pin of res.ndjson()) {
        if (pin.Pins) {
          for (const cid of pin.Pins) {
            yield multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(cid);
          }
          continue;
        }
        yield multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(pin);
      }
    }
  }
  return addAll;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/add.js":
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/add.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAdd": () => (/* binding */ createAdd)
/* harmony export */ });
/* harmony import */ var _add_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-all.js */ "./node_modules/ipfs-http-client/esm/src/pin/add-all.js");
/* harmony import */ var it_last__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! it-last */ "./node_modules/it-last/index.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");



function createAdd(config) {
  const all = (0,_add_all_js__WEBPACK_IMPORTED_MODULE_0__.createAddAll)(config);
  return (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(() => {
    async function add(path, options = {}) {
      return it_last__WEBPACK_IMPORTED_MODULE_1__(all([{
          path,
          ...options
        }], options));
    }
    return add;
  })(config);
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPin": () => (/* binding */ createPin)
/* harmony export */ });
/* harmony import */ var _add_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-all.js */ "./node_modules/ipfs-http-client/esm/src/pin/add-all.js");
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.js */ "./node_modules/ipfs-http-client/esm/src/pin/add.js");
/* harmony import */ var _ls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ls.js */ "./node_modules/ipfs-http-client/esm/src/pin/ls.js");
/* harmony import */ var _rm_all_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rm-all.js */ "./node_modules/ipfs-http-client/esm/src/pin/rm-all.js");
/* harmony import */ var _rm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rm.js */ "./node_modules/ipfs-http-client/esm/src/pin/rm.js");
/* harmony import */ var _remote_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./remote/index.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/index.js");






function createPin(config) {
  return {
    addAll: (0,_add_all_js__WEBPACK_IMPORTED_MODULE_0__.createAddAll)(config),
    add: (0,_add_js__WEBPACK_IMPORTED_MODULE_1__.createAdd)(config),
    ls: (0,_ls_js__WEBPACK_IMPORTED_MODULE_2__.createLs)(config),
    rmAll: (0,_rm_all_js__WEBPACK_IMPORTED_MODULE_3__.createRmAll)(config),
    rm: (0,_rm_js__WEBPACK_IMPORTED_MODULE_4__.createRm)(config),
    remote: (0,_remote_index_js__WEBPACK_IMPORTED_MODULE_5__.createRemote)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/ls.js":
/*!*********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/ls.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLs": () => (/* binding */ createLs)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



function toPin(type, cid, metadata) {
  const pin = {
    type,
    cid: multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(cid)
  };
  if (metadata) {
    pin.metadata = metadata;
  }
  return pin;
}
const createLs = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function* ls(options = {}) {
    let paths = [];
    if (options.paths) {
      paths = Array.isArray(options.paths) ? options.paths : [options.paths];
    }
    const res = await api.post('pin/ls', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        ...options,
        arg: paths.map(path => `${ path }`),
        stream: true
      }),
      headers: options.headers
    });
    for await (const pin of res.ndjson()) {
      if (pin.Keys) {
        for (const cid of Object.keys(pin.Keys)) {
          yield toPin(pin.Keys[cid].Type, cid, pin.Keys[cid].Metadata);
        }
        return;
      }
      yield toPin(pin.Type, pin.Cid, pin.Metadata);
    }
  }
  return ls;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/remote/add.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/remote/add.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAdd": () => (/* binding */ createAdd)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/utils.js");

function createAdd(client) {
  async function add(cid, {timeout, signal, headers, ...query}) {
    const response = await client.post('pin/remote/add', {
      timeout,
      signal,
      headers,
      searchParams: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.encodeAddParams)({
        cid,
        ...query
      })
    });
    return (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.decodePin)(await response.json());
  }
  return add;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/remote/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/remote/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRemote": () => (/* binding */ createRemote)
/* harmony export */ });
/* harmony import */ var _lib_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/core.js */ "./node_modules/ipfs-http-client/esm/src/lib/core.js");
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/add.js");
/* harmony import */ var _ls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ls.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/ls.js");
/* harmony import */ var _rm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rm.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/rm.js");
/* harmony import */ var _rm_all_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rm-all.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/rm-all.js");
/* harmony import */ var _service_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/index.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/service/index.js");






function createRemote(config) {
  const client = new _lib_core_js__WEBPACK_IMPORTED_MODULE_0__.Client(config);
  return {
    add: (0,_add_js__WEBPACK_IMPORTED_MODULE_1__.createAdd)(client),
    ls: (0,_ls_js__WEBPACK_IMPORTED_MODULE_2__.createLs)(client),
    rm: (0,_rm_js__WEBPACK_IMPORTED_MODULE_3__.createRm)(client),
    rmAll: (0,_rm_all_js__WEBPACK_IMPORTED_MODULE_4__.createRmAll)(client),
    service: (0,_service_index_js__WEBPACK_IMPORTED_MODULE_5__.createService)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/remote/ls.js":
/*!****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/remote/ls.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLs": () => (/* binding */ createLs)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/utils.js");

function createLs(client) {
  async function* ls({timeout, signal, headers, ...query}) {
    const response = await client.post('pin/remote/ls', {
      timeout,
      signal,
      headers,
      searchParams: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.encodeQuery)(query)
    });
    for await (const pin of response.ndjson()) {
      yield (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.decodePin)(pin);
    }
  }
  return ls;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/remote/rm-all.js":
/*!********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/remote/rm-all.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRmAll": () => (/* binding */ createRmAll)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/utils.js");

function createRmAll(client) {
  async function rmAll({timeout, signal, headers, ...query}) {
    await client.post('pin/remote/rm', {
      timeout,
      signal,
      headers,
      searchParams: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.encodeQuery)({
        ...query,
        all: true
      })
    });
  }
  return rmAll;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/remote/rm.js":
/*!****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/remote/rm.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRm": () => (/* binding */ createRm)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/utils.js");

function createRm(client) {
  async function rm({timeout, signal, headers, ...query}) {
    await client.post('pin/remote/rm', {
      timeout,
      signal,
      headers,
      searchParams: (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.encodeQuery)({
        ...query,
        all: false
      })
    });
  }
  return rm;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/remote/service/add.js":
/*!*************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/remote/service/add.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAdd": () => (/* binding */ createAdd)
/* harmony export */ });
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/service/utils.js");


function createAdd(client) {
  async function add(name, options) {
    const {endpoint, key, headers, timeout, signal} = options;
    await client.post('pin/remote/service/add', {
      timeout,
      signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_0__.toUrlSearchParams)({
        arg: [
          name,
          (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.encodeEndpoint)(endpoint),
          key
        ]
      }),
      headers
    });
  }
  return add;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/remote/service/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/remote/service/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createService": () => (/* binding */ createService)
/* harmony export */ });
/* harmony import */ var _lib_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/core.js */ "./node_modules/ipfs-http-client/esm/src/lib/core.js");
/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/service/add.js");
/* harmony import */ var _ls_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ls.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/service/ls.js");
/* harmony import */ var _rm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rm.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/service/rm.js");




function createService(config) {
  const client = new _lib_core_js__WEBPACK_IMPORTED_MODULE_0__.Client(config);
  return {
    add: (0,_add_js__WEBPACK_IMPORTED_MODULE_1__.createAdd)(client),
    ls: (0,_ls_js__WEBPACK_IMPORTED_MODULE_2__.createLs)(client),
    rm: (0,_rm_js__WEBPACK_IMPORTED_MODULE_3__.createRm)(client)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/remote/service/ls.js":
/*!************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/remote/service/ls.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLs": () => (/* binding */ createLs)
/* harmony export */ });
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./node_modules/ipfs-http-client/esm/src/pin/remote/service/utils.js");


function createLs(client) {
  async function ls(options = {}) {
    const {stat, headers, timeout, signal} = options;
    const response = await client.post('pin/remote/service/ls', {
      timeout,
      signal,
      headers,
      searchParams: stat === true ? (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_0__.toUrlSearchParams)({ stat }) : undefined
    });
    const {RemoteServices} = await response.json();
    return RemoteServices.map(_utils_js__WEBPACK_IMPORTED_MODULE_1__.decodeRemoteService);
  }
  return ls;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/remote/service/rm.js":
/*!************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/remote/service/rm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRm": () => (/* binding */ createRm)
/* harmony export */ });
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");

function createRm(client) {
  async function rm(name, options = {}) {
    await client.post('pin/remote/service/rm', {
      signal: options.signal,
      headers: options.headers,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_0__.toUrlSearchParams)({ arg: name })
    });
  }
  return rm;
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/remote/service/utils.js":
/*!***************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/remote/service/utils.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "encodeEndpoint": () => (/* binding */ encodeEndpoint),
/* harmony export */   "decodeRemoteService": () => (/* binding */ decodeRemoteService),
/* harmony export */   "decodeStat": () => (/* binding */ decodeStat)
/* harmony export */ });
function encodeEndpoint(url) {
  const href = String(url);
  if (href === 'undefined') {
    throw Error('endpoint is required');
  }
  return href[href.length - 1] === '/' ? href.slice(0, -1) : href;
}
function decodeRemoteService(json) {
  return {
    service: json.Service,
    endpoint: new URL(json.ApiEndpoint),
    ...json.Stat && { stat: decodeStat(json.Stat) }
  };
}
function decodeStat(json) {
  switch (json.Status) {
  case 'valid': {
      const {Pinning, Pinned, Queued, Failed} = json.PinCount;
      return {
        status: 'valid',
        pinCount: {
          queued: Queued,
          pinning: Pinning,
          pinned: Pinned,
          failed: Failed
        }
      };
    }
  case 'invalid': {
      return { status: 'invalid' };
    }
  default: {
      return { status: json.Status };
    }
  }
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/remote/utils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/remote/utils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decodePin": () => (/* binding */ decodePin),
/* harmony export */   "encodeService": () => (/* binding */ encodeService),
/* harmony export */   "encodeCID": () => (/* binding */ encodeCID),
/* harmony export */   "encodeQuery": () => (/* binding */ encodeQuery),
/* harmony export */   "encodeAddParams": () => (/* binding */ encodeAddParams)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const decodePin = ({
  Name: name,
  Status: status,
  Cid: cid
}) => {
  return {
    cid: multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(cid),
    name,
    status
  };
};
const encodeService = service => {
  if (typeof service === 'string' && service !== '') {
    return service;
  } else {
    throw new TypeError('service name must be passed');
  }
};
const encodeCID = cid => {
  if (multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.asCID(cid)) {
    return cid.toString();
  } else {
    throw new TypeError(`CID instance expected instead of ${ typeof cid }`);
  }
};
const encodeQuery = ({service, cid, name, status, all}) => {
  const query = (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
    service: encodeService(service),
    name,
    force: all ? true : undefined
  });
  if (cid) {
    for (const value of cid) {
      query.append('cid', encodeCID(value));
    }
  }
  if (status) {
    for (const value of status) {
      query.append('status', value);
    }
  }
  return query;
};
const encodeAddParams = ({cid, service, background, name, origins}) => {
  const params = (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
    arg: encodeCID(cid),
    service: encodeService(service),
    name,
    background: background ? true : undefined
  });
  if (origins) {
    for (const origin of origins) {
      params.append('origin', origin.toString());
    }
  }
  return params;
};

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/rm-all.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/rm-all.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRmAll": () => (/* binding */ createRmAll)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var ipfs_core_utils_pins_normalise_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ipfs-core-utils/pins/normalise-input */ "./node_modules/ipfs-core-utils/esm/src/pins/normalise-input.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");




const createRmAll = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function* rmAll(source, options = {}) {
    for await (const {path, recursive} of (0,ipfs_core_utils_pins_normalise_input__WEBPACK_IMPORTED_MODULE_2__.normaliseInput)(source)) {
      const searchParams = new URLSearchParams(options.searchParams);
      searchParams.append('arg', `${ path }`);
      if (recursive != null)
        searchParams.set('recursive', String(recursive));
      const res = await api.post('pin/rm', {
        signal: options.signal,
        headers: options.headers,
        searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__.toUrlSearchParams)({
          ...options,
          arg: `${ path }`,
          recursive
        })
      });
      for await (const pin of res.ndjson()) {
        if (pin.Pins) {
          yield* pin.Pins.map(cid => multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(cid));
          continue;
        }
        yield multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(pin);
      }
    }
  }
  return rmAll;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pin/rm.js":
/*!*********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pin/rm.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRm": () => (/* binding */ createRm)
/* harmony export */ });
/* harmony import */ var _rm_all_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rm-all.js */ "./node_modules/ipfs-http-client/esm/src/pin/rm-all.js");
/* harmony import */ var it_last__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! it-last */ "./node_modules/it-last/index.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");



const createRm = config => {
  const all = (0,_rm_all_js__WEBPACK_IMPORTED_MODULE_0__.createRmAll)(config);
  return (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)(() => {
    async function rm(path, options = {}) {
      return it_last__WEBPACK_IMPORTED_MODULE_1__(all([{
          path,
          ...options
        }], options));
    }
    return rm;
  })(config);
};

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/ping.js":
/*!*******************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/ping.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPing": () => (/* binding */ createPing)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createPing = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function* ping(peerId, options = {}) {
    const res = await api.post('ping', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
        arg: `${ peerId }`,
        ...options
      }),
      headers: options.headers,
      transform: _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel
    });
    yield* res.ndjson();
  }
  return ping;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pubsub/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pubsub/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPubsub": () => (/* binding */ createPubsub)
/* harmony export */ });
/* harmony import */ var _ls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ls.js */ "./node_modules/ipfs-http-client/esm/src/pubsub/ls.js");
/* harmony import */ var _peers_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./peers.js */ "./node_modules/ipfs-http-client/esm/src/pubsub/peers.js");
/* harmony import */ var _publish_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./publish.js */ "./node_modules/ipfs-http-client/esm/src/pubsub/publish.js");
/* harmony import */ var _subscribe_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscribe.js */ "./node_modules/ipfs-http-client/esm/src/pubsub/subscribe.js");
/* harmony import */ var _unsubscribe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unsubscribe.js */ "./node_modules/ipfs-http-client/esm/src/pubsub/unsubscribe.js");
/* harmony import */ var _subscription_tracker_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription-tracker.js */ "./node_modules/ipfs-http-client/esm/src/pubsub/subscription-tracker.js");






function createPubsub(config) {
  const subscriptionTracker = new _subscription_tracker_js__WEBPACK_IMPORTED_MODULE_5__.SubscriptionTracker();
  return {
    ls: (0,_ls_js__WEBPACK_IMPORTED_MODULE_0__.createLs)(config),
    peers: (0,_peers_js__WEBPACK_IMPORTED_MODULE_1__.createPeers)(config),
    publish: (0,_publish_js__WEBPACK_IMPORTED_MODULE_2__.createPublish)(config),
    subscribe: (0,_subscribe_js__WEBPACK_IMPORTED_MODULE_3__.createSubscribe)(config, subscriptionTracker),
    unsubscribe: (0,_unsubscribe_js__WEBPACK_IMPORTED_MODULE_4__.createUnsubscribe)(config, subscriptionTracker)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pubsub/ls.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pubsub/ls.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLs": () => (/* binding */ createLs)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _lib_http_rpc_wire_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/http-rpc-wire-format.js */ "./node_modules/ipfs-http-client/esm/src/lib/http-rpc-wire-format.js");



const createLs = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function ls(options = {}) {
    const {Strings} = await (await api.post('pubsub/ls', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    })).json();
    return (0,_lib_http_rpc_wire_format_js__WEBPACK_IMPORTED_MODULE_2__.rpcArrayToTextArray)(Strings) || [];
  }
  return ls;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pubsub/peers.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pubsub/peers.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPeers": () => (/* binding */ createPeers)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _lib_http_rpc_wire_format_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/http-rpc-wire-format.js */ "./node_modules/ipfs-http-client/esm/src/lib/http-rpc-wire-format.js");



const createPeers = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function peers(topic, options = {}) {
    const res = await api.post('pubsub/peers', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: (0,_lib_http_rpc_wire_format_js__WEBPACK_IMPORTED_MODULE_2__.textToUrlSafeRpc)(topic),
        ...options
      }),
      headers: options.headers
    });
    const {Strings} = await res.json();
    return Strings || [];
  }
  return peers;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pubsub/publish.js":
/*!*****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pubsub/publish.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPublish": () => (/* binding */ createPublish)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ipfs-core-utils/multipart-request */ "./node_modules/ipfs-core-utils/esm/src/multipart-request.browser.js");
/* harmony import */ var _lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/abort-signal.js */ "./node_modules/ipfs-http-client/esm/src/lib/abort-signal.js");
/* harmony import */ var _lib_http_rpc_wire_format_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/http-rpc-wire-format.js */ "./node_modules/ipfs-http-client/esm/src/lib/http-rpc-wire-format.js");
/* harmony import */ var native_abort_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js");






const createPublish = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function publish(topic, data, options = {}) {
    const searchParams = (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
      arg: (0,_lib_http_rpc_wire_format_js__WEBPACK_IMPORTED_MODULE_4__.textToUrlSafeRpc)(topic),
      ...options
    });
    const controller = new native_abort_controller__WEBPACK_IMPORTED_MODULE_5__.AbortController();
    const signal = (0,_lib_abort_signal_js__WEBPACK_IMPORTED_MODULE_3__.abortSignal)(controller.signal, options.signal);
    const res = await api.post('pubsub/pub', {
      signal,
      searchParams,
      ...await (0,ipfs_core_utils_multipart_request__WEBPACK_IMPORTED_MODULE_2__.multipartRequest)([data], controller, options.headers)
    });
    await res.text();
  }
  return publish;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pubsub/subscribe.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pubsub/subscribe.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSubscribe": () => (/* binding */ createSubscribe)
/* harmony export */ });
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! debug */ "./node_modules/debug/src/browser.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _lib_http_rpc_wire_format_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/http-rpc-wire-format.js */ "./node_modules/ipfs-http-client/esm/src/lib/http-rpc-wire-format.js");




const log = debug__WEBPACK_IMPORTED_MODULE_0__('ipfs-http-client:pubsub:subscribe');
const createSubscribe = (options, subsTracker) => {
  return (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
    async function subscribe(topic, handler, options = {}) {
      options.signal = subsTracker.subscribe(topic, handler, options.signal);
      let done;
      let fail;
      const result = new Promise((resolve, reject) => {
        done = resolve;
        fail = reject;
      });
      const ffWorkaround = setTimeout(() => done(), 1000);
      api.post('pubsub/sub', {
        signal: options.signal,
        searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)({
          arg: (0,_lib_http_rpc_wire_format_js__WEBPACK_IMPORTED_MODULE_3__.textToUrlSafeRpc)(topic),
          ...options
        }),
        headers: options.headers
      }).catch(err => {
        subsTracker.unsubscribe(topic, handler);
        fail(err);
      }).then(response => {
        clearTimeout(ffWorkaround);
        if (!response) {
          return;
        }
        readMessages(response, {
          onMessage: handler,
          onEnd: () => subsTracker.unsubscribe(topic, handler),
          onError: options.onError
        });
        done();
      });
      return result;
    }
    return subscribe;
  })(options);
};
async function readMessages(response, {onMessage, onEnd, onError}) {
  onError = onError || log;
  try {
    for await (const msg of response.ndjson()) {
      try {
        if (!msg.from) {
          continue;
        }
        onMessage({
          from: msg.from,
          data: (0,_lib_http_rpc_wire_format_js__WEBPACK_IMPORTED_MODULE_3__.rpcToBytes)(msg.data),
          seqno: (0,_lib_http_rpc_wire_format_js__WEBPACK_IMPORTED_MODULE_3__.rpcToBytes)(msg.seqno),
          topicIDs: (0,_lib_http_rpc_wire_format_js__WEBPACK_IMPORTED_MODULE_3__.rpcArrayToTextArray)(msg.topicIDs)
        });
      } catch (err) {
        err.message = `Failed to parse pubsub message: ${ err.message }`;
        onError(err, false, msg);
      }
    }
  } catch (err) {
    if (!isAbortError(err)) {
      onError(err, true);
    }
  } finally {
    onEnd();
  }
}
const isAbortError = error => {
  switch (error.type) {
  case 'aborted':
    return true;
  case 'abort':
    return true;
  default:
    return error.name === 'AbortError';
  }
};

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pubsub/subscription-tracker.js":
/*!******************************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pubsub/subscription-tracker.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubscriptionTracker": () => (/* binding */ SubscriptionTracker)
/* harmony export */ });
/* harmony import */ var native_abort_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! native-abort-controller */ "./node_modules/native-abort-controller/src/index.js");

class SubscriptionTracker {
  constructor() {
    this._subs = new Map();
  }
  subscribe(topic, handler, signal) {
    const topicSubs = this._subs.get(topic) || [];
    if (topicSubs.find(s => s.handler === handler)) {
      throw new Error(`Already subscribed to ${ topic } with this handler`);
    }
    const controller = new native_abort_controller__WEBPACK_IMPORTED_MODULE_0__.AbortController();
    this._subs.set(topic, [{
        handler,
        controller
      }].concat(topicSubs));
    if (signal) {
      signal.addEventListener('abort', () => this.unsubscribe(topic, handler));
    }
    return controller.signal;
  }
  unsubscribe(topic, handler) {
    const subs = this._subs.get(topic) || [];
    let unsubs;
    if (handler) {
      this._subs.set(topic, subs.filter(s => s.handler !== handler));
      unsubs = subs.filter(s => s.handler === handler);
    } else {
      this._subs.set(topic, []);
      unsubs = subs;
    }
    if (!(this._subs.get(topic) || []).length) {
      this._subs.delete(topic);
    }
    unsubs.forEach(s => s.controller.abort());
  }
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/pubsub/unsubscribe.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/pubsub/unsubscribe.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createUnsubscribe": () => (/* binding */ createUnsubscribe)
/* harmony export */ });
const createUnsubscribe = (options, subsTracker) => {
  async function unsubscribe(topic, handler) {
    subsTracker.unsubscribe(topic, handler);
  }
  return unsubscribe;
};

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/refs/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/refs/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRefs": () => (/* binding */ createRefs)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");
/* harmony import */ var _local_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./local.js */ "./node_modules/ipfs-http-client/esm/src/refs/local.js");





const createRefs = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_2__.configure)((api, opts) => {
  const refs = async function* (args, options = {}) {
    const argsArr = Array.isArray(args) ? args : [args];
    const res = await api.post('refs', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_3__.toUrlSearchParams)({
        arg: argsArr.map(arg => `${ arg instanceof Uint8Array ? multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.decode(arg) : arg }`),
        ...options
      }),
      headers: options.headers,
      transform: _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_1__.objectToCamel
    });
    yield* res.ndjson();
  };
  return Object.assign(refs, { local: (0,_local_js__WEBPACK_IMPORTED_MODULE_4__.createLocal)(opts) });
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/refs/local.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/refs/local.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLocal": () => (/* binding */ createLocal)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createLocal = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function* refsLocal(options = {}) {
    const res = await api.post('refs/local', {
      signal: options.signal,
      transform: _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      headers: options.headers
    });
    yield* res.ndjson();
  }
  return refsLocal;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/repo/gc.js":
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/repo/gc.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGc": () => (/* binding */ createGc)
/* harmony export */ });
/* harmony import */ var multiformats_cid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/cid */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createGc = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function* gc(options = {}) {
    const res = await api.post('repo/gc', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      headers: options.headers,
      transform: res => {
        return {
          err: res.Error ? new Error(res.Error) : null,
          cid: (res.Key || {})['/'] ? multiformats_cid__WEBPACK_IMPORTED_MODULE_0__.CID.parse(res.Key['/']) : null
        };
      }
    });
    yield* res.ndjson();
  }
  return gc;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/repo/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/repo/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRepo": () => (/* binding */ createRepo)
/* harmony export */ });
/* harmony import */ var _gc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gc.js */ "./node_modules/ipfs-http-client/esm/src/repo/gc.js");
/* harmony import */ var _stat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stat.js */ "./node_modules/ipfs-http-client/esm/src/repo/stat.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./version.js */ "./node_modules/ipfs-http-client/esm/src/repo/version.js");



function createRepo(config) {
  return {
    gc: (0,_gc_js__WEBPACK_IMPORTED_MODULE_0__.createGc)(config),
    stat: (0,_stat_js__WEBPACK_IMPORTED_MODULE_1__.createStat)(config),
    version: (0,_version_js__WEBPACK_IMPORTED_MODULE_2__.createVersion)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/repo/stat.js":
/*!************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/repo/stat.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStat": () => (/* binding */ createStat)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createStat = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function stat(options = {}) {
    const res = await api.post('repo/stat', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    });
    const data = await res.json();
    return {
      numObjects: BigInt(data.NumObjects),
      repoSize: BigInt(data.RepoSize),
      repoPath: data.RepoPath,
      version: data.Version,
      storageMax: BigInt(data.StorageMax)
    };
  }
  return stat;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/repo/version.js":
/*!***************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/repo/version.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createVersion": () => (/* binding */ createVersion)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createVersion = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function version(options = {}) {
    const res = await (await api.post('repo/version', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    })).json();
    return res.Version;
  }
  return version;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/resolve.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createResolve": () => (/* binding */ createResolve)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createResolve = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function resolve(path, options = {}) {
    const res = await api.post('resolve', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: path,
        ...options
      }),
      headers: options.headers
    });
    const {Path} = await res.json();
    return Path;
  }
  return resolve;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/start.js":
/*!********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/start.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStart": () => (/* binding */ createStart)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");


const createStart = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  const start = async (options = {}) => {
    throw err_code__WEBPACK_IMPORTED_MODULE_1__(new Error('Not implemented'), 'ERR_NOT_IMPLEMENTED');
  };
  return start;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/stats/bw.js":
/*!***********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/stats/bw.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createBw": () => (/* binding */ createBw)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createBw = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function* bw(options = {}) {
    const res = await api.post('stats/bw', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers,
      transform: stats => ({
        totalIn: BigInt(stats.TotalIn),
        totalOut: BigInt(stats.TotalOut),
        rateIn: parseFloat(stats.RateIn),
        rateOut: parseFloat(stats.RateOut)
      })
    });
    yield* res.ndjson();
  }
  return bw;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/stats/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/stats/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStats": () => (/* binding */ createStats)
/* harmony export */ });
/* harmony import */ var _bitswap_stat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bitswap/stat.js */ "./node_modules/ipfs-http-client/esm/src/bitswap/stat.js");
/* harmony import */ var _repo_stat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repo/stat.js */ "./node_modules/ipfs-http-client/esm/src/repo/stat.js");
/* harmony import */ var _bw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bw.js */ "./node_modules/ipfs-http-client/esm/src/stats/bw.js");



function createStats(config) {
  return {
    bitswap: (0,_bitswap_stat_js__WEBPACK_IMPORTED_MODULE_0__.createStat)(config),
    repo: (0,_repo_stat_js__WEBPACK_IMPORTED_MODULE_1__.createStat)(config),
    bw: (0,_bw_js__WEBPACK_IMPORTED_MODULE_2__.createBw)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/stop.js":
/*!*******************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/stop.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStop": () => (/* binding */ createStop)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createStop = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function stop(options = {}) {
    const res = await api.post('shutdown', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)(options),
      headers: options.headers
    });
    await res.text();
  }
  return stop;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/swarm/addrs.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/swarm/addrs.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAddrs": () => (/* binding */ createAddrs)
/* harmony export */ });
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createAddrs = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function addrs(options = {}) {
    const res = await api.post('swarm/addrs', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      headers: options.headers
    });
    const {Addrs} = await res.json();
    return Object.keys(Addrs).map(id => ({
      id,
      addrs: (Addrs[id] || []).map(a => new multiaddr__WEBPACK_IMPORTED_MODULE_0__.Multiaddr(a))
    }));
  }
  return addrs;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/swarm/connect.js":
/*!****************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/swarm/connect.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createConnect": () => (/* binding */ createConnect)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createConnect = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function connect(addr, options = {}) {
    const res = await api.post('swarm/connect', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: addr,
        ...options
      }),
      headers: options.headers
    });
    const {Strings} = await res.json();
    return Strings || [];
  }
  return connect;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/swarm/disconnect.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/swarm/disconnect.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createDisconnect": () => (/* binding */ createDisconnect)
/* harmony export */ });
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");


const createDisconnect = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_0__.configure)(api => {
  async function disconnect(addr, options = {}) {
    const res = await api.post('swarm/disconnect', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_1__.toUrlSearchParams)({
        arg: addr,
        ...options
      }),
      headers: options.headers
    });
    const {Strings} = await res.json();
    return Strings || [];
  }
  return disconnect;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/swarm/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/swarm/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSwarm": () => (/* binding */ createSwarm)
/* harmony export */ });
/* harmony import */ var _addrs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addrs.js */ "./node_modules/ipfs-http-client/esm/src/swarm/addrs.js");
/* harmony import */ var _connect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connect.js */ "./node_modules/ipfs-http-client/esm/src/swarm/connect.js");
/* harmony import */ var _disconnect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./disconnect.js */ "./node_modules/ipfs-http-client/esm/src/swarm/disconnect.js");
/* harmony import */ var _local_addrs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-addrs.js */ "./node_modules/ipfs-http-client/esm/src/swarm/local-addrs.js");
/* harmony import */ var _peers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./peers.js */ "./node_modules/ipfs-http-client/esm/src/swarm/peers.js");





function createSwarm(config) {
  return {
    addrs: (0,_addrs_js__WEBPACK_IMPORTED_MODULE_0__.createAddrs)(config),
    connect: (0,_connect_js__WEBPACK_IMPORTED_MODULE_1__.createConnect)(config),
    disconnect: (0,_disconnect_js__WEBPACK_IMPORTED_MODULE_2__.createDisconnect)(config),
    localAddrs: (0,_local_addrs_js__WEBPACK_IMPORTED_MODULE_3__.createLocalAddrs)(config),
    peers: (0,_peers_js__WEBPACK_IMPORTED_MODULE_4__.createPeers)(config)
  };
}

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/swarm/local-addrs.js":
/*!********************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/swarm/local-addrs.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createLocalAddrs": () => (/* binding */ createLocalAddrs)
/* harmony export */ });
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createLocalAddrs = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function localAddrs(options = {}) {
    const res = await api.post('swarm/addrs/local', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      headers: options.headers
    });
    const {Strings} = await res.json();
    return (Strings || []).map(a => new multiaddr__WEBPACK_IMPORTED_MODULE_0__.Multiaddr(a));
  }
  return localAddrs;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/swarm/peers.js":
/*!**************************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/swarm/peers.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPeers": () => (/* binding */ createPeers)
/* harmony export */ });
/* harmony import */ var multiaddr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiaddr */ "./node_modules/multiaddr/src/index.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createPeers = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function peers(options = {}) {
    const res = await api.post('swarm/peers', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      headers: options.headers
    });
    const {Peers} = await res.json();
    return (Peers || []).map(peer => {
      return {
        addr: new multiaddr__WEBPACK_IMPORTED_MODULE_0__.Multiaddr(peer.Addr),
        peer: peer.Peer,
        muxer: peer.Muxer,
        latency: peer.Latency,
        streams: peer.Streams,
        direction: peer.Direction == null ? undefined : peer.Direction === 0 ? 'inbound' : 'outbound'
      };
    });
  }
  return peers;
});

/***/ }),

/***/ "./node_modules/ipfs-http-client/esm/src/version.js":
/*!**********************************************************!*\
  !*** ./node_modules/ipfs-http-client/esm/src/version.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createVersion": () => (/* binding */ createVersion)
/* harmony export */ });
/* harmony import */ var _lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/object-to-camel.js */ "./node_modules/ipfs-http-client/esm/src/lib/object-to-camel.js");
/* harmony import */ var _lib_configure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/configure.js */ "./node_modules/ipfs-http-client/esm/src/lib/configure.js");
/* harmony import */ var _lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/to-url-search-params.js */ "./node_modules/ipfs-http-client/esm/src/lib/to-url-search-params.js");



const createVersion = (0,_lib_configure_js__WEBPACK_IMPORTED_MODULE_1__.configure)(api => {
  async function version(options = {}) {
    const res = await api.post('version', {
      signal: options.signal,
      searchParams: (0,_lib_to_url_search_params_js__WEBPACK_IMPORTED_MODULE_2__.toUrlSearchParams)(options),
      headers: options.headers
    });
    return {
      ...(0,_lib_object_to_camel_js__WEBPACK_IMPORTED_MODULE_0__.objectToCamel)(await res.json()),
      'ipfs-http-client': '1.0.0'
    };
  }
  return version;
});

/***/ }),

/***/ "./node_modules/ipfs-unixfs/esm/src/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ipfs-unixfs/esm/src/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseMode": () => (/* binding */ parseMode),
/* harmony export */   "parseMtime": () => (/* binding */ parseMtime),
/* harmony export */   "UnixFS": () => (/* binding */ UnixFS)
/* harmony export */ });
/* harmony import */ var err_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! err-code */ "./node_modules/err-code/index.js");
/* harmony import */ var _unixfs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unixfs.js */ "./node_modules/ipfs-unixfs/esm/src/unixfs.js");


const PBData = _unixfs_js__WEBPACK_IMPORTED_MODULE_1__.Data;
const types = [
  'raw',
  'directory',
  'file',
  'metadata',
  'symlink',
  'hamt-sharded-directory'
];
const dirTypes = [
  'directory',
  'hamt-sharded-directory'
];
const DEFAULT_FILE_MODE = parseInt('0644', 8);
const DEFAULT_DIRECTORY_MODE = parseInt('0755', 8);
function parseMode(mode) {
  if (mode == null) {
    return undefined;
  }
  if (typeof mode === 'number') {
    return mode & 4095;
  }
  mode = mode.toString();
  if (mode.substring(0, 1) === '0') {
    return parseInt(mode, 8) & 4095;
  }
  return parseInt(mode, 10) & 4095;
}
function parseMtime(input) {
  if (input == null) {
    return undefined;
  }
  let mtime;
  if (input.secs != null) {
    mtime = {
      secs: input.secs,
      nsecs: input.nsecs
    };
  }
  if (input.Seconds != null) {
    mtime = {
      secs: input.Seconds,
      nsecs: input.FractionalNanoseconds
    };
  }
  if (Array.isArray(input)) {
    mtime = {
      secs: input[0],
      nsecs: input[1]
    };
  }
  if (input instanceof Date) {
    const ms = input.getTime();
    const secs = Math.floor(ms / 1000);
    mtime = {
      secs: secs,
      nsecs: (ms - secs * 1000) * 1000
    };
  }
  if (!Object.prototype.hasOwnProperty.call(mtime, 'secs')) {
    return undefined;
  }
  if (mtime != null && mtime.nsecs != null && (mtime.nsecs < 0 || mtime.nsecs > 999999999)) {
    throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('mtime-nsecs must be within the range [0,999999999]'), 'ERR_INVALID_MTIME_NSECS');
  }
  return mtime;
}
class UnixFS {
  static unmarshal(marshaled) {
    const message = PBData.decode(marshaled);
    const decoded = PBData.toObject(message, {
      defaults: false,
      arrays: true,
      longs: Number,
      objects: false
    });
    const data = new UnixFS({
      type: types[decoded.Type],
      data: decoded.Data,
      blockSizes: decoded.blocksizes,
      mode: decoded.mode,
      mtime: decoded.mtime ? {
        secs: decoded.mtime.Seconds,
        nsecs: decoded.mtime.FractionalNanoseconds
      } : undefined
    });
    data._originalMode = decoded.mode || 0;
    return data;
  }
  constructor(options = { type: 'file' }) {
    const {type, data, blockSizes, hashType, fanout, mtime, mode} = options;
    if (type && !types.includes(type)) {
      throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
    }
    this.type = type || 'file';
    this.data = data;
    this.hashType = hashType;
    this.fanout = fanout;
    this.blockSizes = blockSizes || [];
    this._originalMode = 0;
    this.mode = parseMode(mode);
    if (mtime) {
      this.mtime = parseMtime(mtime);
      if (this.mtime && !this.mtime.nsecs) {
        this.mtime.nsecs = 0;
      }
    }
  }
  set mode(mode) {
    this._mode = this.isDirectory() ? DEFAULT_DIRECTORY_MODE : DEFAULT_FILE_MODE;
    const parsedMode = parseMode(mode);
    if (parsedMode !== undefined) {
      this._mode = parsedMode;
    }
  }
  get mode() {
    return this._mode;
  }
  isDirectory() {
    return Boolean(this.type && dirTypes.includes(this.type));
  }
  addBlockSize(size) {
    this.blockSizes.push(size);
  }
  removeBlockSize(index) {
    this.blockSizes.splice(index, 1);
  }
  fileSize() {
    if (this.isDirectory()) {
      return 0;
    }
    let sum = 0;
    this.blockSizes.forEach(size => {
      sum += size;
    });
    if (this.data) {
      sum += this.data.length;
    }
    return sum;
  }
  marshal() {
    let type;
    switch (this.type) {
    case 'raw':
      type = PBData.DataType.Raw;
      break;
    case 'directory':
      type = PBData.DataType.Directory;
      break;
    case 'file':
      type = PBData.DataType.File;
      break;
    case 'metadata':
      type = PBData.DataType.Metadata;
      break;
    case 'symlink':
      type = PBData.DataType.Symlink;
      break;
    case 'hamt-sharded-directory':
      type = PBData.DataType.HAMTShard;
      break;
    default:
      throw err_code__WEBPACK_IMPORTED_MODULE_0__(new Error('Type: ' + type + ' is not valid'), 'ERR_INVALID_TYPE');
    }
    let data = this.data;
    if (!this.data || !this.data.length) {
      data = undefined;
    }
    let mode;
    if (this.mode != null) {
      mode = this._originalMode & 4294963200 | (parseMode(this.mode) || 0);
      if (mode === DEFAULT_FILE_MODE && !this.isDirectory()) {
        mode = undefined;
      }
      if (mode === DEFAULT_DIRECTORY_MODE && this.isDirectory()) {
        mode = undefined;
      }
    }
    let mtime;
    if (this.mtime != null) {
      const parsed = parseMtime(this.mtime);
      if (parsed) {
        mtime = {
          Seconds: parsed.secs,
          FractionalNanoseconds: parsed.nsecs
        };
        if (mtime.FractionalNanoseconds === 0) {
          delete mtime.FractionalNanoseconds;
        }
      }
    }
    const pbData = {
      Type: type,
      Data: data,
      filesize: this.isDirectory() ? undefined : this.fileSize(),
      blocksizes: this.blockSizes,
      hashType: this.hashType,
      fanout: this.fanout,
      mode,
      mtime
    };
    return PBData.encode(pbData).finish();
  }
}


/***/ }),

/***/ "./node_modules/ipfs-unixfs/esm/src/unixfs.js":
/*!****************************************************!*\
  !*** ./node_modules/ipfs-unixfs/esm/src/unixfs.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Data": () => (/* binding */ Data),
/* harmony export */   "UnixTime": () => (/* binding */ UnixTime),
/* harmony export */   "Metadata": () => (/* binding */ Metadata),
/* harmony export */   "default": () => (/* binding */ $root)
/* harmony export */ });
/* harmony import */ var protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! protobufjs/minimal.js */ "./node_modules/protobufjs/minimal.js");

const $Reader = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.Reader, $Writer = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.Writer, $util = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util;
const $root = protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.roots["ipfs-unixfs"] || (protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.roots["ipfs-unixfs"] = {});
const Data = $root.Data = (() => {
  function Data(p) {
    this.blocksizes = [];
    if (p)
      for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
        if (p[ks[i]] != null)
          this[ks[i]] = p[ks[i]];
  }
  Data.prototype.Type = 0;
  Data.prototype.Data = $util.newBuffer([]);
  Data.prototype.filesize = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.blocksizes = $util.emptyArray;
  Data.prototype.hashType = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.fanout = $util.Long ? $util.Long.fromBits(0, 0, true) : 0;
  Data.prototype.mode = 0;
  Data.prototype.mtime = null;
  Data.encode = function encode(m, w) {
    if (!w)
      w = $Writer.create();
    w.uint32(8).int32(m.Type);
    if (m.Data != null && Object.hasOwnProperty.call(m, 'Data'))
      w.uint32(18).bytes(m.Data);
    if (m.filesize != null && Object.hasOwnProperty.call(m, 'filesize'))
      w.uint32(24).uint64(m.filesize);
    if (m.blocksizes != null && m.blocksizes.length) {
      for (var i = 0; i < m.blocksizes.length; ++i)
        w.uint32(32).uint64(m.blocksizes[i]);
    }
    if (m.hashType != null && Object.hasOwnProperty.call(m, 'hashType'))
      w.uint32(40).uint64(m.hashType);
    if (m.fanout != null && Object.hasOwnProperty.call(m, 'fanout'))
      w.uint32(48).uint64(m.fanout);
    if (m.mode != null && Object.hasOwnProperty.call(m, 'mode'))
      w.uint32(56).uint32(m.mode);
    if (m.mtime != null && Object.hasOwnProperty.call(m, 'mtime'))
      $root.UnixTime.encode(m.mtime, w.uint32(66).fork()).ldelim();
    return w;
  };
  Data.decode = function decode(r, l) {
    if (!(r instanceof $Reader))
      r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l, m = new $root.Data();
    while (r.pos < c) {
      var t = r.uint32();
      switch (t >>> 3) {
      case 1:
        m.Type = r.int32();
        break;
      case 2:
        m.Data = r.bytes();
        break;
      case 3:
        m.filesize = r.uint64();
        break;
      case 4:
        if (!(m.blocksizes && m.blocksizes.length))
          m.blocksizes = [];
        if ((t & 7) === 2) {
          var c2 = r.uint32() + r.pos;
          while (r.pos < c2)
            m.blocksizes.push(r.uint64());
        } else
          m.blocksizes.push(r.uint64());
        break;
      case 5:
        m.hashType = r.uint64();
        break;
      case 6:
        m.fanout = r.uint64();
        break;
      case 7:
        m.mode = r.uint32();
        break;
      case 8:
        m.mtime = $root.UnixTime.decode(r, r.uint32());
        break;
      default:
        r.skipType(t & 7);
        break;
      }
    }
    if (!m.hasOwnProperty('Type'))
      throw $util.ProtocolError('missing required \'Type\'', { instance: m });
    return m;
  };
  Data.fromObject = function fromObject(d) {
    if (d instanceof $root.Data)
      return d;
    var m = new $root.Data();
    switch (d.Type) {
    case 'Raw':
    case 0:
      m.Type = 0;
      break;
    case 'Directory':
    case 1:
      m.Type = 1;
      break;
    case 'File':
    case 2:
      m.Type = 2;
      break;
    case 'Metadata':
    case 3:
      m.Type = 3;
      break;
    case 'Symlink':
    case 4:
      m.Type = 4;
      break;
    case 'HAMTShard':
    case 5:
      m.Type = 5;
      break;
    }
    if (d.Data != null) {
      if (typeof d.Data === 'string')
        $util.base64.decode(d.Data, m.Data = $util.newBuffer($util.base64.length(d.Data)), 0);
      else if (d.Data.length)
        m.Data = d.Data;
    }
    if (d.filesize != null) {
      if ($util.Long)
        (m.filesize = $util.Long.fromValue(d.filesize)).unsigned = true;
      else if (typeof d.filesize === 'string')
        m.filesize = parseInt(d.filesize, 10);
      else if (typeof d.filesize === 'number')
        m.filesize = d.filesize;
      else if (typeof d.filesize === 'object')
        m.filesize = new $util.LongBits(d.filesize.low >>> 0, d.filesize.high >>> 0).toNumber(true);
    }
    if (d.blocksizes) {
      if (!Array.isArray(d.blocksizes))
        throw TypeError('.Data.blocksizes: array expected');
      m.blocksizes = [];
      for (var i = 0; i < d.blocksizes.length; ++i) {
        if ($util.Long)
          (m.blocksizes[i] = $util.Long.fromValue(d.blocksizes[i])).unsigned = true;
        else if (typeof d.blocksizes[i] === 'string')
          m.blocksizes[i] = parseInt(d.blocksizes[i], 10);
        else if (typeof d.blocksizes[i] === 'number')
          m.blocksizes[i] = d.blocksizes[i];
        else if (typeof d.blocksizes[i] === 'object')
          m.blocksizes[i] = new $util.LongBits(d.blocksizes[i].low >>> 0, d.blocksizes[i].high >>> 0).toNumber(true);
      }
    }
    if (d.hashType != null) {
      if ($util.Long)
        (m.hashType = $util.Long.fromValue(d.hashType)).unsigned = true;
      else if (typeof d.hashType === 'string')
        m.hashType = parseInt(d.hashType, 10);
      else if (typeof d.hashType === 'number')
        m.hashType = d.hashType;
      else if (typeof d.hashType === 'object')
        m.hashType = new $util.LongBits(d.hashType.low >>> 0, d.hashType.high >>> 0).toNumber(true);
    }
    if (d.fanout != null) {
      if ($util.Long)
        (m.fanout = $util.Long.fromValue(d.fanout)).unsigned = true;
      else if (typeof d.fanout === 'string')
        m.fanout = parseInt(d.fanout, 10);
      else if (typeof d.fanout === 'number')
        m.fanout = d.fanout;
      else if (typeof d.fanout === 'object')
        m.fanout = new $util.LongBits(d.fanout.low >>> 0, d.fanout.high >>> 0).toNumber(true);
    }
    if (d.mode != null) {
      m.mode = d.mode >>> 0;
    }
    if (d.mtime != null) {
      if (typeof d.mtime !== 'object')
        throw TypeError('.Data.mtime: object expected');
      m.mtime = $root.UnixTime.fromObject(d.mtime);
    }
    return m;
  };
  Data.toObject = function toObject(m, o) {
    if (!o)
      o = {};
    var d = {};
    if (o.arrays || o.defaults) {
      d.blocksizes = [];
    }
    if (o.defaults) {
      d.Type = o.enums === String ? 'Raw' : 0;
      if (o.bytes === String)
        d.Data = '';
      else {
        d.Data = [];
        if (o.bytes !== Array)
          d.Data = $util.newBuffer(d.Data);
      }
      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.filesize = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.filesize = o.longs === String ? '0' : 0;
      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.hashType = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.hashType = o.longs === String ? '0' : 0;
      if ($util.Long) {
        var n = new $util.Long(0, 0, true);
        d.fanout = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.fanout = o.longs === String ? '0' : 0;
      d.mode = 0;
      d.mtime = null;
    }
    if (m.Type != null && m.hasOwnProperty('Type')) {
      d.Type = o.enums === String ? $root.Data.DataType[m.Type] : m.Type;
    }
    if (m.Data != null && m.hasOwnProperty('Data')) {
      d.Data = o.bytes === String ? $util.base64.encode(m.Data, 0, m.Data.length) : o.bytes === Array ? Array.prototype.slice.call(m.Data) : m.Data;
    }
    if (m.filesize != null && m.hasOwnProperty('filesize')) {
      if (typeof m.filesize === 'number')
        d.filesize = o.longs === String ? String(m.filesize) : m.filesize;
      else
        d.filesize = o.longs === String ? $util.Long.prototype.toString.call(m.filesize) : o.longs === Number ? new $util.LongBits(m.filesize.low >>> 0, m.filesize.high >>> 0).toNumber(true) : m.filesize;
    }
    if (m.blocksizes && m.blocksizes.length) {
      d.blocksizes = [];
      for (var j = 0; j < m.blocksizes.length; ++j) {
        if (typeof m.blocksizes[j] === 'number')
          d.blocksizes[j] = o.longs === String ? String(m.blocksizes[j]) : m.blocksizes[j];
        else
          d.blocksizes[j] = o.longs === String ? $util.Long.prototype.toString.call(m.blocksizes[j]) : o.longs === Number ? new $util.LongBits(m.blocksizes[j].low >>> 0, m.blocksizes[j].high >>> 0).toNumber(true) : m.blocksizes[j];
      }
    }
    if (m.hashType != null && m.hasOwnProperty('hashType')) {
      if (typeof m.hashType === 'number')
        d.hashType = o.longs === String ? String(m.hashType) : m.hashType;
      else
        d.hashType = o.longs === String ? $util.Long.prototype.toString.call(m.hashType) : o.longs === Number ? new $util.LongBits(m.hashType.low >>> 0, m.hashType.high >>> 0).toNumber(true) : m.hashType;
    }
    if (m.fanout != null && m.hasOwnProperty('fanout')) {
      if (typeof m.fanout === 'number')
        d.fanout = o.longs === String ? String(m.fanout) : m.fanout;
      else
        d.fanout = o.longs === String ? $util.Long.prototype.toString.call(m.fanout) : o.longs === Number ? new $util.LongBits(m.fanout.low >>> 0, m.fanout.high >>> 0).toNumber(true) : m.fanout;
    }
    if (m.mode != null && m.hasOwnProperty('mode')) {
      d.mode = m.mode;
    }
    if (m.mtime != null && m.hasOwnProperty('mtime')) {
      d.mtime = $root.UnixTime.toObject(m.mtime, o);
    }
    return d;
  };
  Data.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util.toJSONOptions);
  };
  Data.DataType = function () {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = 'Raw'] = 0;
    values[valuesById[1] = 'Directory'] = 1;
    values[valuesById[2] = 'File'] = 2;
    values[valuesById[3] = 'Metadata'] = 3;
    values[valuesById[4] = 'Symlink'] = 4;
    values[valuesById[5] = 'HAMTShard'] = 5;
    return values;
  }();
  return Data;
})();
const UnixTime = $root.UnixTime = (() => {
  function UnixTime(p) {
    if (p)
      for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
        if (p[ks[i]] != null)
          this[ks[i]] = p[ks[i]];
  }
  UnixTime.prototype.Seconds = $util.Long ? $util.Long.fromBits(0, 0, false) : 0;
  UnixTime.prototype.FractionalNanoseconds = 0;
  UnixTime.encode = function encode(m, w) {
    if (!w)
      w = $Writer.create();
    w.uint32(8).int64(m.Seconds);
    if (m.FractionalNanoseconds != null && Object.hasOwnProperty.call(m, 'FractionalNanoseconds'))
      w.uint32(21).fixed32(m.FractionalNanoseconds);
    return w;
  };
  UnixTime.decode = function decode(r, l) {
    if (!(r instanceof $Reader))
      r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l, m = new $root.UnixTime();
    while (r.pos < c) {
      var t = r.uint32();
      switch (t >>> 3) {
      case 1:
        m.Seconds = r.int64();
        break;
      case 2:
        m.FractionalNanoseconds = r.fixed32();
        break;
      default:
        r.skipType(t & 7);
        break;
      }
    }
    if (!m.hasOwnProperty('Seconds'))
      throw $util.ProtocolError('missing required \'Seconds\'', { instance: m });
    return m;
  };
  UnixTime.fromObject = function fromObject(d) {
    if (d instanceof $root.UnixTime)
      return d;
    var m = new $root.UnixTime();
    if (d.Seconds != null) {
      if ($util.Long)
        (m.Seconds = $util.Long.fromValue(d.Seconds)).unsigned = false;
      else if (typeof d.Seconds === 'string')
        m.Seconds = parseInt(d.Seconds, 10);
      else if (typeof d.Seconds === 'number')
        m.Seconds = d.Seconds;
      else if (typeof d.Seconds === 'object')
        m.Seconds = new $util.LongBits(d.Seconds.low >>> 0, d.Seconds.high >>> 0).toNumber();
    }
    if (d.FractionalNanoseconds != null) {
      m.FractionalNanoseconds = d.FractionalNanoseconds >>> 0;
    }
    return m;
  };
  UnixTime.toObject = function toObject(m, o) {
    if (!o)
      o = {};
    var d = {};
    if (o.defaults) {
      if ($util.Long) {
        var n = new $util.Long(0, 0, false);
        d.Seconds = o.longs === String ? n.toString() : o.longs === Number ? n.toNumber() : n;
      } else
        d.Seconds = o.longs === String ? '0' : 0;
      d.FractionalNanoseconds = 0;
    }
    if (m.Seconds != null && m.hasOwnProperty('Seconds')) {
      if (typeof m.Seconds === 'number')
        d.Seconds = o.longs === String ? String(m.Seconds) : m.Seconds;
      else
        d.Seconds = o.longs === String ? $util.Long.prototype.toString.call(m.Seconds) : o.longs === Number ? new $util.LongBits(m.Seconds.low >>> 0, m.Seconds.high >>> 0).toNumber() : m.Seconds;
    }
    if (m.FractionalNanoseconds != null && m.hasOwnProperty('FractionalNanoseconds')) {
      d.FractionalNanoseconds = m.FractionalNanoseconds;
    }
    return d;
  };
  UnixTime.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util.toJSONOptions);
  };
  return UnixTime;
})();
const Metadata = $root.Metadata = (() => {
  function Metadata(p) {
    if (p)
      for (var ks = Object.keys(p), i = 0; i < ks.length; ++i)
        if (p[ks[i]] != null)
          this[ks[i]] = p[ks[i]];
  }
  Metadata.prototype.MimeType = '';
  Metadata.encode = function encode(m, w) {
    if (!w)
      w = $Writer.create();
    if (m.MimeType != null && Object.hasOwnProperty.call(m, 'MimeType'))
      w.uint32(10).string(m.MimeType);
    return w;
  };
  Metadata.decode = function decode(r, l) {
    if (!(r instanceof $Reader))
      r = $Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l, m = new $root.Metadata();
    while (r.pos < c) {
      var t = r.uint32();
      switch (t >>> 3) {
      case 1:
        m.MimeType = r.string();
        break;
      default:
        r.skipType(t & 7);
        break;
      }
    }
    return m;
  };
  Metadata.fromObject = function fromObject(d) {
    if (d instanceof $root.Metadata)
      return d;
    var m = new $root.Metadata();
    if (d.MimeType != null) {
      m.MimeType = String(d.MimeType);
    }
    return m;
  };
  Metadata.toObject = function toObject(m, o) {
    if (!o)
      o = {};
    var d = {};
    if (o.defaults) {
      d.MimeType = '';
    }
    if (m.MimeType != null && m.hasOwnProperty('MimeType')) {
      d.MimeType = m.MimeType;
    }
    return d;
  };
  Metadata.prototype.toJSON = function toJSON() {
    return this.constructor.toObject(this, protobufjs_minimal_js__WEBPACK_IMPORTED_MODULE_0__.util.toJSONOptions);
  };
  return Metadata;
})();


/***/ }),

/***/ "./node_modules/merge-options/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/merge-options/index.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/merge-options/index.js");
/**
 * Thin ESM wrapper for CJS named exports.
 *
 * Ref: https://redfin.engineering/node-modules-at-war-why-commonjs-and-es-modules-cant-get-along-9617135eeca1
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_index_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./node_modules/multiformats/esm/src/bases/base.js":
/*!*********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "or": () => (/* binding */ or),
/* harmony export */   "Codec": () => (/* binding */ Codec),
/* harmony export */   "from": () => (/* binding */ from),
/* harmony export */   "baseX": () => (/* binding */ baseX),
/* harmony export */   "rfc4648": () => (/* binding */ rfc4648)
/* harmony export */ });
/* harmony import */ var _vendor_base_x_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../vendor/base-x.js */ "./node_modules/multiformats/esm/vendor/base-x.js");
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bytes.js */ "./node_modules/multiformats/esm/src/bytes.js");


class Encoder {
  constructor(name, prefix, baseEncode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
  }
  encode(bytes) {
    if (bytes instanceof Uint8Array) {
      return `${ this.prefix }${ this.baseEncode(bytes) }`;
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}
class Decoder {
  constructor(name, prefix, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseDecode = baseDecode;
  }
  decode(text) {
    if (typeof text === 'string') {
      switch (text[0]) {
      case this.prefix: {
          return this.baseDecode(text.slice(1));
        }
      default: {
          throw Error(`Unable to decode multibase string ${ JSON.stringify(text) }, ${ this.name } decoder only supports inputs prefixed with ${ this.prefix }`);
        }
      }
    } else {
      throw Error('Can only multibase decode strings');
    }
  }
  or(decoder) {
    return or(this, decoder);
  }
}
class ComposedDecoder {
  constructor(decoders) {
    this.decoders = decoders;
  }
  or(decoder) {
    return or(this, decoder);
  }
  decode(input) {
    const prefix = input[0];
    const decoder = this.decoders[prefix];
    if (decoder) {
      return decoder.decode(input);
    } else {
      throw RangeError(`Unable to decode multibase string ${ JSON.stringify(input) }, only inputs prefixed with ${ Object.keys(this.decoders) } are supported`);
    }
  }
}
const or = (left, right) => new ComposedDecoder({
  ...left.decoders || { [left.prefix]: left },
  ...right.decoders || { [right.prefix]: right }
});
class Codec {
  constructor(name, prefix, baseEncode, baseDecode) {
    this.name = name;
    this.prefix = prefix;
    this.baseEncode = baseEncode;
    this.baseDecode = baseDecode;
    this.encoder = new Encoder(name, prefix, baseEncode);
    this.decoder = new Decoder(name, prefix, baseDecode);
  }
  encode(input) {
    return this.encoder.encode(input);
  }
  decode(input) {
    return this.decoder.decode(input);
  }
}
const from = ({name, prefix, encode, decode}) => new Codec(name, prefix, encode, decode);
const baseX = ({prefix, name, alphabet}) => {
  const {encode, decode} = (0,_vendor_base_x_js__WEBPACK_IMPORTED_MODULE_0__["default"])(alphabet, name);
  return from({
    prefix,
    name,
    encode,
    decode: text => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_1__.coerce)(decode(text))
  });
};
const decode = (string, alphabet, bitsPerChar, name) => {
  const codes = {};
  for (let i = 0; i < alphabet.length; ++i) {
    codes[alphabet[i]] = i;
  }
  let end = string.length;
  while (string[end - 1] === '=') {
    --end;
  }
  const out = new Uint8Array(end * bitsPerChar / 8 | 0);
  let bits = 0;
  let buffer = 0;
  let written = 0;
  for (let i = 0; i < end; ++i) {
    const value = codes[string[i]];
    if (value === undefined) {
      throw new SyntaxError(`Non-${ name } character`);
    }
    buffer = buffer << bitsPerChar | value;
    bits += bitsPerChar;
    if (bits >= 8) {
      bits -= 8;
      out[written++] = 255 & buffer >> bits;
    }
  }
  if (bits >= bitsPerChar || 255 & buffer << 8 - bits) {
    throw new SyntaxError('Unexpected end of data');
  }
  return out;
};
const encode = (data, alphabet, bitsPerChar) => {
  const pad = alphabet[alphabet.length - 1] === '=';
  const mask = (1 << bitsPerChar) - 1;
  let out = '';
  let bits = 0;
  let buffer = 0;
  for (let i = 0; i < data.length; ++i) {
    buffer = buffer << 8 | data[i];
    bits += 8;
    while (bits > bitsPerChar) {
      bits -= bitsPerChar;
      out += alphabet[mask & buffer >> bits];
    }
  }
  if (bits) {
    out += alphabet[mask & buffer << bitsPerChar - bits];
  }
  if (pad) {
    while (out.length * bitsPerChar & 7) {
      out += '=';
    }
  }
  return out;
};
const rfc4648 = ({name, prefix, bitsPerChar, alphabet}) => {
  return from({
    prefix,
    name,
    encode(input) {
      return encode(input, alphabet, bitsPerChar);
    },
    decode(input) {
      return decode(input, alphabet, bitsPerChar, name);
    }
  });
};

/***/ }),

/***/ "./node_modules/multiformats/esm/src/bases/base10.js":
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base10.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base10": () => (/* binding */ base10)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/multiformats/esm/src/bases/base.js");

const base10 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.baseX)({
  prefix: '9',
  name: 'base10',
  alphabet: '0123456789'
});

/***/ }),

/***/ "./node_modules/multiformats/esm/src/bases/base16.js":
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base16.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base16": () => (/* binding */ base16),
/* harmony export */   "base16upper": () => (/* binding */ base16upper)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/multiformats/esm/src/bases/base.js");

const base16 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'f',
  name: 'base16',
  alphabet: '0123456789abcdef',
  bitsPerChar: 4
});
const base16upper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'F',
  name: 'base16upper',
  alphabet: '0123456789ABCDEF',
  bitsPerChar: 4
});

/***/ }),

/***/ "./node_modules/multiformats/esm/src/bases/base2.js":
/*!**********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base2.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base2": () => (/* binding */ base2)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/multiformats/esm/src/bases/base.js");

const base2 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: '0',
  name: 'base2',
  alphabet: '01',
  bitsPerChar: 1
});

/***/ }),

/***/ "./node_modules/multiformats/esm/src/bases/base32.js":
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base32.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base32": () => (/* binding */ base32),
/* harmony export */   "base32upper": () => (/* binding */ base32upper),
/* harmony export */   "base32pad": () => (/* binding */ base32pad),
/* harmony export */   "base32padupper": () => (/* binding */ base32padupper),
/* harmony export */   "base32hex": () => (/* binding */ base32hex),
/* harmony export */   "base32hexupper": () => (/* binding */ base32hexupper),
/* harmony export */   "base32hexpad": () => (/* binding */ base32hexpad),
/* harmony export */   "base32hexpadupper": () => (/* binding */ base32hexpadupper),
/* harmony export */   "base32z": () => (/* binding */ base32z)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/multiformats/esm/src/bases/base.js");

const base32 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'b',
  name: 'base32',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
  bitsPerChar: 5
});
const base32upper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'B',
  name: 'base32upper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
  bitsPerChar: 5
});
const base32pad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'c',
  name: 'base32pad',
  alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
  bitsPerChar: 5
});
const base32padupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'C',
  name: 'base32padupper',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
  bitsPerChar: 5
});
const base32hex = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'v',
  name: 'base32hex',
  alphabet: '0123456789abcdefghijklmnopqrstuv',
  bitsPerChar: 5
});
const base32hexupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'V',
  name: 'base32hexupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
  bitsPerChar: 5
});
const base32hexpad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 't',
  name: 'base32hexpad',
  alphabet: '0123456789abcdefghijklmnopqrstuv=',
  bitsPerChar: 5
});
const base32hexpadupper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'T',
  name: 'base32hexpadupper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
  bitsPerChar: 5
});
const base32z = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'h',
  name: 'base32z',
  alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
  bitsPerChar: 5
});

/***/ }),

/***/ "./node_modules/multiformats/esm/src/bases/base36.js":
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base36.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base36": () => (/* binding */ base36),
/* harmony export */   "base36upper": () => (/* binding */ base36upper)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/multiformats/esm/src/bases/base.js");

const base36 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.baseX)({
  prefix: 'k',
  name: 'base36',
  alphabet: '0123456789abcdefghijklmnopqrstuvwxyz'
});
const base36upper = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.baseX)({
  prefix: 'K',
  name: 'base36upper',
  alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
});

/***/ }),

/***/ "./node_modules/multiformats/esm/src/bases/base58.js":
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base58.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base58btc": () => (/* binding */ base58btc),
/* harmony export */   "base58flickr": () => (/* binding */ base58flickr)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/multiformats/esm/src/bases/base.js");

const base58btc = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.baseX)({
  name: 'base58btc',
  prefix: 'z',
  alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
});
const base58flickr = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.baseX)({
  name: 'base58flickr',
  prefix: 'Z',
  alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ'
});

/***/ }),

/***/ "./node_modules/multiformats/esm/src/bases/base64.js":
/*!***********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base64.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base64": () => (/* binding */ base64),
/* harmony export */   "base64pad": () => (/* binding */ base64pad),
/* harmony export */   "base64url": () => (/* binding */ base64url),
/* harmony export */   "base64urlpad": () => (/* binding */ base64urlpad)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/multiformats/esm/src/bases/base.js");

const base64 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'm',
  name: 'base64',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
  bitsPerChar: 6
});
const base64pad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'M',
  name: 'base64pad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  bitsPerChar: 6
});
const base64url = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'u',
  name: 'base64url',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
  bitsPerChar: 6
});
const base64urlpad = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: 'U',
  name: 'base64urlpad',
  alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
  bitsPerChar: 6
});

/***/ }),

/***/ "./node_modules/multiformats/esm/src/bases/base8.js":
/*!**********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/base8.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "base8": () => (/* binding */ base8)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/multiformats/esm/src/bases/base.js");

const base8 = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.rfc4648)({
  prefix: '7',
  name: 'base8',
  alphabet: '01234567',
  bitsPerChar: 3
});

/***/ }),

/***/ "./node_modules/multiformats/esm/src/bases/identity.js":
/*!*************************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bases/identity.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.js */ "./node_modules/multiformats/esm/src/bases/base.js");
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bytes.js */ "./node_modules/multiformats/esm/src/bytes.js");


const identity = (0,_base_js__WEBPACK_IMPORTED_MODULE_0__.from)({
  prefix: '\0',
  name: 'identity',
  encode: buf => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_1__.toString)(buf),
  decode: str => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_1__.fromString)(str)
});

/***/ }),

/***/ "./node_modules/multiformats/esm/src/basics.js":
/*!*****************************************************!*\
  !*** ./node_modules/multiformats/esm/src/basics.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CID": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_13__.CID),
/* harmony export */   "hasher": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_13__.hasher),
/* harmony export */   "digest": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_13__.digest),
/* harmony export */   "varint": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_13__.varint),
/* harmony export */   "bytes": () => (/* reexport safe */ _index_js__WEBPACK_IMPORTED_MODULE_13__.bytes),
/* harmony export */   "hashes": () => (/* binding */ hashes),
/* harmony export */   "bases": () => (/* binding */ bases),
/* harmony export */   "codecs": () => (/* binding */ codecs)
/* harmony export */ });
/* harmony import */ var _bases_identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bases/identity.js */ "./node_modules/multiformats/esm/src/bases/identity.js");
/* harmony import */ var _bases_base2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bases/base2.js */ "./node_modules/multiformats/esm/src/bases/base2.js");
/* harmony import */ var _bases_base8_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bases/base8.js */ "./node_modules/multiformats/esm/src/bases/base8.js");
/* harmony import */ var _bases_base10_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bases/base10.js */ "./node_modules/multiformats/esm/src/bases/base10.js");
/* harmony import */ var _bases_base16_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bases/base16.js */ "./node_modules/multiformats/esm/src/bases/base16.js");
/* harmony import */ var _bases_base32_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bases/base32.js */ "./node_modules/multiformats/esm/src/bases/base32.js");
/* harmony import */ var _bases_base36_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bases/base36.js */ "./node_modules/multiformats/esm/src/bases/base36.js");
/* harmony import */ var _bases_base58_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bases/base58.js */ "./node_modules/multiformats/esm/src/bases/base58.js");
/* harmony import */ var _bases_base64_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bases/base64.js */ "./node_modules/multiformats/esm/src/bases/base64.js");
/* harmony import */ var _hashes_sha2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./hashes/sha2.js */ "./node_modules/multiformats/esm/src/hashes/sha2-browser.js");
/* harmony import */ var _hashes_identity_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./hashes/identity.js */ "./node_modules/multiformats/esm/src/hashes/identity.js");
/* harmony import */ var _codecs_raw_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./codecs/raw.js */ "./node_modules/multiformats/esm/src/codecs/raw.js");
/* harmony import */ var _codecs_json_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./codecs/json.js */ "./node_modules/multiformats/esm/src/codecs/json.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index.js */ "./node_modules/multiformats/esm/src/index.js");














const bases = {
  ..._bases_identity_js__WEBPACK_IMPORTED_MODULE_0__,
  ..._bases_base2_js__WEBPACK_IMPORTED_MODULE_1__,
  ..._bases_base8_js__WEBPACK_IMPORTED_MODULE_2__,
  ..._bases_base10_js__WEBPACK_IMPORTED_MODULE_3__,
  ..._bases_base16_js__WEBPACK_IMPORTED_MODULE_4__,
  ..._bases_base32_js__WEBPACK_IMPORTED_MODULE_5__,
  ..._bases_base36_js__WEBPACK_IMPORTED_MODULE_6__,
  ..._bases_base58_js__WEBPACK_IMPORTED_MODULE_7__,
  ..._bases_base64_js__WEBPACK_IMPORTED_MODULE_8__
};
const hashes = {
  ..._hashes_sha2_js__WEBPACK_IMPORTED_MODULE_9__,
  ..._hashes_identity_js__WEBPACK_IMPORTED_MODULE_10__
};
const codecs = {
  raw: _codecs_raw_js__WEBPACK_IMPORTED_MODULE_11__,
  json: _codecs_json_js__WEBPACK_IMPORTED_MODULE_12__
};


/***/ }),

/***/ "./node_modules/multiformats/esm/src/bytes.js":
/*!****************************************************!*\
  !*** ./node_modules/multiformats/esm/src/bytes.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "coerce": () => (/* binding */ coerce),
/* harmony export */   "isBinary": () => (/* binding */ isBinary),
/* harmony export */   "fromHex": () => (/* binding */ fromHex),
/* harmony export */   "toHex": () => (/* binding */ toHex),
/* harmony export */   "fromString": () => (/* binding */ fromString),
/* harmony export */   "toString": () => (/* binding */ toString),
/* harmony export */   "empty": () => (/* binding */ empty)
/* harmony export */ });
const empty = new Uint8Array(0);
const toHex = d => d.reduce((hex, byte) => hex + byte.toString(16).padStart(2, '0'), '');
const fromHex = hex => {
  const hexes = hex.match(/../g);
  return hexes ? new Uint8Array(hexes.map(b => parseInt(b, 16))) : empty;
};
const equals = (aa, bb) => {
  if (aa === bb)
    return true;
  if (aa.byteLength !== bb.byteLength) {
    return false;
  }
  for (let ii = 0; ii < aa.byteLength; ii++) {
    if (aa[ii] !== bb[ii]) {
      return false;
    }
  }
  return true;
};
const coerce = o => {
  if (o instanceof Uint8Array && o.constructor.name === 'Uint8Array')
    return o;
  if (o instanceof ArrayBuffer)
    return new Uint8Array(o);
  if (ArrayBuffer.isView(o)) {
    return new Uint8Array(o.buffer, o.byteOffset, o.byteLength);
  }
  throw new Error('Unknown type, must be binary type');
};
const isBinary = o => o instanceof ArrayBuffer || ArrayBuffer.isView(o);
const fromString = str => new TextEncoder().encode(str);
const toString = b => new TextDecoder().decode(b);


/***/ }),

/***/ "./node_modules/multiformats/esm/src/cid.js":
/*!**************************************************!*\
  !*** ./node_modules/multiformats/esm/src/cid.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CID": () => (/* binding */ CID)
/* harmony export */ });
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./varint.js */ "./node_modules/multiformats/esm/src/varint.js");
/* harmony import */ var _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hashes/digest.js */ "./node_modules/multiformats/esm/src/hashes/digest.js");
/* harmony import */ var _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bases/base58.js */ "./node_modules/multiformats/esm/src/bases/base58.js");
/* harmony import */ var _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bases/base32.js */ "./node_modules/multiformats/esm/src/bases/base32.js");
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bytes.js */ "./node_modules/multiformats/esm/src/bytes.js");





class CID {
  constructor(version, code, multihash, bytes) {
    this.code = code;
    this.version = version;
    this.multihash = multihash;
    this.bytes = bytes;
    this.byteOffset = bytes.byteOffset;
    this.byteLength = bytes.byteLength;
    this.asCID = this;
    this._baseCache = new Map();
    Object.defineProperties(this, {
      byteOffset: hidden,
      byteLength: hidden,
      code: readonly,
      version: readonly,
      multihash: readonly,
      bytes: readonly,
      _baseCache: hidden,
      asCID: hidden
    });
  }
  toV0() {
    switch (this.version) {
    case 0: {
        return this;
      }
    default: {
        const {code, multihash} = this;
        if (code !== DAG_PB_CODE) {
          throw new Error('Cannot convert a non dag-pb CID to CIDv0');
        }
        if (multihash.code !== SHA_256_CODE) {
          throw new Error('Cannot convert non sha2-256 multihash CID to CIDv0');
        }
        return CID.createV0(multihash);
      }
    }
  }
  toV1() {
    switch (this.version) {
    case 0: {
        const {code, digest} = this.multihash;
        const multihash = _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.create(code, digest);
        return CID.createV1(this.code, multihash);
      }
    case 1: {
        return this;
      }
    default: {
        throw Error(`Can not convert CID version ${ this.version } to version 0. This is a bug please report`);
      }
    }
  }
  equals(other) {
    return other && this.code === other.code && this.version === other.version && _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.equals(this.multihash, other.multihash);
  }
  toString(base) {
    const {bytes, version, _baseCache} = this;
    switch (version) {
    case 0:
      return toStringV0(bytes, _baseCache, base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.encoder);
    default:
      return toStringV1(bytes, _baseCache, base || _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.encoder);
    }
  }
  toJSON() {
    return {
      code: this.code,
      version: this.version,
      hash: this.multihash.bytes
    };
  }
  get [Symbol.toStringTag]() {
    return 'CID';
  }
  [Symbol.for('nodejs.util.inspect.custom')]() {
    return 'CID(' + this.toString() + ')';
  }
  static isCID(value) {
    deprecate(/^0\.0/, IS_CID_DEPRECATION);
    return !!(value && (value[cidSymbol] || value.asCID === value));
  }
  get toBaseEncodedString() {
    throw new Error('Deprecated, use .toString()');
  }
  get codec() {
    throw new Error('"codec" property is deprecated, use integer "code" property instead');
  }
  get buffer() {
    throw new Error('Deprecated .buffer property, use .bytes to get Uint8Array instead');
  }
  get multibaseName() {
    throw new Error('"multibaseName" property is deprecated');
  }
  get prefix() {
    throw new Error('"prefix" property is deprecated');
  }
  static asCID(value) {
    if (value instanceof CID) {
      return value;
    } else if (value != null && value.asCID === value) {
      const {version, code, multihash, bytes} = value;
      return new CID(version, code, multihash, bytes || encodeCID(version, code, multihash.bytes));
    } else if (value != null && value[cidSymbol] === true) {
      const {version, multihash, code} = value;
      const digest = _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.decode(multihash);
      return CID.create(version, code, digest);
    } else {
      return null;
    }
  }
  static create(version, code, digest) {
    if (typeof code !== 'number') {
      throw new Error('String codecs are no longer supported');
    }
    switch (version) {
    case 0: {
        if (code !== DAG_PB_CODE) {
          throw new Error(`Version 0 CID must use dag-pb (code: ${ DAG_PB_CODE }) block encoding`);
        } else {
          return new CID(version, code, digest, digest.bytes);
        }
      }
    case 1: {
        const bytes = encodeCID(version, code, digest.bytes);
        return new CID(version, code, digest, bytes);
      }
    default: {
        throw new Error('Invalid version');
      }
    }
  }
  static createV0(digest) {
    return CID.create(0, DAG_PB_CODE, digest);
  }
  static createV1(code, digest) {
    return CID.create(1, code, digest);
  }
  static decode(bytes) {
    const [cid, remainder] = CID.decodeFirst(bytes);
    if (remainder.length) {
      throw new Error('Incorrect length');
    }
    return cid;
  }
  static decodeFirst(bytes) {
    const specs = CID.inspectBytes(bytes);
    const prefixSize = specs.size - specs.multihashSize;
    const multihashBytes = (0,_bytes_js__WEBPACK_IMPORTED_MODULE_4__.coerce)(bytes.subarray(prefixSize, prefixSize + specs.multihashSize));
    if (multihashBytes.byteLength !== specs.multihashSize) {
      throw new Error('Incorrect length');
    }
    const digestBytes = multihashBytes.subarray(specs.multihashSize - specs.digestSize);
    const digest = new _hashes_digest_js__WEBPACK_IMPORTED_MODULE_1__.Digest(specs.multihashCode, specs.digestSize, digestBytes, multihashBytes);
    const cid = specs.version === 0 ? CID.createV0(digest) : CID.createV1(specs.codec, digest);
    return [
      cid,
      bytes.subarray(specs.size)
    ];
  }
  static inspectBytes(initialBytes) {
    let offset = 0;
    const next = () => {
      const [i, length] = _varint_js__WEBPACK_IMPORTED_MODULE_0__.decode(initialBytes.subarray(offset));
      offset += length;
      return i;
    };
    let version = next();
    let codec = DAG_PB_CODE;
    if (version === 18) {
      version = 0;
      offset = 0;
    } else if (version === 1) {
      codec = next();
    }
    if (version !== 0 && version !== 1) {
      throw new RangeError(`Invalid CID version ${ version }`);
    }
    const prefixSize = offset;
    const multihashCode = next();
    const digestSize = next();
    const size = offset + digestSize;
    const multihashSize = size - prefixSize;
    return {
      version,
      codec,
      multihashCode,
      digestSize,
      multihashSize,
      size
    };
  }
  static parse(source, base) {
    const [prefix, bytes] = parseCIDtoBytes(source, base);
    const cid = CID.decode(bytes);
    cid._baseCache.set(prefix, source);
    return cid;
  }
}
const parseCIDtoBytes = (source, base) => {
  switch (source[0]) {
  case 'Q': {
      const decoder = base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc;
      return [
        _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix,
        decoder.decode(`${ _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix }${ source }`)
      ];
    }
  case _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix: {
      const decoder = base || _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc;
      return [
        _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix,
        decoder.decode(source)
      ];
    }
  case _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.prefix: {
      const decoder = base || _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32;
      return [
        _bases_base32_js__WEBPACK_IMPORTED_MODULE_3__.base32.prefix,
        decoder.decode(source)
      ];
    }
  default: {
      if (base == null) {
        throw Error('To parse non base32 or base58btc encoded CID multibase decoder must be provided');
      }
      return [
        source[0],
        base.decode(source)
      ];
    }
  }
};
const toStringV0 = (bytes, cache, base) => {
  const {prefix} = base;
  if (prefix !== _bases_base58_js__WEBPACK_IMPORTED_MODULE_2__.base58btc.prefix) {
    throw Error(`Cannot string encode V0 in ${ base.name } encoding`);
  }
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes).slice(1);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const toStringV1 = (bytes, cache, base) => {
  const {prefix} = base;
  const cid = cache.get(prefix);
  if (cid == null) {
    const cid = base.encode(bytes);
    cache.set(prefix, cid);
    return cid;
  } else {
    return cid;
  }
};
const DAG_PB_CODE = 112;
const SHA_256_CODE = 18;
const encodeCID = (version, code, multihash) => {
  const codeOffset = _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodingLength(version);
  const hashOffset = codeOffset + _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodingLength(code);
  const bytes = new Uint8Array(hashOffset + multihash.byteLength);
  _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodeTo(version, bytes, 0);
  _varint_js__WEBPACK_IMPORTED_MODULE_0__.encodeTo(code, bytes, codeOffset);
  bytes.set(multihash, hashOffset);
  return bytes;
};
const cidSymbol = Symbol.for('@ipld/js-cid/CID');
const readonly = {
  writable: false,
  configurable: false,
  enumerable: true
};
const hidden = {
  writable: false,
  enumerable: false,
  configurable: false
};
const version = '0.0.0-dev';
const deprecate = (range, message) => {
  if (range.test(version)) {
    console.warn(message);
  } else {
    throw new Error(message);
  }
};
const IS_CID_DEPRECATION = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`;

/***/ }),

/***/ "./node_modules/multiformats/esm/src/codecs/json.js":
/*!**********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/codecs/json.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "decode": () => (/* binding */ decode)
/* harmony export */ });
const textEncoder = new TextEncoder();
const textDecoder = new TextDecoder();
const name = 'json';
const code = 512;
const encode = node => textEncoder.encode(JSON.stringify(node));
const decode = data => JSON.parse(textDecoder.decode(data));

/***/ }),

/***/ "./node_modules/multiformats/esm/src/codecs/raw.js":
/*!*********************************************************!*\
  !*** ./node_modules/multiformats/esm/src/codecs/raw.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "code": () => (/* binding */ code),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "decode": () => (/* binding */ decode)
/* harmony export */ });
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bytes.js */ "./node_modules/multiformats/esm/src/bytes.js");

const name = 'raw';
const code = 85;
const encode = node => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__.coerce)(node);
const decode = data => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__.coerce)(data);

/***/ }),

/***/ "./node_modules/multiformats/esm/src/hashes/digest.js":
/*!************************************************************!*\
  !*** ./node_modules/multiformats/esm/src/hashes/digest.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => (/* binding */ create),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "equals": () => (/* binding */ equals),
/* harmony export */   "Digest": () => (/* binding */ Digest)
/* harmony export */ });
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bytes.js */ "./node_modules/multiformats/esm/src/bytes.js");
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../varint.js */ "./node_modules/multiformats/esm/src/varint.js");


const create = (code, digest) => {
  const size = digest.byteLength;
  const sizeOffset = _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodingLength(code);
  const digestOffset = sizeOffset + _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodingLength(size);
  const bytes = new Uint8Array(digestOffset + size);
  _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodeTo(code, bytes, 0);
  _varint_js__WEBPACK_IMPORTED_MODULE_1__.encodeTo(size, bytes, sizeOffset);
  bytes.set(digest, digestOffset);
  return new Digest(code, size, digest, bytes);
};
const decode = multihash => {
  const bytes = (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__.coerce)(multihash);
  const [code, sizeOffset] = _varint_js__WEBPACK_IMPORTED_MODULE_1__.decode(bytes);
  const [size, digestOffset] = _varint_js__WEBPACK_IMPORTED_MODULE_1__.decode(bytes.subarray(sizeOffset));
  const digest = bytes.subarray(sizeOffset + digestOffset);
  if (digest.byteLength !== size) {
    throw new Error('Incorrect length');
  }
  return new Digest(code, size, digest, bytes);
};
const equals = (a, b) => {
  if (a === b) {
    return true;
  } else {
    return a.code === b.code && a.size === b.size && (0,_bytes_js__WEBPACK_IMPORTED_MODULE_0__.equals)(a.bytes, b.bytes);
  }
};
class Digest {
  constructor(code, size, digest, bytes) {
    this.code = code;
    this.size = size;
    this.digest = digest;
    this.bytes = bytes;
  }
}

/***/ }),

/***/ "./node_modules/multiformats/esm/src/hashes/hasher.js":
/*!************************************************************!*\
  !*** ./node_modules/multiformats/esm/src/hashes/hasher.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "from": () => (/* binding */ from),
/* harmony export */   "Hasher": () => (/* binding */ Hasher)
/* harmony export */ });
/* harmony import */ var _digest_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digest.js */ "./node_modules/multiformats/esm/src/hashes/digest.js");

const from = ({name, code, encode}) => new Hasher(name, code, encode);
class Hasher {
  constructor(name, code, encode) {
    this.name = name;
    this.code = code;
    this.encode = encode;
  }
  async digest(input) {
    if (input instanceof Uint8Array) {
      const digest = await this.encode(input);
      return _digest_js__WEBPACK_IMPORTED_MODULE_0__.create(this.code, digest);
    } else {
      throw Error('Unknown type, must be binary type');
    }
  }
}

/***/ }),

/***/ "./node_modules/multiformats/esm/src/hashes/identity.js":
/*!**************************************************************!*\
  !*** ./node_modules/multiformats/esm/src/hashes/identity.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
/* harmony import */ var _hasher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasher.js */ "./node_modules/multiformats/esm/src/hashes/hasher.js");
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bytes.js */ "./node_modules/multiformats/esm/src/bytes.js");


const identity = (0,_hasher_js__WEBPACK_IMPORTED_MODULE_0__.from)({
  name: 'identity',
  code: 0,
  encode: input => (0,_bytes_js__WEBPACK_IMPORTED_MODULE_1__.coerce)(input)
});

/***/ }),

/***/ "./node_modules/multiformats/esm/src/hashes/sha2-browser.js":
/*!******************************************************************!*\
  !*** ./node_modules/multiformats/esm/src/hashes/sha2-browser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sha256": () => (/* binding */ sha256),
/* harmony export */   "sha512": () => (/* binding */ sha512)
/* harmony export */ });
/* harmony import */ var _hasher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasher.js */ "./node_modules/multiformats/esm/src/hashes/hasher.js");

const sha = name => async data => new Uint8Array(await crypto.subtle.digest(name, data));
const sha256 = (0,_hasher_js__WEBPACK_IMPORTED_MODULE_0__.from)({
  name: 'sha2-256',
  code: 18,
  encode: sha('SHA-256')
});
const sha512 = (0,_hasher_js__WEBPACK_IMPORTED_MODULE_0__.from)({
  name: 'sha2-512',
  code: 19,
  encode: sha('SHA-512')
});

/***/ }),

/***/ "./node_modules/multiformats/esm/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/multiformats/esm/src/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CID": () => (/* reexport safe */ _cid_js__WEBPACK_IMPORTED_MODULE_0__.CID),
/* harmony export */   "hasher": () => (/* reexport module object */ _hashes_hasher_js__WEBPACK_IMPORTED_MODULE_3__),
/* harmony export */   "digest": () => (/* reexport module object */ _hashes_digest_js__WEBPACK_IMPORTED_MODULE_4__),
/* harmony export */   "varint": () => (/* reexport module object */ _varint_js__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "bytes": () => (/* reexport module object */ _bytes_js__WEBPACK_IMPORTED_MODULE_2__)
/* harmony export */ });
/* harmony import */ var _cid_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cid.js */ "./node_modules/multiformats/esm/src/cid.js");
/* harmony import */ var _varint_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./varint.js */ "./node_modules/multiformats/esm/src/varint.js");
/* harmony import */ var _bytes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bytes.js */ "./node_modules/multiformats/esm/src/bytes.js");
/* harmony import */ var _hashes_hasher_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hashes/hasher.js */ "./node_modules/multiformats/esm/src/hashes/hasher.js");
/* harmony import */ var _hashes_digest_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hashes/digest.js */ "./node_modules/multiformats/esm/src/hashes/digest.js");







/***/ }),

/***/ "./node_modules/multiformats/esm/src/varint.js":
/*!*****************************************************!*\
  !*** ./node_modules/multiformats/esm/src/varint.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "encodeTo": () => (/* binding */ encodeTo),
/* harmony export */   "encodingLength": () => (/* binding */ encodingLength)
/* harmony export */ });
/* harmony import */ var _vendor_varint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/varint.js */ "./node_modules/multiformats/esm/vendor/varint.js");

const decode = data => {
  const code = _vendor_varint_js__WEBPACK_IMPORTED_MODULE_0__["default"].decode(data);
  return [
    code,
    _vendor_varint_js__WEBPACK_IMPORTED_MODULE_0__["default"].decode.bytes
  ];
};
const encodeTo = (int, target, offset = 0) => {
  _vendor_varint_js__WEBPACK_IMPORTED_MODULE_0__["default"].encode(int, target, offset);
  return target;
};
const encodingLength = int => {
  return _vendor_varint_js__WEBPACK_IMPORTED_MODULE_0__["default"].encodingLength(int);
};

/***/ }),

/***/ "./node_modules/multiformats/esm/vendor/base-x.js":
/*!********************************************************!*\
  !*** ./node_modules/multiformats/esm/vendor/base-x.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function base(ALPHABET, name) {
  if (ALPHABET.length >= 255) {
    throw new TypeError('Alphabet too long');
  }
  var BASE_MAP = new Uint8Array(256);
  for (var j = 0; j < BASE_MAP.length; j++) {
    BASE_MAP[j] = 255;
  }
  for (var i = 0; i < ALPHABET.length; i++) {
    var x = ALPHABET.charAt(i);
    var xc = x.charCodeAt(0);
    if (BASE_MAP[xc] !== 255) {
      throw new TypeError(x + ' is ambiguous');
    }
    BASE_MAP[xc] = i;
  }
  var BASE = ALPHABET.length;
  var LEADER = ALPHABET.charAt(0);
  var FACTOR = Math.log(BASE) / Math.log(256);
  var iFACTOR = Math.log(256) / Math.log(BASE);
  function encode(source) {
    if (source instanceof Uint8Array);
    else if (ArrayBuffer.isView(source)) {
      source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
    } else if (Array.isArray(source)) {
      source = Uint8Array.from(source);
    }
    if (!(source instanceof Uint8Array)) {
      throw new TypeError('Expected Uint8Array');
    }
    if (source.length === 0) {
      return '';
    }
    var zeroes = 0;
    var length = 0;
    var pbegin = 0;
    var pend = source.length;
    while (pbegin !== pend && source[pbegin] === 0) {
      pbegin++;
      zeroes++;
    }
    var size = (pend - pbegin) * iFACTOR + 1 >>> 0;
    var b58 = new Uint8Array(size);
    while (pbegin !== pend) {
      var carry = source[pbegin];
      var i = 0;
      for (var it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++) {
        carry += 256 * b58[it1] >>> 0;
        b58[it1] = carry % BASE >>> 0;
        carry = carry / BASE >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      pbegin++;
    }
    var it2 = size - length;
    while (it2 !== size && b58[it2] === 0) {
      it2++;
    }
    var str = LEADER.repeat(zeroes);
    for (; it2 < size; ++it2) {
      str += ALPHABET.charAt(b58[it2]);
    }
    return str;
  }
  function decodeUnsafe(source) {
    if (typeof source !== 'string') {
      throw new TypeError('Expected String');
    }
    if (source.length === 0) {
      return new Uint8Array();
    }
    var psz = 0;
    if (source[psz] === ' ') {
      return;
    }
    var zeroes = 0;
    var length = 0;
    while (source[psz] === LEADER) {
      zeroes++;
      psz++;
    }
    var size = (source.length - psz) * FACTOR + 1 >>> 0;
    var b256 = new Uint8Array(size);
    while (source[psz]) {
      var carry = BASE_MAP[source.charCodeAt(psz)];
      if (carry === 255) {
        return;
      }
      var i = 0;
      for (var it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++) {
        carry += BASE * b256[it3] >>> 0;
        b256[it3] = carry % 256 >>> 0;
        carry = carry / 256 >>> 0;
      }
      if (carry !== 0) {
        throw new Error('Non-zero carry');
      }
      length = i;
      psz++;
    }
    if (source[psz] === ' ') {
      return;
    }
    var it4 = size - length;
    while (it4 !== size && b256[it4] === 0) {
      it4++;
    }
    var vch = new Uint8Array(zeroes + (size - it4));
    var j = zeroes;
    while (it4 !== size) {
      vch[j++] = b256[it4++];
    }
    return vch;
  }
  function decode(string) {
    var buffer = decodeUnsafe(string);
    if (buffer) {
      return buffer;
    }
    throw new Error(`Non-${ name } character`);
  }
  return {
    encode: encode,
    decodeUnsafe: decodeUnsafe,
    decode: decode
  };
}
var src = base;
var _brrp__multiformats_scope_baseX = src;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_brrp__multiformats_scope_baseX);

/***/ }),

/***/ "./node_modules/multiformats/esm/vendor/varint.js":
/*!********************************************************!*\
  !*** ./node_modules/multiformats/esm/vendor/varint.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var encode_1 = encode;
var MSB = 128, REST = 127, MSBALL = ~REST, INT = Math.pow(2, 31);
function encode(num, out, offset) {
  out = out || [];
  offset = offset || 0;
  var oldOffset = offset;
  while (num >= INT) {
    out[offset++] = num & 255 | MSB;
    num /= 128;
  }
  while (num & MSBALL) {
    out[offset++] = num & 255 | MSB;
    num >>>= 7;
  }
  out[offset] = num | 0;
  encode.bytes = offset - oldOffset + 1;
  return out;
}
var decode = read;
var MSB$1 = 128, REST$1 = 127;
function read(buf, offset) {
  var res = 0, offset = offset || 0, shift = 0, counter = offset, b, l = buf.length;
  do {
    if (counter >= l) {
      read.bytes = 0;
      throw new RangeError('Could not decode varint');
    }
    b = buf[counter++];
    res += shift < 28 ? (b & REST$1) << shift : (b & REST$1) * Math.pow(2, shift);
    shift += 7;
  } while (b >= MSB$1);
  read.bytes = counter - offset;
  return res;
}
var N1 = Math.pow(2, 7);
var N2 = Math.pow(2, 14);
var N3 = Math.pow(2, 21);
var N4 = Math.pow(2, 28);
var N5 = Math.pow(2, 35);
var N6 = Math.pow(2, 42);
var N7 = Math.pow(2, 49);
var N8 = Math.pow(2, 56);
var N9 = Math.pow(2, 63);
var length = function (value) {
  return value < N1 ? 1 : value < N2 ? 2 : value < N3 ? 3 : value < N4 ? 4 : value < N5 ? 5 : value < N6 ? 6 : value < N7 ? 7 : value < N8 ? 8 : value < N9 ? 9 : 10;
};
var varint = {
  encode: encode_1,
  decode: decode,
  encodingLength: length
};
var _brrp_varint = varint;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_brrp_varint);

/***/ }),

/***/ "./node_modules/parse-duration/index.mjs":
/*!***********************************************!*\
  !*** ./node_modules/parse-duration/index.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let durationRE = /(-?(?:\d+\.?\d*|\d*\.?\d+)(?:e[-+]?\d+)?)\s*([\p{L}]*)/uig


/**
 * conversion ratios
 */

parse.nanosecond =
parse.ns = 1 / 1e6

parse['µs'] =
parse['μs'] =
parse.us =
parse.microsecond = 1 / 1e3

parse.millisecond =
parse.ms =
parse[''] = 1

parse.second =
parse.sec =
parse.s = parse.ms * 1000

parse.minute =
parse.min =
parse.m = parse.s * 60

parse.hour =
parse.hr =
parse.h = parse.m * 60

parse.day =
parse.d = parse.h * 24

parse.week =
parse.wk =
parse.w = parse.d * 7

parse.month =
parse.b =
parse.d * (365.25 / 12)

parse.year =
parse.yr =
parse.y = parse.d * 365.25

/**
 * convert `str` to ms
 *
 * @param {String} str
 * @param {String} format
 * @return {Number}
 */

function parse(str='', format='ms'){
  var result = null
  // ignore commas/placeholders
  str = (str+'').replace(/(\d)[,_](\d)/g, '$1$2')
  str.replace(durationRE, function(_, n, units){
    units = unitRatio(units)
    if (units) result = (result || 0) + parseFloat(n, 10) * units
  })

  return result && (result / (unitRatio(format) || 1))
}

function unitRatio(str) {
  return parse[str] || parse[str.toLowerCase().replace(/s$/, '')]
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (parse);


/***/ }),

/***/ "./node_modules/uint8arrays/esm/src/concat.js":
/*!****************************************************!*\
  !*** ./node_modules/uint8arrays/esm/src/concat.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "concat": () => (/* binding */ concat)
/* harmony export */ });
function concat(arrays, length) {
  if (!length) {
    length = arrays.reduce((acc, curr) => acc + curr.length, 0);
  }
  const output = new Uint8Array(length);
  let offset = 0;
  for (const arr of arrays) {
    output.set(arr, offset);
    offset += arr.length;
  }
  return output;
}

/***/ }),

/***/ "./node_modules/uint8arrays/esm/src/equals.js":
/*!****************************************************!*\
  !*** ./node_modules/uint8arrays/esm/src/equals.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "equals": () => (/* binding */ equals)
/* harmony export */ });
function equals(a, b) {
  if (a === b) {
    return true;
  }
  if (a.byteLength !== b.byteLength) {
    return false;
  }
  for (let i = 0; i < a.byteLength; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
}

/***/ }),

/***/ "./node_modules/uint8arrays/esm/src/from-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/uint8arrays/esm/src/from-string.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromString": () => (/* binding */ fromString)
/* harmony export */ });
/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bases.js */ "./node_modules/uint8arrays/esm/src/util/bases.js");

function fromString(string, encoding = 'utf8') {
  const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__["default"][encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  return base.decoder.decode(`${ base.prefix }${ string }`);
}

/***/ }),

/***/ "./node_modules/uint8arrays/esm/src/to-string.js":
/*!*******************************************************!*\
  !*** ./node_modules/uint8arrays/esm/src/to-string.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toString": () => (/* binding */ toString)
/* harmony export */ });
/* harmony import */ var _util_bases_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/bases.js */ "./node_modules/uint8arrays/esm/src/util/bases.js");

function toString(array, encoding = 'utf8') {
  const base = _util_bases_js__WEBPACK_IMPORTED_MODULE_0__["default"][encoding];
  if (!base) {
    throw new Error(`Unsupported encoding "${ encoding }"`);
  }
  return base.encoder.encode(array).substring(1);
}

/***/ }),

/***/ "./node_modules/uint8arrays/esm/src/util/bases.js":
/*!********************************************************!*\
  !*** ./node_modules/uint8arrays/esm/src/util/bases.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var multiformats_basics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! multiformats/basics */ "./node_modules/multiformats/esm/src/basics.js");

function createCodec(name, prefix, encode, decode) {
  return {
    name,
    prefix,
    encoder: {
      name,
      prefix,
      encode
    },
    decoder: { decode }
  };
}
const string = createCodec('utf8', 'u', buf => {
  const decoder = new TextDecoder('utf8');
  return 'u' + decoder.decode(buf);
}, str => {
  const encoder = new TextEncoder();
  return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', buf => {
  let string = 'a';
  for (let i = 0; i < buf.length; i++) {
    string += String.fromCharCode(buf[i]);
  }
  return string;
}, str => {
  str = str.substring(1);
  const buf = new Uint8Array(str.length);
  for (let i = 0; i < str.length; i++) {
    buf[i] = str.charCodeAt(i);
  }
  return buf;
});
const BASES = {
  utf8: string,
  'utf-8': string,
  hex: multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases.base16,
  latin1: ascii,
  ascii: ascii,
  binary: ascii,
  ...multiformats_basics__WEBPACK_IMPORTED_MODULE_0__.bases
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BASES);

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @metamask/detect-provider */ "./node_modules/@metamask/detect-provider/dist/index.js");
/* harmony import */ var _metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_metamask_detect_provider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/app.scss */ "./public/app.scss");
/* harmony import */ var crypto_hash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! crypto-hash */ "./node_modules/crypto-hash/browser.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '@uauth/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//////////////////////////////////////////
//                                      //
//          MAIN CONTRACT               //
//          III6 LifeAnd.Eth            //
//          stereoIII6                  //
//          stereodocbush@gmail.com      //
//                                      //
//////////////////////////////////////////






let accounts
let network
let user
const client = __webpack_require__(/*! ipfs-http-client */ "./node_modules/ipfs-http-client/esm/src/index.js")
const ipfs = client.create({
  host: "ipfs.infura.io",
  port: "5001",
  protocol: "https",
})
const uauth = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '@uauth/js'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    clientID: '101df3a0-41df-4c22-8edf-0cf4db92a61c',
    redirectUri: 'http://127.0.0.1:5000/callback',
  })

  uauth.user()
  .then((user) => {
    // user exists
    console.log("User information:", user)
  })
  .catch(() => {
    // user does not exist
  })
  
const affilly8 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../build/contracts/Affilly8.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
// links & buttons

// main navbar
const campaigns_btn = document.getElementById("campaigns_btn")
const links_btn = document.getElementById("links_btn")
const trxs_btn = document.getElementById("trxs_btn")
// defi navbar
const profile_btn = document.getElementById("profile_btn")
const wallet_btn = document.getElementById("wallet_btn")
const net_btn = document.getElementById("net_btn")

// subnav bar

// pagination

// stages
const campaign_stage = document.getElementById("campaign_stage")
const link_stage = document.getElementById("link_stage")
const tx_stage = document.getElementById("tx_stage")
const profile_stage = document.getElementById("tx_stage")
const wallet_stage = document.getElementById("tx_stage")
const net_stage = document.getElementById("tx_stage")

// navigation functions
const goCampaigns = (e) => {
  e.preventDefault()
  console.log("campaigns stage opened")
  campaign_stage.style.display = "grid"
  link_stage.style.display = "none"
  tx_stage.style.display = "none"
}

const goLinks = (e) => {
  e.preventDefault()
  console.log("links stage opened")
  campaign_stage.style.display = "none"
  link_stage.style.display = "grid"
  tx_stage.style.display = "none"
}

const goTxs = (e) => {
  e.preventDefault()
  console.log("txs stage opened")
  campaign_stage.style.display = "none"
  link_stage.style.display = "none"
  tx_stage.style.display = "grid"
}

const goProfile = (e) => {
  e.preventDefault()
  console.log("connected")
}

const onClickConnect = async (e) => {
  e.preventDefault()
  try {
    // set label for profile button
    console.log("connecting")
    profile_btn.innerHTML = "connecting ..."
    // set eventlistener for profile button
    profile_btn.removeEventListener("click", onClickConnect)
    profile_btn.addEventListener("click", goProfile)
    // get wallet address and account data of client and store in main state accounts
    accounts = await ethereum.request({ method: "eth_requestAccounts" })
    // get network data
    network = await ethereum.request({ method: "net_version" })
    var networkTag = "Switch Network"
    // evaluate legal networks
    if (Number(network) === 1) networkTag = "ETH"
    if (Number(network) === 137) networkTag = "Polygon"
    if (Number(network) === 100) networkTag = "xDai"
    if (Number(network) === 10) networkTag = "Optimism"
    if (Number(network) === 200) networkTag = "Arbitrum"
    if (Number(network) === 43224) networkTag = "Avalanche"
    if (Number(network) === 1312) networkTag = "ACAB"
    if (Number(network) === 80001) networkTag = "Mumbai"
    net_btn.innerHTML = networkTag;
    user = await log()
  } catch (error) {
    console.error("connect error", error)
    profile_btn.innerText = "Connect"
  }
}

const log = async () => {
  const afl8 = await affilly8()
  // ask contract about user
  const isUser = await afl8.isUser()
  if (isUser) {
      // is a user
    const uc = await afl8.myId(accounts[0])
    const user = await afl8.users(uc)
    if (false) {}
    if (false) {}
    if (false) {}
    if (false) {} else {
      // user is new
    }
  }
  else{
      // is not a user

  }
}
// unstoppable login tool
window.login = async () => {
    try {
      const authorization = await uauth.loginWithPopup()
   
      console.log(authorization)
    } catch (error) {
      console.error(error)
    }
  }


// navigation event listeners
campaigns_btn.addEventListener("click", goCampaigns)
links_btn.addEventListener("click", goLinks)
trxs_btn.addEventListener("click", goTxs)

/* IMPORTANT FUNCTION WEB3INIT DO NOT EDIT  //
//////////////////////////////////////////
//                                      //
//          Init Metamask               //
//                                      //
//////////////////////////////////////////


Function initializes dapp for Defi interaction

requirements :
- a button with id:'profile_btn'
- a button with id:'net_btn'
- a button with id: 'wallet_btn' 
- a div with class: 'stage' and id: 'profile_stage'

*/
const web3init = async () => {
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }
  const clickInstall = (e) => {
    e.preventDefault()
    alert(
      "You are being redirected to the official download of Metamask.io ... Please Follow their installation instructions."
    )
    window.open("https://metamask.io")
  }
  const MetaMaskClientCheck = () => {
    //Now we check to see if MetaMask is installed
    if (!isMetaMaskInstalled()) {
      //If it isn't installed we ask the user to click to install it
      profile_btn.innerText = "install metamask!"
      profile_btn.addEventListener("click", clickInstall)
    } else {
      //If it is installed we change our button text
      profile_btn.innerText = "connect"
      profile_btn.addEventListener("click", onClickConnect)
    }
  }
  MetaMaskClientCheck()
}
// IMPRTANT INITIAL FUNCTION CALL
web3init()
// IMPORTANT FUNCTION WEB3INIT DO NOT EDIT END //
/*







const initialize = () => {
    //Basic Actions Section
    mlqButton.innerHTML =  " " + count;
    const isMetaMaskInstalled = () => {
        //Have to check the ethereum binding on the window object to see if it's installed
        const { ethereum } = window;
        return Boolean(ethereum && ethereum.isMetaMask);
    };
    const clickInstall = () => {
        alert("You are being redirected to the official download of Metamask.io ... Please Follow their installation instructions.");
        window.open("https://metamask.io");
    };
    const MetaMaskClientCheck = () => {
        //Now we check to see if MetaMask is installed
        if (!isMetaMaskInstalled()) {
        //If it isn't installed we ask the user to click to install it
        onboardButton.innerText = 'Click here to install MetaMask!';
        onboardButton.addEventListener("click",clickInstall);
        } else {
        //If it is installed we change our button text
        onboardButton.innerText = 'Connect';
        onboardButton.addEventListener("click",onClickConnect);
        }
    };
    MetaMaskClientCheck();
}
const onClickConnect = async () => {
    try {
      // Will open the MetaMask UI
      onboardButton.innerHTML = 'Connecting ...';
      // You should disable this button while the request is pending!
      await ethereum.request({ method: 'eth_requestAccounts' });
     // console.log("what");
     // const accounts = await ethereum.request({ method: 'eth_accounts' });
      const network = await ethereum.request({method: 'net_version'});
      var networkTag = "Switch Network";
    //We take the first address in the array of addresses and display it
                        if(Number(network) === 80001) networkTag =  "Mumbai";
                        if(Number(network) === 1) networkTag =  "ETH";
                        if(Number(network) === 137) networkTag =  "Polygon";
                        if(Number(network) === 100) networkTag =  "xDai";
                        if(Number(network) === 10) networkTag =  "Optimism";
                        if(Number(network) === 200) networkTag =  "Arbitrum";
                        if(Number(network) === 43224) networkTag =  "Avalanche";
                        if(Number(network) === 1312) networkTag = "ACAB";
    networkButton.innerHTML = networkTag;
    const UserData = await log();
    // console.log(UserData);
    
    } catch (error) {
      console.error(error);
      onboardButton.innerText = 'Connect';
    }
    
};
const onClickCreate = async () => {
    try {
        const memDat = await memData();
        const rando = await memDat.getRandomResult().then(result => { console.log(BigInt(result._hex)); return result; });
        fuid.value = rando._hex;
        // console.log(fuid.value);
        form.style.display = "block";

        formBtn.addEventListener("click",makeAMember);

    } catch (error) {
        console.error(error);
        onboardButton.innerText = 'Connect';
        onboardButton.removeEventListener("click",onClickCreate);
        onboardButton.addEventListener("click",onClickConnect);
      }
    
};
const makeAMember = async (e) => {
    try{
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        const memDat = await memData();
        const dias = {
            id: fuid.value,
            name: fname.value,
            rank: frank.value,
            status: fstatus.value,
            bday: new Date(fbday.value).getTime(),
        }
        const DIAS = JSON.stringify(dias);
        console.log(DIAS);
        const membership = await memDat.makeMember(dias.name,dias.rank,dias.bday, DIAS ,dias.status).then(result => { return result; });
        form.style.display = "none";
        onboardButton.innerHTML = "<b>"+accounts[0].slice(0,5)+"..."+accounts[0].slice(38,42)+"</b>"; 
        onboardButton.removeEventListener("click",onClickCreate);
        // onboardButton.addEventListener("click",onClickGoPro);
    } catch (error) {
        console.error(error);
        form.style.display = "none";
        onboardButton.innerText = 'Connect';
        onboardButton.removeEventListener("click",onClickCreate);
        onboardButton.addEventListener("click",onClickConnect);
    }
};
const tellRank = (rank) => {
    let title;
    if(rank >= 11) title = "USER";
    if(rank >= 11) title = "MEMBER";
    if(rank >= 22) title = "AMATEUR";
    if(rank >= 33) title = "PRO";
    if(rank >= 44) title = "EXPERT";
    if(rank >= 55) title = "VIRTU0X0";
    if(rank >= 66) title = "MODERATOR";
    if(rank >= 77) title = "PARTNER";
    if(rank >= 88) title = "MANAGER";
    if(rank == 99) title = "ADMIN";
    return title;
};
const goMyPro = async (e) => {
    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        const memDat = await memData();
        myPro.style.display = "block";
        allMem.style.display = "none";
        const id = await memDat.slotId(accounts[0]).then(result => {return Number(result._hex);});
        console.log("my pro", id);
        const proData = await memDat.members(id - 1).then(result => {return result;});

        

        myPro.innerHTML = "<div id='board'><div id='proCard'><div id='name'>"+ proData.name +
                            "</div><div id='status'>"+ proData.status  +
                            "</div><div id='rank'>"+ tellRank(proData.rank)  +
                            "</div><div id='bday'>"+ proData.bday  +
                            "</div><div id='dias'>"+ proData.dias  +
                            "</div><div id='since'>"+ proData.since  +"</div><div id='steps'>"+ count   + " steps</div></div></div>";
        proCard.style.gridRow = 2;
        proCard.style.gridColumn = id;


    } catch(error) {
        console.error(error);
    }
};
const goAllMem = async (e) => {
    try {
        const memDat = await memData();
        allMem.style.display = "block";
        myPro.style.display = "none";
        const count = await memDat.countMem().then(result => {return Number(result._hex);});
        let addi = "";
        for(let i = 0; i < count-1; i++){
            console.log("all mem", i + 1);   
            const proData = await memDat.members(i).then(result => {return result;});
            addi += "<div id='proCard'>"+ (i + 1) + ' | '+ proData.name + " - "+ tellRank(proData.rank) +"</div>";
        }
        allMem.innerHTML = "<div id='board'>"+ addi +"</div>";
        
    } catch(error) {
        console.error(error);
    }
};
const log = async () => {
   
    const accounts = await ethereum.request({ method: 'eth_accounts' });
    const memDat = await memData();
    // const verify = await memDat.verify(accounts[0],"dynMem",);
    const sign = signer.signMessage("dynMem");
    const isUser = await memDat.isSigned().then(result => { console.log(result); return result; });
    const userId = Number(isUser._hex);
    // console.log(userId);
    if(userId === 0){
        // generate new random number 
        const vrfReq = await memDat.doRand().then(result => { return result; });
        onboardButton.innerHTML = "<b style='color:red'>create account</b>";  
        onboardButton.removeEventListener("click",onClickConnect);
        onboardButton.addEventListener("click",onClickCreate);
        onboardButton.disabled;
    }
    else {
        links.style.display = "block";
        onboardButton.innerHTML = "<b>"+accounts[0].slice(0,5)+"..."+accounts[0].slice(38,42)+"</b>"; 
        myProBtn.addEventListener("click",goMyPro);
        allMemBtn.addEventListener("click",goAllMem);
    }
    


   
};
/*
const s0xData = async () => {
    
    const deploymentKey = Object.keys(s0xiety.networks)[0];
    // console.log(s0xiety.abi,provider);
    return new ethers.Contract(
            s0xiety
            .networks[deploymentKey]
            .address, s0xiety.abi, signer
    );
}

const memData = async () => {
    
    const deploymentKey = Object.keys(dynMem.networks)[0];
    // console.log(s0xiety.abi,provider);
    return new ethers.Contract(
            dynMem
            .networks[deploymentKey]
            .address, dynMem.abi, signer
    );
}


const checkNameIn = (e) => {
    let nowChar = e.target.value[e.target.value.length-1];
    if(nowChar === "("||nowChar === ")"||nowChar === ","||nowChar === ";"||nowChar === "."||nowChar === ":"||nowChar === "&"||nowChar === "|"||nowChar === "$"||nowChar === "<"||nowChar === ">"||nowChar === "?"||nowChar === "!"||nowChar === "-"||nowChar === "+"||nowChar === "*"||nowChar === "/"||nowChar === "%") {
        nameInput.value = nameInput.value.substring(0, nameInput.value.length - 1)
    }
    if(e.target.value.length < 4 ||nowChar ===  e.target.value.length > 12) nameInput.style.borderColor = "red";
    else nameInput.style.borderColor = "mediumseagreen";  
}
const checkMailIn = (e) => {
    let nowChar = e.target.value[e.target.value.length-1];
    if(nowChar === "("||nowChar === ")"||nowChar === ","||nowChar === ";"||nowChar === ":"||nowChar === "&"||nowChar === "|"||nowChar === "$"||nowChar === "<"||nowChar === ">"||nowChar === "?"||nowChar === "!"||nowChar === "+"||nowChar === "*"||nowChar === "/"||nowChar === "%") {
        emailInput.value = emailInput.value.substring(0, emailInput.value.length - 1)
    }
    if(e.target.value.length < 10 ||nowChar ===  e.target.value.length > 32) emailInput.style.borderColor = "red";
    else emailInput.style.borderColor = "mediumseagreen";
}




//////////////////////////////////////////
//                                      //
//          Connect Web3                //
//                                      //
//////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {
    initialize();
});

*/

})();

/******/ })()
;