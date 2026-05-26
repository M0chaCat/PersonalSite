
function getThemeVars() {
  const target = document.body;

  const styles = getComputedStyle(target);

  const keys = [
    "bgsize",
    "cardbgsize",
    "base",
    "mantle",
    "crust",
    "text",
    "subtext1",
    "surface0",
    "surface1",
    "surface2",
    "pink",
    "mauve",
    "red",
    "lavender",
    "blue",
    "hovertrans",
    "titlehovertrans",
  ];

  const vars = {};

  for (const key of keys) {
    vars[key] = styles.getPropertyValue(`--${key}`).trim();
    // console.log(vars);
  }

  return vars;
}

function sendThemeToIframe() {
  // console.log("sending alert!!");
  iframe.contentWindow.postMessage(
    {
      type: "theme",
      vars: getThemeVars(),
    },
    "*"
  );
}

const iframe = document.querySelector("iframe");

iframe.addEventListener("load", sendThemeToIframe);


function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  sendThemeToIframe();
}

function loadTheme() {
  const theme = localStorage.getItem("theme") ?? "mocha";
  setTheme(theme);
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
        } else {
            console.warn("Unexpected response:", text);
            return false;
        }
    } catch (err) {
        console.error("No NyaNet!! using only static stuffs!!!");
        return false;
    }
}

function makeUrl(host) {
    // Use page protocol if HTTP(S), otherwise default to HTTPS
    const protocol = window.location.protocol.startsWith("http") ? window.location.protocol : "https:";
    return protocol + "//" + host;
}

