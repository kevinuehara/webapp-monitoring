import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initializeSentry } from "./integrations/sentry/index.ts";
import { initializeAmplitude } from "./integrations/amplitude/index.tsx";

initializeAmplitude();
initializeSentry();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
