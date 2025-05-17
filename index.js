/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./christmas-shop/js/best-gifts.js":
/*!*****************************************!*\
  !*** ./christmas-shop/js/best-gifts.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gifts_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gifts.json */ "./christmas-shop/js/gifts.json");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
//import {giftsRandom} from "./gifts-content.js"

var giftsItems = document.querySelectorAll(".best-gifts__item");
var giftsArray = _toConsumableArray(_gifts_json__WEBPACK_IMPORTED_MODULE_0__);
var giftsRandom = function giftsRandom(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var _ref = [array[j], array[i]];
    array[i] = _ref[0];
    array[j] = _ref[1];
  }
};
giftsRandom(giftsArray);
var bestGifts = function bestGifts(giftsArray) {
  giftsItems.forEach(function (e, i) {
    //const randomIndex = Math.floor(Math.random() * gifts.length);
    var category = e.querySelector(".best-gifts__category");
    var title = e.querySelector(".best-gifts__title");
    var text = e.querySelector(".best-gifts__text");
    var img = e.querySelector(".best-gifts__img");
    if (giftsArray[i]["category"].toLowerCase() === "for health") {
      category.classList.add("g");
      img.setAttribute('src', './assets/img/gift-for-health.png');
    } else if (giftsArray[i]["category"].toLowerCase() === "for work") {
      category.classList.add("b");
      img.setAttribute('src', './assets/img/gift-for-work.png');
    } else if (giftsArray[i]["category"].toLowerCase() === "for harmony") {
      category.classList.add("p");
      img.setAttribute('src', './assets/img/gift-for-harmony.png');
    }
    category.innerText = giftsArray[i]["category"];
    title.innerText = giftsArray[i]["name"];
    text.innerText = giftsArray[i]["description"];
  });
};
bestGifts(giftsArray);

//console.log(gifts);

/***/ }),

/***/ "./christmas-shop/js/slider.js":
/*!*************************************!*\
  !*** ./christmas-shop/js/slider.js ***!
  \*************************************/
/***/ (() => {

var buttonLeft = document.querySelector('.button-left');
var buttonRight = document.querySelector('.button-right');
var sliderContent = document.querySelector('.slider__content');
var pageContainer = document.querySelector('.container');
var currentIndex = 0;
var distanceToMove = 0;
var totalWidth = 1993;
function updateSlider() {
  var offset = -currentIndex * distanceToMove;
  sliderContent.style.transform = "translateX(".concat(offset, "px)");
  buttonLeft.disabled = currentIndex === 0;
  buttonRight.disabled = currentIndex * distanceToMove >= totalWidth - pageContainer.offsetWidth;
}
function updateDistanceToMove() {
  var widthPage = pageContainer.offsetWidth;
  if (widthPage <= 768) {
    var widthPageWithPadding = widthPage - 12;
    distanceToMove = (totalWidth - widthPageWithPadding) / 6;
  } else if (widthPage <= 1024 && widthPage >= 768) {
    var _widthPageWithPadding = widthPage - 56;
    distanceToMove = (totalWidth - _widthPageWithPadding) / 3;
  } else {
    var _widthPageWithPadding2 = widthPage - 160;
    distanceToMove = (totalWidth - _widthPageWithPadding2) / 3;
  }
}
buttonLeft.addEventListener('click', function () {
  if (currentIndex > 0) {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateSlider();
  }
});
buttonRight.addEventListener('click', function () {
  if (currentIndex * distanceToMove < totalWidth - pageContainer.offsetWidth) {
    currentIndex = Math.min(currentIndex + 1, Math.floor(distanceToMove) - 1);
    updateSlider();
  }
});
window.addEventListener('resize', function () {
  updateDistanceToMove();
  currentIndex = 0;
  updateSlider();
});
updateDistanceToMove();
updateSlider();

/***/ }),

/***/ "./christmas-shop/js/timer.js":
/*!************************************!*\
  !*** ./christmas-shop/js/timer.js ***!
  \************************************/
