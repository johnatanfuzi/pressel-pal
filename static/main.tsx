import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "../src/styles.css";

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { Presell } from "../src/presell";
import { Product } from "../src/product";

function normalize(hash: string): string {
  // "#/pressel" -> "/pressel", "" -> "/pressel" (default)
  const h = hash.replace(/^#/, "") || "/pressel";
  if (h === "/" || h === "") return "/pressel";
  return h;
}

function App() {
  const [path, setPath] = useState<string>(() =>
    typeof window === "undefined" ? "/pressel" : normalize(window.location.hash),
  );

  useEffect(() => {
    const onHash = () => setPath(normalize(window.location.hash));
    window.addEventListener("hashchange", onHash);
    // Se abriram sem hash, força #/pressel para deixar a URL previsível.
    if (!window.location.hash) {
      window.location.replace("#/pressel");
    }
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);

  if (path === "/filhodevolta") return <Product />;
  return <Presell />;
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
