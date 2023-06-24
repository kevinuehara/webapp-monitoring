import Hotjar from "@hotjar/browser";

const siteId = import.meta.env.VITE_HOTJAR;
const hotjarVersion = 6;

export const initializeHotjar = () => {
  Hotjar.init(siteId, hotjarVersion);
};
