import { PropsWithChildren } from "react";

export const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="w-screen h-screen p-3 bg-indigo-100">{children}</div>;
};
