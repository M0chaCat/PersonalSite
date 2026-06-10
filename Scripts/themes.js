const iframe = document.querySelector("iframe#guestbook");

export function getThemeVars() {
  const styles = getComputedStyle(document.body);

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
    "font",
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

if (location.pathname === "/" && iframe) {
  iframe.addEventListener("load", sendThemeToIframe);
}
