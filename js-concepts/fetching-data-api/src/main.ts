import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

const API = "https://api.publicapis.org";

// const req = await fetch(`${API}/categories`);
// const res = await req.json();

fetch(`${API}/categories`).then((val) =>
  val.json().then((response) => {
    app.innerHTML = `
  <pre>${JSON.stringify(response, null, 4)}</pre>
`;
  }),
);
