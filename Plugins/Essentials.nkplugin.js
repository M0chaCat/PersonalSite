var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

// SectionHeader.jsx
var require_SectionHeader = __commonJS({
  "SectionHeader.jsx"(exports2, module2) {
    var React = require("react");
    function SectionHeader({ title }) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
        "h2",
        {
          className: "defaultColor_a595eb text-md/normal_dc00ef mb-6",
          style: {
            fontSize: "20px",
            fontWeight: "600",
            color: "var(--header-primary)",
            position: "relative",
            paddingBottom: "8px"
          }
        },
        title
      ), /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "divider mb-12",
          style: {
            height: "2px",
            background: "linear-gradient(90deg, var(--header-primary) 0%, transparent 100%)",
            opacity: 0.3,
            borderRadius: "1px",
            marginBottom: "24px"
          }
        }
      ));
    }
    module2.exports = SectionHeader;
  }
});

// QuickCSSTab.jsx
var require_QuickCSSTab = __commonJS({
  "QuickCSSTab.jsx"(exports2, module2) {
    var React = require("react");
    var SectionHeader = require_SectionHeader();
    function QuickCSSTab2() {
      const [css, setCss] = React.useState("");
      React.useEffect(() => {
        const savedCss = NekocordNative.preferences.getForPlugin(
          "cat.kitties.arcane.Essentials",
          "quickcss"
        );
        if (savedCss) {
          setCss(savedCss);
          const styleElement = document.getElementById("essentials-quickcss");
          if (styleElement) {
            styleElement.textContent = savedCss;
          } else {
            const newStyle = document.createElement("style");
            newStyle.id = "essentials-quickcss";
            newStyle.textContent = savedCss;
            document.head.appendChild(newStyle);
          }
        }
      }, []);
      const handleCssChange = (event) => {
        const newCss = event.target.value;
        setCss(newCss);
        NekocordNative.preferences.setForPlugin(
          "cat.kitties.arcane.Essentials",
          "quickcss",
          newCss
        );
        const styleElement = document.getElementById("essentials-quickcss");
        if (styleElement) {
          styleElement.textContent = newCss;
        } else {
          const newStyle = document.createElement("style");
          newStyle.id = "essentials-quickcss";
          newStyle.textContent = newCss;
          document.head.appendChild(newStyle);
        }
      };
      const handleClear = () => {
        setCss("");
        NekocordNative.preferences.setForPlugin(
          "cat.kitties.arcane.Essentials",
          "quickcss",
          ""
        );
        const styleElement = document.getElementById("essentials-quickcss");
        if (styleElement) {
          styleElement.textContent = "";
        }
      };
      const handleCopy = () => {
        DiscordNative.clipboard.copy(css);
      };
      return /* @__PURE__ */ React.createElement("div", { className: "quickcss-container", style: { padding: "0", margin: "0" } }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "QuickCSS" }), /* @__PURE__ */ React.createElement("div", { className: "header-container", style: { marginBottom: "16px" } }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "defaultColor_a595eb text-md/normal_dc00ef",
          style: { opacity: 0.8, lineHeight: "1.5" }
        },
        /* @__PURE__ */ React.createElement("p", null, "Add custom CSS snippets here. Changes apply instantly."),
        /* @__PURE__ */ React.createElement(
          "p",
          {
            style: {
              color: "var(--brand-experiment)",
              fontSize: "13px",
              marginTop: "4px",
              fontStyle: "italic"
            }
          },
          ""
        )
      )), /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "button-container",
          style: {
            display: "flex",
            gap: "8px",
            marginBottom: "16px",
            justifyContent: "flex-end"
          }
        },
        /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: handleClear,
            className: "button-f14gos",
            style: {
              padding: "8px 16px",
              borderRadius: "4px",
              backgroundColor: "var(--button-danger-background)",
              color: "var(--text-normal)",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              transition: "background-color 0.2s, transform 0.2s"
            }
          },
          "Clear All"
        )
      ), /* @__PURE__ */ React.createElement("div", { className: "codeContainer_f8f345" }, /* @__PURE__ */ React.createElement("div", { className: "codeActions_f8f345" }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "copyButton",
          role: "button",
          tabIndex: "0",
          onClick: handleCopy,
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }
        },
        /* @__PURE__ */ React.createElement(
          "svg",
          {
            "aria-hidden": "true",
            role: "img",
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            viewBox: "0 0 24 24"
          },
          /* @__PURE__ */ React.createElement(
            "path",
            {
              fill: "currentColor",
              d: "M3 16a1 1 0 0 1-1-1v-5a8 8 0 0 1 8-8h5a1 1 0 0 1 1 1v.5a.5.5 0 0 1-.5.5H10a6 6 0 0 0-6 6v5.5a.5.5 0 0 1-.5.5H3Z"
            }
          ),
          /* @__PURE__ */ React.createElement(
            "path",
            {
              fill: "currentColor",
              d: "M6 18a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-4h-3a5 5 0 0 1-5-5V6h-4a4 4 0 0 0-4 4v8Z"
            }
          ),
          /* @__PURE__ */ React.createElement(
            "path",
            {
              fill: "currentColor",
              d: "M21.73 12a3 3 0 0 0-.6-.88l-4.25-4.24a3 3 0 0 0-.88-.61V9a3 3 0 0 0 3 3h2.73Z"
            }
          )
        )
      )), /* @__PURE__ */ React.createElement(
        "textarea",
        {
          value: css,
          onChange: handleCssChange,
          className: "scrollbarGhostHairline_c858ce scrollbar_c858ce hljs css",
          style: {
            width: "100%",
            height: "400px",
            backgroundColor: "var(--background-secondary)",
            color: "var(--text-normal)",
            padding: "16px",
            border: "1px solid var(--background-modifier-accent)",
            borderRadius: "4px",
            fontFamily: "var(--font-code), monospace",
            resize: "vertical",
            outline: "none",
            fontSize: "14px",
            lineHeight: "1.5",
            caretColor: "var(--brand-experiment)"
          },
          spellCheck: "false",
          placeholder: `/* Add your custom CSS here */

/* Example: */
.chat-input {
  background-color: var(--background-primary);
  border-radius: 8px;
  padding: 12px;
}

/* You can also use Discord's CSS variables */
.sidebar {
  background: var(--background-secondary);
  color: var(--text-normal);
}`
        }
      )), /* @__PURE__ */ React.createElement("style", null, `
        .codeContainer_f8f345 {
          background-color: var(--background-secondary);
          border-radius: 4px;
          position: relative;
        }

        .codeActions_f8f345 {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.1s ease;
        }

        .codeContainer_f8f345:hover .codeActions_f8f345 {
          opacity: 1;
        }

        .codeActions_f8f345 > div {
          padding: 4px;
          cursor: pointer;
          border-radius: 4px;
          color: var(--text-normal);
          background-color: var(--background-secondary);
          transition: background-color 0.1s ease;
        }

        .codeActions_f8f345 > div:hover {
          background-color: var(--background-modifier-hover);
        }

        .css-editor::selection {
          background-color: var(--brand-experiment-30a);
        }
        
        .css-editor:not(:focus)::placeholder {
          color: var(--text-muted);
          opacity: 0.7;
        }

        .scrollbarGhostHairline_c858ce {
          scrollbar-width: thin;
          scrollbar-color: var(--background-tertiary) transparent;
        }

        .scrollbarGhostHairline_c858ce::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        .scrollbarGhostHairline_c858ce::-webkit-scrollbar-thumb {
          background-color: var(--background-tertiary);
          border-radius: 4px;
        }

        .scrollbarGhostHairline_c858ce::-webkit-scrollbar-track {
          background-color: transparent;
        }

        /* Discord Code Block Syntax Highlighting */
        .hljs {
          color: var(--text-normal);
          background: var(--background-secondary);
        }

        .hljs-selector-tag,
        .hljs-keyword,
        .hljs-at_rule {
          color: #859900;
        }

        .hljs-attribute {
          color: #268bd2;
        }

        .hljs-string,
        .hljs-selector-id,
        .hljs-selector-class,
        .hljs-selector-attr,
        .hljs-selector-pseudo {
          color: #2aa198;
        }

        .hljs-number {
          color: #d33682;
        }

        .hljs-built_in {
          color: #cb4b16;
        }

        .hljs-comment {
          color: var(--text-muted);
        }

        .hljs-operator,
        .hljs-punctuation {
          color: var(--text-normal);
        }
      `));
    }
    module2.exports = QuickCSSTab2;
  }
});

// node_modules/crypto-js/core.js
var require_core = __commonJS({
  "node_modules/crypto-js/core.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory();
      } else if (typeof define === "function" && define.amd) {
        define([], factory);
      } else {
        root.CryptoJS = factory();
      }
    })(exports2, function() {
      var CryptoJS = CryptoJS || function(Math2, undefined2) {
        var crypto;
        if (typeof window !== "undefined" && window.crypto) {
          crypto = window.crypto;
        }
        if (typeof self !== "undefined" && self.crypto) {
          crypto = self.crypto;
        }
        if (typeof globalThis !== "undefined" && globalThis.crypto) {
          crypto = globalThis.crypto;
        }
        if (!crypto && typeof window !== "undefined" && window.msCrypto) {
          crypto = window.msCrypto;
        }
        if (!crypto && typeof global !== "undefined" && global.crypto) {
          crypto = global.crypto;
        }
        if (!crypto && typeof require === "function") {
          try {
            crypto = require("crypto");
          } catch (err) {
          }
        }
        var cryptoSecureRandomInt = function() {
          if (crypto) {
            if (typeof crypto.getRandomValues === "function") {
              try {
                return crypto.getRandomValues(new Uint32Array(1))[0];
              } catch (err) {
              }
            }
            if (typeof crypto.randomBytes === "function") {
              try {
                return crypto.randomBytes(4).readInt32LE();
              } catch (err) {
              }
            }
          }
          throw new Error("Native crypto module could not be used to get secure random number.");
        };
        var create = Object.create || /* @__PURE__ */ function() {
          function F() {
          }
          return function(obj) {
            var subtype;
            F.prototype = obj;
            subtype = new F();
            F.prototype = null;
            return subtype;
          };
        }();
        var C = {};
        var C_lib = C.lib = {};
        var Base = C_lib.Base = /* @__PURE__ */ function() {
          return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function(overrides) {
              var subtype = create(this);
              if (overrides) {
                subtype.mixIn(overrides);
              }
              if (!subtype.hasOwnProperty("init") || this.init === subtype.init) {
                subtype.init = function() {
                  subtype.$super.init.apply(this, arguments);
                };
              }
              subtype.init.prototype = subtype;
              subtype.$super = this;
              return subtype;
            },
            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function() {
              var instance = this.extend();
              instance.init.apply(instance, arguments);
              return instance;
            },
            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function() {
            },
            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function(properties) {
              for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {
                  this[propertyName] = properties[propertyName];
                }
              }
              if (properties.hasOwnProperty("toString")) {
                this.toString = properties.toString;
              }
            },
            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function() {
              return this.init.prototype.extend(this);
            }
          };
        }();
        var WordArray = C_lib.WordArray = Base.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of 32-bit words.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.create();
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
           *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
           */
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 4;
            }
          },
          /**
           * Converts this word array to a string.
           *
           * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
           *
           * @return {string} The stringified word array.
           *
           * @example
           *
           *     var string = wordArray + '';
           *     var string = wordArray.toString();
           *     var string = wordArray.toString(CryptoJS.enc.Utf8);
           */
          toString: function(encoder) {
            return (encoder || Hex).stringify(this);
          },
          /**
           * Concatenates a word array to this word array.
           *
           * @param {WordArray} wordArray The word array to append.
           *
           * @return {WordArray} This word array.
           *
           * @example
           *
           *     wordArray1.concat(wordArray2);
           */
          concat: function(wordArray) {
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;
            this.clamp();
            if (thisSigBytes % 4) {
              for (var i = 0; i < thatSigBytes; i++) {
                var thatByte = thatWords[i >>> 2] >>> 24 - i % 4 * 8 & 255;
                thisWords[thisSigBytes + i >>> 2] |= thatByte << 24 - (thisSigBytes + i) % 4 * 8;
              }
            } else {
              for (var j = 0; j < thatSigBytes; j += 4) {
                thisWords[thisSigBytes + j >>> 2] = thatWords[j >>> 2];
              }
            }
            this.sigBytes += thatSigBytes;
            return this;
          },
          /**
           * Removes insignificant bits.
           *
           * @example
           *
           *     wordArray.clamp();
           */
          clamp: function() {
            var words = this.words;
            var sigBytes = this.sigBytes;
            words[sigBytes >>> 2] &= 4294967295 << 32 - sigBytes % 4 * 8;
            words.length = Math2.ceil(sigBytes / 4);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {WordArray} The clone.
           *
           * @example
           *
           *     var clone = wordArray.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);
            return clone;
          },
          /**
           * Creates a word array filled with random bytes.
           *
           * @param {number} nBytes The number of random bytes to generate.
           *
           * @return {WordArray} The random word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.lib.WordArray.random(16);
           */
          random: function(nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
              words.push(cryptoSecureRandomInt());
            }
            return new WordArray.init(words, nBytes);
          }
        });
        var C_enc = C.enc = {};
        var Hex = C_enc.Hex = {
          /**
           * Converts a word array to a hex string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The hex string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              hexChars.push((bite >>> 4).toString(16));
              hexChars.push((bite & 15).toString(16));
            }
            return hexChars.join("");
          },
          /**
           * Converts a hex string to a word array.
           *
           * @param {string} hexStr The hex string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
           */
          parse: function(hexStr) {
            var hexStrLength = hexStr.length;
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
              words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << 24 - i % 8 * 4;
            }
            return new WordArray.init(words, hexStrLength / 2);
          }
        };
        var Latin1 = C_enc.Latin1 = {
          /**
           * Converts a word array to a Latin1 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Latin1 string.
           *
           * @static
           *
           * @example
           *
           *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
              var bite = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              latin1Chars.push(String.fromCharCode(bite));
            }
            return latin1Chars.join("");
          },
          /**
           * Converts a Latin1 string to a word array.
           *
           * @param {string} latin1Str The Latin1 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
           */
          parse: function(latin1Str) {
            var latin1StrLength = latin1Str.length;
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
              words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
            }
            return new WordArray.init(words, latin1StrLength);
          }
        };
        var Utf8 = C_enc.Utf8 = {
          /**
           * Converts a word array to a UTF-8 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-8 string.
           *
           * @static
           *
           * @example
           *
           *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
           */
          stringify: function(wordArray) {
            try {
              return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
              throw new Error("Malformed UTF-8 data");
            }
          },
          /**
           * Converts a UTF-8 string to a word array.
           *
           * @param {string} utf8Str The UTF-8 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
           */
          parse: function(utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
          }
        };
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
          /**
           * Resets this block algorithm's data buffer to its initial state.
           *
           * @example
           *
           *     bufferedBlockAlgorithm.reset();
           */
          reset: function() {
            this._data = new WordArray.init();
            this._nDataBytes = 0;
          },
          /**
           * Adds new data to this block algorithm's buffer.
           *
           * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
           *
           * @example
           *
           *     bufferedBlockAlgorithm._append('data');
           *     bufferedBlockAlgorithm._append(wordArray);
           */
          _append: function(data) {
            if (typeof data == "string") {
              data = Utf8.parse(data);
            }
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
          },
          /**
           * Processes available data blocks.
           *
           * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
           *
           * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
           *
           * @return {WordArray} The processed data.
           *
           * @example
           *
           *     var processedData = bufferedBlockAlgorithm._process();
           *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
           */
          _process: function(doFlush) {
            var processedWords;
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
              nBlocksReady = Math2.ceil(nBlocksReady);
            } else {
              nBlocksReady = Math2.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }
            var nWordsReady = nBlocksReady * blockSize;
            var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
            if (nWordsReady) {
              for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                this._doProcessBlock(dataWords, offset);
              }
              processedWords = dataWords.splice(0, nWordsReady);
              data.sigBytes -= nBytesReady;
            }
            return new WordArray.init(processedWords, nBytesReady);
          },
          /**
           * Creates a copy of this object.
           *
           * @return {Object} The clone.
           *
           * @example
           *
           *     var clone = bufferedBlockAlgorithm.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();
            return clone;
          },
          _minBufferSize: 0
        });
        var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           */
          cfg: Base.extend(),
          /**
           * Initializes a newly created hasher.
           *
           * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
           *
           * @example
           *
           *     var hasher = CryptoJS.algo.SHA256.create();
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
            this.reset();
          },
          /**
           * Resets this hasher to its initial state.
           *
           * @example
           *
           *     hasher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          /**
           * Updates this hasher with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {Hasher} This hasher.
           *
           * @example
           *
           *     hasher.update('message');
           *     hasher.update(wordArray);
           */
          update: function(messageUpdate) {
            this._append(messageUpdate);
            this._process();
            return this;
          },
          /**
           * Finalizes the hash computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The hash.
           *
           * @example
           *
           *     var hash = hasher.finalize();
           *     var hash = hasher.finalize('message');
           *     var hash = hasher.finalize(wordArray);
           */
          finalize: function(messageUpdate) {
            if (messageUpdate) {
              this._append(messageUpdate);
            }
            var hash = this._doFinalize();
            return hash;
          },
          blockSize: 512 / 32,
          /**
           * Creates a shortcut function to a hasher's object interface.
           *
           * @param {Hasher} hasher The hasher to create a helper for.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
           */
          _createHelper: function(hasher) {
            return function(message, cfg) {
              return new hasher.init(cfg).finalize(message);
            };
          },
          /**
           * Creates a shortcut function to the HMAC's object interface.
           *
           * @param {Hasher} hasher The hasher to use in this HMAC helper.
           *
           * @return {Function} The shortcut function.
           *
           * @static
           *
           * @example
           *
           *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
           */
          _createHmacHelper: function(hasher) {
            return function(message, key) {
              return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
          }
        });
        var C_algo = C.algo = {};
        return C;
      }(Math);
      return CryptoJS;
    });
  }
});

// node_modules/crypto-js/x64-core.js
var require_x64_core = __commonJS({
  "node_modules/crypto-js/x64-core.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(undefined2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var X32WordArray = C_lib.WordArray;
        var C_x64 = C.x64 = {};
        var X64Word = C_x64.Word = Base.extend({
          /**
           * Initializes a newly created 64-bit word.
           *
           * @param {number} high The high 32 bits.
           * @param {number} low The low 32 bits.
           *
           * @example
           *
           *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
           */
          init: function(high, low) {
            this.high = high;
            this.low = low;
          }
          /**
           * Bitwise NOTs this word.
           *
           * @return {X64Word} A new x64-Word object after negating.
           *
           * @example
           *
           *     var negated = x64Word.not();
           */
          // not: function () {
          // var high = ~this.high;
          // var low = ~this.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ANDs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to AND with this word.
           *
           * @return {X64Word} A new x64-Word object after ANDing.
           *
           * @example
           *
           *     var anded = x64Word.and(anotherX64Word);
           */
          // and: function (word) {
          // var high = this.high & word.high;
          // var low = this.low & word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise ORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to OR with this word.
           *
           * @return {X64Word} A new x64-Word object after ORing.
           *
           * @example
           *
           *     var ored = x64Word.or(anotherX64Word);
           */
          // or: function (word) {
          // var high = this.high | word.high;
          // var low = this.low | word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Bitwise XORs this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to XOR with this word.
           *
           * @return {X64Word} A new x64-Word object after XORing.
           *
           * @example
           *
           *     var xored = x64Word.xor(anotherX64Word);
           */
          // xor: function (word) {
          // var high = this.high ^ word.high;
          // var low = this.low ^ word.low;
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the left.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftL(25);
           */
          // shiftL: function (n) {
          // if (n < 32) {
          // var high = (this.high << n) | (this.low >>> (32 - n));
          // var low = this.low << n;
          // } else {
          // var high = this.low << (n - 32);
          // var low = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Shifts this word n bits to the right.
           *
           * @param {number} n The number of bits to shift.
           *
           * @return {X64Word} A new x64-Word object after shifting.
           *
           * @example
           *
           *     var shifted = x64Word.shiftR(7);
           */
          // shiftR: function (n) {
          // if (n < 32) {
          // var low = (this.low >>> n) | (this.high << (32 - n));
          // var high = this.high >>> n;
          // } else {
          // var low = this.high >>> (n - 32);
          // var high = 0;
          // }
          // return X64Word.create(high, low);
          // },
          /**
           * Rotates this word n bits to the left.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotL(25);
           */
          // rotL: function (n) {
          // return this.shiftL(n).or(this.shiftR(64 - n));
          // },
          /**
           * Rotates this word n bits to the right.
           *
           * @param {number} n The number of bits to rotate.
           *
           * @return {X64Word} A new x64-Word object after rotating.
           *
           * @example
           *
           *     var rotated = x64Word.rotR(7);
           */
          // rotR: function (n) {
          // return this.shiftR(n).or(this.shiftL(64 - n));
          // },
          /**
           * Adds this word with the passed word.
           *
           * @param {X64Word} word The x64-Word to add with this word.
           *
           * @return {X64Word} A new x64-Word object after adding.
           *
           * @example
           *
           *     var added = x64Word.add(anotherX64Word);
           */
          // add: function (word) {
          // var low = (this.low + word.low) | 0;
          // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
          // var high = (this.high + word.high + carry) | 0;
          // return X64Word.create(high, low);
          // }
        });
        var X64WordArray = C_x64.WordArray = Base.extend({
          /**
           * Initializes a newly created word array.
           *
           * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
           * @param {number} sigBytes (Optional) The number of significant bytes in the words.
           *
           * @example
           *
           *     var wordArray = CryptoJS.x64.WordArray.create();
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ]);
           *
           *     var wordArray = CryptoJS.x64.WordArray.create([
           *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
           *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
           *     ], 10);
           */
          init: function(words, sigBytes) {
            words = this.words = words || [];
            if (sigBytes != undefined2) {
              this.sigBytes = sigBytes;
            } else {
              this.sigBytes = words.length * 8;
            }
          },
          /**
           * Converts this 64-bit word array to a 32-bit word array.
           *
           * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
           *
           * @example
           *
           *     var x32WordArray = x64WordArray.toX32();
           */
          toX32: function() {
            var x64Words = this.words;
            var x64WordsLength = x64Words.length;
            var x32Words = [];
            for (var i = 0; i < x64WordsLength; i++) {
              var x64Word = x64Words[i];
              x32Words.push(x64Word.high);
              x32Words.push(x64Word.low);
            }
            return X32WordArray.create(x32Words, this.sigBytes);
          },
          /**
           * Creates a copy of this word array.
           *
           * @return {X64WordArray} The clone.
           *
           * @example
           *
           *     var clone = x64WordArray.clone();
           */
          clone: function() {
            var clone = Base.clone.call(this);
            var words = clone.words = this.words.slice(0);
            var wordsLength = words.length;
            for (var i = 0; i < wordsLength; i++) {
              words[i] = words[i].clone();
            }
            return clone;
          }
        });
      })();
      return CryptoJS;
    });
  }
});

// node_modules/crypto-js/lib-typedarrays.js
var require_lib_typedarrays = __commonJS({
  "node_modules/crypto-js/lib-typedarrays.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        if (typeof ArrayBuffer != "function") {
          return;
        }
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var superInit = WordArray.init;
        var subInit = WordArray.init = function(typedArray) {
          if (typedArray instanceof ArrayBuffer) {
            typedArray = new Uint8Array(typedArray);
          }
          if (typedArray instanceof Int8Array || typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray || typedArray instanceof Int16Array || typedArray instanceof Uint16Array || typedArray instanceof Int32Array || typedArray instanceof Uint32Array || typedArray instanceof Float32Array || typedArray instanceof Float64Array) {
            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
          }
          if (typedArray instanceof Uint8Array) {
            var typedArrayByteLength = typedArray.byteLength;
            var words = [];
            for (var i = 0; i < typedArrayByteLength; i++) {
              words[i >>> 2] |= typedArray[i] << 24 - i % 4 * 8;
            }
            superInit.call(this, words, typedArrayByteLength);
          } else {
            superInit.apply(this, arguments);
          }
        };
        subInit.prototype = WordArray;
      })();
      return CryptoJS.lib.WordArray;
    });
  }
});

// node_modules/crypto-js/enc-utf16.js
var require_enc_utf16 = __commonJS({
  "node_modules/crypto-js/enc-utf16.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
          /**
           * Converts a word array to a UTF-16 BE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 BE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = words[i >>> 2] >>> 16 - i % 4 * 8 & 65535;
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          /**
           * Converts a UTF-16 BE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 BE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
           */
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= utf16Str.charCodeAt(i) << 16 - i % 2 * 16;
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        C_enc.Utf16LE = {
          /**
           * Converts a word array to a UTF-16 LE string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The UTF-16 LE string.
           *
           * @static
           *
           * @example
           *
           *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var utf16Chars = [];
            for (var i = 0; i < sigBytes; i += 2) {
              var codePoint = swapEndian(words[i >>> 2] >>> 16 - i % 4 * 8 & 65535);
              utf16Chars.push(String.fromCharCode(codePoint));
            }
            return utf16Chars.join("");
          },
          /**
           * Converts a UTF-16 LE string to a word array.
           *
           * @param {string} utf16Str The UTF-16 LE string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
           */
          parse: function(utf16Str) {
            var utf16StrLength = utf16Str.length;
            var words = [];
            for (var i = 0; i < utf16StrLength; i++) {
              words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << 16 - i % 2 * 16);
            }
            return WordArray.create(words, utf16StrLength * 2);
          }
        };
        function swapEndian(word) {
          return word << 8 & 4278255360 | word >>> 8 & 16711935;
        }
      })();
      return CryptoJS.enc.Utf16;
    });
  }
});

// node_modules/crypto-js/enc-base64.js
var require_enc_base64 = __commonJS({
  "node_modules/crypto-js/enc-base64.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64 = C_enc.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function(wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function(base64Str) {
            var base64StrLength = base64Str.length;
            var map = this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64;
    });
  }
});

// node_modules/crypto-js/enc-base64url.js
var require_enc_base64url = __commonJS({
  "node_modules/crypto-js/enc-base64url.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        var Base64url = C_enc.Base64url = {
          /**
           * Converts a word array to a Base64url string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {string} The Base64url string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64url.stringify(wordArray);
           */
          stringify: function(wordArray, urlSafe) {
            if (urlSafe === void 0) {
              urlSafe = true;
            }
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = urlSafe ? this._safe_map : this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
              var byte2 = words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
              var byte3 = words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
              var triplet = byte1 << 16 | byte2 << 8 | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt(triplet >>> 6 * (3 - j) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          /**
           * Converts a Base64url string to a word array.
           *
           * @param {string} base64Str The Base64url string.
           *
           * @param {boolean} urlSafe Whether to use url safe
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64url.parse(base64String);
           */
          parse: function(base64Str, urlSafe) {
            if (urlSafe === void 0) {
              urlSafe = true;
            }
            var base64StrLength = base64Str.length;
            var map = urlSafe ? this._safe_map : this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
          _safe_map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << i % 4 * 2;
              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> 6 - i % 4 * 2;
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << 24 - nBytes % 4 * 8;
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64url;
    });
  }
});

