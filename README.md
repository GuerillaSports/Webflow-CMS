# Guerilla Sports CMS

This repository stores necessary pages, files, and code required by the Guerilla Sports Website powered and hosted by Webflow. The CMS documentation is stored in this repository's Wiki. To visit the wiki, click [here](https://github.com/GuerillaSports/Webflow-CMS/wiki), or navigate to the "Wiki" tab above.

## CDN Delivery System

To improve the way in which custom code is embedded into the webflow website, the `./cdn` directory contains the global cdn embeded into the head of **all** pages. This file handles imports for all pages. If a page only needs access to global functions, it has access to all functions. Should a page need access to scoped functions, such as the `articles` page, that file will be dynamically imported and fetched.

### Global CDN Script belongs in `head` tag

```html
<!-- Guerilla Sports Custom Code -->
  <!-- Global -->
  <script defer src="https://cdn.jsdelivr.net/gh/GuerillaSports/Webflow-CMS@main/cdn/index.js"></script>
```
