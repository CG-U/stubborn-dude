import React, { useState } from "react";
import { Element } from "react-scroll";
import {
  ContactMe,
  Navbar,
  Profile,
  Projects,
  SideNavbar,
} from "../../../organisms/components";
export interface PortfolioProps {}

export function Portfolio({}: PortfolioProps) {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  function toggleMenuVisibility() {
    setIsMenuVisible((prev) => !prev);
  }

  return (
    <div
      className={`bg-base relative ${
        isMenuVisible ? "overflow-hidden h-screen" : ""
      }`}
    >
      <div
        className={` h-screen w-full fixed top-0 z-50 bg-white duration-500 transition-all md:hidden ${
          isMenuVisible ? "left-0" : "left-[100vw]"
        } `}
      >
        <SideNavbar toggleMenuVisibility={toggleMenuVisibility} />
      </div>

      {/* Profile Info */}
      <Element
        className="relative flex flex-col min-h-screen pb-4 bg-tertiary"
        name="profile-info"
        data-testid="profile-info"
      >
        <Navbar toggleMenuVisibility={toggleMenuVisibility} />
        <Profile className="flex flex-1 " id="profile-info" />
      </Element>

      {/* Projects */}
      <Element
        className="bg-white h-fit"
        name="projects"
        data-testid="projects"
      >
        <Projects id="projects" />
      </Element>

      {/* Contact Infos */}
      <Element
        className="h-screen max-h-fit bg-s"
        name="contact-me"
        data-testid="contact-me"
      >
        <ContactMe id="contact-me" />
      </Element>
    </div>
  );
}