// node_modules/crypto-js/md5.js
var require_md5 = __commonJS({
  "node_modules/crypto-js/md5.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var T = [];
        (function() {
          for (var i = 0; i < 64; i++) {
            T[i] = Math2.abs(Math2.sin(i + 1)) * 4294967296 | 0;
          }
        })();
        var MD5 = C_algo.MD5 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878
            ]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var M_offset_0 = M[offset + 0];
            var M_offset_1 = M[offset + 1];
            var M_offset_2 = M[offset + 2];
            var M_offset_3 = M[offset + 3];
            var M_offset_4 = M[offset + 4];
            var M_offset_5 = M[offset + 5];
            var M_offset_6 = M[offset + 6];
            var M_offset_7 = M[offset + 7];
            var M_offset_8 = M[offset + 8];
            var M_offset_9 = M[offset + 9];
            var M_offset_10 = M[offset + 10];
            var M_offset_11 = M[offset + 11];
            var M_offset_12 = M[offset + 12];
            var M_offset_13 = M[offset + 13];
            var M_offset_14 = M[offset + 14];
            var M_offset_15 = M[offset + 15];
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            a = FF(a, b, c, d, M_offset_0, 7, T[0]);
            d = FF(d, a, b, c, M_offset_1, 12, T[1]);
            c = FF(c, d, a, b, M_offset_2, 17, T[2]);
            b = FF(b, c, d, a, M_offset_3, 22, T[3]);
            a = FF(a, b, c, d, M_offset_4, 7, T[4]);
            d = FF(d, a, b, c, M_offset_5, 12, T[5]);
            c = FF(c, d, a, b, M_offset_6, 17, T[6]);
            b = FF(b, c, d, a, M_offset_7, 22, T[7]);
            a = FF(a, b, c, d, M_offset_8, 7, T[8]);
            d = FF(d, a, b, c, M_offset_9, 12, T[9]);
            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
            a = FF(a, b, c, d, M_offset_12, 7, T[12]);
            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
            b = FF(b, c, d, a, M_offset_15, 22, T[15]);
            a = GG(a, b, c, d, M_offset_1, 5, T[16]);
            d = GG(d, a, b, c, M_offset_6, 9, T[17]);
            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
            b = GG(b, c, d, a, M_offset_0, 20, T[19]);
            a = GG(a, b, c, d, M_offset_5, 5, T[20]);
            d = GG(d, a, b, c, M_offset_10, 9, T[21]);
            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
            b = GG(b, c, d, a, M_offset_4, 20, T[23]);
            a = GG(a, b, c, d, M_offset_9, 5, T[24]);
            d = GG(d, a, b, c, M_offset_14, 9, T[25]);
            c = GG(c, d, a, b, M_offset_3, 14, T[26]);
            b = GG(b, c, d, a, M_offset_8, 20, T[27]);
            a = GG(a, b, c, d, M_offset_13, 5, T[28]);
            d = GG(d, a, b, c, M_offset_2, 9, T[29]);
            c = GG(c, d, a, b, M_offset_7, 14, T[30]);
            b = GG(b, c, d, a, M_offset_12, 20, T[31]);
            a = HH(a, b, c, d, M_offset_5, 4, T[32]);
            d = HH(d, a, b, c, M_offset_8, 11, T[33]);
            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
            a = HH(a, b, c, d, M_offset_1, 4, T[36]);
            d = HH(d, a, b, c, M_offset_4, 11, T[37]);
            c = HH(c, d, a, b, M_offset_7, 16, T[38]);
            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
            a = HH(a, b, c, d, M_offset_13, 4, T[40]);
            d = HH(d, a, b, c, M_offset_0, 11, T[41]);
            c = HH(c, d, a, b, M_offset_3, 16, T[42]);
            b = HH(b, c, d, a, M_offset_6, 23, T[43]);
            a = HH(a, b, c, d, M_offset_9, 4, T[44]);
            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
            b = HH(b, c, d, a, M_offset_2, 23, T[47]);
            a = II(a, b, c, d, M_offset_0, 6, T[48]);
            d = II(d, a, b, c, M_offset_7, 10, T[49]);
            c = II(c, d, a, b, M_offset_14, 15, T[50]);
            b = II(b, c, d, a, M_offset_5, 21, T[51]);
            a = II(a, b, c, d, M_offset_12, 6, T[52]);
            d = II(d, a, b, c, M_offset_3, 10, T[53]);
            c = II(c, d, a, b, M_offset_10, 15, T[54]);
            b = II(b, c, d, a, M_offset_1, 21, T[55]);
            a = II(a, b, c, d, M_offset_8, 6, T[56]);
            d = II(d, a, b, c, M_offset_15, 10, T[57]);
            c = II(c, d, a, b, M_offset_6, 15, T[58]);
            b = II(b, c, d, a, M_offset_13, 21, T[59]);
            a = II(a, b, c, d, M_offset_4, 6, T[60]);
            d = II(d, a, b, c, M_offset_11, 10, T[61]);
            c = II(c, d, a, b, M_offset_2, 15, T[62]);
            b = II(b, c, d, a, M_offset_9, 21, T[63]);
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            var nBitsTotalH = Math2.floor(nBitsTotal / 4294967296);
            var nBitsTotalL = nBitsTotal;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = (nBitsTotalH << 8 | nBitsTotalH >>> 24) & 16711935 | (nBitsTotalH << 24 | nBitsTotalH >>> 8) & 4278255360;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotalL << 8 | nBitsTotalL >>> 24) & 16711935 | (nBitsTotalL << 24 | nBitsTotalL >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 4; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function FF(a, b, c, d, x, s, t) {
          var n = a + (b & c | ~b & d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function GG(a, b, c, d, x, s, t) {
          var n = a + (b & d | c & ~d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function HH(a, b, c, d, x, s, t) {
          var n = a + (b ^ c ^ d) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        function II(a, b, c, d, x, s, t) {
          var n = a + (c ^ (b | ~d)) + x + t;
          return (n << s | n >>> 32 - s) + b;
        }
        C.MD5 = Hasher._createHelper(MD5);
        C.HmacMD5 = Hasher._createHmacHelper(MD5);
      })(Math);
      return CryptoJS.MD5;
    });
  }
});

// node_modules/crypto-js/sha1.js
var require_sha1 = __commonJS({
  "node_modules/crypto-js/sha1.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var W = [];
        var SHA1 = C_algo.SHA1 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              1732584193,
              4023233417,
              2562383102,
              271733878,
              3285377520
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            for (var i = 0; i < 80; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
                W[i] = n << 1 | n >>> 31;
              }
              var t = (a << 5 | a >>> 27) + e + W[i];
              if (i < 20) {
                t += (b & c | ~b & d) + 1518500249;
              } else if (i < 40) {
                t += (b ^ c ^ d) + 1859775393;
              } else if (i < 60) {
                t += (b & c | b & d | c & d) - 1894007588;
              } else {
                t += (b ^ c ^ d) - 899497514;
              }
              e = d;
              d = c;
              c = b << 30 | b >>> 2;
              b = a;
              a = t;
            }
            H[0] = H[0] + a | 0;
            H[1] = H[1] + b | 0;
            H[2] = H[2] + c | 0;
            H[3] = H[3] + d | 0;
            H[4] = H[4] + e | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA1 = Hasher._createHelper(SHA1);
        C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
      })();
      return CryptoJS.SHA1;
    });
  }
});

// node_modules/crypto-js/sha256.js
var require_sha256 = __commonJS({
  "node_modules/crypto-js/sha256.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var H = [];
        var K = [];
        (function() {
          function isPrime(n2) {
            var sqrtN = Math2.sqrt(n2);
            for (var factor = 2; factor <= sqrtN; factor++) {
              if (!(n2 % factor)) {
                return false;
              }
            }
            return true;
          }
          function getFractionalBits(n2) {
            return (n2 - (n2 | 0)) * 4294967296 | 0;
          }
          var n = 2;
          var nPrime = 0;
          while (nPrime < 64) {
            if (isPrime(n)) {
              if (nPrime < 8) {
                H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
              }
              K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
              nPrime++;
            }
            n++;
          }
        })();
        var W = [];
        var SHA256 = C_algo.SHA256 = Hasher.extend({
          _doReset: function() {
            this._hash = new WordArray.init(H.slice(0));
          },
          _doProcessBlock: function(M, offset) {
            var H2 = this._hash.words;
            var a = H2[0];
            var b = H2[1];
            var c = H2[2];
            var d = H2[3];
            var e = H2[4];
            var f = H2[5];
            var g = H2[6];
            var h = H2[7];
            for (var i = 0; i < 64; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
                var gamma1x = W[i - 2];
                var gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
              }
              var ch = e & f ^ ~e & g;
              var maj = a & b ^ a & c ^ b & c;
              var sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
              var sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
              var t1 = h + sigma1 + ch + K[i] + W[i];
              var t2 = sigma0 + maj;
              h = g;
              g = f;
              f = e;
              e = d + t1 | 0;
              d = c;
              c = b;
              b = a;
              a = t1 + t2 | 0;
            }
            H2[0] = H2[0] + a | 0;
            H2[1] = H2[1] + b | 0;
            H2[2] = H2[2] + c | 0;
            H2[3] = H2[3] + d | 0;
            H2[4] = H2[4] + e | 0;
            H2[5] = H2[5] + f | 0;
            H2[6] = H2[6] + g | 0;
            H2[7] = H2[7] + h | 0;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math2.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        C.SHA256 = Hasher._createHelper(SHA256);
        C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
      })(Math);
      return CryptoJS.SHA256;
    });
  }
});

// node_modules/crypto-js/sha224.js
var require_sha224 = __commonJS({
  "node_modules/crypto-js/sha224.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_sha256());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha256"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        var SHA224 = C_algo.SHA224 = SHA256.extend({
          _doReset: function() {
            this._hash = new WordArray.init([
              3238371032,
              914150663,
              812702999,
              4144912697,
              4290775857,
              1750603025,
              1694076839,
              3204075428
            ]);
          },
          _doFinalize: function() {
            var hash = SHA256._doFinalize.call(this);
            hash.sigBytes -= 4;
            return hash;
          }
        });
        C.SHA224 = SHA256._createHelper(SHA224);
        C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
      })();
      return CryptoJS.SHA224;
    });
  }
});

// node_modules/crypto-js/sha512.js
var require_sha512 = __commonJS({
  "node_modules/crypto-js/sha512.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_x64_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        function X64Word_create() {
          return X64Word.create.apply(X64Word, arguments);
        }
        var K = [
          X64Word_create(1116352408, 3609767458),
          X64Word_create(1899447441, 602891725),
          X64Word_create(3049323471, 3964484399),
          X64Word_create(3921009573, 2173295548),
          X64Word_create(961987163, 4081628472),
          X64Word_create(1508970993, 3053834265),
          X64Word_create(2453635748, 2937671579),
          X64Word_create(2870763221, 3664609560),
          X64Word_create(3624381080, 2734883394),
          X64Word_create(310598401, 1164996542),
          X64Word_create(607225278, 1323610764),
          X64Word_create(1426881987, 3590304994),
          X64Word_create(1925078388, 4068182383),
          X64Word_create(2162078206, 991336113),
          X64Word_create(2614888103, 633803317),
          X64Word_create(3248222580, 3479774868),
          X64Word_create(3835390401, 2666613458),
          X64Word_create(4022224774, 944711139),
          X64Word_create(264347078, 2341262773),
          X64Word_create(604807628, 2007800933),
          X64Word_create(770255983, 1495990901),
          X64Word_create(1249150122, 1856431235),
          X64Word_create(1555081692, 3175218132),
          X64Word_create(1996064986, 2198950837),
          X64Word_create(2554220882, 3999719339),
          X64Word_create(2821834349, 766784016),
          X64Word_create(2952996808, 2566594879),
          X64Word_create(3210313671, 3203337956),
          X64Word_create(3336571891, 1034457026),
          X64Word_create(3584528711, 2466948901),
          X64Word_create(113926993, 3758326383),
          X64Word_create(338241895, 168717936),
          X64Word_create(666307205, 1188179964),
          X64Word_create(773529912, 1546045734),
          X64Word_create(1294757372, 1522805485),
          X64Word_create(1396182291, 2643833823),
          X64Word_create(1695183700, 2343527390),
          X64Word_create(1986661051, 1014477480),
          X64Word_create(2177026350, 1206759142),
          X64Word_create(2456956037, 344077627),
          X64Word_create(2730485921, 1290863460),
          X64Word_create(2820302411, 3158454273),
          X64Word_create(3259730800, 3505952657),
          X64Word_create(3345764771, 106217008),
          X64Word_create(3516065817, 3606008344),
          X64Word_create(3600352804, 1432725776),
          X64Word_create(4094571909, 1467031594),
          X64Word_create(275423344, 851169720),
          X64Word_create(430227734, 3100823752),
          X64Word_create(506948616, 1363258195),
          X64Word_create(659060556, 3750685593),
          X64Word_create(883997877, 3785050280),
          X64Word_create(958139571, 3318307427),
          X64Word_create(1322822218, 3812723403),
          X64Word_create(1537002063, 2003034995),
          X64Word_create(1747873779, 3602036899),
          X64Word_create(1955562222, 1575990012),
          X64Word_create(2024104815, 1125592928),
          X64Word_create(2227730452, 2716904306),
          X64Word_create(2361852424, 442776044),
          X64Word_create(2428436474, 593698344),
          X64Word_create(2756734187, 3733110249),
          X64Word_create(3204031479, 2999351573),
          X64Word_create(3329325298, 3815920427),
          X64Word_create(3391569614, 3928383900),
          X64Word_create(3515267271, 566280711),
          X64Word_create(3940187606, 3454069534),
          X64Word_create(4118630271, 4000239992),
          X64Word_create(116418474, 1914138554),
          X64Word_create(174292421, 2731055270),
          X64Word_create(289380356, 3203993006),
          X64Word_create(460393269, 320620315),
          X64Word_create(685471733, 587496836),
          X64Word_create(852142971, 1086792851),
          X64Word_create(1017036298, 365543100),
          X64Word_create(1126000580, 2618297676),
          X64Word_create(1288033470, 3409855158),
          X64Word_create(1501505948, 4234509866),
          X64Word_create(1607167915, 987167468),
          X64Word_create(1816402316, 1246189591)
        ];
        var W = [];
        (function() {
          for (var i = 0; i < 80; i++) {
            W[i] = X64Word_create();
          }
        })();
        var SHA512 = C_algo.SHA512 = Hasher.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(1779033703, 4089235720),
              new X64Word.init(3144134277, 2227873595),
              new X64Word.init(1013904242, 4271175723),
              new X64Word.init(2773480762, 1595750129),
              new X64Word.init(1359893119, 2917565137),
              new X64Word.init(2600822924, 725511199),
              new X64Word.init(528734635, 4215389547),
              new X64Word.init(1541459225, 327033209)
            ]);
          },
          _doProcessBlock: function(M, offset) {
            var H = this._hash.words;
            var H0 = H[0];
            var H1 = H[1];
            var H2 = H[2];
            var H3 = H[3];
            var H4 = H[4];
            var H5 = H[5];
            var H6 = H[6];
            var H7 = H[7];
            var H0h = H0.high;
            var H0l = H0.low;
            var H1h = H1.high;
            var H1l = H1.low;
            var H2h = H2.high;
            var H2l = H2.low;
            var H3h = H3.high;
            var H3l = H3.low;
            var H4h = H4.high;
            var H4l = H4.low;
            var H5h = H5.high;
            var H5l = H5.low;
            var H6h = H6.high;
            var H6l = H6.low;
            var H7h = H7.high;
            var H7l = H7.low;
            var ah = H0h;
            var al = H0l;
            var bh = H1h;
            var bl = H1l;
            var ch = H2h;
            var cl = H2l;
            var dh = H3h;
            var dl = H3l;
            var eh = H4h;
            var el = H4l;
            var fh = H5h;
            var fl = H5l;
            var gh = H6h;
            var gl = H6l;
            var hh = H7h;
            var hl = H7l;
            for (var i = 0; i < 80; i++) {
              var Wil;
              var Wih;
              var Wi = W[i];
              if (i < 16) {
                Wih = Wi.high = M[offset + i * 2] | 0;
                Wil = Wi.low = M[offset + i * 2 + 1] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0xh = gamma0x.high;
                var gamma0xl = gamma0x.low;
                var gamma0h = (gamma0xh >>> 1 | gamma0xl << 31) ^ (gamma0xh >>> 8 | gamma0xl << 24) ^ gamma0xh >>> 7;
                var gamma0l = (gamma0xl >>> 1 | gamma0xh << 31) ^ (gamma0xl >>> 8 | gamma0xh << 24) ^ (gamma0xl >>> 7 | gamma0xh << 25);
                var gamma1x = W[i - 2];
                var gamma1xh = gamma1x.high;
                var gamma1xl = gamma1x.low;
                var gamma1h = (gamma1xh >>> 19 | gamma1xl << 13) ^ (gamma1xh << 3 | gamma1xl >>> 29) ^ gamma1xh >>> 6;
                var gamma1l = (gamma1xl >>> 19 | gamma1xh << 13) ^ (gamma1xl << 3 | gamma1xh >>> 29) ^ (gamma1xl >>> 6 | gamma1xh << 26);
                var Wi7 = W[i - 7];
                var Wi7h = Wi7.high;
                var Wi7l = Wi7.low;
                var Wi16 = W[i - 16];
                var Wi16h = Wi16.high;
                var Wi16l = Wi16.low;
                Wil = gamma0l + Wi7l;
                Wih = gamma0h + Wi7h + (Wil >>> 0 < gamma0l >>> 0 ? 1 : 0);
                Wil = Wil + gamma1l;
                Wih = Wih + gamma1h + (Wil >>> 0 < gamma1l >>> 0 ? 1 : 0);
                Wil = Wil + Wi16l;
                Wih = Wih + Wi16h + (Wil >>> 0 < Wi16l >>> 0 ? 1 : 0);
                Wi.high = Wih;
                Wi.low = Wil;
              }
              var chh = eh & fh ^ ~eh & gh;
              var chl = el & fl ^ ~el & gl;
              var majh = ah & bh ^ ah & ch ^ bh & ch;
              var majl = al & bl ^ al & cl ^ bl & cl;
              var sigma0h = (ah >>> 28 | al << 4) ^ (ah << 30 | al >>> 2) ^ (ah << 25 | al >>> 7);
              var sigma0l = (al >>> 28 | ah << 4) ^ (al << 30 | ah >>> 2) ^ (al << 25 | ah >>> 7);
              var sigma1h = (eh >>> 14 | el << 18) ^ (eh >>> 18 | el << 14) ^ (eh << 23 | el >>> 9);
              var sigma1l = (el >>> 14 | eh << 18) ^ (el >>> 18 | eh << 14) ^ (el << 23 | eh >>> 9);
              var Ki = K[i];
              var Kih = Ki.high;
              var Kil = Ki.low;
              var t1l = hl + sigma1l;
              var t1h = hh + sigma1h + (t1l >>> 0 < hl >>> 0 ? 1 : 0);
              var t1l = t1l + chl;
              var t1h = t1h + chh + (t1l >>> 0 < chl >>> 0 ? 1 : 0);
              var t1l = t1l + Kil;
              var t1h = t1h + Kih + (t1l >>> 0 < Kil >>> 0 ? 1 : 0);
              var t1l = t1l + Wil;
              var t1h = t1h + Wih + (t1l >>> 0 < Wil >>> 0 ? 1 : 0);
              var t2l = sigma0l + majl;
              var t2h = sigma0h + majh + (t2l >>> 0 < sigma0l >>> 0 ? 1 : 0);
              hh = gh;
              hl = gl;
              gh = fh;
              gl = fl;
              fh = eh;
              fl = el;
              el = dl + t1l | 0;
              eh = dh + t1h + (el >>> 0 < dl >>> 0 ? 1 : 0) | 0;
              dh = ch;
              dl = cl;
              ch = bh;
              cl = bl;
              bh = ah;
              bl = al;
              al = t1l + t2l | 0;
              ah = t1h + t2h + (al >>> 0 < t1l >>> 0 ? 1 : 0) | 0;
            }
            H0l = H0.low = H0l + al;
            H0.high = H0h + ah + (H0l >>> 0 < al >>> 0 ? 1 : 0);
            H1l = H1.low = H1l + bl;
            H1.high = H1h + bh + (H1l >>> 0 < bl >>> 0 ? 1 : 0);
            H2l = H2.low = H2l + cl;
            H2.high = H2h + ch + (H2l >>> 0 < cl >>> 0 ? 1 : 0);
            H3l = H3.low = H3l + dl;
            H3.high = H3h + dh + (H3l >>> 0 < dl >>> 0 ? 1 : 0);
            H4l = H4.low = H4l + el;
            H4.high = H4h + eh + (H4l >>> 0 < el >>> 0 ? 1 : 0);
            H5l = H5.low = H5l + fl;
            H5.high = H5h + fh + (H5l >>> 0 < fl >>> 0 ? 1 : 0);
            H6l = H6.low = H6l + gl;
            H6.high = H6h + gh + (H6l >>> 0 < gl >>> 0 ? 1 : 0);
            H7l = H7.low = H7l + hl;
            H7.high = H7h + hh + (H7l >>> 0 < hl >>> 0 ? 1 : 0);
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 30] = Math.floor(nBitsTotal / 4294967296);
            dataWords[(nBitsLeft + 128 >>> 10 << 5) + 31] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var hash = this._hash.toX32();
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          },
          blockSize: 1024 / 32
        });
        C.SHA512 = Hasher._createHelper(SHA512);
        C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
      })();
      return CryptoJS.SHA512;
    });
  }
});

// node_modules/crypto-js/sha384.js
var require_sha384 = __commonJS({
  "node_modules/crypto-js/sha384.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_x64_core(), require_sha512());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core", "./sha512"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var X64WordArray = C_x64.WordArray;
        var C_algo = C.algo;
        var SHA512 = C_algo.SHA512;
        var SHA384 = C_algo.SHA384 = SHA512.extend({
          _doReset: function() {
            this._hash = new X64WordArray.init([
              new X64Word.init(3418070365, 3238371032),
              new X64Word.init(1654270250, 914150663),
              new X64Word.init(2438529370, 812702999),
              new X64Word.init(355462360, 4144912697),
              new X64Word.init(1731405415, 4290775857),
              new X64Word.init(2394180231, 1750603025),
              new X64Word.init(3675008525, 1694076839),
              new X64Word.init(1203062813, 3204075428)
            ]);
          },
          _doFinalize: function() {
            var hash = SHA512._doFinalize.call(this);
            hash.sigBytes -= 16;
            return hash;
          }
        });
        C.SHA384 = SHA512._createHelper(SHA384);
        C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
      })();
      return CryptoJS.SHA384;
    });
  }
});

// node_modules/crypto-js/sha3.js
var require_sha3 = __commonJS({
  "node_modules/crypto-js/sha3.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_x64_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_x64 = C.x64;
        var X64Word = C_x64.Word;
        var C_algo = C.algo;
        var RHO_OFFSETS = [];
        var PI_INDEXES = [];
        var ROUND_CONSTANTS = [];
        (function() {
          var x = 1, y = 0;
          for (var t = 0; t < 24; t++) {
            RHO_OFFSETS[x + 5 * y] = (t + 1) * (t + 2) / 2 % 64;
            var newX = y % 5;
            var newY = (2 * x + 3 * y) % 5;
            x = newX;
            y = newY;
          }
          for (var x = 0; x < 5; x++) {
            for (var y = 0; y < 5; y++) {
              PI_INDEXES[x + 5 * y] = y + (2 * x + 3 * y) % 5 * 5;
            }
          }
          var LFSR = 1;
          for (var i = 0; i < 24; i++) {
            var roundConstantMsw = 0;
            var roundConstantLsw = 0;
            for (var j = 0; j < 7; j++) {
              if (LFSR & 1) {
                var bitPosition = (1 << j) - 1;
                if (bitPosition < 32) {
                  roundConstantLsw ^= 1 << bitPosition;
                } else {
                  roundConstantMsw ^= 1 << bitPosition - 32;
                }
              }
              if (LFSR & 128) {
                LFSR = LFSR << 1 ^ 113;
              } else {
                LFSR <<= 1;
              }
            }
            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
          }
        })();
        var T = [];
        (function() {
          for (var i = 0; i < 25; i++) {
            T[i] = X64Word.create();
          }
        })();
        var SHA3 = C_algo.SHA3 = Hasher.extend({
          /**
           * Configuration options.
           *
           * @property {number} outputLength
           *   The desired number of bits in the output hash.
           *   Only values permitted are: 224, 256, 384, 512.
           *   Default: 512
           */
          cfg: Hasher.cfg.extend({
            outputLength: 512
          }),
          _doReset: function() {
            var state = this._state = [];
            for (var i = 0; i < 25; i++) {
              state[i] = new X64Word.init();
            }
            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
          },
          _doProcessBlock: function(M, offset) {
            var state = this._state;
            var nBlockSizeLanes = this.blockSize / 2;
            for (var i = 0; i < nBlockSizeLanes; i++) {
              var M2i = M[offset + 2 * i];
              var M2i1 = M[offset + 2 * i + 1];
              M2i = (M2i << 8 | M2i >>> 24) & 16711935 | (M2i << 24 | M2i >>> 8) & 4278255360;
              M2i1 = (M2i1 << 8 | M2i1 >>> 24) & 16711935 | (M2i1 << 24 | M2i1 >>> 8) & 4278255360;
              var lane = state[i];
              lane.high ^= M2i1;
              lane.low ^= M2i;
            }
            for (var round = 0; round < 24; round++) {
              for (var x = 0; x < 5; x++) {
                var tMsw = 0, tLsw = 0;
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  tMsw ^= lane.high;
                  tLsw ^= lane.low;
                }
                var Tx = T[x];
                Tx.high = tMsw;
                Tx.low = tLsw;
              }
              for (var x = 0; x < 5; x++) {
                var Tx4 = T[(x + 4) % 5];
                var Tx1 = T[(x + 1) % 5];
                var Tx1Msw = Tx1.high;
                var Tx1Lsw = Tx1.low;
                var tMsw = Tx4.high ^ (Tx1Msw << 1 | Tx1Lsw >>> 31);
                var tLsw = Tx4.low ^ (Tx1Lsw << 1 | Tx1Msw >>> 31);
                for (var y = 0; y < 5; y++) {
                  var lane = state[x + 5 * y];
                  lane.high ^= tMsw;
                  lane.low ^= tLsw;
                }
              }
              for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
                var tMsw;
                var tLsw;
                var lane = state[laneIndex];
                var laneMsw = lane.high;
                var laneLsw = lane.low;
                var rhoOffset = RHO_OFFSETS[laneIndex];
                if (rhoOffset < 32) {
                  tMsw = laneMsw << rhoOffset | laneLsw >>> 32 - rhoOffset;
                  tLsw = laneLsw << rhoOffset | laneMsw >>> 32 - rhoOffset;
                } else {
                  tMsw = laneLsw << rhoOffset - 32 | laneMsw >>> 64 - rhoOffset;
                  tLsw = laneMsw << rhoOffset - 32 | laneLsw >>> 64 - rhoOffset;
                }
                var TPiLane = T[PI_INDEXES[laneIndex]];
                TPiLane.high = tMsw;
                TPiLane.low = tLsw;
              }
              var T0 = T[0];
              var state0 = state[0];
              T0.high = state0.high;
              T0.low = state0.low;
              for (var x = 0; x < 5; x++) {
                for (var y = 0; y < 5; y++) {
                  var laneIndex = x + 5 * y;
                  var lane = state[laneIndex];
                  var TLane = T[laneIndex];
                  var Tx1Lane = T[(x + 1) % 5 + 5 * y];
                  var Tx2Lane = T[(x + 2) % 5 + 5 * y];
                  lane.high = TLane.high ^ ~Tx1Lane.high & Tx2Lane.high;
                  lane.low = TLane.low ^ ~Tx1Lane.low & Tx2Lane.low;
                }
              }
              var lane = state[0];
              var roundConstant = ROUND_CONSTANTS[round];
              lane.high ^= roundConstant.high;
              lane.low ^= roundConstant.low;
            }
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            var blockSizeBits = this.blockSize * 32;
            dataWords[nBitsLeft >>> 5] |= 1 << 24 - nBitsLeft % 32;
            dataWords[(Math2.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits >>> 5) - 1] |= 128;
            data.sigBytes = dataWords.length * 4;
            this._process();
            var state = this._state;
            var outputLengthBytes = this.cfg.outputLength / 8;
            var outputLengthLanes = outputLengthBytes / 8;
            var hashWords = [];
            for (var i = 0; i < outputLengthLanes; i++) {
              var lane = state[i];
              var laneMsw = lane.high;
              var laneLsw = lane.low;
              laneMsw = (laneMsw << 8 | laneMsw >>> 24) & 16711935 | (laneMsw << 24 | laneMsw >>> 8) & 4278255360;
              laneLsw = (laneLsw << 8 | laneLsw >>> 24) & 16711935 | (laneLsw << 24 | laneLsw >>> 8) & 4278255360;
              hashWords.push(laneLsw);
              hashWords.push(laneMsw);
            }
            return new WordArray.init(hashWords, outputLengthBytes);
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            var state = clone._state = this._state.slice(0);
            for (var i = 0; i < 25; i++) {
              state[i] = state[i].clone();
            }
            return clone;
          }
        });
        C.SHA3 = Hasher._createHelper(SHA3);
        C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
      })(Math);
      return CryptoJS.SHA3;
    });
  }
});

