import { render, screen } from "@testing-library/react";

import Base from ".";

describe("<Base />", () => {
  it("should render without default padding top", () => {
    render(
      <Base paddingTop={false}>
        <h1>Heading</h1>
      </Base>
    );

    const wrapper = screen.getByRole("heading", { name: /heading/i });

    // eslint-disable-next-line testing-library/no-node-access
    expect(wrapper.parentElement).not.toHaveClass("pt-5");
  });
});
