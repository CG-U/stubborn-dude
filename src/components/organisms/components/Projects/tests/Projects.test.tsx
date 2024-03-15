import React from "react";

import { Projects } from "../Projects";
import { render, screen } from "@testing-library/react";

describe("<Projects />", () => {
  it("should render picture properly", () => {
    render(<Projects />);

    expect(screen.getByText("Learners")).toBeInTheDocument();
  });
});
