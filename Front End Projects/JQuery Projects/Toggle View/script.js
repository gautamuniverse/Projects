$("#toggleContainer").css({
  width: "100%",
  display: "flex",
  justifyContent: "center",
});

$("#toggle-button").css({
  borderStyle: "solid",
  width: "100px",
  height: "25px",
  borderRadius: "3rem",
  marginTop: "20px",
  position: "relative",
});

$("#para").css({
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
  fontSize: "30px",
  fontWeight: "600",
});

$("#ball").css({
  position: "absolute",
  left: "1px",
  backgroundColor: "black",
  height: "100%",
  width: "25px",
  borderRadius: "4rem",
  transition: "all 0.5s ease",
});

let clicked = false;

$("#toggle-button").click(function () {
  if (!clicked) {
    $("#ball").css({
      left: "69px",
      backgroundColor: "white",
    });

    $("body").css({
      backgroundColor: "black",
      color: "white",
    });

    clicked = true;
  } else {
    $("#ball").css({
      left: "1px",
      backgroundColor: "black",
    });

    $("body").css({
      backgroundColor: "white",
      color: "black",
    });

    clicked = false;
  }
});
