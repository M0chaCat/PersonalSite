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

exports.default = ForceOwnerCrown;