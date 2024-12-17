"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const React = require("react");
function SettingsToggle({ label, description, value, onChange }) {
  return /* @__PURE__ */ React.createElement("div", { className: "mt-4 defaultColor_a595eb", style: {
    width: "100%",
    padding: "16px",
    backgroundColor: "var(--background-secondary)",
    borderRadius: "4px"
  } }, /* @__PURE__ */ React.createElement("div", { style: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  } }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-md/normal_dc00ef" }, label), /* @__PURE__ */ React.createElement("p", { className: "text-sm/normal_dc00ef", style: { opacity: 0.7 } }, description)), /* @__PURE__ */ React.createElement("div", { className: "container_c669ee", onClick: onChange, style: { cursor: "pointer" } }, /* @__PURE__ */ React.createElement("div", { className: `slider_c669ee${value ? " checked_c669ee" : ""}` }, /* @__PURE__ */ React.createElement("div", { className: "handle_c669ee" }, /* @__PURE__ */ React.createElement("svg", { className: "icon_c669ee", "aria-hidden": "true", role: "img", width: "10", height: "10", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { fill: "currentColor", d: value ? "M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z" : "M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z" })))))));
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
    // Chat Features
    CustomChatPlaceholder: false,
    CustomChatPlaceholderAlt: false,
    HideTimestamps: false,
    ScrollingText: false,
    BiggerSummaries: false,
    IRCTheme: false,
    // Visual Enhancements
    PastelStatuses: false,
    LargeEmojis: false,
    ReactionAnimations: false,
    CustomNewMemberBadge: false,
    ProfileThemeMatching: false,
    RevertProfiles: false,
    CoolCodeBlocks: false,
    UnsimplifyBios: false,
    // Fun & Experimental
    DiscordHardcore: false,
    GayFolders: false,
    GradientDMs: false,
    BouncyWebm: false,
    ClippyStatus: false,
    SlideoverServers: false,
    UsernameSymbol: false,
    EeveeOneko: false
  });
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
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "defaultColor_a595eb text-md/normal_dc00ef" }, "M0chaTweaks Settings"), /* @__PURE__ */ React.createElement("div", { className: "defaultColor_a595eb text-md/normal_dc00ef mb-8" }, /* @__PURE__ */ React.createElement("p", null, "Welcome to the M0chaTweaks page!")), /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "defaultColor_a595eb text-md/normal_dc00ef mb-2" }, "Core UI Improvements"), /* @__PURE__ */ React.createElement("div", { className: "divider mb-4", style: { height: "1px", backgroundColor: "var(--background-modifier-accent)" } }), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Forum Improvements",
      description: "Enhanced forum layout and functionality",
      value: settings.ForumImprovements,
      onChange: () => handleToggle("ForumImprovements")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Appearance Tab Improvements",
      description: "Better organized appearance settings",
      value: settings.AppearanceTabImprovements,
      onChange: () => handleToggle("AppearanceTabImprovements")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Hide No Permission Chat",
      description: "Hides chat input when you don't have permission to send messages",
      value: settings.HideNoPermissionChat,
      onChange: () => handleToggle("HideNoPermissionChat")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Collapsible Message Actions",
      description: "Hides message actions until message is hovered",
      value: settings.CollapsibleMessageActions,
      onChange: () => handleToggle("CollapsibleMessageActions")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Collapsible Message Actions (Shift)",
      description: "Hides message actions until message is hovered or shift is held",
      value: settings.CollapsibleMessageActionsAlt,
      onChange: () => handleToggle("CollapsibleMessageActionsAlt")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Better Message Buttons",
      description: "Organizes message buttons in a grid with Reply and Edit separated",
      value: settings.BetterMessageButtons,
      onChange: () => handleToggle("BetterMessageButtons")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Better Message Buttons (Alt)",
      description: "Same as above, but also separates the Forward button",
      value: settings.BetterMessageButtonsAlt,
      onChange: () => handleToggle("BetterMessageButtonsAlt")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Move Forward Button",
      description: "Reorders message buttons to preserve muscle memory",
      value: settings.MoveForwardButton,
      onChange: () => handleToggle("MoveForwardButton")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Remove Forward Button",
      description: "Completely removes the Forward button from message actions",
      value: settings.RemoveForwardButton,
      onChange: () => handleToggle("RemoveForwardButton")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Account Settings Refresh",
      description: "A fresh take on the Account Settings area",
      value: settings.AccountSettingsRefresh,
      onChange: () => handleToggle("AccountSettingsRefresh")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Remove Settings Ads",
      description: "Removes Nitro and Boost tabs from settings",
      value: settings.RemoveSettingsAds,
      onChange: () => handleToggle("RemoveSettingsAds")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Efficient Settings",
      description: "Shortens the right-click settings menu by hiding options that just open the full settings menu",
      value: settings.EfficientSettings,
      onChange: () => handleToggle("EfficientSettings")
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "defaultColor_a595eb text-md/normal_dc00ef mb-2" }, "Interface Tweaks"), /* @__PURE__ */ React.createElement("div", { className: "divider mb-4", style: { height: "1px", backgroundColor: "var(--background-modifier-accent)" } }), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Hide Play Again",
      description: "Hides the Play Again section in DMs",
      value: settings.HidePlayAgain,
      onChange: () => handleToggle("HidePlayAgain")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Full Server Tooltips",
      description: "Shows the complete server name in tooltips without line breaks",
      value: settings.FullServerTooltips,
      onChange: () => handleToggle("FullServerTooltips")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Centered Channel Names",
      description: "Centers channel names in the header",
      value: settings.CenteredChannelNames,
      onChange: () => handleToggle("CenteredChannelNames")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Better Pickers",
      description: "Changes purple to grey in the soundboard and emoji picker",
      value: settings.BetterPickers,
      onChange: () => handleToggle("BetterPickers")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Hide Activity",
      description: "Hides recent activity in the member list",
      value: settings.HideActivity,
      onChange: () => handleToggle("HideActivity")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Show Status and Username",
      description: "Shows both status and username simultaneously with @ symbol",
      value: settings.UsernameSymbol,
      onChange: () => handleToggle("UsernameSymbol")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Visible Server Banner",
      description: "Keeps server banner visible while scrolling through channels",
      value: settings.VisibleServerBanner,
      onChange: () => handleToggle("VisibleServerBanner")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Colored Message Pills",
      description: "Colors the message pills based on mentions and new posts",
      value: settings.ColoredMessagePills,
      onChange: () => handleToggle("ColoredMessagePills")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Modern Audio",
      description: "Updates the appearance of audio attachments",
      value: settings.ModernAudio,
      onChange: () => handleToggle("ModernAudio")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Reveal Dark Usernames",
      description: "Makes dark usernames visible when hovering over them",
      value: settings.RevealDarkUsernames,
      onChange: () => handleToggle("RevealDarkUsernames")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Reposition App Launcher",
      description: "Moves the app launcher above the chat input to avoid muscle memory conflicts",
      value: settings.RepositionAppLauncher,
      onChange: () => handleToggle("RepositionAppLauncher")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Remove App Launcher",
      description: "Removes the new app launcher button entirely",
      value: settings.RemoveAppLauncher,
      onChange: () => handleToggle("RemoveAppLauncher")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Left Favorite Button",
      description: "Moves the favorite button back to the left in GIF search",
      value: settings.LeftFavButton,
      onChange: () => handleToggle("LeftFavButton")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Minimal Searchbar",
      description: "Condenses the searchbar into an icon when not in use",
      value: settings.MinimalSearchbar,
      onChange: () => handleToggle("MinimalSearchbar")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Message Bar Grey Emoji",
      description: "Replaces full-colour emojis with outline-only emojis in the message bar placeholder",
      value: settings.MessageBarGreyEmoji,
      onChange: () => handleToggle("MessageBarGreyEmoji")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Minimal Authorised Apps",
      description: "A minimised look for authorised app cards that expands on hover",
      value: settings.MinimalAuthorisedApps,
      onChange: () => handleToggle("MinimalAuthorisedApps")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Slideover Servers",
      description: "Turns the server list into a grid that slides out on hover",
      value: settings.SlideoverServers,
      onChange: () => handleToggle("SlideoverServers")
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "defaultColor_a595eb text-md/normal_dc00ef mb-2" }, "Chat Features"), /* @__PURE__ */ React.createElement("div", { className: "divider mb-4", style: { height: "1px", backgroundColor: "var(--background-modifier-accent)" } }), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Custom Chat Placeholder",
      description: 'Changes the chat placeholder to "be silly :3"',
      value: settings.CustomChatPlaceholder,
      onChange: () => handleToggle("CustomChatPlaceholder")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Silly \xDE User Chat Placeholder",
      description: 'Changes the chat placeholder to "be silly, use \xFE :3"',
      value: settings.CustomChatPlaceholderAlt,
      onChange: () => handleToggle("CustomChatPlaceholderAlt")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Hide Timestamps",
      description: "Hides message timestamps until hovered",
      value: settings.HideTimestamps,
      onChange: () => handleToggle("HideTimestamps")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Scrolling Text",
      description: "Adds scrolling animation to long header text",
      value: settings.ScrollingText,
      onChange: () => handleToggle("ScrollingText")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Bigger Summaries",
      description: "Increases the size of forum topic summaries",
      value: settings.BiggerSummaries,
      onChange: () => handleToggle("BiggerSummaries")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "IRC Theme",
      description: "Classic IRC-style chat layout (requires compact mode)",
      value: settings.IRCTheme,
      onChange: () => handleToggle("IRCTheme")
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "defaultColor_a595eb text-md/normal_dc00ef mb-2" }, "Visual Enhancements"), /* @__PURE__ */ React.createElement("div", { className: "divider mb-4", style: { height: "1px", backgroundColor: "var(--background-modifier-accent)" } }), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Pastel Statuses",
      description: "Changes status colors to pastel variants",
      value: settings.PastelStatuses,
      onChange: () => handleToggle("PastelStatuses")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Large Emojis",
      description: "Makes emojis larger when hovered",
      value: settings.LargeEmojis,
      onChange: () => handleToggle("LargeEmojis")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Reaction Animations",
      description: "Adds flip animation to reaction emojis",
      value: settings.ReactionAnimations,
      onChange: () => handleToggle("ReactionAnimations")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Custom New Member Badge",
      description: "Replaces the new member badge with a custom one",
      value: settings.CustomNewMemberBadge,
      onChange: () => handleToggle("CustomNewMemberBadge")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Profile Status Matching",
      description: "Makes profile status match theme colors",
      value: settings.ProfileThemeMatching,
      onChange: () => handleToggle("ProfileThemeMatching")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Revert Profiles",
      description: "Reverts user profiles to the classic layout (incompatible with Profile Status Matching)",
      value: settings.RevertProfiles,
      onChange: () => handleToggle("RevertProfiles")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Cool Code Blocks",
      description: "Pretty code blocks with snake animation and pastel gradients",
      value: settings.CoolCodeBlocks,
      onChange: () => handleToggle("CoolCodeBlocks")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Un-Simplify Bios",
      description: "Shows full bios in simplified profiles",
      value: settings.UnsimplifyBios,
      onChange: () => handleToggle("UnsimplifyBios")
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "settings-section mb-8" }, /* @__PURE__ */ React.createElement("h2", { className: "defaultColor_a595eb text-md/normal_dc00ef mb-2" }, "Fun & Experimental"), /* @__PURE__ */ React.createElement("div", { className: "divider mb-4", style: { height: "1px", backgroundColor: "var(--background-modifier-accent)" } }), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Discord Hardcore Mode",
      description: /* @__PURE__ */ React.createElement(React.Fragment, null, "Makes Discord significantly ", /* @__PURE__ */ React.createElement("s", null, "more"), " less challenging to use"),
      value: settings.DiscordHardcore,
      onChange: () => handleToggle("DiscordHardcore")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Gay Folders",
      description: "Adds rainbow animation to folders containing 'gay' in their name",
      value: settings.GayFolders,
      onChange: () => handleToggle("GayFolders")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Gradient DMs",
      description: "Adds gradient backgrounds to DM list and member list based on status",
      value: settings.GradientDMs,
      onChange: () => handleToggle("GradientDMs")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Bouncy Webm",
      description: "Makes webm files bounce the chat around like the good old days",
      value: settings.BouncyWebm,
      onChange: () => handleToggle("BouncyWebm")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Clippy Status",
      description: "Turns status in new profiles into Clippy-style speech bubble (incompatible with Profile Status Matching/Revert Profiles)",
      value: settings.ClippyStatus,
      onChange: () => handleToggle("ClippyStatus")
    }
  ), /* @__PURE__ */ React.createElement(
    SettingsToggle,
    {
      label: "Eevee Oneko",
      description: "Replaces the Oneko cat with an Eevee",
      value: settings.EeveeOneko,
      onChange: () => handleToggle("EeveeOneko")
    }
  )), /* @__PURE__ */ React.createElement("style", null, `
.container_c669ee {
  width: 40px;
  height: 24px;
  position: relative;
}

.slider_c669ee {
  width: 100%;
  height: 100%;
  background-color: var(--background-tertiary);
  border-radius: 12px;
  transition: background-color .15s ease;
}

.slider_c669ee.checked_c669ee {
  background-color: #23a559;
}

.handle_c669ee {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  background-color: var(--interactive-normal);
  border-radius: 9px;
  transition: all .15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider_c669ee.checked_c669ee .handle_c669ee {
  left: 19px;
  background-color: #fff;
}

.icon_c669ee {
  width: 10px;
  height: 10px;
  color: var(--background-primary);
}

.slider_c669ee.checked_c669ee .icon_c669ee {
  color: #23a559;
}
        `));
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
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "Minor tweaks that make discord better!",
    version: "2.0.1",
    patches: [],
    preferences: [
      {
        name: "MochaTweaks",
        description: "CSS Tweaks called MochaTweaks",
        id: "MochaTweaks",
        type: "boolean",
        default: false
      },
      {
        name: "CompactMode",
        description: "Enable compact message layout",
        id: "CompactMode",
        type: "boolean",
        default: false
      },
      {
        name: "DarkMode",
        description: "Enhanced dark mode with deeper blacks",
        id: "DarkMode",
        type: "boolean",
        default: false
      }
    ]
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

      /* Theme Menu Cleanup */
      div[class^=premiumFeatureBorder] {
        border: none;
        
        div[class^=background_] { padding: 0; }
        div[class^=title],
        div[class^=tryItOutButtons],
        h3[class^=defaultColor] { display: none; }
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
      [class^="iconVisibility_"]:has([style="color: var(--text-brand);"]) > [class^="unread_"] {
        background-color: var(--text-brand);
      }
      
      /* Red Pill - Mentions */
      [class^="iconVisibility_"]:has([class^="mentionsBadge_"]) > [class^="unread_"] {
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
    `
  };
  tryToEnableTweaks() {
    const savedPrefs = NekocordNative.preferences.getForPlugin(
      "cat.kitties.arcane.Essentials",
      "settings"
    );
    const existingStyles = document.querySelectorAll('style[id^="essentials-"]');
    existingStyles.forEach((style) => style.remove());
    if (savedPrefs) {
      Object.entries(savedPrefs).forEach(([key, value]) => {
        if (value === true && this.cssThemes[key]) {
          if (document.readyState === "complete") {
            this.applyCss(this.cssThemes[key], `essentials-${key}`);
          } else {
            window.addEventListener("load", () => this.applyCss(this.cssThemes[key], `essentials-${key}`));
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
      settings: [
        "essentials"
      ]
    }
  ];
  settingsTabs = {
    "essentials": {
      section: "M0chaTweaks",
      searchableTitles: ["Essentials", "Tweaks", "Essentials"],
      label: "M0chaTweaks",
      element: M0chaTweaksTab
    }
  };
}
exports.default = Essentials;