const userHasNyaNet = testNyaNet();
//const userHasNyaNet = false;

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".hover-text").forEach(el => {
    const nodes = [...el.childNodes];

    nodes.forEach(node => {
      if (node.nodeType !== Node.TEXT_NODE) return;

      const frag = document.createDocumentFragment();

      [...node.textContent].forEach(char => {
        const span = document.createElement("span");
        span.className = "letter";

        span.innerHTML = (char === " ") ? "&nbsp;" : char;
        frag.appendChild(span);
      });

      node.replaceWith(frag);
    });
  });

  loadTheme();
    // Gamin!!
    async function updateNowPlayingGame() {
        const nowPlayingGame = document.getElementById("now-playing-game");

        //if (userHasNyaNet) {

        //}

        try {
            const res = await fetch(makeUrl("api.plushiekitty.party/steam-status.php"));
            const data = await res.json();

            const img = document.getElementById("game-img");
            const title = document.getElementById("game-title");

            if (!data.playing) {
                nowPlayingGame.style.display = "block";
                nowPlayingGame.querySelector(".game").style.display = "flex";

                title.textContent = "Not playing anything";
                img.src = "./assets/placeholder-albumart.png";
                const el = document.getElementById("now-playing-game");
                el.remove();
                return;
            }

            img.src = data.image;
            title.textContent = data.game;
        } catch {
            document.getElementById("track-title").textContent = "Failed to load";
        }
    }

    window.addEventListener("load", updateNowPlayingGame);

    // Jammin!!!
    function timeAgo(iso) {
        if (!iso) return "";

        const then = new Date(iso);
        const now = new Date();
        const seconds = Math.floor((now - then) / 1000);

        if (seconds < 60) return "Played just now";
        const minutes = Math.floor(seconds / 60);
        if (minutes < 60) return `Played ${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
        const hours = Math.floor(minutes / 60);
        if (hours < 24) return `Played ${hours} hour${hours !== 1 ? "s" : ""} ago`;
        const days = Math.floor(hours / 24);
        return `Played ${days} day${days !== 1 ? "s" : ""} ago`;
    }

    async function updateNowPlaying() {
        const nowPlaying = document.getElementById("now-playing");

        //if (userHasNyaNet) {
        nowPlaying.style.display = "block";

        nowPlaying.querySelector(".track").style.display = "flex";
        //}

        const title = document.getElementById("track-title");
        const artist = document.getElementById("track-artist");
        const time = document.getElementById("track-time");
        const img = document.getElementById("track-img");

        if (!title || !artist || !time || !img) return;

        const res = await fetch(makeUrl("api.plushiekitty.party/now-playing.php"), {
            cache: "no-store"
        });
        if (!res.ok) return;

        const data = await res.json();

        title.textContent = data.title ?? "";
        artist.textContent = data.artist ?? "";
        time.textContent = timeAgo(data.played);
        if (data.image) img.src = data.image;
    }

    window.addEventListener("load", updateNowPlaying);

    async function updateContributions() {
        const ContributionsCount = document.getElementById("contr-count");

        const count = document.getElementById("contr-count-txt");

        const res = await fetch(makeUrl("api.plushiekitty.party/github/"), {
            cache: "no-store"
        });
        if (!res.ok) return;

        const data = await res.json();

        const text = (data.totalContributions +" commits this year!!") ?? "0 commits this year,, 3:"

        count.textContent = text;
    }

    window.addEventListener("load", updateContributions);

    // Ad
    const adCard = document.getElementById("ad");
    if (adCard && !userHasNyaNet) {
        adCard.remove();
        // TODO: Nyanet ad on public site:
        const iframe = adCard.querySelector("iframe");
        if (iframe) {
            const img = document.createElement("img");
            img.src = "./assets/nyanet.png"; // replace with your image URL
            img.alt = "Ad";
            img.style.width = "100%"; // optional
            img.style.height = "auto"; // optional

            iframe.replaceWith(img);
        }
    }

    // DVD const
    let originalPic = document.querySelector('.profile-pic');
    const card = originalPic.closest('.dvd');
    let dx = 2;
    let dy = 2;
    let animating = false;
    let x, y;

    let bouncingPic = null;
    let frameId = null;

    card.addEventListener('click', (e) => {
        if (bouncingPic) {
            cancelAnimationFrame(frameId);
            frameId = null;

            bouncingPic.remove();
            bouncingPic = null;

            originalPic.style.visibility = 'visible';
            return;
        }

        if (!e.target.classList.contains('profile-pic')) return;

        const rect = originalPic.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();

        originalPic.style.visibility = 'hidden';

        bouncingPic = originalPic.cloneNode(true);

        bouncingPic.style.position = 'absolute';
        bouncingPic.style.left = x + 'px';
        bouncingPic.style.top = y + 'px';
        bouncingPic.style.margin = '0';

        bouncingPic.style.zIndex = '9999';
        bouncingPic.style.visibility = 'visible';
        bouncingPic.style.pointerEvents = 'none';
        card.appendChild(bouncingPic);

        x = rect.left - cardRect.left;
        y = rect.top - cardRect.top;

        bouncingPic.style.left = x + "px";
        bouncingPic.style.top = y + "px";

        frameId = requestAnimationFrame(bounce);
    });

    function bounce() {
        const style = getComputedStyle(card);

        const paddingLeft = parseFloat(style.paddingLeft);
        const paddingTop = parseFloat(style.paddingTop);

        const width = card.clientWidth - paddingLeft - parseFloat(style.paddingRight);
        const height = card.clientHeight - paddingTop - parseFloat(style.paddingBottom);

        const maxX = width - bouncingPic.offsetWidth;
        const maxY = height - bouncingPic.offsetHeight;

        x += dx;
        y += dy;

        if (x <= 0 || x >= maxX) dx *= -1;
        if (y <= 0 || y >= maxY) dy *= -1;

        bouncingPic.style.left = (x + paddingLeft) + "px";
        bouncingPic.style.top = (y + paddingTop) + "px";

        frameId = requestAnimationFrame(bounce);
    }

    // Random PFP
    function getDeterministicPFP() {
        const date = new Date();
        // Format date as YYYYMMDD
        const dateStr = `${date.getFullYear()}${date.getMonth()+1}${date.getDate()}`;
        // Simple hash: sum of digits
        let sum = 0;
        for (let char of dateStr) sum += parseInt(char);
        // Map to 1-5
        const index = (sum % 5) + 1;
        return `./assets/pfps/pfp${index}.png`;
    }

    // Set the src
    document.getElementById('profile-pic').src = getDeterministicPFP();

    if (window.location.hostname !== "plushiekitty.party" && window.location.hostname !== "localhost" && window.location.protocol !== "file:") {
        const el = document.getElementById("pub-webrings");

        if (el) {
            el.remove();
        }

        return false;
    }


});
