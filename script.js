async function testNyaNet() {
	try {
		const res = await fetch(makeUrl("home.root/response.txt"));
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
// const userHasNyaNet = false;

document.addEventListener("DOMContentLoaded", () => {
  // Gamin!!
  async function updateNowPlayingGame() {
    if (!userHasNyaNet) {
      const el = document.getElementById("now-playing-game");
      el.remove();
      return false;
    }
    try {
      const res = await fetch(makeUrl("home.root/steam-status.php"));
      const data = await res.json();

      const img = document.getElementById("game-img");
      const title = document.getElementById("game-title");

      if (!data.playing) {
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
      if (!userHasNyaNet) {
        const el = document.getElementById("now-playing");
        el.remove();
        return false;
      }

      const title = document.getElementById("track-title");
      const artist = document.getElementById("track-artist");
      const time = document.getElementById("track-time");
      const img = document.getElementById("track-img");

      if (!title || !artist || !time || !img) return;

      const res = await fetch(makeUrl("beta.root/music/now-playing.json"), { cache: "no-store" });
      if (!res.ok) return;

      const data = await res.json();

      title.textContent = data.title ?? "";
      artist.textContent = data.artist ?? "";
      time.textContent = timeAgo(data.played);
      if (data.image) img.src = data.image;
  }

  window.addEventListener("load", updateNowPlaying);

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

  // Settings
  const toggle = document.getElementById("toggle-crt");
  const KEY = "crt-enabled";

  /* load saved state */
  const saved = localStorage.getItem(KEY);
  if (saved !== null) {
      toggle.checked = saved === "true";
      document.body.classList.toggle("no-crt", !toggle.checked);
  }

  /* save on change */
  toggle.addEventListener("change", () => {
      localStorage.setItem(KEY, toggle.checked);
      document.body.classList.toggle("no-crt", !toggle.checked);
  });

  // DVD
  const originalPic = document.querySelector('.profile-pic');
  const card = originalPic.closest('.card');

  let dx = 2;
  let dy = 2;
  let animating = false;
  let x, y;
  let bouncingPic;

  originalPic.addEventListener('click', () => {
      if (animating) return;
      animating = true;

      // replace original with ghost box
      const ghost = document.createElement('div');
      ghost.className = 'ghost-box';
      originalPic.replaceWith(ghost);

      // create bouncing image without border or bg
      bouncingPic = originalPic.cloneNode(true);
      bouncingPic.style.border = 'none';
      bouncingPic.style.background = 'transparent';
      bouncingPic.style.padding = '0';
      bouncingPic.style.position = 'absolute';
      bouncingPic.style.margin = '0';
      bouncingPic.style.cursor = 'default';
      card.appendChild(bouncingPic);

      // position it exactly over ghost
      const rect = ghost.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      x = rect.left - cardRect.left;
      y = rect.top - cardRect.top;

      bouncingPic.style.left = x + 'px';
      bouncingPic.style.top = y + 'px';

      requestAnimationFrame(bounce);
  });

  function bounce() {
      const cardWidth = card.clientWidth - bouncingPic.clientWidth;
      const cardHeight = card.clientHeight - bouncingPic.clientHeight;

      x += dx;
      y += dy;

      if (x <= 0 || x >= cardWidth) dx = -dx;
      if (y <= 0 || y >= cardHeight) dy = -dy;

      bouncingPic.style.left = x + 'px';
      bouncingPic.style.top = y + 'px';

      requestAnimationFrame(bounce);
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

// Visitor counter
async function updateCounter() {
  if (!userHasNyaNet) {
    const el = document.getElementById("hitcard");
    el.remove();
    return false;
  }
    try {
      const res = await fetch(makeUrl("home.root/yatxv.php"));
        const data = await res.json();

        document.getElementById("hits").innerText = String(data.current_count);

    } catch (e) {
        console.error("Error fetching visitor data:", e);
    }
}

updateCounter();

if (window.location.hostname == "mocha.kitten") {
  const el = document.getElementById("pub-webrings");
  el.remove();
  return false;
}

});
