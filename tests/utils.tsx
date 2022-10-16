import { userAPI } from "@api/userAPI";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { render, RenderOptions } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { FC, ReactElement, ReactNode } from "react";


const providersWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <ApiProvider api={userAPI}>{children}</ApiProvider>;
};
const customRender = (
  uiSlice: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(uiSlice, { wrapper: providersWrapper, ...options });

export * from "@testing-library/react";
export { customRender as render, userEvent };
