import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Outlet, Route, Routes } from "react-router";
import { describe, expect, it, vi, type Mock } from "vitest";
import Cart from "../../routes/cart/Cart";
import Main from "../main/Main";
import Shop from "../../routes/shop/Shop";

window.fetch = vi.fn(() => {
  const productItems = [{ id: 1, title: "productOne" }];

  return Promise.resolve({
    json: () => Promise.resolve(productItems),
  });
}) as Mock;

describe("Order Component", () => {
  it("user interaction", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter initialEntries={["/shop"]}>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="shop" element={<Shop />} />
            <Route path="cart" element={<Cart />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const quantityInput = await screen.findByLabelText(/quantity/i);
    await user.type(quantityInput, "5");
    const addToCartBtn = screen.getByRole("button", { name: /cart/i });
    await user.click(addToCartBtn);
    const linkToCartPage = screen.getByRole("link", { name: /cart/i });
    await user.click(linkToCartPage);

    const increaseOrderBtn = screen.getByRole("button", { name: "+" });
    await user.click(increaseOrderBtn);
    const orderQuantity = screen.getByLabelText(/quantity/i);
    expect(orderQuantity).toHaveValue("6");

    const decreaseOrderBtn = screen.getByRole("button", {name: "-"});
    await user.click(decreaseOrderBtn);
    expect(orderQuantity).toHaveValue("5");
  });
});
