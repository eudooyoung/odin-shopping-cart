import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { describe, expect, it, vi, type Mock } from "vitest";
import userEvent from "@testing-library/user-event";
import Main from "../main/Main";
import Shop from "../../routes/shop/Shop";

window.fetch = vi.fn(() => {
  const productItems = [{ id: 1, title: "productOne" }];

  return Promise.resolve({
    json: () => Promise.resolve(productItems),
  });
}) as Mock;

describe("Card Component", () => {
  it("user interaction", async () => {
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

    const input = await screen.findByLabelText(/quantity/i);
    expect(input).toHaveValue("0");

    await user.type(input, "5");
    expect(input).toHaveValue("5");

    await user.type(input, "Words");
    expect(input).toHaveValue("5");

    const increaseButton = screen.getByRole("button", { name: "+1" });
    await user.click(increaseButton);
    expect(input).toHaveValue("6");

    const decreaseButton = screen.getByRole("button", { name: "-1" });
    await user.click(decreaseButton);
    expect(input).toHaveValue("5");

    await user.clear(input);
    await user.click(decreaseButton);
    expect(input).toHaveValue("0");

    const addToCartButton = screen.getByRole("button", {
      name: /add to cart/i,
    });
    await user.click(increaseButton);
    await user.click(addToCartButton);
    expect(input).toHaveValue("0");
  });
});