// node_modules/crypto-js/ripemd160.js
var require_ripemd160 = __commonJS({
  "node_modules/crypto-js/ripemd160.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var _zl = WordArray.create([
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          7,
          4,
          13,
          1,
          10,
          6,
          15,
          3,
          12,
          0,
          9,
          5,
          2,
          14,
          11,
          8,
          3,
          10,
          14,
          4,
          9,
          15,
          8,
          1,
          2,
          7,
          0,
          6,
          13,
          11,
          5,
          12,
          1,
          9,
          11,
          10,
          0,
          8,
          12,
          4,
          13,
          3,
          7,
          15,
          14,
          5,
          6,
          2,
          4,
          0,
          5,
          9,
          7,
          12,
          2,
          10,
          14,
          1,
          3,
          8,
          11,
          6,
          15,
          13
        ]);
        var _zr = WordArray.create([
          5,
          14,
          7,
          0,
          9,
          2,
          11,
          4,
          13,
          6,
          15,
          8,
          1,
          10,
          3,
          12,
          6,
          11,
          3,
          7,
          0,
          13,
          5,
          10,
          14,
          15,
          8,
          12,
          4,
          9,
          1,
          2,
          15,
          5,
          1,
          3,
          7,
          14,
          6,
          9,
          11,
          8,
          12,
          2,
          10,
          0,
          4,
          13,
          8,
          6,
          4,
          1,
          3,
          11,
          15,
          0,
          5,
          12,
          2,
          13,
          9,
          7,
          10,
          14,
          12,
          15,
          10,
          4,
          1,
          5,
          8,
          7,
          6,
          2,
          13,
          14,
          0,
          3,
          9,
          11
        ]);
        var _sl = WordArray.create([
          11,
          14,
          15,
          12,
          5,
          8,
          7,
          9,
          11,
          13,
          14,
          15,
          6,
          7,
          9,
          8,
          7,
          6,
          8,
          13,
          11,
          9,
          7,
          15,
          7,
          12,
          15,
          9,
          11,
          7,
          13,
          12,
          11,
          13,
          6,
          7,
          14,
          9,
          13,
          15,
          14,
          8,
          13,
          6,
          5,
          12,
          7,
          5,
          11,
          12,
          14,
          15,
          14,
          15,
          9,
          8,
          9,
          14,
          5,
          6,
          8,
          6,
          5,
          12,
          9,
          15,
          5,
          11,
          6,
          8,
          13,
          12,
          5,
          12,
          13,
          14,
          11,
          8,
          5,
          6
        ]);
        var _sr = WordArray.create([
          8,
          9,
          9,
          11,
          13,
          15,
          15,
          5,
          7,
          7,
          8,
          11,
          14,
          14,
          12,
          6,
          9,
          13,
          15,
          7,
          12,
          8,
          9,
          11,
          7,
          7,
          12,
          7,
          6,
          15,
          13,
          11,
          9,
          7,
          15,
          11,
          8,
          6,
          6,
          14,
          12,
          13,
          5,
          14,
          13,
          13,
          7,
          5,
          15,
          5,
          8,
          11,
          14,
          14,
          6,
          14,
          6,
          9,
          12,
          9,
          12,
          5,
          15,
          8,
          8,
          5,
          12,
          9,
          12,
          5,
          14,
          6,
          8,
          13,
          6,
          5,
          15,
          13,
          11,
          11
        ]);
        var _hl = WordArray.create([0, 1518500249, 1859775393, 2400959708, 2840853838]);
        var _hr = WordArray.create([1352829926, 1548603684, 1836072691, 2053994217, 0]);
        var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
          _doReset: function() {
            this._hash = WordArray.create([1732584193, 4023233417, 2562383102, 271733878, 3285377520]);
          },
          _doProcessBlock: function(M, offset) {
            for (var i = 0; i < 16; i++) {
              var offset_i = offset + i;
              var M_offset_i = M[offset_i];
              M[offset_i] = (M_offset_i << 8 | M_offset_i >>> 24) & 16711935 | (M_offset_i << 24 | M_offset_i >>> 8) & 4278255360;
            }
            var H = this._hash.words;
            var hl = _hl.words;
            var hr = _hr.words;
            var zl = _zl.words;
            var zr = _zr.words;
            var sl = _sl.words;
            var sr = _sr.words;
            var al, bl, cl, dl, el;
            var ar, br, cr, dr, er;
            ar = al = H[0];
            br = bl = H[1];
            cr = cl = H[2];
            dr = dl = H[3];
            er = el = H[4];
            var t;
            for (var i = 0; i < 80; i += 1) {
              t = al + M[offset + zl[i]] | 0;
              if (i < 16) {
                t += f1(bl, cl, dl) + hl[0];
              } else if (i < 32) {
                t += f2(bl, cl, dl) + hl[1];
              } else if (i < 48) {
                t += f3(bl, cl, dl) + hl[2];
              } else if (i < 64) {
                t += f4(bl, cl, dl) + hl[3];
              } else {
                t += f5(bl, cl, dl) + hl[4];
              }
              t = t | 0;
              t = rotl(t, sl[i]);
              t = t + el | 0;
              al = el;
              el = dl;
              dl = rotl(cl, 10);
              cl = bl;
              bl = t;
              t = ar + M[offset + zr[i]] | 0;
              if (i < 16) {
                t += f5(br, cr, dr) + hr[0];
              } else if (i < 32) {
                t += f4(br, cr, dr) + hr[1];
              } else if (i < 48) {
                t += f3(br, cr, dr) + hr[2];
              } else if (i < 64) {
                t += f2(br, cr, dr) + hr[3];
              } else {
                t += f1(br, cr, dr) + hr[4];
              }
              t = t | 0;
              t = rotl(t, sr[i]);
              t = t + er | 0;
              ar = er;
              er = dr;
              dr = rotl(cr, 10);
              cr = br;
              br = t;
            }
            t = H[1] + cl + dr | 0;
            H[1] = H[2] + dl + er | 0;
            H[2] = H[3] + el + ar | 0;
            H[3] = H[4] + al + br | 0;
            H[4] = H[0] + bl + cr | 0;
            H[0] = t;
          },
          _doFinalize: function() {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
            dataWords[(nBitsLeft + 64 >>> 9 << 4) + 14] = (nBitsTotal << 8 | nBitsTotal >>> 24) & 16711935 | (nBitsTotal << 24 | nBitsTotal >>> 8) & 4278255360;
            data.sigBytes = (dataWords.length + 1) * 4;
            this._process();
            var hash = this._hash;
            var H = hash.words;
            for (var i = 0; i < 5; i++) {
              var H_i = H[i];
              H[i] = (H_i << 8 | H_i >>> 24) & 16711935 | (H_i << 24 | H_i >>> 8) & 4278255360;
            }
            return hash;
          },
          clone: function() {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();
            return clone;
          }
        });
        function f1(x, y, z) {
          return x ^ y ^ z;
        }
        function f2(x, y, z) {
          return x & y | ~x & z;
        }
        function f3(x, y, z) {
          return (x | ~y) ^ z;
        }
        function f4(x, y, z) {
          return x & z | y & ~z;
        }
        function f5(x, y, z) {
          return x ^ (y | ~z);
        }
        function rotl(x, n) {
          return x << n | x >>> 32 - n;
        }
        C.RIPEMD160 = Hasher._createHelper(RIPEMD160);
        C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
      })(Math);
      return CryptoJS.RIPEMD160;
    });
  }
});

// node_modules/crypto-js/hmac.js
var require_hmac = __commonJS({
  "node_modules/crypto-js/hmac.js"(exports2, module2) {
    (function(root, factory) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var C_algo = C.algo;
        var HMAC = C_algo.HMAC = Base.extend({
          /**
           * Initializes a newly created HMAC.
           *
           * @param {Hasher} hasher The hash algorithm to use.
           * @param {WordArray|string} key The secret key.
           *
           * @example
           *
           *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
           */
          init: function(hasher, key) {
            hasher = this._hasher = new hasher.init();
            if (typeof key == "string") {
              key = Utf8.parse(key);
            }
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;
            if (key.sigBytes > hasherBlockSizeBytes) {
              key = hasher.finalize(key);
            }
            key.clamp();
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;
            for (var i = 0; i < hasherBlockSize; i++) {
              oKeyWords[i] ^= 1549556828;
              iKeyWords[i] ^= 909522486;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;
            this.reset();
          },
          /**
           * Resets this HMAC to its initial state.
           *
           * @example
           *
           *     hmacHasher.reset();
           */
          reset: function() {
            var hasher = this._hasher;
            hasher.reset();
            hasher.update(this._iKey);
          },
          /**
           * Updates this HMAC with a message.
           *
           * @param {WordArray|string} messageUpdate The message to append.
           *
           * @return {HMAC} This HMAC instance.
           *
           * @example
           *
           *     hmacHasher.update('message');
           *     hmacHasher.update(wordArray);
           */
          update: function(messageUpdate) {
            this._hasher.update(messageUpdate);
            return this;
          },
          /**
           * Finalizes the HMAC computation.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} messageUpdate (Optional) A final message update.
           *
           * @return {WordArray} The HMAC.
           *
           * @example
           *
           *     var hmac = hmacHasher.finalize();
           *     var hmac = hmacHasher.finalize('message');
           *     var hmac = hmacHasher.finalize(wordArray);
           */
          finalize: function(messageUpdate) {
            var hasher = this._hasher;
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));
            return hmac;
          }
        });
      })();
    });
  }
});

// node_modules/crypto-js/pbkdf2.js
var require_pbkdf2 = __commonJS({
  "node_modules/crypto-js/pbkdf2.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_sha256(), require_hmac());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha256", "./hmac"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var SHA256 = C_algo.SHA256;
        var HMAC = C_algo.HMAC;
        var PBKDF2 = C_algo.PBKDF2 = Base.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hasher to use. Default: SHA256
           * @property {number} iterations The number of iterations to perform. Default: 250000
           */
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: SHA256,
            iterations: 25e4
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.PBKDF2.create();
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          /**
           * Computes the Password-Based Key Derivation Function 2.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(password, salt) {
            var cfg = this.cfg;
            var hmac = HMAC.create(cfg.hasher, password);
            var derivedKey = WordArray.create();
            var blockIndex = WordArray.create([1]);
            var derivedKeyWords = derivedKey.words;
            var blockIndexWords = blockIndex.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              var block = hmac.update(salt).finalize(blockIndex);
              hmac.reset();
              var blockWords = block.words;
              var blockWordsLength = blockWords.length;
              var intermediate = block;
              for (var i = 1; i < iterations; i++) {
                intermediate = hmac.finalize(intermediate);
                hmac.reset();
                var intermediateWords = intermediate.words;
                for (var j = 0; j < blockWordsLength; j++) {
                  blockWords[j] ^= intermediateWords[j];
                }
              }
              derivedKey.concat(block);
              blockIndexWords[0]++;
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.PBKDF2 = function(password, salt, cfg) {
          return PBKDF2.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.PBKDF2;
    });
  }
});

// node_modules/crypto-js/evpkdf.js
var require_evpkdf = __commonJS({
  "node_modules/crypto-js/evpkdf.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_sha1(), require_hmac());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./sha1", "./hmac"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var C_algo = C.algo;
        var MD5 = C_algo.MD5;
        var EvpKDF = C_algo.EvpKDF = Base.extend({
          /**
           * Configuration options.
           *
           * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
           * @property {Hasher} hasher The hash algorithm to use. Default: MD5
           * @property {number} iterations The number of iterations to perform. Default: 1
           */
          cfg: Base.extend({
            keySize: 128 / 32,
            hasher: MD5,
            iterations: 1
          }),
          /**
           * Initializes a newly created key derivation function.
           *
           * @param {Object} cfg (Optional) The configuration options to use for the derivation.
           *
           * @example
           *
           *     var kdf = CryptoJS.algo.EvpKDF.create();
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
           *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
           */
          init: function(cfg) {
            this.cfg = this.cfg.extend(cfg);
          },
          /**
           * Derives a key from a password.
           *
           * @param {WordArray|string} password The password.
           * @param {WordArray|string} salt A salt.
           *
           * @return {WordArray} The derived key.
           *
           * @example
           *
           *     var key = kdf.compute(password, salt);
           */
          compute: function(password, salt) {
            var block;
            var cfg = this.cfg;
            var hasher = cfg.hasher.create();
            var derivedKey = WordArray.create();
            var derivedKeyWords = derivedKey.words;
            var keySize = cfg.keySize;
            var iterations = cfg.iterations;
            while (derivedKeyWords.length < keySize) {
              if (block) {
                hasher.update(block);
              }
              block = hasher.update(password).finalize(salt);
              hasher.reset();
              for (var i = 1; i < iterations; i++) {
                block = hasher.finalize(block);
                hasher.reset();
              }
              derivedKey.concat(block);
            }
            derivedKey.sigBytes = keySize * 4;
            return derivedKey;
          }
        });
        C.EvpKDF = function(password, salt, cfg) {
          return EvpKDF.create(cfg).compute(password, salt);
        };
      })();
      return CryptoJS.EvpKDF;
    });
  }
});

// node_modules/crypto-js/cipher-core.js
var require_cipher_core = __commonJS({
  "node_modules/crypto-js/cipher-core.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_evpkdf());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./evpkdf"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.lib.Cipher || function(undefined2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var Base = C_lib.Base;
        var WordArray = C_lib.WordArray;
        var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
        var C_enc = C.enc;
        var Utf8 = C_enc.Utf8;
        var Base64 = C_enc.Base64;
        var C_algo = C.algo;
        var EvpKDF = C_algo.EvpKDF;
        var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
          /**
           * Configuration options.
           *
           * @property {WordArray} iv The IV to use for this operation.
           */
          cfg: Base.extend(),
          /**
           * Creates this cipher in encryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
           */
          createEncryptor: function(key, cfg) {
            return this.create(this._ENC_XFORM_MODE, key, cfg);
          },
          /**
           * Creates this cipher in decryption mode.
           *
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {Cipher} A cipher instance.
           *
           * @static
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
           */
          createDecryptor: function(key, cfg) {
            return this.create(this._DEC_XFORM_MODE, key, cfg);
          },
          /**
           * Initializes a newly created cipher.
           *
           * @param {number} xformMode Either the encryption or decryption transormation mode constant.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @example
           *
           *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
           */
          init: function(xformMode, key, cfg) {
            this.cfg = this.cfg.extend(cfg);
            this._xformMode = xformMode;
            this._key = key;
            this.reset();
          },
          /**
           * Resets this cipher to its initial state.
           *
           * @example
           *
           *     cipher.reset();
           */
          reset: function() {
            BufferedBlockAlgorithm.reset.call(this);
            this._doReset();
          },
          /**
           * Adds data to be encrypted or decrypted.
           *
           * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
           *
           * @return {WordArray} The data after processing.
           *
           * @example
           *
           *     var encrypted = cipher.process('data');
           *     var encrypted = cipher.process(wordArray);
           */
          process: function(dataUpdate) {
            this._append(dataUpdate);
            return this._process();
          },
          /**
           * Finalizes the encryption or decryption process.
           * Note that the finalize operation is effectively a destructive, read-once operation.
           *
           * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
           *
           * @return {WordArray} The data after final processing.
           *
           * @example
           *
           *     var encrypted = cipher.finalize();
           *     var encrypted = cipher.finalize('data');
           *     var encrypted = cipher.finalize(wordArray);
           */
          finalize: function(dataUpdate) {
            if (dataUpdate) {
              this._append(dataUpdate);
            }
            var finalProcessedData = this._doFinalize();
            return finalProcessedData;
          },
          keySize: 128 / 32,
          ivSize: 128 / 32,
          _ENC_XFORM_MODE: 1,
          _DEC_XFORM_MODE: 2,
          /**
           * Creates shortcut functions to a cipher's object interface.
           *
           * @param {Cipher} cipher The cipher to create a helper for.
           *
           * @return {Object} An object with encrypt and decrypt shortcut functions.
           *
           * @static
           *
           * @example
           *
           *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
           */
          _createHelper: /* @__PURE__ */ function() {
            function selectCipherStrategy(key) {
              if (typeof key == "string") {
                return PasswordBasedCipher;
              } else {
                return SerializableCipher;
              }
            }
            return function(cipher) {
              return {
                encrypt: function(message, key, cfg) {
                  return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
                },
                decrypt: function(ciphertext, key, cfg) {
                  return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
                }
              };
            };
          }()
        });
        var StreamCipher = C_lib.StreamCipher = Cipher.extend({
          _doFinalize: function() {
            var finalProcessedBlocks = this._process(true);
            return finalProcessedBlocks;
          },
          blockSize: 1
        });
        var C_mode = C.mode = {};
        var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
          /**
           * Creates this mode for encryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
           */
          createEncryptor: function(cipher, iv) {
            return this.Encryptor.create(cipher, iv);
          },
          /**
           * Creates this mode for decryption.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @static
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
           */
          createDecryptor: function(cipher, iv) {
            return this.Decryptor.create(cipher, iv);
          },
          /**
           * Initializes a newly created mode.
           *
           * @param {Cipher} cipher A block cipher instance.
           * @param {Array} iv The IV words.
           *
           * @example
           *
           *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
           */
          init: function(cipher, iv) {
            this._cipher = cipher;
            this._iv = iv;
          }
        });
        var CBC = C_mode.CBC = function() {
          var CBC2 = BlockCipherMode.extend();
          CBC2.Encryptor = CBC2.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              xorBlock.call(this, words, offset, blockSize);
              cipher.encryptBlock(words, offset);
              this._prevBlock = words.slice(offset, offset + blockSize);
            }
          });
          CBC2.Decryptor = CBC2.extend({
            /**
             * Processes the data block at offset.
             *
             * @param {Array} words The data words to operate on.
             * @param {number} offset The offset where the block starts.
             *
             * @example
             *
             *     mode.processBlock(data.words, offset);
             */
            processBlock: function(words, offset) {
              var cipher = this._cipher;
              var blockSize = cipher.blockSize;
              var thisBlock = words.slice(offset, offset + blockSize);
              cipher.decryptBlock(words, offset);
              xorBlock.call(this, words, offset, blockSize);
              this._prevBlock = thisBlock;
            }
          });
          function xorBlock(words, offset, blockSize) {
            var block;
            var iv = this._iv;
            if (iv) {
              block = iv;
              this._iv = undefined2;
            } else {
              block = this._prevBlock;
            }
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= block[i];
            }
          }
          return CBC2;
        }();
        var C_pad = C.pad = {};
        var Pkcs7 = C_pad.Pkcs7 = {
          /**
           * Pads data using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to pad.
           * @param {number} blockSize The multiple that the data should be padded to.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
           */
          pad: function(data, blockSize) {
            var blockSizeBytes = blockSize * 4;
            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
            var paddingWord = nPaddingBytes << 24 | nPaddingBytes << 16 | nPaddingBytes << 8 | nPaddingBytes;
            var paddingWords = [];
            for (var i = 0; i < nPaddingBytes; i += 4) {
              paddingWords.push(paddingWord);
            }
            var padding = WordArray.create(paddingWords, nPaddingBytes);
            data.concat(padding);
          },
          /**
           * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
           *
           * @param {WordArray} data The data to unpad.
           *
           * @static
           *
           * @example
           *
           *     CryptoJS.pad.Pkcs7.unpad(wordArray);
           */
          unpad: function(data) {
            var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
            data.sigBytes -= nPaddingBytes;
          }
        };
        var BlockCipher = C_lib.BlockCipher = Cipher.extend({
          /**
           * Configuration options.
           *
           * @property {Mode} mode The block mode to use. Default: CBC
           * @property {Padding} padding The padding strategy to use. Default: Pkcs7
           */
          cfg: Cipher.cfg.extend({
            mode: CBC,
            padding: Pkcs7
          }),
          reset: function() {
            var modeCreator;
            Cipher.reset.call(this);
            var cfg = this.cfg;
            var iv = cfg.iv;
            var mode = cfg.mode;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              modeCreator = mode.createEncryptor;
            } else {
              modeCreator = mode.createDecryptor;
              this._minBufferSize = 1;
            }
            if (this._mode && this._mode.__creator == modeCreator) {
              this._mode.init(this, iv && iv.words);
            } else {
              this._mode = modeCreator.call(mode, this, iv && iv.words);
              this._mode.__creator = modeCreator;
            }
          },
          _doProcessBlock: function(words, offset) {
            this._mode.processBlock(words, offset);
          },
          _doFinalize: function() {
            var finalProcessedBlocks;
            var padding = this.cfg.padding;
            if (this._xformMode == this._ENC_XFORM_MODE) {
              padding.pad(this._data, this.blockSize);
              finalProcessedBlocks = this._process(true);
            } else {
              finalProcessedBlocks = this._process(true);
              padding.unpad(finalProcessedBlocks);
            }
            return finalProcessedBlocks;
          },
          blockSize: 128 / 32
        });
        var CipherParams = C_lib.CipherParams = Base.extend({
          /**
           * Initializes a newly created cipher params object.
           *
           * @param {Object} cipherParams An object with any of the possible cipher parameters.
           *
           * @example
           *
           *     var cipherParams = CryptoJS.lib.CipherParams.create({
           *         ciphertext: ciphertextWordArray,
           *         key: keyWordArray,
           *         iv: ivWordArray,
           *         salt: saltWordArray,
           *         algorithm: CryptoJS.algo.AES,
           *         mode: CryptoJS.mode.CBC,
           *         padding: CryptoJS.pad.PKCS7,
           *         blockSize: 4,
           *         formatter: CryptoJS.format.OpenSSL
           *     });
           */
          init: function(cipherParams) {
            this.mixIn(cipherParams);
          },
          /**
           * Converts this cipher params object to a string.
           *
           * @param {Format} formatter (Optional) The formatting strategy to use.
           *
           * @return {string} The stringified cipher params.
           *
           * @throws Error If neither the formatter nor the default formatter is set.
           *
           * @example
           *
           *     var string = cipherParams + '';
           *     var string = cipherParams.toString();
           *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
           */
          toString: function(formatter) {
            return (formatter || this.formatter).stringify(this);
          }
        });
        var C_format = C.format = {};
        var OpenSSLFormatter = C_format.OpenSSL = {
          /**
           * Converts a cipher params object to an OpenSSL-compatible string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The OpenSSL-compatible string.
           *
           * @static
           *
           * @example
           *
           *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
           */
          stringify: function(cipherParams) {
            var wordArray;
            var ciphertext = cipherParams.ciphertext;
            var salt = cipherParams.salt;
            if (salt) {
              wordArray = WordArray.create([1398893684, 1701076831]).concat(salt).concat(ciphertext);
            } else {
              wordArray = ciphertext;
            }
            return wordArray.toString(Base64);
          },
          /**
           * Converts an OpenSSL-compatible string to a cipher params object.
           *
           * @param {string} openSSLStr The OpenSSL-compatible string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
           */
          parse: function(openSSLStr) {
            var salt;
            var ciphertext = Base64.parse(openSSLStr);
            var ciphertextWords = ciphertext.words;
            if (ciphertextWords[0] == 1398893684 && ciphertextWords[1] == 1701076831) {
              salt = WordArray.create(ciphertextWords.slice(2, 4));
              ciphertextWords.splice(0, 4);
              ciphertext.sigBytes -= 16;
            }
            return CipherParams.create({ ciphertext, salt });
          }
        };
        var SerializableCipher = C_lib.SerializableCipher = Base.extend({
          /**
           * Configuration options.
           *
           * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
           */
          cfg: Base.extend({
            format: OpenSSLFormatter
          }),
          /**
           * Encrypts a message.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(cipher, message, key, cfg) {
            cfg = this.cfg.extend(cfg);
            var encryptor = cipher.createEncryptor(key, cfg);
            var ciphertext = encryptor.finalize(message);
            var cipherCfg = encryptor.cfg;
            return CipherParams.create({
              ciphertext,
              key,
              iv: cipherCfg.iv,
              algorithm: cipher,
              mode: cipherCfg.mode,
              padding: cipherCfg.padding,
              blockSize: cipher.blockSize,
              formatter: cfg.format
            });
          },
          /**
           * Decrypts serialized ciphertext.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {WordArray} key The key.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(cipher, ciphertext, key, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
            return plaintext;
          },
          /**
           * Converts serialized ciphertext to CipherParams,
           * else assumed CipherParams already and returns ciphertext unchanged.
           *
           * @param {CipherParams|string} ciphertext The ciphertext.
           * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
           *
           * @return {CipherParams} The unserialized ciphertext.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
           */
          _parse: function(ciphertext, format) {
            if (typeof ciphertext == "string") {
              return format.parse(ciphertext, this);
            } else {
              return ciphertext;
            }
          }
        });
        var C_kdf = C.kdf = {};
        var OpenSSLKdf = C_kdf.OpenSSL = {
          /**
           * Derives a key and IV from a password.
           *
           * @param {string} password The password to derive from.
           * @param {number} keySize The size in words of the key to generate.
           * @param {number} ivSize The size in words of the IV to generate.
           * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
           *
           * @return {CipherParams} A cipher params object with the key, IV, and salt.
           *
           * @static
           *
           * @example
           *
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
           *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
           */
          execute: function(password, keySize, ivSize, salt, hasher) {
            if (!salt) {
              salt = WordArray.random(64 / 8);
            }
            if (!hasher) {
              var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);
            } else {
              var key = EvpKDF.create({ keySize: keySize + ivSize, hasher }).compute(password, salt);
            }
            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
            key.sigBytes = keySize * 4;
            return CipherParams.create({ key, iv, salt });
          }
        };
        var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
          /**
           * Configuration options.
           *
           * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
           */
          cfg: SerializableCipher.cfg.extend({
            kdf: OpenSSLKdf
          }),
          /**
           * Encrypts a message using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {WordArray|string} message The message to encrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {CipherParams} A cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
           *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
           */
          encrypt: function(cipher, message, password, cfg) {
            cfg = this.cfg.extend(cfg);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, cfg.salt, cfg.hasher);
            cfg.iv = derivedParams.iv;
            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
            ciphertext.mixIn(derivedParams);
            return ciphertext;
          },
          /**
           * Decrypts serialized ciphertext using a password.
           *
           * @param {Cipher} cipher The cipher algorithm to use.
           * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
           * @param {string} password The password.
           * @param {Object} cfg (Optional) The configuration options to use for this operation.
           *
           * @return {WordArray} The plaintext.
           *
           * @static
           *
           * @example
           *
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
           *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
           */
          decrypt: function(cipher, ciphertext, password, cfg) {
            cfg = this.cfg.extend(cfg);
            ciphertext = this._parse(ciphertext, cfg.format);
            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt, cfg.hasher);
            cfg.iv = derivedParams.iv;
            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
            return plaintext;
          }
        });
      }();
    });
  }
});

// node_modules/crypto-js/mode-cfb.js
var require_mode_cfb = __commonJS({
  "node_modules/crypto-js/mode-cfb.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.mode.CFB = function() {
        var CFB = CryptoJS.lib.BlockCipherMode.extend();
        CFB.Encryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = words.slice(offset, offset + blockSize);
          }
        });
        CFB.Decryptor = CFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var thisBlock = words.slice(offset, offset + blockSize);
            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);
            this._prevBlock = thisBlock;
          }
        });
        function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
          var keystream;
          var iv = this._iv;
          if (iv) {
            keystream = iv.slice(0);
            this._iv = void 0;
          } else {
            keystream = this._prevBlock;
          }
          cipher.encryptBlock(keystream, 0);
          for (var i = 0; i < blockSize; i++) {
            words[offset + i] ^= keystream[i];
          }
        }
        return CFB;
      }();
      return CryptoJS.mode.CFB;
    });
  }
});

// node_modules/crypto-js/mode-ctr.js
var require_mode_ctr = __commonJS({
  "node_modules/crypto-js/mode-ctr.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.mode.CTR = function() {
        var CTR = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = CTR.Encryptor = CTR.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            counter[blockSize - 1] = counter[blockSize - 1] + 1 | 0;
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTR.Decryptor = Encryptor;
        return CTR;
      }();
      return CryptoJS.mode.CTR;
    });
  }
});

// node_modules/crypto-js/mode-ctr-gladman.js
var require_mode_ctr_gladman = __commonJS({
  "node_modules/crypto-js/mode-ctr-gladman.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.mode.CTRGladman = function() {
        var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();
        function incWord(word) {
          if ((word >> 24 & 255) === 255) {
            var b1 = word >> 16 & 255;
            var b2 = word >> 8 & 255;
            var b3 = word & 255;
            if (b1 === 255) {
              b1 = 0;
              if (b2 === 255) {
                b2 = 0;
                if (b3 === 255) {
                  b3 = 0;
                } else {
                  ++b3;
                }
              } else {
                ++b2;
              }
            } else {
              ++b1;
            }
            word = 0;
            word += b1 << 16;
            word += b2 << 8;
            word += b3;
          } else {
            word += 1 << 24;
          }
          return word;
        }
        function incCounter(counter) {
          if ((counter[0] = incWord(counter[0])) === 0) {
            counter[1] = incWord(counter[1]);
          }
          return counter;
        }
        var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var counter = this._counter;
            if (iv) {
              counter = this._counter = iv.slice(0);
              this._iv = void 0;
            }
            incCounter(counter);
            var keystream = counter.slice(0);
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        CTRGladman.Decryptor = Encryptor;
        return CTRGladman;
      }();
      return CryptoJS.mode.CTRGladman;
    });
  }
});

// node_modules/crypto-js/mode-ofb.js
var require_mode_ofb = __commonJS({
  "node_modules/crypto-js/mode-ofb.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.mode.OFB = function() {
        var OFB = CryptoJS.lib.BlockCipherMode.extend();
        var Encryptor = OFB.Encryptor = OFB.extend({
          processBlock: function(words, offset) {
            var cipher = this._cipher;
            var blockSize = cipher.blockSize;
            var iv = this._iv;
            var keystream = this._keystream;
            if (iv) {
              keystream = this._keystream = iv.slice(0);
              this._iv = void 0;
            }
            cipher.encryptBlock(keystream, 0);
            for (var i = 0; i < blockSize; i++) {
              words[offset + i] ^= keystream[i];
            }
          }
        });
        OFB.Decryptor = Encryptor;
        return OFB;
      }();
      return CryptoJS.mode.OFB;
    });
  }
});

// node_modules/crypto-js/mode-ecb.js
var require_mode_ecb = __commonJS({
  "node_modules/crypto-js/mode-ecb.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.mode.ECB = function() {
        var ECB = CryptoJS.lib.BlockCipherMode.extend();
        ECB.Encryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.encryptBlock(words, offset);
          }
        });
        ECB.Decryptor = ECB.extend({
          processBlock: function(words, offset) {
            this._cipher.decryptBlock(words, offset);
          }
        });
        return ECB;
      }();
      return CryptoJS.mode.ECB;
    });
  }
});

