export function initDVDPFP() {
  if (location.pathname !== "/") return;

  const originalPic = document.querySelector(".profile-pic");
  if (!originalPic) return;

  const card = originalPic.closest(".dvd");

  let dx = 2;
  let dy = 2;
  let x;
  let y;

  let bouncingPic = null;
  let frameId = null;

  card.addEventListener("click", (e) => {
    if (bouncingPic) {
      cancelAnimationFrame(frameId);

      bouncingPic.remove();
      bouncingPic = null;

      originalPic.style.visibility = "visible";
      return;
    }

    if (!e.target.classList.contains("profile-pic")) return;

    const rect = originalPic.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();

    originalPic.style.visibility = "hidden";

    bouncingPic = originalPic.cloneNode(true);

    bouncingPic.style.position = "absolute";
    bouncingPic.style.margin = "0";
    bouncingPic.style.zIndex = "9999";
    bouncingPic.style.visibility = "visible";
    bouncingPic.style.pointerEvents = "none";

    card.appendChild(bouncingPic);

    x = rect.left - cardRect.left;
    y = rect.top - cardRect.top;

    bouncingPic.style.left = `${x}px`;
    bouncingPic.style.top = `${y}px`;

    frameId = requestAnimationFrame(bounce);
  });

  function bounce() {
    const style = getComputedStyle(card);

    const paddingLeft = parseFloat(style.paddingLeft);
    const paddingTop = parseFloat(style.paddingTop);

    const width =
      card.clientWidth -
      paddingLeft -
      parseFloat(style.paddingRight);

    const height =
      card.clientHeight -
      paddingTop -
      parseFloat(style.paddingBottom);

    const maxX = width - bouncingPic.offsetWidth;
    const maxY = height - bouncingPic.offsetHeight;

    x += dx;
    y += dy;

    if (x <= 0 || x >= maxX) dx *= -1;
    if (y <= 0 || y >= maxY) dy *= -1;

    bouncingPic.style.left = `${x + paddingLeft}px`;
    bouncingPic.style.top = `${y + paddingTop}px`;

    frameId = requestAnimationFrame(bounce);
  }
}

export function getDeterministicPFP() {
  const date = new Date();

  const dateStr =
    `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`;

  let sum = 0;

  for (const char of dateStr) {
    sum += parseInt(char);
  }

  const index = (sum % 5) + 1;

  return `./assets/pfps/pfp${index}.png`;
}

export function initRandomPFP() {
  const img = document.getElementById("profile-pic");

  if (img) {
    img.src = getDeterministicPFP();
  }
}
