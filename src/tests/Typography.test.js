import React from "react";
import { render } from "@testing-library/react";
import Typography from "../components/Typography";

describe("Typography Component", () => {
  test("renders headline correctly", () => {
    const { getByText } = render(
      <Typography variant="h2" className="heading">
        Explore Your Next Adventure Now
      </Typography>
    );
    const headlineElement = getByText("Explore Your Next Adventure Now");
    expect(headlineElement).toBeInTheDocument();
    expect(headlineElement).toHaveClass("heading");
  });

  test("renders body correctly", () => {
    const { getByText } = render(
      <Typography variant="body2">
        Discover the world's wonders with our curated travel experiences,
        turning your wanderlust into extraordinary adventures.
      </Typography>
    );
    const bodyElement = getByText(
      "Discover the world's wonders with our curated travel experiences, turning your wanderlust into extraordinary adventures."
    );
    expect(bodyElement).toBeInTheDocument();
  });

  test("renders eyebrow correctly", () => {
    const { getByText } = render(
      <Typography variant="subtitle1" className="eyebrow">
        Location
      </Typography>
    );
    const eyebrowElement = getByText("Location");
    expect(eyebrowElement).toBeInTheDocument();
    expect(eyebrowElement).toHaveClass("eyebrow");
  });
});
