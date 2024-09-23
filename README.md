# Guerilla Sports CMS

This repository stores necessary pages, files, and code required by the Guerilla Sports Website powered and hosted by Webflow. The CMS documentation is stored in this repository's Wiki. To visit the wiki, click [here](https://github.com/GuerillaSports/Webflow-CMS/wiki), or navigate to the "Wiki" tab above.

## CDN Delivery System

To improve the way in which custom code is embeded into webiste, the `./cdn` directory contains the global and page-scoped `/.js` which need to be embedded into the various pages on the website. Should new pages be added to the site, a file should be added to the `cdn` directory with the name of the new page, like so `<new-page-name>.js`.
Once added, the `cdn` link should be added to the `Custom Code` block in the page's settings in webflow. This code should be added like so:

```html
<!-- Guerilla Sports Custom Code -->
  <!-- Global -->
  <script defer src="https://cdn.jsdelivr.net/gh/GuerillaSports/Webflow-CMS/cdn/all.js"></script>
  <!-- Page Specific -->
  <script defer src="https://cdn.jsdelivr.net/gh/GuerillaSports/Webflow-CMS/cdn/<new-page-name>.js"></script>
```
