let current = document.querySelectorAll(".current");
let inputField = document.getElementById("number");
let button = document.getElementById("btn");
let inputNum = 0;
let interval;

button.addEventListener("click", function () {
  inputNum = parseInt(inputField.value);
  if (inputNum >= 1 && inputNum <= 99999) {
    startCounter();
  } else {
    alert("Please enter a valid number between 1 and 99999.");
  }
});

function startCounter() {

  clearInterval(interval);
  let counterValue = 1;
  for (let i = 0; i < current.length; i++) {
    current[i].textContent = "0";
  }
  interval = setInterval(function () {
    if (counterValue <= inputNum) {
      updateCounter(counterValue.toString().padStart(5, "0"));
      counterValue++;
    } else {
      clearInterval(interval);
    }
  }, 1000); // 1-second interval
}

function updateCounter(value) {
  for (let i = 0; i < current.length; i++) {
    current[i].textContent = value[i];
  }
}
