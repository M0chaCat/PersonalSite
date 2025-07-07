"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class animalese {
    constructor() {
        this.audioContext = null;
        this.currentChannelId = null;
        this.isEnabled = false; // Flag to track if the plugin is enabled

        this.highSounds = Array.from(
            { length: 30 },
            (_, i) => `sound${String(i + 1).padStart(2, "0")}.wav`
        );
        this.soundBuffers = {};
        this.BASE_URL_HIGH = "https://raw.githubusercontent.com/ryawaa/vencord-animalese/main/sounds/high";
        
        // Initialize FluxDispatcher here
        Nekocord.webpackPatcher.onInitializationFinish(() => {
            this.WebpackModules = Nekocord.webpackModules;
            this.FluxDispatcher = Nekocord.webpackModules.commonModules.FluxDispatcher; // Store FluxDispatcher for later use
           //console.log("[Animalese] FluxDispatcher initialized."); // Debug log
            
            // Check if FluxDispatcher is defined
            if (this.FluxDispatcher) {
                //console.log("[Animalese] FluxDispatcher is available.");
                this.FluxDispatcher.subscribe("CHANNEL_SELECT", this.channelSelectListener);
                this.FluxDispatcher.subscribe("MESSAGE_CREATE", this.messageCreateListener);
                //console.log("[Animalese] Subscribed to CHANNEL_SELECT and MESSAGE_CREATE events.");
            } else {
                //console.error("[Animalese] FluxDispatcher is not initialized.");
            }
        });
    }

    info = {
      name: "Re!animalese",
      id: "cat.kitties.arcane.animalese",
      authors: [{
          name: "Mocha",
          id: "808802000224518264"
      },{
        name: "ryanamay",
        id: "1262793452236570667n"
    },],
      description: "Plays animalese (they yap a lot) on message sent",
      version: "1.0.0",
      patches: [],
      preferences: [
        {
            name: "Playback Speed",
            description: "Speed of the talking sounds",
            id: "playbackSpeed",
            type: "number",
            default: 1.0,
            options: {
                minValue: 0.5,
                maxValue: 2.0,
            },
        },
        {
            name: "Volume",
            description: "Volume of the talking sounds",
            id: "volume",
            type: "number",
            default: 50,
            options: {
                minValue: 0,
                maxValue: 100,
            },
        },
        {
            name: "Message Length Limit",
            description: "Maximum length of message to process",
            id: "messageLengthLimit",
            type: "number",
            default: 100,
            options: {
                minValue: 50,
                maxValue: 1000,
            },
        },
        {
            name: "Yap Own Messages",
            description: "Enable to yap your own messages too",
            id: "processOwnMessages",
            type: "boolean",
            default: true,
        },
    ],
  };

    onPreferencesChange(userPreferences) {
        this.userPreferences = userPreferences;
    }

    async initSoundBuffers() {
        if (!this.audioContext) this.audioContext = new AudioContext();
        for (const file of this.highSounds) {
            const nameWithoutExt = file.replace(".wav", "");
            try {
                this.soundBuffers[nameWithoutExt] = await this.loadSound(
                    `${this.BASE_URL_HIGH}/${file}`
                );
                //console.log(`Loaded sound: ${nameWithoutExt}`);
            } catch (error) {
                //console.error(`Failed to load sound: ${nameWithoutExt}`, error);
            }
        }
        //console.log("All sound buffers loaded:", Object.keys(this.soundBuffers));
    }

    async loadSound(url) {
        if (!this.audioContext) this.audioContext = new AudioContext();
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not OK");
        const arrayBuffer = await response.arrayBuffer();
        return this.audioContext.decodeAudioData(arrayBuffer);
    }

    async generateAnimalese(text) {
        if (!this.audioContext) this.audioContext = new AudioContext();

        const soundIndices = [];
        const text_lower = text.toLowerCase();

        for (let i = 0; i < text_lower.length; i++) {
            const char = text_lower[i];
            if (char === "s" && text_lower[i + 1] === "h") {
                soundIndices.push("sound27");
                i++;
            } else if (char === "t" && text_lower[i + 1] === "h") {
                soundIndices.push("sound28");
                i++;
            } else if (
                char === "h" &&
                (text_lower[i - 1] === "s" || text_lower[i - 1] === "t")
            ) {
                continue;
            } else if (char === "," || char === "?") {
                soundIndices.push("sound30");
            } else if (char === text_lower[i - 1]) {
                continue;
            } else if (char.match(/[a-z]/)) {
                const index = char.charCodeAt(0) - 96;
                soundIndices.push(`sound${String(index).padStart(2, "0")}`);
            }
        }

        const totalDuration = soundIndices.length * 0.1;
        const outputBuffer = this.audioContext.createBuffer(
            1,
            this.audioContext.sampleRate * totalDuration,
            this.audioContext.sampleRate
        );
        const outputData = outputBuffer.getChannelData(0);

        let offset = 0;
        for (let i = 0; i < soundIndices.length; i++) {
            const soundIndex = soundIndices[i];
            const buffer = this.soundBuffers[soundIndex];
            if (!buffer) continue;

            const variation = 0.15;
            let pitchShift = 2.8 + Math.random() * variation;

            const isQuestion = text_lower.endsWith("?");
            if (isQuestion && i >= soundIndices.length * 0.8) {
                const progress =
                    (i - soundIndices.length * 0.8) / (soundIndices.length * 0.2);
                pitchShift += progress * 0.1 + 0.1;
            }

            const inputData = buffer.getChannelData(0);
            const inputLength = inputData.length;
            const outputLength = Math.floor(inputLength / pitchShift);

            for (let j = 0; j < outputLength; j++) {
                const inputIndex = Math.floor(j * pitchShift);
                if (inputIndex < inputLength && offset + j < outputData.length) {
                    outputData[offset + j] = inputData[inputIndex];
                }
            }
            offset += outputLength;
        }

        return outputBuffer;
    }

    async playSound(buffer) {
      if (!this.audioContext) this.audioContext = new AudioContext();
      
      // Ensure the audio context is resumed
      if (this.audioContext.state === 'suspended') {
          await this.audioContext.resume();
      }

      const source = this.audioContext.createBufferSource();
      const gainNode = this.audioContext.createGain();

      source.buffer = buffer;

      // Set volume based on user preference
      const userVolume = this.userPreferences?.volume || 50;
      gainNode.gain.value = userVolume / 100;

      // Set playback speed based on user preference
      const playbackSpeed = this.userPreferences?.playbackSpeed || 1.0;
      source.playbackRate.value = playbackSpeed;

      source.connect(gainNode);
      gainNode.connect(this.audioContext.destination);

      source.start();
      //console.log("Playing sound with volume:", userVolume, "and speed:", playbackSpeed); // Debug log for sound playback

      // Wait for the sound to finish playing before allowing another sound to play
      source.onended = () => {
          //console.log("Sound playback finished.");
      };
  }

    async testPlaySound() {
        if (!this.audioContext) this.audioContext = new AudioContext();
        
        // Ensure the audio context is resumed
        if (this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
        }

        //console.log("AudioContext state before playing:", this.audioContext.state);
        const testSound = this.soundBuffers['sound01'];
        if (testSound) {
            await this.playSound(testSound, 50);
            //console.log("Playing test sound:", 'sound01');
        } else {
            //console.error("[Animalese] Test sound not found in buffers.");
        }
        //console.log("AudioContext state after playing:", this.audioContext.state);
    }

    start() {
        // Make the start method async
        const init = async () => {
            if (!this.audioContext) {
                this.audioContext = new AudioContext();
                await this.initSoundBuffers();
            }
            document.removeEventListener("click", init);
        };
        document.addEventListener("click", init);

        this.channelSelectListener = () => {
            this.currentChannelId = Nekocord.webpackModules.commonModules.SelectedChannelStore.getChannelId();
            //console.log("Current Channel ID set to:", this.currentChannelId); // Debug log for channel ID
        };

        // Ensure FluxDispatcher is defined before subscribing
        if (this.FluxDispatcher) {
            console.log("[Animalese] FluxDispatcher is available in start method.");
            this.FluxDispatcher.subscribe("CHANNEL_SELECT", this.channelSelectListener);
            //console.log("[Animalese] Subscribed to CHANNEL_SELECT events.");
            this.FluxDispatcher.subscribe("MESSAGE_CREATE", this.messageCreateListener);
            //console.log("[Animalese] Subscribed to MESSAGE_CREATE events.");
        } else {
            //console.error("[Animalese] FluxDispatcher is not initialized in start method.");
        }

        this.messageCreateListener = async ({ optimistic, type, message }) => {
            //console.log("Message received:", message); // Debug log to see incoming messages
            //console.log("Message type:", type); // Debug log for message type
            //console.log("Message author:", message.author); // Debug log for message author
            //console.log("Message content:", message.content); // Debug log for message content
            this.currentChannelId = Nekocord.webpackModules.commonModules.SelectedChannelStore.getChannelId(); // Update currentChannelId here
            //console.log("Current Channel ID:", this.currentChannelId); // Log the current channel ID

            // DO NOT REMOVE THIS OR EELSE IT WILL BE YAP CENTRAL
            if (optimistic || type !== "MESSAGE_CREATE") return;

            // Check if the message content is a URL
            const urlPattern = /https?:\/\/[^\s]+/;
            if (urlPattern.test(message.content)) {
                //console.log("Message is a URL, ignoring:", message.content); // Debug log for URL messages
                return;
            }

            // Check if the message content is too long
            const maxLength = this.userPreferences?.messageLengthLimit || 100; // Use user preference for max length
            if (message.content.length > maxLength) {
                //console.log("Message is too long, ignoring:", message.content); // Debug log for long messages
                return;
            }

            // Check if the message is from the user and if processing own messages is disabled
            const processOwnMessages = this.userPreferences?.processOwnMessages ?? true;
            if (!processOwnMessages && message.author.id === Nekocord.webpackModules.commonModules.UserStore.getCurrentUser().id) {
                //console.log("Ignoring own message:", message.content); // Debug log for own messages
                return;
            }
    
            if (
                !message?.content ||
                message.author?.bot ||
                message.channel_id !== this.currentChannelId
            ) {
                //console.log("Ignoring message:", message); // Debug log for ignored messages
                return;
            }

            if (
                !message?.content ||
                message.author?.bot ||
                message.channel_id !== this.currentChannelId
            ) {
                //console.log("Ignoring message:", message); // Debug log for ignored messages
                return;
            }

            // Debounce logic to prevent multiple triggers
            if (this.isPlaying) {
                //console.log("Sound is already playing, ignoring this message.");
                return;
            }

            try {
                this.isPlaying = true; // Set flag to indicate sound is playing
                const buffer = await this.generateAnimalese(message.content);
                await this.playSound(buffer, 50);
            } catch (err) {
                //console.error("[Animalese] Error generating or playing sound:", err);
            } finally {
                this.isPlaying = false; // Reset flag after playback
            }
        };

        // Move the async calls into the init function
        init().then(async () => {
            //await this.testPlaySound(); // Call the test function after initialization
        });
    }

    stop() {
        if (this.FluxDispatcher) {
            this.FluxDispatcher.unsubscribe(
                "CHANNEL_SELECT",
                this.channelSelectListener
            );
            this.FluxDispatcher.unsubscribe(
                "MESSAGE_CREATE",
                this.messageCreateListener
            );
        }
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
        this.currentChannelId = null;
    }
    onEnable() {
        if (this.isEnabled) {
            //console.warn("[Animalese] Plugin is already enabled.");
            return; // Prevent re-enabling
        }
        this.isEnabled = true; // Set the flag to true
        //console.log("[Animalese] Plugin enabled."); // Debug log
        this.start();
    }
    onDisable () {
      this.stop();
    }
}
exports.default = animalese;/*NKSIG_W3sicyI6IkFJVmlGc25PQS9NRkdTNUc5YXlRTGI1VmxHbDU5bERLV0JOdXRJY3NVS0pWMGlsYVJEaUxNRjkyMkZnOFYvVFRhVUEvZndRNEJJZkNUT0NYcE80NlJ2L25BRlRTWCtrZGpvOXRkTVlUN0V1dzBjOXhOUlpmcmNZRy83ODFVcUhpUTcxZkR6MXlRWllIZTl5R0ttRm1FUnVJSS83OXNrbVFhZFNuUWtuOXNGbG9MZXJmIn0seyJjIjoiZXlKcklqcDdJbmdpT2lKQlJuTk9Vamt4UzJweVZHVlVkWFZSZDNGcGFqSlhlVUl4YUhKbk1tTTRZM0JKTkdodmJsUXlWMlF4VVRGaldIaE1ka3A1WTFwTk0zbEtVakJGZUdKS01HaHJhREkxWVZwc1RYTlhSemRVZVVwMGVrSk1RWGhQSWl3aWVTSTZJa0ZXVUhseGVHZFVSVGMxV1ZGTk9EVkNZM1JyWjJoelNWODRNRTl4ZGpReWMwTmtWV1pIZERoS2VteHBlRGhNVWtSd1QyUnhjblZNTm1vMU5HZDVRMGRRT0haNldqZFVkVXhXV0hOWlh6TjRhMlJ5U1drd1l6Z2lmU3dpWXlJNld5SlFURlZIU1U1ZlUwbEhUa2xPUnlJc0lrNUZTMDlEVDFKRVgxUkZRVTBpWFN3aWJTSTZleUp1SWpvaVVHeDFaMmx1SUZOcFoyNXBibWM2SUUwd1kyaGhZMkYwSW4xOSIsInMiOiJBWUQvT3E3U0NQekpmbGFmSWJiZlNqcktnOExKNWZLVEVQSVRYWDVQY2duUnc5aDhtdzNSQTJ3TG5CenQ3Z2U3TE55MHRpUEtCQnB0SG00a2FkL1VzdXZWQVp5ejRvUFdzZ1ZWWDJ0TkN3UmlNalBZZy9QTlhXR25HUlNQUk9BSTV6bWpLWldOaERMLzZpWFFNaVR0S2dKMG4vbWVwZ2NTZGs3VVdsVHBwc3B5VWk4QSJ9XQ==*/