import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./Home";

describe("Home Component", () => {
  it("render home page", () => {
    render(<Home />);
    const pageTitle = screen.getByText("Home Page");
    expect(pageTitle).toBeInTheDocument();
  });
});
