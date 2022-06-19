import { render, screen } from "@testing-library/react";

import Text from ".";

describe("<Text />", () => {
  it("should render the heading", () => {
    const { container } = render(<Text>My awesome text</Text>);

    const headingElement = screen.getByText(/my awesome text/i);

    expect(headingElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
