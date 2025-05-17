/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./christmas-shop/gifts/gifts.js":
/*!***************************************!*\
  !*** ./christmas-shop/gifts/gifts.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gifts_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifts.scss */ "./christmas-shop/gifts/gifts.scss");
/* harmony import */ var _js_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/burger.js */ "./christmas-shop/js/burger.js");
/* harmony import */ var _js_burger_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_burger_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_gifts_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/gifts-content.js */ "./christmas-shop/js/gifts-content.js");
/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/modal.js */ "./christmas-shop/js/modal.js");
/* harmony import */ var _js_scrollToTop_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/scrollToTop.js */ "./christmas-shop/js/scrollToTop.js");
/* harmony import */ var _js_scrollToTop_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_scrollToTop_js__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./christmas-shop/js/gifts-content.js":
/*!********************************************!*\
  !*** ./christmas-shop/js/gifts-content.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   giftsRandom: () => (/* binding */ giftsRandom)
/* harmony export */ });
/* harmony import */ var _gifts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifts.json */ "./christmas-shop/js/gifts.json");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var categoryTabs = document.querySelectorAll(".category__button");
var giftsList = document.querySelector(".best-gifts__list");
var giftsArray = _toConsumableArray(_gifts_json__WEBPACK_IMPORTED_MODULE_0__);
var allButton = document.querySelector(".category__button");
allButton.classList.add('active');
allButton.disabled = true;
var giftsRandom = function giftsRandom(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
};
giftsRandom(giftsArray);
var bestGiftsPage = function bestGiftsPage(filteredGifts) {
  giftsList.innerHTML = '';
  filteredGifts.forEach(function (el) {
    var li = document.createElement("li");
    li.classList.add("best-gifts__item");
    var content = document.createElement("div");
    content.classList.add("best-gifts__content");
    var category = document.createElement("p");
    category.classList.add("best-gifts__category");
    if (el["category"].toLowerCase() === "for health") {
      category.classList.add("g");
    } else if (el["category"].toLowerCase() === "for work") {
      category.classList.add("b");
    } else if (el["category"].toLowerCase() === "for harmony") {
      category.classList.add("p");
    }
    category.innerText = el["category"];
    content.appendChild(category);
    var title = document.createElement("p");
    title.classList.add("best-gifts__title");
    title.innerText = el["name"];
    content.appendChild(title);
    var text = document.createElement("p");
    text.classList.add("best-gifts__text");
    text.innerText = el["description"];
    content.appendChild(text);
    var img = document.createElement("img");
    if (el["category"].toLowerCase() === "for health") {
      img.setAttribute('src', './assets/img/gift-for-health.png');
      img.setAttribute('alt', 'for health');
    } else if (el["category"].toLowerCase() === "for work") {
      img.setAttribute('src', './assets/img/gift-for-work.png');
      img.setAttribute('alt', 'for work');
    } else if (el["category"].toLowerCase() === "for harmony") {
      img.setAttribute('src', './assets/img/gift-for-harmony.png');
      img.setAttribute('alt', 'for harmony');
    }
    img.classList.add("best-gifts__img");
    li.appendChild(img);
    li.appendChild(content);
    giftsList.appendChild(li);
  });
};
bestGiftsPage(giftsArray);
var filteredGifts = [];
categoryTabs.forEach(function (e) {
  e.addEventListener("click", function (event) {
    var nameTabs = event.target.innerText.trim().toLowerCase();
    categoryTabs.forEach(function (button) {
      button.disabled = false;
      button.classList.remove('active');
    });
    event.target.classList.add('active');
    event.target.disabled = true;
    if (nameTabs === "all") {
      filteredGifts = giftsArray;
    } else {
      filteredGifts = giftsArray.filter(function (el) {
        return el["category"].toLowerCase() === nameTabs;
      });
    }
    giftsRandom(giftsArray);
    bestGiftsPage(filteredGifts);
  });
});

