import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import MoviesTemplate from ".";

describe("<MoivesTemplate />", () => {
  it("should render the MoviesTemplate components", () => {
    render(
      <BrowserRouter>
        <MoviesTemplate />
      </BrowserRouter>
    );

    const textComponent = screen.getByText(/search a movie!/i);

    expect(textComponent).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /Go back!/i })
    ).toBeInTheDocument();
  });
});
