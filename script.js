import { loadTheme } from "./scripts/themes.js";
import { createScrollbar } from "./scripts/scrollbar.js";
import { setupAd } from "./scripts/ad.js";
import {
  initDVDPFP,
  initRandomPFP
} from "./scripts/pfp.js";
import {
  updateNowPlaying,
  updateNowPlayingGame,
  updateContributions
} from "./scripts/game-music-github.js";

function makeUrl(host) {
  const protocol = window.location.protocol.startsWith("http")
    ? window.location.protocol
    : "https:";

  return protocol + "//" + host;
}

async function testNyaNet() {
  try {
    const res = await fetch(makeUrl("qt.ouppy/response.txt"));

    if (!res.ok) {
      console.error("HTTP error:", res.status);
      return false;
    }

    const text = await res.text();

    if (text.trim() === "hewwo!") {
      return true;
    }

    console.warn("Unexpected response:", text);
    return false;
  } catch {
    console.error("No NyaNet!! using only static stuffs!!!");
    return false;
  }
}

const userHasNyaNet = testNyaNet();

document.querySelectorAll(".hover-text").forEach((el) => {
  const nodes = [...el.childNodes];

  nodes.forEach((node) => {
    if (node.nodeType !== Node.TEXT_NODE) return;

    const frag = document.createDocumentFragment();

    [...node.textContent].forEach((char) => {
      const span = document.createElement("span");

      span.className = "letter";
      span.innerHTML = char === " " ? "&nbsp;" : char;

      frag.appendChild(span);
    });

    node.replaceWith(frag);
  });
});

const scrollbar = createScrollbar(
  document.getElementById("my-scrollbar")
);

loadTheme();

if (location.pathname === "/") {
  initDVDPFP();
  initRandomPFP();
}

window.addEventListener("load", () => {
  updateNowPlayingGame(makeUrl);
});

updateNowPlaying(makeUrl);
updateContributions(makeUrl);

Promise.resolve(userHasNyaNet).then((hasNyaNet) => {
  setupAd(hasNyaNet);
});

if (
  window.location.hostname !== "plushiekitty.party" &&
  window.location.hostname !== "localhost" &&
  window.location.protocol !== "file:"
) {
  const el = document.getElementById("pub-webrings");

  if (el) {
    el.remove();
  }
}
