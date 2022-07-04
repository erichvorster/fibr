//Navigation animation and responsive animation

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    console.log("click");
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
  });
};

navSlide();

//Features

const buttonsContainer = document.querySelector(
  ".features__buttons__container"
);
const featureButton = document.querySelectorAll(".feature__button");
const featureContent = document.querySelectorAll(".feature__content");

buttonsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".feature__button");

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  featureButton.forEach((btn) => btn.classList.remove("button__active"));
  featureContent.forEach((cnt) =>
    cnt.classList.remove("feature__content__active")
  );

  // Activate tab
  clicked.classList.add("button__active");

  // Activate content area
  document
    .querySelector(`.feature__content--${clicked.dataset.tab}`)
    .classList.add("feature__content__active");
});

//Sticky Navigation

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    body.classList.remove("scroll-up");
    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
    body.classList.remove("scroll-up");
    body.classList.add("scroll-down");
  } else if (
    currentScroll < lastScroll &&
    body.classList.contains("scroll-down")
  ) {
    body.classList.remove("scroll-down");
    body.classList.add("scroll-up");
  }
  lastScroll = currentScroll;
});

// gsap.from(".logo", {
//   duration: 0.5,
//   y: 30,
//   opacity: 0,
//   ease: "power4",
//   delay: 0.3,
// });
// gsap.from(".nav-links", {
//   duration: 0.5,
//   y: 30,
//   opacity: 0,
//   ease: "power4",
//   delay: 0.3,
// });

//Pricing animation

gsap.from(".pricing__header", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.5,
});
gsap.from(".pricing__paragraph", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.6,
});
gsap.from(".pricing__card--1", {
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.6,
});
gsap.from(".pricing__card--2", {
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.7,
});
gsap.from(".pricing__card--3", {
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.8,
});
