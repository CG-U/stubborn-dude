import { Button, Icon } from "../../../atoms/components";
import profilePicture from "../../../../assets/profilePicture.jpg";
import { Link } from "react-scroll";

export interface SideNavbarProps {
  toggleMenuVisibility: () => void;
}

export function SideNavbar({ toggleMenuVisibility }: SideNavbarProps) {
  function scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    } else {
      console.log("no section");
    }
  }

  const navItems = [
    {
      name: "Profile",
      id: "profile-info",
    },
    {
      name: "Projects",
      id: "projects",
    },
    {
      name: "Contact me",
      id: "contact-me",
    },
  ];
  return (
    <nav className="flex flex-col w-full justify-between px-8 py-4 h-full">
      <Icon
        iconName="chevron_right"
        role="button"
        className="md:hidden ml-auto"
        onClick={toggleMenuVisibility}
      />
      <section className=" flex-1 flex flex-col space-y-8 mt-8">
        {navItems.map((item) => (
          <Link
            to={item.id}
            smooth={true}
            duration={1000}
            key={item.id}
            onClick={toggleMenuVisibility}
          >
            <Button
              key={item.id}
              text={item.name}
              className="font-inter text-gray-700 text-xl"
            />
          </Link>
        ))}
      </section>
    </nav>
  );
}
