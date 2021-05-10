# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How I did it](#how-i-did-it)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Screenshot

![](./design/desktop-active-state.jpg)

### Links

- Solution URL: [GitHub repository](https://github.com/AyulaBoyilo/FMarticlePreviewCard/)
- Live Site URL: [GitHub Pages](https://ayulaboyilo.github.io/FMarticlePreviewCard/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS and CSS3
- CSS Flexbox
- JavaScript

### How I did it

Social icons share section is toggled on and off by adding and removing a class with display:none through JavaScript event listeners on buttons.

The arrow for the desktop version is created using pseudo element and transparent borders. On desktop version dark share button is positioned absolutely, exactly above the light share button.

```js
document
  .querySelector(".btn-share-light")
  .addEventListener("click", showSocial);

document.querySelector(".btn-share-dark").addEventListener("click", hideSocial);

function showSocial() {
  document.querySelector(".social").classList.remove("hidden");
}

function hideSocial() {
  document.querySelector(".social").classList.add("hidden");
}
```

```scss
.social::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;
  bottom: -16px;
  left: 50%;
  border-top: 8px solid $very-dark-gray-blue;
  border-right: 8px solid transparent;
  border-left: 8px solid transparent;
  border-bottom: 8px solid transparent;
  z-index: 1;
}
```

### Useful resources

- [CSS Triangle](https://css-tricks.com/snippets/css/css-triangle/) - CSS-TRICKS How to create arrows with borders in CSS.

## Author

- Ayula Boyilo
