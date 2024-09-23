function manageColorContrasts() {
  const cards = document.querySelectorAll(".card-label");
  const gs_blue = getComputedStyle(cards[0]).getPropertyValue('--blue')
  for (let card of cards) {
    const on_color = card.querySelector(".title-on-color")
    if (!on_color) continue;
    if (on_color.style.color === "white") {
      const story_title = card.querySelector(".title-blue")
      story_title.style.color = gs_blue;
    }
  }
};



document.addEventListener("DOMContentLoaded", function () {
  for (let key of globalFunctions) {
    globalFunctions[key]()
  }
})
