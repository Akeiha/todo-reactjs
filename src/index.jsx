import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { setCurrentWindowWidthFn } from "./models/App";

import "src/ui/styles/core/_inheritance.scss";
import "src/ui/styles/core/global.scss";
import "src/ui/styles/core/reset.scss";

import "src/models/init";

import App from "src/pages/App.jsx";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

window.addEventListener("resize", () => {
  setCurrentWindowWidthFn(window.innerWidth);
});
