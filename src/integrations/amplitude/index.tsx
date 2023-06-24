import * as amplitude from "@amplitude/analytics-browser";

const AMPLITUDE_KEY = import.meta.env.VITE_AMPLITUDE;

export const initializeAmplitude = () => {
  amplitude.init(AMPLITUDE_KEY);
};

export const trackEvent = (event: string) => {
  amplitude.track(event);
};
