window.addEventListener("scroll", function () {
  let currentScrolled = Math.ceil(window.scrollY);
  let percentage = document.getElementsByClassName("percentage")[0];
  percentage.textContent = currentScrolled + "%";
});
