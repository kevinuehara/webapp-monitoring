import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeSentry } from "./integrations/sentry/index.ts";
import { initializeAmplitude } from "./integrations/amplitude/index.tsx";
import { initializeHotjar } from "./integrations/hotjar/index.tsx";

initializeAmplitude();
initializeSentry();
initializeHotjar();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
