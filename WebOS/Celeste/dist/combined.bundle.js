/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*********************!*\
  !*** ./combined.js ***!
  \*********************/


document.addEventListener("DOMContentLoaded", function () {
  // commands.js

  // Define all custom commands here

  function onEvent(id, event, callback) {
    //console.log(`Setting up ${event} event for ${id}`);
    var element = document.getElementById(id);
    if (element) {
      //console.log(`Element found for ${id}, adding ${event} listener`);
      element.addEventListener(event, function (e) {
        //console.log(`${event} event triggered for ${id}`);
        callback(e);
      });
    } else {
      console.warn("Element with id '".concat(id, "' not found. Event '").concat(event, "' not attached."));
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
  function generateRandomString(length) {
    var charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var randomString = '';
    for (var i = 0; i < length; i++) {
      var randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset[randomIndex];
    }
    return randomString;
  }
  function timedLoop(interval, callback) {
    setInterval(callback, interval);
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
    console.log("Set position of ".concat(elementId, " to X: ").concat(x, ", Y: ").concat(y));
  }
  function getXPosition(elementId) {
    var element = document.getElementById(elementId);
    if (!element) {
      console.warn("Element with id '".concat(elementId, "' not found in getXPosition."));
      return 0;
    }
    var rect = element.getBoundingClientRect();
    console.log("getXPosition for ".concat(elementId, ":"), rect.left);
    return rect.left;
  }
  function getYPosition(elementId) {
    var element = document.getElementById(elementId);
    if (!element) {
      console.warn("Element with id '".concat(elementId, "' not found in getYPosition."));
      return 0;
    }
    var rect = element.getBoundingClientRect();
    console.log("getYPosition for ".concat(elementId, ":"), rect.top);
    return rect.top;
  }

  // openbundles.js
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

  // your-code.js
  //console.log('your-code.js is running');
  //console.log('BEMA function:', typeof BEMA);
  //console.log('api object:', api);
  //console.log('api.commands:', api.commands);

  // Check if openBundles exists before destructuring

  //console.clear();
  //Colors
  var Mantle = "#181825";
  var Base = "#1e1e2e";
  var Text = "#cdd6f4";
  var Blank = "rgba(0,0,0,0)";
  var Surface0 = "#313244";
  var Surface1 = "#45475a";
  var Surface2 = "#585b70";
  Mantle = Mantle;
  Base = Base;
  Text = Text;
  Blank = Blank;
  Surface0 = Surface0;
  Surface1 = Surface1;
  Surface2 = Surface2;
  //Screens

  //Celeste.Main
  BEMA("Image", "Celeste.Main.Image.2", -4.5, -4.5, 825, 607.5, true, 15, 0, Base, Base, Text, "", "left", 5, "Tahoma", true, "10-13 5120x2880.png", Text);
  setProperty("Celeste.Main.Image.2", "fit", "fill");
  BEMA("TextArea", "Celeste.Main.Dock", 22.5, 510, 765, 75, true, 15, 0, "", Mantle, Text, "", "right", 45, "Lucida", true, "", Text);
  BEMA("TextArea", "Celeste.Main.Dock.Time", 460, 527, 300, 45, true, 15, 0, Mantle, Mantle, Text, "MEOW :3", "right", 25, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Main.Dock.0", 22.5, 510, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "normal.PNG", Text);
  BEMA("Button", "Celeste.Main.Dock.1", 105, 510, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Main.Dock.2", 187.5, 510, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Main.Dock.3", 270, 510, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Main.Dock.4", 352.5, 510, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Main.Dock.5", 435, 510, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Main.Icon.1", 7.5, 7.5, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "cogs.png", Text);
  BEMA("Button", "Celeste.Main.Icon.2", 7.5, 90, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "notes.png", Text);
  BEMA("Button", "Celeste.Main.Icon.3", 7.5, 172.5, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "tips.png", Text);
  BEMA("Button", "Celeste.Main.Icon.4", 7.5, 255, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "calc.png", Text);
  BEMA("Button", "Celeste.Main.Icon.5", 7.5, 337.5, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "tips.png", Text);
  BEMA("Button", "Celeste.Main.Icon.6", 7.5, 420, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "music.png", Text);
  BEMA("Button", "Celeste.Main.Icon.7", 90, 7.5, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Main.Icon.8", 90, 90, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Main.Icon.9", 90, 172.5, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Main.Icon.10", 90, 255, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Main.Icon.11", 90, 337.5, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Main.Icon.12", 90, 420, 75, 75, true, 15, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);

  //BEMA("TextArea", "Celeste.Main.Image.1", -4.5, -4.5, 0, 0, true, 0, 0, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);

  //Celeste.Login
  BEMA("Image", "Celeste.Login.Image.2", -4.5, -4.5, 825, 607.5, true, 0, 0, Base, Base, Text, "", "left", 5, "Tahoma", true, "10-13 5120x2880.png", Text);
  setProperty("Celeste.Login.Image.2", "fit", "fill");
  BEMA("TextArea", "Celeste.Login.Window", 326.25, 150, 150, 150, true, 10, 3, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Login.Image.1", 348.75, 157.5, 112.5, 112.5, true, 5, 0, "", Blank, Text, "", "left", 5, "Arial", true, "normal.PNG", Text);
  setProperty("Celeste.Login.Image.1", "fit", "fill");
  BEMA("Button", "Celeste.Login.Button.2", 310, 315, 180, 45, true, 5, 0, "", Base, Text, "Login As Guest", "center", 18, "Tahoma", true, "", Text);

  //Celeste.Boot
  BEMA("Image", "Celeste.Boot.Window", -4.5, -4.5, 825, 607.5, true, 0, 0, Base, Base, Text, "", "left", 5, "Tahoma", true, "", Text);
  setProperty("Celeste.Boot.Window", "zIndex", 10); // Set a higher zIndex value

  BEMA("Button", "Celeste.Boot.Image.1", 348.75, 202.5, 112.5, 112.5, true, 5, 0, "", Blank, Text, "", "left", 5, "Arial", true, "normal.PNG", Text);
  BEMA("Button", "Celeste.Boot.Text.1", 247.5, 202.5, 300, 300, true, 5, 0, "", Blank, Text, "Welcome to Celeste", "center", 23, "Tahoma", true, "", Text);
  BEMA("Button", "Celeste.Boot.Image.2", 180, 75, 450, 450, true, 5, 0, "", Blank, Text, "", "left", 5, "Arial", true, "loading.gif", Text);
  showElement("Celeste.Boot.Text.1");
  showElement("Celeste.Boot.Image.1");
  showElement("Celeste.Boot.Image.2");
  showElement("Celeste.Boot.Window");
  //Code
  openBundles$Config("Celeste", ".Main.Image.1", ".Main.Dock.");
  var Version = "1.0";
  var tipsAppText = 'Welcome to the Celeste on Equinox Max, the first ever Equinox Max OS!\n\nCeleste 1.0 adds:\nNative support for Equinox Max\nNative support for Equinox Web\nRemoval of native support on Code.org\nRemoval of moving windows\nRemoval of accounts\nRemoval of moving app icons';
  var Apps = {}; //list of apps and app data
  var icons = ["", "", "", "", "", "", "", "", "", "", "", ""];
  var BarIcons = ["", "", "", "", ""];
  var debug = false; //its recomended not to change this
  var Internal = false; //its recomended not to change this
  var secure = true; //its recomended not to change this
  var safemode = false; //its recomended not to change this
  var currentWallpaper = "";
  var currentSong = "No song playing";
  var currentSongURL = "";
  openBundles$addApp("Settings", 1, "Arcane", "Bundle$Settings(null, \"Settings\");", "icon://fa-cogs", true, true);
  openBundles$addApp("TextFile1", 1, "Arcane", "Bundle$TextEdit(null, \"TextEdit\", \"text1.mfsf\");", "file.png", true, true);
  openBundles$addApp("TextFile2", 1, "Arcane", "Bundle$TextEdit(null, \"TextEdit\", \"text2.mfsf\");", "file.png", true, true);
  openBundles$addApp("TextFile3", 1, "Arcane", "Bundle$TextEdit(null, \"TextEdit\", \"text3.mfsf\");", "file.png", true, true);
  openBundles$addApp("StickyNote", 1, "Arcane", "Bundle$StickyNote(null, \"StickyNote\");", "notes.png", true, true);
  openBundles$addApp("Tips", 1, "Arcane", "Bundle$Tips(null, \"Tips\");", "tips.png", true, true);
  openBundles$addApp("NetStar", 1, "Arcane", "Bundle$NetStar(null, \"NetStar\");", "cloud.png", true, true);
  openBundles$addApp("Calculator", 1, "Arcane", "Bundle$Calculator(null, \"Calculator\");", "calc.png", true, true);
  openBundles$addApp("Jukebox", 1, "Arcane", "Bundle$Jukebox(null, \"Jukebox\");", "music.png", true, true);
  openBundles$addApp("Terminal", 1, "Arcane", "Bundle$Terminal(null, \"Terminal\");", "term.png", true, true);
  Apps.Settings = {
    mainscreen: "Bundle$Settings(null, \"Settings\");"
  };
  Apps.TextFile1 = {
    mainscreen: "Bundle$TextEdit(null, \"TextEdit\", \"text1.mfsf\");"
  };
  Apps.TextFile2 = {
    mainscreen: "Bundle$TextEdit(null, \"TextEdit\", \"text2.mfsf\");"
  };
  Apps.TextFile3 = {
    mainscreen: "Bundle$TextEdit(null, \"TextEdit\", \"text3.mfsf\");"
  };
  Apps.StickyNote = {
    mainscreen: "Bundle$StickyNote(null, \"StickyNote\");"
  };
  Apps.Tips = {
    mainscreen: "Bundle$Tips(null, \"Tips\");"
  };
  Apps.Calculator = {
    mainscreen: "Bundle$Calculator(null, \"Calculator\");"
  };
  Apps.Jukebox = {
    mainscreen: "Bundle$Jukebox(null, \"Jukebox\");"
  };
  Apps.Terminal = {
    mainscreen: "Bundle$Terminal(null, \"Terminal\");"
  };
  Apps.NetStar = {
    mainscreen: "Bundle$NetStar(null, \"NetStar\");"
  };

  //Functions

  //sets wallpaper (NUH UH)
  function Celeste$setWallpaper(image) {
    currentWallpaper = image;
    setProperty("Celeste.Main.Image.2", "image", image);
    setProperty("Celeste.Main.Image.1", "background-color", Blank);
    setProperty("Celeste.Login.Image.2", "image", image);
  }
  function Celeste$InstallApp(appname, iconn) {
    var icon;
    icon = iconn;
    if (icons.indexOf("") !== -1) {
      var index = icons.indexOf("");
      icons[index] = appname;
      setProperty("Celeste.Main.Icon." + (index + 1) + "-img", "image", iconn);
      showElement("Celeste.Main.Icon." + (index + 1));
      updateIconVisibility(); // Add this line to update visibility after installation
      return true;
    }
    WriteError("Storage Full!", "Homescreenmgr");
    return false;
  }

  //Uninstall a App
  function Celeste$UninstallApp(appname) {
    for (var i = 0; i < icons.length; i++) {
      if (icons[i] === appname) {
        icons[i] = "";
        setProperty("Celeste.Main.Icon." + (i + 1), "image", "icon://fa-question");
        hideElement("Celeste.Main.Icon." + (i + 1));
        updateIconVisibility(); // Add this line to update visibility after uninstallation
        return;
      }
    }
    WriteError("Can't find app", "Homescreenmgr");
  }

  // Add this new function to update icon visibility
  function updateIconVisibility() {
    for (var i = 0; i < icons.length; i++) {
      var iconId = "Celeste.Main.Icon." + (i + 1);
      if (icons[i] !== "") {
        showElement(iconId);
      } else {
        hideElement(iconId);
      }
    }
  }
  boot();
  function boot() {
    setTimeout(function () {
      hideElement("Celeste.Boot.Text.1");
      hideElement("Celeste.Boot.Image.1");
      hideElement("Celeste.Boot.Image.2");
      hideElement("Celeste.Boot.Window");
      showElement("Celeste.Login.Window");
      showElement("Celeste.Login.Image.2");
      showElement("Celeste.Login.Image.1");
      showElement("Celeste.Login.Button.2");
    }, 1200);
    Celeste$InstallApp("Settings", "cogs.png");
    Celeste$InstallApp("TextFile1", "file.png");
    Celeste$InstallApp("TextFile2", "file.png");
    Celeste$InstallApp("TextFile3", "file.png");
    Celeste$InstallApp("StickyNote", "notes.png");
    Celeste$InstallApp("Tips", "tips.png");
    Celeste$InstallApp("Calculator", "calc.png");
    Celeste$InstallApp("Jukebox", "music.png");
    Celeste$InstallApp("Terminal", "term.png");
    Celeste$InstallApp("NetStar", "cloud.png");
    openBundles$InstallShortcut("StickyNote", "notes.png");
    openBundles$InstallShortcut("Tips", "tips.png");
    openBundles$InstallShortcut("Terminal", "term.png");
    openBundles$InstallShortcut("NetStar", "cloud.png");
    if (!Internal) {
      Celeste$UninstallApp("NetStar");
      openBundles$UninstallShortcut("NetStar");
      openBundles$UninstallShortcut("Terminal");
    }
    updateIconVisibility();

    //console.log("Installed apps:", Apps);
    //console.log("Icons array:", icons);
  }
  function controlKey() {
    console.log("TODO");
  }
  timedLoop(50, function () {
    // Update every second
    setText("Celeste.Main.Dock.Time", getTime("hh:mm:ss a"));
  });
  onEvent("Celeste.Login.Button.2", "click", function (e) {
    // Hide login elements
    ["Window", "Image.2", "Image.1", "Button.2"].forEach(function (suffix) {
      var id = "Celeste.Login.".concat(suffix);
      hideElement(id);
    });

    // Show main elements
    ["Image.2", "Dock", "Dock.Time", "Dock.0"].forEach(function (suffix) {
      var id = "Celeste.Main.".concat(suffix);
      showElement(id);
    });
  });

  //Main

  document.addEventListener("keydown", function (event) {
    if (event.key === "Control") {
      controlKey();
    }
  });
  onEvent("Celeste.Main.Dock.0", "click", function (e) {
    controlKey();
  });
  onEvent("Celeste.Main.Dock.1", "click", function (e) {
    openBundles$openApp(BarIcons[0]);
  });
  onEvent("Celeste.Main.Dock.2", "click", function (e) {
    openBundles$openApp(BarIcons[1]);
  });
  onEvent("Celeste.Main.Dock.3", "click", function (e) {
    openBundles$openApp(BarIcons[2]);
  });
  onEvent("Celeste.Main.Dock.4", "click", function (e) {
    openBundles$openApp(BarIcons[3]);
  });
  onEvent("Celeste.Main.Dock.5", "click", function (e) {
    openBundles$openApp(BarIcons[4]);
  });
  var _loop = function _loop(i) {
    onEvent("Celeste.Main.Icon.".concat(i + 1), "click", function (e) {
      //console.log("Current Apps object:", Apps);
      //console.log("Current icons array:", icons);
      var appName = icons[i];
      //console.log(`Clicked icon ${i + 1}, appName: ${appName}`);
      //console.log(`Opening app: ${appName}, App data:`, Apps[appName]);
      openBundles$openApp(appName);
    });
  };
  for (var i = 0; i < 12; i++) {
    _loop(i);
  }

  // Open an App
  function openBundles$openApp(appName) {
    //console.log("Opening app:", appName);
    if (Apps[appName]) {
      var app = Apps[appName];
      //console.log(app.mainscreen);
      eval(app.mainscreen);
    } else {
      console.log("App with name " + appName + " not found.");
    }
  }

  //Bundle$Calculator
  function Bundle$Calculator(Data, Scr) {
    var bundleID = "Calculator"; // Identifier for the bundle

    // Check if the bundle is already running and handle requests accordingly
    if (activeBundles[bundleID] && (Data === "Open" || Data === null || Data === "")) {
      // If the bundle is already running and the request is to open or show screens, ignore it
      return;
    }

    // Initialize or reset the bundle instance if it's not already active
    if (!activeBundles[bundleID]) {
      activeBundles[bundleID] = {
        instanceIDd: generateRandomString(10),
        // Generate unique ID
        isRunning: true // Mark as running
      };
    }
    var instanceIDd = activeBundles[bundleID].instanceIDd;
    var isRunning = activeBundles[bundleID].isRunning;
    timedLoop(50, function () {
      if (!isRunning) {
        return;
      }
    });
    var CurrentBundleName = "Bundle$Calculator";
    var data = {
      Screens: ["OpenBundle.Calculator"],
      OpenBundle$Calculator: ["OpenBundle.Calculator." + instanceIDd + ".Bar.1", "OpenBundle.Calculator." + instanceIDd + ".Window", "OpenBundle.Calculator." + instanceIDd + ".WindowHeader", "OpenBundle.Calculator." + instanceIDd + ".Display", "OpenBundle.Calculator." + instanceIDd + ".Button.7", "OpenBundle.Calculator." + instanceIDd + ".Button.8", "OpenBundle.Calculator." + instanceIDd + ".Button.9", "OpenBundle.Calculator." + instanceIDd + ".Button./", "OpenBundle.Calculator." + instanceIDd + ".Button.4", "OpenBundle.Calculator." + instanceIDd + ".Button.5", "OpenBundle.Calculator." + instanceIDd + ".Button.6", "OpenBundle.Calculator." + instanceIDd + ".Button.*", "OpenBundle.Calculator." + instanceIDd + ".Button.1", "OpenBundle.Calculator." + instanceIDd + ".Button.2", "OpenBundle.Calculator." + instanceIDd + ".Button.3", "OpenBundle.Calculator." + instanceIDd + ".Button.-", "OpenBundle.Calculator." + instanceIDd + ".Button.0", "OpenBundle.Calculator." + instanceIDd + ".Button.=", "OpenBundle.Calculator." + instanceIDd + ".Button..", "OpenBundle.Calculator." + instanceIDd + ".Button.+", "OpenBundle.Calculator." + instanceIDd + ".Button.C"]
    };
    openBundles$RegisterAppBundle("Calculator", data.Screens);
    openBundles$hideIcons();
    if (data[Data]) {
      return data[Data];
    } else if (Data == null || Data == "") {
      if (Scr == "Calculator") {
        var windowWidth = 4 * 45 + 15 + 70; // 4 buttons per row, each 45px wide, plus 15px padding, plus 70px extra width

        BEMA("TextArea", "OpenBundle.Calculator." + instanceIDd + ".Window", 100 + 100, 35 + 30, windowWidth, 260, false, 10, 0, "", Base, Text, "", "left", 16, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.Calculator." + instanceIDd + ".WindowHeader", 100 + 100, 35 + 30, windowWidth, 25, false, 10, 0, "", Surface0, Text, "Calculator", "center", 12, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.Calculator." + instanceIDd + ".Display", 100 + 100, 60 + 30, windowWidth, 50, false, 10, 0, "", Base, Text, "0", "right", 20, "Tahoma", true, "", "");
        BEMA("Button", "OpenBundle.Calculator." + instanceIDd + ".Bar.1", 100 + 100, 35 + 30, 25, 25, false, 10, 0, "rgb(0,0,0,0)", Surface1, Text, "", "left", 0, "Tahoma", true, "times.png", Text);

        // Add buttons for digits and operations
        var buttons = [{
          label: "7",
          x: 110 + 100,
          y: 90 + 30
        }, {
          label: "8",
          x: 160 + 100,
          y: 90 + 30
        }, {
          label: "9",
          x: 210 + 100,
          y: 90 + 30
        }, {
          label: "/",
          x: 260 + 100,
          y: 90 + 30
        }, {
          label: "4",
          x: 110 + 100,
          y: 140 + 30
        }, {
          label: "5",
          x: 160 + 100,
          y: 140 + 30
        }, {
          label: "6",
          x: 210 + 100,
          y: 140 + 30
        }, {
          label: "*",
          x: 260 + 100,
          y: 140 + 30
        }, {
          label: "1",
          x: 110 + 100,
          y: 190 + 30
        }, {
          label: "2",
          x: 160 + 100,
          y: 190 + 30
        }, {
          label: "3",
          x: 210 + 100,
          y: 190 + 30
        }, {
          label: "-",
          x: 260 + 100,
          y: 190 + 30
        }, {
          label: "0",
          x: 110 + 100,
          y: 240 + 30
        }, {
          label: ".",
          x: 160 + 100,
          y: 240 + 30
        }, {
          label: "=",
          x: 210 + 100,
          y: 240 + 30
        }, {
          label: "+",
          x: 260 + 100,
          y: 240 + 30
        }, {
          label: "C",
          x: 310 + 100,
          y: 240 + 30
        } // Add clear button
        ];
        buttons.forEach(function (button) {
          BEMA("Button", "OpenBundle.Calculator." + instanceIDd + ".Button." + button.label, button.x, button.y, 45, 45, false, 10, 0, "", Surface1, Text, button.label, "center", 16, "Tahoma", true, "", "");
          onEvent("OpenBundle.Calculator." + instanceIDd + ".Button." + button.label, "click", function () {
            handleCalculatorInput(button.label);
          });
        });
        onEvent("OpenBundle.Calculator." + instanceIDd + ".Bar.1", "click", function () {
          Bundle$Calculator("HideAll");
        });
      }
    } else if (Data == "HideAll") {
      for (var i = 0; i < data.OpenBundle$Calculator.length; i++) {
        deleteElement(data.OpenBundle$Calculator[i]);
        openBundles$showIcons();
      }
      // Remove the bundle instance from activeBundles
      delete activeBundles[bundleID];
    } else if (Data == "DeleteApp") {
      // Handle app deletion
    } else {
      WriteError("Unknown error with " + CurrentBundleName, CurrentBundleName, true);
      return "";
    }
    function handleCalculatorInput(input) {
      var displayElement = "OpenBundle.Calculator." + instanceIDd + ".Display";
      var currentDisplay = getText(displayElement);
      if (input === "=") {
        try {
          var result = eval(currentDisplay).toFixed(2);
          setText(displayElement, result.toString().substring(0, 50)); // Limit result to 50 chars
        } catch (e) {
          setText(displayElement, "Error");
        }
      } else if (input === "C") {
        setText(displayElement, "0");
      } else {
        if (currentDisplay === "0" || currentDisplay === "Error") {
          setText(displayElement, input);
        } else {
          // Check if adding the new input would exceed 15 characters
          if (currentDisplay.length < 15) {
            setText(displayElement, (currentDisplay + input).substring(0, 15));
          }
          // If it's already at 15 characters, don't add more
        }
      }
    }
  }
  //Bundle$Jukebox
  function Bundle$Jukebox(Data, Scr) {
    var songs = [{
      id: "Cwitsh - OneShot Aftermath Demo Soundtrack - Dreams from a Feather.mp3",
      name: "Dreams from a Feather"
    }, {
      id: "song2.mp3",
      name: "Song 2"
    }, {
      id: "song3.mp3",
      name: "Song 3"
    }, {
      id: "song4.mp3",
      name: "Song 4"
    }, {
      id: "song5.mp3",
      name: "Song 5"
    }, {
      id: "song6.mp3",
      name: "Song 6"
    }];
    var bundleID = "Jukebox"; // Identifier for the bundle

    // Check if the bundle is already running and handle requests accordingly
    if (activeBundles[bundleID] && (Data === "Open" || Data === null || Data === "")) {
      // If the bundle is already running and the request is to open or show screens, ignore it
      return;
    }

    // Initialize or reset the bundle instance if it's not already active
    if (!activeBundles[bundleID]) {
      activeBundles[bundleID] = {
        instanceIDd: generateRandomString(10),
        // Generate unique ID
        isRunning: true // Mark as running
      };
    }
    var instanceIDd = activeBundles[bundleID].instanceIDd;
    var isRunning = activeBundles[bundleID].isRunning;
    timedLoop(50, function () {
      if (!isRunning) {
        return;
      }
    });
    var CurrentBundleName = "Bundle$Jukebox";
    var data = {
      Screens: ["OpenBundle.Jukebox"],
      OpenBundle$Jukebox: ["OpenBundle.Jukebox." + instanceIDd + ".Bar.1", "OpenBundle.Jukebox." + instanceIDd + ".Bar.2", "OpenBundle.Jukebox." + instanceIDd + ".Window", "OpenBundle.Jukebox." + instanceIDd + ".WindowHeader", "OpenBundle.Jukebox." + instanceIDd + ".Text.1", "OpenBundle.Jukebox." + instanceIDd + ".Button.Play.1", "OpenBundle.Jukebox." + instanceIDd + ".Button.Play.2", "OpenBundle.Jukebox." + instanceIDd + ".Button.Play.3", "OpenBundle.Jukebox." + instanceIDd + ".Button.Play.4", "OpenBundle.Jukebox." + instanceIDd + ".Button.Play.5", "OpenBundle.Jukebox." + instanceIDd + ".Button.Play.6"]
    };
    openBundles$RegisterAppBundle("Jukebox", data.Screens);
    openBundles$hideIcons();
    if (data[Data]) {
      return data[Data];
    } else if (Data == null || Data == "") {
      if (Scr == "Jukebox") {
        BEMA("TextArea", "OpenBundle.Jukebox." + instanceIDd + ".Window", 100, 35, 410, 160, false, 10, 0, "", Base, Text, "", "center", 16, "Tahoma", true, "", ""); // Reduced width by 15px
        BEMA("TextArea", "OpenBundle.Jukebox." + instanceIDd + ".WindowHeader", 100, 35, 410, 25, false, 10, 0, "", Surface0, Text, "Jukebox", "center", 12, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.Jukebox." + instanceIDd + ".Text.1", 100, 65, 410, 50, false, 10, 0, "", Base, Text, currentSong, "center", 20, "Tahoma", true, "", "");
        BEMA("Button", "OpenBundle.Jukebox." + instanceIDd + ".Bar.1", 100, 35, 25, 25, false, 10, 0, "rgb(0,0,0,0)", Surface1, Text, "", "left", 0, "Tahoma", true, "times.png", Text);
        BEMA("Button", "OpenBundle.Jukebox." + instanceIDd + ".Bar.2", 130, 35, 25, 25, false, 10, 0, "rgb(0,0,0,0)", Surface1, Text, "", "left", 0, "Tahoma", true, "pause.png", Text);
        var numColumns = 3;
        var numRows = 2;
        var buttonWidth = 120;
        var buttonHeight = 25;
        var buttonSpacing = 10;
        for (var i = 0; i < numColumns * numRows; i++) {
          var col = i % numColumns;
          var row = Math.floor(i / numColumns);
          var btnX = 115 + (buttonWidth + buttonSpacing) * col; // Aligned to the left and shifted 15px to the right
          var btnY = 120 + (buttonHeight + buttonSpacing) * row;
          var buttonID = "OpenBundle.Jukebox." + instanceIDd + ".Button.Play." + (i + 1);
          BEMA("Button", buttonID, btnX, btnY, buttonWidth, buttonHeight, false, 10, 0, "", Surface0, Text, songs[i].name, "center", 9, "Tahoma", true, "", ""); // Reduced font size

          (function (song) {
            onEvent(buttonID, "click", function () {
              stopSound(currentSongURL);
              currentSong = "Playing " + song.name + "...";
              currentSongURL = song.id;
              setText("OpenBundle.Jukebox." + instanceIDd + ".Text.1", currentSong);
              playSound(currentSongURL, false);
            });
          })(songs[i]);
          if (i > 0) {
            hideElement(buttonID);
          }
        }
        onEvent("OpenBundle.Jukebox." + instanceIDd + ".Bar.2", "click", function () {
          stopSound(currentSongURL);
          currentSong = "No song playing";
          currentSongURL = "";
          setText("OpenBundle.Jukebox." + instanceIDd + ".Text.1", currentSong);
        });
        onEvent("OpenBundle.Jukebox." + instanceIDd + ".Bar.1", "click", function () {
          Bundle$Jukebox("HideAll");
        });
      }
    } else if (Data == "HideAll") {
      for (var i = 0; i < data.OpenBundle$Jukebox.length; i++) {
        deleteElement(data.OpenBundle$Jukebox[i]);
        openBundles$showIcons();
      }
      // Remove the bundle instance from activeBundles
      delete activeBundles[bundleID];
    } else if (Data == "DeleteApp") {
      stopSound();
    } else {
      WriteError("Unknown error with " + CurrentBundleName, CurrentBundleName, true);
      return "";
    }
  }
  //Bundle$NetStar
  function Bundle$NetStar(Data, Scr) {
    var bundleID = "NetStar"; // Identifier for the bundle

    // Check if the bundle is already running and handle requests accordingly
    if (activeBundles[bundleID] && (Data === "Open" || Data === null || Data === "")) {
      // If the bundle is already running and the request is to open or show screens, ignore it
      return;
    }

    // Initialize or reset the bundle instance if it's not already active
    if (!activeBundles[bundleID]) {
      activeBundles[bundleID] = {
        instanceIDd: generateRandomString(10),
        // Generate unique ID
        isRunning: true // Mark as running
      };
    }
    var instanceIDd = activeBundles[bundleID].instanceIDd;
    var isRunning = activeBundles[bundleID].isRunning;
    timedLoop(50, function () {
      if (!isRunning) {
        return;
      }
    });
    var CurrentBundleName = "Bundle$NetStar";
    var data = {
      Screens: ["OpenBundle.NetStar"],
      OpenBundle$NetStar: ["OpenBundle.NetStar." + instanceIDd + ".Bar.1", "OpenBundle.NetStar." + instanceIDd + ".Window", "OpenBundle.NetStar." + instanceIDd + ".WindowHeader", "OpenBundle.NetStar." + instanceIDd + ".Text.1"]
    };
    openBundles$RegisterAppBundle("NetStar", data.Screens);
    openBundles$hideIcons();
    if (data[Data]) {
      return data[Data];
    } else if (Data == null || Data == "") {
      if (Scr == "NetStar") {
        BEMA("TextArea", "OpenBundle.NetStar." + instanceIDd + ".Window", 100, 35, 390, 260, false, 10, 0, "", Base, Text, "", "center", 16, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.NetStar." + instanceIDd + ".WindowHeader", 100, 35, 390, 25, false, 10, 0, "", Surface0, Text, "NetStar", "center", 12, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.NetStar." + instanceIDd + ".Text.1", 100, 65, 390, 260, false, 10, 0, "", Base, Text, "ok so like NetStar has not *actually* started dev, mainly cuz its a large project with dynamic locations, WebBundles, and more so like its hard n stuff uhhh yea, just wait till 1.0 or 2.0 or smth", "left", 11, "Tahoma", true, "", "");
        BEMA("Button", "OpenBundle.NetStar." + instanceIDd + ".Bar.1", 100, 35, 25, 25, false, 10, 0, "rgb(0,0,0,0)", Surface1, Text, "", "left", 0, "Tahoma", true, "times.png", Text);
        onEvent("OpenBundle.NetStar." + instanceIDd + ".Bar.1", "click", function () {
          Bundle$NetStar("HideAll");
        });
      }
    } else if (Data == "HideAll") {
      for (var i = 0; i < data.OpenBundle$NetStar.length; i++) {
        deleteElement(data.OpenBundle$NetStar[i]);
        openBundles$showIcons();
      }
      // Remove the bundle instance from activeBundles
      delete activeBundles[bundleID];
    } else if (Data == "DeleteApp") {
      // Handle app deletion
    } else {
      WriteError("Unknown error with " + CurrentBundleName, CurrentBundleName, true);
      return "";
    }
  }
  //Bundle$Settings
  function Bundle$Settings(Data, Scr) {
    var wallpaperImages = ["10-13 5120x2880.png", "Celeste 10-7-6k.png", "10-8-6k.jpg", "10-12-6k.jpg", "", ""];
    preloadImage(wallpaperImages[0]);
    preloadImage(wallpaperImages[1]);
    preloadImage(wallpaperImages[2]);
    preloadImage(wallpaperImages[3]);
    preloadImage(wallpaperImages[4]);
    preloadImage(wallpaperImages[5]);
    var bundleID = "Settings"; // Identifier for the bundle

    // Check if the bundle is already running and handle requests accordingly
    if (activeBundles[bundleID] && (Data === "Open" || Data === null || Data === "")) {
      // If the bundle is already running and the request is to open or show screens, ignore it
      return;
    }

    // Initialize or reset the bundle instance if it's not already active
    if (!activeBundles[bundleID]) {
      activeBundles[bundleID] = {
        instanceIDd: generateRandomString(10),
        // Generate unique ID
        isRunning: true // Mark as running
      };
    }
    var instanceIDd = activeBundles[bundleID].instanceIDd;
    var isRunning = activeBundles[bundleID].isRunning;
    timedLoop(50, function () {
      if (!isRunning) {
        return;
      }
    });
    var CurrentBundleName = "Bundle$Settings";
    var data = {
      Screens: ["OpenBundle.Settings", "OpenBundle.SettingsAbout", "OpenBundle.Wallpaper"],
      OpenBundle$Settings: ["OpenBundle.Settings." + instanceIDd + ".Bar.1", "OpenBundle.Settings." + instanceIDd + ".Window", "OpenBundle.Settings." + instanceIDd + ".WindowHeader", "OpenBundle.Settings." + instanceIDd + ".Button.1", "OpenBundle.Settings." + instanceIDd + ".Button.2"],
      OpenBundle$SettingsAbout: ["OpenBundle.SettingsAbout." + instanceIDd + ".Bar.1", "OpenBundle.SettingsAbout." + instanceIDd + ".Bar.2", "OpenBundle.SettingsAbout." + instanceIDd + ".Window", "OpenBundle.SettingsAbout." + instanceIDd + ".WindowHeader", "OpenBundle.SettingsAbout." + instanceIDd + ".Text.1"],
      OpenBundle$Wallpapers: ["OpenBundle.Wallpaper." + instanceIDd + ".Bar.1", "OpenBundle.Wallpaper." + instanceIDd + ".Bar.2", "OpenBundle.Wallpaper." + instanceIDd + ".Window", "OpenBundle.Wallpaper." + instanceIDd + ".WindowHeader", "OpenBundle.Wallpaper." + instanceIDd + ".Button.1", "OpenBundle.Wallpaper." + instanceIDd + ".Button.2", "OpenBundle.Wallpaper." + instanceIDd + ".Button.3", "OpenBundle.Wallpaper." + instanceIDd + ".Button.4", "OpenBundle.Wallpaper." + instanceIDd + ".Button.5", "OpenBundle.Wallpaper." + instanceIDd + ".Button.6"]
    };
    openBundles$RegisterAppBundle("Settings", data.Screens);
    openBundles$hideIcons();
    if (data[Data]) {
      return data[Data];
    } else if (Data == null || Data == "") {
      if (Scr === "Settings") {
        // Define initial positions relative to the window
        var windowX = 100;
        var windowY = 35;
        var headerY = windowY;
        var barX = windowX;
        var barY = windowY;
        var buttonX = windowX + 5; // Adjust as needed
        var buttonY = windowY + 30;

        // Create elements
        BEMA("TextArea", "OpenBundle.Settings." + instanceIDd + ".Window", windowX, windowY, 300, 200, false, 10, 0, "", Base, Text, "", "center", 16, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.Settings." + instanceIDd + ".WindowHeader", windowX, headerY, 300, 25, false, 10, 0, "", Surface0, Text, "Settings", "center", 12, "Tahoma", true, "", "");
        BEMA("Button", "OpenBundle.Settings." + instanceIDd + ".Button.1", buttonX, buttonY, 80, 25, false, 10, 0, "", Surface0, Text, "Wallpapers", "center", 11, "Tahoma", true, "", "");
        BEMA("Button", "OpenBundle.Settings." + instanceIDd + ".Button.2", buttonX + 85, buttonY, 80, 25, false, 10, 0, "", Surface0, Text, "About", "center", 11, "Tahoma", true, "", "");
        BEMA("Button", "OpenBundle.Settings." + instanceIDd + ".Bar.1", barX, barY, 25, 25, false, 10, 0, "rgb(0,0,0,0)", Surface1, Text, "", "left", 0, "Tahoma", true, "times.png", Text);
        onEvent("OpenBundle.Settings." + instanceIDd + ".Bar.1", "click", function () {
          Bundle$Settings("HideAll", "OpenBundle$Settings");
        });
        onEvent("OpenBundle.Settings." + instanceIDd + ".Button.1", "click", function () {
          Bundle$Settings("HideAll", "OpenBundle$Settings");
          Bundle$Settings("", "Wallpapers");
        });
        onEvent("OpenBundle.Settings." + instanceIDd + ".Button.2", "click", function () {
          Bundle$Settings("HideAll", "OpenBundle$Settings");
          Bundle$Settings("", "About");
        });
      }
      if (Scr === "About") {
        // Define initial positions relative to the window
        var windowX = 100;
        var windowY = 35;
        var headerY = windowY;
        var barX = windowX;
        var barY = windowY;
        var textX = windowX; // Adjust as needed
        var textY = windowY + 25;

        // Create elements
        BEMA("TextArea", "OpenBundle.SettingsAbout." + instanceIDd + ".Window", windowX, windowY, 300, 200, false, 10, 0, "", Base, Text, "", "center", 16, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.SettingsAbout." + instanceIDd + ".WindowHeader", windowX, headerY, 300, 25, false, 10, 0, "", Surface0, Text, "Settings - About", "center", 12, "Tahoma", true, "", "");
        BEMA("Button", "OpenBundle.SettingsAbout." + instanceIDd + ".Bar.1", barX, barY, 25, 25, false, 10, 0, "rgb(0,0,0,0)", Surface1, Text, "", "left", 0, "Tahoma", true, "times.png", Text);
        BEMA("Button", "OpenBundle.SettingsAbout." + instanceIDd + ".Bar.2", barX + 30, barY, 25, 25, false, 10, 0, "rgb(0,0,0,0)", Surface1, Text, "", "center", 11, "Tahoma", true, "left-arrow.png", "");
        BEMA("TextArea", "OpenBundle.SettingsAbout." + instanceIDd + ".Text.1", textX, textY, 300, 175, false, 10, 0, "", Base, Text, "", "left", 10, "Tahoma", true, "", "");
        setText("OpenBundle.SettingsAbout." + instanceIDd + ".Text.1", "Celeste version " + Version);
        onEvent("OpenBundle.SettingsAbout." + instanceIDd + ".Bar.1", "click", function () {
          Bundle$Settings("HideAll", "OpenBundle$SettingsAbout");
        });
        onEvent("OpenBundle.SettingsAbout." + instanceIDd + ".Bar.2", "click", function () {
          Bundle$Settings("HideAll", "OpenBundle$SettingsAbout");
          Bundle$Settings("", "Settings");
        });
      }
      if (Scr === "Wallpapers") {
        // Define initial positions relative to the window
        var windowX = 100;
        var windowY = 35;
        var headerY = windowY;
        var barX = windowX;
        var barY = windowY;
        var buttonWidth = 85;
        var buttonHeight = 47;
        var buttonSpacing = 5; // Space between buttons
        var numColumns = 3; // Number of columns
        var numRows = 2; // Number of rows

        // Adjusted window dimensions
        var windowWidth = 290; // 300 - 10
        var windowHeight = 150; // 200 - 20

        // Create elements
        BEMA("TextArea", "OpenBundle.Wallpaper." + instanceIDd + ".Window", windowX, windowY, windowWidth, windowHeight, false, 10, 0, "", Base, Text, "", "center", 16, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.Wallpaper." + instanceIDd + ".WindowHeader", windowX, headerY, windowWidth, 25, false, 10, 0, "", Surface0, Text, "Wallpapers", "center", 12, "Tahoma", true, "", "");
        BEMA("Button", "OpenBundle.Wallpaper." + instanceIDd + ".Bar.1", barX, barY, 25, 25, false, 10, 0, "rgb(0,0,0,0)", Surface1, Text, "", "left", 0, "Tahoma", true, "times.png", Text);
        BEMA("Button", "OpenBundle.Wallpaper." + instanceIDd + ".Bar.2", barX + 30, barY, 25, 25, false, 10, 0, "rgb(0,0,0,0)", Surface1, Text, "", "center", 11, "Tahoma", true, "left-arrow.png", "");
        for (var i = 0; i < numColumns * numRows; i++) {
          var col = i % numColumns;
          var row = Math.floor(i / numColumns);
          var btnX = windowX + (buttonWidth + buttonSpacing) * col + 12.5; // Shifted right by 10px
          var btnY = windowY + 30 + (buttonHeight + buttonSpacing) * row + 10;
          BEMA("Image", "OpenBundle.Wallpaper." + instanceIDd + ".Button." + (i + 1), btnX, btnY, buttonWidth, buttonHeight, false, 10, 0, "", Surface0, Text, "", "left", 11, "Tahoma", true, "", "");
          setProperty("OpenBundle.Wallpaper." + instanceIDd + ".Button." + (i + 1), "fit", "fill");
          if (wallpaperImages[i] == "") {
            hideElement("OpenBundle.Wallpaper." + instanceIDd + ".Button." + (i + 1));
          }
        }

        // Re-add images to the buttons
        setProperty("OpenBundle.Wallpaper." + instanceIDd + ".Button.1", "image", wallpaperImages[0]);
        setProperty("OpenBundle.Wallpaper." + instanceIDd + ".Button.2", "image", wallpaperImages[1]);
        setProperty("OpenBundle.Wallpaper." + instanceIDd + ".Button.3", "image", wallpaperImages[2]);
        setProperty("OpenBundle.Wallpaper." + instanceIDd + ".Button.4", "image", wallpaperImages[3]);
        setProperty("OpenBundle.Wallpaper." + instanceIDd + ".Button.5", "image", wallpaperImages[4]);
        setProperty("OpenBundle.Wallpaper." + instanceIDd + ".Button.6", "image", wallpaperImages[5]);
        onEvent("OpenBundle.Wallpaper." + instanceIDd + ".Button.1", "click", function () {
          Celeste$setWallpaper(wallpaperImages[0]);
        });
        onEvent("OpenBundle.Wallpaper." + instanceIDd + ".Button.2", "click", function () {
          Celeste$setWallpaper(wallpaperImages[1]);
        });
        onEvent("OpenBundle.Wallpaper." + instanceIDd + ".Button.3", "click", function () {
          Celeste$setWallpaper(wallpaperImages[2]);
        });
        onEvent("OpenBundle.Wallpaper." + instanceIDd + ".Button.4", "click", function () {
          Celeste$setWallpaper(wallpaperImages[3]);
        });
        onEvent("OpenBundle.Wallpaper." + instanceIDd + ".Button.5", "click", function () {
          Celeste$setWallpaper(wallpaperImages[4]);
        });
        onEvent("OpenBundle.Wallpaper." + instanceIDd + ".Button.6", "click", function () {
          Celeste$setWallpaper(wallpaperImages[5]);
        });
        onEvent("OpenBundle.Wallpaper." + instanceIDd + ".Bar.1", "click", function () {
          Bundle$Settings("HideAll", "OpenBundle$Wallpapers");
        });
        onEvent("OpenBundle.Wallpaper." + instanceIDd + ".Bar.2", "click", function () {
          Bundle$Settings("HideAll", "OpenBundle$Wallpapers");
          Bundle$Settings("", "Settings");
        });
      }
    } else if (Data == "HideAll") {
      eval("for (var i = 0; i < data." + Scr + ".length; i++) {deleteElement(data." + Scr + "[i]);openBundles$showIcons();}");

      // Remove the bundle instance from activeBundles
      delete activeBundles[bundleID];
    } else if (Data == "DeleteApp") {
      // Handle app deletion
    } else {
      WriteError("Unknown error with " + CurrentBundleName, CurrentBundleName, true);
      return "";
    }
  }
  //Bundle$StickyNote
  var currentNote = "Type your note here!";
  function Bundle$StickyNote(Data, Scr) {
    var bundleID = "StickyNote"; // Identifier for the bundle

    // Check if the bundle is already running and handle requests accordingly
    if (activeBundles[bundleID] && (Data === "Open" || Data === null || Data === "")) {
      // If the bundle is already running and the request is to open or show screens, ignore it
      return;
    }

    // Initialize or reset the bundle instance if it's not already active
    if (!activeBundles[bundleID]) {
      activeBundles[bundleID] = {
        instanceIDd: generateRandomString(10),
        // Generate unique ID
        isRunning: true // Mark as running
      };
    }
    var instanceIDd = activeBundles[bundleID].instanceIDd;
    var isRunning = activeBundles[bundleID].isRunning;
    timedLoop(50, function () {
      if (!isRunning) {
        return;
      }
    });
    var CurrentBundleName = "Bundle$StickyNote";
    var data = {
      Screens: ["OpenBundle.StickyNote"],
      OpenBundle$StickyNote: ["OpenBundle.StickyNote." + instanceIDd + ".Window", "OpenBundle.StickyNote." + instanceIDd + ".WindowHeader", "OpenBundle.StickyNote." + instanceIDd + ".Text.1", "OpenBundle.StickyNote." + instanceIDd + ".Bar.1"]
    };
    openBundles$RegisterAppBundle("StickyNote", data.Screens);
    openBundles$hideIcons();
    if (data[Data]) {
      return data[Data];
    } else if (Data == null || Data == "") {
      if (Scr == "StickyNote") {
        BEMA("TextArea", "OpenBundle.StickyNote." + instanceIDd + ".Window", 100, 100, 200, 200, false, 0, 0, "", Blank, Base, "", "center", 16, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.StickyNote." + instanceIDd + ".Text.1", 100, 115, 200, 185, false, 0, 0, "", "#f9e2af", Base, currentNote, "left", 11, "Tahoma", false, "", "");
        BEMA("TextArea", "OpenBundle.StickyNote." + instanceIDd + ".WindowHeader", 100, 100, 200, 15, false, 0, 0, "", "#e8d19e", Base, "", "center", 5, "Tahoma", true, "", "");
        BEMA("Button", "OpenBundle.StickyNote." + instanceIDd + ".Bar.1", 100, 100, 15, 15, false, 0, 0, "rgb(0,0,0,0)", "#e8d19e", Base, "", "left", 0, "Tahoma", true, "times_mantle.png", "");
        onEvent("OpenBundle.StickyNote." + instanceIDd + ".Bar.1", "click", function () {
          currentNote = getText("OpenBundle.StickyNote." + instanceIDd + ".Text.1");
          Bundle$StickyNote("HideAll");
        });
      }
    } else if (Data == "HideAll") {
      for (var i = 0; i < data.OpenBundle$StickyNote.length; i++) {
        deleteElement(data.OpenBundle$StickyNote[i]);
        openBundles$showIcons();
      }
      // Remove the bundle instance from activeBundles
      delete activeBundles[bundleID];
    } else if (Data == "DeleteApp") {
      //not needed for this app
    } else {
      WriteError("Unknown error with " + CurrentBundleName, CurrentBundleName, true);
      return "";
    }
  }
  //Bundle$Terminal
  function Bundle$Terminal(Data, Scr) {
    var TermText = Text;
    var TermBase = Base;
    var TermSurface0 = Surface0;
    var TermSurface1 = Surface1;
    if (Internal || debug) {
      TermText = "#00ff00";
      TermBase = "#000000";
      TermSurface0 = "#111111";
      TermSurface1 = "#222222";
    }
    var bundleID = "Terminal";
    if (activeBundles[bundleID] && (Data === "Open" || Data === null || Data === "")) {
      // If the bundle is already running and the request is to open or show screens, ignore it
      return;
    }

    // Initialize or reset the bundle instance if it's not already active
    if (!activeBundles[bundleID]) {
      activeBundles[bundleID] = {
        instanceIDd: generateRandomString(10),
        // Generate unique ID
        isRunning: true // Mark as running
      };
    }
    var instanceIDd = activeBundles[bundleID].instanceIDd;
    var isRunning = activeBundles[bundleID].isRunning;
    timedLoop(50, function () {
      if (!isRunning) {
        return;
      }
    });
    var data = {
      Screens: ["OpenBundle.Terminal"],
      OpenBundle$Terminal: ["OpenBundle.Terminal." + instanceIDd + ".Window", "OpenBundle.Terminal." + instanceIDd + ".WindowHeader", "OpenBundle.Terminal." + instanceIDd + ".Display", "OpenBundle.Terminal." + instanceIDd + ".Input", "OpenBundle.Terminal." + instanceIDd + ".Bar.1"]
    };
    openBundles$RegisterAppBundle("Terminal", data.Screens);
    openBundles$hideIcons();
    if (data[Data]) {
      return data[Data];
    } else if (Data == null || Data == "") {
      if (Scr == "Terminal") {
        var windowWidth = 400;
        var windowHeight = 300;
        BEMA("TextArea", "OpenBundle.Terminal." + instanceIDd + ".Window", 100, 50, windowWidth, windowHeight, false, 10, 0, "", TermBase, TermText, "", "left", 16, "Courier New", true, "", "");
        BEMA("TextArea", "OpenBundle.Terminal." + instanceIDd + ".WindowHeader", 100, 50, windowWidth, 25, false, 10, 0, "", TermSurface0, TermText, "Terminal", "center", 12, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.Terminal." + instanceIDd + ".Display", 100, 75, windowWidth, windowHeight - 75, false, 10, 0, "", TermBase, TermText, "Welcome to Celeste Terminal\n", "left", 14, "Courier New", true, "", "");
        BEMA("Input", "OpenBundle.Terminal." + instanceIDd + ".Input", 100, windowHeight + 25, windowWidth, 25, false, 10, 0, "", TermSurface0, TermText, "Command [args]", "left", 14, "Courier New", false, "", "");
        BEMA("Button", "OpenBundle.Terminal." + instanceIDd + ".Bar.1", 100, 50, 25, 25, false, 10, 0, "rgb(0,0,0,0)", TermSurface1, TermText, "", "center", 12, "Tahoma", true, "times.png", TermText);
        onEvent("OpenBundle.Terminal." + instanceIDd + ".Bar.1", "click", function () {
          Bundle$Terminal("HideAll");
        });
        onEvent("OpenBundle.Terminal." + instanceIDd + ".Input", "keydown", function (event) {
          if (event.key === "Enter") {
            var command = getText("OpenBundle.Terminal." + instanceIDd + ".Input");
            command = command.replace(/\n/g, "");
            processCommand(command);
            setText("OpenBundle.Terminal." + instanceIDd + ".Input", "");
          }
        });

        // Mouse down event: Start dragging
        onEvent("OpenBundle.Terminal." + instanceIDd + ".WindowHeader", "mousedown", function (event) {
          startDrag(event, "OpenBundle.Terminal." + instanceIDd + ".Window", ["OpenBundle.Terminal." + instanceIDd + ".WindowHeader", "OpenBundle.Terminal." + instanceIDd + ".Bar.1", "OpenBundle.Terminal." + instanceIDd + ".Display", "OpenBundle.Terminal." + instanceIDd + ".Input"]);
        });
      }
    } else if (Data == "DeleteApp") {
      //not needed for this app
    } else if (Data == "HideAll") {
      for (var i = 0; i < data.OpenBundle$Terminal.length; i++) {
        var elementId = data.OpenBundle$Terminal[i];
        deleteElement(elementId);
      }
      openBundles$showIcons();
      // Remove the bundle instance from activeBundles
      delete activeBundles[bundleID];
    }
    function processCommand(command) {
      var output = "";
      var parts = command.split(" ");
      var cmd = parts[0].toLowerCase();
      if (cmd === "help") {
        output = "Available commands:\n" + "help - Show this help message\n" + "echo [text] - Display the given text\n" + "clear - Clear the terminal screen\n" + "date - Show current date and time\n" + "whoami - Display current user\n" + "calc [expression] - Simple calculator, only available for developers";
      } else if (cmd === "echo") {
        output = parts.slice(1).join(" ");
      } else if (cmd === "clear") {
        setText("OpenBundle.Terminal." + instanceIDd + ".Display", "");
        return;
      } else if (cmd === "date") {
        output = getTime("HH:mm:ss") + " " + getDate("mm/dd/yyyy");
      } else if (cmd === "whoami") {
        output = "Guest";
      } else if (cmd === "calc") {
        if (Internal || debug) {
          if (parts.length > 1) {
            try {
              output = eval(parts.slice(1).join(" "));
            } catch (e) {
              output = "Invalid expression";
            }
          } else {
            output = "Usage: calc [expression]";
          }
        } else {
          output = "calc command is not available";
        }
      } else {
        output = "Command not recognized. Type 'help' for available commands.";
      }
      appendToDisplay("> " + command + "\n" + output + "\n");
    }
    function appendToDisplay(text) {
      var display = "OpenBundle.Terminal." + instanceIDd + ".Display";
      setText(display, "Welcome to Celeste Terminal\n" + text);
    }
  }
  //Bundle$TextEdit
  var documents = {}; // Store multiple documents
  function Bundle$TextEdit(Data, Scr, docID) {
    // Load documents into memory (no file operations)
    function loadDocuments() {
      // Initialize documents with default content
      documents["text1.mfsf"] = "Type your document here!";
      documents["text2.mfsf"] = "Type your document here!";
      documents["text3.mfsf"] = "Type your document here!";
    }

    //loadDocuments(); // Load documents at the start

    var bundleID = "TextEdit"; // Identifier for the bundle

    // Check if the bundle is already running and handle requests accordingly
    if (activeBundles[bundleID] && (Data === "Open" || Data === null || Data === "")) {
      return;
    }

    // Initialize or reset the bundle instance if it's not already active
    if (!activeBundles[bundleID]) {
      activeBundles[bundleID] = {
        instanceIDd: generateRandomString(10),
        // Generate unique ID
        isRunning: true // Mark as running
      };
    }
    var instanceIDd = activeBundles[bundleID].instanceIDd;
    var isRunning = activeBundles[bundleID].isRunning;
    timedLoop(50, function () {
      if (!isRunning) {
        return;
      }
    });
    var CurrentBundleName = "Bundle$TextEdit";
    var data = {
      Screens: ["OpenBundle.TextEdit"],
      OpenBundle$TextEdit: ["OpenBundle.TextEdit." + instanceIDd + ".Bar.1", "OpenBundle.TextEdit." + instanceIDd + ".Window", "OpenBundle.TextEdit." + instanceIDd + ".WindowHeader", "OpenBundle.TextEdit." + instanceIDd + ".Text.1"]
    };
    openBundles$RegisterAppBundle("TextEdit", data.Screens);
    openBundles$hideIcons();
    if (data[Data]) {
      return data[Data];
    } else if (Data == null || Data == "") {
      if (Scr == "TextEdit") {
        if (!documents[docID]) {
          documents[docID] = "Type your document here!";
        }
        BEMA("TextArea", "OpenBundle.TextEdit." + instanceIDd + ".Window", 100, 35, 300, 200, false, 10, 0, "", Base, Text, "", "center", 16, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.TextEdit." + instanceIDd + ".WindowHeader", 100, 35, 300, 25, false, 10, 0, "", Surface0, Text, "Text Edit", "center", 12, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.TextEdit." + instanceIDd + ".Text.1", 100, 65, 300, 200, false, 10, 0, "", Base, Text, documents[docID], "left", 11, "Tahoma", false, "", "");
        BEMA("Button", "OpenBundle.TextEdit." + instanceIDd + ".Bar.1", 100, 35, 25, 25, false, 10, 0, "rgb(0,0,0,0)", Surface1, Text, "", "left", 0, "Tahoma", true, "times.png", Text);
        onEvent("OpenBundle.TextEdit." + instanceIDd + ".Bar.1", "click", function () {
          // Save changes to the documents variable (no file operations)
          var currentText = getText("OpenBundle.TextEdit." + instanceIDd + ".Text.1"); // Get the current text
          console.log(docID); // Log the document ID
          console.log(currentText); // Log the current text being saved
          documents[docID] = currentText; // Update the document with the current text
          Bundle$TextEdit("HideAll"); // Hide the editor
          console.log(documents); // Log the updated documents object
        });
      }
    } else if (Data == "HideAll") {
      for (var i = 0; i < data.OpenBundle$TextEdit.length; i++) {
        deleteElement(data.OpenBundle$TextEdit[i]);
      }
      openBundles$showIcons();
      // Remove the bundle instance from activeBundles
      delete activeBundles[bundleID];
    } else if (Data == "DeleteApp") {
      // Handle app deletion
    } else {
      WriteError("Unknown error with " + CurrentBundleName, CurrentBundleName, true);
      return "";
    }
  }
  //Bundle$Tips
  function Bundle$Tips(Data, Scr) {
    var bundleID = "Tips"; // Identifier for the bundle

    // Check if the bundle is already running and handle requests accordingly
    if (activeBundles[bundleID] && (Data === "Open" || Data === null || Data === "")) {
      // If the bundle is already running and the request is to open or show screens, ignore it
      return;
    }

    // Initialize or reset the bundle instance if it's not already active
    if (!activeBundles[bundleID]) {
      activeBundles[bundleID] = {
        instanceIDd: generateRandomString(10),
        // Generate unique ID
        isRunning: true // Mark as running
      };
    }
    var instanceIDd = activeBundles[bundleID].instanceIDd;
    var isRunning = activeBundles[bundleID].isRunning;
    timedLoop(50, function () {
      if (!isRunning) {
        return;
      }
    });
    var CurrentBundleName = "Bundle$Tips";
    var data = {
      Screens: ["OpenBundle.Tips"],
      OpenBundle$Tips: ["OpenBundle.Tips." + instanceIDd + ".Bar.1", "OpenBundle.Tips." + instanceIDd + ".Window", "OpenBundle.Tips." + instanceIDd + ".WindowHeader", "OpenBundle.Tips." + instanceIDd + ".Text.1"]
    };
    openBundles$RegisterAppBundle("Tips", data.Screens);
    openBundles$hideIcons();
    if (data[Data]) {
      return data[Data];
    } else if (Data == null || Data == "") {
      if (Scr == "Tips") {
        BEMA("TextArea", "OpenBundle.Tips." + instanceIDd + ".Window", 100, 35, 300, 200, false, 10, 0, "", Base, Text, "", "center", 16, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.Tips." + instanceIDd + ".WindowHeader", 100, 35, 300, 25, false, 10, 0, "", Surface0, Text, "Tips", "center", 12, "Tahoma", true, "", "");
        BEMA("TextArea", "OpenBundle.Tips." + instanceIDd + ".Text.1", 100, 65, 300, 200, false, 10, 0, "", Base, Text, tipsAppText, "left", 11, "Tahoma", true, "", "");
        BEMA("Button", "OpenBundle.Tips." + instanceIDd + ".Bar.1", 100, 35, 25, 25, false, 10, 0, "rgb(0,0,0,0)", Surface1, Text, "", "left", 0, "Tahoma", true, "times.png", Text);
        onEvent("OpenBundle.Tips." + instanceIDd + ".Bar.1", "click", function () {
          Bundle$Tips("HideAll");
        });
      }
    } else if (Data == "HideAll") {
      for (var i = 0; i < data.OpenBundle$Tips.length; i++) {
        deleteElement(data.OpenBundle$Tips[i]);
        openBundles$showIcons();
      }
      // Remove the bundle instance from activeBundles
      delete activeBundles[bundleID];
    } else if (Data == "DeleteApp") {
      // Handle app deletion
    } else {
      WriteError("Unknown error with " + CurrentBundleName, CurrentBundleName, true);
      return "";
    }
  }
});
/******/ })()
;
//# sourceMappingURL=combined.bundle.js.map