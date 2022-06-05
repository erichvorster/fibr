import Swiper from "swiper";

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

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

const buttonsContainer = document.querySelector(
  ".features__buttons__container"
);
const featureButton = document.querySelectorAll(".feature__button");
const featureContent = document.querySelectorAll(".feature__content");

buttonsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".features__button");

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

//Lazy Loading Images

// const imgs = document.querySelectorAll("img[data-src]");

// const loadImg = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry);

//   if (!entry.isIntersecting) return;

//   //Replace src with data
//   entry.target.src = entry.target.dataset.src;

//   entry.target.addEventListener("load", function () {
//     entry.target.classList.remove("lazy-img");
//   });

//   observer.unobserve(entry.target);
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
//   rootMargin: "200px",
// });

// imgs.forEach((img) => imgObserver.observe(img));

////////Slider Section

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

//Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

//Nav text animation
gsap.from(".logo", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1,
});
gsap.from(".nav-links", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1,
});

//Hero nav animation
gsap.from(".hero__header", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1.1,
});
gsap.from(".hero__sub__header", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1.2,
});
gsap.from(".btn-1", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1.3,
});
gsap.from(".hero__link", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1.3,
});
gsap.from(".hero__img", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1.3,
});

//Cards animation

gsap.from(".card1", {
  scrollTrigger: ".cardi",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".card2", {
  scrollTrigger: ".cardi",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.5,
});
gsap.from(".features", {
  scrollTrigger: ".features__header",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".services", {
  scrollTrigger: ".service__content",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".reviews", {
  scrollTrigger: ".slider",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".banner__1", {
  scrollTrigger: ".banner__content",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".availability", {
  scrollTrigger: ".availability__container",
  duration: 0.8,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});

//////////////////////Internet Services page animations

gsap.from(".hero__header", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1.1,
});
gsap.from(".hero__sub__header", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1.2,
});
gsap.from(".btn-1", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1.3,
});
gsap.from(".hero__link", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1.3,
});
gsap.from(".hero__img", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 1.3,
});
