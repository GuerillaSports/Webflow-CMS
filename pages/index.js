/**
* Each collection item which references a home team has access to that team's
*   Primary color (brand color)
*   and on-color (white or black which contrasts the priamry color).
* Should the on-color be white, the primary color does not adequatly contrast the dark-background,
* This function selects items which leverage the priamry color and switches it to the on-color if it is white.
*/
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

manageColorContrasts()
