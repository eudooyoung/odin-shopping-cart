import {
  createBrowserRouter,
  RouterProvider,
  type DataRouter,
} from "react-router";
import { beforeEach, describe, expect, it, vi, type Mock } from "vitest";
import routes from "../../utils/routes";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Main Component", () => {
  let router: DataRouter;
  beforeEach(() => {
    router = createBrowserRouter(routes);
  });

  it("initial page to be home", () => {
    render(<RouterProvider router={router} />);
    const mainHeading = screen.getByRole("heading", { level: 2 });
    expect(mainHeading.textContent).toMatch(/Home/);
  });

  it("shop page", async () => {
    window.fetch = vi.fn(() => {
      const productItems = [
        { id: 1, title: "productOne" },
        { id: 2, title: "productTwo" },
      ];

      return Promise.resolve({
        json: () => Promise.resolve(productItems),
      });
    }) as Mock;

    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    const shopLink = screen.getByRole("link", { name: "Shop" });
    await user.click(shopLink);
    const mainHeading = screen.getByRole("heading", { level: 2 });
    expect(mainHeading.textContent).toEqual("Shop Page");

    const productOneTitle = screen.getByRole("heading", {
      level: 3,
      name: "productOne",
    });
    expect(productOneTitle).toBeInTheDocument();
    const productTwoTitle = screen.getByRole("heading", {
      level: 3,
      name: "productTwo",
    });
    expect(productTwoTitle).toBeInTheDocument();
  });
});
