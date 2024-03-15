import React from "react";

import { Portfolio } from "../Portfolio";
import { render, screen } from "@testing-library/react";

describe("<Portfolio />", () => {
  it("should render all sections properly", () => {
    render(<Portfolio />);

    expect(screen.getByTestId("profile-info")).toBeInTheDocument();
    expect(screen.getByTestId("projects")).toBeInTheDocument();
    expect(screen.getByTestId("contact-me")).toBeInTheDocument();
  });
});
