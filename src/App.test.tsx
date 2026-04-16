import {
  createBrowserRouter,
  MemoryRouter,
  Route,
  RouterProvider,
  Routes,
  type DataRouter,
} from "react-router";
import { beforeEach, describe, expect, it, vi, type Mock } from "vitest";
import routes from "./utils/routes";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import App from "./App";
import Shop from "./routes/shop/Shop";

describe("App Component", () => {
  let router: DataRouter;
  beforeEach(() => {
    router = createBrowserRouter(routes);

    window.fetch = vi.fn(() => {
      const productItems = [
        { id: 1, name: "productOne" },
        { id: 2, name: "productTwo" },
      ];

      return Promise.resolve({
        json: () => Promise.resolve(productItems),
      });
    }) as Mock;
  });

  describe("Header Component", () => {
    it("heading", () => {
      render(<RouterProvider router={router} />);
      const header = screen.getByRole("heading", {
        name: "Odin Shopping Cart",
      });
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

  describe("Main Component", () => {
    it("initial heading", () => {
      render(<RouterProvider router={router} />);
      const mainHeading = screen.getByText("Home Page");
      expect(mainHeading).toBeInTheDocument();
    });

    it("change main heading with navigation bar links", async () => {
      const user = userEvent.setup();
      render(<RouterProvider router={router} />);

      const shopLink = screen.getByRole("link", { name: "Shop" });
      await user.click(shopLink);
      let mainHeading = screen.getByRole("heading", { level: 2 });
      expect(mainHeading.textContent).toEqual("Shop Page");

      const cartLink = screen.getByRole("link", { name: "Cart" });
      await user.click(cartLink);
      mainHeading = screen.getByRole("heading", { level: 2 });
      expect(mainHeading.textContent).toEqual("Cart Page");

      const homeLink = screen.getByRole("link", { name: "Home" });
      await user.click(homeLink);
      mainHeading = screen.getByRole("heading", { level: 2 });
      expect(mainHeading.textContent).toEqual("Home Page");
    });

    it("display product items with fetched data", () => {
      render(
        <MemoryRouter initialEntries={["/link"]}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="shop" element={<Shop />} />
            </Route>
          </Routes>
        </MemoryRouter>,
      );

      const productOneTitle = screen.getByRole("heading", {
        level: 3,
        name: "productOne",
      });
      expect(productOneTitle).toBeInTheDocument();
    });
  });
});
