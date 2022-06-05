const template = document.createElement("template");
template.innerHTML = `
  <style>
  </style>
  <div class="user-card">
    <img width="100px" height="100px" />
    <div>
      <div class="info">
        <p id="name"></p>
        <p id="email"></p>
      </div>
    </div>
    <button id="toggle-info">click me</button>
  </div>
`;

class Card extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.image = this.shadowRoot.querySelector("img");
    this.name = this.shadowRoot.querySelector("#name");
    this.email = this.shadowRoot.querySelector("#email");
  }

  connectedCallback() {
    this.image.src = this.getAttribute("avatar");
    this.name.innerText = this.getAttribute("name");
    this.email.innerText = this.getAttribute("email");

    this.shadowRoot
      .querySelector("#toggle-info")
      .addEventListener("click", () => alert(`Hello ${this.name.innerText}`));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector("#toggle-info").removeEventListener();
  }
}

export default Card;
