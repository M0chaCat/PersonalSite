"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
const React = require("react");
function M0chaLibraryTab() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { class: "defaultColor_a595eb text-md/normal_dc00ef" }, "M0chaLibrary Settings"), /* @__PURE__ */ React.createElement("div", { class: "defaultColor_a595eb text-md/normal_dc00ef" }, /* @__PURE__ */ React.createElement("p", null, "Welcome to the M0chaLibrary page!"), /* @__PURE__ */ React.createElement("p", null, "This plugin was created by Mocha for her other plugins to use!")), /* @__PURE__ */ React.createElement("div", { class: "mt-4" }, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      title: "Discord user embed",
      width: "100%",
      height: "120",
      frameBorder: "0",
      sandbox: "allow-scripts",
      src: "https://widgets.vendicated.dev/user?id=808802000224518264&theme=dark&banner=true&rounded-corners=false&discord-icon=false&badges=true&guess-nitro=true&",
      className: "mb-4"
    }
  )));
}
class M0chaLibrary {
  constructor(userPreferences) {
    this.userPreferences = userPreferences;
    Nekocord.webpackPatcher.onInitializationFinish(() => {
      this.WebpackModules = Nekocord.webpackModules;
      this.MenuGroup = Nekocord.webpackModules.commonModules.MenuGroup;
      this.MenuItem = Nekocord.webpackModules.commonModules.MenuItem;
    });
  }
  info = {
    name: "MochaLibrary",
    id: "cat.kitties.arcane.MochaLibrary",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    }],
    description: "Library for Mocha's plugins",
    version: "1.0.0",
    patches: [
      {
        find: ".FULL_SIZE]:26",
        replacement: {
          match: /return\s+0\s*===\s*(\w+)\.length\s*\?/,
          replace: "$self.getBadges(arguments[0].displayProfile?.userId)?.forEach(b=>$1.unshift(b));$&"
        }
      },
      {
        find: ".description,delay:",
        replacement: [
          {
            match: /alt:" ","aria-hidden":!0,src:(?=.{0,20}(\i)\.icon)/,
            replace: "...$1.props,$& $1.image??"
          },
          {
            match: /href:(\i)\.link/,
            replace: "...($1.onClick && { onClick: vcE => $1.onClick(vcE, $1) }),$&"
          }
        ]
      }
    ],
    menu: {},
    preferences: []
  };
  settingsSections = [
    {
      header: "M0chaLibrary",
      divider: true,
      settings: [
        "M0chaLibrary"
      ]
    }
  ];
  settingsTabs = {
    M0chaLibrary: {
      section: "M0chaLibrary",
      searchableTitles: ["M0chaLibrary"],
      label: "M0chaLibrary",
      element: M0chaLibraryTab
    }
  };
  getBadges(userId) {
    if (!this.badgesData.users[userId]) return [];
    return this.badgesData.users[userId].badges.map((k) => this.badgesData.badges[k]).map((badge) => ({
      image: badge.image,
      description: badge.name,
      props: {
        style: {
          transform: "scale(0.9)"
        }
      }
    }));
  }
  async reloadBadges() {
    try {
      const response = await fetch("https://arcane.kitties.cat/KittyBadges.json", {
        cache: "no-cache"
      });
      this.badgesData = await response.json();
    } catch (e) {
      console.error("Failed to fetch badges", e);
      this.badgesData = {
        badges: {},
        users: {}
      };
    }
  }
  onRegister(userPreferences) {
    this.userPreferences = userPreferences;
    this.reloadBadges();
    setInterval(() => this.reloadBadges(), 60 * 1e3);
  }
}
function simpleFunction() {
  console.log("This is a simple function.");
}
exports.default = M0chaLibrary;
exports.simpleFunction = simpleFunction;
/*NKSIG_W3sicyI6IkFhR3hMck40T244RUlFOTBWdXFqT2QwNEt1MlA1b0phd0V1dndGSjRXeGZhbUgxZUxjNzVETHYxWThubFNsL1NkOEhodTJFR1YyKzFOUDJaZmREWGVHa3BBQUhuYmwwL1cwc2c4QkloN3hSL1FKWG1QQnMrd0JLeHowQTRPbGlYT3NmT0J5aUd5ekRROC9pMDlqM3lsTlMzT01tQW1NM2VDYTJ0eDJhUmRicGYrbDlpIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/