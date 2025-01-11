"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class BetterGifPicker {
  info = {
    name: "Re!BetterGifPicker",
    id: "cat.kitties.arcane.BetterGifPicker",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "Samwich",
      id: "976176454511509554n"
    }],
    description: "Makes the gif picker open the favorite category by default",
    version: "1.0.0",
    patches: [
      {
        find: ".GIFPickerResultTypes.SEARCH",
        replacement: [{
          match: /(?<="state",{resultType:)null/,
          replace: '"Favorites"'
        }]
      }
    ],
    preferences: []
  };
}

exports.default = BetterGifPicker;/*NKSIG_W3sicyI6IkFla1lpOW82bXZIa0dtSzRNajJlRk9HcFY0OXhGM1V6dHBtWkwzYlhISFNsVmhmVUUrZGNrSUhXNHV6WmgxdnEzR1FEMTFxVUl1NkltSnFVMFl4M0E0V05BQU1xVU1mZ2dPRC81S2xlOGdYL1FEZXZUQ294UEsxNkQvSGluZWFtcFowSUVzbnc2cEVjYzMwQWd2cUREMWlFdzlRMU00NlhlbVk5SWVQSmlmdk9Ed3JXIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/