import React, { useEffect, useState } from "react";
import { Presell } from "./presell";
import { Product } from "./product";

function normalize(hash: string): string {
  const h = hash.replace(/^#/, "") || "/pressel";
  if (h === "/" || h === "") return "/pressel";
  return h;
}

export function HashApp() {
  const [path, setPath] = useState<string>(() =>
    typeof window === "undefined" ? "/pressel" : normalize(window.location.hash),
  );

  useEffect(() => {
    const onHash = () => setPath(normalize(window.location.hash));
    window.addEventListener("hashchange", onHash);
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
