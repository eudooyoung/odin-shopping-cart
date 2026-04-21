import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vitest";
import Header from "./Header";

describe("Header Component", () => {
  it("heading", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const header = screen.getByRole("heading", {
      name: "Odin Shopping Cart",
    });
    expect(header).toBeInTheDocument();
  });
});
