"use strict";

const toggle = document.querySelector(".fa-bars");
const navBar = document.querySelector(".navbar");

toggle.addEventListener("click", function () {
  navBar.classList.toggle("active");
});

// SLIDER START
var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

// SLIDER END

// DOM CHANGE IMAGES
const toggleButton = document.getElementById("toggle-menu");
const navLists = document.getElementById("navbar-lists");

toggleButton.addEventListener("click", () => {
  navLists.classList.toggle("active");
});

function imgSlider(images) {
  document.querySelector(".main-product").src = images;
}

function changeCircleColor(color) {
  const circle = document.querySelector(".circle");
  circle.style.background = color;
}
