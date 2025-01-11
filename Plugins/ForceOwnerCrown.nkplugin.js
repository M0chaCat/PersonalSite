"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;


class ForceOwnerCrown {
  info = {
      name: "Re!ForceOwnerCrown",
      description: "Force the owner crown next to usernames even if the server is large.",
      authors: [{
        name: "Mocha",
        id: "808802000224518264"
      },
      {
        name: "D3SOX",
        id: "201052085641281538n"
      },
      {
        name: "Nickyux",
        id: "427146305651998721n"
      }
    ],
      version: "1.0.0",
      id: "cat.kitties.arcane.ForceOwnerCrown"
  }
  patches = [
      {
          find: ".PREMIUM_GUILD_SUBSCRIPTION_TOOLTIP",
          replacement: [
              {
                  match: /,isOwner:(\i),/,
                  replace: ",_isOwner:$1=$self.isGuildOwner(e),"
              }
          ]
      }
  ]
  isGuildOwner(props) {
      if (!props?.user?.id) return props.isOwner;
      if (props.channel?.type === 3 /* GROUP_DM */)
          return props.isOwner;

      // guild id is in props twice, fallback if the first is undefined
      const guildId = props.guildId ?? props.channel?.guild_id;
      const userId = props.user.id;

      return GuildStore.getGuild(guildId)?.ownerId === userId;
  }
};

exports.default = ForceOwnerCrown;/*NKSIG_W3sicyI6IkFRSndMLy84RDhUSGJoV1dTbUNxaytEVFdNWmx0NXU4TG1MUkZyMWJhcWRYcXZuVENUZnZ5aVBYdTcrZHdibStjYW1MbkJsYzhKM2YzSkV4VGFkd09WVHNBY3NYSnFxTlQ5d1JmcTQ5amFoYWR0b0EyOXo1YjBWZmptd0JWSHNaOEFyb3QxM2dscVArMDFVNUovcUo1ZW5sSzJhTmwrVnNwdzNUNE9nZWtoYzJHaW05In0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/