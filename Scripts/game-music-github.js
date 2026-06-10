function timeAgo(iso) {
  if (!iso) return "";

  const then = new Date(iso);
  const now = new Date();

  const seconds = Math.floor((now - then) / 1000);

  if (seconds < 60) return "Played just now";

  const minutes = Math.floor(seconds / 60);

  if (minutes < 60) {
    return `Played ${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  }

  const hours = Math.floor(minutes / 60);

  if (hours < 24) {
    return `Played ${hours} hour${hours !== 1 ? "s" : ""} ago`;
  }

  const days = Math.floor(hours / 24);

  return `Played ${days} day${days !== 1 ? "s" : ""} ago`;
}

export async function updateNowPlayingGame(makeUrl) {
  const nowPlayingGame =
    document.getElementById("now-playing-game");

  try {
    const res = await fetch(
      makeUrl("api.plushiekitty.party/steam-status.php")
    );

    const data = await res.json();

    const img = document.getElementById("game-img");
    const title = document.getElementById("game-title");

    if (!data.playing) {
      nowPlayingGame.style.display = "block";
      nowPlayingGame.querySelector(".game").style.display = "flex";

      title.textContent = "Not playing anything";
      img.src = "./assets/placeholder-albumart.png";

      document
        .getElementById("now-playing-game")
        ?.remove();

      return;
    }

    img.src = data.image;
    title.textContent = data.game;
  } catch {
    document.getElementById("track-title").textContent =
      "Failed to load";
  }
}

export async function updateNowPlaying(makeUrl) {
  const nowPlaying = document.getElementById("now-playing");

  nowPlaying.style.display = "block";
  nowPlaying.querySelector(".track").style.display = "flex";

  const title = document.getElementById("track-title");
  const artist = document.getElementById("track-artist");
  const time = document.getElementById("track-time");
  const img = document.getElementById("track-img");

  if (!title || !artist || !time || !img) return;

  const res = await fetch(
    makeUrl("api.plushiekitty.party/now-playing.php"),
    { cache: "no-store" }
  );

  if (!res.ok) return;

  const data = await res.json();

  title.textContent = data.title ?? "";
  artist.textContent = data.artist ?? "";
  time.textContent = timeAgo(data.played);

  if (data.image) {
    img.src = data.image;
  }
}

export async function updateContributions(makeUrl) {
  const count =
    document.getElementById("contr-count-txt");

  const res = await fetch(
    makeUrl("api.plushiekitty.party/github/"),
    { cache: "no-store" }
  );

  if (!res.ok) return;

  const data = await res.json();

  count.textContent =
    `${data.totalContributions} contributions this year!!`
      ?? "0 contributions this year,, 3:";
}
