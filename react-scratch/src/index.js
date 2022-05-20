import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
const App = () => {
  return <h1>This is my React app!</h1>;
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);
