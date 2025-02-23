document.addEventListener("DOMContentLoaded", function () {
  var div = document.createElement("div");
  div.style.width = "100vw";
  div.style.height = "100%";
  div.style.zIndex = "50";
  div.style.background = "#fff";
  div.style.position = "absolute";
  div.style.top = "0";
  div.style.left = "0";
  div.style.display = "flex";
  div.style.justifyContent = "flex-start";
  div.style.alignItems = "flex-start";
  div.style.fontSize = "15px";
  div.style.color = "black";
  div.style.fontFamily = "Arial, sans-serif";
  div.innerText = "This content is temporarily unavailablee.";

  document.body.appendChild(div);
});
//
