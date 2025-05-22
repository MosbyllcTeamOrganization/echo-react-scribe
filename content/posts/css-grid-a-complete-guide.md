
---
title: "CSS Grid: A Complete Guide"
slug: "css-grid-a-complete-guide"
date: "2023-01-18"
author: "John Doe"
excerpt: "Master CSS Grid layout with this comprehensive guide covering all major features and techniques."
tags: ["css", "layout", "web design"]
readingTime: 8
featured: false
---

CSS Grid is a powerful layout system that allows you to create complex web layouts with ease. It's a two-dimensional system that handles both columns and rows.

## Basic Grid

To create a basic grid, you need to define a container with display: grid and set up columns and rows:

```css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}
```

## Grid Areas

You can name areas of your grid and place items accordingly:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## Grid Alignment

CSS Grid provides powerful alignment capabilities:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center; /* Horizontal alignment */
  align-items: center; /* Vertical alignment */
}
```

## Responsive Grids

You can create responsive grids with minmax() and auto-fill:

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}
```

## Conclusion

CSS Grid is a game-changer for web layout, offering capabilities that were previously only possible with complex workarounds. Learning Grid is essential for modern front-end development.
