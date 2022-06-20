import { render, RenderOptions } from "@testing-library/react";
import { ReactElement } from "react";
import AllTheProviders from "../providers";

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { default as user } from "@testing-library/user-event";
export * from "../providers";
export * from "./server";
export { customRender as render };
