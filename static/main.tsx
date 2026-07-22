import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "../src/styles.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { LoginPage } from "../src/routes/index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LoginPage />
  </React.StrictMode>,
);
