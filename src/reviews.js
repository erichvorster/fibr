//Map

let map;

function initMap() {
  const capeT = { lat: -33.9249, lng: 18.4241 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: capeT,
    zoom: 8,
  });
  const marker = new google.maps.Marker({
    position: capeT,
    map,
    title: "1000 smith street, Cape Town",
  });
}

window.initMap = initMap;

//Sticky Nav
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
