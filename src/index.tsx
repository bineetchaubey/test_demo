import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

// Say something
console.log("[ERWT] : Renderer execution started");

// Render application in DOM
const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
