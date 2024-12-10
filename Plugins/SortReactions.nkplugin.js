//https://github.com/HAHALOSAH/SortReactions/blob/main/index.ts
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class SortReactions {
  info = {
    name: "Re!SortReactions",
    id: "cat.kitties.arcane.SortReactions",
    authors: [{
      name: "Mocha",
      id: "808802000224518264"
    },
    {
      name: "HAHALOSAH",
      id: "903418691268513883"
    }
  ],
    description: "Sort reactions by name",
    version: "1.0.0",
    patches: [
      {
          find: 'location:"message_reactions"',
          replacement: [
              {
                  match: /{reactions:(\i),/,
                  replace: "{reactions:$1.sort((a,b)=>b.count-a.count),",
              },
          ],
      },
    ],
  };

    
}


exports.default = SortReactions;
