import React from "react";

import { Icon } from "../Icon";
import { render, screen } from "@testing-library/react";

describe("<Icon />", () => {
  it("should render picture properly", () => {
    render(<Icon iconName="phone" />);

    expect(screen.getByText("phone")).toBeInTheDocument();
  });
});
