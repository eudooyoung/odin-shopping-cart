import { describe, it } from "vitest";
import Shop from "./Shop";
import { render } from "@testing-library/react";

describe("Shop Component", () => {
  it("render shop page", () => {
    render(<Shop />);
  });
});