/***/ }),

/***/ "./christmas-shop/js/scrollToTop.js":
/*!******************************************!*\
  !*** ./christmas-shop/js/scrollToTop.js ***!
  \******************************************/
/***/ (() => {

var scrollToTop = document.querySelector('.scroll-to-top');
function toggleScrollButton() {
  if (window.scrollY >= 300 && window.innerWidth <= 768) {
    scrollToTop.style.display = 'block';
  } else {
    scrollToTop.style.display = 'none';
  }
}
window.addEventListener('scroll', toggleScrollButton);
window.addEventListener('resize', toggleScrollButton);
scrollToTop.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
toggleScrollButton();

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./christmas-shop/gifts/gifts.scss":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./christmas-shop/gifts/gifts.scss ***!
  \**********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/bg-garland.png */ "./christmas-shop/assets/img/bg-garland.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary: #ff4646;
  --dark: #181c29;
  --static-white: #fff;
  --content-background: #ecf3f8;
  --tag-purple: #4361ff;
  --tag-pink: #ff43f7;
  --tag-green: #06a44f;
  --primary-10: rgba(255, 70, 70, 0.1);
  --static-white-20: rgba(255, 255, 255, 0.2);
  --static-white-40: rgba(255, 255, 255, 0.4);
  --overlay: rgba(24, 28, 41, 0.8);
}

:root {
  --font-family: "Montserrat", sans-serif;
  --second-family: "Allura", sans-serif;
  --third-family: "SF Pro", sans-serif;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  outline: none;
}

html {
  height: 100%;
  width: 100%;
  scroll-behavior: smooth;
}

body {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

html,
body {
  scrollbar-gutter: stable;
}

ul, h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}

h1 {
  display: inline;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-position: center;
  object-fit: contain;
}

header {
  /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 0 0 auto;
}

main {
  /* 1 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 1 0 auto;
}

footer {
  /* 0 flex-grow, 0 flex-shrink, auto flex-basis */
  flex: 0 0 auto;
}

a {
  text-decoration: none;
}

li {
  list-style-type: none;
}

.container {
  max-width: 1440px;
  min-width: 350px;
  margin: 0 auto;
}

.header .header__wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 82px;
}
@media (max-width: 1024px) {
  .header .header__wrapper {
    padding: 12px 30px;
  }
}
@media (max-width: 767.99px) {
  .header .header__wrapper {
    padding: 12px 10px;
  }
}
.header .logo {
  display: flex;
  border-radius: 12px;
  padding: 8px 20px;
  cursor: pointer;
}
@media (max-width: 767.99px) {
  .header .logo {
    padding: 8px 18px;
    position: relative;
    z-index: 999;
  }
}
.header .logo__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.header .logo__text, .header .nav__link {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--dark);
}
.header .logo__icon {
  fill: var(--primary);
}
@media (max-width: 767.99px) {
  .header .nav {
    position: fixed;
    padding-top: 64px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    visibility: hidden;
    transform: translate(100%);
    background: var(--static-white);
    transition: transform 0.3s ease-in-out, visibility 0s 0.3s;
    z-index: 899;
    pointer-events: none;
  }
  .header .nav.active {
    visibility: visible;
    transform: translate(0);
    pointer-events: auto;
    transition: transform 0.3s ease-in-out, visibility 0s 0s, opacity 0.3s ease-in-out;
  }
}
.header .nav__list {
  display: flex;
  gap: 8px;
}
@media (max-width: 767.99px) {
  .header .nav__list {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
}
.header .nav__link {
  display: block;
  border-radius: 12px;
  padding: 12px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
@media (max-width: 767.99px) {
  .header .nav__link {
    font-family: var(--font-family);
    font-weight: 600;
    font-size: 24px;
    line-height: 152%;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--dark);
  }
  .header .nav__link.disabled {
    pointer-events: auto;
    cursor: pointer;
  }
}
.header .nav__link .nav__list,
.header .nav__link .nav__link {
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
}
@media (max-width: 767.99px) {
  .header .nav__link .nav__list,
  .header .nav__link .nav__link {
    opacity: 0;
    visibility: hidden;
  }
}
.header .nav__link .nav__list.active,
.header .nav__link .nav__link.active {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s ease-in-out, visibility 0s 0s;
}
.header .disabled {
  pointer-events: none;
  cursor: default;
  background: rgba(255, 70, 70, 0.1);
  color: #ff4646;
}
@media (hover: hover) {
  .header .nav__link:hover {
    background: rgba(255, 70, 70, 0.1);
    color: #ff4646;
  }
}
.header .burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 10;
}
@media (max-width: 767.99px) {
  .header .burger {
    display: flex;
    position: relative;
    z-index: 999;
  }
}
.header .burger span {
  display: block;
  width: 20px;
  height: 2px;
  background-color: #181c29;
  border-radius: 4px;
  transition: all 0.3s ease;
}
.header .burger.active span:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}
.header .burger.active span:nth-child(2) {
  transform: translateY(-4px) rotate(-45deg);
}