// node_modules/crypto-js/pad-ansix923.js
var require_pad_ansix923 = __commonJS({
  "node_modules/crypto-js/pad-ansix923.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.pad.AnsiX923 = {
        pad: function(data, blockSize) {
          var dataSigBytes = data.sigBytes;
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;
          var lastBytePos = dataSigBytes + nPaddingBytes - 1;
          data.clamp();
          data.words[lastBytePos >>> 2] |= nPaddingBytes << 24 - lastBytePos % 4 * 8;
          data.sigBytes += nPaddingBytes;
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Ansix923;
    });
  }
});

// node_modules/crypto-js/pad-iso10126.js
var require_pad_iso10126 = __commonJS({
  "node_modules/crypto-js/pad-iso10126.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.pad.Iso10126 = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
          data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
        },
        unpad: function(data) {
          var nPaddingBytes = data.words[data.sigBytes - 1 >>> 2] & 255;
          data.sigBytes -= nPaddingBytes;
        }
      };
      return CryptoJS.pad.Iso10126;
    });
  }
});

// node_modules/crypto-js/pad-iso97971.js
var require_pad_iso97971 = __commonJS({
  "node_modules/crypto-js/pad-iso97971.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.pad.Iso97971 = {
        pad: function(data, blockSize) {
          data.concat(CryptoJS.lib.WordArray.create([2147483648], 1));
          CryptoJS.pad.ZeroPadding.pad(data, blockSize);
        },
        unpad: function(data) {
          CryptoJS.pad.ZeroPadding.unpad(data);
          data.sigBytes--;
        }
      };
      return CryptoJS.pad.Iso97971;
    });
  }
});

// node_modules/crypto-js/pad-zeropadding.js
var require_pad_zeropadding = __commonJS({
  "node_modules/crypto-js/pad-zeropadding.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.pad.ZeroPadding = {
        pad: function(data, blockSize) {
          var blockSizeBytes = blockSize * 4;
          data.clamp();
          data.sigBytes += blockSizeBytes - (data.sigBytes % blockSizeBytes || blockSizeBytes);
        },
        unpad: function(data) {
          var dataWords = data.words;
          var i = data.sigBytes - 1;
          for (var i = data.sigBytes - 1; i >= 0; i--) {
            if (dataWords[i >>> 2] >>> 24 - i % 4 * 8 & 255) {
              data.sigBytes = i + 1;
              break;
            }
          }
        }
      };
      return CryptoJS.pad.ZeroPadding;
    });
  }
});

// node_modules/crypto-js/pad-nopadding.js
var require_pad_nopadding = __commonJS({
  "node_modules/crypto-js/pad-nopadding.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      CryptoJS.pad.NoPadding = {
        pad: function() {
        },
        unpad: function() {
        }
      };
      return CryptoJS.pad.NoPadding;
    });
  }
});

// node_modules/crypto-js/format-hex.js
var require_format_hex = __commonJS({
  "node_modules/crypto-js/format-hex.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function(undefined2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var CipherParams = C_lib.CipherParams;
        var C_enc = C.enc;
        var Hex = C_enc.Hex;
        var C_format = C.format;
        var HexFormatter = C_format.Hex = {
          /**
           * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
           *
           * @param {CipherParams} cipherParams The cipher params object.
           *
           * @return {string} The hexadecimally encoded string.
           *
           * @static
           *
           * @example
           *
           *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
           */
          stringify: function(cipherParams) {
            return cipherParams.ciphertext.toString(Hex);
          },
          /**
           * Converts a hexadecimally encoded ciphertext string to a cipher params object.
           *
           * @param {string} input The hexadecimally encoded string.
           *
           * @return {CipherParams} The cipher params object.
           *
           * @static
           *
           * @example
           *
           *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
           */
          parse: function(input) {
            var ciphertext = Hex.parse(input);
            return CipherParams.create({ ciphertext });
          }
        };
      })();
      return CryptoJS.format.Hex;
    });
  }
});

// node_modules/crypto-js/aes.js
var require_aes = __commonJS({
  "node_modules/crypto-js/aes.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var SBOX = [];
        var INV_SBOX = [];
        var SUB_MIX_0 = [];
        var SUB_MIX_1 = [];
        var SUB_MIX_2 = [];
        var SUB_MIX_3 = [];
        var INV_SUB_MIX_0 = [];
        var INV_SUB_MIX_1 = [];
        var INV_SUB_MIX_2 = [];
        var INV_SUB_MIX_3 = [];
        (function() {
          var d = [];
          for (var i = 0; i < 256; i++) {
            if (i < 128) {
              d[i] = i << 1;
            } else {
              d[i] = i << 1 ^ 283;
            }
          }
          var x = 0;
          var xi = 0;
          for (var i = 0; i < 256; i++) {
            var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
            sx = sx >>> 8 ^ sx & 255 ^ 99;
            SBOX[x] = sx;
            INV_SBOX[sx] = x;
            var x2 = d[x];
            var x4 = d[x2];
            var x8 = d[x4];
            var t = d[sx] * 257 ^ sx * 16843008;
            SUB_MIX_0[x] = t << 24 | t >>> 8;
            SUB_MIX_1[x] = t << 16 | t >>> 16;
            SUB_MIX_2[x] = t << 8 | t >>> 24;
            SUB_MIX_3[x] = t;
            var t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
            INV_SUB_MIX_0[sx] = t << 24 | t >>> 8;
            INV_SUB_MIX_1[sx] = t << 16 | t >>> 16;
            INV_SUB_MIX_2[sx] = t << 8 | t >>> 24;
            INV_SUB_MIX_3[sx] = t;
            if (!x) {
              x = xi = 1;
            } else {
              x = x2 ^ d[d[d[x8 ^ x2]]];
              xi ^= d[d[xi]];
            }
          }
        })();
        var RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
        var AES = C_algo.AES = BlockCipher.extend({
          _doReset: function() {
            var t;
            if (this._nRounds && this._keyPriorReset === this._key) {
              return;
            }
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            var nRounds = this._nRounds = keySize + 6;
            var ksRows = (nRounds + 1) * 4;
            var keySchedule = this._keySchedule = [];
            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
              if (ksRow < keySize) {
                keySchedule[ksRow] = keyWords[ksRow];
              } else {
                t = keySchedule[ksRow - 1];
                if (!(ksRow % keySize)) {
                  t = t << 8 | t >>> 24;
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                  t ^= RCON[ksRow / keySize | 0] << 24;
                } else if (keySize > 6 && ksRow % keySize == 4) {
                  t = SBOX[t >>> 24] << 24 | SBOX[t >>> 16 & 255] << 16 | SBOX[t >>> 8 & 255] << 8 | SBOX[t & 255];
                }
                keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
              }
            }
            var invKeySchedule = this._invKeySchedule = [];
            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
              var ksRow = ksRows - invKsRow;
              if (invKsRow % 4) {
                var t = keySchedule[ksRow];
              } else {
                var t = keySchedule[ksRow - 4];
              }
              if (invKsRow < 4 || ksRow <= 4) {
                invKeySchedule[invKsRow] = t;
              } else {
                invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[t >>> 16 & 255]] ^ INV_SUB_MIX_2[SBOX[t >>> 8 & 255]] ^ INV_SUB_MIX_3[SBOX[t & 255]];
              }
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
          },
          decryptBlock: function(M, offset) {
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);
            var t = M[offset + 1];
            M[offset + 1] = M[offset + 3];
            M[offset + 3] = t;
          },
          _doCryptBlock: function(M, offset, keySchedule, SUB_MIX_02, SUB_MIX_12, SUB_MIX_22, SUB_MIX_32, SBOX2) {
            var nRounds = this._nRounds;
            var s0 = M[offset] ^ keySchedule[0];
            var s1 = M[offset + 1] ^ keySchedule[1];
            var s2 = M[offset + 2] ^ keySchedule[2];
            var s3 = M[offset + 3] ^ keySchedule[3];
            var ksRow = 4;
            for (var round = 1; round < nRounds; round++) {
              var t0 = SUB_MIX_02[s0 >>> 24] ^ SUB_MIX_12[s1 >>> 16 & 255] ^ SUB_MIX_22[s2 >>> 8 & 255] ^ SUB_MIX_32[s3 & 255] ^ keySchedule[ksRow++];
              var t1 = SUB_MIX_02[s1 >>> 24] ^ SUB_MIX_12[s2 >>> 16 & 255] ^ SUB_MIX_22[s3 >>> 8 & 255] ^ SUB_MIX_32[s0 & 255] ^ keySchedule[ksRow++];
              var t2 = SUB_MIX_02[s2 >>> 24] ^ SUB_MIX_12[s3 >>> 16 & 255] ^ SUB_MIX_22[s0 >>> 8 & 255] ^ SUB_MIX_32[s1 & 255] ^ keySchedule[ksRow++];
              var t3 = SUB_MIX_02[s3 >>> 24] ^ SUB_MIX_12[s0 >>> 16 & 255] ^ SUB_MIX_22[s1 >>> 8 & 255] ^ SUB_MIX_32[s2 & 255] ^ keySchedule[ksRow++];
              s0 = t0;
              s1 = t1;
              s2 = t2;
              s3 = t3;
            }
            var t0 = (SBOX2[s0 >>> 24] << 24 | SBOX2[s1 >>> 16 & 255] << 16 | SBOX2[s2 >>> 8 & 255] << 8 | SBOX2[s3 & 255]) ^ keySchedule[ksRow++];
            var t1 = (SBOX2[s1 >>> 24] << 24 | SBOX2[s2 >>> 16 & 255] << 16 | SBOX2[s3 >>> 8 & 255] << 8 | SBOX2[s0 & 255]) ^ keySchedule[ksRow++];
            var t2 = (SBOX2[s2 >>> 24] << 24 | SBOX2[s3 >>> 16 & 255] << 16 | SBOX2[s0 >>> 8 & 255] << 8 | SBOX2[s1 & 255]) ^ keySchedule[ksRow++];
            var t3 = (SBOX2[s3 >>> 24] << 24 | SBOX2[s0 >>> 16 & 255] << 16 | SBOX2[s1 >>> 8 & 255] << 8 | SBOX2[s2 & 255]) ^ keySchedule[ksRow++];
            M[offset] = t0;
            M[offset + 1] = t1;
            M[offset + 2] = t2;
            M[offset + 3] = t3;
          },
          keySize: 256 / 32
        });
        C.AES = BlockCipher._createHelper(AES);
      })();
      return CryptoJS.AES;
    });
  }
});

// node_modules/crypto-js/tripledes.js
var require_tripledes = __commonJS({
  "node_modules/crypto-js/tripledes.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        var PC1 = [
          57,
          49,
          41,
          33,
          25,
          17,
          9,
          1,
          58,
          50,
          42,
          34,
          26,
          18,
          10,
          2,
          59,
          51,
          43,
          35,
          27,
          19,
          11,
          3,
          60,
          52,
          44,
          36,
          63,
          55,
          47,
          39,
          31,
          23,
          15,
          7,
          62,
          54,
          46,
          38,
          30,
          22,
          14,
          6,
          61,
          53,
          45,
          37,
          29,
          21,
          13,
          5,
          28,
          20,
          12,
          4
        ];
        var PC2 = [
          14,
          17,
          11,
          24,
          1,
          5,
          3,
          28,
          15,
          6,
          21,
          10,
          23,
          19,
          12,
          4,
          26,
          8,
          16,
          7,
          27,
          20,
          13,
          2,
          41,
          52,
          31,
          37,
          47,
          55,
          30,
          40,
          51,
          45,
          33,
          48,
          44,
          49,
          39,
          56,
          34,
          53,
          46,
          42,
          50,
          36,
          29,
          32
        ];
        var BIT_SHIFTS = [1, 2, 4, 6, 8, 10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];
        var SBOX_P = [
          {
            0: 8421888,
            268435456: 32768,
            536870912: 8421378,
            805306368: 2,
            1073741824: 512,
            1342177280: 8421890,
            1610612736: 8389122,
            1879048192: 8388608,
            2147483648: 514,
            2415919104: 8389120,
            2684354560: 33280,
            2952790016: 8421376,
            3221225472: 32770,
            3489660928: 8388610,
            3758096384: 0,
            4026531840: 33282,
            134217728: 0,
            402653184: 8421890,
            671088640: 33282,
            939524096: 32768,
            1207959552: 8421888,
            1476395008: 512,
            1744830464: 8421378,
            2013265920: 2,
            2281701376: 8389120,
            2550136832: 33280,
            2818572288: 8421376,
            3087007744: 8389122,
            3355443200: 8388610,
            3623878656: 32770,
            3892314112: 514,
            4160749568: 8388608,
            1: 32768,
            268435457: 2,
            536870913: 8421888,
            805306369: 8388608,
            1073741825: 8421378,
            1342177281: 33280,
            1610612737: 512,
            1879048193: 8389122,
            2147483649: 8421890,
            2415919105: 8421376,
            2684354561: 8388610,
            2952790017: 33282,
            3221225473: 514,
            3489660929: 8389120,
            3758096385: 32770,
            4026531841: 0,
            134217729: 8421890,
            402653185: 8421376,
            671088641: 8388608,
            939524097: 512,
            1207959553: 32768,
            1476395009: 8388610,
            1744830465: 2,
            2013265921: 33282,
            2281701377: 32770,
            2550136833: 8389122,
            2818572289: 514,
            3087007745: 8421888,
            3355443201: 8389120,
            3623878657: 0,
            3892314113: 33280,
            4160749569: 8421378
          },
          {
            0: 1074282512,
            16777216: 16384,
            33554432: 524288,
            50331648: 1074266128,
            67108864: 1073741840,
            83886080: 1074282496,
            100663296: 1073758208,
            117440512: 16,
            134217728: 540672,
            150994944: 1073758224,
            167772160: 1073741824,
            184549376: 540688,
            201326592: 524304,
            218103808: 0,
            234881024: 16400,
            251658240: 1074266112,
            8388608: 1073758208,
            25165824: 540688,
            41943040: 16,
            58720256: 1073758224,
            75497472: 1074282512,
            92274688: 1073741824,
            109051904: 524288,
            125829120: 1074266128,
            142606336: 524304,
            159383552: 0,
            176160768: 16384,
            192937984: 1074266112,
            209715200: 1073741840,
            226492416: 540672,
            243269632: 1074282496,
            260046848: 16400,
            268435456: 0,
            285212672: 1074266128,
            301989888: 1073758224,
            318767104: 1074282496,
            335544320: 1074266112,
            352321536: 16,
            369098752: 540688,
            385875968: 16384,
            402653184: 16400,
            419430400: 524288,
            436207616: 524304,
            452984832: 1073741840,
            469762048: 540672,
            486539264: 1073758208,
            503316480: 1073741824,
            520093696: 1074282512,
            276824064: 540688,
            293601280: 524288,
            310378496: 1074266112,
            327155712: 16384,
            343932928: 1073758208,
            360710144: 1074282512,
            377487360: 16,
            394264576: 1073741824,
            411041792: 1074282496,
            427819008: 1073741840,
            444596224: 1073758224,
            461373440: 524304,
            478150656: 0,
            494927872: 16400,
            511705088: 1074266128,
            528482304: 540672
          },
          {
            0: 260,
            1048576: 0,
            2097152: 67109120,
            3145728: 65796,
            4194304: 65540,
            5242880: 67108868,
            6291456: 67174660,
            7340032: 67174400,
            8388608: 67108864,
            9437184: 67174656,
            10485760: 65792,
            11534336: 67174404,
            12582912: 67109124,
            13631488: 65536,
            14680064: 4,
            15728640: 256,
            524288: 67174656,
            1572864: 67174404,
            2621440: 0,
            3670016: 67109120,
            4718592: 67108868,
            5767168: 65536,
            6815744: 65540,
            7864320: 260,
            8912896: 4,
            9961472: 256,
            11010048: 67174400,
            12058624: 65796,
            13107200: 65792,
            14155776: 67109124,
            15204352: 67174660,
            16252928: 67108864,
            16777216: 67174656,
            17825792: 65540,
            18874368: 65536,
            19922944: 67109120,
            20971520: 256,
            22020096: 67174660,
            23068672: 67108868,
            24117248: 0,
            25165824: 67109124,
            26214400: 67108864,
            27262976: 4,
            28311552: 65792,
            29360128: 67174400,
            30408704: 260,
            31457280: 65796,
            32505856: 67174404,
            17301504: 67108864,
            18350080: 260,
            19398656: 67174656,
            20447232: 0,
            21495808: 65540,
            22544384: 67109120,
            23592960: 256,
            24641536: 67174404,
            25690112: 65536,
            26738688: 67174660,
            27787264: 65796,
            28835840: 67108868,
            29884416: 67109124,
            30932992: 67174400,
            31981568: 4,
            33030144: 65792
          },
          {
            0: 2151682048,
            65536: 2147487808,
            131072: 4198464,
            196608: 2151677952,
            262144: 0,
            327680: 4198400,
            393216: 2147483712,
            458752: 4194368,
            524288: 2147483648,
            589824: 4194304,
            655360: 64,
            720896: 2147487744,
            786432: 2151678016,
            851968: 4160,
            917504: 4096,
            983040: 2151682112,
            32768: 2147487808,
            98304: 64,
            163840: 2151678016,
            229376: 2147487744,
            294912: 4198400,
            360448: 2151682112,
            425984: 0,
            491520: 2151677952,
            557056: 4096,
            622592: 2151682048,
            688128: 4194304,
            753664: 4160,
            819200: 2147483648,
            884736: 4194368,
            950272: 4198464,
            1015808: 2147483712,
            1048576: 4194368,
            1114112: 4198400,
            1179648: 2147483712,
            1245184: 0,
            1310720: 4160,
            1376256: 2151678016,
            1441792: 2151682048,
            1507328: 2147487808,
            1572864: 2151682112,
            1638400: 2147483648,
            1703936: 2151677952,
            1769472: 4198464,
            1835008: 2147487744,
            1900544: 4194304,
            1966080: 64,
            2031616: 4096,
            1081344: 2151677952,
            1146880: 2151682112,
            1212416: 0,
            1277952: 4198400,
            1343488: 4194368,
            1409024: 2147483648,
            1474560: 2147487808,
            1540096: 64,
            1605632: 2147483712,
            1671168: 4096,
            1736704: 2147487744,
            1802240: 2151678016,
            1867776: 4160,
            1933312: 2151682048,
            1998848: 4194304,
            2064384: 4198464
          },
          {
            0: 128,
            4096: 17039360,
            8192: 262144,
            12288: 536870912,
            16384: 537133184,
            20480: 16777344,
            24576: 553648256,
            28672: 262272,
            32768: 16777216,
            36864: 537133056,
            40960: 536871040,
            45056: 553910400,
            49152: 553910272,
            53248: 0,
            57344: 17039488,
            61440: 553648128,
            2048: 17039488,
            6144: 553648256,
            10240: 128,
            14336: 17039360,
            18432: 262144,
            22528: 537133184,
            26624: 553910272,
            30720: 536870912,
            34816: 537133056,
            38912: 0,
            43008: 553910400,
            47104: 16777344,
            51200: 536871040,
            55296: 553648128,
            59392: 16777216,
            63488: 262272,
            65536: 262144,
            69632: 128,
            73728: 536870912,
            77824: 553648256,
            81920: 16777344,
            86016: 553910272,
            90112: 537133184,
            94208: 16777216,
            98304: 553910400,
            102400: 553648128,
            106496: 17039360,
            110592: 537133056,
            114688: 262272,
            118784: 536871040,
            122880: 0,
            126976: 17039488,
            67584: 553648256,
            71680: 16777216,
            75776: 17039360,
            79872: 537133184,
            83968: 536870912,
            88064: 17039488,
            92160: 128,
            96256: 553910272,
            100352: 262272,
            104448: 553910400,
            108544: 0,
            112640: 553648128,
            116736: 16777344,
            120832: 262144,
            124928: 537133056,
            129024: 536871040
          },
          {
            0: 268435464,
            256: 8192,
            512: 270532608,
            768: 270540808,
            1024: 268443648,
            1280: 2097152,
            1536: 2097160,
            1792: 268435456,
            2048: 0,
            2304: 268443656,
            2560: 2105344,
            2816: 8,
            3072: 270532616,
            3328: 2105352,
            3584: 8200,
            3840: 270540800,
            128: 270532608,
            384: 270540808,
            640: 8,
            896: 2097152,
            1152: 2105352,
            1408: 268435464,
            1664: 268443648,
            1920: 8200,
            2176: 2097160,
            2432: 8192,
            2688: 268443656,
            2944: 270532616,
            3200: 0,
            3456: 270540800,
            3712: 2105344,
            3968: 268435456,
            4096: 268443648,
            4352: 270532616,
            4608: 270540808,
            4864: 8200,
            5120: 2097152,
            5376: 268435456,
            5632: 268435464,
            5888: 2105344,
            6144: 2105352,
            6400: 0,
            6656: 8,
            6912: 270532608,
            7168: 8192,
            7424: 268443656,
            7680: 270540800,
            7936: 2097160,
            4224: 8,
            4480: 2105344,
            4736: 2097152,
            4992: 268435464,
            5248: 268443648,
            5504: 8200,
            5760: 270540808,
            6016: 270532608,
            6272: 270540800,
            6528: 270532616,
            6784: 8192,
            7040: 2105352,
            7296: 2097160,
            7552: 0,
            7808: 268435456,
            8064: 268443656
          },
          {
            0: 1048576,
            16: 33555457,
            32: 1024,
            48: 1049601,
            64: 34604033,
            80: 0,
            96: 1,
            112: 34603009,
            128: 33555456,
            144: 1048577,
            160: 33554433,
            176: 34604032,
            192: 34603008,
            208: 1025,
            224: 1049600,
            240: 33554432,
            8: 34603009,
            24: 0,
            40: 33555457,
            56: 34604032,
            72: 1048576,
            88: 33554433,
            104: 33554432,
            120: 1025,
            136: 1049601,
            152: 33555456,
            168: 34603008,
            184: 1048577,
            200: 1024,
            216: 34604033,
            232: 1,
            248: 1049600,
            256: 33554432,
            272: 1048576,
            288: 33555457,
            304: 34603009,
            320: 1048577,
            336: 33555456,
            352: 34604032,
            368: 1049601,
            384: 1025,
            400: 34604033,
            416: 1049600,
            432: 1,
            448: 0,
            464: 34603008,
            480: 33554433,
            496: 1024,
            264: 1049600,
            280: 33555457,
            296: 34603009,
            312: 1,
            328: 33554432,
            344: 1048576,
            360: 1025,
            376: 34604032,
            392: 33554433,
            408: 34603008,
            424: 0,
            440: 34604033,
            456: 1049601,
            472: 1024,
            488: 33555456,
            504: 1048577
          },
          {
            0: 134219808,
            1: 131072,
            2: 134217728,
            3: 32,
            4: 131104,
            5: 134350880,
            6: 134350848,
            7: 2048,
            8: 134348800,
            9: 134219776,
            10: 133120,
            11: 134348832,
            12: 2080,
            13: 0,
            14: 134217760,
            15: 133152,
            2147483648: 2048,
            2147483649: 134350880,
            2147483650: 134219808,
            2147483651: 134217728,
            2147483652: 134348800,
            2147483653: 133120,
            2147483654: 133152,
            2147483655: 32,
            2147483656: 134217760,
            2147483657: 2080,
            2147483658: 131104,
            2147483659: 134350848,
            2147483660: 0,
            2147483661: 134348832,
            2147483662: 134219776,
            2147483663: 131072,
            16: 133152,
            17: 134350848,
            18: 32,
            19: 2048,
            20: 134219776,
            21: 134217760,
            22: 134348832,
            23: 131072,
            24: 0,
            25: 131104,
            26: 134348800,
            27: 134219808,
            28: 134350880,
            29: 133120,
            30: 2080,
            31: 134217728,
            2147483664: 131072,
            2147483665: 2048,
            2147483666: 134348832,
            2147483667: 133152,
            2147483668: 32,
            2147483669: 134348800,
            2147483670: 134217728,
            2147483671: 134219808,
            2147483672: 134350880,
            2147483673: 134217760,
            2147483674: 134219776,
            2147483675: 0,
            2147483676: 133120,
            2147483677: 2080,
            2147483678: 131104,
            2147483679: 134350848
          }
        ];
        var SBOX_MASK = [
          4160749569,
          528482304,
          33030144,
          2064384,
          129024,
          8064,
          504,
          2147483679
        ];
        var DES = C_algo.DES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keyBits = [];
            for (var i = 0; i < 56; i++) {
              var keyBitPos = PC1[i] - 1;
              keyBits[i] = keyWords[keyBitPos >>> 5] >>> 31 - keyBitPos % 32 & 1;
            }
            var subKeys = this._subKeys = [];
            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
              var subKey = subKeys[nSubKey] = [];
              var bitShift = BIT_SHIFTS[nSubKey];
              for (var i = 0; i < 24; i++) {
                subKey[i / 6 | 0] |= keyBits[(PC2[i] - 1 + bitShift) % 28] << 31 - i % 6;
                subKey[4 + (i / 6 | 0)] |= keyBits[28 + (PC2[i + 24] - 1 + bitShift) % 28] << 31 - i % 6;
              }
              subKey[0] = subKey[0] << 1 | subKey[0] >>> 31;
              for (var i = 1; i < 7; i++) {
                subKey[i] = subKey[i] >>> (i - 1) * 4 + 3;
              }
              subKey[7] = subKey[7] << 5 | subKey[7] >>> 27;
            }
            var invSubKeys = this._invSubKeys = [];
            for (var i = 0; i < 16; i++) {
              invSubKeys[i] = subKeys[15 - i];
            }
          },
          encryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._subKeys);
          },
          decryptBlock: function(M, offset) {
            this._doCryptBlock(M, offset, this._invSubKeys);
          },
          _doCryptBlock: function(M, offset, subKeys) {
            this._lBlock = M[offset];
            this._rBlock = M[offset + 1];
            exchangeLR.call(this, 4, 252645135);
            exchangeLR.call(this, 16, 65535);
            exchangeRL.call(this, 2, 858993459);
            exchangeRL.call(this, 8, 16711935);
            exchangeLR.call(this, 1, 1431655765);
            for (var round = 0; round < 16; round++) {
              var subKey = subKeys[round];
              var lBlock = this._lBlock;
              var rBlock = this._rBlock;
              var f = 0;
              for (var i = 0; i < 8; i++) {
                f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
              }
              this._lBlock = rBlock;
              this._rBlock = lBlock ^ f;
            }
            var t = this._lBlock;
            this._lBlock = this._rBlock;
            this._rBlock = t;
            exchangeLR.call(this, 1, 1431655765);
            exchangeRL.call(this, 8, 16711935);
            exchangeRL.call(this, 2, 858993459);
            exchangeLR.call(this, 16, 65535);
            exchangeLR.call(this, 4, 252645135);
            M[offset] = this._lBlock;
            M[offset + 1] = this._rBlock;
          },
          keySize: 64 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        function exchangeLR(offset, mask) {
          var t = (this._lBlock >>> offset ^ this._rBlock) & mask;
          this._rBlock ^= t;
          this._lBlock ^= t << offset;
        }
        function exchangeRL(offset, mask) {
          var t = (this._rBlock >>> offset ^ this._lBlock) & mask;
          this._lBlock ^= t;
          this._rBlock ^= t << offset;
        }
        C.DES = BlockCipher._createHelper(DES);
        var TripleDES = C_algo.TripleDES = BlockCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            if (keyWords.length !== 2 && keyWords.length !== 4 && keyWords.length < 6) {
              throw new Error("Invalid key length - 3DES requires the key length to be 64, 128, 192 or >192.");
            }
            var key1 = keyWords.slice(0, 2);
            var key2 = keyWords.length < 4 ? keyWords.slice(0, 2) : keyWords.slice(2, 4);
            var key3 = keyWords.length < 6 ? keyWords.slice(0, 2) : keyWords.slice(4, 6);
            this._des1 = DES.createEncryptor(WordArray.create(key1));
            this._des2 = DES.createEncryptor(WordArray.create(key2));
            this._des3 = DES.createEncryptor(WordArray.create(key3));
          },
          encryptBlock: function(M, offset) {
            this._des1.encryptBlock(M, offset);
            this._des2.decryptBlock(M, offset);
            this._des3.encryptBlock(M, offset);
          },
          decryptBlock: function(M, offset) {
            this._des3.decryptBlock(M, offset);
            this._des2.encryptBlock(M, offset);
            this._des1.decryptBlock(M, offset);
          },
          keySize: 192 / 32,
          ivSize: 64 / 32,
          blockSize: 64 / 32
        });
        C.TripleDES = BlockCipher._createHelper(TripleDES);
      })();
      return CryptoJS.TripleDES;
    });
  }
});