/***/ (() => {

function timer() {
  var today = new Date();
  var newYear = new Date("January 1, 2026 00:00:00 UTC");
  var restOfTime = newYear - today;
  var days = Math.floor(restOfTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor(restOfTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  var minutes = Math.floor(restOfTime % (1000 * 60 * 60) / (1000 * 60));
  var seconds = Math.floor(restOfTime % (1000 * 60) / 1000);
  document.querySelector(".days").innerText = days;
  document.querySelector(".hours").innerText = hours;
  document.querySelector(".minutes").innerText = minutes;
  document.querySelector(".seconds").innerText = seconds;
}
setInterval(timer, 1000);

/***/ }),

/***/ "./christmas-shop/main/index.js":
/*!**************************************!*\
  !*** ./christmas-shop/main/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./christmas-shop/main/style.scss");
/* harmony import */ var _js_burger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/burger.js */ "./christmas-shop/js/burger.js");
/* harmony import */ var _js_burger_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_burger_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_best_gifts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../js/best-gifts.js */ "./christmas-shop/js/best-gifts.js");
/* harmony import */ var _js_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../js/modal.js */ "./christmas-shop/js/modal.js");
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../js/slider.js */ "./christmas-shop/js/slider.js");
/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_slider_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_timer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../js/timer.js */ "./christmas-shop/js/timer.js");
/* harmony import */ var _js_timer_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_timer_js__WEBPACK_IMPORTED_MODULE_5__);







/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./christmas-shop/main/style.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./christmas-shop/main/style.scss ***!
  \*********************************************************************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/bg-snow.png */ "./christmas-shop/assets/img/bg-snow.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/bg-ball.png */ "./christmas-shop/assets/img/bg-ball.png"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/img/bg-forest.png */ "./christmas-shop/assets/img/bg-forest.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
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

