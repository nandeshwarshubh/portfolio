import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  test("it should mount", () => {
    render(<App />);
  });
});
