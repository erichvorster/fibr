import Swiper from "swiper";

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
    burger.classList.toggle("toggle");
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

//Slider Section

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;
  console.log(maxSlide);

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  //Prev Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };

  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//Google maps

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

//Hero nav animation

gsap.from(".hero__header", {
  zIndex: 0,
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.5,
});
gsap.from(".hero__sub__header", {
  zIndex: 0,
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.6,
});
gsap.from(".btn-1", {
  zIndex: 1,
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.7,
});
gsap.from(".hero__link", {
  zIndex: 1,
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.8,
});
gsap.from(".hero__img", {
  zIndex: 1,
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.9,
});

//Cards animation

gsap.from(".card1", {
  scrollTrigger: ".cardi",
  duration: 0.8,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".card2", {
  scrollTrigger: ".cardi",
  duration: 0.8,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.4,
});

//Features animation
gsap.from(".features__header", {
  scrollTrigger: ".features__header",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".features__sub__header", {
  scrollTrigger: ".features__header",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.4,
});
gsap.from(".features__container", {
  scrollTrigger: ".features__header",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.5,
});

//Services animation
gsap.from(".service__headers", {
  scrollTrigger: ".service__content",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".services__container", {
  scrollTrigger: ".service__content",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.4,
});

//Reviews animation
gsap.from(".section__description", {
  scrollTrigger: ".section__title",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".section__header", {
  scrollTrigger: ".section__title",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.4,
});
gsap.from(".slider", {
  scrollTrigger: ".section__title",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.5,
});

//Banner animation
gsap.from(".banner__1", {
  scrollTrigger: ".banner__content",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".availability__container", {
  scrollTrigger: ".availability__container",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});

//Contact animation
gsap.from(".contact", {
  scrollTrigger: ".contact__container",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
