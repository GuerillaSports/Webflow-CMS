
const SCOPED_FUNCTION_PAGES = {
  "articles": true
}
export function requiresScopedScript(url) {
  url = url.split("/")
  const terminus = url[url.length - 1]
  if (SCOPED_FUNCTION_PAGES[terminus]) {
    console.log("page requires scoped functions!", terminus)
  }

}

