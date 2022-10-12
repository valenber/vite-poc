import { render, RenderOptions } from "@testing-library/react";
import { FC, ReactElement, ReactNode } from "react";

const providersWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <>{children}</>;
};
const customRender = (
  uiSlice: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(uiSlice, { wrapper: providersWrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