// node_modules/crypto-js/rc4.js
var require_rc4 = __commonJS({
  "node_modules/crypto-js/rc4.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var RC4 = C_algo.RC4 = StreamCipher.extend({
          _doReset: function() {
            var key = this._key;
            var keyWords = key.words;
            var keySigBytes = key.sigBytes;
            var S = this._S = [];
            for (var i = 0; i < 256; i++) {
              S[i] = i;
            }
            for (var i = 0, j = 0; i < 256; i++) {
              var keyByteIndex = i % keySigBytes;
              var keyByte = keyWords[keyByteIndex >>> 2] >>> 24 - keyByteIndex % 4 * 8 & 255;
              j = (j + S[i] + keyByte) % 256;
              var t = S[i];
              S[i] = S[j];
              S[j] = t;
            }
            this._i = this._j = 0;
          },
          _doProcessBlock: function(M, offset) {
            M[offset] ^= generateKeystreamWord.call(this);
          },
          keySize: 256 / 32,
          ivSize: 0
        });
        function generateKeystreamWord() {
          var S = this._S;
          var i = this._i;
          var j = this._j;
          var keystreamWord = 0;
          for (var n = 0; n < 4; n++) {
            i = (i + 1) % 256;
            j = (j + S[i]) % 256;
            var t = S[i];
            S[i] = S[j];
            S[j] = t;
            keystreamWord |= S[(S[i] + S[j]) % 256] << 24 - n * 8;
          }
          this._i = i;
          this._j = j;
          return keystreamWord;
        }
        C.RC4 = StreamCipher._createHelper(RC4);
        var RC4Drop = C_algo.RC4Drop = RC4.extend({
          /**
           * Configuration options.
           *
           * @property {number} drop The number of keystream words to drop. Default 192
           */
          cfg: RC4.cfg.extend({
            drop: 192
          }),
          _doReset: function() {
            RC4._doReset.call(this);
            for (var i = this.cfg.drop; i > 0; i--) {
              generateKeystreamWord.call(this);
            }
          }
        });
        C.RC4Drop = StreamCipher._createHelper(RC4Drop);
      })();
      return CryptoJS.RC4;
    });
  }
});

// node_modules/crypto-js/rabbit.js
var require_rabbit = __commonJS({
  "node_modules/crypto-js/rabbit.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var Rabbit = C_algo.Rabbit = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            for (var i = 0; i < 4; i++) {
              K[i] = (K[i] << 8 | K[i] >>> 24) & 16711935 | (K[i] << 24 | K[i] >>> 8) & 4278255360;
            }
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.Rabbit = StreamCipher._createHelper(Rabbit);
      })();
      return CryptoJS.Rabbit;
    });
  }
});

// node_modules/crypto-js/rabbit-legacy.js
var require_rabbit_legacy = __commonJS({
  "node_modules/crypto-js/rabbit-legacy.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var StreamCipher = C_lib.StreamCipher;
        var C_algo = C.algo;
        var S = [];
        var C_ = [];
        var G = [];
        var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
          _doReset: function() {
            var K = this._key.words;
            var iv = this.cfg.iv;
            var X = this._X = [
              K[0],
              K[3] << 16 | K[2] >>> 16,
              K[1],
              K[0] << 16 | K[3] >>> 16,
              K[2],
              K[1] << 16 | K[0] >>> 16,
              K[3],
              K[2] << 16 | K[1] >>> 16
            ];
            var C2 = this._C = [
              K[2] << 16 | K[2] >>> 16,
              K[0] & 4294901760 | K[1] & 65535,
              K[3] << 16 | K[3] >>> 16,
              K[1] & 4294901760 | K[2] & 65535,
              K[0] << 16 | K[0] >>> 16,
              K[2] & 4294901760 | K[3] & 65535,
              K[1] << 16 | K[1] >>> 16,
              K[3] & 4294901760 | K[0] & 65535
            ];
            this._b = 0;
            for (var i = 0; i < 4; i++) {
              nextState.call(this);
            }
            for (var i = 0; i < 8; i++) {
              C2[i] ^= X[i + 4 & 7];
            }
            if (iv) {
              var IV = iv.words;
              var IV_0 = IV[0];
              var IV_1 = IV[1];
              var i0 = (IV_0 << 8 | IV_0 >>> 24) & 16711935 | (IV_0 << 24 | IV_0 >>> 8) & 4278255360;
              var i2 = (IV_1 << 8 | IV_1 >>> 24) & 16711935 | (IV_1 << 24 | IV_1 >>> 8) & 4278255360;
              var i1 = i0 >>> 16 | i2 & 4294901760;
              var i3 = i2 << 16 | i0 & 65535;
              C2[0] ^= i0;
              C2[1] ^= i1;
              C2[2] ^= i2;
              C2[3] ^= i3;
              C2[4] ^= i0;
              C2[5] ^= i1;
              C2[6] ^= i2;
              C2[7] ^= i3;
              for (var i = 0; i < 4; i++) {
                nextState.call(this);
              }
            }
          },
          _doProcessBlock: function(M, offset) {
            var X = this._X;
            nextState.call(this);
            S[0] = X[0] ^ X[5] >>> 16 ^ X[3] << 16;
            S[1] = X[2] ^ X[7] >>> 16 ^ X[5] << 16;
            S[2] = X[4] ^ X[1] >>> 16 ^ X[7] << 16;
            S[3] = X[6] ^ X[3] >>> 16 ^ X[1] << 16;
            for (var i = 0; i < 4; i++) {
              S[i] = (S[i] << 8 | S[i] >>> 24) & 16711935 | (S[i] << 24 | S[i] >>> 8) & 4278255360;
              M[offset + i] ^= S[i];
            }
          },
          blockSize: 128 / 32,
          ivSize: 64 / 32
        });
        function nextState() {
          var X = this._X;
          var C2 = this._C;
          for (var i = 0; i < 8; i++) {
            C_[i] = C2[i];
          }
          C2[0] = C2[0] + 1295307597 + this._b | 0;
          C2[1] = C2[1] + 3545052371 + (C2[0] >>> 0 < C_[0] >>> 0 ? 1 : 0) | 0;
          C2[2] = C2[2] + 886263092 + (C2[1] >>> 0 < C_[1] >>> 0 ? 1 : 0) | 0;
          C2[3] = C2[3] + 1295307597 + (C2[2] >>> 0 < C_[2] >>> 0 ? 1 : 0) | 0;
          C2[4] = C2[4] + 3545052371 + (C2[3] >>> 0 < C_[3] >>> 0 ? 1 : 0) | 0;
          C2[5] = C2[5] + 886263092 + (C2[4] >>> 0 < C_[4] >>> 0 ? 1 : 0) | 0;
          C2[6] = C2[6] + 1295307597 + (C2[5] >>> 0 < C_[5] >>> 0 ? 1 : 0) | 0;
          C2[7] = C2[7] + 3545052371 + (C2[6] >>> 0 < C_[6] >>> 0 ? 1 : 0) | 0;
          this._b = C2[7] >>> 0 < C_[7] >>> 0 ? 1 : 0;
          for (var i = 0; i < 8; i++) {
            var gx = X[i] + C2[i];
            var ga = gx & 65535;
            var gb = gx >>> 16;
            var gh = ((ga * ga >>> 17) + ga * gb >>> 15) + gb * gb;
            var gl = ((gx & 4294901760) * gx | 0) + ((gx & 65535) * gx | 0);
            G[i] = gh ^ gl;
          }
          X[0] = G[0] + (G[7] << 16 | G[7] >>> 16) + (G[6] << 16 | G[6] >>> 16) | 0;
          X[1] = G[1] + (G[0] << 8 | G[0] >>> 24) + G[7] | 0;
          X[2] = G[2] + (G[1] << 16 | G[1] >>> 16) + (G[0] << 16 | G[0] >>> 16) | 0;
          X[3] = G[3] + (G[2] << 8 | G[2] >>> 24) + G[1] | 0;
          X[4] = G[4] + (G[3] << 16 | G[3] >>> 16) + (G[2] << 16 | G[2] >>> 16) | 0;
          X[5] = G[5] + (G[4] << 8 | G[4] >>> 24) + G[3] | 0;
          X[6] = G[6] + (G[5] << 16 | G[5] >>> 16) + (G[4] << 16 | G[4] >>> 16) | 0;
          X[7] = G[7] + (G[6] << 8 | G[6] >>> 24) + G[5] | 0;
        }
        C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
      })();
      return CryptoJS.RabbitLegacy;
    });
  }
});

// node_modules/crypto-js/blowfish.js
var require_blowfish = __commonJS({
  "node_modules/crypto-js/blowfish.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_enc_base64(), require_md5(), require_evpkdf(), require_cipher_core());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./enc-base64", "./md5", "./evpkdf", "./cipher-core"], factory);
      } else {
        factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      (function() {
        var C = CryptoJS;
        var C_lib = C.lib;
        var BlockCipher = C_lib.BlockCipher;
        var C_algo = C.algo;
        const N = 16;
        const ORIG_P = [
          608135816,
          2242054355,
          320440878,
          57701188,
          2752067618,
          698298832,
          137296536,
          3964562569,
          1160258022,
          953160567,
          3193202383,
          887688300,
          3232508343,
          3380367581,
          1065670069,
          3041331479,
          2450970073,
          2306472731
        ];
        const ORIG_S = [
          [
            3509652390,
            2564797868,
            805139163,
            3491422135,
            3101798381,
            1780907670,
            3128725573,
            4046225305,
            614570311,
            3012652279,
            134345442,
            2240740374,
            1667834072,
            1901547113,
            2757295779,
            4103290238,
            227898511,
            1921955416,
            1904987480,
            2182433518,
            2069144605,
            3260701109,
            2620446009,
            720527379,
            3318853667,
            677414384,
            3393288472,
            3101374703,
            2390351024,
            1614419982,
            1822297739,
            2954791486,
            3608508353,
            3174124327,
            2024746970,
            1432378464,
            3864339955,
            2857741204,
            1464375394,
            1676153920,
            1439316330,
            715854006,
            3033291828,
            289532110,
            2706671279,
            2087905683,
            3018724369,
            1668267050,
            732546397,
            1947742710,
            3462151702,
            2609353502,
            2950085171,
            1814351708,
            2050118529,
            680887927,
            999245976,
            1800124847,
            3300911131,
            1713906067,
            1641548236,
            4213287313,
            1216130144,
            1575780402,
            4018429277,
            3917837745,
            3693486850,
            3949271944,
            596196993,
            3549867205,
            258830323,
            2213823033,
            772490370,
            2760122372,
            1774776394,
            2652871518,
            566650946,
            4142492826,
            1728879713,
            2882767088,
            1783734482,
            3629395816,
            2517608232,
            2874225571,
            1861159788,
            326777828,
            3124490320,
            2130389656,
            2716951837,
            967770486,
            1724537150,
            2185432712,
            2364442137,
            1164943284,
            2105845187,
            998989502,
            3765401048,
            2244026483,
            1075463327,
            1455516326,
            1322494562,
            910128902,
            469688178,
            1117454909,
            936433444,
            3490320968,
            3675253459,
            1240580251,
            122909385,
            2157517691,
            634681816,
            4142456567,
            3825094682,
            3061402683,
            2540495037,
            79693498,
            3249098678,
            1084186820,
            1583128258,
            426386531,
            1761308591,
            1047286709,
            322548459,
            995290223,
            1845252383,
            2603652396,
            3431023940,
            2942221577,
            3202600964,
            3727903485,
            1712269319,
            422464435,
            3234572375,
            1170764815,
            3523960633,
            3117677531,
            1434042557,
            442511882,
            3600875718,
            1076654713,
            1738483198,
            4213154764,
            2393238008,
            3677496056,
            1014306527,
            4251020053,
            793779912,
            2902807211,
            842905082,
            4246964064,
            1395751752,
            1040244610,
            2656851899,
            3396308128,
            445077038,
            3742853595,
            3577915638,
            679411651,
            2892444358,
            2354009459,
            1767581616,
            3150600392,
            3791627101,
            3102740896,
            284835224,
            4246832056,
            1258075500,
            768725851,
            2589189241,
            3069724005,
            3532540348,
            1274779536,
            3789419226,
            2764799539,
            1660621633,
            3471099624,
            4011903706,
            913787905,
            3497959166,
            737222580,
            2514213453,
            2928710040,
            3937242737,
            1804850592,
            3499020752,
            2949064160,
            2386320175,
            2390070455,
            2415321851,
            4061277028,
            2290661394,
            2416832540,
            1336762016,
            1754252060,
            3520065937,
            3014181293,
            791618072,
            3188594551,
            3933548030,
            2332172193,
            3852520463,
            3043980520,
            413987798,
            3465142937,
            3030929376,
            4245938359,
            2093235073,
            3534596313,
            375366246,
            2157278981,
            2479649556,
            555357303,
            3870105701,
            2008414854,
            3344188149,
            4221384143,
            3956125452,
            2067696032,
            3594591187,
            2921233993,
            2428461,
            544322398,
            577241275,
            1471733935,
            610547355,
            4027169054,
            1432588573,
            1507829418,
            2025931657,
            3646575487,
            545086370,
            48609733,
            2200306550,
            1653985193,
            298326376,
            1316178497,
            3007786442,
            2064951626,
            458293330,
            2589141269,
            3591329599,
            3164325604,
            727753846,
            2179363840,
            146436021,
            1461446943,
            4069977195,
            705550613,
            3059967265,
            3887724982,
            4281599278,
            3313849956,
            1404054877,
            2845806497,
            146425753,
            1854211946
          ],
          [
            1266315497,
            3048417604,
            3681880366,
            3289982499,
            290971e4,
            1235738493,
            2632868024,
            2414719590,
            3970600049,
            1771706367,
            1449415276,
            3266420449,
            422970021,
            1963543593,
            2690192192,
            3826793022,
            1062508698,
            1531092325,
            1804592342,
            2583117782,
            2714934279,
            4024971509,
            1294809318,
            4028980673,
            1289560198,
            2221992742,
            1669523910,
            35572830,
            157838143,
            1052438473,
            1016535060,
            1802137761,
            1753167236,
            1386275462,
            3080475397,
            2857371447,
            1040679964,
            2145300060,
            2390574316,
            1461121720,
            2956646967,
            4031777805,
            4028374788,
            33600511,
            2920084762,
            1018524850,
            629373528,
            3691585981,
            3515945977,
            2091462646,
            2486323059,
            586499841,
            988145025,
            935516892,
            3367335476,
            2599673255,
            2839830854,
            265290510,
            3972581182,
            2759138881,
            3795373465,
            1005194799,
            847297441,
            406762289,
            1314163512,
            1332590856,
            1866599683,
            4127851711,
            750260880,
            613907577,
            1450815602,
            3165620655,
            3734664991,
            3650291728,
            3012275730,
            3704569646,
            1427272223,
            778793252,
            1343938022,
            2676280711,
            2052605720,
            1946737175,
            3164576444,
            3914038668,
            3967478842,
            3682934266,
            1661551462,
            3294938066,
            4011595847,
            840292616,
            3712170807,
            616741398,
            312560963,
            711312465,
            1351876610,
            322626781,
            1910503582,
            271666773,
            2175563734,
            1594956187,
            70604529,
            3617834859,
            1007753275,
            1495573769,
            4069517037,
            2549218298,
            2663038764,
            504708206,
            2263041392,
            3941167025,
            2249088522,
            1514023603,
            1998579484,
            1312622330,
            694541497,
            2582060303,
            2151582166,
            1382467621,
            776784248,
            2618340202,
            3323268794,
            2497899128,
            2784771155,
            503983604,
            4076293799,
            907881277,
            423175695,
            432175456,
            1378068232,
            4145222326,
            3954048622,
            3938656102,
            3820766613,
            2793130115,
            2977904593,
            26017576,
            3274890735,
            3194772133,
            1700274565,
            1756076034,
            4006520079,
            3677328699,
            720338349,
            1533947780,
            354530856,
            688349552,
            3973924725,
            1637815568,
            332179504,
            3949051286,
            53804574,
            2852348879,
            3044236432,
            1282449977,
            3583942155,
            3416972820,
            4006381244,
            1617046695,
            2628476075,
            3002303598,
            1686838959,
            431878346,
            2686675385,
            1700445008,
            1080580658,
            1009431731,
            832498133,
            3223435511,
            2605976345,
            2271191193,
            2516031870,
            1648197032,
            4164389018,
            2548247927,
            300782431,
            375919233,
            238389289,
            3353747414,
            2531188641,
            2019080857,
            1475708069,
            455242339,
            2609103871,
            448939670,
            3451063019,
            1395535956,
            2413381860,
            1841049896,
            1491858159,
            885456874,
            4264095073,
            4001119347,
            1565136089,
            3898914787,
            1108368660,
            540939232,
            1173283510,
            2745871338,
            3681308437,
            4207628240,
            3343053890,
            4016749493,
            1699691293,
            1103962373,
            3625875870,
            2256883143,
            3830138730,
            1031889488,
            3479347698,
            1535977030,
            4236805024,
            3251091107,
            2132092099,
            1774941330,
            1199868427,
            1452454533,
            157007616,
            2904115357,
            342012276,
            595725824,
            1480756522,
            206960106,
            497939518,
            591360097,
            863170706,
            2375253569,
            3596610801,
            1814182875,
            2094937945,
            3421402208,
            1082520231,
            3463918190,
            2785509508,
            435703966,
            3908032597,
            1641649973,
            2842273706,
            3305899714,
            1510255612,
            2148256476,
            2655287854,
            3276092548,
            4258621189,
            236887753,
            3681803219,
            274041037,
            1734335097,
            3815195456,
            3317970021,
            1899903192,
            1026095262,
            4050517792,
            356393447,
            2410691914,
            3873677099,
            3682840055
          ],
          [
            3913112168,
            2491498743,
            4132185628,
            2489919796,
            1091903735,
            1979897079,
            3170134830,
            3567386728,
            3557303409,
            857797738,
            1136121015,
            1342202287,
            507115054,
            2535736646,
            337727348,
            3213592640,
            1301675037,
            2528481711,
            1895095763,
            1721773893,
            3216771564,
            62756741,
            2142006736,
            835421444,
            2531993523,
            1442658625,
            3659876326,
            2882144922,
            676362277,
            1392781812,
            170690266,
            3921047035,
            1759253602,
            3611846912,
            1745797284,
            664899054,
            1329594018,
            3901205900,
            3045908486,
            2062866102,
            2865634940,
            3543621612,
            3464012697,
            1080764994,
            553557557,
            3656615353,
            3996768171,
            991055499,
            499776247,
            1265440854,
            648242737,
            3940784050,
            980351604,
            3713745714,
            1749149687,
            3396870395,
            4211799374,
            3640570775,
            1161844396,
            3125318951,
            1431517754,
            545492359,
            4268468663,
            3499529547,
            1437099964,
            2702547544,
            3433638243,
            2581715763,
            2787789398,
            1060185593,
            1593081372,
            2418618748,
            4260947970,
            69676912,
            2159744348,
            86519011,
            2512459080,
            3838209314,
            1220612927,
            3339683548,
            133810670,
            1090789135,
            1078426020,
            1569222167,
            845107691,
            3583754449,
            4072456591,
            1091646820,
            628848692,
            1613405280,
            3757631651,
            526609435,
            236106946,
            48312990,
            2942717905,
            3402727701,
            1797494240,
            859738849,
            992217954,
            4005476642,
            2243076622,
            3870952857,
            3732016268,
            765654824,
            3490871365,
            2511836413,
            1685915746,
            3888969200,
            1414112111,
            2273134842,
            3281911079,
            4080962846,
            172450625,
            2569994100,
            980381355,
            4109958455,
            2819808352,
            2716589560,
            2568741196,
            3681446669,
            3329971472,
            1835478071,
            660984891,
            3704678404,
            4045999559,
            3422617507,
            3040415634,
            1762651403,
            1719377915,
            3470491036,
            2693910283,
            3642056355,
            3138596744,
            1364962596,
            2073328063,
            1983633131,
            926494387,
            3423689081,
            2150032023,
            4096667949,
            1749200295,
            3328846651,
            309677260,
            2016342300,
            1779581495,
            3079819751,
            111262694,
            1274766160,
            443224088,
            298511866,
            1025883608,
            3806446537,
            1145181785,
            168956806,
            3641502830,
            3584813610,
            1689216846,
            3666258015,
            3200248200,
            1692713982,
            2646376535,
            4042768518,
            1618508792,
            1610833997,
            3523052358,
            4130873264,
            2001055236,
            3610705100,
            2202168115,
            4028541809,
            2961195399,
            1006657119,
            2006996926,
            3186142756,
            1430667929,
            3210227297,
            1314452623,
            4074634658,
            4101304120,
            2273951170,
            1399257539,
            3367210612,
            3027628629,
            1190975929,
            2062231137,
            2333990788,
            2221543033,
            2438960610,
            1181637006,
            548689776,
            2362791313,
            3372408396,
            3104550113,
            3145860560,
            296247880,
            1970579870,
            3078560182,
            3769228297,
            1714227617,
            3291629107,
            3898220290,
            166772364,
            1251581989,
            493813264,
            448347421,
            195405023,
            2709975567,
            677966185,
            3703036547,
            1463355134,
            2715995803,
            1338867538,
            1343315457,
            2802222074,
            2684532164,
            233230375,
            2599980071,
            2000651841,
            3277868038,
            1638401717,
            4028070440,
            3237316320,
            6314154,
            819756386,
            300326615,
            590932579,
            1405279636,
            3267499572,
            3150704214,
            2428286686,
            3959192993,
            3461946742,
            1862657033,
            1266418056,
            963775037,
            2089974820,
            2263052895,
            1917689273,
            448879540,
            3550394620,
            3981727096,
            150775221,
            3627908307,
            1303187396,
            508620638,
            2975983352,
            2726630617,
            1817252668,
            1876281319,
            1457606340,
            908771278,
            3720792119,
            3617206836,
            2455994898,
            1729034894,
            1080033504
          ],
          [
            976866871,
            3556439503,
            2881648439,
            1522871579,
            1555064734,
            1336096578,
            3548522304,
            2579274686,
            3574697629,
            3205460757,
            3593280638,
            3338716283,
            3079412587,
            564236357,
            2993598910,
            1781952180,
            1464380207,
            3163844217,
            3332601554,
            1699332808,
            1393555694,
            1183702653,
            3581086237,
            1288719814,
            691649499,
            2847557200,
            2895455976,
            3193889540,
            2717570544,
            1781354906,
            1676643554,
            2592534050,
            3230253752,
            1126444790,
            2770207658,
            2633158820,
            2210423226,
            2615765581,
            2414155088,
            3127139286,
            673620729,
            2805611233,
            1269405062,
            4015350505,
            3341807571,
            4149409754,
            1057255273,
            2012875353,
            2162469141,
            2276492801,
            2601117357,
            993977747,
            3918593370,
            2654263191,
            753973209,
            36408145,
            2530585658,
            25011837,
            3520020182,
            2088578344,
            530523599,
            2918365339,
            1524020338,
            1518925132,
            3760827505,
            3759777254,
            1202760957,
            3985898139,
            3906192525,
            674977740,
            4174734889,
            2031300136,
            2019492241,
            3983892565,
            4153806404,
            3822280332,
            352677332,
            2297720250,
            60907813,
            90501309,
            3286998549,
            1016092578,
            2535922412,
            2839152426,
            457141659,
            509813237,
            4120667899,
            652014361,
            1966332200,
            2975202805,
            55981186,
            2327461051,
            676427537,
            3255491064,
            2882294119,
            3433927263,
            1307055953,
            942726286,
            933058658,
            2468411793,
            3933900994,
            4215176142,
            1361170020,
            2001714738,
            2830558078,
            3274259782,
            1222529897,
            1679025792,
            2729314320,
            3714953764,
            1770335741,
            151462246,
            3013232138,
            1682292957,
            1483529935,
            471910574,
            1539241949,
            458788160,
            3436315007,
            1807016891,
            3718408830,
            978976581,
            1043663428,
            3165965781,
            1927990952,
            4200891579,
            2372276910,
            3208408903,
            3533431907,
            1412390302,
            2931980059,
            4132332400,
            1947078029,
            3881505623,
            4168226417,
            2941484381,
            1077988104,
            1320477388,
            886195818,
            18198404,
            3786409e3,
            2509781533,
            112762804,
            3463356488,
            1866414978,
            891333506,
            18488651,
            661792760,
            1628790961,
            3885187036,
            3141171499,
            876946877,
            2693282273,
            1372485963,
            791857591,
            2686433993,
            3759982718,
            3167212022,
            3472953795,
            2716379847,
            445679433,
            3561995674,
            3504004811,
            3574258232,
            54117162,
            3331405415,
            2381918588,
            3769707343,
            4154350007,
            1140177722,
            4074052095,
            668550556,
            3214352940,
            367459370,
            261225585,
            2610173221,
            4209349473,
            3468074219,
            3265815641,
            314222801,
            3066103646,
            3808782860,
            282218597,
            3406013506,
            3773591054,
            379116347,
            1285071038,
            846784868,
            2669647154,
            3771962079,
            3550491691,
            2305946142,
            453669953,
            1268987020,
            3317592352,
            3279303384,
            3744833421,
            2610507566,
            3859509063,
            266596637,
            3847019092,
            517658769,
            3462560207,
            3443424879,
            370717030,
            4247526661,
            2224018117,
            4143653529,
            4112773975,
            2788324899,
            2477274417,
            1456262402,
            2901442914,
            1517677493,
            1846949527,
            2295493580,
            3734397586,
            2176403920,
            1280348187,
            1908823572,
            3871786941,
            846861322,
            1172426758,
            3287448474,
            3383383037,
            1655181056,
            3139813346,
            901632758,
            1897031941,
            2986607138,
            3066810236,
            3447102507,
            1393639104,
            373351379,
            950779232,
            625454576,
            3124240540,
            4148612726,
            2007998917,
            544563296,
            2244738638,
            2330496472,
            2058025392,
            1291430526,
            424198748,
            50039436,
            29584100,
            3605783033,
            2429876329,
            2791104160,
            1057563949,
            3255363231,
            3075367218,
            3463963227,
            1469046755,
            985887462
          ]
        ];
        var BLOWFISH_CTX = {
          pbox: [],
          sbox: []
        };
        function F(ctx, x) {
          let a = x >> 24 & 255;
          let b = x >> 16 & 255;
          let c = x >> 8 & 255;
          let d = x & 255;
          let y = ctx.sbox[0][a] + ctx.sbox[1][b];
          y = y ^ ctx.sbox[2][c];
          y = y + ctx.sbox[3][d];
          return y;
        }
        function BlowFish_Encrypt(ctx, left, right) {
          let Xl = left;
          let Xr = right;
          let temp;
          for (let i = 0; i < N; ++i) {
            Xl = Xl ^ ctx.pbox[i];
            Xr = F(ctx, Xl) ^ Xr;
            temp = Xl;
            Xl = Xr;
            Xr = temp;
          }
          temp = Xl;
          Xl = Xr;
          Xr = temp;
          Xr = Xr ^ ctx.pbox[N];
          Xl = Xl ^ ctx.pbox[N + 1];
          return { left: Xl, right: Xr };
        }
        function BlowFish_Decrypt(ctx, left, right) {
          let Xl = left;
          let Xr = right;
          let temp;
          for (let i = N + 1; i > 1; --i) {
            Xl = Xl ^ ctx.pbox[i];
            Xr = F(ctx, Xl) ^ Xr;
            temp = Xl;
            Xl = Xr;
            Xr = temp;
          }
          temp = Xl;
          Xl = Xr;
          Xr = temp;
          Xr = Xr ^ ctx.pbox[1];
          Xl = Xl ^ ctx.pbox[0];
          return { left: Xl, right: Xr };
        }
        function BlowFishInit(ctx, key, keysize) {
          for (let Row = 0; Row < 4; Row++) {
            ctx.sbox[Row] = [];
            for (let Col = 0; Col < 256; Col++) {
              ctx.sbox[Row][Col] = ORIG_S[Row][Col];
            }
          }
          let keyIndex = 0;
          for (let index = 0; index < N + 2; index++) {
            ctx.pbox[index] = ORIG_P[index] ^ key[keyIndex];
            keyIndex++;
            if (keyIndex >= keysize) {
              keyIndex = 0;
            }
          }
          let Data1 = 0;
          let Data2 = 0;
          let res = 0;
          for (let i = 0; i < N + 2; i += 2) {
            res = BlowFish_Encrypt(ctx, Data1, Data2);
            Data1 = res.left;
            Data2 = res.right;
            ctx.pbox[i] = Data1;
            ctx.pbox[i + 1] = Data2;
          }
          for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 256; j += 2) {
              res = BlowFish_Encrypt(ctx, Data1, Data2);
              Data1 = res.left;
              Data2 = res.right;
              ctx.sbox[i][j] = Data1;
              ctx.sbox[i][j + 1] = Data2;
            }
          }
          return true;
        }
        var Blowfish = C_algo.Blowfish = BlockCipher.extend({
          _doReset: function() {
            if (this._keyPriorReset === this._key) {
              return;
            }
            var key = this._keyPriorReset = this._key;
            var keyWords = key.words;
            var keySize = key.sigBytes / 4;
            BlowFishInit(BLOWFISH_CTX, keyWords, keySize);
          },
          encryptBlock: function(M, offset) {
            var res = BlowFish_Encrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
            M[offset] = res.left;
            M[offset + 1] = res.right;
          },
          decryptBlock: function(M, offset) {
            var res = BlowFish_Decrypt(BLOWFISH_CTX, M[offset], M[offset + 1]);
            M[offset] = res.left;
            M[offset + 1] = res.right;
          },
          blockSize: 64 / 32,
          keySize: 128 / 32,
          ivSize: 64 / 32
        });
        C.Blowfish = BlockCipher._createHelper(Blowfish);
      })();
      return CryptoJS.Blowfish;
    });
  }
});

