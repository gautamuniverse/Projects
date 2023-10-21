var trigger = document.getElementById("triggerButton");
trigger.addEventListener("click", function () {
  var button = this;
  button.classList.toggle("active");
  document.body.classList.toggle("bgColor");
  var textColor = document.getElementById("triggerText");
  textColor.classList.toggle("white");
});
