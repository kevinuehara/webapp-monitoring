import { initializeSentry } from "./sentry/index.ts";
import { initializeAmplitude } from "./amplitude/index.tsx";
import { initializeHotjar } from "./hotjar/index.tsx";

export const initializeProviders = () => {
  initializeAmplitude();
  initializeSentry();
  initializeHotjar();
};
