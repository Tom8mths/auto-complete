import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Home from ".";

describe("<Home />", () => {
  it("should render the home components", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const textComponent = screen.getByText(/welcome!/i);

    expect(textComponent).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Go to auto-complete!/i })
    ).toBeInTheDocument();
  });
});
