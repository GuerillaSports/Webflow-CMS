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

/**
 * Webflow cms list content is lazy loaded.
 * This requires us to use a mutation observer to watch for lazy-loaded content.
 * When the content changes, the contrast function is re-run.
 */
const dynamic_lists = document.querySelector(".dynam-list")
const config = { childList: true, subtree: true }
const story_title_observer = new MutationObserver((mutList) => {
  for (let mut of mutList) {
    // check if element has been added
    if (mut.addedNodes.length) {
      manageColorContrasts()
    }
  }
})

story_title_observer.observe(dynamic_lists, config)
