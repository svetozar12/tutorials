import "./style.css";

const root = document.getElementById("root");
const href = document.createElement("a");
const icon = document.createElement("div");

icon.classList.add("icon", "rotating");

href.setAttribute("target", "_blank");
href.setAttribute(
  "href",
  "https://www.google.com/search?client=firefox-b-d&q=js+add+attribute+to+element",
);

root.classList.add("container");

root.append(href);
href.append(icon);
