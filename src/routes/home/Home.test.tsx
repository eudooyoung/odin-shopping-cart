import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Home from "./Home";

describe("Home Component", () => {
  it("render home page", () => {
    render(<Home />);
  });
});
