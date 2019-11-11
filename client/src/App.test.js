import React from "react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";
import * as rtl from "@testing-library/react";
import Navbar from "./component/Navbar";
import useDarkMode from "./hooks/useDarkMode";

afterEach(rtl.cleanup);

test("The App renders without crashing", () => {
  rtl.render(<App />);
});

test("Navbar renders without crashing", () => {
  rtl.render(<Navbar />);
});

test("useDarkMode works", () => {
  const dmode = <useDarkMode />;
  expect(useDarkMode).toBeDefined();
  expect(dmode).toBeUndefined();
  expect(dmode).not.toBeFalsy();
});
