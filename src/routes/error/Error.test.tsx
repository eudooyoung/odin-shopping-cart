import {
  createMemoryRouter,
  Route,
  RouterProvider,
  type DataRouter,
} from "react-router";
import { beforeEach, describe, expect, it } from "vitest";
import routes from "../../utils/routes";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Error Page", () => {
  let router: DataRouter;
  beforeEach(() => {
    router = createMemoryRouter(routes, { initialEntries: ["/sample"] });
  });

  it("display error page with unknown address", () => {
    render(<RouterProvider router={router} />);
    screen.debug();

    const heading = screen.getByRole("heading", { level: 2 });
    expect(heading.textContent).toMatch(/doesn't exist/i);
  });

  it("goes back to home page", async () => {
    const user = userEvent.setup();
    render(<RouterProvider router={router} />);

    const homeLink = screen.getByRole("link", { name: /home/i });
    await user.click(homeLink);
    const homeHeading = screen.getByRole("heading", { name: /home page/i });
    expect(homeHeading).toBeInTheDocument();
  });
});
