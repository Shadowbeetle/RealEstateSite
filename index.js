window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const heroImage = document.querySelector(".hero-image");
  heroImage.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
});
