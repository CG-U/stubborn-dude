import React from "react";

import { Navbar } from "../Navbar";
import { render, screen } from "@testing-library/react";

describe("<Navbar />", () => {
  it("should render picture properly", () => {
    render(<Navbar toggleMenuVisibility={jest.fn()} />);

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });
});
