import profilePicture from "../../../../assets/profilePicture.jpg";
import graphqlIcon from "../../../../assets/graphql-icon.png";
import reactIcon from "../../../../assets/react-icon.png";
import tailwindIcon from "../../../../assets/tailwind-icon.png";
import typescriptIcon from "../../../../assets/typescript-icon.png";
import htmlIcon from "../../../../assets/html-icon.png";
import cssIcon from "../../../../assets/css-icon.png";
import gitIcon from "../../../../assets/git-icon.png";
import { twMerge } from "tailwind-merge";
import { Icon, Button } from "../../../atoms/components";
import { useState } from "react";
import { Link } from "react-scroll";

export interface ProfileProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Profile({ ...props }: ProfileProps) {
  const [cardToDisplayIndex, setCardToDisplayIndex] = useState(0);
  const cards: {
    cardGreeting: string;
    cardHeader: string;
    cardDescription: string;
  }[] = [
    {
      cardDescription:
        "I'm a passionate web developer who is always looking for new challenges and opportunities to learn and grow. ",
      cardGreeting: "Hi there, I'm Ced!",
      cardHeader: "Frontend Web Developer",
    },
    {
      cardDescription:
        "I live in San Pedro Laguna, a very outgoing person who loves to exercise on their free time. My hobbies were typical i guess... ",
      cardGreeting: "More about me! ",
      cardHeader: "",
    },
    {
      cardDescription:
        "I mainly use react and typescript on my job. To tell you further,  here are the tech im familiar with.",
      cardGreeting: "I love tech! ",
      cardHeader: "I'm enthusiastic about new technologies!",
    },
  ];
  const isLastCard = cardToDisplayIndex + 1 === cards.length;

  const showNextCard = () => {
    if (!isLastCard) setCardToDisplayIndex((prev) => prev + 1);
    else setCardToDisplayIndex(0);
  };

  const techILoveIcons = [
    graphqlIcon,
    reactIcon,
    tailwindIcon,
    typescriptIcon,
    htmlIcon,
    cssIcon,
    gitIcon,
  ];

  return (
    <div
      className={
        props.className +
        " flex justify-evenly font-inter flex-col-reverse md:flex-row md:justify-around w-full max-w-7xl mx-auto px-4"
      }
    >
      <section
        id="developer-description"
        className="text-primary bg-white h-fit p-8 max-w-full md:w-[60vw] md:max-w-[60%] box-border rounded-xl space-y-4 mx-4 mt-2 md:my-auto text-2xl font-bold md:mx-auto "
      >
        {cards.map((card, index) => {
          return (
            <div
              className={` ${
                index === cardToDisplayIndex ? "block" : "hidden"
              } space-y-4`}
            >
              <h1 className="flex justify-between w-full">
                {card.cardGreeting}
                <Button className="flex" onClick={showNextCard}>
                  <span className="hidden text-sm md:block">See more</span>{" "}
                  <Icon iconName="chevron_right"></Icon>{" "}
                </Button>
              </h1>
              <h2 className="">{card.cardHeader}</h2>
              <p className="text-lg text-primary">{card.cardDescription}</p>
              {isLastCard && (
                <div className="flex space-x-2">
                  {techILoveIcons.map((iconSrc) => (
                    <img src={iconSrc} alt="tech icon" className="w-8 h-8" />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </section>
      <div
        id="image container"
        className="mx-auto my-4 border-4 border-white w-fit rounded-2xl md:my-auto max-w-[40%] md:max-w-[30%] hover:rotate-3 duration-200"
      >
        <img src={profilePicture} alt="Profile" className="rounded-xl" />
      </div>
    </div>
  );
}
