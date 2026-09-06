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
}

window.setTheme = setTheme;

export function loadTheme() {
  const theme = localStorage.getItem("theme") ?? "mocha";
  setTheme(theme);
}

if (iframe) {
  iframe.addEventListener("load", sendThemeToIframe);
}
