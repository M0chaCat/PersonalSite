"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const React = require("react");
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
        "div",
        {
          className: "container_c669ee",
          onClick: handleToggle,
          style: { cursor: "pointer" }
        },
        /* @__PURE__ */ React.createElement("div", { className: `slider_c669ee${value ? " checked_c669ee" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "handle_c669ee" }, /* @__PURE__ */ React.createElement(
          "svg",
          {
            className: "icon_c669ee",
            "aria-hidden": "true",
            role: "img",
            width: "10",
            height: "10",
            viewBox: "0 0 24 24"
          },
          /* @__PURE__ */ React.createElement(
            "path",
            {
              fill: "currentColor",
              d: value ? "M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z" : "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z"
            }
          )
        )))
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
function SearchBar({ onSearch }) {
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "search-container mb-4",
      style: {
        position: "relative",
        width: "100%"
        // Changed from max-width: 600px to width: 100%
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
function M0chaTweaksTab() {
  const [settings, setSettings] = React.useState({
    // Core UI Improvements
    ForumImprovements: false,
    AppearanceTabImprovements: false,
    HideNoPermissionChat: false,
    CollapsibleMessageActions: false,
    CollapsibleMessageActionsAlt: false,
    BetterMessageButtons: false,
    BetterMessageButtonsAlt: false,
    MoveForwardButton: false,
    RemoveForwardButton: false,
    AccountSettingsRefresh: false,
    RemoveSettingsAds: false,
    EfficientSettings: false,
    DisableSuperReactionAd: false,
    HidePinDiscovery: false,
    DualLineChatbox: false,
    // Interface Tweaks
    HidePlayAgain: false,
    FullServerTooltips: false,
    CenteredChannelNames: false,
    BetterPickers: false,
    HideActivity: false,
    VisibleServerBanner: false,
    ColoredMessagePills: false,
    ModernAudio: false,
    RevealDarkUsernames: false,
    RepositionAppLauncher: false,
    RemoveAppLauncher: false,
    LeftFavButton: false,
    MinimalSearchbar: false,
    MessageBarGreyEmoji: false,
    MinimalAuthorisedApps: false,
    SlideoverServers: false,
    UsernameSymbol: false,
    CollapsibleChatButtons: false,
    FixMosaicZoom: false,
    RevertGifFavorite: false,
    RightServerList: false,
    RightChannelList: false,
    LeftMemberList: false,
    AccountDetailsGrid: false,
    ChannelServers: false,
    // Chat Features
    CustomChatPlaceholder: false,
    CustomChatPlaceholderAlt: false,
    HideTimestamps: false,
    ScrollingText: false,
    BiggerSummaries: false,
    IRCTheme: false,
    ChannelTweaks: false,
    // Visual Enhancements
    PastelStatuses: false,
    LargeEmojis: false,
    ReactionAnimations: false,
    CustomNewMemberBadge: false,
    ProfileThemeMatching: false,
    RevertProfiles: false,
    CoolCodeBlocks: false,
    UnsimplifyBios: false,
    ChannelHover: false,
    ButtonHover: false,
    Discolored: false,
    // Fun & Experimental
    DiscordHardcore: false,
    GayFolders: false,
    GradientDMs: false,
    BouncyWebm: false,
    ClippyStatus: false,
    //Oneko Skins
    EeveeOneko: false,
    CalicoOneko: false,
    FoxOneko: false,
    GhostOneko: false,
    GreyOneko: false,
    KinaOneko: false,
    LucyOneko: false,
    MaiaOneko: false,
    MariaOneko: false,
    MikeOneko: false,
    SilverOneko: false,
    SilverskyOneko: false,
    SnuupyOneko: false,
    SpiritOneko: false,
    ToraOneko: false,
    ValentineOneko: false,
    AceOneko: false,
    MonoOneko: false,
    BunnyOneko: false,
    EsmeraldaOneko: false,
    JessOneko: false,
    // Add new view preference
    GridView: false
  });
  const [searchTerm, setSearchTerm] = React.useState("");
  const [previewModalState, setPreviewModalState] = React.useState({
    isOpen: false,
    before: null,
    after: null
  });
  const filterSettings = (label, description) => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return label.toLowerCase().includes(search) || description.toString().toLowerCase().includes(search);
  };
  React.useEffect(() => {
    const savedPrefs = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "settings"
    );
    if (savedPrefs) {
      const loadedSettings = {};
      Object.keys(settings).forEach((key) => {
        loadedSettings[key] = savedPrefs[key] ?? false;
      });
      setSettings(loadedSettings);
    }
  }, []);
  const handleToggle = (settingKey) => {
    setSettings((prev) => {
      const newValue = !prev[settingKey];
      const newSettings = {
        ...prev,
        [settingKey]: newValue
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
  const getEnabledCounts = () => {
    const counts = {
      total: 0,
      coreUI: 0,
      interface: 0,
      chat: 0,
      visual: 0,
      fun: 0
    };
    const coreUISettings = [
      "ForumImprovements",
      "AppearanceTabImprovements",
      "HideNoPermissionChat",
      "CollapsibleMessageActions",
      "CollapsibleMessageActionsAlt",
      "BetterMessageButtons",
      "BetterMessageButtonsAlt",
      "MoveForwardButton",
      "RemoveForwardButton",
      "AccountSettingsRefresh",
      "RemoveSettingsAds",
      "EfficientSettings",
      "DisableSuperReactionAd",
      "HidePinDiscovery",
      "DualLineChatbox"
    ];
    const interfaceSettings = [
      "HidePlayAgain",
      "FullServerTooltips",
      "CenteredChannelNames",
      "BetterPickers",
      "HideActivity",
      "VisibleServerBanner",
      "ColoredMessagePills",
      "ModernAudio",
      "RevealDarkUsernames",
      "RepositionAppLauncher",
      "RemoveAppLauncher",
      "LeftFavButton",
      "MinimalSearchbar",
      "MessageBarGreyEmoji",
      "MinimalAuthorisedApps",
      "SlideoverServers",
      "UsernameSymbol",
      "CollapsibleChatButtons",
      "FixMosaicZoom",
      "RevertGifFavorite",
      "RightServerList",
      "RightChannelList",
      "LeftMemberList",
      "AccountDetailsGrid",
      "ChannelServers"
    ];
    const chatSettings = [
      "CustomChatPlaceholder",
      "CustomChatPlaceholderAlt",
      "HideTimestamps",
      "ScrollingText",
      "BiggerSummaries",
      "IRCTheme",
      "ChannelTweaks"
    ];
    const visualSettings = [
      "PastelStatuses",
      "LargeEmojis",
      "ReactionAnimations",
      "CustomNewMemberBadge",
      "ProfileThemeMatching",
      "RevertProfiles",
      "CoolCodeBlocks",
      "UnsimplifyBios",
      "ChannelHover",
      "ButtonHover",
      "Discolored"
    ];
    const funSettings = [
      "DiscordHardcore",
      "GayFolders",
      "GradientDMs",
      "BouncyWebm",
      "ClippyStatus"
    ];
    Object.entries(settings).forEach(([key, value]) => {
      if (key.endsWith("Oneko")) return;
      if (value) {
        counts.total++;
        if (coreUISettings.includes(key)) counts.coreUI++;
        if (interfaceSettings.includes(key)) counts.interface++;
        if (chatSettings.includes(key)) counts.chat++;
        if (visualSettings.includes(key)) counts.visual++;
        if (funSettings.includes(key)) counts.fun++;
      }
    });
    return counts;
  };
  const enabledCounts = getEnabledCounts();
  const [showStats, setShowStats] = React.useState(true);
  const handlePreviewClick = (before, after) => {
    setPreviewModalState({
      isOpen: true,
      before,
      after
    });
  };
  function SectionHeader2({ title }) {
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "defaultColor_a595eb text-md/normal_dc00ef" }, "M0chaTweaks Settings"), /* @__PURE__ */ React.createElement("div", { className: "defaultColor_a595eb text-md/normal_dc00ef mb-8" }, /* @__PURE__ */ React.createElement("p", null, "Welcome to the M0chaTweaks page!"), /* @__PURE__ */ React.createElement(SearchBar, { onSearch: setSearchTerm }), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "view-controls mt-4",
      style: {
        display: "flex",
        gap: "16px"
      }
    },
    /* @__PURE__ */ React.createElement(
      SettingsToggle,
      {
        label: "Grid View",
        description: "Toggle between grid and list view",
        value: settings.GridView,
        onChange: () => handleToggle("GridView")
      }
    ),
    /* @__PURE__ */ React.createElement(
      SettingsToggle,
      {
        label: "Show Statistics",
        description: "Toggle statistics visibility",
        value: showStats,
        onChange: () => setShowStats(!showStats)
      }
    )
  ), showStats && /* @__PURE__ */ React.createElement(
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
  )), /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader2, { title: "Core UI Improvements" }), /* @__PURE__ */ React.createElement("div", { className: `${settings.GridView ? "settings-grid" : ""} mt-8` }, " ", filterSettings(
    "Forum Improvements",
    "Enhanced forum layout and functionality"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Forum Improvements",
      description: "Enhanced forum layout and functionality",
      value: settings.ForumImprovements,
      onChange: () => handleToggle("ForumImprovements"),
      helpText: "This improves the layout and functionality of the forum:\n              \u2022 Improved spacing\n              \u2022 Enhanced navigation\n              \u2022 Better organization",
      previewAfter: "https://arcane.kitties.cat/assets/essentials/forumimprovements-beforeafter.png",
      onPreviewClick: handlePreviewClick
    }
  ), filterSettings(
    "Hide No Permission Chat",
    "Hides chat input when you don't have permission to send messages"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Hide No Permission Chat",
      description: "Hides chat input when you don't have permission to send messages",
      value: settings.HideNoPermissionChat,
      onChange: () => handleToggle("HideNoPermissionChat")
    }
  ), filterSettings(
    "Collapsible Message Actions",
    "Hides message actions until message is hovered"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Collapsible Message Actions",
      description: "Hides message actions until message is hovered",
      value: settings.CollapsibleMessageActions,
      onChange: () => handleToggle("CollapsibleMessageActions"),
      helpText: "This hides message actions until you hover over a message, Hides actions like reactions and replies"
    }
  ), filterSettings(
    "Collapsible Message Actions (Shift)",
    "Hides message actions until message is hovered or shift is held"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Collapsible Message Actions (Shift)",
      description: "Hides message actions until message is hovered or shift is held",
      value: settings.CollapsibleMessageActionsAlt,
      onChange: () => handleToggle("CollapsibleMessageActionsAlt"),
      helpText: "This hides message actions until you hover over a message or hold shift, Hides actions like reactions and replies"
    }
  ), filterSettings(
    "Better Message Buttons",
    "Organizes message buttons in a grid with Reply and Edit separated"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Better Message Buttons",
      description: "Organizes message buttons in a grid with Reply and Edit separated",
      value: settings.BetterMessageButtons,
      onChange: () => handleToggle("BetterMessageButtons"),
      helpText: "This organizes message buttons in a grid layout where buttons are grouped together",
      previewBefore: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-before.png",
      previewAfter: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-after.png",
      onPreviewClick: handlePreviewClick
    }
  ), filterSettings(
    "Better Message Buttons (Alt)",
    "Same as above, but also separates the Forward button"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Better Message Buttons (Alt)",
      description: "Same as above, but also separates the Forward button",
      value: settings.BetterMessageButtonsAlt,
      onChange: () => handleToggle("BetterMessageButtonsAlt"),
      onPreviewClick: handlePreviewClick,
      helpText: "Same as above, but also separates the Forward button",
      previewBefore: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttons-before.png",
      previewAfter: "https://arcane.kitties.cat/assets/essentials/bettermessagebuttonsalt-after.png"
    }
  ), filterSettings(
    "Move Forward Button",
    "Reorders message buttons to preserve muscle memory"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Move Forward Button",
      description: "Reorders message buttons to preserve muscle memory",
      value: settings.MoveForwardButton,
      onChange: () => handleToggle("MoveForwardButton"),
      helpText: "This reorders message buttons to put the Reply button where it used to be",
      previewBefore: "https://arcane.kitties.cat/assets/essentials/moveforwardbutton-before.png",
      previewAfter: "https://arcane.kitties.cat/assets/essentials/moveforwardbutton-after.png",
      onPreviewClick: handlePreviewClick
    }
  ), filterSettings(
    "Remove Forward Button",
    "Completely removes the Forward button from message actions"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Remove Forward Button",
      description: "Completely removes the Forward button from message actions",
      value: settings.RemoveForwardButton,
      onChange: () => handleToggle("RemoveForwardButton"),
      helpText: "This removes the useless Forward button from message actions"
    }
  ), filterSettings(
    "Remove Settings Ads",
    "Removes Nitro and Boost tabs from settings"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Remove Settings Ads",
      description: "Removes Nitro and Boost tabs from settings",
      value: settings.RemoveSettingsAds,
      onChange: () => handleToggle("RemoveSettingsAds"),
      helpText: "This removes Nitro and Boost tabs from the settings menu"
    }
  ), filterSettings(
    "Efficient Settings",
    "Shortens the right-click settings menu by hiding options that just open the full settings menu"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Efficient Settings",
      description: "Shortens the right-click settings menu by hiding options that just open the full settings menu",
      value: settings.EfficientSettings,
      onChange: () => handleToggle("EfficientSettings"),
      helpText: "This shortens the right-click settings menu by hiding options that just open the full settings menu"
    }
  ), filterSettings(
    "Disable Super Reaction Ad",
    "Prevents the Super Reaction popup from appearing when clicking reactions"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Disable Super Reaction Ad",
      description: "Prevents the Super Reaction popup from appearing when clicking reactions",
      value: settings.DisableSuperReactionAd,
      onChange: () => handleToggle("DisableSuperReactionAd"),
      helpText: "This prevents the Super Reaction popup from appearing"
    }
  ), filterSettings(
    "Hide Pinned Discovery",
    "Hides the new pinned Discovery Icon"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Hide Pinned Discovery",
      description: "Hides the new pinned Discovery Icon",
      value: settings.HidePinDiscovery,
      onChange: () => handleToggle("HidePinDiscovery"),
      helpText: "This hides the new pinned Discovery Icon"
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader2, { title: "Interface Tweaks" }), /* @__PURE__ */ React.createElement("div", { className: settings.GridView ? "settings-grid" : "" }, filterSettings(
    "Account Settings Refresh",
    "A fresh take on the Account Settings area"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Account Settings Refresh",
      description: "A fresh take on the Account Settings area",
      value: settings.AccountSettingsRefresh,
      onChange: () => handleToggle("AccountSettingsRefresh"),
      helpText: "This provides a fresh look at the Account Settings area, with a new layout",
      previewBefore: "https://arcane.kitties.cat/assets/essentials/accountsettingsrefresh-before.png",
      previewAfter: "https://arcane.kitties.cat/assets/essentials/accountsettingsrefresh-after.png",
      onPreviewClick: handlePreviewClick
    }
  ), filterSettings(
    "Appearance Tab Improvements",
    "Better organized appearance settings"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Appearance Tab Improvements",
      description: "Better organized appearance settings",
      value: settings.AppearanceTabImprovements,
      onChange: () => handleToggle("AppearanceTabImprovements"),
      helpText: "This improves the appearance of the Appearance Tab with a Better layout and improved organization"
    }
  ), filterSettings(
    "Account Details Grid",
    "Reorganizes the account details panel into a grid layout"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Account Details Grid",
      description: "Reorganizes the account details panel into a grid layout",
      value: settings.AccountDetailsGrid,
      onChange: () => handleToggle("AccountDetailsGrid"),
      helpText: "This reorganizes the account details panel into a grid layout"
    }
  ), filterSettings(
    "Hide Play Again",
    "Hides the Play Again section in DMs"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Hide Play Again",
      description: "Hides the Play Again section in DMs",
      value: settings.HidePlayAgain,
      onChange: () => handleToggle("HidePlayAgain"),
      helpText: "This hides the Play Again section in DMs"
    }
  ), filterSettings(
    "Full Server Tooltips",
    "Shows the complete server name in tooltips without line breaks"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Full Server Tooltips",
      description: "Shows the complete server name in tooltips without line breaks",
      value: settings.FullServerTooltips,
      onChange: () => handleToggle("FullServerTooltips"),
      helpText: "This shows the complete server name in tooltips without line breaks"
    }
  ), filterSettings(
    "Centered Channel Names",
    "Centers channel names in the header"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Centered Channel Names",
      description: "Centers channel names in the header",
      value: settings.CenteredChannelNames,
      onChange: () => handleToggle("CenteredChannelNames"),
      helpText: "This centers channel names in the header, and hides channel descriptions"
    }
  ), filterSettings(
    "Better Pickers",
    "Changes purple to grey in the soundboard and emoji picker"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Better Pickers",
      description: "Changes purple to grey in the soundboard and emoji picker",
      value: settings.BetterPickers,
      onChange: () => handleToggle("BetterPickers"),
      helpText: "This changes the color of the soundboard and emoji picker to fit the theme"
    }
  ), filterSettings(
    "Hide Activity",
    "Hides recent activity in the member list"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Hide Activity",
      description: "Hides recent activity in the member list",
      value: settings.HideActivity,
      onChange: () => handleToggle("HideActivity"),
      helpText: "This hides recent activity at the top of the member list"
    }
  ), filterSettings(
    "Show Status and Username",
    "Shows both status and username simultaneously with @ symbol"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Show Status and Username",
      description: "Shows both status and username simultaneously with @ symbol",
      value: settings.UsernameSymbol,
      onChange: () => handleToggle("UsernameSymbol"),
      helpText: "This shows both status and username simultaneously with @ symbol"
    }
  ), filterSettings(
    "Visible Server Banner",
    "Keeps server banner visible while scrolling through channels"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Visible Server Banner",
      description: "Keeps server banner visible while scrolling through channels",
      value: settings.VisibleServerBanner,
      onChange: () => handleToggle("VisibleServerBanner"),
      helpText: "This keeps the server banner visible while scrolling through channels"
    }
  ), filterSettings(
    "Colored Message Pills",
    "Colors the message pills based on mentions and new posts"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Colored Message Pills",
      description: "Colors the message pills based on mentions and new posts",
      value: settings.ColoredMessagePills,
      onChange: () => handleToggle("ColoredMessagePills"),
      helpText: "This colors the message pills based on mentions and new posts:\n              \u2022 Blue pill for new posts\n              \u2022 Red pill for mentions"
    }
  ), filterSettings(
    "Modern Audio",
    "Updates the appearance of audio attachments"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Modern Audio",
      description: "Updates the appearance of audio attachments",
      value: settings.ModernAudio,
      onChange: () => handleToggle("ModernAudio"),
      helpText: "This updates the appearance of audio attachments"
    }
  ), filterSettings(
    "Reveal Dark Usernames",
    "Makes dark usernames visible when hovering over them"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Reveal Dark Usernames",
      description: "Makes dark usernames visible when hovering over them",
      value: settings.RevealDarkUsernames,
      onChange: () => handleToggle("RevealDarkUsernames"),
      helpText: "This makes dark usernames visible when hovering over them"
    }
  ), filterSettings(
    "Reposition App Launcher",
    "Moves the app launcher above the chat input to avoid muscle memory conflicts"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Reposition App Launcher",
      description: "Moves the app launcher above the chat input to avoid muscle memory conflicts",
      value: settings.RepositionAppLauncher,
      onChange: () => handleToggle("RepositionAppLauncher"),
      helpText: "This moves the app launcher above the chat input to avoid muscle memory conflicts",
      previewAfter: "https://arcane.kitties.cat/assets/essentials/repositionapplauncher-before.png",
      previewBefore: "https://arcane.kitties.cat/assets/essentials/repositionapplauncher-after.png",
      onPreviewClick: handlePreviewClick
    }
  ), filterSettings(
    "Remove App Launcher",
    "Removes the new app launcher button entirely"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Remove App Launcher",
      description: "Removes the new app launcher button entirely",
      value: settings.RemoveAppLauncher,
      onChange: () => handleToggle("RemoveAppLauncher"),
      helpText: "This removes the new app launcher button entirely"
    }
  ), filterSettings(
    "Left Favorite Button",
    "Moves the favorite button back to the left in GIF search"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Left Favorite Button",
      description: "Moves the favorite button back to the left in GIF search",
      value: settings.LeftFavButton,
      onChange: () => handleToggle("LeftFavButton"),
      previewBefore: "https://arcane.kitties.cat/assets/essentials/leftfavbutton-before.png",
      previewAfter: "https://arcane.kitties.cat/assets/essentials/leftfavbutton-after.png",
      onPreviewClick: handlePreviewClick
    }
  ), filterSettings(
    "Minimal Searchbar",
    "Condenses the searchbar into an icon when not in use"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Minimal Searchbar",
      description: "Condenses the searchbar into an icon when not in use",
      value: settings.MinimalSearchbar,
      onChange: () => handleToggle("MinimalSearchbar"),
      helpText: "This condenses the searchbar into an icon when not in use"
    }
  ), filterSettings(
    "Message Bar Grey Emoji",
    "Replaces full-color emojis with outline-only emojis in the message bar placeholder"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Message Bar Grey Emoji",
      description: "Replaces full-color emojis with outline-only emojis in the message bar placeholder",
      value: settings.MessageBarGreyEmoji,
      onChange: () => handleToggle("MessageBarGreyEmoji"),
      helpText: "This replaces full-color emojis with outline-only emojis in the message bar placeholder"
    }
  ), filterSettings(
    "Minimal Authorised Apps",
    "A minimised look for authorised app cards that expands on hover"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Minimal Authorised Apps",
      description: "A minimised look for authorised app cards that expands on hover",
      value: settings.MinimalAuthorisedApps,
      onChange: () => handleToggle("MinimalAuthorisedApps"),
      helpText: "This provides a minimised look for authorised app cards that expands on hover"
    }
  ), filterSettings(
    "Slideover Servers",
    "Turns the server list into a grid that slides out on hover"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Slideover Servers",
      description: "Turns the server list into a grid that slides out on hover",
      value: settings.SlideoverServers,
      onChange: () => handleToggle("SlideoverServers"),
      helpText: "This turns the server list into a 2 column grid that slides out on hover"
    }
  ), filterSettings(
    "Collapsible Chat Buttons",
    "Collapses chat bar buttons to save space when writing long messages"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Collapsible Chat Buttons",
      description: "Collapses chat bar buttons to save space when writing long messages",
      value: settings.CollapsibleChatButtons,
      onChange: () => handleToggle("CollapsibleChatButtons"),
      helpText: "This collapses chat bar buttons to save space when writing long messages"
    }
  ), filterSettings(
    "Fix Mosaic Zoom",
    "Prevents image previews from being zoomed in"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Fix Mosaic Zoom",
      description: "Prevents image previews from being zoomed in",
      value: settings.FixMosaicZoom,
      onChange: () => handleToggle("FixMosaicZoom"),
      helpText: "This prevents image previews from being zoomed in"
    }
  ), filterSettings(
    "Revert GIF Favorite Button Background",
    "Removes the colored background from GIF favorite buttons"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Revert GIF Favorite Button Background",
      description: "Removes the colored background from GIF favorite buttons",
      value: settings.RevertGifFavorite,
      onChange: () => handleToggle("RevertGifFavorite"),
      helpText: "This removes the colored background from GIF favorite buttons"
    }
  ), filterSettings(
    "Right Server List",
    "Moves the server list to the right side"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Right Server List",
      description: "Moves the server list to the right side",
      value: settings.RightServerList,
      onChange: () => handleToggle("RightServerList"),
      helpText: "This moves the server list to the right side"
    }
  ), filterSettings(
    "Right Channel List",
    "Moves the channel list to the right side (may have issues with forums)"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Right Channel List",
      description: "Moves the channel list to the right side (may have issues with forums)",
      value: settings.RightChannelList,
      onChange: () => handleToggle("RightChannelList"),
      helpText: "This moves the channel list to the right side"
    }
  ), filterSettings(
    "Left Member List",
    "Moves the member list to the left side"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Left Member List",
      description: "Moves the member list to the left side",
      value: settings.LeftMemberList,
      onChange: () => handleToggle("LeftMemberList"),
      helpText: "This moves the member list to the left side"
    }
  ), filterSettings(
    "Channel-Style Servers",
    "Makes the server list look more like the channel list"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Channel-Style Servers",
      description: "Makes the server list look more like the channel list",
      value: settings.ChannelServers,
      onChange: () => handleToggle("ChannelServers"),
      helpText: "This makes the server list look more like the channel list"
    }
  ), filterSettings(
    "Dual-Line Chatbox",
    "Splits the chatbox into two rows, with buttons on bottom row"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Dual-Line Chatbox",
      description: "Splits the chatbox into two rows, with buttons on bottom row",
      value: settings.DualLineChatbox,
      onChange: () => handleToggle("DualLineChatbox"),
      helpText: "This splits the chatbox into two rows, with buttons on the bottom row"
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader2, { title: "Chat Features" }), /* @__PURE__ */ React.createElement("div", { className: settings.GridView ? "settings-grid" : "" }, filterSettings(
    "Custom Chat Placeholder",
    'Changes the chat placeholder to "be silly :3"'
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Custom Chat Placeholder",
      description: 'Changes the chat placeholder to "be silly :3"',
      value: settings.CustomChatPlaceholder,
      onChange: () => handleToggle("CustomChatPlaceholder")
    }
  ), filterSettings(
    "Silly \xDE User Chat Placeholder",
    'Changes the chat placeholder to "be silly, use \xFE :3"'
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Silly \xDE User Chat Placeholder",
      description: 'Changes the chat placeholder to "be silly, use \xFE :3"',
      value: settings.CustomChatPlaceholderAlt,
      onChange: () => handleToggle("CustomChatPlaceholderAlt")
    }
  ), filterSettings(
    "Channel Tweaks",
    "Enhances channel list with better spacing and organization"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Channel Tweaks",
      description: "Enhances channel list with better spacing and organization",
      value: settings.ChannelTweaks,
      onChange: () => handleToggle("ChannelTweaks"),
      helpText: "This improves the channel list layout, such as a more compact and organized look"
    }
  ), filterSettings(
    "Hide Timestamps",
    "Hides message timestamps until hovered"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Hide Timestamps",
      description: "Hides message timestamps until hovered",
      value: settings.HideTimestamps,
      onChange: () => handleToggle("HideTimestamps")
    }
  ), filterSettings(
    "Scrolling Text",
    "Adds scrolling animation to long header text"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Scrolling Text",
      description: "Adds scrolling animation to long header text",
      value: settings.ScrollingText,
      onChange: () => handleToggle("ScrollingText")
    }
  ), filterSettings(
    "Bigger Summaries",
    "Increases the size of forum topic summaries"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Bigger Summaries",
      description: "Increases the size of forum topic summaries",
      value: settings.BiggerSummaries,
      onChange: () => handleToggle("BiggerSummaries")
    }
  ), filterSettings(
    "IRC Theme",
    "Classic IRC-style chat layout (requires compact mode)"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "IRC Theme",
      description: "Classic IRC-style chat layout (requires compact mode)",
      value: settings.IRCTheme,
      onChange: () => handleToggle("IRCTheme"),
      previewAfter: "https://arcane.kitties.cat/assets/essentials/irctheme-after.png",
      onPreviewClick: handlePreviewClick
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader2, { title: "Visual Enhancements" }), /* @__PURE__ */ React.createElement("div", { className: `${settings.GridView ? "settings-grid" : ""} mt-8` }, filterSettings(
    "Discolored",
    "Colors all of Discord's SVG icons"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Discolored",
      description: "Colors all of Discord's SVG icons",
      value: settings.Discolored,
      onChange: () => handleToggle("Discolored")
    }
  ), filterSettings(
    "Pastel Statuses",
    "Changes status colors to pastel variants"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Pastel Statuses",
      description: "Changes status colors to pastel variants",
      value: settings.PastelStatuses,
      onChange: () => handleToggle("PastelStatuses")
    }
  ), filterSettings(
    "Large Emojis",
    "Makes emojis larger when hovered"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Large Emojis",
      description: "Makes emojis larger when hovered",
      value: settings.LargeEmojis,
      onChange: () => handleToggle("LargeEmojis")
    }
  ), filterSettings(
    "Reaction Animations",
    "Adds flip animation to reaction emojis"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Reaction Animations",
      description: "Adds flip animation to reaction emojis",
      value: settings.ReactionAnimations,
      onChange: () => handleToggle("ReactionAnimations")
    }
  ), filterSettings(
    "Custom New Member Badge",
    "Replaces the new member badge with a custom one"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Custom New Member Badge",
      description: "Replaces the new member badge with a custom one",
      value: settings.CustomNewMemberBadge,
      onChange: () => handleToggle("CustomNewMemberBadge")
    }
  ), filterSettings(
    "Profile Status Matching",
    "Makes profile status match theme colors"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Profile Status Matching",
      description: "Makes profile status match theme colors",
      value: settings.ProfileThemeMatching,
      onChange: () => handleToggle("ProfileThemeMatching")
    }
  ), filterSettings(
    "Revert Profiles",
    "Reverts user profiles to the classic layout (incompatible with Profile Status Matching)"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Revert Profiles",
      description: "Reverts user profiles to the classic layout (incompatible with Profile Status Matching)",
      value: settings.RevertProfiles,
      onChange: () => handleToggle("RevertProfiles")
    }
  ), filterSettings(
    "Cool Code Blocks",
    "Pretty code blocks with snake animation and pastel gradients"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Cool Code Blocks",
      description: "Pretty code blocks with snake animation and pastel gradients",
      value: settings.CoolCodeBlocks,
      onChange: () => handleToggle("CoolCodeBlocks")
    }
  ), filterSettings(
    "Un-Simplify Bios",
    "Shows full bios in simplified profiles"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Un-Simplify Bios",
      description: "Shows full bios in simplified profiles",
      value: settings.UnsimplifyBios,
      onChange: () => handleToggle("UnsimplifyBios")
    }
  ), filterSettings(
    "Channel Hover Effects",
    "Adds smooth sliding animations when hovering over channels, DMs, and settings"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Channel Hover Effects",
      description: "Adds smooth sliding animations when hovering over channels, DMs, and settings",
      value: settings.ChannelHover,
      onChange: () => handleToggle("ChannelHover")
    }
  ), filterSettings(
    "Button Hover Effects",
    "Adds rotation animations to various buttons when hovered"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Button Hover Effects",
      description: "Adds rotation animations to various buttons when hovered",
      value: settings.ButtonHover,
      onChange: () => handleToggle("ButtonHover")
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader2, { title: "Fun & Experimental" }), /* @__PURE__ */ React.createElement("div", { className: `${settings.GridView ? "settings-grid" : ""} mt-8` }, filterSettings(
    "Discord Hardcore Mode",
    "Makes Discord significantly more..."
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Discord Hardcore Mode",
      description: /* @__PURE__ */ React.createElement(React.Fragment, null, "Makes Discord significantly more... something..."),
      value: settings.DiscordHardcore,
      onChange: () => handleToggle("DiscordHardcore"),
      helpText: "This mode adds various visual challenges to Discord to make it the worst thing ever"
    }
  ), filterSettings(
    "Gay Folders",
    "Adds rainbow animation to folders containing 'gay' in their name"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Gay Folders",
      description: "Adds rainbow animation to folders containing 'gay' in their name",
      value: settings.GayFolders,
      onChange: () => handleToggle("GayFolders")
    }
  ), filterSettings(
    "Gradient DMs",
    "Adds gradient backgrounds to DM list and member list based on status"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Gradient DMs",
      description: "Adds gradient backgrounds to DM list and member list based on status",
      value: settings.GradientDMs,
      onChange: () => handleToggle("GradientDMs")
    }
  ), filterSettings(
    "Bouncy Webm",
    "Makes webm files bounce the chat around like the good old days"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Bouncy Webm",
      description: "Makes webm files bounce the chat around like the good old days",
      value: settings.BouncyWebm,
      onChange: () => handleToggle("BouncyWebm")
    }
  ), filterSettings(
    "Clippy Status",
    "Turns status in new profiles into Clippy-style speech bubble (incompatible with Profile Status Matching/Revert Profiles)"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Clippy Status",
      description: "Turns status in new profiles into Clippy-style speech bubble (incompatible with Profile Status Matching/Revert Profiles)",
      value: settings.ClippyStatus,
      onChange: () => handleToggle("ClippyStatus")
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-16" }, /* @__PURE__ */ React.createElement(SectionHeader2, { title: "Oneko Skins" }), /* @__PURE__ */ React.createElement("div", { className: `${settings.GridView ? "settings-grid" : ""} mt-8` }, filterSettings(
    "Eevee Oneko",
    "Replaces the Oneko cat with an Eevee"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Eevee Oneko",
      description: "Replaces the Oneko cat with an Eevee",
      value: settings.EeveeOneko,
      onChange: () => handleToggle("EeveeOneko")
    }
  ), filterSettings(
    "Calico Oneko",
    "Replaces the Oneko cat with a Calico cat"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Calico Oneko",
      description: "Replaces the Oneko cat with a Calico cat",
      value: settings.CalicoOneko,
      onChange: () => handleToggle("CalicoOneko")
    }
  ), filterSettings("Fox Oneko", "Replaces the Oneko cat with a Fox") && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Fox Oneko",
      description: "Replaces the Oneko cat with a Fox",
      value: settings.FoxOneko,
      onChange: () => handleToggle("FoxOneko")
    }
  ), filterSettings(
    "Ghost Oneko",
    "Replaces the Oneko cat with a Ghost cat"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Ghost Oneko",
      description: "Replaces the Oneko cat with a Ghost cat",
      value: settings.GhostOneko,
      onChange: () => handleToggle("GhostOneko")
    }
  ), filterSettings(
    "Grey Oneko",
    "Replaces the Oneko cat with a Grey cat"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Grey Oneko",
      description: "Replaces the Oneko cat with a Grey cat",
      value: settings.GreyOneko,
      onChange: () => handleToggle("GreyOneko")
    }
  ), filterSettings("Kina Oneko", "Replaces the Oneko cat with Kina") && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Kina Oneko",
      description: "Replaces the Oneko cat with Kina",
      value: settings.KinaOneko,
      onChange: () => handleToggle("KinaOneko")
    }
  ), filterSettings("Lucy Oneko", "Replaces the Oneko cat with Lucy") && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Lucy Oneko",
      description: "Replaces the Oneko cat with Lucy",
      value: settings.LucyOneko,
      onChange: () => handleToggle("LucyOneko")
    }
  ), filterSettings("Maia Oneko", "Replaces the Oneko cat with Maia") && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Maia Oneko",
      description: "Replaces the Oneko cat with Maia",
      value: settings.MaiaOneko,
      onChange: () => handleToggle("MaiaOneko")
    }
  ), filterSettings(
    "Maria Oneko",
    "Replaces the Oneko cat with Maria"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Maria Oneko",
      description: "Replaces the Oneko cat with Maria",
      value: settings.MariaOneko,
      onChange: () => handleToggle("MariaOneko")
    }
  ), filterSettings("Mike Oneko", "Replaces the Oneko cat with Mike") && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Mike Oneko",
      description: "Replaces the Oneko cat with Mike",
      value: settings.MikeOneko,
      onChange: () => handleToggle("MikeOneko")
    }
  ), filterSettings(
    "Silver Oneko",
    "Replaces the Oneko cat with Silver"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Silver Oneko",
      description: "Replaces the Oneko cat with Silver",
      value: settings.SilverOneko,
      onChange: () => handleToggle("SilverOneko")
    }
  ), filterSettings(
    "Silversky Oneko",
    "Replaces the Oneko cat with Silversky"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Silversky Oneko",
      description: "Replaces the Oneko cat with Silversky",
      value: settings.SilverskyOneko,
      onChange: () => handleToggle("SilverskyOneko")
    }
  ), filterSettings(
    "Snuupy Oneko",
    "Replaces the Oneko cat with Snuupy"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Snuupy Oneko",
      description: "Replaces the Oneko cat with Snuupy",
      value: settings.SnuupyOneko,
      onChange: () => handleToggle("SnuupyOneko")
    }
  ), filterSettings(
    "Spirit Oneko",
    "Replaces the Oneko cat with Spirit"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Spirit Oneko",
      description: "Replaces the Oneko cat with Spirit",
      value: settings.SpiritOneko,
      onChange: () => handleToggle("SpiritOneko")
    }
  ), filterSettings("Tora Oneko", "Replaces the Oneko cat with Tora") && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Tora Oneko",
      description: "Replaces the Oneko cat with Tora",
      value: settings.ToraOneko,
      onChange: () => handleToggle("ToraOneko")
    }
  ), filterSettings(
    "Valentine Oneko",
    "Replaces the Oneko cat with Valentine"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Valentine Oneko",
      description: "Replaces the Oneko cat with Valentine",
      value: settings.ValentineOneko,
      onChange: () => handleToggle("ValentineOneko")
    }
  ), filterSettings("Ace Oneko", "Replaces the Oneko cat with Ace") && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Ace Oneko",
      description: "Replaces the Oneko cat with Ace",
      value: settings.AceOneko,
      onChange: () => handleToggle("AceOneko")
    }
  ), filterSettings("Mono Oneko", "Replaces the Oneko cat with Mono") && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Mono Oneko",
      description: "Replaces the Oneko cat with Mono",
      value: settings.MonoOneko,
      onChange: () => handleToggle("MonoOneko")
    }
  ), filterSettings(
    "Bunny Oneko",
    "Replaces the Oneko cat with Bunny"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Bunny Oneko",
      description: "Replaces the Oneko cat with Bunny",
      value: settings.BunnyOneko,
      onChange: () => handleToggle("BunnyOneko")
    }
  ), filterSettings(
    "Esmeralda Oneko",
    "Replaces the Oneko cat with Esmeralda"
  ) && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Esmeralda Oneko",
      description: "Replaces the Oneko cat with Esmeralda",
      value: settings.EsmeraldaOneko,
      onChange: () => handleToggle("EsmeraldaOneko")
    }
  ), filterSettings("Jess Oneko", "Replaces the Oneko cat with Jess") && /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Jess Oneko",
      description: "Replaces the Oneko cat with Jess",
      value: settings.JessOneko,
      onChange: () => handleToggle("JessOneko")
    }
  ))), /* @__PURE__ */ React.createElement("style", null, `
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
function QuickCSSTab() {
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "defaultColor_a595eb text-md/normal_dc00ef" }, "QuickCSS"), /* @__PURE__ */ React.createElement("div", { className: "defaultColor_a595eb text-md/normal_dc00ef mb-8" }, /* @__PURE__ */ React.createElement("p", null, "Add custom CSS snippets here.")), /* @__PURE__ */ React.createElement(
    "textarea",
    {
      value: css,
      onChange: handleCssChange,
      className: "input_d266e7",
      style: {
        width: "100%",
        height: "400px",
        backgroundColor: "var(--background-secondary)",
        color: "var(--text-normal)",
        padding: "8px",
        borderRadius: "4px",
        fontFamily: "monospace",
        resize: "vertical"
      },
      spellCheck: "false",
      placeholder: "/* Add your custom CSS here */"
    }
  ));
}
class Essentials {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
    Nekocord.webpackPatcher.onInitializationFinish(() => {
      this.WebpackModules = Nekocord.webpackModules;
      this.MenuGroup = Nekocord.webpackModules.commonModules.MenuGroup;
      this.MenuItem = Nekocord.webpackModules.commonModules.MenuItem;
    });
    window.addEventListener("essentials-settings-changed", () => {
      this.tryToEnableTweaks();
    });
  }
  info = {
    name: "Essentials",
    id: "cat.kitties.arcane.Essentials",
    authors: [
      {
        name: "Mocha",
        id: "808802000224518264"
      }
    ],
    description: "Minor tweaks that make discord better!",
    version: "2.3.1",
    patches: [],
    preferences: []
  };
  onPreferencesChange(userPreferences) {
    this.userPreferences = userPreferences;
    this.tryToEnableTweaks();
  }
  cssThemes = {
    // UI Improvements
    ForumImprovements: `
      @import url("https://minidiscordthemes.github.io/Snippets/ForumImprovements/main.css");
    `,
    AppearanceTabImprovements: `
      /* Appearance Tab Layout */
      div[id="appearance-tab"] div [class*=children] {
        div[tabindex="-1"] { order: 0; }
        div[class*=marginTop8_]:nth-of-type(3) { order: 1; }
        div[class*=marginTop8_]:nth-of-type(2) { order: 3; }
        div[class*=marginTop20_] { order: 10; }
      }

      /* Hide Unnecessary Elements */
      div[id="appearance-tab"] {
        div[aria-label="Exclusive to Nitro"] svg[class*=nitroWheel],
        h3[data-text-variant="text-sm/normal"],
        h3[aria-label="Color"] { display: none; }
      }
    `,
    HideNoPermissionChat: `
      [class*=channelTextAreaDisabled] {
        display: none!important;
        opacity: 0!important;
        position: absolute!important;
        height: 0px!important;
        width: 0px!important;
        z-index: 0!important;
      }
    `,
    CollapsibleMessageActions: `
      [class^=buttonsInner_]:not(:hover)>:is(
        [role=button]:not(:last-child), [class^=separator_]
      ) {
        display: none;
      }
    `,
    CollapsibleMessageActionsAlt: `
      [class^=buttonsInner_]:not(:hover, :has([d^="M16.32 14.72a1 1 0 0 1"]))>:is(
        [role=button]:not(:last-child), [class^=separator_]
      ) {
        display: none;
      }
    `,
    BetterMessageButtons: `
      @import url("https://raw.githubusercontent.com/Andrew6rant/Discord-plugins-and-themes/refs/heads/main/BetterMessageButtons.theme.css");
    `,
    BetterMessageButtonsAlt: `
     @import url("https://raw.githubusercontent.com/Andrew6rant/Discord-plugins-and-themes/refs/heads/main/BetterMessageButtonsAlternate.theme.css");
    `,
    MinimalSearchbar: `
    @import url("https://minidiscordthemes.github.io/Snippets/MinimalSearchbar/main.css");
   `,
    ButtonHover: `
     /*
       Settings and Upload Button Spin
      */
      button.button_ae40a4 /* make user panel buttons round */ {
          border-radius: 50%;
      }
      .button_ae40a4:last-child /* settings button */, 
      .attachButton__56f98 .attachButtonInner__84c26 /* upload button */,
      .emojiButton_b63c38 .contents__322f4 /* emoji button */,
      .closeButton__8177f /* settings exit button */ {
          transition: transform 1s ease;
      }
      .button_ae40a4:last-child:hover,
      .attachButton__56f98:hover .attachButtonInner__84c26,
      .emojiButton_b63c38:hover .contents__322f4,
      .closeButton__8177f:hover {
         transform: rotate(360deg);
      }
  `,
    MoveForwardButton: `
      .buttonsInner_d5deea {
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
      }
    `,
    // Chat Features
    CustomChatPlaceholder: `
      :root{ --prompt-text: "be silly :3"; }
      [class*=placeholder][class*=slateTextArea] {visibility: hidden;}
      [class*=placeholder][class*=slateTextArea]::before {visibility: visible;content: var(--prompt-text);}
    `,
    CustomChatPlaceholderAlt: `
      :root{ --prompt-text: "be silly, use \xFE :3"; }
      [class*=placeholder][class*=slateTextArea] {visibility: hidden;}
      [class*=placeholder][class*=slateTextArea]::before {visibility: visible;content: var(--prompt-text);}
    `,
    HideTimestamps: `
      .timestampInline__430cf {
        visibility: hidden;
      }
      .text-md-normal__6e567 .timestampInline__430cf {
        visibility: visible; 
      }
    `,
    ScrollingText: `
      .header_a0:hover .headerText_a0 {
        animation: scrollText 8s linear infinite;
        width: 12rem;
      }
      @keyframes scrollText {
        0% { transform: translateX(0); }
        100% { transform: translateX(-100%); }
      }
    `,
    BiggerSummaries: `
      div[class^=topicsScroller_] {
        max-height: calc(100vh - 2.5in);
      }
      :has(> div[class^=topicsScroller_]) {
        width: calc(100% - 8q);
      }
    `,
    IRCTheme: `
      @import url("https://raw.githubusercontent.com/foxf4ce/discord-css/refs/heads/main/irc.css");
      :root {
        --font-code: monospace; /* Optional custom font */

      /* Custom indentation, values represent number of blank spaces from the left */
      --irc-indent: 3;
      --irc-newline-indent: 8;
      --irc-reply-indent: 8;
      --irc-reply-spine-length: 3;
      }
    `,
    ChannelTweaks: `
      @import url("https://aushevahmad.github.io/awesome-css/modules/channeltweaks.css");
    `,
    // Visual Enhancements
    PastelStatuses: `
      rect[fill='#23a55a'], svg[fill='#23a55a'] { fill: #80c968 !important; }
      rect[fill='#f0b232'], svg[fill='#f0b232'] { fill: #e7ca45 !important; }
      rect[fill='#f23f43'], svg[fill='#f23f43'] { fill: #e0526c !important; }
      rect[fill='#80848e'], svg[fill='#80848e'] { fill: #696e88 !important; }
      rect[fill='#593695'], svg[fill='#593695'] { fill: #ac7de6 !important; }
    `,
    LargeEmojis: `
      img[class="emoji otherEmoji_e58351"]:hover {
        transform: scale(320);
      }
    `,
    ReactionAnimations: `
      [class^=reaction_]:not(:has(.burstGlow_ec6b19)) .emoji {
        transition: transform 0.6s ease;
        transform-style: preserve-3d;
      }
      [class^=reaction_]:not(:has(.burstGlow_ec6b19)):hover .emoji {
        animation: flipAndScale 0.6s forwards;
      }
      @keyframes flipAndScale {
        from { transform: rotateY(0deg) scale(1); }
        to { transform: rotateY(360deg) scale(1.5); }
      }
    `,
    CustomNewMemberBadge: `
      [class*=newMemberBadge]:before {
        content: url(https://media.discordapp.net/stickers/1272085262205325352.gif?size=64&quality=lossless);
        transform: translate(-100%, -110%);
        display: inline-block;
        scale: 0.32;
      }
    `,
    ProfileThemeMatching: `
      .custom-profile-theme [class^=statusBubble_] [class^=defaultColor_] {
        color: var(--theme-text-color-dark) !important;
      }
      .custom-profile-theme [class^=statusBubble_],
      .custom-profile-theme [class^=statusBubbleOuter_]:before,
      .custom-profile-theme [class^=statusBubbleOuter_]:after {
        background-color: var(--profile-gradient-button-color) !important;
      }
    `,
    RevertProfiles: `
      @import url("https://raw.githubusercontent.com/Bitslayn/RepluggedAddons/main/themes/btw.bitslayn.revertProfiles/raw/main.css");
    `,
    CoolCodeBlocks: `
      @import url("https://github.com/senshastic/SneshCord/raw/refs/heads/master/Font%20packs/SneshCodeBlocks.css");
    `,
    // Username Customization
    UsernameSymbol: `
      @import url("https://raw.githubusercontent.com/ColynOrg/CSS-Snippets/main/UsernameSymbol.css");
    `,
    HidePlayAgain: `
      [data-list-id^=private-channels] [class^=container_]:has(> [class^=itemContainer_] [class^=clickable_][aria-label]) {
        display: none;
      }
    `,
    AccountSettingsRefresh: `
      @import url("https://dablulite.github.io/css-snippets/AccountSettingsRefresh/import.css");
    `,
    FullServerTooltips: `
      [class^=tooltip] {
        max-width: unset !important;
      }
    `,
    GradientDMs: `
      @import url('https://ukriu.github.io/cssCord/Other/gradientDM.css');
      @import url('https://ukriu.github.io/cssCord/Other/gradientML.css');
      :root {
          --gDM-online: linear-gradient(to right, rgb(68, 105, 68) , transparent);
          --gDM-offline: linear-gradient(to right, rgb(66, 66, 66) , transparent);
          --gDM-dnd: linear-gradient(to right, rgb(130,70,70) , transparent);
          --gDM-idle: linear-gradient(to right, rgb(135, 105, 75) , transparent);
          --gDM-streaming: linear-gradient(to right, rgb(63, 33, 88) , transparent);
          --gDM-border-radius: 12px;
      }
    `,
    CenteredChannelNames: `
      [class^="children_"]:not(:has([class^="topic_"])) [class^="titleWrapper_"] {
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
      }
    `,
    BetterPickers: `
      [class^=lockedEmoji_]:has(+[class*=emojiLockIconContainer_]),
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
      }

      #emoji-picker-tab-panel [class*=categorySectionNitroLocked_],
      [class^=picker_] :is(
        [class*=sectionContainerNitroLocked_],
        [class*=soundRowNitroLocked_]
      ) {
        background-color: transparent;
      }

      #emoji-picker-tab-panel [class^=closeButton_] {
        padding: 16px 16px calc(100% - 106px) calc(100% - 40px);
        margin: 0;
      }
      
      [class^=picker_] {
        >[class^=container] [class^=closeButton_] {
          padding: 16px 16px calc(420px - 106px) calc(100% - 40px);
          margin: 0;
        }

        [class^=buttonOverlayActions_] {
          padding: 0;
        }
        [class^=secondaryButton_] {
          padding: 8px;
        }
      }

      #emoji-picker-tab-panel, [class^=picker_] {
        [class^=nitroTopDividerShadow_],
        [class^=nitroTopDividerLower_] {
          visibility: hidden;
        }
        [class^=nitroTopDividerLock],
        [class^=nitroTopDividerLower_] {
          background: var(--background-accent);
        }
      }
    `,
    GayFolders: `
      @keyframes rainbowBackgroundTransparent {
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
      }
    `,
    HideActivity: `
      [class^='membersGroup']:has([role=button]),
      [class^='member'] [class^='container']:has([class*='badges']) {
        display: none;
      }
    `,
    VisibleServerBanner: `
      [class^="container_"]:not([class*="bannerVisible_"]) >
      [class^="animatedContainer_"] {
        top: 3px;
      }
      [class*="animatedContainer_"] {
        opacity: 1 !important;
      }
      [class*="headerContent_"] {
        filter: drop-shadow(0 1px 1px var(--bg-backdrop));
      }
      /* AMOLEDCord fix */
      [class^="sidebar_"] header {
        background-color: transparent !important;
      }
    `,
    ColoredMessagePills: `
      /* Blue Pill - New Posts */
      [class^="iconVisibility_"]:has([style="color: var(--text-brand);"]) > [class^="unread_"]) {
        background-color: var(--text-brand);
      }
      
      /* Red Pill - Mentions */
      [class^="iconVisibility_"]:has([class^="mentionsBadge_"]) > [class^="unread_"]) {
        background-color: var(--status-danger);
      }
    `,
    ModernAudio: `
      [class^="mosaicItem"] > [class^="wrapperAudio"] > [class^="audioMetadata"] {
        margin-bottom: 24px;
      }
      
      [class^="mosaicItem"] > [class^="wrapperAudio"] > [class^="audioControls"] {
        position: absolute;
        bottom: 0px;
        left: 0px;
        border-radius: 0px 0px 8px 8px;
      }
    `,
    RevealDarkUsernames: `
      /* Handle dark usernames */
      [style^="color: rgb(5, 0, 5);"] {
        [class*=username_]& {
          [id^=chat-messages]:hover &, /* chat messages */
          [class^=member_]:hover &, /* members list */
          [class^=membersGroup_]:hover & /* members list headers */ {
            color: var(--text-normal) !important;
          }
        }
        
        .mention&:hover /* mentions */,
        [class^=channelTextArea_] [class^=wrapper_]&:hover /* mentions in chat bar */ {
          color: var(--text-normal) !important;
          background-color: color-mix(in srgb, var(--text-normal) 20%, transparent) !important;
        }
      }
    `,
    RepositionAppLauncher: `
      .channelTextArea_a7d72e {
        position: relative;
      }

      .channelAppLauncher_df39bd {
        position: absolute;
        top: -50px;
        right: 16px;
      }
    `,
    RemoveAppLauncher: `
      [class*=channelAppLauncher_] {
        display: none;
      }
    `,
    RemoveSettingsAds: `
      div.side_a0 > div.item_a0[data-tab-id="Discord Nitro"] {
        display: none !important;
      }
      div.side_a0 > div.item_a0[data-tab-id="Nitro Server Boost"] {
        display: none !important;
      }
    `,
    LeftFavButton: `
      [class*='result_'] [class*='favButton'] {
        right: unset;
      }
    `,
    UnsimplifyBios: `
      [class^="descriptionClamp_"] {
        display: block!important;
      }
    `,
    BouncyWebm: `
      [class*="inlineMediaEmbed"] {
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
      }
    `,
    SlideoverServers: `
      @import url("https://raw.githubusercontent.com/Andrew6rant/Discord-plugins-and-themes/refs/heads/main/SlideoverServers.theme.css");
    `,
    ClippyStatus: `
      /*Clippy Status*/
      @font-face {
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
        }
    `,
    RemoveForwardButton: `
      .hoverBarButton_e986d9[aria-label="Forward"] {
        display: none !important;
      }
    `,
    DiscordHardcore: `
      html {
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
      }
    `,
    EfficientSettings: `
      @import url("https://minidiscordthemes.github.io/Snippets/EfficientSettings/main.css");
    `,
    MessageBarGreyEmoji: `
      @import url("https://minidiscordthemes.github.io/Snippets/MessageBarGreyEmoji/main.css");
    `,
    MinimalAuthorisedApps: `
      @import url("https://minidiscordthemes.github.io/Snippets/MinimalAuthApps/main.css");
    `,
    EeveeOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/LuSaffi/VenCordstuff/blob/main/Images/eevee.png?raw=true) !important;
      }
    `,
    CalicoOneko: `
      div[id*=oneko] {
        background-image: url(https://raw.githubusercontent.com/coolesding/onekocord/refs/heads/main/skins/calico.png) !important;
      }
    `,
    FoxOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/fox.png?raw=true) !important;
      }
    `,
    GhostOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/ghost.png?raw=true) !important;
      }
    `,
    GreyOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/gray.png?raw=true) !important;
      }
    `,
    KinaOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/kina.png?raw=true) !important;
      }
    `,
    LucyOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/lucy.png?raw=true) !important;
      }
    `,
    MaiaOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/maia.png?raw=true) !important;
      }
    `,
    MariaOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/maria.png?raw=true) !important;
      }
    `,
    MikeOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/mike.png?raw=true) !important;
      }
    `,
    SilverOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/silver.png?raw=true) !important;
      }
    `,
    SilverskyOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/silversky.png?raw=true) !important;
      }
    `,
    SnuupyOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/snuupy.png?raw=true) !important;
      }
    `,
    SpiritOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/spirit.png?raw=true) !important;
      }
    `,
    ToraOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/tora.png?raw=true) !important;
      }
    `,
    CollapsibleChatButtons: `
      .buttons_ce5b56 {
        margin: 6px 6px 6px auto !important;
        margin-left: auto;
        max-width: calc(40px * 7); /* 7 columns when expanded: emoji, gif, sticker, gift, upload, soundboard, apps */
        min-width: calc(40px * 2); /* 2 columns when collapsed */
        width: min-content;
        display: flex;
        gap: 6px 0;
        flex-wrap: wrap-reverse;
        flex-grow: 1;
        height: fit-content;
        justify-content: right;
      }
      .buttons_ce5b56 .buttonContainer__8b164,
      .buttons_ce5b56 > .button_afdfd9 {
        width: 40px;
      }
      .separator__8424b {
        margin: 0;
        justify-content: center;
        width: 40px;
      }
      .separator__8424b::before {
        display: none;
      }
      .separator__8424b .innerButton_debeee {
        margin: 0;
      }
      .textArea__74543 {
        width: fit-content;
        flex-grow: 1.01;
      }
    `,
    FixMosaicZoom: `
      [class^="imageWrapper_"] img[class^="lazyImg"] {
        object-fit: contain !important;
      }
    `,
    DisableSuperReactionAd: `
      .reaction_fef95b[style*="background"] {
        pointer-events: none;
      }
    `,
    ChannelHover: `
      /* Hover Anim */
      .wrapper_d8bfb3 .link_d8bfb3 /* channels */,
      .membersWrap_cbd271 .container_e9f61e /* members */,
      .channel_c91bad /* dms */,
      .side_a0 .item_a0 /* settings */ {
         transition: margin-left 0.2s ease;
      }
      .wrapper_d8bfb3:hover .link_d8bfb3,
      .side_a0 .item_a0:hover {
         margin-left: 10px;
      }
      .membersWrap_cbd271 .container_e9f61e:hover,
      .channel_c91bad:hover {
         margin-left: 18px;
      }
    `,
    Discolored: `
      @import "https://nyri4.github.io/Discolored/main.css";
      @import url("https://nyri4.github.io/donators/donators.css");
    `,
    RevertGifFavorite: `
      [class*='gifFavoriteButton_'] {
        background-color: transparent;
      }
    `,
    RightServerList: `
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
    RightChannelList: `
      [class^="sidebar_"] { /*Channel bar*/
        order: 1;
      }

      [class^="base_"] [class^="chatLayerWrapper_"] [class^="container_"] { /*slightly fixes forums when switching channel list*/
        margin-right: 240px;
      }
    `,
    LeftMemberList: `
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
    AccountDetailsGrid: `
      @import url(//dablulite.github.io/css-snippets/AccountDetailsGrid/import.css);
    `,
    ChannelServers: `
      @import url(//dablulite.github.io/css-snippets/ServersList/import.css);
      :root {
        --guild-list-width: 290px;
        --guild-list-height: 48px;
        --guild-item-radius: 50px;
        --guild-item-spacing: 8px;
        --guild-item-font-size: 16px;
      }
    `,
    HidePinDiscovery: `
      @import url("https://raw.githubusercontent.com/KrstlSkll69/vc-snippets/main/OtherStuff/hideGlobalDiscovery.css");
    `,
    DualLineChatbox: `
      /* Make the inner container use column layout */
      [class^="channelTextArea_"] [class^="inner_"] {
        flex-direction: column;
        gap: 8px;
      }

      /* Position the attach button wrapper */
      [class^="attachWrapper_"] {
        position: absolute;
        left: 16px;
        bottom: 0;
      }

      /* Adjust buttons container */
      [class^="inner_"] [class^="buttons_"] {
        margin-left: 48px; /* Give space for the attach button */
        padding: 4px 0;
      }

      /* Keep separator aligned properly */
      [class^="inner_"] [class^="separator_"] {
        margin-left: auto;
      }
    `,
    ValentineOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/valentine.png?raw=true) !important;
      }
    `,
    AceOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/ace.png?raw=true) !important;
      }
    `,
    MonoOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/black.png?raw=true) !important;
      }
    `,
    BunnyOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/bunny.png?raw=true) !important;
      }
    `,
    EsmeraldaOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/esmeralda.png?raw=true) !important;
      }
    `,
    JessOneko: `
      div[id*=oneko] {
        background-image: url(https://github.com/coolesding/onekocord/blob/main/skins/jess.png?raw=true) !important;
      }
    `
  };
  tryToEnableTweaks() {
    const savedPrefs = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "settings"
    );
    const savedQuickCss = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "quickcss"
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
    if (savedPrefs) {
      Object.entries(savedPrefs).forEach(([key, value]) => {
        if (value === true && this.cssThemes[key]) {
          if (document.readyState === "complete") {
            this.applyCss(this.cssThemes[key], `essentials-${key}`);
          } else {
            window.addEventListener(
              "load",
              () => this.applyCss(this.cssThemes[key], `essentials-${key}`)
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
  settingsSections = [
    {
      header: "Essentials",
      divider: true,
      settings: ["mochatweaks", "quickcss"]
    }
  ];
  settingsTabs = {
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
    }
  };
}
exports.default = Essentials;