.main .background {
  background-color: #ff4646;
  border-radius: 20px;
}
.main .gifts-page__wrapper {
  display: flex;
  justify-content: center;
  padding-top: 60px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
}
.main .gifts-page__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
}
.main .gifts-page__title {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-align: center;
  color: var(--static-white);
  max-width: 426px;
}
@media (max-width: 380px) {
  .main .gifts-page__title {
    max-width: 370px;
  }
}
.main .category-tabs {
  display: flex;
  gap: 8px;
}
@media (max-width: 500px) {
  .main .category-tabs {
    gap: 0;
  }
}
.main .category__button {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--static-white);
  border-radius: 12px;
  padding: 12px 20px;
  height: 40px;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease-out;
}
@media (max-width: 500px) {
  .main .category__button {
    padding: 12px 8px;
  }
}
.main .category__button:disabled {
  cursor: default;
}
.main .active {
  background: rgba(255, 255, 255, 0.2);
}
.main .category__button:hover {
  background: rgba(255, 255, 255, 0.2);
}
.main .best-gifts {
  display: flex;
  flex-direction: column;
  gap: 19px;
  padding: 20px 82px 60px;
}
@media (max-width: 800px) {
  .main .best-gifts {
    padding: 20px 8px 60px;
  }
}
.main .best-gifts__list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}
.main .best-gifts__item {
  display: flex;
  flex-direction: column;
  max-width: 310px;
  border-radius: 20px;
  background: var(--content-background);
  cursor: pointer;
}
.main .best-gifts__content, .main .dialog__content {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 20px;
  background: var(--static-white);
  padding: 20px;
  height: 112px;
}
.main .best-gifts__img {
  width: 310px;
  height: 230px;
}
.main .b {
  color: var(--tag-purple);
}
.main .g {
  color: var(--tag-green);
}
.main .p {
  color: var(--tag-pink);
}
.main .best-gifts__category, .main .dialog__category {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.main .best-gifts__title, .main .dialog__title {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 152%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--dark);
  transition: all 0.3s ease-in-out;
}
.main .best-gifts__text {
  display: none;
}
@media (hover: hover) {
  .main .best-gifts__item:hover .best-gifts__title {
    color: #ff4646;
  }
}
.main .scroll-to-top {
  display: none;
  position: fixed;
  bottom: 8px;
  right: 8px;
  background: #fff;
  border: 1px solid #ff4646;
  border-radius: 100px;
  width: 56px;
  height: 56px;
  cursor: pointer;
  z-index: 1000;
}
@media (max-width: 767.99px) {
  .main .scroll-to-top .scroll-to-top {
    display: block;
  }
}

.footer {
  padding: 60px 0;
}

