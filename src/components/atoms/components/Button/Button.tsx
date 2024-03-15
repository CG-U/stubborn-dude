import { useState } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variety?: string;
  text?: string;
}

export function Button({ variety, text, ...props }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative ${props.className} `}
    >
      {text}
      {props.children}
      {/* Underline animation on hover */}
      <div
        className={`${
          isHovered ? "w-full" : "w-0"
        } h-1 bg-tertiary duration-500 absolute bottom-0`}
      ></div>
    </button>
  );
}
