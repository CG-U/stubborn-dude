import React from "react";

import { Profile } from "../Profile";
import { render, screen } from "@testing-library/react";

describe("<Profile />", () => {
  it("should render picture properly", () => {
    render(<Profile />);

    expect(screen.getByAltText("Profile")).toBeInTheDocument();
  });
});
