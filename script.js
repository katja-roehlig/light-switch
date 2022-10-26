let but = document.querySelector("button");
let bodyStyle = document.querySelector("body");
let title = document.querySelector("title");

but.addEventListener("click", function () {
  but.classList.toggle("button-night");
  bodyStyle.classList.toggle("body-night");

  if (document.title === "Good Morning") {
    document.title = "Good Night";
  } else {
    document.title = "Good Morning";
  }
});
