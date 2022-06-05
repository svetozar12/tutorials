import Card from "./card";

window.customElements.define("card-html", Card);

const app = document.getElementById("app");
const card = document.createElement("card-html");
card.setAttribute(
  "avatar",
  "https://avatars.dicebear.com/api/male/john.svg?background=%230000ff",
);

card.setAttribute("name", "john");
card.setAttribute("email", "john@.com");

app.setAttribute("id", "root");
app.appendChild(card);