.main h3 {
  font-family: var(--second-family);
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-align: center;
  color: var(--static-white);
}
.main .button {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  background: var(--dark);
  color: var(--static-white);
  border-radius: 19px;
  padding: 20px;
  width: 234px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
@media (hover: hover) {
  .main .button:hover {
    background: #fff;
    color: #181c29;
  }
}
.main .background {
  background-color: #ff4646;
  border-radius: 20px;
}
.main .hero {
  display: flex;
  justify-content: center;
  padding: 60px 0;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}), url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
}
.main .hero__wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 60px 0;
}
.main .hero__text, .main h1 {
  max-width: 430px;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 32px;
  line-height: 150%;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-align: center;
  color: var(--static-white);
}
.main .about {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  padding: 60px 82px;
}
@media (max-width: 1024px) {
  .main .about {
    padding: 60px 30px;
  }
}
@media (max-width: 767.99px) {
  .main .about {
    padding: 60px 8px;
  }
}
.main .about__wrapper {
  display: flex;
  justify-content: space-between;
  background-color: var(--static-white);
  border-radius: 20px;
}
@media (max-width: 720px) {
  .main .about__wrapper {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
.main .about__content {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 426px;
  justify-content: left;
  margin: 100px 60px;
  padding: 60px 0;
}
.main .about__content h3 {
  color: var(--primary);
  text-align: left;
}
.main .about__content h2 {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 152%;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--dark);
}
@media (max-width: 767.99px) {
  .main .about__content {
    width: 435px;
    margin: 106px 60px;
    padding: 0;
  }
}
@media (max-width: 720px) {
  .main .about__content {
    margin: 60px 20px;
  }
}
.main .about__text {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: 16px;
  line-height: 148%;
  color: var(--dark);
}
@media (max-width: 720px) {
  .main .about__picture {
    width: 100%;
  }
}
.main .about__img {
  object-fit: cover;
  border-radius: 20px;
}
@media (max-width: 720px) {
  .main .about__img {
    width: 100%;
    height: 528px;
  }
}
.main .slider {
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  padding: 60px 82px;
  overflow: hidden;
}
@media (max-width: 1024px) {
  .main .slider {
    padding: 60px 30px;
  }
}
@media (max-width: 767.99px) {
  .main .slider {
    padding: 60px 8px;
  }
}
.main .slider__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main .wrapper__titles {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
}
.main .subtitle {
  text-align: center;
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 152%;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-align: center;
  color: var(--static-white);
}
.main .slider__content {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px 0;
  transition: transform 0.8s ease-in-out;
}
.main .slider__item {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.main .slider__title {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 80px;
  text-transform: uppercase;
  text-align: center;
  color: var(--static-white);
}
.main .slider__img img {
  border-radius: 20px;
  width: 200px;
  height: 200px;
}
.main .slider__button {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 20px;
}
.main .button-left svg, .main .button-right svg {
  stroke: #fff;
}
.main .button-left, .main .button-right {
  background: transparent;
  border: 1px solid #fff;
  border-radius: 20px;
  width: 56px;
  height: 56px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.main .button-left:disabled, .main .button-right:disabled {
  border: 1px solid rgba(255, 255, 255, 0.4);
  cursor: default;
  pointer-events: none;
}
.main .button-left:disabled svg, .main .button-right:disabled svg {
  stroke-opacity: 0.4;
}
@media (hover: hover) {
  .main .button-right:hover:not(:disabled), .main .button-left:hover:not(:disabled) {
    background: #fff;
  }
  .main .button-right:hover:not(:disabled) svg, .main .button-left:hover:not(:disabled) svg {
    stroke: #FF4646;
  }
}
.main .best-gifts {
  display: flex;
  flex-direction: column;
  gap: 19px;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: center;
  padding: 60px 82px;
}
@media (max-width: 1438.99px) {
  .main .best-gifts {
    padding: 60px 30px;
  }
}
@media (max-width: 767.99px) {
  .main .best-gifts {
    padding: 60px 8px;
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
.main .cta {
  display: flex;
  justify-content: center;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___}), url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover, cover;
  background-repeat: no-repeat, no-repeat;
  background-position: center, center;
  padding: 60px 82px;
}
@media (max-width: 767.99px) {
  .main .cta {
    padding: 60px 8px;
  }
}
.main .cta__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 60px 0;
  padding: 60px 0;
  max-width: 426px;
  gap: 8px;
}
.main .cta__content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.main .timer {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 344px;
  height: 72px;
  border-radius: 20px;
  background: var(--static-white-40);
}
.main .timer__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80px;
  height: 52px;
  padding: 9px 8px 16px;
  position: relative;
}
.main .timer__title {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 24px;
  line-height: 152%;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  text-align: center;
  color: var(--static-white);
}
.main .timer__subtitle {
  font-family: var(--font-family);
  font-weight: 600;
  font-size: 12px;
  line-height: 130%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  color: var(--static-white);
}
.main .line-right:after {
  content: " ";
  background: var(--static-white-40);
  width: 1px;
  height: 20px;
  right: 0;
  position: absolute;
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
  .footer__wrapper .social__item:hover svg, .footer__wrapper .social__item:active svg {
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
}`, "",{"version":3,"sources":["webpack://./christmas-shop/main/style.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./christmas-shop/main/style.scss":
/*!****************************************!*\
  !*** ./christmas-shop/main/style.scss ***!
  \****************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./christmas-shop/main/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./christmas-shop/assets/img/bg-ball.png":
/*!***********************************************!*\
  !*** ./christmas-shop/assets/img/bg-ball.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bg-ball.png";

/***/ }),

/***/ "./christmas-shop/assets/img/bg-forest.png":
/*!*************************************************!*\
  !*** ./christmas-shop/assets/img/bg-forest.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bg-forest.png";

/***/ }),

/***/ "./christmas-shop/assets/img/bg-snow.png":
/*!***********************************************!*\
  !*** ./christmas-shop/assets/img/bg-snow.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bg-snow.png";

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
/******/ 			"index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["christmas-shop_js_burger_js-christmas-shop_js_modal_js-node_modules_css-loader_dist_runtime_a-9b7847"], () => (__webpack_require__("./christmas-shop/main/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map