// node_modules/crypto-js/index.js
var require_crypto_js = __commonJS({
  "node_modules/crypto-js/index.js"(exports2, module2) {
    (function(root, factory, undef) {
      if (typeof exports2 === "object") {
        module2.exports = exports2 = factory(require_core(), require_x64_core(), require_lib_typedarrays(), require_enc_utf16(), require_enc_base64(), require_enc_base64url(), require_md5(), require_sha1(), require_sha256(), require_sha224(), require_sha512(), require_sha384(), require_sha3(), require_ripemd160(), require_hmac(), require_pbkdf2(), require_evpkdf(), require_cipher_core(), require_mode_cfb(), require_mode_ctr(), require_mode_ctr_gladman(), require_mode_ofb(), require_mode_ecb(), require_pad_ansix923(), require_pad_iso10126(), require_pad_iso97971(), require_pad_zeropadding(), require_pad_nopadding(), require_format_hex(), require_aes(), require_tripledes(), require_rc4(), require_rabbit(), require_rabbit_legacy(), require_blowfish());
      } else if (typeof define === "function" && define.amd) {
        define(["./core", "./x64-core", "./lib-typedarrays", "./enc-utf16", "./enc-base64", "./enc-base64url", "./md5", "./sha1", "./sha256", "./sha224", "./sha512", "./sha384", "./sha3", "./ripemd160", "./hmac", "./pbkdf2", "./evpkdf", "./cipher-core", "./mode-cfb", "./mode-ctr", "./mode-ctr-gladman", "./mode-ofb", "./mode-ecb", "./pad-ansix923", "./pad-iso10126", "./pad-iso97971", "./pad-zeropadding", "./pad-nopadding", "./format-hex", "./aes", "./tripledes", "./rc4", "./rabbit", "./rabbit-legacy", "./blowfish"], factory);
      } else {
        root.CryptoJS = factory(root.CryptoJS);
      }
    })(exports2, function(CryptoJS) {
      return CryptoJS;
    });
  }
});

// SocialCreditsTab.jsx
var require_SocialCreditsTab = __commonJS({
  "SocialCreditsTab.jsx"(exports2, module2) {
    var React = require("react");
    var SectionHeader = require_SectionHeader();
    var CryptoJS = require_crypto_js();
    var points = 0;
    var currentUser;
    var updatePoints = (newPoints) => {
      points = newPoints;
      NekocordNative.preferences.setForPlugin(
        "cat.kitties.arcane.Essentials",
        "points",
        newPoints
      );
    };
    var isListenerSetUp = false;
    var encrypt = (text, userId) => {
      const encrypted = CryptoJS.AES.encrypt(text, userId).toString();
      return encrypted;
    };
    var decrypt = (encryptedText, userId) => {
      const bytes = CryptoJS.AES.decrypt(encryptedText, userId);
      const decrypted = bytes.toString(CryptoJS.enc.Utf8);
      return decrypted;
    };
    Nekocord.webpackPatcher.onInitializationFinish(() => {
      currentUser = Nekocord.webpackModules.commonModules.UserStore.getCurrentUser();
      if (!isListenerSetUp) {
        const messageCreateListener = ({ message }) => {
          if (message.author.id === currentUser?.id) {
            const savedPoints = NekocordNative.preferences.getForPlugin(
              "cat.kitties.arcane.Essentials",
              "points"
            );
            const decryptedPoints = savedPoints ? decrypt(savedPoints, currentUser.id) : null;
            points = typeof decryptedPoints === "string" && !isNaN(parseInt(decryptedPoints)) ? parseInt(decryptedPoints) : 0;
            const meowKeywords = [
              /:3+/,
              /meow+/,
              /mraow+/,
              /mrew+/,
              /mrow+/,
              /nya+/
            ];
            const newPoints = meowKeywords.some((keyword) => keyword.test(message.content)) ? points + 2 : points + 1;
            updatePoints(encrypt(newPoints.toString(), currentUser.id));
          }
        };
        Nekocord.webpackModules.commonModules.FluxDispatcher.subscribe("MESSAGE_CREATE", messageCreateListener);
        isListenerSetUp = true;
      }
    });
    function SocialCreditsTab2() {
      React.useEffect(() => {
        const savedPoints = NekocordNative.preferences.getForPlugin(
          "cat.kitties.arcane.Essentials",
          "points"
        );
        const decryptedPoints = savedPoints ? decrypt(savedPoints, currentUser.id) : null;
        points = typeof decryptedPoints === "string" && !isNaN(parseInt(decryptedPoints)) ? parseInt(decryptedPoints) : -9999999999;
        return () => {
          if (typeof window !== "undefined" && window.cleanupSocialCreditsListener) {
            window.cleanupSocialCreditsListener();
          }
        };
      }, []);
      const increment = 250;
      const dynamicMaxPoints = Math.max(500, points * 1.5);
      const maxPoints = Math.ceil(dynamicMaxPoints / increment) * increment;
      const minPoints = 0;
      const barWidth = Math.min(Math.max(points, minPoints), maxPoints) / maxPoints * 100;
      const barColor = points < 0 ? "red" : "var(--green, #23a55a)";
      const renderMilestoneImage = () => {
        if (points >= 1e6) {
          return /* @__PURE__ */ React.createElement(
            "img",
            {
              src: "https://preview.redd.it/social-credit-1-000-000-v0-q794inmwz80d1.jpeg?width=686&format=pjpg&auto=webp&s=f1804abf7e16a33d1a4e29a338e3f33849a2d0d3",
              alt: "1 Million Points Milestone",
              style: { width: "100%", marginTop: "10px" }
            }
          );
        } else if (points >= 69420) {
          return /* @__PURE__ */ React.createElement(
            "img",
            {
              src: "https://pbs.twimg.com/media/FIKEF5iWYAAK3lc.jpg",
              alt: "69420 Points Milestone",
              style: { width: "100%", marginTop: "10px" }
            }
          );
        } else if (points >= 15) {
          return /* @__PURE__ */ React.createElement(
            "img",
            {
              src: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da849953080bb37ebb50041c0f42",
              alt: "15 Points Milestone",
              style: { width: "100%", marginTop: "10px" }
            }
          );
        } else if (points === 0) {
          return /* @__PURE__ */ React.createElement(
            "img",
            {
              src: "https://pbs.twimg.com/media/FDVVHxzX0AAwF-r.png",
              alt: "Zero Points Milestone",
              style: { width: "100%", marginTop: "10px" }
            }
          );
        }
        return null;
      };
      return /* @__PURE__ */ React.createElement("div", { className: "theme-import-container" }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "Social Credits" }), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { style: { color: "var(--text-normal)", fontSize: "24px", fontWeight: "bold" } }, "Current Points: ", /* @__PURE__ */ React.createElement("span", { style: { color: "var(--text-normal)" } }, points)), /* @__PURE__ */ React.createElement("div", { style: {
        width: "100%",
        height: "20px",
        backgroundColor: "var(--background-tertiary)",
        borderRadius: "5px",
        overflow: "hidden",
        marginTop: "10px",
        position: "relative",
        // Added for positioning markers
        border: "2px solid var(--border-color)"
        // Outline for the entire graph
      } }, /* @__PURE__ */ React.createElement("div", { style: {
        width: `${barWidth}%`,
        height: "100%",
        backgroundColor: barColor,
        // Use the determined bar color
        transition: "width 0.3s ease"
      } }), [0, 0.25, 0.5, 0.75, 1].map((marker) => /* @__PURE__ */ React.createElement("div", { key: marker, style: {
        position: "absolute",
        left: `${marker * 100}%`,
        height: "100%",
        // Keep the height of the marker
        width: "4px",
        // Width of the marker
        backgroundColor: "var(--text-normal)",
        // Use var(--text-normal) for visibility
        border: "2px solid var(--background-tertiary)",
        // Thicker outline for better visibility
        transform: "translate(-50%, 0)",
        // Center the marker horizontally
        top: "0"
        // Ensure the marker starts at the top of the bar
      } }))), points < 0 && /* @__PURE__ */ React.createElement(
        "img",
        {
          src: "https://static.wikia.nocookie.net/b2f5b823-dd07-493c-b455-a0a31eec2bdf/scale-to-width/755",
          alt: "Negative Points Indicator",
          style: { width: "100%", marginTop: "10px" }
        }
      ), renderMilestoneImage(), " "));
    }
    module2.exports = SocialCreditsTab2;
  }
});

// SearchBar.jsx
var require_SearchBar = __commonJS({
  "SearchBar.jsx"(exports2, module2) {
    var React = require("react");
    function SearchBar({ onSearch }) {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "search-container mb-4",
          style: {
            position: "relative",
            width: "100%"
          }
        },
        /* @__PURE__ */ React.createElement(
          "input",
          {
            type: "text",
            placeholder: "Search settings...",
            onChange: (e) => onSearch(e.target.value),
            className: "search-input",
            style: {
              width: "100%",
              padding: "10px 36px",
              backgroundColor: "var(--background-secondary)",
              border: "1px solid var(--background-modifier-accent)",
              borderRadius: "8px",
              color: "var(--text-normal)",
              fontSize: "14px"
            }
          }
        ),
        /* @__PURE__ */ React.createElement(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 24 24",
            style: {
              position: "absolute",
              left: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--text-muted)"
            }
          },
          /* @__PURE__ */ React.createElement(
            "path",
            {
              fill: "currentColor",
              d: "M21.707 20.293L16.314 14.9C17.403 13.504 18 11.799 18 10C18 5.589 14.411 2 10 2C5.589 2 2 5.589 2 10C2 14.411 5.589 18 10 18C11.799 18 13.504 17.403 14.9 16.314L20.293 21.707L21.707 20.293ZM10 16C6.691 16 4 13.309 4 10C4 6.691 6.691 4 10 4C13.309 4 16 6.691 16 10C16 13.309 13.309 16 10 16Z"
            }
          )
        )
      );
    }
    module2.exports = SearchBar;
  }
});

// SettingsToggle.jsx
var require_SettingsToggle = __commonJS({
  "SettingsToggle.jsx"(exports2, module2) {
    var React = require("react");
    function SettingsToggle({
      label,
      description,
      value,
      onChange,
      previewBefore,
      previewAfter,
      helpText,
      onPreviewClick
    }) {
      const [showHelp, setShowHelp] = React.useState(false);
      const [isAnimating, setIsAnimating] = React.useState(false);
      const handleToggle = () => {
        setIsAnimating(true);
        onChange();
        setTimeout(() => setIsAnimating(false), 300);
      };
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: `mt-4 defaultColor_a595eb setting-toggle ${isAnimating ? "animating" : ""}`,
          style: {
            width: "100%",
            padding: "16px",
            backgroundColor: "var(--background-secondary-alt)",
            borderRadius: "8px",
            transition: "transform 0.2s ease, background-color 0.2s ease",
            border: "1px solid var(--background-modifier-accent)"
          }
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: previewBefore || previewAfter ? "8px" : "0"
            }
          },
          /* @__PURE__ */ React.createElement("div", { style: { flex: 1 } }, /* @__PURE__ */ React.createElement("h3", { className: "text-md/normal_dc00ef", style: { marginBottom: "4px" } }, label), /* @__PURE__ */ React.createElement("p", { className: "text-sm/normal_dc00ef", style: { opacity: 0.7 } }, description)),
          /* @__PURE__ */ React.createElement(
            Nekocord.webpackModules.commonModules.Switch,
            {
              checked: value,
              onChange: handleToggle
            }
          )
        ),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              display: "flex",
              gap: "8px",
              marginTop: "8px",
              alignItems: "center"
            }
          },
          helpText && /* @__PURE__ */ React.createElement(
            "div",
            {
              className: "help-icon",
              onClick: () => setShowHelp(!showHelp),
              style: {
                cursor: "pointer",
                width: "16px",
                height: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                backgroundColor: "var(--background-tertiary)",
                color: "var(--text-muted)",
                fontSize: "12px",
                fontWeight: "bold"
              }
            },
            "?"
          ),
          (previewBefore || previewAfter) && /* @__PURE__ */ React.createElement(
            "button",
            {
              onClick: () => onPreviewClick(previewBefore, previewAfter),
              style: {
                backgroundColor: "transparent",
                border: "none",
                borderRadius: "4px",
                padding: "4px 8px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "var(--interactive-normal)",
                fontSize: "12px",
                marginTop: "8px"
              }
            },
            /* @__PURE__ */ React.createElement("svg", { width: "16", height: "16", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement(
              "path",
              {
                fill: "currentColor",
                d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
              }
            )),
            "Preview"
          )
        ),
        showHelp && helpText && /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "help-tooltip",
            style: {
              backgroundColor: "var(--background-floating)",
              padding: "12px",
              borderRadius: "4px",
              marginTop: "8px",
              color: "var(--text-normal)",
              fontSize: "14px",
              lineHeight: "1.4",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              border: "1px solid var(--background-modifier-accent)"
            }
          },
          helpText
        )
      );
    }
    module2.exports = SettingsToggle;
  }
});

// PreviewModal.jsx
var require_PreviewModal = __commonJS({
  "PreviewModal.jsx"(exports2, module2) {
    var React = require("react");
    function PreviewModal({ previewBefore, previewAfter, onClose }) {
      return /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "preview-modal-backdrop",
          onClick: onClose,
          style: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            animation: "fadeIn 0.2s ease"
          }
        },
        /* @__PURE__ */ React.createElement(
          "div",
          {
            className: "preview-modal-content",
            onClick: (e) => e.stopPropagation(),
            style: {
              backgroundColor: "var(--background-primary)",
              borderRadius: "8px",
              padding: "16px",
              maxWidth: "90vw",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              animation: "scaleIn 0.2s ease"
            }
          },
          /* @__PURE__ */ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }
            },
            /* @__PURE__ */ React.createElement(
              "h2",
              {
                className: "text-md/normal_dc00ef",
                style: { color: "var(--header-primary)" }
              },
              "Preview"
            ),
            /* @__PURE__ */ React.createElement(
              "button",
              {
                onClick: onClose,
                style: {
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: "8px",
                  borderRadius: "4px",
                  color: "var(--interactive-normal)"
                }
              },
              /* @__PURE__ */ React.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement(
                "path",
                {
                  fill: "currentColor",
                  d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"
                }
              ))
            )
          ),
          /* @__PURE__ */ React.createElement(
            "div",
            {
              style: {
                display: "flex",
                gap: "16px",
                overflow: "auto",
                justifyContent: "center"
              }
            },
            previewBefore && /* @__PURE__ */ React.createElement(
              "div",
              {
                style: {
                  flex: "0 1 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }
              },
              /* @__PURE__ */ React.createElement(
                "div",
                {
                  style: { marginBottom: "8px", color: "var(--header-primary)" }
                },
                "Before"
              ),
              /* @__PURE__ */ React.createElement(
                "img",
                {
                  src: previewBefore,
                  alt: "Before preview",
                  style: {
                    maxWidth: "100%",
                    maxHeight: "70vh",
                    objectFit: "contain",
                    borderRadius: "4px",
                    border: "1px solid var(--background-modifier-accent)"
                  }
                }
              )
            ),
            previewAfter && /* @__PURE__ */ React.createElement(
              "div",
              {
                style: {
                  flex: "0 1 auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center"
                }
              },
              /* @__PURE__ */ React.createElement(
                "div",
                {
                  style: { marginBottom: "8px", color: "var(--header-primary)" }
                },
                "After"
              ),
              /* @__PURE__ */ React.createElement(
                "img",
                {
                  src: previewAfter,
                  alt: "After preview",
                  style: {
                    maxWidth: "100%",
                    maxHeight: "70vh",
                    objectFit: "contain",
                    borderRadius: "4px",
                    border: "1px solid var(--background-modifier-accent)"
                  }
                }
              )
            )
          )
        )
      );
    }
    module2.exports = PreviewModal;
  }
});

// utils/createTweak.js
var require_createTweak = __commonJS({
  "utils/createTweak.js"(exports2, module2) {
    function createTweak({
      id,
      label,
      description,
      section,
      css,
      helpText,
      previewBefore,
      previewAfter,
      incompatibleWith = []
    }) {
      return {
        id,
        label,
        description,
        section,
        css,
        helpText,
        previewBefore,
        previewAfter,
        incompatibleWith
      };
    }
    module2.exports = createTweak;
  }
});

// tweaks/visual.js
var require_visual = __commonJS({
  "tweaks/visual.js"(exports2, module2) {
    var createTweak = require_createTweak();
    module2.exports = [
      createTweak({
        id: "Discolored",
        label: "Discolored",
        description: "Colors all of Discord's SVG icons",
        section: "visual",
        css: `@import "https://nyri4.github.io/Discolored/main.css";
         @import url("https://nyri4.github.io/donators/donators.css");`
      }),
      createTweak({
        id: "PastelStatuses",
        label: "Pastel Statuses",
        description: "Changes status colors to pastel variants",
        section: "visual",
        css: `rect[fill='#23a55a'], svg[fill='#23a55a'] { fill: #80c968 !important; }
      rect[fill='#f0b232'], svg[fill='#f0b232'] { fill: #e7ca45 !important; }
      rect[fill='#f23f43'], svg[fill='#f23f43'] { fill: #e0526c !important; }
      rect[fill='#80848e'], svg[fill='#80848e'] { fill: #696e88 !important; }
      rect[fill='#593695'], svg[fill='#593695'] { fill: #ac7de6 !important; }`
      }),
      createTweak({
        id: "LargeEmojis",
        label: "Large Emojis",
        description: "Makes emojis larger when hovered",
        section: "visual",
        css: `img[class="emoji otherEmoji_e58351"]:hover {
      transform: scale(320);
    }`
      }),
      createTweak({
        id: "ReactionAnimations",
        label: "Reaction Animations",
        description: "Adds flip animation to reaction emojis",
        section: "visual",
        css: `[class^=reaction_]:not(:has(.burstGlow_ec6b19)) .emoji {
      transition: transform 0.6s ease;
      transform-style: preserve-3d;
    }
    [class^=reaction_]:not(:has(.burstGlow_ec6b19)):hover .emoji {
      animation: flipAndScale 0.6s forwards;
    }
    @keyframes flipAndScale {
      from { transform: rotateY(0deg) scale(1); }
      to { transform: rotateY(360deg) scale(1.5); }
    }`
      }),
      createTweak({
        id: "CustomNewMemberBadge",
        label: "Custom New Member Badge",
        description: "Replaces the new member badge with a custom one",
        section: "visual",
        css: `[class*=newMemberBadge]:before {
      content: url(https://media.discordapp.net/stickers/1272085262205325352.gif?size=64&quality=lossless);
      transform: translate(-100%, -110%);
      display: inline-block;
      scale: 0.32;
    }`
      }),
      createTweak({
        id: "ProfileThemeMatching",
        label: "Profile Status Matching",
        description: "Makes profile status match theme colors",
        section: "visual",
        css: `.custom-profile-theme [class^=statusBubble_] [class^=defaultColor_] {
      color: var(--theme-text-color-dark) !important;
    }
    .custom-profile-theme [class^=statusBubble_],
    .custom-profile-theme [class^=statusBubbleOuter_]:before,
    .custom-profile-theme [class^=statusBubbleOuter_]:after {
      background-color: var(--profile-gradient-button-color) !important;
    }`
      }),
      createTweak({
        id: "RevertProfiles",
        label: "Revert Profiles",
        description: "Reverts user profiles to the classic layout (incompatible with Profile Status Matching)",
        section: "visual",
        css: `@import url("https://raw.githubusercontent.com/Bitslayn/RepluggedAddons/main/themes/btw.bitslayn.revertProfiles/raw/main.css");`
      }),
      createTweak({
        id: "CoolCodeBlocks",
        label: "Cool Code Blocks",
        description: "Pretty code blocks with snake animation and pastel gradients",
        section: "visual",
        css: `@import url("https://github.com/senshastic/SneshCord/raw/refs/heads/master/Font%20packs/SneshCodeBlocks.css");`
      }),
      createTweak({
        id: "UnsimplifyBios",
        label: "Un-Simplify Bios",
        description: "Shows full bios in simplified profiles",
        section: "visual",
        css: `[class^="descriptionClamp_"] {
      display: block!important;
    }`
      }),
      createTweak({
        id: "ChannelHover",
        label: "Channel Hover Effects",
        description: "Adds smooth sliding animations when hovering over channels, DMs, and settings",
        section: "visual",
        css: `.wrapper_d8bfb3 .link_d8bfb3,
    .membersWrap_cbd271 .container_e9f61e,
    .channel_c91bad,
    .side_a0 .item_a0 {
      transition: margin-left 0.2s ease;
    }
    .wrapper_d8bfb3:hover .link_d8bfb3,
    .side_a0 .item_a0:hover {
      margin-left: 10px;
    }
    .membersWrap_cbd271 .container_e9f61e:hover,
    .channel_c91bad:hover {
      margin-left: 18px;
    }`
      }),
      createTweak({
        id: "ButtonHover",
        label: "Button Hover Effects",
        description: "Adds rotation animations to various buttons when hovered",
        section: "visual",
        css: `button.button_ae40a4 {
      border-radius: 50%;
    }
    .button_ae40a4:last-child,
    .attachButton__56f98 .attachButtonInner__84c26,
    .emojiButton_b63c38 .contents__322f4,
    .closeButton__8177f {
      transition: transform 1s ease;
    }
    .button_ae40a4:last-child:hover,
    .attachButton__56f98:hover .attachButtonInner__84c26,
    .emojiButton_b63c38:hover .contents__322f4,
    .closeButton__8177f:hover {
      transform: rotate(360deg);
    }`
      })
    ];
  }
});

// tweaks/coreUI.js
var require_coreUI = __commonJS({
  "tweaks/coreUI.js"(exports2, module2) {
    var createTweak = require_createTweak();
    module2.exports = [
      createTweak({
        id: "ForumImprovements",
        label: "Forum Improvements",
        description: "Enhanced forum layout and functionality",
        section: "coreUI",
        css: `@import url("https://minidiscordthemes.github.io/Snippets/ForumImprovements/main.css");`,
        helpText: `This improves the layout and functionality of the forum:
\u2022 Improved spacing
\u2022 Enhanced navigation
\u2022 Better organization`,
        previewAfter: "https://arcane.kitties.cat/assets/essentials/forumimprovements-beforeafter.png"
      }),
      createTweak({
        id: "HideNoPermissionChat",
        label: "Hide No Permission Chat",
        description: "Hides chat input when you don't have permission to send messages",
        section: "coreUI",
        css: `[class*=channelTextAreaDisabled] {
      display: none!important;
      opacity: 0!important;
      position: absolute!important;
      height: 0px!important;
      width: 0px!important;
      z-index: 0!important;
    }`
      }),
      createTweak({
        id: "CollapsibleMessageActions",
        label: "Collapsible Message Actions",
        description: "Hides message actions until message is hovered",
        section: "coreUI",
        css: `[class^=buttonsInner_]:not(:hover)>:is(
      [role=button]:not(:last-child), [class^=separator_]
    ) {
      display: none;
    }`,
        helpText: "This hides message actions until you hover over a message, Hides actions like reactions and replies"
      }),
      createTweak({
        id: "ChatHeaderServerList",
        label: "Chat Header Server List",
        description: "makes the chat header into the server list with horizontal server list",
        section: "coreUI",
        css: `
      @import url("https://discordstyles.github.io/HorizontalServerList/dist/HorizontalServerList.css");
      @import url(https://raw.githubusercontent.com/SEELE1306/CSS-Snippets/refs/heads/main/Snippets/ToolbarHide/import.css);
      :root {
        --tb-width: 370px;
        --HSL-server-icon-size: 40px;  /* Size of the server icons | DEFAULT: 40px */
        --HSL-server-spacing: 10px;  /* Spacing between each server icon | DEFAULT: 10px */
        --HSL-server-direction: column; /* Direct of the server list. | Options: column, column-reverse | DEFAULT: column */
      }
      [class^="title_"] {
        max-height: 0px !important;
        min-height: 0px !important;
        padding: 0px;
        border: 0px;

        div:not([class^="topic_"]) {
          overflow: visible !important;
        }

        [class^="children_"]::after {
          display: none;
        }
      }

      [class^="titleWrapper_"],
      [class^="title_"] [class^="divider_"],
      [class^="title_"] [class^="children_"] > [class^="iconWrapper_"] {
        display: none;
      }
      [class^="topic_"] {
      display: none!important;
      }

      html:has([class^="toolbar_"]:hover) [class^="topic_"], [class^="topic_"]:hover {
        position: absolute;
        top: 0px;
        left: calc(100vw - var(--tb-width) - var(--tb-width) / 1.5 - 10px);
        width: calc(var(--tb-width) + 10px);
        overflow: hidden !important;
        background-color: var(--background-tertiary);
        padding: 5px;
        display: block!important;
        border-bottom-left-radius: 8px;
      }

      [class^="toolbar_"] {
        position: absolute;
        top: calc(var(--HSL-server-icon-size) / -1 - 4px);
        left: calc(100% - 12px);
        height: 32px;
        width: 0px;
        &::before {
          position: absolute;
          top: -1px;
        }

        &:hover::before {
          padding: calc(var(--HSL-server-icon-size) / 2.5);
          padding-left: var(--tb-width) !important;
        }

      }

      [class^="footer_"] {
        height: calc(var(--HSL-server-icon-size) * 2.5 );
        transition: height 150ms ease 0s;
      }

      html:has([class^="toolbar_"]:hover) [class^="footer_"] {
        max-height: var(--tb-width) !important;
        min-height: var(--tb-width) !important;
      }

      [class^="footer_"] [class^="listItem_"] {
        display: none;
      }

      [class^="unreadMentionsIndicatorBottom_"] {
        transition: padding-bottom 150ms ease 0s;
      }

      html:has([class^="toolbar_"]:hover) [class^="unreadMentionsIndicatorBottom_"] {
        padding-bottom: calc(var(--tb-width) - 50px) !important;
      }

      [class^="children_"]:has(div>[class^="avatar_"]) {
        display: none;
      }

      [class*="base"], [class^="chat_"] {
          overflow: visible!important;
      }
      [href="https://support.discord.com"] {
        display: none;
      }
    `,
        helpText: "removes the chat header and makes it into the server list with horizontal server list, while additionally removing the help and discover button because they are useless"
      }),
      createTweak({
        id: "HorizontalServerList",
        label: "Horizontal Server List",
        description: "Makes the server list horizontal at the top",
        section: "coreUI",
        css: `@import url("https://discordstyles.github.io/HorizontalServerList/dist/HorizontalServerList.css");`,
        helpText: "This makes the server list horizontal and at the top"
      }),
      createTweak({
        id: "CollapsibleMessageActionsAlt",
        label: "Collapsible Message Actions (Shift)",
        description: "Hides message actions until message is hovered or shift is held",
        section: "coreUI",
        css: `[class^=buttonsInner_]:not(:hover, :has([d^="M16.32 14.72a1 1 0 0 1"]))>:is(
      [role=button]:not(:last-child), [class^=separator_]
    ) {
      display: none;
    }`,
        helpText: "This hides message actions until you hover over a message or hold shift, Hides actions like reactions and replies"
      }),
      createTweak({
        id: "BetterMessageButtons",
        label: "Better Message Buttons",
        description: "Organizes message buttons in a grid with Reply and Edit separated",
        section: "coreUI",
        css: `@import url("https://raw.githubusercontent.com/Andrew6rant/Discord-plugins-and-themes/refs/heads/main/BetterMessageButtons.theme.css");`,
        helpText: "This organizes message buttons in a grid layout where buttons are grouped together",
        previewBefore: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-before.png",
        previewAfter: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-after.png"
      }),
      createTweak({
        id: "BetterMessageButtonsAlt",
        label: "Better Message Buttons (Alt)",
        description: "Same as above, but also separates the Forward button",
        section: "coreUI",
        css: `@import url("https://raw.githubusercontent.com/Andrew6rant/Discord-plugins-and-themes/refs/heads/main/BetterMessageButtonsAlternate.theme.css");`,
        helpText: "Same as above, but also separates the Forward button",
        previewBefore: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-before.png",
        previewAfter: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttonsalt-after.png"
      }),
      createTweak({
        id: "MoveForwardButton",
        label: "Move Forward Button",
        description: "Reorders message buttons to preserve muscle memory",
        section: "coreUI",
        css: `.buttonsInner_d5deea {
      display: flex;
      flex-direction: row;
    }
    .hoverBarButton_e986d9[aria-label="Forward"] {
      order: 1;
      margin-right: 2px;
    }
    .hoverBarButton_e986d9[aria-label="Edit"] {
      order: 2;
    }
    .hoverBarButton_e986d9[aria-label="Add Reaction"] {
      order: 2;
    }
    .hoverBarButton_e986d9[aria-label="Reply"] {
      order: 3;
    }
    .hoverBarButton_e986d9[aria-label="More"] {
      order: 4;
    }`,
        helpText: "This reorders message buttons to put the Reply button where it used to be",
        previewBefore: "https://arcane.kitties.cat/assets/essentials/moveforwardbutton-before.png",
        previewAfter: "https://arcane.kitties.cat/assets/essentials/moveforwardbutton-after.png"
      }),
      createTweak({
        id: "RemoveForwardButton",
        label: "Remove Forward Button",
        description: "Completely removes the Forward button from message actions",
        section: "coreUI",
        css: `.hoverBarButton_e986d9[aria-label="Forward"] {
      display: none !important;
    }`,
        helpText: "This removes the useless Forward button from message actions"
      }),
      createTweak({
        id: "RemoveSettingsAds",
        label: "Remove Settings Ads",
        description: "Removes Nitro and Boost tabs from settings",
        section: "coreUI",
        css: `div.side_a0 > div.item_a0[data-tab-id="Discord Nitro"] {
      display: none !important;
    }
    div.side_a0 > div.item_a0[data-tab-id="Nitro Server Boost"] {
      display: none !important;
    }`,
        helpText: "This removes Nitro and Boost tabs from the settings menu"
      }),
      createTweak({
        id: "EfficientSettings",
        label: "Efficient Settings",
        description: "Shortens the right-click settings menu by hiding options that just open the full settings menu",
        section: "coreUI",
        css: `@import url("https://minidiscordthemes.github.io/Snippets/EfficientSettings/main.css");`,
        helpText: "This shortens the right-click settings menu by hiding options that just open the full settings menu"
      }),
      createTweak({
        id: "DisableSuperReactionAd",
        label: "Disable Super Reaction Ad",
        description: "Prevents the Super Reaction popup from appearing when clicking reactions",
        section: "coreUI",
        css: `.reaction_fef95b[style*="background"] {
      pointer-events: none;
    }`,
        helpText: "This prevents the Super Reaction popup from appearing"
      }),
      createTweak({
        id: "HidePinDiscovery",
        label: "Hide Pinned Discovery",
        description: "Hides the new pinned Discovery Icon",
        section: "coreUI",
        css: `@import url("https://raw.githubusercontent.com/KrstlSkll69/vc-snippets/main/OtherStuff/hideGlobalDiscovery.css");`,
        helpText: "This hides the new pinned Discovery Icon"
      }),
      createTweak({
        id: "RightServerList",
        label: "Right Server List",
        description: "Moves the server list to the right side",
        section: "coreUI",
        css: `
      [class*="wrapper_"][class*="guilds_"] { /*Server bar*/
        order: 1;
      }

      [class^="listItem_"] [class*="pill_"][class*="wrapper_"] { /*Server unread mention*/
        left: initial;
        right: 0;
      }
      
      [class^="listItem_"] [class*="pill_"][class*="wrapper_"] [class^="item_"] {
        border-radius: 4px 0 0 4px;
        margin-left: 4px;
      }
    `,
        helpText: "This moves the server list to the right side"
      }),
      createTweak({
        id: "RightChannelList",
        label: "Right Channel List",
        description: "Moves the channel list to the right side (may have issues with forums)",
        section: "coreUI",
        css: `
      [class^="sidebar_"] { /*Channel bar*/
        order: 1;
      }

      [class^="base_"] [class^="chatLayerWrapper_"] [class^="container_"] { /*slightly fixes forums when switching channel list*/
        margin-right: 240px;
      }
    `,
        helpText: "This moves the channel list to the right side"
      }),
      createTweak({
        id: "LeftMemberList",
        label: "Left Member List",
        description: "Moves the member list to the left side",
        section: "coreUI",
        css: `
      [class^="chat_"] [class^="content"]:has([class*="chatContent_"]) { /*Member list*/
        flex-direction: row-reverse;
      }
      
      [class^="chat_"] [class^="content"]:has([data-list-id*="forum-channel-list"]) { /*channel list*/
        flex-direction: row-reverse;
      }

      [class^="base_"] [class^="content_"] div:not([class]) { /*Slightly fixes forums when switching member list*/
        min-width: 0 !important;
      }
    `,
        helpText: "This moves the member list to the left side"
      }),
      createTweak({
        id: "ChannelServers",
        label: "Channel-Style Servers",
        description: "Makes the server list look more like the channel list",
        section: "coreUI",
        css: `
      @import url("https://dablulite.github.io/css-snippets/ServersList/import.css");
      :root {
        --guild-list-width: 290px;
        --guild-list-height: 48px;
        --guild-item-radius: 50px;
        --guild-item-spacing: 8px;
        --guild-item-font-size: 16px;
      }
    `,
        helpText: "This makes the server list look more like the channel list"
      })
    ];
  }
});

