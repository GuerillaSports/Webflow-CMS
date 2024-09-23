function manageTitleColorContrast(card) {
  const gs_blue = getComputedStyle(card).getPropertyValue('--blue')
  const on_color = card.querySelector(".title-on-color")
  if (!on_color) return;
  if (on_color.style.color === "white") {
    const story_title = card.querySelector(".title-blue")
    story_title.style.color = gs_blue;
  }
}

/**
 * Manage color contrast on initial load.
 */
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card-label");
  for (let card of cards) {
    manageTitleColorContrast(card)
  }
})

/**
 * Webflow cms list content can be lazy loaded.
 * This requires us to use a mutation observer to watch for lazy-loaded content.
 * When the content changes, the contrast function is re-run.
 */
const dynamic_list = document.querySelector(".dynam-list")
const config = { childList: true, subtree: true }
const story_title_observer = new MutationObserver((mutList) => {
  for (let mut of mutList) {
    // check if element has been added
    if (mut.addedNodes.length) {
      for (let card of mut.addedNodes) {
        manageTitleColorContrast(card)

      }
    }
  }
})

story_title_observer.observe(dynamic_list, config)
