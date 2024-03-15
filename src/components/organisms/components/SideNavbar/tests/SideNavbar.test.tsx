import React from "react";

import { SideNavbar } from "../SideNavbar";
import { render, screen } from "@testing-library/react";

describe("<SideNavbar />", () => {
  it("should render picture properly", () => {
    render(<SideNavbar toggleMenuVisibility={jest.fn()} />);

    expect(screen.getByText("Profile")).toBeInTheDocument();
  });
});
