import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { describe, it } from "vitest";
import App from "./App";
import Home from "./routes/home/Home";
import Shop from "./routes/shop/Shop";
import Cart from "./routes/cart/Cart";

describe("App Component", () => {
  it("navigation bar", () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </MemoryRouter>,
    );
  });
});
