import React from "react";

import { ContactMe } from "../ContactMe";
import { render, screen } from "@testing-library/react";

describe("<ContactMe />", () => {
  it("should render all sections properly", () => {
    render(<ContactMe />);

    expect(
      screen.getByText(
        "This has been fun, know more about me. Reach me through my account below!"
      )
    ).toBeInTheDocument();
  });
});
