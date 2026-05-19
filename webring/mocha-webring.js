// webstring by snewberry @ snewberry.neocities.org

// webring settings
webring = {

  sites: [
    "https://snewdraws.net",
    "https://kiwimeowo.neocities.org/",
    "https://swiftyshq.neocities.org/"
  ],

  // PREV and NEXT get replaced with neighboring site urls
  stylesheet: "https://plushiekitty.party/webring/styles.css",
  widgets: {
    default: `
      <div id="mocha-webring">

      <a href="PREV"><img style="image-rendering: pixelated" src="https://plushiekitty.party/webring/back.png"></a>

      <div id="mocha-mainbox">
      <a href="https://webring.plushiekitty.party/" target=blank><img style="image-rendering: pixelated" src="https://plushiekitty.party/webring/center.png"></a>

      <div id="mocha-randomlink">
      <a href="RANDOM" target=_blank>[random]</a>
      </div></div>

      <a href="NEXT"><img style="image-rendering: pixelated" src="https://plushiekitty.party/webring/next.png"></a>

    </div>

    `,

    text: `
      <div id="mocha-textwebring">

      <a href="PREV"><=</a>

      <div id="mocha-textmainbox">
      <a href="https://webring.plushiekitty.party/" target=blank>mocha</a>

      <div id="mocha-textrandomlink"><a href="RANDOM" target=_blank>(â‰½â€¢â©Šâ€¢â‰¼)</a></div></div>

      <a href="NEXT">=></a>
    </div>
    `,

    test: `
      <div id="my-webring" style="display: flex; align-items: center; gap: 8px">
      <a href="PREV">prev</a>
      <div>webring</div>
      <a href="RANDOM">random</a>
      <a href="NEXT">next</a>
    </div>
    `,

  },

  error: "<div>This site isn't part of mochas webring yet!</div>",

};



// all of the actual code
webring.index = location.href.startsWith("file://") ? 0 : webring.sites.findIndex(url => location.href.startsWith(url));
if (webring.index == -1) document.currentScript.outerHTML = webring.error;
else {
  let sheet = document.createElement("link");
  sheet.rel = "stylesheet", sheet.href = webring.stylesheet;
  document.head.appendChild(sheet);
  let widget = webring.widgets[document.currentScript.dataset.widget] ?? webring.widgets[Object.keys(webring.widgets)[0]];
  widget = widget.replace("PREV", webring.sites.at(webring.index - 1));
  widget = widget.replace("NEXT", webring.sites[(webring.index + 1) % webring.sites.length]);
  widget = widget.replace("RANDOM", webring.sites[Math.floor(Math.random() * webring.sites.length)]);
  document.currentScript.outerHTML = widget;
}
delete webring;
