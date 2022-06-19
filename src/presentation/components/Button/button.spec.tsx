import { render, screen } from "@testing-library/react";

import Button from ".";

describe("<Button />", () => {
  it("should render correctly", () => {
    render(<Button>Save!</Button>);

    const btnElement = screen.getByRole("button", {
      name: /save!/i,
    });

    expect(btnElement).toBeInTheDocument();
  });

  it("should render small size", () => {
    render(<Button size="small">Save!</Button>);

    const btnElement = screen.getByRole("button", {
      name: /save!/i,
    });

    expect(btnElement).toHaveClass("w-fit px-6 py-2");
  });

  it("should render medium size", () => {
    render(<Button size="medium">Save!</Button>);

    const btnElement = screen.getByRole("button", {
      name: /save!/i,
    });

    expect(btnElement).toHaveClass("w-fit px-8 py-4");
  });

  it("should render large size", () => {
    render(<Button size="large">Save!</Button>);

    const btnElement = screen.getByRole("button", {
      name: /save!/i,
    });

    expect(btnElement).toHaveClass("w-fit px-10 py-6");
  });
});
