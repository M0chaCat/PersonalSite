"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BetterUploadButton {
  info = {
    name: "Re!BetterUploadButton",
    id: "cat.kitties.arcane.BetterUploadButton",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Fawn",
      id: "336678828233588736n"
    },
    {
      name: "Vee",
      id: "343383572805058560n"
    }
  ],
    description: "Upload with a single click, open menu with right click",
    version: "1.0.0",
    patches: [
      {
        find: "Messages.CHAT_ATTACH_UPLOAD_OR_INVITE",
        replacement: {
          // Discord merges multiple props here with Object.assign()
          // This patch passes a third object to it with which we override onClick and onContextMenu
          match: /CHAT_ATTACH_UPLOAD_OR_INVITE,onDoubleClick:(.+?:void 0),\.\.\.(\i),/,
          replace: "$&onClick:$1,onContextMenu:$2.onClick,",
        },
      },
    ],
    preferences: []
  };
}

exports.default = BetterUploadButton;/*NKSIG_W3sicyI6IkFZdjN1bFJ4Mk5sZEQ0eDN5WXM5aXgvT1prWHd0R20zL0VlRmphUFdFS3IxbEplTjZGdThBNXQrTUcrYkNKS2lJVTNwUURudW5KM01NdHRGWDUxOVFlZ1BBRTdQdGlzS05YT1k2RkQ1OXJXalU2UU1HRU9haFZUbjc3ZUFFaVBUbDBRM3MyUlBGYWI4SWhmM3JjK3o1NGdGMkxOcjJwUktHbExoWjZ2UXRTNG80ejVpIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/