// tweaks/interface.js
var require_interface = __commonJS({
  "tweaks/interface.js"(exports2, module2) {
    var createTweak = require_createTweak();
    module2.exports = [
      createTweak({
        id: "AccountSettingsRefresh",
        label: "Account Settings Refresh",
        description: "A fresh take on the Account Settings area",
        section: "interface",
        css: `@import url("https://dablulite.github.io/css-snippets/AccountSettingsRefresh/import.css");`,
        helpText: "This provides a fresh look at the Account Settings area, with a new layout",
        previewBefore: "https://arcane.kitties.cat/assets/essentials/accountsettingsrefresh-before.png",
        previewAfter: "https://arcane.kitties.cat/assets/essentials/accountsettingsrefresh-after.png"
      }),
      createTweak({
        id: "AppearanceTabImprovements",
        label: "Appearance Tab Improvements",
        description: "Better organized appearance settings",
        section: "interface",
        css: `div[id="appearance-tab"] div [class*=children] {
      div[tabindex="-1"] { order: 0; }
      div[class*=marginTop8_]:nth-of-type(3) { order: 1; }
      div[class*=marginTop8_]:nth-of-type(2) { order: 3; }
      div[class*=marginTop20_] { order: 10; }
    }
    div[id="appearance-tab"] {
      div[aria-label="Exclusive to Nitro"] svg[class*=nitroWheel],
      h3[data-text-variant="text-sm/normal"],
      h3[aria-label="Color"] { display: none; }
    }`,
        helpText: "This improves the appearance of the Appearance Tab with a Better layout and improved organization"
      }),
      createTweak({
        id: "GradientDMs",
        label: "Gradient DMs",
        description: "Adds gradient backgrounds to DM list and member list based on status",
        section: "interface",
        css: `@import url('https://ukriu.github.io/cssCord/Other/gradientDM.css');
    @import url('https://ukriu.github.io/cssCord/Other/gradientML.css');
    :root {
      --gDM-online: linear-gradient(to right, rgb(68, 105, 68) , transparent);
      --gDM-offline: linear-gradient(to right, rgb(66, 66, 66) , transparent);
      --gDM-dnd: linear-gradient(to right, rgb(130,70,70) , transparent);
      --gDM-idle: linear-gradient(to right, rgb(135, 105, 75) , transparent);
      --gDM-streaming: linear-gradient(to right, rgb(63, 33, 88) , transparent);
      --gDM-border-radius: 12px;
    }`
      }),
      createTweak({
        id: "AccountDetailsGrid",
        label: "Account Details Grid",
        description: "Reorganizes the account details panel into a grid layout",
        section: "interface",
        css: `@import url("https://dablulite.github.io/css-snippets/AccountDetailsGrid/import.css");`,
        helpText: "This reorganizes the account details panel into a grid layout"
      }),
      createTweak({
        id: "HidePlayAgain",
        label: "Hide Play Again",
        description: "Hides the Play Again section in DMs",
        section: "interface",
        css: `[data-list-id^=private-channels] [class^=container_]:has(> [class^=itemContainer_] [class^=clickable_][aria-label]) {
      display: none;
    }`,
        helpText: "This hides the Play Again section in DMs"
      }),
      createTweak({
        id: "FullServerTooltips",
        label: "Full Server Tooltips",
        description: "Shows the complete server name in tooltips without line breaks",
        section: "interface",
        css: `[class^=tooltip] {
      max-width: unset !important;
    }`,
        helpText: "This shows the complete server name in tooltips without line breaks"
      }),
      createTweak({
        id: "CenteredChannelNames",
        label: "Centered Channel Names",
        description: "Centers channel names in the header",
        section: "interface",
        css: `[class^="children_"]:not(:has([class^="topic_"])) [class^="titleWrapper_"] {
      width: 100%;
      > h1 {
        justify-content: center;
      }
    }
    [class^="children_"]:has(.topic_bf3bbb) [class^="titleWrapper_"] {
      width: 50%;
      > h1 {
        justify-content: flex-end;
      }
    }
    [class^="title_"] [class^="children_"] [class^="iconWrapper_"] {
      display: none;
    }`,
        helpText: "This centers channel names in the header, and hides channel descriptions"
      }),
      createTweak({
        id: "RecolorAddFriendsTab",
        label: "Recolor Add Friends Tab",
        description: "This Snippet fixes the 'Add Friend' so it match's the other tabs",
        section: "interface",
        css: `@import url("https://raw.githubusercontent.com/KrstlSkll69/vc-snippets/main/OtherStuff/RecolorAddFriendsTab.css");`,
        helpText: "This changes the 'Add Friend' so it match's the other tabs"
      }),
      createTweak({
        id: "BetterPickers",
        label: "Better Pickers",
        description: "Changes purple to grey in the soundboard and emoji picker",
        section: "interface",
        css: `[class^=lockedEmoji_]:has(+[class*=emojiLockIconContainer_]),
    [class*=categorySectionNitroLocked_] [class*=emojiItem_]>img,
    [class*=soundRowNitroLocked_] [class^=soundButton_] {
      filter: grayscale(1) brightness(0.75);
    }
    [class^=emojiLockIconContainer_],
    [class^=picker_] [class^=sectionFooter_],
    :is(#emoji-picker-tab-panel, [class^=picker_]) :is(
      [class^=upsellContainer_],
      [class^=nitroBottomDivider_],
      [class^=categoryItemLockIconContainer_]
    ) {
      display: none;
    }`,
        helpText: "This changes the color of the soundboard and emoji picker to fit the theme"
      }),
      createTweak({
        id: "RepositionAppLauncher",
        label: "Reposition App Launcher",
        description: "Moves the app launcher above the chat input to avoid muscle memory conflicts",
        section: "interface",
        css: `      .channelTextArea_a7d72e {
        position: relative;
      }

      .channelAppLauncher_df39bd {
        position: absolute;
        top: -50px;
        right: 16px;
      }`,
        helpText: "This moves the app launcher above the chat input to avoid muscle memory conflicts",
        previewBefore: "https://arcane.kitties.cat/assets/essentials/repositionapplauncher-before.png",
        previewAfter: "https://arcane.kitties.cat/assets/essentials/repositionapplauncher-after.png"
      }),
      createTweak({
        id: "RemoveAppLauncher",
        label: "Remove App Launcher",
        description: "Removes the new app launcher button entirely",
        section: "interface",
        css: `      [class*=channelAppLauncher_] {
        display: none;
      }`,
        helpText: "This removes the new app launcher button entirely"
      }),
      createTweak({
        id: "LeftFavButton",
        label: "Left Favorite Button",
        description: "Moves the favorite button back to the left in GIF search",
        section: "interface",
        css: `[class*='result_'] [class*='favButton'] {
        right: unset;
      }`,
        previewBefore: "https://arcane.kitties.cat/assets/essentials/leftfavbutton-before.png",
        previewAfter: "https://arcane.kitties.cat/assets/essentials/leftfavbutton-after.png"
      })
    ];
  }
});

// tweaks/chat.js
var require_chat = __commonJS({
  "tweaks/chat.js"(exports2, module2) {
    var createTweak = require_createTweak();
    module2.exports = [
      createTweak({
        id: "CustomChatPlaceholder",
        label: "Custom Chat Placeholder",
        description: 'Changes the chat placeholder to "be silly :3"',
        section: "chat",
        css: `:root{ --prompt-text: "be silly :3"; }
      [class*=placeholder][class*=slateTextArea] {visibility: hidden;}
      [class*=placeholder][class*=slateTextArea]::before {visibility: visible;content: var(--prompt-text);}`
      }),
      createTweak({
        id: "CustomChatPlaceholderAlt",
        label: "Silly \xDE User Chat Placeholder",
        description: 'Changes the chat placeholder to "be silly, use \xFE :3"',
        section: "chat",
        css: `:root{ --prompt-text: "be silly, use \xFE :3"; }
      [class*=placeholder][class*=slateTextArea] {visibility: hidden;}
      [class*=placeholder][class*=slateTextArea]::before {visibility: visible;content: var(--prompt-text);}`
      }),
      createTweak({
        id: "ChannelTweaks",
        label: "Channel Tweaks",
        description: "Enhances channel list with better spacing and organization",
        section: "chat",
        css: `@import url("https://aushevahmad.github.io/awesome-css/modules/channeltweaks.css");`,
        helpText: "This improves the channel list layout, such as a more compact and organized look"
      }),
      createTweak({
        id: "HideTimestamps",
        label: "Hide Timestamps",
        description: "Hides message timestamps until hovered",
        section: "chat",
        css: `.timestampInline__430cf {
      visibility: hidden;
    }
    .text-md-normal__6e567 .timestampInline__430cf {
      visibility: visible; 
    }`
      }),
      createTweak({
        id: "ScrollingText",
        label: "Scrolling Text",
        description: "Adds scrolling animation to long header text",
        section: "chat",
        css: `.header_a0:hover .headerText_a0 {
      animation: scrollText 8s linear infinite;
      width: 12rem;
    }
    @keyframes scrollText {
      0% { transform: translateX(0); }
      100% { transform: translateX(-100%); }
    }`
      }),
      createTweak({
        id: "BiggerSummaries",
        label: "Bigger Summaries",
        description: "Increases the size of forum topic summaries",
        section: "chat",
        css: `div[class^=topicsScroller_] {
      max-height: calc(100vh - 2.5in);
    }
    :has(> div[class^=topicsScroller_]) {
      width: calc(100% - 8q);
    }`
      }),
      createTweak({
        id: "IRCTheme",
        label: "IRC Theme",
        description: "Classic IRC-style chat layout (requires compact mode)",
        section: "chat",
        css: `@import url("https://raw.githubusercontent.com/foxf4ce/discord-css/refs/heads/main/irc.css");
    :root {
      --font-code: monospace;
      --irc-indent: 3;
      --irc-newline-indent: 8;
      --irc-reply-indent: 8;
      --irc-reply-spine-length: 3;
    }`,
        previewAfter: "https://arcane.kitties.cat/assets/essentials/irctheme-after.png"
      }),
      createTweak({
        id: "DualLineChatbox",
        label: "Dual-Line Chatbox",
        description: "Makes the chatbox have a dual-line layout",
        section: "chat",
        css: `[class^="channelTextArea_"] [class^="inner_"] {
  flex-direction: column;
     [class^="separator_"] {
      margin-left: auto;
    }
  }

[class^="inner_"]:has([class^="attachWrapper_"])  > [class^="buttons_"] {

    margin-left: 32px;
}
[class^="attachWrapper_"] {
  top: calc(100% - 69px);
  position: fixed;
}`,
        helpText: "This makes the chatbox have a dual-line layout, useful for like the person with too many toolbar buttons ig. Send message button reccomended!"
      }),
      createTweak({
        id: "SeamlessChatBar",
        label: "Seamless Chat Bar",
        description: "Makes the chatbar look more seamless, like a single section",
        section: "chat",
        css: `@import url("https://nspc911.github.io/vc-themes/SeamlessChatBar.theme.css");`,
        helpText: "Moves the <x> is typing, slow mode is enabled and You're reading older messages to be above the message bar while making them look as if they are part of the chat bar",
        previewBefore: "https://arcane.kitties.cat/assets/essentials/seamlesschatbar-before.png",
        previewAfter: "https://arcane.kitties.cat/assets/essentials/seamlesschatbar-after.png"
      })
    ];
  }
});

// tweaks/fun.js
var require_fun = __commonJS({
  "tweaks/fun.js"(exports2, module2) {
    var createTweak = require_createTweak();
    module2.exports = [
      createTweak({
        id: "DiscordHardcore",
        label: "Discord Hardcore Mode",
        description: "Makes Discord significantly more... something...",
        section: "fun",
        css: `html {
      filter: blur(1px) saturate(100);
    }
    [class*=blobContainer_] {
      transform: rotate(180deg) scale(0.5);
    }
    [class*=guilds_] {
      width: 40px;
    }
    [class*=sidebar_] {
      width: 120px;
    }
    [class*=messageContent_] {
      opacity: 0.1;
    }
    [class*=form_] {
      transform: translateY(70%);
    }`,
        helpText: "This mode adds various visual challenges to Discord to make it the worst thing ever"
      }),
      createTweak({
        id: "GayFolders",
        label: "Gay Folders",
        description: "Adds rainbow animation to folders containing 'gay' in their name",
        section: "fun",
        css: `@keyframes rainbowBackgroundTransparent {
      0% { background-color: rgba(255, 0, 0, 0.4); }      /* Red */
      16% { background-color: rgba(255, 165, 0, 0.4); }    /* Orange */
      33% { background-color: rgba(255, 255, 0, 0.4); }    /* Yellow */
      50% { background-color: rgba(0, 128, 0, 0.4); }      /* Green */
      66% { background-color: rgba(0, 0, 255, 0.4); }      /* Blue */
      83% { background-color: rgba(75, 0, 130, 0.4); }     /* Indigo */
      100% { background-color: rgba(238, 130, 238, 0.4); } /* Violet */
    }
    @keyframes rainbow {
      0% { color: rgba(255, 0, 0, 1); }      /* Red */
      16% { color: rgba(255, 165, 0, 1); }    /* Orange */
      33% { color: rgba(255, 255, 0, 1); }    /* Yellow */
      50% { color: rgba(0, 128, 0, 1); }      /* Green */
      66% { color: rgba(0, 0, 255, 1); }      /* Blue */
      83% { color: rgba(75, 0, 130, 1); }     /* Indigo */
      100% { color: rgba(238, 130, 238, 1); } /* Violet */
    }
    [aria-label*=gay] [class*=folderIconWrapper] {
      animation: rainbowBackgroundTransparent 5s infinite;
      transition: background-color 0.5s ease;
    }
    [aria-label*=gay] [class*=folderIconWrapper] svg {
      animation: rainbow 5s infinite;
      transition: color 0.5s ease;
    }`
      }),
      createTweak({
        id: "BouncyWebm",
        label: "Bouncy Webm",
        description: "Makes webm files bounce the chat around like the good old days",
        section: "fun",
        css: `[class*="inlineMediaEmbed"] {
      max-height: max-content !important;
      max-width: max-content !important;
    }
    [class*="loadingOverlay"] {
      aspect-ratio: unset !important;
    }
    [class*="imageWrapper"] {
      aspect-ratio: unset !important;
      width: max-content !important;
      height: max-content !important;
    }
    [class*="oneByOneGrid"] {
      max-height: max-content !important;
    }
    [class*="wrapperPaused"] {
      width: max-content;
      height: max-content;
    }`
      }),
      createTweak({
        id: "TransBoost",
        label: "Trans Boost",
        description: "Changes the server boost gradient to the best flag ever.",
        section: "fun",
        css: `body {
      --guild-boosting-blue: #60d0fa, #f5acba, #ffffff;
      --guild-boosting-purple: #ffffff, #f5acba, #60d0fa;
    }`
      }),
      createTweak({
        id: "ClippyStatus",
        label: "Clippy Status",
        description: "Turns status in new profiles into Clippy-style speech bubble (incompatible with Profile Status Matching/Revert Profiles)",
        section: "fun",
        css: `@font-face {
      font-family: w95;
      src: url("https://saltssaumure.github.io/w9x-discord-theme/font/w95fa.woff2")
    }
    .outer_c69a7b .statusBubble_af9888,
    .outer_c69a7b .statusBubbleOuter_af9888,
    .outer_c69a7b .statusBubbleOuter_af9888::before,
    .panel_c69a7b .statusBubble_af9888,
    .panel_c69a7b .statusBubbleOuter_af9888,
    .panel_c69a7b .statusBubbleOuter_af9888::before  {
      background-color: #ffc
    }
    .outer_c69a7b .statusBubbleOuter_af9888,
    .panel_c69a7b .statusBubbleOuter_af9888 {
      border-radius: 12px;
      border: 1px solid #000
    }
    .outer_c69a7b .statusBubbleOuter_af9888::before,
    .panel_c69a7b .statusBubbleOuter_af9888::before {
      border: 1px solid #000;
      border-radius: 0;
      inset: unset;
      height: 6px;
      width: 12px;
      top: 10px;
      transform: skewX(60deg);
      left: -6px
    }
    .statusBubble_af9888 {
      border-radius: 10px;
      padding: 6px
    }
    .content_af9888  {
      color: #000
    }
    .statusText_af9888 {
      color: inherit;
      font-family: "w95", var(--font-primary)
    }
    .outer_c69a7b .statusBubbleOuter_af9888::after,
    .panel_c69a7b .statusBubbleOuter_af9888::after {
      display: none
    }`
      })
    ];
  }
});

// tweaks/oneko.js
var require_oneko = __commonJS({
  "tweaks/oneko.js"(exports2, module2) {
    var createTweak = require_createTweak();
    module2.exports = [
      // Oneko tweaks
      createTweak({
        id: "EeveeOneko",
        label: "Eevee Oneko",
        description: "Replaces the Oneko cat with an Eevee",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/LuSaffi/VenCordstuff/blob/main/Images/eevee.png?raw=true) !important;}`
      }),
      createTweak({
        id: "CalicoOneko",
        label: "Calico Oneko",
        description: "Replaces the Oneko cat with a Calico cat",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://raw.githubusercontent.com/coolesding/onekocord/refs/heads/main/skins/calico.png) !important;}`
      }),
      createTweak({
        id: "FoxOneko",
        label: "Fox Oneko",
        description: "Replaces the Oneko cat with a Fox",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/fox.png?raw=true) !important;}`
      }),
      createTweak({
        id: "TransOneko",
        label: "Trans Oneko",
        description: "Replaces the Oneko cat with a Trans cat!!",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://raw.githubusercontent.com/Lylythii/OnekoStyles/refs/heads/main/pride/trans.png?raw=true) !important;}`
      }),
      createTweak({
        id: "GhostOneko",
        label: "Ghost Oneko",
        description: "Replaces the Oneko cat with a Ghost cat",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/ghost.png?raw=true) !important;}`
      }),
      createTweak({
        id: "GreyOneko",
        label: "Grey Oneko",
        description: "Replaces the Oneko cat with a Grey cat",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/gray.png?raw=true) !important;}`
      }),
      createTweak({
        id: "KinaOneko",
        label: "Kina Oneko",
        description: "Replaces the Oneko cat with Kina",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/kina.png?raw=true) !important;}`
      }),
      createTweak({
        id: "LucyOneko",
        label: "Lucy Oneko",
        description: "Replaces the Oneko cat with Lucy",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/lucy.png?raw=true) !important;}`
      }),
      createTweak({
        id: "MaiaOneko",
        label: "Maia Oneko",
        description: "Replaces the Oneko cat with Maia",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/maia.png?raw=true) !important;}`
      }),
      createTweak({
        id: "MariaOneko",
        label: "Maria Oneko",
        description: "Replaces the Oneko cat with Maria",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/maria.png?raw=true) !important;}`
      }),
      createTweak({
        id: "MikeOneko",
        label: "Mike Oneko",
        description: "Replaces the Oneko cat with Mike",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/mike.png?raw=true) !important;}`
      }),
      createTweak({
        id: "SilverOneko",
        label: "Silver Oneko",
        description: "Replaces the Oneko cat with Silver",
        section: "oneko",
        css: `div[id*=oneko] {
      background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/silver.png?raw=true) !important;
    }`
      }),
      createTweak({
        id: "SilverskyOneko",
        label: "Silversky Oneko",
        description: "Replaces the Oneko cat with Silversky",
        section: "oneko",
        css: `div[id*=oneko] {
      background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/silversky.png?raw=true) !important;
    }`
      }),
      createTweak({
        id: "SnuupyOneko",
        label: "Snuupy Oneko",
        description: "Replaces the Oneko cat with Snuupy",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/snuupy.png?raw=true) !important;}`
      }),
      createTweak({
        id: "SpiritOneko",
        label: "Spirit Oneko",
        description: "Replaces the Oneko cat with Spirit",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/spirit.png?raw=true) !important;}`
      }),
      createTweak({
        id: "ToraOneko",
        label: "Tora Oneko",
        description: "Replaces the Oneko cat with Tora",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/tora.png?raw=true) !important;}`
      }),
      createTweak({
        id: "ValentineOneko",
        label: "Valentine Oneko",
        description: "Replaces the Oneko cat with Valentine",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/valentine.png?raw=true) !important;}`
      }),
      createTweak({
        id: "AceOneko",
        label: "Ace Oneko",
        description: "Replaces the Oneko cat with Ace",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/ace.png?raw=true) !important;}`
      }),
      createTweak({
        id: "MonoOneko",
        label: "Mono Oneko",
        description: "Replaces the Oneko cat with Mono",
        section: "oneko",
        css: `div[id*=oneko] {
      background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/black.png?raw=true) !important;
    }`
      }),
      createTweak({
        id: "BunnyOneko",
        label: "Bunny Oneko",
        description: "Replaces the Oneko cat with Bunny",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/bunny.png?raw=true) !important;}`
      }),
      createTweak({
        id: "EsmeraldaOneko",
        label: "Esmeralda Oneko",
        description: "Replaces the Oneko cat with Esmeralda",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/esmeralda.png?raw=true) !important;}`
      }),
      createTweak({
        id: "JessOneko",
        label: "Jess Oneko",
        description: "Replaces the Oneko cat with Jess",
        section: "oneko",
        css: `div[id*=oneko] {background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/jess.png?raw=true) !important;}`
      })
    ];
  }
});

// tweaks/index.js
var require_tweaks = __commonJS({
  "tweaks/index.js"(exports2, module2) {
    module2.exports = [
      ...require_visual(),
      ...require_coreUI(),
      ...require_interface(),
      ...require_chat(),
      ...require_fun(),
      ...require_oneko()
    ];
  }
});

// components/CoreUISection.jsx
var require_CoreUISection = __commonJS({
  "components/CoreUISection.jsx"(exports2, module2) {
    var React = require("react");
    var SettingsToggle = require_SettingsToggle();
    var SectionHeader = require_SectionHeader();
    var tweaks2 = require_tweaks();
    function CoreUISection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
      const coreTweaks = tweaks2.filter((tweak) => tweak.section === "coreUI");
      return /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "Core UI Improvements" }), /* @__PURE__ */ React.createElement("div", { className: `${settings.GridView ? "settings-grid" : ""} mt-8` }, coreTweaks.map((tweak) => filterSettings(tweak.label, tweak.description) && /* @__PURE__ */ React.createElement(
        SettingsToggle,
        {
          key: tweak.id,
          label: tweak.label,
          description: tweak.description,
          value: settings[tweak.id],
          onChange: () => handleToggle(tweak.id),
          helpText: tweak.helpText,
          previewBefore: tweak.previewBefore,
          previewAfter: tweak.previewAfter,
          onPreviewClick: tweak.previewBefore || tweak.previewAfter ? () => handlePreviewClick(tweak.previewBefore, tweak.previewAfter) : void 0
        }
      ))));
    }
    module2.exports = CoreUISection;
  }
});

// components/InterfaceSection.jsx
var require_InterfaceSection = __commonJS({
  "components/InterfaceSection.jsx"(exports2, module2) {
    var React = require("react");
    var SettingsToggle = require_SettingsToggle();
    var SectionHeader = require_SectionHeader();
    var tweaks2 = require_tweaks();
    function InterfaceSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
      const interfaceTweaks = tweaks2.filter((tweak) => tweak.section === "interface");
      return /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "Interface Tweaks" }), /* @__PURE__ */ React.createElement("div", { className: settings.GridView ? "settings-grid" : "" }, interfaceTweaks.map((tweak) => filterSettings(tweak.label, tweak.description) && /* @__PURE__ */ React.createElement(
        SettingsToggle,
        {
          key: tweak.id,
          label: tweak.label,
          description: tweak.description,
          value: settings[tweak.id],
          onChange: () => handleToggle(tweak.id),
          helpText: tweak.helpText,
          previewBefore: tweak.previewBefore,
          previewAfter: tweak.previewAfter,
          onPreviewClick: tweak.previewBefore || tweak.previewAfter ? () => handlePreviewClick(tweak.previewBefore, tweak.previewAfter) : void 0
        }
      ))));
    }
    module2.exports = InterfaceSection;
  }
});

