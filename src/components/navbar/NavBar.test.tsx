import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import NavBar from "./NavBar";
import { MemoryRouter } from "react-router";

describe("NavBar Component", () => {
  it("links", () => {
    render(
      <MemoryRouter>
        <NavBar totalItem={0} />
      </MemoryRouter>,
    );

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();
    const shopLink = screen.getByRole("link", { name: "Shop" });
    expect(shopLink).toBeInTheDocument();
    const cartLink = screen.getByRole("link", { name: "Cart" });
    expect(cartLink).toBeInTheDocument();
  });
});
