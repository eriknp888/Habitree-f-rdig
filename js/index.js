const indicators = document.querySelectorAll(".indicator");
const sections = document.querySelectorAll("section");

const resetCurrentActiveIndicator = () => {
  const activeIndicator = document.querySelector(".active");
  activeIndicator.classList.remove("active");
};

const onSectionLeavesViewport = (section) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          resetCurrentActiveIndicator();
          const element = entry.target;
          const indicator = document.querySelector(`a[href='#${element.id}']`);
          indicator.classList.add("active");
          return;
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    }
  );
  observer.observe(section);
};

indicators.forEach((indicator) => {
  indicator.addEventListener("click", function (event) {
    event.preventDefault();
    document
      .querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
    resetCurrentActiveIndicator();
    this.classList.add("active");
  });
});

sections.forEach(onSectionLeavesViewport);

//autoplay video

//window onscroll
window.onscroll = function () {
  var blooper = document.getElementById("Habitreevideo");
  //tjekke på med if sætning, er du synlig så afspil video, er du ikke synlig så pause video
  // de 250 fortæller af den bare skal være inden for 250 px
  if (
    blooper.getBoundingClientRect().bottom < 250 ||
    blooper.getBoundingClientRect().top > 250
  )
    blooper.pause();
  else blooper.play();
};

console.log("running");

/*shop java*/

let carts = document.querySelectorAll(".add-cart");

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers();
  });
}
function onloadcartNumbers() {
  let productnumbers = localStorage.getItem("cartNumbers");

  if (productnumbers) {
    document.querySelector(".cart span").textContent = productnumbers;
  }
}

function cartNumbers() {
  let productnumbers = localStorage.getItem("cartNumbers");

  productnumbers = parseInt(productnumbers);

  if (productnumbers) {
    localStorage.setItem("cartNumbers", productnumbers + 1);
    document.querySelector(".cart span").textContent = productnumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
}

onloadcartNumbers();
