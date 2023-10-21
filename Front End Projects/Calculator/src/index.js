document.getElementById("app").innerHTML = ``;

//Don't allow window resizable below 500px width
window.addEventListener("resize", function () {
  const minWidth = 500; // Adjust this value to your desired minimum width
  if (window.innerWidth < minWidth) {
    window.resizeTo(minWidth, window.innerHeight);
  }
});

// -----All clear Button----
var ac = document.getElementsByClassName("ac");
ac[0].addEventListener("click", function () {
  var screen = document.getElementsByClassName("screen");
  screen[0].querySelector("p").textContent = "";
});

// Get all buttons with the class "notSpecial"
const digitButtons = document.querySelectorAll(".notSpecial");
var buttonText = "";
// Add a click event listener to each button
digitButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Get the text content of the clicked button
    buttonText = button.textContent;

    // Display the text content in the input field or perform any desired action
    var screen = document.getElementsByClassName("screen");
    screen[0].querySelector("p").textContent += buttonText;
  });
});

// ------Negation Button-----
var negation = document.getElementsByClassName("negate");

negation[0].addEventListener("click", function () {
  var screen = document.getElementsByClassName("screen");
  var currentText = screen[0].querySelector("p").textContent;

  if (currentText.charAt(0) == "-") {
    screen[0].querySelector("p").textContent = screen[0]
      .querySelector("p")
      .textContent.substring(1);
  } else {
    screen[0].querySelector("p").textContent =
      "-" + screen[0].querySelector("p").textContent;
  }
});

// ---Funtion to remove spaces between string characters----
function removeSpacesBetweenCharacters(inputString) {
  // Use a regular expression to replace all spaces between characters with an empty string
  return inputString.replace(/\s+/g, "");
}

// ------Perform Calculations-----
var equals = document.getElementsByClassName("equal");

equals[0].addEventListener("click", function () {
  var screen = document.getElementsByClassName("screen");

  var trimmedString = removeSpacesBetweenCharacters(
    screen[0].querySelector("p").textContent
  );
  try {
    screen[0].querySelector("p").textContent = eval(trimmedString);
  } catch (error) {
    screen[0].querySelector("p").textContent = "Error";
  }
});
