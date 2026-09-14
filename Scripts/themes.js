let iframe = null;

if (location.pathname === "/") {
  iframe = document.querySelector("#guestbookif");
} else if (location.pathname === "/Blog/") {
  iframe = document.querySelector("iframe#blog");
} else if (location.pathname === "/Gallery/") {
  iframe = document.querySelector("iframe#gallery");
} else if (location.pathname === "/Mood/") {
  iframe = document.querySelector("iframe#mood");
} else {
  iframe = document.querySelector("#guestbookif");
}

export function getThemeVars() {
  const styles = getComputedStyle(document.body);

  const keys = [
    "bgsize",
    "cardbgsize",
    "cardshadow",
    "cardborder",
    "buttonborder",
    "buttonshadow",

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
    "font",
    "bg"
  ];

  const vars = {};

  for (const key of keys) {
    vars[key] = styles.getPropertyValue(`--${key}`).trim();
  }

  return vars;
}

export function sendThemeToIframe() {
  if (!iframe) return;

  iframe.contentWindow.postMessage(
    {
      type: "theme",
      vars: getThemeVars(),
    },
    "*"
  );
}

export function setTheme(theme) {
  document.body.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);

  sendThemeToIframe();

  document.querySelectorAll('.card, .thin-card, .scrolling-buttons-container').forEach(e => {
      const match = getComputedStyle(e).backgroundImage.match(/url\(["']?(.*?)["']?\)/);
      if (!match) return;

      const img = new Image();

      img.onload = () => {
          const zoom = 1.0 + Math.random() * 0.5;

          const w = img.naturalWidth * zoom;
          const h = img.naturalHeight * zoom;

          // Ensure it still covers the element
          const scale = Math.max(
              e.clientWidth / w,
              e.clientHeight / h,
              1
          );

          const finalW = w * scale;
          const finalH = h * scale;

          const maxX = Math.max(0, finalW - e.clientWidth);
          const maxY = Math.max(0, finalH - e.clientHeight);

          e.style.backgroundSize = `${finalW}px ${finalH}px`;
          e.style.backgroundPosition =
              `${-Math.random() * maxX}px ${-Math.random() * maxY}px`;
          e.style.backgroundRepeat = 'no-repeat';
      };

      img.src = match[1];
  });

  if (theme === "snow") {
      document.querySelectorAll('.card, .thin-card, .scrolling-buttons-container').forEach(e => {
          e.style.position = 'relative';

          ['bl', 'br'].forEach(pos => {
              const bolt = document.createElement('img');

              bolt.src = '/assets/bolt.png';
              bolt.className = 'theme-bolt';

              Object.assign(bolt.style, {
                  position: 'absolute',
                  width: '7px',
                  height: '7px',
                  zIndex: '100',
                  pointerEvents: 'none'
              });

              bolt.style.bottom = '-3.5px';

              if (pos === 'bl') bolt.style.left = '-3.5px';
              if (pos === 'br') bolt.style.right = '-3.5px';

              e.appendChild(bolt);
          });
      });
  } else {
      document.querySelectorAll('.theme-bolt').forEach(e => e.remove());
  }
}

window.setTheme = setTheme;

export function loadTheme() {
  const theme = localStorage.getItem("theme") ?? "mocha";
  setTheme(theme);
}

if (iframe) {
  iframe.addEventListener("load", sendThemeToIframe);
}
