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

//Nav text animation
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

//Hero animation

gsap.from(".hero__header__services", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.5,
});
gsap.from(".hero__paragraph__services", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.6,
});
gsap.from(".hero__img__services", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.7,
});

gsap.from(".hero__img", {
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.8,
  zIndex: 0,
});

//popular animation

gsap.from(".popular__content", {
  scrollTrigger: ".popular__content",
  duration: 0.5,
  x: -30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".plan__img", {
  scrollTrigger: ".popular__content",
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});

//What makes fibr so special

gsap.from(".special__header", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".special-1", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.4,
});
gsap.from(".special-2", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.5,
});
gsap.from(".special-3", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.6,
});
gsap.from(".special-4", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.7,
});
gsap.from(".special-5", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.8,
});
gsap.from(".special-6", {
  scrollTrigger: ".special__header",
  duration: 0.5,
  y: 50,
  opacity: 0,
  ease: "power4",
  delay: 0.9,
});

//Switch animation

gsap.from(".switch__content", {
  scrollTrigger: ".switch__container",
  duration: 0.5,
  x: -30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
gsap.from(".switch__img", {
  scrollTrigger: ".switch__container",
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});

//Availability

gsap.from(".availability__container", {
  scrollTrigger: ".availability",
  duration: 0.5,
  y: 30,
  opacity: 0,
  ease: "power4",
  delay: 0.3,
});