.footer__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
}
.footer__wrapper .gifts {
  display: flex;
  justify-content: center;
  padding: 0 82px;
}
@media (max-width: 1438.99px) {
  .footer__wrapper .gifts {
    padding: 0 8px;
  }
}
.footer__wrapper .gifts__content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 12px;
}
.footer__wrapper .gifts__item {
  width: 100%;
  max-width: 417px;
  background: var(--content-background);
  border-radius: 20px;
  cursor: pointer;
}
@media (max-width: 1438.99px) {
  .footer__wrapper .gifts__item {
    max-width: 100%;
  }
}
.footer__wrapper .gifts__item address {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px;
}
.footer__wrapper .gifts__link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-style: normal;
}
.footer__wrapper .gifts__title {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 247%;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-align: center;
  color: var(--dark);
  transition: all 0.3s ease-in-out;
}
.footer__wrapper .gifts__subtitle {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 16px;
  line-height: 152%;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-align: center;
  color: var(--dark);
  transition: all 0.3s ease-in-out;
}
@media (hover: hover) {
  .footer__wrapper .gifts__item:hover .gifts__title, .footer__wrapper .gifts__item:hover .gifts__subtitle {
    color: #ff4646;
  }
}
.footer__wrapper .footer__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.footer__wrapper .copyright {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 148%;
  text-align: center;
  color: var(--dark);
}
.footer__wrapper .rss {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-align: center;
  color: var(--dark);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
@media (hover: hover) {
  .footer__wrapper .rss:hover {
    color: #ff4646;
  }
}
.footer__wrapper .social__list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
.footer__wrapper .social__item {
  padding: 8px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.footer__wrapper .social__item svg {
  transition: all 0.3s ease-in-out;
  stroke: #181C29;
}
@media (hover: hover) {
  .footer__wrapper .social__item:hover svg {
    stroke: #ff4646;
  }
}

.dialog {
  width: calc(100% - 16px);
  margin: auto;
  border: none;
  border-radius: 20px;
  max-width: 400px;
  padding: 0;
}

dialog[open] {
  animation: slide 0.3s ease-in-out;
}

@keyframes slide {
  0% {
    opacity: 0;
    transform: translate(0, -15px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
dialog::backdrop {
  background: var(--overlay);
  cursor: pointer;
}

.dialog__wrapper {
  background: var(--content-background);
  cursor: default;
}

#dialog__button {
  position: absolute;
  background: transparent;
  border: none;
  outline: none;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

.main .dialog__content {
  height: 100%;
  border-radius: 20px 20px 0 0;
}

.dialog__img {
  height: 230px;
  width: 100%;
  display: block;
  object-fit: cover;
}

.rating__container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.rating__title {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--dark);
}

.rating__item {
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
}

.rating__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}

.rating__name, .rating__sum, .dialog__text {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 148%;
  color: var(--dark);
}

.dialog__text {
  padding-bottom: 12px;
}

.rating__stars {
  display: flex;
  flex-direction: row;
  gap: 8px;
}`, "",{"version":3,"sources":["webpack://./christmas-shop/gifts/gifts.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./christmas-shop/gifts/gifts.scss":
/*!*****************************************!*\
  !*** ./christmas-shop/gifts/gifts.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gifts_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./gifts.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./christmas-shop/gifts/gifts.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gifts_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gifts_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gifts_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_gifts_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./christmas-shop/assets/img/bg-garland.png":
/*!**************************************************!*\
  !*** ./christmas-shop/assets/img/bg-garland.png ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bg-garland.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"gifts": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkdariussssssss_jsfe2024q4"] = self["webpackChunkdariussssssss_jsfe2024q4"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["christmas-shop_js_burger_js-christmas-shop_js_modal_js-node_modules_css-loader_dist_runtime_a-9b7847"], () => (__webpack_require__("./christmas-shop/gifts/gifts.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=gifts.js.map