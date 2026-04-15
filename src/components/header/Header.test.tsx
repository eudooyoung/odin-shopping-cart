import {
  createBrowserRouter,
  RouterProvider,
  type DataRouter,
} from "react-router";
import { beforeEach, describe, expect, it } from "vitest";
import routes from "../../routes/routes";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  let router: DataRouter;

  beforeEach(() => {
    router = createBrowserRouter(routes);
  });

  it("heading", () => {
    render(<RouterProvider router={router} />);

    const header = screen.getByRole("heading", { name: "Odin Shopping Cart" });
    expect(header).toBeInTheDocument();
  });

  it("navigation bar", () => {
    render(<RouterProvider router={router} />);

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toBeInTheDocument();
    const shopLink = screen.getByRole("link", { name: "Shop" });
    expect(shopLink).toBeInTheDocument();
    const cartLink = screen.getByRole("link", { name: "Cart" });
    expect(cartLink).toBeInTheDocument();
  });
});
