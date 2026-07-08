import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "../src/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { HashApp } from "../src/hash-app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashApp />
  </React.StrictMode>,
);
