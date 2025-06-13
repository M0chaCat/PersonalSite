/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./combined.js ***!
  \*********************/


document.addEventListener("DOMContentLoaded", function () {
  // commands.js
  // javascript-obfuscator:disable

  // Define all custom commands here

  function onEvent(id, event, callback) {
    //console.log(`Setting up ${event} event for ${id}`);
    var target = id === "document" ? document : document.getElementById(id);
    if (target) {
      //console.log(`Element found for ${id}, adding ${event} listener`);
      target.addEventListener(event, function (e) {
        //console.log(`${event} event triggered for ${id}`);
        callback(e);
      });
    } else {
      console.warn("Element with id '".concat(id, "' not found. Event '").concat(event, "' not attached."));
    }
  }

  // Function to simulate a click event
  function simulateClick(elementId) {
    var event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    var element = document.getElementById(elementId);
    if (element) {
      element.dispatchEvent(event);
    } else {
      console.error("Element with ID " + elementId + " not found.");
    }
  }
  function BEMA(type, id, x, y, width, height, autohide, rounded, borderWidth, borderColor, bgColor, textColor, text, textAlign, fontSize, fontFamily, readOnly, icon, iconColor) {
    //console.log(`Creating BEMA element: ${type}, ID: ${id}`);
    var element;
    if (type === "Button") {
      element = document.createElement('button');
    } else if (type === "Image") {
      element = document.createElement('img');
      if (icon) {
        element.src = icon;
        element.style.width = '100%';
        element.style.height = '100%';
        element.style.objectFit = 'fill';
      }
    } else if (type === "Input") {
      element = document.createElement('input');
      element.type = 'text'; // Set the input type to 'text'
    } else {
      element = document.createElement(type);
    }
    element.id = id;
    element.style.position = 'absolute';
    element.style.left = "".concat(x, "px");
    element.style.top = "".concat(y, "px");
    element.style.width = "".concat(width, "px");
    element.style.height = "".concat(height, "px");
    element.style.borderStyle = 'solid'; // Ensure border style is set
    element.style.borderWidth = "".concat(borderWidth, "px");
    element.style.borderColor = borderColor;
    element.style.backgroundColor = bgColor;
    element.style.color = textColor;
    element.style.textAlign = textAlign;
    element.style.fontSize = "".concat(fontSize, "px");
    element.style.fontFamily = fontFamily;
    element.style.borderRadius = "".concat(rounded, "px");
    if (readOnly) {
      element.readOnly = true;
      element.style.userSelect = 'none';
      element.style.pointerEvents = 'none';
    }
    if (autohide) {
      element.style.display = 'none';
    }

    // Make all elements clickable
    element.style.pointerEvents = 'auto';
    if (type === "Button") {
      element.style.cursor = 'pointer';
      var img = document.createElement('img');
      img.id = id + '-img'; // Assign an ID to the img element
      if (!icon) {
        img.src = 'brain.png'; // Set no image if icon is falsy
      } else {
        img.src = icon; // Set the src to icon if it's not falsy
      }
      img.style.width = '100%';
      img.style.height = '100%';
      img.style.objectFit = 'contain';
      element.appendChild(img);
      if (text) {
        element.textContent = text;
      }
    } else if (type === "TextArea") {
      element.value = text;
      element.style.outline = 'none';
      element.style.display = 'flex';
      element.style.alignItems = 'center'; // Vertically center the text
      element.style.justifyContent = 'center'; // Horizontally center the text
      element.style.height = "".concat(height, "px"); // Ensure height is set for centering
      if (readOnly) {
        element.style.userSelect = 'none';
        element.style.pointerEvents = 'none';
        element.style.cursor = 'default';
        element.style.overflow = 'hidden'; // Prevent scrolling
      }
    } else if (type === "Input") {
      element.placeholder = text; // Set placeholder instead of value for Input
    } else if (type === "Image" && icon) {
      element.src = icon;
    } else {
      element.style.cursor = 'default'; // Ensure non-button elements have the default cursor
    }
    var container = document.getElementById('bema-container');
    if (container) {
      container.appendChild(element);
      //console.log(`Added ${id} to #bema-container`);
    } else {
      console.error('bema-container not found');
    }
  }
  function preloadImage(url) {
    var img = new Image();
    img.src = url;
  }
  var audioInstances = {}; // Store audio instances by URL

  function stopSound(url) {
    if (audioInstances[url]) {
      audioInstances[url].pause(); // Pause the existing audio instance
      audioInstances[url].currentTime = 0; // Reset to the start
      console.log("Stopped sound for URL: ".concat(url));
    } else {
      console.warn("No audio instance found for URL: ".concat(url));
    }
  }
  function playSound(url) {
    if (!audioInstances[url]) {
      audioInstances[url] = new Audio(url);
    }
    audioInstances[url].play()["catch"](function (error) {
      console.error("Error playing sound: ".concat(error));
    });
    console.log("Playing sound for URL: ".concat(url));
  }
  function setupEventListeners(id) {
    var element = document.getElementById(id);
    if (element) {
      element.classList.add('listening');
      //console.log(`Setup event listeners for ID: ${id}`, element);
      element.addEventListener('click', function () {
        console.log("Click event fired for ".concat(id));
      });
    } else {
      console.error("Element with ID: ".concat(id, " not found for setting up event listeners."));
    }
  }
  function setText(elementId, text) {
    var element = document.getElementById(elementId);
    if (element) {
      if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') {
        element.value = text;
      } else {
        element.innerText = text;
      }
      //console.log(`Set text for element ${elementId}: ${text}`);
    } else {
      console.log("Element not found: ".concat(elementId));
    }
  }
  function getText(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      // Check if the element is an input or textarea
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        return element.value; // Return the value for input and textarea
      } else {
        return element.innerText || element.textContent; // Return innerText or textContent for other elements
      }
    }
    return ''; // Return an empty string if the element is not found
  }
  function deleteElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.remove();
    }
  }
  function appendItem(array, item) {
    array.push(item);
  }
  function generateRandomString(length) {
    var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset[randomIndex];
    }
    return randomString;
  }
  var intervalIds = []; // Store interval IDs

  function timedLoop(interval, callback) {
    var intervalId = setInterval(callback, interval);
    intervalIds.push(intervalId); // Store the interval ID
  }
  function setProperty(elementId, property, value) {
    var element = document.getElementById(elementId);
    if (element) {
      if (property === 'image') {
        element.src = value; // Directly set the src attribute
      } else {
        element.style.setProperty(property, value);
      }
    }
  }
  function immmum() {

    //Information Management and Monitoring Utility Module
    //debug stuff here
  }
  function getProperty(elementId, property) {
    var element = document.getElementById(elementId);
    if (element) {
      if (property === 'image') {
        return element.src; // Directly set the src attribute
      } else {
        return element.style.getPropertyValue(property);
      }
    }
  }
  function showElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'block';
    }
  }
  function hideElement(elementId) {
    var element = document.getElementById(elementId);
    if (element) {
      element.style.display = 'none';
    }
  }
  function getTime(format) {
    var dateCheck = new Date();
    var hours = dateCheck.getHours();
    var minutes = dateCheck.getMinutes();
    var seconds = dateCheck.getSeconds();
    var period = "";

    // Check for 12-hour format
    if (format.includes("hh") || format.includes("hh:mm a") || format.includes("hh:mm:ss a")) {
      period = hours >= 12 ? "PM" : "AM";
      // Convert to 12-hour format
      hours = hours % 12 || 12;
    }
    // Add leading zeroes if needed
    var hoursStr = hours < 10 ? '0' + hours : hours;
    var minutesStr = minutes < 10 ? '0' + minutes : minutes;
    var secondsStr = seconds < 10 ? '0' + seconds : seconds;
    // Replace format tokens wiþ actual time values
    var formattedTime = format.replace("hh", hoursStr).replace("HH", hoursStr).replace("mm", minutesStr).replace("ss", secondsStr).replace("a", period);
    return formattedTime;
  }
  function getDate(format) {
    var dateCheck = new Date();
    var month = dateCheck.getMonth() + 1;
    var day = dateCheck.getDate();
    var year = dateCheck.getFullYear();
    // Get last two digits of þe year
    var yy = year.toString().slice(-2);
    // Add leading zeroes if needed
    var monthStr = month < 10 ? '0' + month : month.toString();
    var dayStr = day < 10 ? '0' + day : day.toString();
    // Replace format tokens wiþ actual date values
    var formattedDate = format.replace("mm", monthStr).replace("dd", dayStr).replace("yyyy", year.toString()).replace("yy", yy);
    return formattedDate;
  }
  function shiftString(inputText, key) {
    var encodedString = "";
    for (var i = 0; i < inputText.length; i++) {
      var charCode = inputText.charCodeAt(i);
      var shiftedCharCode = charCode + key;
      var encodedCharacter = String.fromCharCode(shiftedCharCode);
      encodedString += encodedCharacter;
    }
    return encodedString;
  }
  function unshiftString(encodedString, key) {
    var decodedString = "";
    for (var i = 0; i < encodedString.length; i++) {
      var encodedCharCode = encodedString.charCodeAt(i);
      var originalCharCode = encodedCharCode - key;
      var decodedCharacter = String.fromCharCode(originalCharCode);
      decodedString += decodedCharacter;
    }
    return decodedString;
  }
  var uptimeS = 0;
  timedLoop(1000, function () {
    uptimeS = uptimeS + 1;
  });

  //Returns þe system uptime since boot in seconds
  function getUptimeS() {
    return Math.round(uptimeS);
  }
  var uptimeMS = 0;
  timedLoop(1, function () {
    uptimeMS = uptimeMS + 1;
  });

  //Returns þe system uptime since boot in ms
  function getUptimeMS() {
    return Math.round(uptimeMS);
  }

  // SHA-256 Checker Function
  function checkSha256(message, expectedHash) {
    var computedHash = sha256(message);
    return computedHash === expectedHash;
  }
  //SHA-256 Hashing Function
  function sha256(message) {
    function rightRotate(value, amount) {
      return value >>> amount | value << 32 - amount;
    }
    function utf8Encode(str) {
      return unescape(encodeURIComponent(str));
    }
    var K = [0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2];
    var initialHashValues = [0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19];
    message = utf8Encode(message);
    var lengthInBits = message.length * 8;

    // Pre-processing
    message += String.fromCharCode(0x80); // Append '1' bit
    while (message.length % 64 !== 56) {
      message += String.fromCharCode(0x00); // Append '0' bits
    }
    message += String.fromCharCode(lengthInBits >>> 56 & 0xFF);
    message += String.fromCharCode(lengthInBits >>> 48 & 0xFF);
    message += String.fromCharCode(lengthInBits >>> 40 & 0xFF);
    message += String.fromCharCode(lengthInBits >>> 32 & 0xFF);
    message += String.fromCharCode(lengthInBits >>> 24 & 0xFF);
    message += String.fromCharCode(lengthInBits >>> 16 & 0xFF);
    message += String.fromCharCode(lengthInBits >>> 8 & 0xFF);
    message += String.fromCharCode(lengthInBits & 0xFF);
    var chunks = [];
    for (var i = 0; i < message.length; i += 64) {
      chunks.push(message.slice(i, i + 64));
    }
    var hash = initialHashValues.slice();
    chunks.forEach(function (chunk) {
      var words = new Array(64);
      for (var i = 0; i < 16; i++) {
        words[i] = chunk.charCodeAt(i * 4) << 24 | chunk.charCodeAt(i * 4 + 1) << 16 | chunk.charCodeAt(i * 4 + 2) << 8 | chunk.charCodeAt(i * 4 + 3);
      }
      for (var i = 16; i < 64; i++) {
        var s0 = rightRotate(words[i - 15], 7) ^ rightRotate(words[i - 15], 18) ^ words[i - 15] >>> 3;
        var s1 = rightRotate(words[i - 2], 17) ^ rightRotate(words[i - 2], 19) ^ words[i - 2] >>> 10;
        words[i] = words[i - 16] + s0 + words[i - 7] + s1 & 0xFFFFFFFF;
      }
      var a = hash[0],
        b = hash[1],
        c = hash[2],
        d = hash[3],
        e = hash[4],
        f = hash[5],
        g = hash[6],
        h = hash[7];
      for (var i = 0; i < 64; i++) {
        var s1 = rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25);
        var ch = e & f ^ ~e & g;
        var temp1 = h + s1 + ch + K[i] + words[i] & 0xFFFFFFFF;
        var s0 = rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22);
        var maj = a & b ^ a & c ^ b & c;
        var temp2 = s0 + maj & 0xFFFFFFFF;
        h = g;
        g = f;
        f = e;
        e = d + temp1 & 0xFFFFFFFF;
        d = c;
        c = b;
        b = a;
        a = temp1 + temp2 & 0xFFFFFFFF;
      }
      hash[0] = hash[0] + a & 0xFFFFFFFF;
      hash[1] = hash[1] + b & 0xFFFFFFFF;
      hash[2] = hash[2] + c & 0xFFFFFFFF;
      hash[3] = hash[3] + d & 0xFFFFFFFF;
      hash[4] = hash[4] + e & 0xFFFFFFFF;
      hash[5] = hash[5] + f & 0xFFFFFFFF;
      hash[6] = hash[6] + g & 0xFFFFFFFF;
      hash[7] = hash[7] + h & 0xFFFFFFFF;
    });
    var result = '';
    for (var b = 0; b < 8; b++) {
      result += ('00000000' + hash[b].toString(16)).slice(-8);
    }
    return result;
  }
  function setPosition(elementId, x, y) {
    var element = document.getElementById(elementId);
    if (!element) {
      console.warn("Element with id '".concat(elementId, "' not found in setPosition."));
      return;
    }
    x = isNaN(x) ? 0 : x;
    y = isNaN(y) ? 0 : y;
    element.style.position = 'absolute';
    element.style.left = "".concat(x, "px");
    element.style.top = "".concat(y, "px");
    //console.log(`Set position of ${elementId} to X: ${x}, Y: ${y}`);
  }
  function getXPosition(elementId) {
    var element = document.getElementById(elementId);
    if (!element) {
      console.warn("Element with id '".concat(elementId, "' not found in getXPosition."));
      return 0;
    }
    var rect = element.getBoundingClientRect();
    //console.log(`getXPosition for ${elementId}:`, rect.left);
    return rect.left;
  }
  function getYPosition(elementId) {
    var element = document.getElementById(elementId);
    if (!element) {
      console.warn("Element with id '".concat(elementId, "' not found in getYPosition."));
      return 0;
    }
    var rect = element.getBoundingClientRect();
    //console.log(`getYPosition for ${elementId}:`, rect.top);
    return rect.top;
  }

  // Function to set the size of an element by ID
  function setSize(elementId, width, height) {
    var element = document.getElementById(elementId);
    if (element) {
      element.style.width = "".concat(width, "px");
      element.style.height = "".concat(height, "px");
      //console.log(`Set size of ${elementId} to Width: ${width}px, Height: ${height}px`);
    } else {
      //console.warn(`Element with id '${elementId}' not found in setSize.`);
    }
  }
  function stopTimedLoop(intervalId) {
    if (intervalId) {
      clearInterval(intervalId); // Clear the specific interval if provided
      intervalIds = intervalIds.filter(function (id) {
        return id !== intervalId;
      }); // Remove it from the array
    } else {
      intervalIds.forEach(function (id) {
        return clearInterval(id);
      }); // Clear all intervals
      intervalIds = []; // Reset the array
    }
  }

  // javascript-obfuscator:enable

  // openbundles.js
  // javascript-obfuscator:disable
  //eUDLW48adTppJ-0o8buW_Red3eZ88VxvgI8wGCry7Xo
  var IDstarter = "Solstice";
  var HomescreenWindow = ".Homescreen.Window";
  var BarIconID = ".Homescreen.icon.";

  //Configure OpenBundles, all are REQUIRED
  //IDstarter is like "Solstice"
  //HomescreenWindow is like ".Homescreen.Window"
  //BarIconID is like ".Homescreen.icon."
  function openBundles$Config(IDstarterr, HomescreenWindoww, BarIconIDd) {
    IDstarter = IDstarterr;
    HomescreenWindow = HomescreenWindoww;
    BarIconID = BarIconIDd;
  }

  //Returns IDstarter
  function openBundles$getIDstarter() {
    return IDstarter;
  }

  //Install a Shortcut
  function openBundles$InstallShortcut(appname, iconn) {
    var icon;
    icon = iconn;
    if (BarIcons.indexOf("") !== -1) {
      BarIcons[BarIcons.indexOf("")] = appname;
      setProperty(IDstarter + BarIconID + (BarIcons.indexOf("") + 0) + "-img", "image", icon);
      showElement(IDstarter + BarIconID + (BarIcons.indexOf("") + 0));
      return BarIcons.indexOf(appname);
    }
    SFS.WriteError("Storage Full!", "OpenBundles");
    return false;
  }

  //Uninstall a Shortcut
  function openBundles$UninstallShortcut(appname) {
    for (var i = 0; i < BarIcons.length; i++) {
      if (BarIcons[i] === appname) {
        BarIcons[i] = "";
        setProperty(IDstarter + BarIconID + (i + 1), "image", "icon://fa-question");
        hideElement(IDstarter + BarIconID + (i + 1));
        return;
      }
    }
    SFS.WriteError("Can't find BarIcon", "OpenBundles");
  }

  // Function to return all AppBundleIDs
  function openBundles$displayLinks() {
    for (var key in Apps) {
      if (Apps.hasOwnProperty(key)) {
        console.log(key + " : " + Apps[key]);
      }
    }
  }

  // Function to register a AppBundle
  function openBundles$RegisterAppBundle(BundleID, Screens) {
    //Apps[BundleID] = Screens;
  }

  // Hide all icons, use when opening an app bundle
  function openBundles$hideIcons() {
    showElement(IDstarter + HomescreenWindow);
  }

  // Show all icons, use when closing an app bundle
  function openBundles$showIcons() {
    hideElement(IDstarter + HomescreenWindow);
  }
  var apps = [];
  // Function to add an app to the end of the list
  function openBundles$addApp(name, version, author, mainscreen, icon, isbundle, showinappstore) {
    apps.push({
      name: name,
      version: version,
      author: author,
      mainscreen: mainscreen,
      icon: icon,
      isbundle: isbundle,
      showinappstore: showinappstore
    });
  }

  // Function to return apps
  function openBundles$getApps() {
    return apps;
  }
  var activeBundles = {};

  // javascript-obfuscator:enable

  // userCommands.js
  /* 
  User Commands! 
  To add a new command, use the addCommand function like the examples included.
  */

  function registerUserCommands(addCommand) {
    addCommand("greet", "Greet the user", function (parts) {
      return "Hello, " + (parts[1] || "Guest") + "!";
    });
    addCommand("goodbye", "Say goodbye to the user", function (parts) {
      return "Goodbye, " + (parts[1] || "Guest") + "!";
    });
    addCommand("info", "Display terminal information", function () {
      return "Dusk Emulated Terminal v".concat(version);
    });
    addCommand("exit", "Close the terminal", function () {
      window.close(); // This will attempt to close the current emulated terminal
      return "Goodbye, " + (parts[1] || "Guest") + "!";
    });
    // Ensure there is one space between the command and the arguments
    if (parts.length < 3 || parts[1] === "" || parts[2] === "") {
      return "Usage: play <row> <col>";
    }
    var row = parseInt(parts[1]);
    var col = parseInt(parts[2]);

    // Game setup
    setText("DisplayText", "Pssst!.... Want to play tic-tac-toe?\nUse play(r,c) First argument is Row, Second argument is Column");
    var player = "🏃🏾"; // Player symbol
    var computer = "🔨"; // Computer symbol
    var noplayer = "➖";
    var maxMoves = 9;
    var currentMove = 0;
    var boardobject = {
      "0_0": noplayer,
      "0_1": noplayer,
      "0_2": noplayer,
      "1_0": noplayer,
      "1_1": noplayer,
      "1_2": noplayer,
      "2_0": noplayer,
      "2_1": noplayer,
      "2_2": noplayer
    };
    function validateMove(x, y, z) {
      var currentPlayer = z;
      var check = boardobject["".concat(x, "_").concat(y)];
      if (check == noplayer) {
        currentMove++;
        boardobject["".concat(x, "_").concat(y)] = currentPlayer;
        // Check for victory only after a valid move
        if (victory(currentPlayer)) {
          setText("DisplayText", "GGWP! You win!");
          return 2; // Victory
        } else {
          return 1; // Valid move
        }
      } else {
        if (currentMove < maxMoves) {
          setText("DisplayText", "INVALID MOVE!");
          return 0; // Invalid move
        } else {
          setText("DisplayText", "Game over!");
        }
      }
    }
    function computerTurn() {
      if (currentMove === 9) {
        setText("DisplayText", "Game Tie!");
        return 2; // Tie
      }
      var nextMove = [];
      for (var key in boardobject) {
        if (boardobject[key] == noplayer) {
          var index = key.split("_");
          var pos = [index[0], index[1]];
          nextMove.push(pos);
        }
      }
      var computerMove = nextMove[Math.floor(Math.random() * nextMove.length)];
      var c = validateMove(computerMove[0], computerMove[1], computer);
      if (c === 0) {
        computerTurn();
      }
    }
    function victory(player) {
      // Check rows, columns, and diagonals for a win
      var winConditions = [
      // Rows
      ["0_0", "0_1", "0_2"], ["1_0", "1_1", "1_2"], ["2_0", "2_1", "2_2"],
      // Columns
      ["0_0", "1_0", "2_0"], ["0_1", "1_1", "2_1"], ["0_2", "1_2", "2_2"],
      // Diagonals
      ["0_0", "1_1", "2_2"], ["0_2", "1_1", "2_0"]];
      return winConditions.some(function (condition) {
        return condition.every(function (pos) {
          return boardobject[pos] === player;
        });
      });
    }

    // Start the game with the player's move
    var playerMoveResult = validateMove(row, col, player);
    if (playerMoveResult === 1) {
      computerTurn();
    }
  }

  // your-code.js
  function meow() {}
  var UID = "root";
  var IsRoot = true;
  var Version = 0.3;
  var DevMode = true;
  var loginName = "root";
  var systemlocale = "enus";
  var OEM = {
    name: "Halcyon",
    devicename: "Halcyon A10",
    intendedversion: 1.0,
    maxversion: 8.1,
    oemproductkey: "7"
  };
  var ErrorCodes = ["An unexpected update faliure occured: Couldn't detect the recovery environment", "An unexpected reset failure occured: Couldn't detect the recovery environment", "An unexpected reset failure occured: Couldn't access /system/", "An unexpected reset faliure occured: Couldn't delete /user/" + loginName.toLowerCase(), "An unexpected install faliure occured: The package is paid", "An unexpected install faliure occured: The package is in an older format", "An unexpected install faliure occured: The package is corrupt", "An unexpected reset faliure occured: No package_sore was found.", "An unexpected reset faliure occured: No root user was found", "An unexpected reset faliure occured: Cannot reset during Audit mode", "An unexpected reset faliure occured: Cannot reset a recovery environent", "An unexpected reset faliure occured: The reset app 'resetus.ea_' was corrupted", "Couldn't find an accurate error description", "The interactive sign-in procedure failed", "Cannot detect the USB device", "Cannot detect the IEEE-312 device", "Cannot detect the NVMe device", "Cannot detect the SD device", "Cannot detect the SATA device", "Cannot detect the IDE device", "Cannot detect the SCSI device", "Cannot detect the BIOS device", "Cannot detect the Parallel device", "Cannot detect the PCFlash device", "Cannot detect the HDMI device", "Cannot detect the VGA device", "Cannot detect the ADC device", "Cannot detect the DisplayPort device", "Cannot detect the DVI device", "Cannot detect the SVideo device", "Cannot detect the MemDev device", "Cannot detect the PCIE device", "Cannot detect the PCI device", "Cannot detect the AGP device", ""];
  var userAccounts = [];
  var HalcyonButton = "halcyon-logo-dark.png";
  var StartMenu = false;
  var PermissionUSP = ["Erase all system and user data without warning", "Prevent camera utilisation", "Terminate and delete apps", "Install apps for you", "Give personalised ads", "Track your location", "Get camera output", "Disable internet", "Enable internet", "Set password rules", "Download and upload files", "Change the locale", "Change the theme", "Forcefully reboot the system", "Access the file system", "Get locale data", "Placeholder"];
  var LastwindowTitle = null;
  var LastContents = null;
  var LastIC = null;
  var LastIM = null;
  var LastIA = null;
  var ThemeBkg = "rgba(16,19,34,0.59)";
  var ThemeTxt = "#ffffff";
  var OSName = "NuukTeam";
  var Bootanimation = "";
  var Wallpaper = "";
  var AvailableWallpapers = ["HalcyonOSW1.png", "HalcyonOSW2.png", "HalcyonOSW3.png"]; //not correct but i aint fixing it -M0cha
  var CopyrightDate = 2025;
  var AvailableBootAnimations = [];
  var Build = 10278;
  var CoRelease = ".pre-release_pro_1.0-rtm";
  var taskbarApps = [];
  var taskbarIconSize = 40;
  var taskbarPadding = 5;
  // Initialize a list to store file/folder information
  function fatalErrorPage(ec) {
    var setupWindow = makeWindow(1, {
      WindowTitle: "Fatal Error" + "",
      IncludeMinimize: false,
      IncludeMaximize: false,
      IncludeClose: false,
      Maximized: false
    }, "Error Code: " + ec + "\n Error Desc: " + ErrorCodes[ec]);
    BEMA("Button", "NuukTeam>USP" + ">a", 165, 350, 145, 30, false, 10, 0, "", ThemeBkg, ThemeTxt, "OK", "C", 14, "Arial", false, "", "#ffffff");
  }
  function sysLoginScreen() {
    deleteElement("NuukTeam>1>resizeN");
    deleteElement("NuukTeam>1>resizeS");
    deleteElement("NuukTeam>1>resizeW");
    deleteElement("NuukTeam>1>resizeE");
    deleteElement("NuukTeam>1>resizeNE");
    deleteElement("NuukTeam>1>resizeNW");
    deleteElement("NuukTeam>1>resizeSE");
    deleteElement("NuukTeam>1>resizeSW");
    deleteElement("NuukTeam>1>content");
    deleteElement("NuukTeam>1>title");
    deleteElement("NuukTeam>1>window");
    deleteElement("NuukTeam>0>resizeN");
    deleteElement("NuukTeam>0>resizeS");
    deleteElement("NuukTeam>0>resizeW");
    deleteElement("NuukTeam>1>resizeE");
    deleteElement("NuukTeam>1>resizeNE");
    deleteElement("NuukTeam>1>resizeNW");
    deleteElement("NuukTeam>1>resizeSE");
    deleteElement("NuukTeam>1>resizeSW");
    deleteElement("NuukTeam>1>content");
    deleteElement("NuukTeam>1>title");
    deleteElement("NuukTeam>1>window");
    deleteElement("NuukTeam>taskbar");
    deleteElement("NuukTeam>taskbar-button");
    deleteElement("NuukTeam>taskbar-time");
    deleteElement("NuukTeam>taskbar-date");
    stopTimedLoop();
    deleteElement("NuukTeam>taskbar-wifi");
    if (StartMenu) {
      deleteElement("NuukTeam>start");
      deleteElement("NuukTeam>search");
      deleteElement("NuukTeam>app0");
      deleteElement("NuukTeam>app1");
      deleteElement("NuukTeam>app2");
      deleteElement("NuukTeam>app3");
      deleteElement("NuukTeam>app4");
      deleteElement("NuukTeam>app5");
      deleteElement("NuukTeam>app6");
      deleteElement("NuukTeam>app7");
      deleteElement("NuukTeam>app8");
      deleteElement("NuukTeam>app9");
      deleteElement("NuukTeam>app10");
    }
    var setupWindow = makeWindow(1, {
      WindowTitle: "Logon to NuukTeam",
      IncludeMinimize: false,
      IncludeMaximize: false,
      IncludeClose: false,
      Maximized: false
    }, "Login");
    BEMA("Button", "NuukTeam>Login" + ">.OK", 225, 345, 80, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "Log in", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Login" + ">.Other", 0, 425, 80, 20, false, 0, 0, "", ThemeBkg, ThemeTxt, "Other user(s)", "C", 9, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Login" + ">.Guest", 85, 425, 80, 20, false, 0, 0, "", ThemeBkg, ThemeTxt, "Use guest", "C", 9, "Arial", false, "", "#ffffff");
  }
  var fileSystem = [];
  var fileSystem = fileSystem || [];
  function createFile(fileName, parentPath, content) {
    if (content === undefined) {
      content = "";
    }
    var fileId = generateRandomString(10);
    var fileExtension = fileName.split('.').pop().toLowerCase();
    var fileType = getFileType(fileExtension);
    var newFile = {
      id: fileId,
      name: fileName,
      type: "file",
      fileType: fileType,
      path: parentPath + "/" + fileName,
      creationDate: getDate("mm/dd/yyyy"),
      creationTime: getTime("HH:mm:ss"),
      size: content.length,
      content: content
    };
    fileSystem.push(newFile);
    return fileId;
  }
  function getFileType(extension) {
    var fileTypes = {
      txt: "text",
      doc: "document",
      pdf: "document",
      jpg: "image",
      png: "image",
      mp3: "audio",
      mp4: "video"
    };
    if (fileTypes[extension]) {
      return fileTypes[extension];
    } else {
      return "unknown";
    }
  }
  function createFolder(folderName, parentPath) {
    // Generate a unique ID for the folder
    var folderId = generateRandomString(10);

    // Create a new folder object
    var newFolder = {
      id: folderId,
      name: folderName,
      type: "folder",
      path: parentPath + "/" + folderName,
      creationDate: getDate("YYYY/mm/dd"),
      creationTime: getTime("HH:mm:ss"),
      size: 0,
      contents: []
    };

    // Add the new folder to the fileSystem list
    fileSystem.push(newFolder);

    // Return the folder ID in case it's needed for further operations
    return folderId;
  }
  console.log("All necessary firmware libraries have been loaded into memory.");
  function kiRebootS_(torecenv) {
    deleteElement("NuukTeam>taskbar");
    deleteElement("NuukTeam>taskbar-button");
    deleteElement("NuukTeam>taskbar-time");
    deleteElement("NuukTeam>taskbar-date");
    stopTimedLoop();
    deleteElement("NuukTeam>taskbar-wifi");
    if (StartMenu) {
      deleteElement("NuukTeam>start");
      deleteElement("NuukTeam>search");
      deleteElement("NuukTeam>app0");
      deleteElement("NuukTeam>app1");
      deleteElement("NuukTeam>app2");
      deleteElement("NuukTeam>app3");
      deleteElement("NuukTeam>app4");
      deleteElement("NuukTeam>app5");
      deleteElement("NuukTeam>app6");
      deleteElement("NuukTeam>app7");
      deleteElement("NuukTeam>app8");
      deleteElement("NuukTeam>app9");
      deleteElement("NuukTeam>app10");
    }
    deleteElement("NuukTeam>1>resizeN");
    deleteElement("NuukTeam>1>resizeS");
    deleteElement("NuukTeam>1>resizeW");
    deleteElement("NuukTeam>1>resizeE");
    deleteElement("NuukTeam>1>resizeNE");
    deleteElement("NuukTeam>1>resizeNW");
    deleteElement("NuukTeam>1>resizeSE");
    deleteElement("NuukTeam>1>resizeSW");
    deleteElement("NuukTeam>1>content");
    deleteElement("NuukTeam>1>title");
    deleteElement("NuukTeam>1>close");
    deleteElement("NuukTeam>1>window");
    deleteElement("NuukTeam>0>resizeN");
    deleteElement("NuukTeam>0>resizeS");
    deleteElement("NuukTeam>0>resizeW");
    deleteElement("NuukTeam>1>resizeE");
    deleteElement("NuukTeam>1>resizeNE");
    deleteElement("NuukTeam>1>resizeNW");
    deleteElement("NuukTeam>1>resizeSE");
    deleteElement("NuukTeam>1>resizeSW");
    deleteElement("NuukTeam>1>content");
    deleteElement("NuukTeam>1>title");
    deleteElement("NuukTeam>1>window");
    deleteElement("NuukTeam>logoff");
    deleteElement("NuukTeam>power");
    var setupWindow = makeWindow(1, {
      WindowTitle: "NuukTeam",
      IncludeMinimize: false,
      IncludeMaximize: false,
      IncludeClose: false,
      Maximized: false
    }, "NuukTeam is shutting down");
    setProperty("NuukTeam", "background-color", "#005687");
    setProperty("NuukTeam", "image", "");
    setTimeout(function () {
      setProperty("NuukTeam", "background-color", "#000000");
      setTimeout(function () {
        deleteElement("NuukTeam>1>resizeN");
        deleteElement("NuukTeam>1>resizeS");
        deleteElement("NuukTeam>1>resizeW");
        deleteElement("NuukTeam>1>resizeE");
        deleteElement("NuukTeam>1>resizeNE");
        deleteElement("NuukTeam>1>resizeNW");
        deleteElement("NuukTeam>1>resizeSE");
        deleteElement("NuukTeam>1>resizeSW");
        deleteElement("NuukTeam>1>content");
        deleteElement("NuukTeam>1>title");
        deleteElement("NuukTeam>1>window");
        if (torecenv) {
          toKModeRecovery_01();
        }
      }, 1000);
    }, 1000);
  }
  var SecureOS = false;
  function toKModeRecovery_01() {
    setProperty("NuukTeam", "background-color", "#005687");
    var setupWindow = makeWindow(1, {
      WindowTitle: "NuukTeam Recovery",
      IncludeMinimize: false,
      IncludeMaximize: false,
      IncludeClose: false,
      Maximized: false
    }, "Recovery");
    BEMA("Button", "NuukTeam>Kmode" + ">001", 165, 350, 145, 30, false, 10, 0, "", ThemeBkg, ThemeTxt, "Shut Down", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Kmode" + ">002", 10, 350, 145, 30, false, 10, 0, "", ThemeBkg, ThemeTxt, "Continue", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Kmode" + ">003", 20, 135, 145, 30, false, 10, 0, "", ThemeBkg, ThemeTxt, "Reset this Device.", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Kmode" + ">004", 20, 205, 145, 30, false, 10, 0, "", ThemeBkg, ThemeTxt, "Statup Repair.", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Kmode" + ">005", 20, 170, 145, 30, false, 10, 0, "", ThemeBkg, ThemeTxt, "System Restore.", "C", 14, "Arial", false, "", "#ffffff");
    onEvent("NuukTeam>Kmode>003", "click", function () {
      kiRebootS_(0);
      setTimeout(function () {
        toResetThisPC();
      }, 2222);
    });
  }
  function sysCMD() {
    BEMA("TextArea", "NuukTeam>Kmode" + ">001", 0, 0, 9999, 9999, false, 10, 0, "", "transparent", "#ffffff", "local_server/root>", "C", 10, "Arial", true, "", "#ffffff");
    onEvent("document", "keydown", function (FOCUS) {
      // Prevent default behavior for backspace
      if (FOCUS.key === "Backspace") {
        // Get the current text
        var currentText = getText("NuukTeam>Kmode>001");
        // Remove the last character
        setText("NuukTeam>Kmode>001", currentText.slice(0, -1));
        // Prevent the default backspace action
        FOCUS.preventDefault();
      } else if (FOCUS.key == "Enter") {
        if (getText("NuukTeam>Kmode>001").substring(18, getText("NuukTeam>Kmode>001").length) == "ls") {
          // Handle 'ls' command
        } else if (getText("NuukTeam>Kmode>001").substring(18, getText("NuukTeam>Kmode>001").length) == "lenotede") {
          LenoteDE();
        } else {
          setText("NuukTeam>Kmode>001", getText("NuukTeam>Kmode>001") + "\n The command '" + getText("NuukTeam>Kmode>001").substring(18, getText("NuukTeam>Kmode>001").length) + "' is not a valid cmdlet. \n");
          setText("NuukTeam>Kmode>001", getText("NuukTeam>Kmode>001") + "\n local_server/root>");
        }
      } else {
        // Append the key pressed to the text area
        setText("NuukTeam>Kmode>001", getText("NuukTeam>Kmode>001") + FOCUS.key);
      }
    });
  }
  onEvent("document", "keydown", function (sys) {
    if (SecureOS) {
      if (sys.key == "Control") {
        sysCMD();
      }
    }
  });
  function toResetThisPC() {
    SecureOS = true;
    deleteElement("NuukTeam>Kmode>001");
    deleteElement("NuukTeam>Kmode>002");
    deleteElement("NuukTeam>Kmode>003");
    deleteElement("NuukTeam>Kmode>004");
    deleteElement("NuukTeam>Kmode>005");
    BEMA("Image", "NuukTeam>Boot>Image", 100, 140, 150, 150, true, 7, 0, "", "", "", "", "", "", 0, true, Bootanimation, "");
    BEMA("TextArea", "NuukTeam>Boot>Text", 75, 333, 200, 30, false, 1, 0, "", "rgba(0,0,0,0)", "rgb(255,255,255)", "Resetting this Device" + "" + "", "L", 13, "", true, "", "");
    loginName = "local_server/root";
  }
  BEMA("Image", "NuukTeam>Boot>Image", 100, 140, 150, 150, false, 7, 0, "", "", "", "", "", "", 0, true, Bootanimation, "");
  BEMA("TextArea", "NuukTeam>Boot>Text", 75, 333, 200, 30, false, 1, 0, "", "rgba(0,0,0,0)", "rgb(255,255,255)", "Loading " + OSName + "...", "L", 16, "", true, "", "");
  var Apps = [];
  // Function to update resize handles
  function installApp(type, name, installid, icon, ev) {
    if (type == 0) {
      appendItem(Apps, {
        "type": type,
        "name": name,
        "icon": icon,
        "iid": installid,
        "developer": ev
      });
    }
  }
  installApp(0, "Settings", "settings", 0, "halcyon");
  installApp(0, "Text", "txtedit");
  installApp(0, "Terminal", "term");
  installApp(0, "Files", "filemgr", 0, "halcyon", "halcyon");
  installApp(0, "Music", "music");
  installApp(0, "Calculator", "calc");
  function CreateAccount(username, pass) {
    var usrnm = username.toLowerCase();
    if (usrnm != "") {
      var encodedpass = sha256(pass);
      createRecord("Accounts", {
        token: generateRandomString(50),
        "lastloggedintime": getTime("HH:mm:ss"),
        lastloggedindate: getDate("mm:dd:yyyy"),
        username: usrnm,
        isdisabled: false,
        wallpaper: "",
        displayname: usrnm,
        epassword: encodedpass,
        isadmin: false,
        onetimecode: randomNumber(111111, 999999),
        userid: sha256(getUserId())
      });
      setTimeout(function () {
        LoginAccount(username, pass);
      }, 68);
    }
  }
  var accotc = null;

  //Login to Account
  var loggedin = false;
  var Username = null;
  var acctoken = null;
  function LoginAccount(username, pass) {
    var usrnm = username.toLowerCase();
    if (usrnm != "") {
      setTimeout(function () {
        readRecords("Accounts", {}, function (records) {
          for (var i = 0; i < records.length; i++) {
            if (records[i].username == usrnm) {
              if (!records[i].isdisabled) {
                if (records[i].epassword == sha256(pass)) {
                  acctoken = records[i].token;
                  Username = usrnm;
                  accotc = records[i].onetimecode;
                } else if (records[i].onetimecode == pass) {
                  acctoken = records[i].token;
                  Username = usrnm;
                  if (usrnm != "") {
                    loggedin = true;
                  }
                  updateRecord("Accounts", {
                    id: i + 1,
                    apps: listToString(AppScreens),
                    token: records[i].token,
                    "lastloggedintime": gettime("HH:mm:ss"),
                    lastloggedindate: getdate("mm:dd:yyyy"),
                    username: records[i].username,
                    isdisabled: records[i].isdisabled,
                    wallpaper: records[i].wallpaper,
                    displayname: records[i].displayname,
                    epassword: records[i].epassword,
                    isadmin: records[i].isadmin,
                    onetimecode: randomNumber(111111, 999999),
                    userid: records[i].userid
                  });
                  accotc = records[i].onetimecode;
                } else {
                  console.log("Incorrect Password or OTC");
                }
              } else {
                console.log("This account is banned");
              }
            }
          }
        });
      }, 68);
    }
  }
  function prompt$usp(app, pms, cll) {
    var setupWindow = makeWindow(1, {
      WindowTitle: app + " User Security Prompt",
      IncludeMinimize: false,
      IncludeMaximize: false,
      IncludeClose: false,
      Maximized: false
    }, app + " is requesting administrative rights.");
    BEMA("Button", "NuukTeam>USP" + ">a", 165, 350, 145, 30, false, 10, 0, "", ThemeBkg, ThemeTxt, "Allow", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>USP" + ">d", 10, 350, 145, 30, false, 10, 0, "", ThemeBkg, ThemeTxt, "Deny", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("TextArea", "NuukTeam>USP" + ">an", 15, 150, 350, 55, false, 10, 0, "", "transparent", ThemeTxt, app, "C", 36, "Arial", true, "", "#ffffff");
    BEMA("TextArea", "NuukTeam>USP" + ">wantsto", 15, 190, 145, 30, false, 10, 0, "", "transparent", ThemeTxt, "wants to", "C", 10, "Arial", true, "", "#ffffff");
    for (var i = 0; i < pms.length; i++) {
      BEMA("TextArea", "NuukTeam>USP" + ">o" + i, 15, 205 + i * 15, 300, 30, false, 10, 0, "", "transparent", ThemeTxt, PermissionUSP[pms[i]], "C", 10, "Arial", true, "", "#ffffff");
      BEMA("Image", "NuukTeam>USP" + ">c" + i, 280, 210 + i * 15, 15, 15, false, 10, 0, "", "", "", "", "", "", "", "", "check.png", "#ffffff");
    }
    onEvent("NuukTeam>USP>a", "click", function () {
      deleteElement("NuukTeam>USP>a");
      deleteElement("NuukTeam>USP>d");
      deleteElement("NuukTeam>USP>an");
      deleteElement("NuukTeam>USP>wantsto");
      deleteElement("NuukTeam>1>resizeN");
      deleteElement("NuukTeam>1>resizeS");
      deleteElement("NuukTeam>1>resizeW");
      deleteElement("NuukTeam>1>resizeE");
      deleteElement("NuukTeam>1>resizeNE");
      deleteElement("NuukTeam>1>resizeNW");
      deleteElement("NuukTeam>1>resizeSE");
      deleteElement("NuukTeam>1>resizeSW");
      deleteElement("NuukTeam>1>content");
      deleteElement("NuukTeam>1>title");
      deleteElement("NuukTeam>1>window");
      for (var i = 0; i < pms.length; i++) {
        deleteElement("NuukTeam>USP" + ">o" + i);
        deleteElement("NuukTeam>USP" + ">c" + i);
      }
      eval(cll);
    });
    onEvent("NuukTeam>USP>d", "click", function () {
      deleteElement("NuukTeam>USP>a");
      deleteElement("NuukTeam>USP>d");
      deleteElement("NuukTeam>USP>an");
      deleteElement("NuukTeam>USP>wantsto");
      deleteElement("NuukTeam>1>resizeN");
      deleteElement("NuukTeam>1>resizeS");
      deleteElement("NuukTeam>1>resizeW");
      deleteElement("NuukTeam>1>resizeE");
      deleteElement("NuukTeam>1>resizeNE");
      deleteElement("NuukTeam>1>resizeNW");
      deleteElement("NuukTeam>1>resizeSE");
      deleteElement("NuukTeam>1>resizeSW");
      deleteElement("NuukTeam>1>content");
      deleteElement("NuukTeam>1>title");
      deleteElement("NuukTeam>1>window");
      for (var i = 0; i < pms.length; i++) {
        deleteElement("NuukTeam>USP" + ">o" + i);
        deleteElement("NuukTeam>USP" + ">c" + i);
      }
      return 0;
    });
  }
  function updateResizeHandles(x, y, w, h, g) {
    var handleSize = 10;
    var baseID = "NuukTeam>" + g;
    setPosition(baseID + ">resizeN", x, y);
    setSize(baseID + ">resizeN", w, handleSize);
    setPosition(baseID + ">resizeE", x + w - handleSize, y);
    setSize(baseID + ">resizeE", handleSize, h);
    setPosition(baseID + ">resizeS", x, y + h - handleSize);
    setSize(baseID + ">resizeS", w, handleSize);
    setPosition(baseID + ">resizeW", x, y);
    setSize(baseID + ">resizeW", handleSize, h);
    setPosition(baseID + ">resizeNE", x + w - handleSize, y);
    setSize(baseID + ">resizeNE", handleSize, handleSize);
    setPosition(baseID + ">resizeSE", x + w - handleSize, y + h - handleSize);
    setSize(baseID + ">resizeSE", handleSize, handleSize);
    setPosition(baseID + ">resizeSW", x, y + h - handleSize);
    setSize(baseID + ">resizeSW", handleSize, handleSize);
    setPosition(baseID + ">resizeNW", x, y);
    setSize(baseID + ">resizeNW", handleSize, handleSize);
  }
  function changeTheme(bkgc, txtc) {
    ThemeTxt = txtc;
    ThemeBkg = bkgc;
  }
  function refreshTheme() {
    deleteElement("NuukTeam>0>content");
    deleteElement("NuukTeam>0>title");
    deleteElement("NuukTeam>8>resizeN");
    deleteElement("NuukTeam>8>resizeNW");
    deleteElement("NuukTeam>8>resizeNE");
    deleteElement("NuukTeam>8>resizeW");
    deleteElement("NuukTeam>8>resizeE");
    deleteElement("NuukTeam>8>resizeS");
    deleteElement("NuukTeam>8>resizeSW");
    deleteElement("NuukTeam>8>resizeSE");
    deleteElement("NuukTeam>0>window");
    var setupWindow = makeWindow(0, {
      WindowTitle: LastwindowTitle,
      IncludeMinimize: LastIM,
      IncludeMaximize: LastIA,
      IncludeClose: LastIC,
      Maximized: true,
      Contents: LastContents
    }, LastContents);
  }
  var FilesVPage = "";
  function app$halcyon_filemgr() {
    var setupWindow = makeWindow(0, {
      WindowTitle: "Files",
      IncludeMinimize: false,
      IncludeMaximize: false,
      IncludeClose: true,
      Maximized: false
    }, "");

    // Address bar (centered, width adjusted)
    BEMA("Input", "NuukTeam>Files>AddressBar", 10, 110, 180, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "", "L", 14, "Arial", false, "", "#ffffff");

    // Go button (positioned next to address bar)
    BEMA("Button", "NuukTeam>Files>GoButton", 190, 110, 45, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "Go", "C", 14, "Arial", false, "", "#ffffff");

    // File list area (adjusted width)
    BEMA("TextArea", "NuukTeam>Files>FileList", 10, 150, 230, 200, false, 0, 0, "", "transparent", ThemeTxt, "", "L", 14, "Arial", true, "", "#ffffff");

    // Sidebar buttons (centered)
    var buttonWidth = 230;
    var buttonX = 10;
    // Pinned shortcuts
    BEMA("Button", "NuukTeam>Files>User", 10, 140, 145, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, loginName, "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Files>PC", 10, 200, 145, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "Local Device", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Files>desktop", 10, 230, 145, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "Desktop", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Files>LocalDisk00", 10, 170, 145, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "Local Disk", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Files>Settings", 10, 80, 30, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "", "C", 14, "Arial", false, "icon://fa-cogs", "#ffffff");

    // Add a new file button
    BEMA("Button", "NuukTeam>Files>NewFile", 255, 110, 20, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "", "C", 14, "Arial", false, "icon://fa-file-o", "#ffffff");
    BEMA("Button", "NuukTeam>Files>NewFolder", 235, 110, 20, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "", "C", 14, "Arial", false, "icon://fa-folder-o", "#ffffff");
    BEMA("Button", "NuukTeam>Files>NetShare", 275, 110, 20, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "", "C", 14, "Arial", false, "icon://fa-server", "#ffffff");
    function updateFileList() {
      var fileListContent = "";
      for (var i = 0; i < fileSystem.length; i++) {
        if (fileSystem[i].path.substring(0, FilesVPage.length)(FilesVPage)) {
          fileListContent += (fileSystem[i].type === "folder" ? "[Folder] " : "[File] ") + fileSystem[i].name + "\n";
        }
      }
      setText("NuukTeam>Files>FileList", fileListContent);
    }
    onEvent("NuukTeam>Files>GoButton", "click", function () {
      FilesVPage = getText("NuukTeam>Files>AddressBar");
      updateFileList();
    });
    onEvent("NuukTeam>Files>NewFile", "click", function () {
      var fileName = prompt("Enter file name (with extension):");
      if (fileName) {
        var content = prompt("Enter file content (optional):");
        createFile(fileName, FilesVPage, content);
        updateFileList();
      }
    });
    onEvent("NuukTeam>Files>NewFolder", "click", function () {
      var folderName = prompt("Enter folder name:");
      if (folderName) {
        createFolder(folderName, FilesVPage);
        updateFileList();
      }

      // Initial file list update
      updateFileList();
    });
  }
  function toRestore() {
    console.log("Preparing for systemreset");
    console.log("0x00000003A");
    console.log("Downloading package (1536.halcyon.manhattanproject.secureos)");
    setTimeout(function () {
      console.log("Downloading package (1536.halcyon.manhattanproject.secureos2)");
      setTimeout(function () {
        console.log("All packages refreshed");
        console.log("Installing packages");
        setTimeout(function () {
          console.log("Manhattan project initiated");
          setTimeout(function () {
            console.log("Sysreset initialising");
            setTimeout(function () {
              console.log("Downloading REAgent___");
              setTimeout(function () {
                console.log("Optins checked");
                kiRebootS_(0);
                setTimeout(function () {
                  deleteElement("NuukTeam");
                  toResetThisPC();
                }, 2222);
              }, 444);
            }, 444);
          }, 444);
        }, 444);
      }, 888);
    }, 888);
  }
  function app$halcyon_spiderweb() {
    var setupWindow = makeWindow(0, {
      WindowTitle: "Spiderweb",
      IncludeMinimize: false,
      IncludeMaximize: false,
      IncludeClose: true,
      Maximized: false
    }, "");

    // Address bar (centered, width adjusted)
    BEMA("Input", "NuukTeam>Browser>AddressBar", 10, 110, 280, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "", "L", 14, "Arial", false, "", "#ffffff");

    // Go button (positioned next to address bar)
    BEMA("Button", "NuukTeam>Browser>GoButton", 280, 110, 30, 30, false, 0, 0, "", ThemeBkg, ThemeTxt, "Go", "C", 14, "Arial", false, "", "#ffffff");

    // File list area (adjusted width)
    BEMA("TextArea", "NuukTeam>Browser>FileList", 10, 150, 230, 200, false, 0, 0, "", "transparent", ThemeTxt, "", "L", 14, "Arial", true, "", "#ffffff");
    function AddButton(x, y, w, h, t) {}
    function AddSeperator(x, y, w, h) {}
    function AddLabel(x, y, w, h, t) {}
    function AddTextArea(x, y, w, h, t) {}
    function AddGFont(f) {}
    function AddImage(x, y, w, h, i) {}
    function SetStyle(ti, bc, tc) {}
    function ClearPage() {}
    function GetUserAgent() {
      return "Spiderweb 1.0 on NuukTeam " + Version;
    }
    function SwitchTab() {}
    function Exit() {}
    function SetGamma() {}
    function EDelta() {}

    // Sidebar buttons (centered)
    var buttonWidth = 230;
    var buttonX = 10;
    function updateFileList() {
      var fileListContent = "";
      for (var i = 0; i < fileSystem.length; i++) {
        if (fileSystem[i].path.substring(0, FilesVPage.length)(FilesVPage)) {
          fileListContent += (fileSystem[i].type === "folder" ? "[Folder] " : "[File] ") + fileSystem[i].name + "\n";
        }
      }
      setText("NuukTeam>Files>FileList", fileListContent);
    }
    onEvent("NuukTeam>Files>GoButton", "click", function () {
      FilesVPage = getText("NuukTeam>Files>AddressBar");
      updateFileList();
    });
    onEvent("NuukTeam>Files>NewFile", "click", function () {
      var fileName = prompt("Enter file name (with extension):");
      if (fileName) {
        var content = prompt("Enter file content (optional):");
        createFile(fileName, FilesVPage, content);
        updateFileList();
      }
    });
    onEvent("NuukTeam>Files>NewFolder", "click", function () {
      var folderName = prompt("Enter folder name:");
      if (folderName) {
        createFolder(folderName, FilesVPage);
        updateFileList();
      }

      // Initial file list update
      updateFileList();
    });
  }
  function resetPC2() {
    SettingsVPage = null;
    setTimeout(function () {
      deleteElement("NuukTeam>Settings" + ">about");
      deleteElement("NuukTeam>Settings" + ">wallpapers");
      deleteElement("NuukTeam>Settings" + ">resetpc");
    }, 20);
    toRestore();
  }
  var SettingsVPage = "Main.settings.main.s.data";
  function app$halcyon_settings() {
    var setupWindow = makeWindow(0, {
      WindowTitle: "Settings",
      IncludeMinimize: false,
      IncludeMaximize: false,
      IncludeClose: true,
      Maximized: false
    }, "Settings.");
    BEMA("Button", "NuukTeam>Settings" + ">wallpapers", 25, 145, 145, 30, false, 10, 0, "", ThemeBkg, ThemeTxt, "Wallpapers", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Settings" + ">about", 25, 180, 145, 30, false, 10, 0, "", ThemeBkg, ThemeTxt, "About", "C", 14, "Arial", false, "", "#ffffff");
    BEMA("Button", "NuukTeam>Settings" + ">resetpc", 25, 215, 145, 30, false, 10, 0, "", ThemeBkg, ThemeTxt, "Reset PC", "C", 14, "Arial", false, "", "#ffffff");
    onEvent("NuukTeam>Settings>about", "click", function () {
      deleteElement("NuukTeam>Settings" + ">about");
      deleteElement("NuukTeam>Settings" + ">wallpapers");
      SettingsVPage = "Main.settings.abt.s.data";
      setText("NuukTeam>0>content", OSName + " Version: " + Version + "\n Other Data: \n");
      setText("NuukTeam>0>content", getText("NuukTeam>0>content") + OSName + " Build: " + Build);
    });
    onEvent("NuukTeam>Settings>resetpc", "click", function () {
      prompt$usp("Settings", [0], resetPC2());
    });
    onEvent("NuukTeam>Settings>about", "click", function () {
      deleteElement("NuukTeam>Settings" + ">about");
      deleteElement("NuukTeam>Settings" + ">wallpapers");
      deleteElement("NuukTeam>Settings" + ">resetpc");
      SettingsVPage = "Main.settings.abt.s.data";
      setText("NuukTeam>0>content", OSName + " Version: " + Version + "\n Other Data: \n");
      setText("NuukTeam>0>content", getText("NuukTeam>0>content") + OSName + " Build: " + Build);
    });
    onEvent("NuukTeam>Settings>wallpapers", "click", function () {
      deleteElement("NuukTeam>Settings" + ">resetpc");
      deleteElement("NuukTeam>Settings" + ">about");
      deleteElement("NuukTeam>Settings" + ">wallpapers");
      SettingsVPage = "Main.settings.wpp.s.data";
      setText("NuukTeam>0>content", "Wallpapers");
      BEMA("Image", "NuukTeam>Settings" + ">wpp>.w1", 40, 150, 40, 75, false, 0, 0, "", ThemeBkg, ThemeTxt, "About", "C", 14, "Arial", false, "HalcyonOSW1.png", "#ffffff");
      BEMA("Image", "NuukTeam>Settings" + ">wpp>.w2", 90, 150, 40, 75, false, 0, 0, "", ThemeBkg, ThemeTxt, "About", "C", 14, "Arial", false, "HalcyonOSW2.png", "#ffffff");
      BEMA("Image", "NuukTeam>Settings" + ">wpp>.w3", 140, 150, 40, 75, false, 0, 0, "", ThemeBkg, ThemeTxt, "About", "C", 14, "Arial", false, "HalcyonOSW3.png", "#ffffff");
      BEMA("Image", "NuukTeam>Settings" + ">wpp>.w4", 190, 150, 40, 75, false, 0, 0, "", ThemeBkg, ThemeTxt, "About", "C", 14, "Arial", false, "HalcyonOSW4.png", "#ffffff");
      BEMA("Image", "NuukTeam>Settings" + ">wpp>.w5", 40, 250, 40, 75, false, 0, 0, "", ThemeBkg, ThemeTxt, "About", "C", 14, "Arial", false, "HalcyonOSW5.png", "#ffffff");
      BEMA("Image", "NuukTeam>Settings" + ">wpp>.w6", 90, 250, 40, 75, false, 0, 0, "", ThemeBkg, ThemeTxt, "About", "C", 14, "Arial", false, "HalcyonOSW6.png", "#ffffff");
      onEvent("NuukTeam>Settings>wpp>.w1", "click", function () {
        setProperty("NuukTeam", "image", "HalcyonOSW1.png");
      });
      onEvent("NuukTeam>Settings>wpp>.w2", "click", function () {
        setProperty("NuukTeam", "image", "HalcyonOSW2.png");
      });
      onEvent("NuukTeam>Settings>wpp>.w3", "click", function () {
        setProperty("NuukTeam", "image", "HalcyonOSW3.png");
      });
      onEvent("NuukTeam>Settings>wpp>.w4", "click", function () {
        setProperty("NuukTeam", "image", "HalcyonOSW4.png");
      });
      onEvent("NuukTeam>Settings>wpp>.w5", "click", function () {
        setProperty("NuukTeam", "image", "HalcyonOSW5.png");
      });
      onEvent("NuukTeam>Settings>wpp>.w6", "click", function () {
        setProperty("NuukTeam", "image", "HalcyonOSW6.png");
      });
    });
    onEvent("NuukTeam>0>close", "click", function () {
      if (SettingsVPage == "Main.settings.main.s.data") {
        SettingsVPage = null;
        setTimeout(function () {
          deleteElement("NuukTeam>Settings" + ">about");
          deleteElement("NuukTeam>Settings" + ">wallpapers");
          deleteElement("NuukTeam>Settings" + ">resetpc");
        }, 20);
      } else if (SettingsVPage == "Main.settings.wpp.s.data") {
        SettingsVPage = null;
        setTimeout(function () {
          deleteElement("NuukTeam>Settings" + ">wpp>.w1");
          deleteElement("NuukTeam>Settings" + ">wpp>.w2");
          deleteElement("NuukTeam>Settings" + ">wpp>.w3");
          deleteElement("NuukTeam>Settings" + ">wpp>.w4");
          deleteElement("NuukTeam>Settings" + ">wpp>.w5");
          deleteElement("NuukTeam>Settings" + ">wpp>.w6");
        }, 20);
      } else {
        SettingsVPage = null;
      }
    });
  }
  function app$terminal() {
    var setupWindow = makeWindow(0, {
      WindowTitle: "Terminal",
      IncludeMinimize: false,
      IncludeMaximize: false,
      IncludeClose: true,
      Maximized: false
    }, "Terminal");
    BEMA("Button", "NuukTeam>Terminal" + ">Run", 25, 300, 60, 60, false, 10, 0, "", ThemeBkg, ThemeTxt, "", "C", 14, "Arial", false, "icon://fa-play", "#ffffff");
    BEMA("Input", "NuukTeam>Terminal" + ">Command", 90, 300, 200, 25, false, 10, 0, "", ThemeBkg, ThemeTxt, "", "C", 14, "Arial", false, "", "#ffffff");
    onEvent("NuukTeam>Terminal>Run", "click", function () {
      setText("NuukTeam>0>content", getText("NuukTeam>0>content") + "\n term." + loginName + "~>" + getText("NuukTeam>Terminal>Command") + "" + "");
      if (getText("NuukTeam>Terminal>Command") == "ver") {} else {
        setText("NuukTeam>0>content", getText("NuukTeam>0>content") + "\n Error 5: " + "Invalid Cmdlet, App, or Operation" + "" + "" + "" + "");
      }
    });
  }
  // Function to update window position
  function updateWindowPosition(newX, newY, newWi, newHi, GDID, im, ic, ia) {
    var baseID = "NuukTeam>" + GDID;
    setPosition(baseID + ">window", newX, newY);
    setSize(baseID + ">window", newWi, newHi);

    // Update title bar
    setPosition(baseID + ">title", newX, newY);
    setSize(baseID + ">title", newWi, 30);

    // Update control buttons
    var controlX = newX + newWi - 30;
    if (ic) {
      setPosition(baseID + ">close", controlX, newY);
    }
    controlX -= 30;
    if (ia) {
      setPosition(baseID + ">maximize", controlX, newY);
      setPosition(baseID + ">restore", controlX, newY);
    }
    controlX -= 30;
    if (im) {
      setPosition(baseID + ">minimize", controlX, newY);
    }

    // Update content area
    setPosition(baseID + ">content", newX, newY + 30);
    setSize(baseID + ">content", newWi, newHi - 30);
  }
  onEvent("NuukTeam", "click", function (rc) {
    if (rc.shiftKey) {
      RightClick(".dkl", rc.x, rc.y);
    }
  });
  var InRCCreateFile = false;
  var InRCCreateFolder = false;
  var InRC = false;
  function closeRC() {
    InRC = false;
    if (InRCCreateFolder) {
      deleteElement("NuukTeam>invoke>Createfolder>Normal");
      deleteElement("NuukTeam>invoke>Createfolder>Stream");
      InRCCreateFolder = false;
    }
    if (InRCCreateFile) {
      deleteElement("NuukTeam>invoke>Createfile>ImgP");
      deleteElement("NuukTeam>invoke>Createfile>RText");
      deleteElement("NuukTeam>invoke>Createfile>Text");
      InRCCreateFile = false;
    }
    deleteElement("NuukTeam" + ">invoke" + ">Createfile");
    deleteElement("NuukTeam" + ">invoke" + ">Createfolder");
    deleteElement("NuukTeam" + ">invoke" + ">Changewallpaper");
    deleteElement("NuukTeam" + ">invoke" + ">Scaling");
  }
  var IsTypingInFolderCreationNameput = false;
  var IsTypingInFileCreationNameput = false;
  //Right click functionality
  var UniqueID = generateRandomString(7);
  var NX = null;
  var NY = null;
  function RightClick(fe, x, y) {
    if (InRC == false) {
      InRC = true;
      if (fe == ".dkl") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Createfile", x, y, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Create a File", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Createfolder", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Create a Folder", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Changewallpaper", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Change Wallpaper", "right", 13, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Scaling", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Display Settings", "right", 15, "Arial", false, "", "");
        NX = x;
        NY = y - 35;
        onEvent("NuukTeam>invoke>Createfile", "click", function () {
          if (!InRCCreateFile) {
            BEMA("Button", "NuukTeam" + ">invoke" + ">Createfile>Text", x + 150, y, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Text File (.txt)", "right", 15, "Arial", false, "", "");
            BEMA("Button", "NuukTeam" + ">invoke" + ">Createfile>RText", x + 150, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rich Text File (.rtf)", "right", 15, "Arial", false, "", "");
            BEMA("Button", "NuukTeam" + ">invoke" + ">Createfile>ImgP", x + 150, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Image File (.png)", "right", 15, "Arial", false, "", "");
            onEvent("NuukTeam>invoke>Createfile>Text", "click", function () {
              BEMA("Input", "NuukTeam" + ">input" + "", x, y - 35, 120, 20, false, 0, 0, "#ffffff", "transparent", ThemeTxt, "" + "" + "New Text FIle", "center", 11, "Arial", true, "", "");
              UniqueID = generateRandomString(7);
              BEMA("Image", "NuukTeam" + ">fileimg" + UniqueID, x + 15, y - 120, 90, 90, false, 0, 0, "Transparent", "transparent", ThemeTxt, "", "R", "", "", "", "icon://fa-file-text", "#333333AA");
              onEvent("NuukTeam>input", "input", function () {
                IsTypingInFileCreationNameput = true;
              });
              onEvent("NuukTeam>fileimg" + UniqueID, "click", function () {});
              onEvent("NuukTeam", "click", function (RT) {
                if (RT.targetId != "NuukTeam>input") {
                  if (IsTypingInFileCreationNameput) {
                    IsTypingInFileCreationNameput = false;
                    BEMA("TextArea", "NuukTeam" + ">file" + UniqueID, NX, NY, 120, 20, false, 0, 0, "Transparent", "transparent", ThemeTxt, getText("NuukTeam>input"), "center", 11, "Arial", true, "", "");
                    deleteElement("NuukTeam>input");
                  }
                }
              });
              deleteElement("NuukTeam>invoke>Createfolder");
              deleteElement("NuukTeam>invoke>Createfile");
              deleteElement("NuukTeam>invoke>Createfile>ImgP");
              deleteElement("NuukTeam>invoke>Createfile>RText");
              deleteElement("NuukTeam>invoke>Createfile>Text");
              deleteElement("NuukTeam>invoke>Changewallpaper");
              deleteElement("NuukTeam>invoke>Scaling");
              InRCCreateFolder = false;
              InRC = false;
            });
            InRCCreateFile = true;
          } else {
            deleteElement("NuukTeam>invoke>Createfile>ImgP");
            deleteElement("NuukTeam>invoke>Createfile>RText");
            deleteElement("NuukTeam>invoke>Createfile>Text");
            InRCCreateFile = false;
          }
        });
        onEvent("NuukTeam>invoke>Createfolder", "click", function () {
          if (!InRCCreateFolder) {
            BEMA("Button", "NuukTeam>invoke>Createfolder>Normal", x + 150, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Standard Folder", "right", 15, "Arial", false, "", "");
            onEvent("NuukTeam>invoke>Createfolder>Normal", "click", function () {
              BEMA("Input", "NuukTeam" + ">input" + "", x, y - 35, 120, 20, false, 0, 0, "#ffffff", "transparent", ThemeTxt, "" + "" + "New Folder", "center", 11, "Arial", true, "", "");
              UniqueID = generateRandomString(7);
              BEMA("Image", "NuukTeam" + ">folderimg" + UniqueID, x + 15, y - 120, 90, 90, false, 0, 0, "Transparent", "transparent", ThemeTxt, "", "R", "", "", "", "icon://fa-folder", "#333333AA");
              onEvent("NuukTeam>input", "input", function () {
                IsTypingInFolderCreationNameput = true;
              });
              onEvent("NuukTeam>folderimg" + UniqueID, "click", function () {});
              onEvent("NuukTeam", "click", function (RT) {
                if (RT.targetId != "NuukTeam>input") {
                  if (IsTypingInFolderCreationNameput) {
                    IsTypingInFolderCreationNameput = false;
                    BEMA("TextArea", "NuukTeam" + ">folder" + UniqueID, NX, NY, 120, 20, false, 0, 0, "Transparent", "transparent", ThemeTxt, getText("NuukTeam>input"), "center", 11, "Arial", true, "", "");
                    deleteElement("NuukTeam>input");
                  }
                }
              });
              deleteElement("NuukTeam>invoke>Createfolder>Stream");
              deleteElement("NuukTeam>invoke>Createfolder>Normal");
              deleteElement("NuukTeam>invoke>Createfolder");
              deleteElement("NuukTeam>invoke>Createfile");
              deleteElement("NuukTeam>invoke>Changewallpaper");
              deleteElement("NuukTeam>invoke>Scaling");
              InRCCreateFolder = false;
              InRC = false;
            });
            BEMA("Button", "NuukTeam>invoke>Createfolder>Stream", x + 150, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Shortcut (.lnk)", "right", 15, "Arial", false, "", "");
            InRCCreateFolder = true;
          } else {
            deleteElement("NuukTeam>invoke>Createfolder>Normal");
            deleteElement("NuukTeam>invoke>Createfolder>Stream");
            InRCCreateFolder = false;
          }
        });
        onEvent("NuukTeam>invoke>Changewallpaper", "click", function () {
          closeRC();
          app$halcyon_settings();
          deleteElement("NuukTeam>Settings" + ">about");
          deleteElement("NuukTeam>Settings" + ">wallpapers");
          SettingsVPage = "Main.settings.wpp.s.data";
          setText("NuukTeam>0>content", "Wallpapers");
        });
      } else if (fe == ".txt") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Txtedit", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".rtf") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Txtedit", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".png") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Imag3", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".jpg") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Imag3", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".webp") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Imag3", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".jpeg") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Imag3", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".bf") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Lode", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".c") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Lode", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".h") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Lode", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".cpp") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Lode", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".js") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Lode", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".rs") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Lode", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".cs") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Lode", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".css") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Lode", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".html") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 0, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Browser", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile2", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open in Lode", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".7z") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Extract", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Extract", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Extract2", x, y + 150, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Extract Here", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 180, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".zip") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Extract", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Extract", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Extract2", x, y + 150, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Extract Here", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 180, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == ".rar") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Open", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Extract", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Extract", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Extract2", x, y + 150, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Extract Here", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 180, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      } else if (fe == "") {
        BEMA("Button", "NuukTeam" + ">invoke" + ">Openfile", x, y + 30, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Create Association", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Delete", x, y + 60, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Delete", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Rename", x, y + 90, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Rename", "right", 15, "Arial", false, "", "");
        BEMA("Button", "NuukTeam" + ">invoke" + ">Properties", x, y + 120, 150, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "File Properties", "right", 15, "Arial", false, "", "");
      }
    } else {
      closeRC();
    }
  }
  var DenominationsFileData = [" bytes", " KB", " MB", " GB", " TB", " PB", " EB", " ZB", " YB", " AB"];
  var DenominationsFileData2 = [" bits ps", " Kbps", " Mbps", " Gbps", " Tbps", " Pbps", " Ebps", " Zbps", " Ybps", " Abps"];
  var ExtDescr = {
    ".bf": "Brainfrain source code file",
    ".c": "C",
    ".cpp": "C++",
    ".h": "C Header",
    ".hxx": "C++ Header",
    ".hpp": "C++ Header",
    ".py": "Python file",
    ".js": "JavaScript file",
    ".rs": "Rust code file",
    ".cs": "C# file",
    ".css": "Theme document",
    ".html": "Local webpage",
    ".lua": "LUA source code file",
    ".7z": "7-Zip archive",
    ".zip": "ZIP file",
    ".rar": "Roshal archive",
    ".txt": "Text file",
    ".rtf": "Rich Text file",
    ".png": "PNG image",
    ".webp": "Web Picture",
    ".jpg": "JPG image",
    ".jpeg": "JPG image",
    ".avif": "Raw Image",
    ".sb3": "Scratch project",
    ".tar.gz": "Tar file",
    ".": "File"
  };
  function prompt$fileproperties(contentsize, datemade, dateaccessed, name, ext, permissions, ass) {
    var setupWindow = makeWindow(2, {
      WindowTitle: name + ext + " Properties",
      IncludeMinimize: false,
      IncludeMaximize: false,
      IncludeClose: false,
      Maximized: false
    }, name + ext + " Properties");
    var FileSizeW = contentsize;
    var Increments = 0;
    for (var i = 0; 1 < FileSizeW; i++) {
      FileSizeW = FileSizeW / 10;
      Increments = Increments + 1;
    }
    var IncrementOffset = null;
    if ((Increments - 1) / 3 == Math.round((Increments - 1) / 3)) {
      IncrementOffset = -1;
    } else if ((Increments - 2) / 3 == Math.round((Increments - 2) / 3)) {
      IncrementOffset = -2;
    } else if ((Increments - 2) / 3 == Math.round((Increments - 2) / 3)) {
      IncrementOffset = -3;
    } else {
      IncrementOffset = 0;
    }
    Increments = Math.min((Increments - IncrementOffset) / 3);
    BEMA("TextArea", "NuukTeam>FP" + ">size", 15, 190, 300, 45, false, 10, 0, "", "transparent", ThemeTxt, "File Size:" + FileSizeW + DenominationsFileData[Increments], "C", 20, "Arial", true, "", "#ffffff");
    BEMA("TextArea", "NuukTeam>FP" + ">date", 15, 240, 300, 45, false, 10, 0, "", "transparent", ThemeTxt, "File Created: " + datemade, "C", 20, "Arial", true, "", "#ffffff");
  }
  function makeWindow(GDID, ai, content) {
    var options = {
      WindowTitle: ai.WindowTitle,
      IncludeMinimize: ai.IncludeMinimize,
      IncludeMaximize: ai.IncludeMaximize,
      IncludeClose: ai.IncludeClose,
      WindowIcon: "",
      BackgroundColour1: ThemeBkg,
      BackgroundColour2: ThemeBkg,
      TextColour: ThemeTxt,
      X: 10,
      Y: 80,
      Wi: 300,
      Hi: 300
    };
    var baseID = "NuukTeam>" + GDID;
    var isMaximized = false;
    var isResizing = false;
    var startX, startY, startWi, startHi;
    var resizeHandle = "";
    var handleSize = 3;
    var controlSize = 30;
    var minSize = 75;

    // Create main window element
    BEMA("Button", baseID + ">window", options.X, options.Y, options.Wi, options.Hi, false, 10, 1, "#000000", options.BackgroundColour1, options.TextColour, "", "C", 14, "Arial", false, "", "");

    // Create title bar
    BEMA("Button", baseID + ">title", options.X, options.Y, options.Wi, 30, false, 0, 0, "", options.BackgroundColour2, options.TextColour, options.WindowTitle, "C", 16, "Arial", false, options.WindowIcon, "");

    // Add window controls
    var controlX = options.X + options.Wi - controlSize;
    var controlY = options.Y;
    if (options.IncludeClose) {
      BEMA("Button", baseID + ">close", controlX, controlY, controlSize, controlSize, false, 0, 0, "", "", "", "", "C", 14, "Arial", false, "black-x-96x96.png", "");
      onEvent(baseID + ">close", "click", function () {
        deleteElement(baseID + ">content");
        deleteElement(baseID + ">window");
        deleteElement(baseID + ">title");
        deleteElement(baseID + ">close");
        deleteElement(baseID + ">resizeN");
        deleteElement(baseID + ">resizeNW");
        deleteElement(baseID + ">resizeNE");
        deleteElement(baseID + ">resizeW");
        deleteElement(baseID + ">resizeE");
        deleteElement(baseID + ">resizeS");
        deleteElement(baseID + ">resizeSW");
        deleteElement(baseID + ">resizeSE");
        if (options.IncludeMaximize) {
          deleteElement(baseID + ">maximize");
          deleteElement(baseID + ">restore");
        }
        if (options.IncludeMinimize) {
          deleteElement(baseID + ">minimize");
        }
      });
      controlX -= controlSize;
    }
    if (options.IncludeMaximize) {
      BEMA("Button", baseID + ">maximize", controlX, controlY, controlSize, controlSize, false, 0, 0, "", "", "", "", "C", 14, "Arial", false, "black-a-96x96.png", "");
      BEMA("Button", baseID + ">restore", controlX, controlY, controlSize, controlSize, true, 0, 0, "", "", "", "", "C", 14, "Arial", false, "black-r-96x96.png", "");
      controlX -= controlSize;
    }
    if (options.IncludeMinimize) {
      BEMA("Button", baseID + ">minimize", controlX, controlY, controlSize, controlSize, false, 0, 0, "", "", "", "", "C", 14, "Arial", false, "black-m-96x96.png", "");
    }

    // Add content area
    BEMA("TextArea", baseID + ">content", options.X, options.Y + 30, options.Wi, options.Hi - 30, false, 0, 0, "", options.BackgroundColour1, options.TextColour, content, "L", 14, "Arial", true, "", "");

    // Create resize handles
    var handles = ["N", "E", "S", "W", "NE", "SE", "SW", "NW"];
    for (var i = 0; i < handles.length; i++) {
      BEMA("Button", baseID + ">resize" + handles[i], options.X, options.Y, handleSize, handleSize, false, 0, 0, "", "transparent", "", "", "C", 14, "Arial", false, "", "");
    }

    // Update resize handle positions
    updateResizeHandles(options.X, options.Y, options.Wi, options.Hi, GDID);

    // Handle resize logic
    // Modify the onResizeMove function
    function updateOptions(newX, newY, newWi, newHi) {
      options.X = newX;
      options.Y = newY;
      options.Wi = newWi;
      options.Hi = newHi;
    }
    function onResizeMove(e) {
      if (isResizing) {
        var deltaX = e.clientX - startX;
        var deltaY = e.clientY - startY;
        var newWi = startWi;
        var newHi = startHi;
        var newX = options.X;
        var newY = options.Y;
        if (resizeHandle.indexOf("E") !== -1) {
          newWi = Math.max(minSize, startWi + deltaX);
        }
        if (resizeHandle.indexOf("S") !== -1) {
          newHi = Math.max(minSize, startHi + deltaY);
        }
        if (resizeHandle.indexOf("W") !== -1) {
          newWi = Math.max(minSize, startWi - deltaX);
          newX = options.X + (startWi - newWi);
        }
        if (resizeHandle.indexOf("N") !== -1) {
          newHi = Math.max(minSize, startHi - deltaY);
          newY = options.Y + (startHi - newHi);
        }
        updateWindowPosition(newX, newY, newWi, newHi, GDID);
        updateResizeHandles(newX, newY, newWi, newHi, GDID);
        updateOptions(newX, newY, newWi, newHi); // Update options after resizing
      }
    }

    // Event listeners for resizing
    // Event listeners for resizing

    onEvent("NuukTeam", "mousemove", onResizeMove);
    onEvent("NuukTeam", "mouseup", function () {
      isResizing = false;
    });
    LastContents = options.Contents;
    LastwindowTitle = options.Title;
    LastIC = options.IncludeClose;
    LastIM = options.IncldueMinimize;
    LastIA = options.InlcudeMaximize;
    onEvent("NuukTeam", "mousemove", onResizeMove);
    onEvent("NuukTeam", "mouseup", function () {
      if (isResizing) {
        isResizing = false;
        startX = options.X;
        startY = options.Y;
        startWi = options.Wi;
        startHi = options.Hi;
      }
    });

    // Maximize/Restore functionality
    if (options.IncludeMaximize) {
      onEvent(baseID + ">maximize", "click", function () {
        isMaximized = true;
        hideElement(baseID + ">maximize");
        showElement(baseID + ">restore");
        updateWindowPosition(0, 0, window.innerWidth, window.innerHeight, GDID, options.IncludeMinimize, options.IncludeMaximize, options.IncludeClose);
      });
      onEvent(baseID + ">restore", "click", function () {
        isMaximized = false;
        hideElement(baseID + ">restore");
        showElement(baseID + ">maximize");
        updateWindowPosition(options.X, options.Y, options.Wi, options.Hi, GDID, options.IncludeMinimize, options.IncludeMaximize, options.IncludeClose);
      });
    }

    // Initial update
    updateResizeHandles(options.X, options.Y, options.Wi, options.Hi, GDID);
  }

  // Example of window creation

  setProperty("NuukTeam", "image", "HalcyonOSW1.png");
  deleteElement("NuukTeam>Boot>Image");
  deleteElement("NuukTeam>Boot>Text");
  function openStartMenu() {
    if (!StartMenu) {
      StartMenu = true;
      BEMA("TextArea", "NuukTeam" + ">start", 0, 215, 200, 205, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "Hi, " + loginName, "C", 12, "Arial", true, "", "");
      for (var i = 0; i < Apps.length; i++) {
        BEMA("Button", "NuukTeam" + ">app" + i, 10, 240 + i * 26, 180, 24, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, Apps[i]["name"], "right", 11, "Arial", false, "", "");
      }
      onEvent("NuukTeam>search", "input", function (lol) {
        if (getText("NuukTeam>search") == "") {
          for (var i = 0; i < Apps.length; i++) {
            BEMA("Button", "NuukTeam" + ">app" + i, 10, 55 + i * 26, 180, 24, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, Apps[i]["name"], "right", 11, "Arial", false, "", "");
          }
        } else {
          deleteElement("NuukTeam>app0");
          deleteElement("NuukTeam>app1");
          deleteElement("NuukTeam>app2");
          deleteElement("NuukTeam>app3");
          deleteElement("NuukTeam>app4");
          deleteElement("NuukTeam>app5");
          var searchQuery = {
            input: "",
            output: null,
            locale: "enus",
            results: []
          };
          searchQuery.input = getText("NuukTeam>search");
          searchQuery.locale = systemlocale;
          for (var i = 0; i < 4; i++) {
            appendItem(searchQuery.results, "");
          }
        }
      });
      onEvent("NuukTeam", "click", function (test) {
        if (test.targetId == "NuukTeam" && StartMenu == true) {
          deleteElement("NuukTeam>app0");
          deleteElement("NuukTeam>app1");
          deleteElement("NuukTeam>app2");
          deleteElement("NuukTeam>app3");
          deleteElement("NuukTeam>app4");
          deleteElement("NuukTeam>app5");
          deleteElement("NuukTeam>start");
          deleteElement("NuukTeam>search");
          deleteElement("NuukTeam>logoff");
          deleteElement("NuukTeam>power");
          StartMenu = false;
        }
      });
      onEvent("NuukTeam>power", "click", function () {
        kiRebootS_();
      });
      onEvent("NuukTeam" + ">app" + 0, "click", function () {
        deleteElement("NuukTeam>app0");
        deleteElement("NuukTeam>app1");
        deleteElement("NuukTeam>app2");
        deleteElement("NuukTeam>app3");
        deleteElement("NuukTeam>app4");
        deleteElement("NuukTeam>app5");
        deleteElement("NuukTeam>start");
        deleteElement("NuukTeam>logoff");
        deleteElement("NuukTeam>power");
        deleteElement("NuukTeam>search");
        StartMenu = false;
        // Construct the function name based on the developer and iid
        var appFunctionName = "app$" + Apps[0]["developer"] + "_" + Apps[0]["iid"];
        eval(appFunctionName + "();");
      });
      onEvent("NuukTeam" + ">app" + 4, "click", function () {
        deleteElement("NuukTeam>app0");
        deleteElement("NuukTeam>app1");
        deleteElement("NuukTeam>app2");
        deleteElement("NuukTeam>app3");
        deleteElement("NuukTeam>app4");
        deleteElement("NuukTeam>app5");
        deleteElement("NuukTeam>logoff");
        deleteElement("NuukTeam>power");
        deleteElement("NuukTeam>start");
        deleteElement("NuukTeam>search");
        deleteElement("NuukTeam>logoff");
        deleteElement("NuukTeam>power");
        StartMenu = false;
        var appFunctionName = "app$" + Apps[4]["developer"] + "_" + Apps[4]["iid"];
        eval(appFunctionName + "();");
      });
      onEvent("NuukTeam" + ">app" + 5, "click", function () {
        deleteElement("NuukTeam>app0");
        deleteElement("NuukTeam>app1");
        deleteElement("NuukTeam>app2");
        deleteElement("NuukTeam>app3");
        deleteElement("NuukTeam>app4");
        deleteElement("NuukTeam>app5");
        deleteElement("NuukTeam>start");
        deleteElement("NuukTeam>search");
        deleteElement("NuukTeam>logoff");
        deleteElement("NuukTeam>power");
        StartMenu = false;
        var appFunctionName = "app$" + Apps[5]["developer"] + "_" + Apps[5]["iid"];
        eval(appFunctionName + "();");
        ;
      });
      onEvent("NuukTeam" + ">app" + 1, "click", function () {
        deleteElement("NuukTeam>app0");
        deleteElement("NuukTeam>app1");
        deleteElement("NuukTeam>app2");
        deleteElement("NuukTeam>app3");
        deleteElement("NuukTeam>app4");
        deleteElement("NuukTeam>app5");
        deleteElement("NuukTeam>start");
        deleteElement("NuukTeam>search");
        deleteElement("NuukTeam>logoff");
        deleteElement("NuukTeam>power");
        StartMenu = false;
        var appFunctionName = "app$" + Apps[1]["developer"] + "_" + Apps[1]["iid"];
        eval(appFunctionName + "();");
      });
      onEvent("NuukTeam" + ">app" + 2, "click", function () {
        deleteElement("NuukTeam>app0");
        deleteElement("NuukTeam>app1");
        deleteElement("NuukTeam>app2");
        deleteElement("NuukTeam>app3");
        deleteElement("NuukTeam>app4");
        deleteElement("NuukTeam>app5");
        deleteElement("NuukTeam>start");
        deleteElement("NuukTeam>search");
        deleteElement("NuukTeam>logoff");
        deleteElement("NuukTeam>power");
        StartMenu = false;
        var appFunctionName = "app$" + Apps[2]["developer"] + "_" + Apps[2]["iid"];
        eval(appFunctionName + "();");
      });
      onEvent("NuukTeam" + ">app" + 3, "click", function () {
        deleteElement("NuukTeam>app0");
        deleteElement("NuukTeam>app1");
        deleteElement("NuukTeam>app2");
        deleteElement("NuukTeam>app3");
        deleteElement("NuukTeam>app4");
        deleteElement("NuukTeam>app5");
        deleteElement("NuukTeam>start");
        deleteElement("NuukTeam>search");
        deleteElement("NuukTeam>logoff");
        deleteElement("NuukTeam>power");
        StartMenu = false;
        var appFunctionName = "app$" + Apps[3]["developer"] + "_" + Apps[3]["iid"];
        eval(appFunctionName + "();");
      });
    } else {
      StartMenu = false;
      deleteElement("NuukTeam>app0");
      deleteElement("NuukTeam>app1");
      deleteElement("NuukTeam>app2");
      deleteElement("NuukTeam>app3");
      deleteElement("NuukTeam>app4");
      deleteElement("NuukTeam>app5");
      deleteElement("NuukTeam>start");
      deleteElement("NuukTeam>logoff");
    }
  }
  var SetupMenu = 0;
  OOBE();
  function OOBE() {
    var setupWindow = makeWindow(8, {
      WindowTitle: "OOBE",
      IncludeMinimize: false,
      IncludeMaximize: false,
      IncludeClose: false,
      Maximized: true
    }, "");
    SetupMenu = 0;
    BEMA("Button", "NuukTeam>setup>lo" + ">next", 270, 340, 40, 40, false, 10, 0, "", "rgba(0,0,0,0.10)", "", "", "C", 14, "Arial", false, "icon://fa-chevron-right", "#ffffff");
    BEMA("Dropdown", "NuukTeam>setup>lo" + ">lo", 20, 145, 200, 25, false, 4, 0, "#ffffff", "rgba(0,0,0,0.10)", "", "German", "C", 14, "Arial", false, "icon://fa-chevron-right", "#ffffff");
    //setProperty("NuukTeam>setup>lo" + ">lo", "options", ["English (US)", "German (Germany)"]);
    SetupMenu = 1;
    setText("NuukTeam>8>content", "Accessibility Settings");
    setProperty("NuukTeam>setup>lo" + ">lo", "options", []);
    BEMA("Dropdown", "NuukTeam>setup>lo" + ">ea", 20, 185, 200, 25, false, 4, 0, "#ffffff", "rgba(0,0,0,0.10)", "", "German", "C", 14, "Arial", false, "icon://fa-chevron-right", "#ffffff");
    setProperty("NuukTeam>setup>lo" + ">ea", "options", ["No VoiceBox", "VoiceBox (Voice 1)", "VoiceBox (Voice 2)", "VoiceBox (Voice 3)"]);
    onEvent("NuukTeam>setup>lo>next", "click", function () {
      if (SetupMenu == 0) {
        SetupMenu = 1;
      } else if (SetupMenu == 1) {
        setText("NuukTeam>8>content", "Themes");
        BEMA("Button", "NuukTeam>setup>lo" + ">dark", 165, 150, 110, 90, false, 10, 0, "", "rgba(0,0,0,0.10)", "#ffffff", "Dark", "C", 14, "Arial", false, "", "#ffffff");
        BEMA("Button", "NuukTeam>setup>lo" + ">light", 45, 150, 110, 90, false, 10, 0, "", "#ffffff", "#000000", "Light", "C", 14, "Arial", false, "", "#ffffff");
        setProperty("NuukTeam>setup>lo" + ">light", "background-color", "rgba(255,255,255,0.3)");
        deleteElement("NuukTeam>setup>lo>lo");
        deleteElement("NuukTeam>setup>lo>ea");
        SetupMenu = 3;
        onEvent("NuukTeam>setup>lo" + ">light", "click", function () {
          changeTheme("rgba(255,255,255,0.3)", "#000000");
          HalcyonButton = "halcyon-logo-light.png";
        });
        onEvent("NuukTeam>setup>lo" + ">dark", "click", function () {
          changeTheme("rgba(16,19,34,0.59)", "#ffffff");
          HalcyonButton = "halcyon-logo-dark.png";
        });
      } else if (SetupMenu == 3) {
        deleteElement("NuukTeam>setup>lo>dark");
        deleteElement("NuukTeam>setup>lo>light");
        deleteElement("NuukTeam>8>content");
        deleteElement("NuukTeam>setup>lo>next");
        deleteElement("NuukTeam>setup>lo>ma");
        deleteElement("NuukTeam>setup>lo>la");
        deleteElement("NuukTeam>setup>lo>usernm");
        deleteElement("NuukTeam>setup>lo>passwd");
        deleteElement("NuukTeam>8>title");
        deleteElement("NuukTeam>8>resizeN");
        deleteElement("NuukTeam>8>resizeNW");
        deleteElement("NuukTeam>8>resizeNE");
        deleteElement("NuukTeam>8>resizeW");
        deleteElement("NuukTeam>8>resizeE");
        deleteElement("NuukTeam>8>resizeS");
        deleteElement("NuukTeam>8>resizeSW");
        deleteElement("NuukTeam>8>resizeSE");
        deleteElement("NuukTeam>8>window");
        loginName = "Guest";
        LenoteDE();
      }
    });
    simulateClick("NuukTeam>setup>lo>next");
  }
  function LenoteDE() {
    BEMA("Image", "NuukTeam", 0, 0, 320, 450, false, 0, 0, "", "", "", "", "", 14, "Arial", false, "HalcyonOSW1.png", "#ffffff");
    deleteElement("NuukTeam>Boot>Text");
    BEMA("TextArea", "NuukTeam" + ">taskbar", 0, 420, 320, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "", "C", 16, "Arial", true, "", "");
    BEMA("Button", "NuukTeam" + ">taskbar-button", 0, 420, 30, 30, false, 0, 0, ThemeBkg, ThemeBkg, ThemeTxt, "", "C", 16, "Arial", false, HalcyonButton, "");
    BEMA("TextArea", "NuukTeam" + ">taskbar-date", 240, 420, 90, 30, false, 0, 0, "transparent", "transparent", ThemeTxt, getDate("yyyy-mm-dd"), "left", 10, "Arial", true, "", "#ffffff");
    BEMA("TextArea", "NuukTeam" + ">taskbar-time", 240, 430, 90, 30, false, 0, 0, "transparent", "transparent", ThemeTxt, getTime("HH:mm:ss"), "left", 10, "Arial", true, "", "#ffffff");
    // Set the font size for the taskbar date and time
    setProperty("NuukTeam>taskbar-date", "fontSize", "10px"); // Set to 1px for visibility
    setProperty("NuukTeam>taskbar-time", "fontSize", "10px"); // Set to 1px for visibility

    // Scale down the text using transform

    timedLoop(464, function () {
      setText("NuukTeam>taskbar-time", getTime("HH:mm:ss"));
      setText("NuukTeam>taskbar-date", getDate("yyyy-mm-dd"));
    });
    onEvent("NuukTeam>taskbar-button", "click", function () {
      openStartMenu();
    });
  }
});
/******/ })()
;
//# sourceMappingURL=combined.bundle.js.map