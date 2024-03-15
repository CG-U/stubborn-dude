import { Button, Icon } from "../../../atoms/components";
import profilePicture from "../../../../assets/profilePicture.jpg";
import { Link } from "react-scroll";

export interface NavbarProps {
  toggleMenuVisibility: () => void;
}

export function Navbar({ toggleMenuVisibility }: NavbarProps) {
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
    <nav className="flex justify-between w-full px-8 py-4 text-white bg-base drop-shadow-lg">
      <img
        src={profilePicture}
        alt="Ced's Profile"
        className="w-8 h-8 rounded-full "
      ></img>
      <section className="hidden space-x-8 md:block ">
        {navItems.map((item) => (
          <Link to={item.id} smooth={true} duration={500} key={item.id}>
            <Button
              // onClick={() => scrollToSection(item.id)}
              key={item.id}
              text={item.name}
              className="font-inter"
            />
          </Link>
        ))}
      </section>

      <Icon
        iconName="menu"
        role="button"
        className="md:hidden "
        onClick={toggleMenuVisibility}
      />
    </nav>
  );
}
