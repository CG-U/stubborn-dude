import React from "react";

import { Button } from "../Button";
import { render, screen } from "@testing-library/react";

describe("<Button />", () => {
  it("should render picture properly", () => {
    render(<Button text="Test button text" />);

    expect(screen.getByText("Test button text")).toBeInTheDocument();
  });
});
