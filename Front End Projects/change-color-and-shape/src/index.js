import "./styles.css";

var changeColor = document.getElementById("changeColor");

changeColor.addEventListener("click", function () {
  var myDiv = document.getElementById("outerShape");
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  myDiv.style.backgroundColor = randomColor;
});

var changeShape = document.getElementById("changeShape");

changeShape.addEventListener("click", function () {
  var myDiv = document.getElementById("innerShape");
  const randomNum = Math.floor(Math.random() * 4);

  switch (randomNum) {
    //Circle
    case 0:
      myDiv.style.borderRadius = "50%";
      break;

    //Square
    case 1:
      myDiv.style.borderRadius = "0%";
      break;

    //Random
    case 3:
      myDiv.style.borderTopRightRadius = "50%";
      myDiv.style.borderTopLeftRadius = "50%";
      break;

    default:
      break;
  }
});
