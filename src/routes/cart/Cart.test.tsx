import { describe, it } from "vitest";
import Cart from "./Cart";
import { render } from "@testing-library/react";

describe("Shop Component", () => {
  it("render shop page", () => {
    render(<Cart />);
  })
})