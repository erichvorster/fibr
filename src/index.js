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
