"use strict";

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iphone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) {
  document.body.classList.add("_touch");
  const menuArrows = document.querySelectorAll(".menu__arrow");
  if (menuArrows.length > 0) {
    for (let i = 0; i < menuArrows.length; i++) {
      const menuArrow = menuArrows[i];
      menuArrow.addEventListener("click", function () {
        menuArrow.parentElement.classList.toggle("_active");
      });
    }
  }
} else {
  document.body.classList.add("_pc");
}

// Go to sections
// Array.from nodesiz massiv qilib beradi
const menuLinks = Array.from(
  document.querySelectorAll(".menu__link[data-goto]")
); // .menu__link[data-goto] bilan atributlarni oldik
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", function (event) {
      event.preventDefault();
      const link = event.target;
      if (link.dataset.goto && document.querySelector(link.dataset.goto)) {
        const gotoBlock = document.querySelector(link.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector(".header").offsetHeight;

        if (menuIcon.classList.contains("_active")) {
          document.body.classList.remove("_lock");
          menuIcon.classList.toggle("_active");
          menuBody.classList.toggle("_active");
        }

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });
      }
    });
  });
}

const menuBody = document.querySelector(".menu__body");
const menuIcon = document.querySelector(".menu__icon");

// html dan js ga eng ko'p ishlatiladigan chaqirishlar

// document.getElementById("id");
// document.getElementsByClassName("class-name");
// document.getElementsByTagName("h1,section,..")
// document.querySelectorAll("li") // hamma li larni oladi. li ni o'rniga hohlagan classni chaqirsak bo'ladi

menuIcon.addEventListener("click", function () {
  document.body.classList.toggle("_lock");
  menuIcon.classList.toggle("_active");
  menuBody.classList.toggle("_active");
});
