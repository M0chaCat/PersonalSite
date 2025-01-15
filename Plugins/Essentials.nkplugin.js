"use strict";
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
      return /* @__PURE__ */ React.createElement("div", { className: "quickcss-container", style: { padding: "16px" } }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "QuickCSS" }), /* @__PURE__ */ React.createElement("div", { className: "header-container", style: { marginBottom: "24px" } }, /* @__PURE__ */ React.createElement(
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
            fontFamily: "var(--font-code), monospace",
            resize: "vertical",
            border: "none",
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
      return /* @__PURE__ */ React.createElement("div", { className: "theme-import-container", style: { padding: "16px" } }, /* @__PURE__ */ React.createElement(SectionHeader, { title: "Theme Import" }), /* @__PURE__ */ React.createElement("div", { className: "header-container", style: { marginBottom: "24px" } }, /* @__PURE__ */ React.createElement(
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
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var QuickCSSTab = require_QuickCSSTab();
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
      version: "2.5.3",
      patches: [],
      preferences: []
    });
    __publicField(this, "settingsSections", [
      {
        header: "Essentials",
        divider: true,
        settings: ["mochatweaks", "quickcss", "themeimport", "onekoskins"]
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
/*NKSIG_W3sicyI6IkFGYzFjcjIyWlREL1FReDIyQWdKaEJUYStUSXV0dy9NNEkyS2hMNGFqTUR4ZVBheU44ZkRZWnJoVTh5c1VqUzhzR1MyMWtiZm9NMHhMUm1PeEtlbFdFMmdBZWpRazQ1cnpuSGdrb1BGVFVFNUR3STI2TFdIMnNOQzhlN3FucDUzdHlRYU9zdEkxZHZtcy9VcklMYXV6T3BKanpxU2ZadnVFOWo0YVlSTVk1NHdUN1lVIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/