"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class ConsoleJanitor {
    constructor(userPreferences) {
        this.userPreferences = userPreferences;
    }

    info = {
        name: "Console Janitor",
        description: "Disables annoying console messages/errors",
        authors: [{
            name: "Arcane",
            id: "808802000224518264"
        }],
        version: "0.1.0",
        id: "arcane:ConsoleJanitor",
        patches: [
            {
                find: 'console.warn("Window state not initialized"',
                replacement: {
                    match: /console\.warn\("Window state not initialized"\),/,
                    replace: ""
                }
            },
            {
                find: "is not a valid locale.",
                replacement: {
                    match: /console\.error\("".concat\(\w+," is not a valid locale."\)\);/,
                    replace: ""
                }
            },
            {
                find: "notosans-400-normalitalic",
                replacement: {
                    match: /,"notosans-.+?"/g,
                    replace: ""
                }
            },
            {
                find: 'console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");',
                all: true,
                replacement: {
                    match: /console\.warn\("\[DEPRECATED\] Please use `subscribeWithSelector` middleware"\);/,
                    replace: ""
                }
            },
            {
                find: "RPCServer:WSS",
                replacement: {
                    match: /\w+\.error\("Error: ".concat\((\w+)\.message/,
                    replace: '!$1.message.includes("EADDRINUSE")&&$&'
                }
            },
            {
                find: "Tried getting Dispatch instance before instantiated",
                replacement: {
                    match: /null==\w+&&\w+\.warn\("Tried getting Dispatch instance before instantiated"\),/,
                    replace: ""
                }
            },
            {
                find: "Unable to determine render window for element",
                replacement: {
                    match: /console\.warn\("Unable to determine render window for element",\w+\),/,
                    replace: ""
                }
            },
            {
                find: "failed to send analytics events",
                replacement: {
                    match: /console\.error\("\[analytics\] failed to send analytics events query: ".concat\(\w+\)\)/,
                    replace: ""
                }
            },
            {
                find: "Slow dispatch on",
                replacement: {
                    match: /\w+\.totalTime>100&&\w+\.verbose\("Slow dispatch on ".+?\)\);/,
                    replace: ""
                }
            },
            ...[
                '("MessageActionCreators")', '("ChannelMessages")',
                '("Routing/Utils")', '("RTCControlSocket")',
                '("ConnectionEventFramerateReducer")', '("RTCLatencyTestManager")',
                '("OverlayBridgeStore")', '("RPCServer:WSS")'
            ].map(logger => ({
                find: logger,
                predicate: () => this.userPreferences.disableNoisyLoggers,
                all: true,
                replacement: {
                    match: new RegExp(`new \\w+\\.\\w+${logger.replace(/([()])/g, "\\$1")}`),
                    replace: `$self.NoopLogger${logger}`
                }
            })),
            {
                find: '"Experimental codecs: "',
                predicate: () => this.userPreferences.disableNoisyLoggers,
                replacement: {
                    match: /new \w+\.\w+\("Connection\(".concat\(\w+,"\)"\)\)/,
                    replace: "$self.NoopLogger()"
                }
            },
            {
                find: '"Handling ping: "',
                predicate: () => this.userPreferences.disableNoisyLoggers,
                replacement: {
                    match: /new \w+\.\w+\("RTCConnection\(".concat.+?\)\)(?=,)/,
                    replace: "$self.NoopLogger()"
                }
            },
            {
                find: '("Spotify")',
                predicate: () => this.userPreferences.disableSpotifyLogger,
                replacement: {
                    match: /new \w+\.\w+\("Spotify"\)/,
                    replace: "$self.NoopLogger()"
                }
            }
        ],
        preferences: [
            {
                name: "disableNoisyLoggers",
                description: "Disable noisy loggers like the MessageActionCreators",
                id: "disableNoisyLoggers",
                type: "boolean",
                default: false,
            },
            {
                name: "disableSpotifyLogger",
                description: "Disable the Spotify logger, which leaks account information and access token",
                id: "disableSpotifyLogger",
                type: "boolean",
                default: true,
            }
        ],
    }
}

exports.default = ConsoleJanitor;
