import "./style.css";
import printMe from "./print";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  element.textContent = "Hello In WebPack";
  element.classList.add("hello");

  btn.innerHTML = "hot reloadddd!";
  btn.onclick = printMe;

  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
