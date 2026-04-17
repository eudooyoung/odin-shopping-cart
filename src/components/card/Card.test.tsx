import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it, vi } from "vitest";
import Card from "./Card";
import userEvent from "@testing-library/user-event";

describe("Card Component", () => {
  const sample = {
    id: 0,
    title: "sample",
    price: 10,
    description: "sample description",
    category: "sample category",
    image: "sample image url",
  };

  it("product information", () => {
    render(
      <MemoryRouter>
        <Card productItem={sample} />
      </MemoryRouter>,
    );

    const title = screen.getByRole("heading", {
      name: sample.title,
    });
    expect(title).toBeInTheDocument();
    const price = screen.getByText(new RegExp(`\\$ ${sample.price}`));
    expect(price).toBeInTheDocument();
    const description = screen.getByText(sample.description);
    expect(description).toBeInTheDocument();
    const img = screen.getByRole("img", { name: new RegExp(sample.title) });
    expect(img).toBeInTheDocument();
  });

  it("item quantity modification", async () => {
    const user = userEvent.setup();
    render(
      <MemoryRouter>
        <Card productItem={sample} />
      </MemoryRouter>,
    );

    const input = screen.getByLabelText(/quantity/i);
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
  });

  it("add to cart", async () => {
    const user = userEvent.setup();
    const onAddToCart = vi.fn(() => {});
    render(
      <MemoryRouter>
        <Card productItem={sample} onAddToCart={onAddToCart} />
      </MemoryRouter>,
    );

    const addToCartButton = screen.getByRole("button", { name: /add/i });
    await user.click(addToCartButton);
    expect(onAddToCart).toHaveBeenCalled();
  });
});
