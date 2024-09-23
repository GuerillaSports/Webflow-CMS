
export function manageTitleColorContrast(card) {
  const gs_blue = getComputedStyle(card).getPropertyValue('--blue')
  const on_color = card.querySelector(".title-on-color")
  if (!on_color) return;
  if (on_color.style.color === "white") {
    const story_title = card.querySelector(".title-blue")
    story_title.style.color = gs_blue;
  }
}
