# Change Log

### Guerilla Sports Webflow CMS

#### Logo/Branding Updates

- Updated logos on the following places:
  - Header instance
  - GS Podcasts and Story types
  - Disected logo in illustrator to seperate the parts for the animated logo build in footer
  - Created favicon
  - Built open-graph logo version
  - Created single-color *broncos* logotype for gs football Podcast
- Issues:
  - Without brand guidelines, I am unsure that all of the manipulation I had to do is consistent with the brand.

#### Global Site Updates

- CDN System: [GS CDNFlow]()
  - Developed a CDN delivery system for the gs website which contains all of the custom code used across the site.
  - This system is developed to combine global functions and tooling and local (scoped to the current page) into a single script executed at once. The `JSDeliver CDN` utilizes the main branch of the repo.
  - The repo is written in Typescript and uses Vite to bundle into a small, obfsucated file sent to the client.

- Image system
  - Began researching a new image system for the site. I expressed interest in developing an image manipulation system for GS where users can drop batches of images destined for web, and it outputs an ideal filesize in `webp`, with that image's `blurhash` encoded into the filename. Then, leveraging the `CDNFlow` system, images with a `blurhash` encoded in the name will show the blurhash while the image is loading. Have not received the green-light to pursue this project.

- SEO
  - Injected article/story/podcast content into the SEO and open-graph descriptions of pages
  - Developed a `robots.txt` file to comprehensivly index all pages and identify dynamic content to be indexed.
  - Enabled webflow to generate `sitemap.xml` automatically, which `robots.txt` references.

- **Home Teams**
  - Colors
    - Home teams now leverage two colors: `primary color` and `on-color`, where the primary color is the recognizable brand color of the team, and the on-color is either white or black, and represents the color which sufficently contrasts the primary color when overlapped.
    - This allows for chips with the home teams color, and thumbnail titles to leverage the colors.
  - League addition
    - I've added the league to some teams. For example, there are a few articles relative to the NFL but not to a specific team, so, I added the NFL as a team just as the Bronocos are a team.
  - Thumbnail logos
    - For some reason, the home team logos were hard-coded into the views rather than leveraging the logo available in the CMS. I've changed this and referenced two instances: should a home team have been selected, that team's logo will appear, and should no team have been selected, the GS logo will appear.

- Thumbnail Color Contrast Scripts
  - Due to the dynamic nature of the new home team color system, sometimes a team's color is too dark to maintain adequate contrast on the site.
  - This script (leveraging CDNFlow) looks for any instance of a heading using the primary color, and checks in that team's `on-color` is white (which means their primary is significantally dark). If so, it switches the heading color from the primary to GS-Blue.
    - This occurs on `DOMContentLoaded`, but some pages leverage lazy-loading, meaning it will not execute on that content. a `.dynam-list` class was added to these lists which may be lazy loaded, and a `MutationObserver` is also executed to watch for lazy loaded content. When changes are observed, those new nodes are checked for correct contrast.
  - This is a global script, so it executes on every page (meaning an article will have access to this in case the `related-content` requires it), however, there is no `.dynam-list` on an article's page, so it only runs once.
- Removed static content like "A Fresh Take on Denver Sports" from `stories` and `contact`
- Fixed the Subscribe form to submit to GS's webflow contacts.
- Custom Story titles
  - Leveraging the **CDNFlow** system, custom scripts now detect if a story is using a custom story title, and, if so, the script alters the thumbnail to format the custom story title to look exactly as the pre-built story titles do.

#### Stories Page Updates

- New Story Type: `Liv's Picks`
  - Still think we need to brainstorm some more generic story types, but I added `Liv's Picks` as it seems consistent with the branding, and wording of specific articles.
- Altered filtration system
  - as discussed, I altered the filtration from story type to team. Now users can filter content to their team, rather than by story type. This should likely be dynamic and pull from the collection of home teams, but GS is scaling quickly, so we might need to rethink this.

#### Articles Page Updates

- Custom SubFeatured Header Script
  - leverages the CDNFlow system
  - Likely now will never be used as there are enough articles to where this would only happen if GS deleted nearly all
  - This script checks the sub-featured list for content, and if not, removes the header from the page. There is no way to reference a collection outside of that collection in webflow, so this has to be a custom script.

#### Podcasts Page Updates

#### CMS Documentation

- The Guerilla-Sports webiste documentation now lives in this repo's `wiki`. These docs explain the entirety of the CMS system, what each and every field does and how they effect the content served to users. It even adds some content on how to design readable articles and such.