// components/ChatSection.jsx
var require_ChatSection = __commonJS({
  "components/ChatSection.jsx"(exports2, module2) {
    var React = require("react");
    var SettingsToggle = require_SettingsToggle();
    var SectionHeader = require_SectionHeader();
    var tweaks2 = require_tweaks();
    function ChatSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
      const chatTweaks = tweaks2.filter((tweak) => tweak.section === "chat");
      return /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "Chat Features" }), /* @__PURE__ */ React.createElement("div", { className: `${settings.GridView ? "settings-grid" : ""} mt-8` }, chatTweaks.map((tweak) => filterSettings(tweak.label, tweak.description) && /* @__PURE__ */ React.createElement(
        SettingsToggle,
        {
          key: tweak.id,
          label: tweak.label,
          description: tweak.description,
          value: settings[tweak.id],
          onChange: () => handleToggle(tweak.id),
          helpText: tweak.helpText,
          previewBefore: tweak.previewBefore,
          previewAfter: tweak.previewAfter,
          onPreviewClick: tweak.previewBefore || tweak.previewAfter ? () => handlePreviewClick(tweak.previewBefore, tweak.previewAfter) : void 0
        }
      ))));
    }
    module2.exports = ChatSection;
  }
});

// components/VisualSection.jsx
var require_VisualSection = __commonJS({
  "components/VisualSection.jsx"(exports2, module2) {
    var React = require("react");
    var SettingsToggle = require_SettingsToggle();
    var SectionHeader = require_SectionHeader();
    var tweaks2 = require_tweaks();
    function VisualSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
      const visualTweaks = tweaks2.filter((tweak) => tweak.section === "visual");
      return /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "Visual Tweaks" }), /* @__PURE__ */ React.createElement("div", { className: `${settings.GridView ? "settings-grid" : ""} mt-8` }, visualTweaks.map((tweak) => filterSettings(tweak.label, tweak.description) && /* @__PURE__ */ React.createElement(
        SettingsToggle,
        {
          key: tweak.id,
          label: tweak.label,
          description: tweak.description,
          value: settings[tweak.id],
          onChange: () => handleToggle(tweak.id),
          helpText: tweak.helpText,
          previewBefore: tweak.previewBefore,
          previewAfter: tweak.previewAfter,
          onPreviewClick: tweak.previewBefore || tweak.previewAfter ? () => handlePreviewClick(tweak.previewBefore, tweak.previewAfter) : void 0
        }
      ))));
    }
    module2.exports = VisualSection;
  }
});

// components/FunSection.jsx
var require_FunSection = __commonJS({
  "components/FunSection.jsx"(exports2, module2) {
    var React = require("react");
    var SettingsToggle = require_SettingsToggle();
    var SectionHeader = require_SectionHeader();
    var tweaks2 = require_tweaks();
    function FunSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
      const funTweaks = tweaks2.filter((tweak) => tweak.section === "fun");
      return /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "Fun & Experimental" }), /* @__PURE__ */ React.createElement("div", { className: `${settings.GridView ? "settings-grid" : ""} mt-8` }, funTweaks.map((tweak) => filterSettings(tweak.label, tweak.description) && /* @__PURE__ */ React.createElement(
        SettingsToggle,
        {
          key: tweak.id,
          label: tweak.label,
          description: tweak.description,
          value: settings[tweak.id],
          onChange: () => handleToggle(tweak.id),
          helpText: tweak.helpText,
          previewBefore: tweak.previewBefore,
          previewAfter: tweak.previewAfter,
          onPreviewClick: tweak.previewBefore || tweak.previewAfter ? () => handlePreviewClick(tweak.previewBefore, tweak.previewAfter) : void 0
        }
      ))));
    }
    module2.exports = FunSection;
  }
});

// ThemeImportTab.jsx
var require_ThemeImportTab = __commonJS({
  "ThemeImportTab.jsx"(exports2, module2) {
    var React = require("react");
    var SectionHeader = require_SectionHeader();
    var applyThemeUrls2 = (urlsText) => {
      if (!document.head) return;
      const existingStyles = document.querySelectorAll(
        '[id^="essentials-themeimport-"]'
      );
      existingStyles.forEach((style) => style.remove());
      const urlList = urlsText.split(/[\n,]+/).map((url) => url.trim()).filter((url) => url);
      urlList.forEach((url, index) => {
        const styleElement = document.createElement("style");
        styleElement.id = `essentials-themeimport-${index}`;
        styleElement.textContent = `@import url("${url}");`;
        document.head.appendChild(styleElement);
      });
    };
    function ThemeImportTab2() {
      const [urls, setUrls] = React.useState("");
      React.useEffect(() => {
        const savedUrls = NekocordNative.preferences.getForPlugin(
          "cat.kitties.arcane.Essentials",
          "themeimport"
        );
        if (savedUrls) {
          setUrls(savedUrls);
          applyThemeUrls2(savedUrls);
        }
      }, []);
      const handleUrlsChange = (event) => {
        const newUrls = event.target.value;
        setUrls(newUrls);
        NekocordNative.preferences.setForPlugin(
          "cat.kitties.arcane.Essentials",
          "themeimport",
          newUrls
        );
        applyThemeUrls2(newUrls);
      };
      const handleClear = () => {
        setUrls("");
        NekocordNative.preferences.setForPlugin(
          "cat.kitties.arcane.Essentials",
          "themeimport",
          ""
        );
        applyThemeUrls2("");
      };
      return /* @__PURE__ */ React.createElement("div", { className: "theme-import-container" }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "Theme Import" }), /* @__PURE__ */ React.createElement("div", { className: "header-container", style: { marginBottom: "24px" } }, /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "defaultColor_a595eb text-md/normal_dc00ef",
          style: { opacity: 0.8, lineHeight: "1.5" }
        },
        /* @__PURE__ */ React.createElement("p", null, "Import themes by URL. Add each theme URL on a new line or separate with commas."),
        /* @__PURE__ */ React.createElement(
          "p",
          {
            style: {
              color: "var(--brand-experiment)",
              fontSize: "13px",
              marginTop: "4px",
              fontStyle: "italic"
            }
          }
        )
      )), /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "button-container",
          style: {
            display: "flex",
            gap: "8px",
            marginBottom: "16px",
            justifyContent: "flex-end"
          }
        },
        /* @__PURE__ */ React.createElement(
          "button",
          {
            onClick: handleClear,
            className: "button-f14gos",
            style: {
              padding: "8px 16px",
              borderRadius: "4px",
              backgroundColor: "var(--button-danger-background)",
              color: "var(--text-normal)",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              transition: "background-color 0.2s, transform 0.2s",
              ":hover": {
                transform: "translateY(-1px)",
                filter: "brightness(1.1)"
              }
            }
          },
          "Clear All"
        )
      ), /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "textarea-container",
          style: {
            backgroundColor: "var(--background-secondary)",
            borderRadius: "8px",
            padding: "2px",
            border: "1px solid var(--background-tertiary)",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
          }
        },
        /* @__PURE__ */ React.createElement(
          "textarea",
          {
            value: urls,
            onChange: handleUrlsChange,
            className: "input_d266e7",
            wrap: "off",
            style: {
              width: "100%",
              height: "400px",
              backgroundColor: "var(--background-secondary)",
              color: "var(--text-normal)",
              padding: "16px",
              borderRadius: "8px",
              fontFamily: "var(--font-code), monospace",
              resize: "vertical",
              border: "none",
              outline: "none",
              fontSize: "14px",
              lineHeight: "1.5",
              caretColor: "var(--brand-experiment)",
              whiteSpace: "pre",
              overflowX: "scroll",
              overflowY: "auto",
              "&::after": {
                content: '""',
                display: "inline-block",
                width: "32px",
                height: "1px"
              },
              "&::-webkit-input-placeholder": {
                fontSize: "13px"
              },
              "&::-moz-placeholder": {
                fontSize: "13px"
              },
              "&:-ms-input-placeholder": {
                fontSize: "13px"
              },
              "&::placeholder": {
                fontSize: "13px"
              }
            },
            spellCheck: "false",
            placeholder: "Enter theme URLs here...\n\nExamples:\nhttps://example.com/theme1.css\nhttps://example.com/theme2.css\n\nOr separate with commas:\nhttps://example.com/theme1.css, https://example.com/theme2.css"
          }
        )
      ));
    }
    module2.exports = { ThemeImportTab: ThemeImportTab2, applyThemeUrls: applyThemeUrls2 };
  }
});

// components/M0chaTweaksTab.jsx
var require_M0chaTweaksTab = __commonJS({
  "components/M0chaTweaksTab.jsx"(exports2, module2) {
    var React = require("react");
    var SearchBar = require_SearchBar();
    var SettingsToggle = require_SettingsToggle();
    var SectionHeader = require_SectionHeader();
    var PreviewModal = require_PreviewModal();
    var CoreUISection = require_CoreUISection();
    var InterfaceSection = require_InterfaceSection();
    var ChatSection = require_ChatSection();
    var VisualSection = require_VisualSection();
    var FunSection = require_FunSection();
    var tweaks2 = require_tweaks();
    var { applyThemeUrls: applyThemeUrls2 } = require_ThemeImportTab();
    function M0chaTweaksTab2() {
      const [settings, setSettings] = React.useState({});
      const [searchTerm, setSearchTerm] = React.useState("");
      const [showStats, setShowStats] = React.useState(false);
      const [previewModalState, setPreviewModalState] = React.useState({
        isOpen: false,
        before: null,
        after: null
      });
      const enabledCounts = React.useMemo(() => {
        const countBySection = (section) => tweaks2.filter(
          (tweak) => tweak.section === section && settings[tweak.id]
        ).length;
        return {
          coreUI: countBySection("coreUI"),
          interface: countBySection("interface"),
          chat: countBySection("chat"),
          visual: countBySection("visual"),
          fun: countBySection("fun"),
          oneko: countBySection("oneko"),
          get total() {
            return this.coreUI + this.interface + this.chat + this.visual + this.fun + this.oneko;
          }
        };
      }, [settings]);
      React.useEffect(() => {
        const savedPrefs = NekocordNative.preferences.getForPlugin(
          "cat.kitties.arcane.Essentials",
          "settings"
        );
        if (savedPrefs) {
          setSettings(savedPrefs);
        }
      }, []);
      const handleToggle = (settingKey) => {
        setSettings((prev) => {
          const newSettings = {
            ...prev,
            [settingKey]: !prev[settingKey]
          };
          NekocordNative.preferences.setForPlugin(
            "cat.kitties.arcane.Essentials",
            "settings",
            newSettings
          );
          window.dispatchEvent(new CustomEvent("essentials-settings-changed"));
          const ThemeImportURLS = NekocordNative.preferences.getForPlugin(
            "cat.kitties.arcane.Essentials",
            "themeimport"
          );
          if (ThemeImportURLS) {
            applyThemeUrls2(ThemeImportURLS);
          }
          return newSettings;
        });
      };
      const filterSettings = (label, description) => {
        if (!searchTerm) return true;
        const search = searchTerm.toLowerCase();
        return label.toLowerCase().includes(search) || description.toString().toLowerCase().includes(search);
      };
      const handlePreviewClick = (before, after) => {
        setPreviewModalState({
          isOpen: true,
          before,
          after
        });
      };
      return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "defaultColor_a595eb text-md/normal_dc00ef" }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "M0chaTweaks Settings" })), /* @__PURE__ */ React.createElement("div", { className: "defaultColor_a595eb text-md/normal_dc00ef mb-8" }, /* @__PURE__ */ React.createElement(SearchBar, { onSearch: setSearchTerm }), /* @__PURE__ */ React.createElement("div", { className: "view-controls mt-4", style: { display: "flex", gap: "16px" } }, /* @__PURE__ */ React.createElement(
        SettingsToggle,
        {
          label: "Grid View",
          description: "Toggle between grid and list view",
          value: settings.GridView,
          onChange: () => handleToggle("GridView")
        }
      ), /* @__PURE__ */ React.createElement(
        SettingsToggle,
        {
          label: "Show Statistics",
          description: "Toggle statistics visibility",
          value: showStats,
          onChange: () => setShowStats(!showStats)
        }
      )), showStats && /* @__PURE__ */ React.createElement(
        "div",
        {
          className: "stats-container mt-4 mb-4",
          style: {
            backgroundColor: "var(--background-secondary)",
            padding: "16px",
            borderRadius: "8px",
            border: "1px solid var(--background-modifier-accent)"
          }
        },
        /* @__PURE__ */ React.createElement("h3", { style: { marginBottom: "8px" } }, "Enabled Settings"),
        /* @__PURE__ */ React.createElement(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "8px"
            }
          },
          /* @__PURE__ */ React.createElement("div", null, "Total: ", enabledCounts.total),
          /* @__PURE__ */ React.createElement("div", null, "Core UI: ", enabledCounts.coreUI),
          /* @__PURE__ */ React.createElement("div", null, "Interface: ", enabledCounts.interface),
          /* @__PURE__ */ React.createElement("div", null, "Chat: ", enabledCounts.chat),
          /* @__PURE__ */ React.createElement("div", null, "Visual: ", enabledCounts.visual),
          /* @__PURE__ */ React.createElement("div", null, "Fun: ", enabledCounts.fun)
        )
      )), /* @__PURE__ */ React.createElement(
        CoreUISection,
        {
          settings,
          filterSettings,
          handleToggle,
          handlePreviewClick
        }
      ), /* @__PURE__ */ React.createElement(
        InterfaceSection,
        {
          settings,
          filterSettings,
          handleToggle,
          handlePreviewClick
        }
      ), /* @__PURE__ */ React.createElement(
        ChatSection,
        {
          settings,
          filterSettings,
          handleToggle,
          handlePreviewClick
        }
      ), /* @__PURE__ */ React.createElement(
        VisualSection,
        {
          settings,
          filterSettings,
          handleToggle,
          handlePreviewClick
        }
      ), /* @__PURE__ */ React.createElement(
        FunSection,
        {
          settings,
          filterSettings,
          handleToggle,
          handlePreviewClick
        }
      ), /* @__PURE__ */ React.createElement("style", null, `
          .container_c669ee {
            width: 42px;
            height: 24px;
            position: relative;
            flex-shrink: 0;
          }

          .slider_c669ee {
            width: 100%;
            height: 100%;
            background-color: var(--background-tertiary);
            border-radius: 12px;
            transition: all .15s ease;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
          }

          .slider_c669ee.checked_c669ee {
            background-color: var(--status-positive);
          }

          .handle_c669ee {
            position: absolute;
            top: 2px;
            left: 2px;
            width: 20px;
            height: 20px;
            background-color: var(--interactive-normal);
            border-radius: 10px;
            transition: all .15s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }

          .slider_c669ee.checked_c669ee .handle_c669ee {
            left: 20px;
            background-color: #fff;
          }

          .icon_c669ee {
            width: 12px;
            height: 12px;
            color: var(--background-primary);
            opacity: 0.7;
          }

          .slider_c669ee.checked_c669ee .icon_c669ee {
            color: var(--status-positive);
          }

          .settings-section {
            animation: fadeIn 0.3s ease;
            padding-top: 16px;  /* Added top padding */
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .settings-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .settings-grid > div {
            margin-top: 0 !important;
          }

          .view-toggle {
            max-width: 300px;
          }

          .search-input:focus {
            outline: none;
            border-color: var(--brand-experiment);
            box-shadow: 0 0 0 1px var(--brand-experiment);
          }

          .search-input::placeholder {
            color: var(--text-muted);
          }

          // Add transition for smooth filtering
          .settings-section > div > div {
            transition: opacity 0.2s ease;
          }

          // Hide empty sections
          .settings-section:not(:has(> div > div:visible)) {
            display: none;
          }

          .setting-toggle {
            transform: scale(1);
          }

          .setting-toggle.animating {
            animation: togglePulse 0.3s ease;
          }

          @keyframes togglePulse {
            0% { transform: scale(1); }
            50% { transform: scale(0.98); }
            100% { transform: scale(1); }
          }

          /* Enhance existing transitions */
          .slider_c669ee {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .handle_c669ee {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .icon_c669ee {
            transition: opacity 0.2s ease;
          }
        `), previewModalState.isOpen && /* @__PURE__ */ React.createElement(
        PreviewModal,
        {
          previewBefore: previewModalState.before,
          previewAfter: previewModalState.after,
          onClose: () => setPreviewModalState({ isOpen: false, before: null, after: null })
        }
      ));
    }
    module2.exports = M0chaTweaksTab2;
  }
});

// components/OnekoSection.jsx
var require_OnekoSection = __commonJS({
  "components/OnekoSection.jsx"(exports2, module2) {
    var React = require("react");
    var SettingsToggle = require_SettingsToggle();
    var SectionHeader = require_SectionHeader();
    var tweaks2 = require_tweaks();
    function OnekoSection({ settings, filterSettings, handleToggle, handlePreviewClick }) {
      const onekoTweaks = tweaks2.filter((tweak) => tweak.section === "oneko");
      return /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "" }), /* @__PURE__ */ React.createElement("div", { className: `${settings.GridView ? "settings-grid" : ""} mt-8` }, onekoTweaks.map((tweak) => filterSettings(tweak.label, tweak.description) && /* @__PURE__ */ React.createElement(
        SettingsToggle,
        {
          key: tweak.id,
          label: tweak.label,
          description: tweak.description,
          value: settings[tweak.id],
          onChange: () => handleToggle(tweak.id),
          helpText: tweak.helpText,
          previewBefore: tweak.previewBefore,
          previewAfter: tweak.previewAfter,
          onPreviewClick: tweak.previewBefore || tweak.previewAfter ? () => handlePreviewClick(tweak.previewBefore, tweak.previewAfter) : void 0
        }
      ))));
    }
    module2.exports = OnekoSection;
  }
});

// components/NekoSkinsTab.jsx
var require_NekoSkinsTab = __commonJS({
  "components/NekoSkinsTab.jsx"(exports2, module2) {
    var React = require("react");
    var SettingsToggle = require_SettingsToggle();
    var PreviewModal = require_PreviewModal();
    var OnekoSection = require_OnekoSection();
    var SectionHeader = require_SectionHeader();
    var tweaks2 = require_tweaks();
    function NekoSkinsTab2() {
      const [settings, setSettings] = React.useState({});
      const [searchTerm, setSearchTerm] = React.useState("");
      const [showStats, setShowStats] = React.useState(false);
      const [previewModalState, setPreviewModalState] = React.useState({
        isOpen: false,
        before: null,
        after: null
      });
      const enabledCounts = React.useMemo(() => {
        const countBySection = (section) => tweaks2.filter(
          (tweak) => tweak.section === section && settings[tweak.id]
        ).length;
        return {
          oneko: countBySection("oneko"),
          get total() {
            return this.coreUI + this.interface + this.chat + this.visual + this.fun + this.oneko;
          }
        };
      }, [settings]);
      React.useEffect(() => {
        const savedPrefs = NekocordNative.preferences.getForPlugin(
          "cat.kitties.arcane.Essentials",
          "settings"
        );
        if (savedPrefs) {
          setSettings(savedPrefs);
        }
      }, []);
      const handleToggle = (settingKey) => {
        setSettings((prev) => {
          const newSettings = {
            ...prev,
            [settingKey]: !prev[settingKey]
          };
          NekocordNative.preferences.setForPlugin(
            "cat.kitties.arcane.Essentials",
            "settings",
            newSettings
          );
          window.dispatchEvent(new CustomEvent("essentials-settings-changed"));
          return newSettings;
        });
      };
      const filterSettings = (label, description) => {
        if (!searchTerm) return true;
        const search = searchTerm.toLowerCase();
        return label.toLowerCase().includes(search) || description.toString().toLowerCase().includes(search);
      };
      const handlePreviewClick = (before, after) => {
        setPreviewModalState({
          isOpen: true,
          before,
          after
        });
      };
      return /* @__PURE__ */ React.createElement("div", { className: "neko-settings-tab" }, "  ", /* @__PURE__ */ React.createElement("h1", { className: "defaultColor_a595eb text-md/normal_dc00ef" }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "NekoSkins" })), /* @__PURE__ */ React.createElement("div", { className: "defaultColor_a595eb text-md/normal_dc00ef mb-8" }, /* @__PURE__ */ React.createElement("div", { id: "oneko-preview", style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "128px",
        // Same as image height
        margin: "20px 0"
        // Add some vertical spacing
      } }, /* @__PURE__ */ React.createElement(
        "img",
        {
          src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
          alt: "",
          style: {
            width: "256px",
            height: "128px",
            objectFit: "contain"
          }
        }
      )), /* @__PURE__ */ React.createElement("div", { className: "view-controls mt-4", style: { display: "flex", gap: "16px" } }, /* @__PURE__ */ React.createElement(
        SettingsToggle,
        {
          label: "Grid View",
          description: "Toggle between grid and list view",
          value: settings.GridView,
          onChange: () => handleToggle("GridView")
        }
      ))), /* @__PURE__ */ React.createElement(
        OnekoSection,
        {
          settings,
          filterSettings,
          handleToggle,
          handlePreviewClick
        }
      ), /* @__PURE__ */ React.createElement("style", null, `
          .container_c669ee {
            width: 42px;
            height: 24px;
            position: relative;
            flex-shrink: 0;
          }

          .slider_c669ee {
            width: 100%;
            height: 100%;
            background-color: var(--background-tertiary);
            border-radius: 12px;
            transition: all .15s ease;
            box-shadow: inset 0 1px 2px rgba(0,0,0,0.15);
          }

          .slider_c669ee.checked_c669ee {
            background-color: var(--status-positive);
          }

          .handle_c669ee {
            position: absolute;
            top: 2px;
            left: 2px;
            width: 20px;
            height: 20px;
            background-color: var(--interactive-normal);
            border-radius: 10px;
            transition: all .15s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }

          .slider_c669ee.checked_c669ee .handle_c669ee {
            left: 20px;
            background-color: #fff;
          }

          .icon_c669ee {
            width: 12px;
            height: 12px;
            color: var(--background-primary);
            opacity: 0.7;
          }

          .slider_c669ee.checked_c669ee .icon_c669ee {
            color: var(--status-positive);
          }

          .settings-section {
            animation: fadeIn 0.3s ease;
            padding-top: 16px;  /* Added top padding */
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .settings-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }

          .settings-grid > div {
            margin-top: 0 !important;
          }

          .view-toggle {
            max-width: 300px;
          }

          .search-input:focus {
            outline: none;
            border-color: var(--brand-experiment);
            box-shadow: 0 0 0 1px var(--brand-experiment);
          }

          .search-input::placeholder {
            color: var(--text-muted);
          }

          // Add transition for smooth filtering
          .settings-section > div > div {
            transition: opacity 0.2s ease;
          }

          // Hide empty sections
          .settings-section:not(:has(> div > div:visible)) {
            display: none;
          }

          .setting-toggle {
            transform: scale(1);
          }

          .setting-toggle.animating {
            animation: togglePulse 0.3s ease;
          }

          @keyframes togglePulse {
            0% { transform: scale(1); }
            50% { transform: scale(0.98); }
            100% { transform: scale(1); }
          }

          /* Enhance existing transitions */
          .slider_c669ee {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .handle_c669ee {
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .icon_c669ee {
            transition: opacity 0.2s ease;
          }
        `), previewModalState.isOpen && /* @__PURE__ */ React.createElement(
        PreviewModal,
        {
          previewBefore: previewModalState.before,
          previewAfter: previewModalState.after,
          onClose: () => setPreviewModalState({ isOpen: false, before: null, after: null })
        }
      ));
    }
    module2.exports = NekoSkinsTab2;
  }
});

// Essentials.nkplugin.jsx
var QuickCSSTab = require_QuickCSSTab();
var SocialCreditsTab = require_SocialCreditsTab();
var M0chaTweaksTab = require_M0chaTweaksTab();
var { ThemeImportTab, applyThemeUrls } = require_ThemeImportTab();
var NekoSkinsTab = require_NekoSkinsTab();
var tweaks = require_tweaks();
var Essentials = class {
  constructor(userPreferences) {
    __publicField(this, "info", {
      name: "Essentials",
      id: "cat.kitties.arcane.Essentials",
      authors: [
        {
          name: "Mocha",
          id: "808802000224518264"
        }
      ],
      description: "Minor tweaks that make discord better!",
      version: "2.6.0",
      patches: [],
      preferences: []
    });
    __publicField(this, "settingsSections", [
      {
        header: "Essentials",
        divider: true,
        settings: ["mochatweaks", "quickcss", "themeimport", "onekoskins", "socialcredits"]
      }
    ]);
    __publicField(this, "settingsTabs", {
      mochatweaks: {
        section: "M0chaTweaks",
        searchableTitles: ["Essentials", "Tweaks", "M0chaTweaks"],
        label: "M0chaTweaks",
        element: M0chaTweaksTab
      },
      quickcss: {
        section: "QuickCSS",
        searchableTitles: ["Essentials", "CSS", "QuickCSS"],
        label: "QuickCSS",
        element: QuickCSSTab
      },
      themeimport: {
        section: "Theme Import",
        searchableTitles: ["Essentials", "CSS", "Theme Import"],
        label: "Theme Import",
        element: ThemeImportTab
      },
      onekoskins: {
        section: "Neko Skins",
        searchableTitles: ["Essentials", "Neko", "Skins", "Cat"],
        label: "Neko Skins",
        element: NekoSkinsTab
      },
      socialcredits: {
        section: "Social Credits",
        searchableTitles: ["credits", "points", "social", "score"],
        label: "Social Credits",
        element: SocialCreditsTab
      }
    });
    this.userPreferences = userPreferences;
    const savedThemeUrls = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "themeimport"
    );
    if (savedThemeUrls) {
      if (document.readyState === "complete") {
        applyThemeUrls(savedThemeUrls);
      } else {
        window.addEventListener("load", () => {
          applyThemeUrls(savedThemeUrls);
        });
      }
    }
    Nekocord.webpackPatcher.onInitializationFinish(() => {
      this.WebpackModules = Nekocord.webpackModules;
      this.MenuGroup = Nekocord.webpackModules.commonModules.MenuGroup;
      this.MenuItem = Nekocord.webpackModules.commonModules.MenuItem;
    });
    window.addEventListener("essentials-settings-changed", () => {
      this.tryToEnableTweaks();
    });
  }
  onPreferencesChange(userPreferences) {
    this.userPreferences = userPreferences;
    this.tryToEnableTweaks();
  }
  tryToEnableTweaks() {
    const savedPrefs = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "settings"
    );
    const savedQuickCss = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "quickcss"
    );
    const savedThemeImport = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "themeimport"
    );
    const existingStyles = document.querySelectorAll(
      'style[id^="essentials-"]'
    );
    existingStyles.forEach((style) => style.remove());
    if (savedQuickCss) {
      if (document.readyState === "complete") {
        this.applyCss(savedQuickCss, "essentials-quickcss");
      } else {
        window.addEventListener(
          "load",
          () => this.applyCss(savedQuickCss, "essentials-quickcss")
        );
      }
    }
    if (savedThemeImport) {
      if (document.readyState === "complete") {
        this.applyCss(savedThemeImport, "essentials-themeimport");
      } else {
        window.addEventListener(
          "load",
          () => this.applyCss(savedThemeImport, "essentials-themeimport")
        );
      }
    }
    if (savedPrefs) {
      tweaks.forEach((tweak) => {
        if (savedPrefs[tweak.id]) {
          if (document.readyState === "complete") {
            this.applyCss(tweak.css, `essentials-${tweak.id}`);
          } else {
            window.addEventListener(
              "load",
              () => this.applyCss(tweak.css, `essentials-${tweak.id}`)
            );
          }
        }
      });
    }
  }
  applyCss(css, id) {
    const existingStyle = document.getElementById(id);
    if (existingStyle) {
      existingStyle.remove();
    }
    const styleElement = document.createElement("style");
    styleElement.id = id;
    styleElement.textContent = css;
    if (document.head) {
      document.head.appendChild(styleElement);
    }
  }
  start() {
    window.addEventListener("essentials-settings-changed", () => {
      const settings = NekocordNative.preferences.getForPlugin(
        "cat.kitties.arcane.Essentials",
        "settings"
      );
      tweaks.forEach((tweak) => {
        if (settings[tweak.id]) {
          this.applyCss(tweak.css, `essentials-${tweak.id}`);
        } else {
          const element = document.getElementById(`essentials-${tweak.id}`);
          if (element) element.remove();
        }
      });
    });
  }
};
exports.default = Essentials;
/*! Bundled license information:

crypto-js/ripemd160.js:
  (** @preserve
  	(c) 2012 by Cédric Mesnil. All rights reserved.
  
  	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
  
  	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
  	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
  
  	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
  	*)

crypto-js/mode-ctr-gladman.js:
  (** @preserve
   * Counter block mode compatible with  Dr Brian Gladman fileenc.c
   * derived from CryptoJS.mode.CTR
   * Jan Hruby jhruby.web@gmail.com
   *)
*/
/*NKSIG_W3sicyI6IkFORGs1OTVjVHB3Z3FxdDJCZnlRSUI4eXlpbktHODdCK0V1OFlHWGJ3aVBNWGxiaW9GdEZJTGJMcWt4T05QbFFzcXk0bmM0Vk9jSTRtanV5OWgxUzBNU2ZBQlFOWTJTdlNPMEYzYVJBclNtTUliQ3FLelBTMlc5V1BSSlVzMWVBRW1qTFRDa2YyTzlQVHFkWjcxWVZTalRSSk1YUjlRN0hzMjUzd25JNjVJeEJ1SXpOIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/