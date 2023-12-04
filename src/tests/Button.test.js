import React from "react";
import { render, fireEvent } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';
import Button from "../components/Button";

describe("Button Component", () => {
  test("renders Button component", () => {
    const { getByTestId } = render(<Button>Explore</Button>);
    const buttonElement = getByTestId("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("renders button with correct label", () => {
    const { getByTestId } = render(<Button>Explore</Button>);
    const buttonElement = getByTestId("button");
    expect(buttonElement).toHaveTextContent("Explore");
  });

  test("calls onClick handler", () => {
    const mockOnClick = jest.fn();
    const { getByTestId } = render(
      <Button onClick={mockOnClick}>Explore</Button>
    );
    const buttonElement = getByTestId("button");
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
