# Beginner's guide to this portfolio code

This portfolio uses three languages:

- **HTML** controls the content and the order of sections. Edit it to change words, links, and which images appear.
- **CSS** controls how the website looks: colors, spacing, header sizes, image positioning, and mobile layouts.
- **JavaScript** adds small behaviors: the mobile menu and the automatic copyright year.

## Where the files live

```text
gis-portfolio/
├── index.html                    Main homepage content
├── css/
│   ├── home.css                  Homepage colors and layouts
│   ├── ms4-dashboard.css         Dashboard project page styles
│   └── ms4-map-series.css        Map Series project page styles
├── js/
│   └── main.js                   Shared menu and copyright behavior
├── projects/
│   ├── ms4-dashboard.html        Dashboard project text and images
│   └── ms4-map-series.html       Map Series project text and images
└── assets/                       Photos, screenshots, resume PDF
```

## Common edits

### Change a heading or paragraph

Open `index.html`. Find the text inside the HTML heading (`<h2>`) or paragraph (`<p>`) and edit **only the words** between the opening and closing tags.

### Change a header photo

Open the corresponding file in `css/`. Search for `washingtonstate`, and update the image path. Keep `../assets/` at the start so it finds the correct photo.

### Change the height of a header

Search for `.hero` in the relevant CSS file and look for `height` or `min-height`. The homepage has extra responsive overrides near the bottom. The project pages also have a mobile layout at `@media(max-width:700px)`.

### Change colors

Look at `:root` near the top of a CSS file:

```css
:root {
  --forest: #183b2e;
  --pine: #315c46;
  --sage: #789477;
  --cream: #f5f3eb;
}
```

These are reusable color variables. Using `var(--forest)` elsewhere applies the forest-green color.

### Change the mobile menu or footer year

Open `js/main.js`. Comments starting with `//` explain the two sections.

## How the files connect

An HTML file loads its CSS with `<link rel="stylesheet" href="...">`, and it loads JavaScript with `<script src="..." defer></script>`. The `../` prefix means “go up one folder” (important in the `projects/` pages).

## Why some CSS rules repeat

The homepage was developed in stages, and some later rules fine-tune earlier ones. I kept the original order of the CSS rules to avoid changing your design during this code cleanup. In CSS, a later rule can override an earlier rule with the same selector. If you're learning CSS, start with the comments and search for the selector you want to change before editing.

## Before committing changes

1. Change one thing at a time.
2. Check the GitHub Pages preview on a wide screen and a phone-sized screen.
3. If a photo or style disappears, check the relative file path first.
4. Use GitHub's commit history to restore a previous version if needed.
