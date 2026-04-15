import {
  createBrowserRouter,
  RouterProvider,
  type DataRouter,
} from "react-router";
import { beforeEach, describe, expect, it } from "vitest";
import routes from "../../routes/routes";
import { render, screen } from "@testing-library/react";

describe("Main Component", () => {
  let router: DataRouter;

  beforeEach(() => {
    router = createBrowserRouter(routes);
  });

  it("initial heading", () => {
    render(<RouterProvider router={router} />);
    const mainHeading = screen.getByText("Home Page");
    expect(mainHeading).toBeInTheDocument();
  });
});
