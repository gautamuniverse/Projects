let ballId = document.getElementById("ball");
let posX = 50;
let posY = 50;

// Handle the keypress
document.addEventListener("keydown", function handleMovement(e) {
  switch (e.key) {
    case "w":
      posY -= 10; // Move 10 pixels up
      break;
    case "s":
      posY += 10; // Move 10 pixels down
      break;
    case "a":
      posX -= 10; // Move 10 pixels to the left
      break;
    case "d":
      posX += 10; // Move 10 pixels to the right
      break;
    default:
      // Handle unexpected key presses or provide feedback to the user
      console.log("Unrecognized key press: " + e.key);
      break;
  }

  // Ensure the object stays within the bounds of the window
  posX = Math.max(0, Math.min(window.innerWidth - ballId.clientWidth, posX));
  posY = Math.max(0, Math.min(window.innerHeight - ballId.clientHeight, posY));

  // Apply the new position to the object
  ballId.style.left = posX + "px";
  ballId.style.top = posY + "px";
});
