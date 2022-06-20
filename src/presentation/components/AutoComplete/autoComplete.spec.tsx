/* eslint-disable testing-library/no-node-access */
import { fireEvent, render, screen } from "@testing-library/react";

import AutoComplete from ".";

const getMovies = () => {
  const movies = [
    "North by Northwest (1959)",
    "The Dark Knight (2008)",
    "City Lights (1931)",
    "Grand Illusion (1937)",
    "Jaws (1975)",
    "Star Wars (1977)",
    "Alien (1979)",
  ];
  return movies;
};

describe("<AutoComplete />", () => {
  it("should render AutoComplete component", () => {
    const moviesList = getMovies();

    render(<AutoComplete placeholder="Movie" suggestions={moviesList} />);

    expect(screen.getByPlaceholderText("Movie")).toBeInTheDocument();
  });

  it("should render suggestions when writing on input", () => {
    const moviesList = getMovies();

    render(<AutoComplete placeholder="Movie" suggestions={moviesList} />);

    const input = screen.getByPlaceholderText("Movie");

    expect(screen.queryByTestId("list")).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "N" } });

    expect(screen.getByTestId("list")).toBeInTheDocument();
  });
  it("should render no options when no title matches input value", () => {
    const moviesList = getMovies();

    render(<AutoComplete placeholder="Movie" suggestions={moviesList} />);

    const input = screen.getByPlaceholderText("Movie");

    expect(screen.queryByTestId("list")).not.toBeInTheDocument();

    fireEvent.change(input, { target: { value: "Nasdadsasasads" } });

    expect(screen.getAllByText(/No Options/i)).toBeTruthy();
  });
  it("should select option when pressing Enter key", () => {
    const moviesList = getMovies();
    render(<AutoComplete placeholder="Movie" suggestions={moviesList} />);
    const input = screen.getByPlaceholderText("Movie");

    fireEvent.change(input, { target: { value: "N" } });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });
    const inputValue = (input as HTMLInputElement).value;
    expect(inputValue).toBe("North by Northwest (1959)");
  });
  it("should move through list when pressing ArrowDown key", () => {
    const moviesList = getMovies();
    render(<AutoComplete placeholder="Movie" suggestions={moviesList} />);
    const input = screen.getByPlaceholderText("Movie");

    fireEvent.change(input, { target: { value: "N" } });

    fireEvent.keyDown(input, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });

    const inputValue = (input as HTMLInputElement).value;

    expect(inputValue).toBe("The Dark Knight (2008)");
  });
  it("should move through list when pressing ArrowUp key", () => {
    const moviesList = getMovies();
    render(<AutoComplete placeholder="Movie" suggestions={moviesList} />);
    const input = screen.getByPlaceholderText("Movie");

    fireEvent.change(input, { target: { value: "N" } });

    fireEvent.keyDown(input, {
      key: "ArrowDown",
      code: "ArrowDown",
      keyCode: 40,
      charCode: 40,
    });

    fireEvent.keyDown(input, {
      key: "ArrowUp",
      code: "ArrowUp",
      keyCode: 38,
      charCode: 38,
    });

    fireEvent.keyDown(input, {
      key: "Enter",
      code: "Enter",
      keyCode: 13,
      charCode: 13,
    });

    const inputValue = (input as HTMLInputElement).value;

    expect(inputValue).toBe("North by Northwest (1959)");
  });
});
