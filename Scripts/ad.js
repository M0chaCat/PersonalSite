export function setupAd(userHasNyaNet) {
  const adCard = document.getElementById("ad");

  if (adCard && !userHasNyaNet) {
    adCard.remove();

    const iframe = adCard.querySelector("iframe");

    if (iframe) {
      const img = document.createElement("img");

      img.src = "/assets/nyanet.png";
      img.alt = "Ad";
      img.style.width = "100%";
      img.style.height = "auto";

      iframe.replaceWith(img);
    }
  }
}
