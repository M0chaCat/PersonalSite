"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;


class ForceOwnerCrown {
  info = {
      name: "Force Owner Crown",
      description: "Force the owner crown next to usernames even if the server is large.",
      authors: [{
        name: "Arcane",
        id: "808802000224518264"
      }],
      version: "0.1.0",
      id: "arcane:ForceOwnerCrown"
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