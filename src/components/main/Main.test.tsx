import {
  createBrowserRouter,
  MemoryRouter,
  Route,
  RouterProvider,
  Routes,
  type DataRouter,
} from "react-router";
import { beforeEach, describe, expect, it, vi, type Mock } from "vitest";
import routes from "../../utils/routes";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Shop from "../../routes/shop/Shop";
import Main from "./Main";

window.fetch = vi.fn(() => {
  const productItems = [
    { id: 1, title: "productOne" },
    { id: 2, title: "productTwo" },
  ];

  return Promise.resolve({
    json: () => Promise.resolve(productItems),
  });
}) as Mock;

describe("Main Component", () => {
  let router: DataRouter;
  beforeEach(() => {
    router = createBrowserRouter(routes);
  });

  describe("Home Route", () => {
    it("initial page to be home", () => {
      render(<RouterProvider router={router} />);
      const mainHeading = screen.getByRole("heading", { level: 2 });
      expect(mainHeading.textContent).toMatch(/Home/);
    });
  });

  describe("Shop Route", () => {
    it("shop page fetch product items", async () => {
      render(
        <MemoryRouter initialEntries={["/shop"]}>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="shop" element={<Shop />} />
            </Route>
          </Routes>
        </MemoryRouter>,
      );

      const productOneTitle = await screen.findByRole("heading", {
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

    it("display how many items in cart on navbar", async () => {
      const user = userEvent.setup();
      render(
        <MemoryRouter initialEntries={["/shop"]}>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="shop" element={<Shop />} />
            </Route>
          </Routes>
        </MemoryRouter>,
      );

      const cartPageLink = screen.getByRole("link", { name: /cart/i });
      expect(cartPageLink).not.toHaveTextContent(/0/);

      const addToCartBtns = await screen.findAllByRole("button", {
        name: /add to cart/i,
      });
      await user.click(addToCartBtns[0]);
      expect(cartPageLink).not.toHaveTextContent(/1/);

      const increaseBtns = screen.getAllByRole("button", { name: "+" });
      await user.click(increaseBtns[0]);
      await user.click(addToCartBtns[0]);
      expect(cartPageLink).toHaveTextContent(/1/);
    });
  });
});
