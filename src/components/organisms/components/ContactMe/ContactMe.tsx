import React from "react";
import gmailIcon from "../../../../assets/gmail-icon.png";
import gitIcon from "../../../../assets/git-icon.png";
import linkedInIcon from "../../../../assets/linked-in-icon.png";
import { Icon } from "../../../atoms/components";

export interface ContactMeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ContactMe({ ...props }: ContactMeProps) {
  return (
    <div className="flex flex-col h-full p-8">
      <h1 className="text-3xl text-yellow-600">Contact Me</h1>
      <p className="text-yellow-600">
        This has been fun, know more about me. Reach me through my account
        below!
      </p>
      <section
        id="email-section"
        className="flex flex-col justify-center flex-1 bg-white-"
      >
        <div className="flex items-center mb-8 space-x-4">
          <img src={gmailIcon} alt="gmail icon" />
          <a
            href="mailto:cguntalan1999@gmail.com"
            className="text-xl text-blue-500 "
            target="_blank"
            rel="noReferrer"
          >
            cguntalan1999@gmail.com
          </a>
        </div>
        <div className="flex items-center mb-8 space-x-4">
          <img src={gitIcon} alt="gmail icon" />
          <a
            href="https://github.com/CG-U"
            className="text-xl text-blue-500 "
            target="_blank"
            rel="noReferrer"
          >
            https://github.com/CG-U
          </a>
        </div>
        <div className="flex items-center mb-8 space-x-4">
          <img src={linkedInIcon} alt="gmail icon" />
          <a
            href="https://www.linkedin.com/in/cedrick-godwin-untalan-02012a21a/"
            className="text-xl text-blue-500 "
            target="_blank"
            rel="noReferrer"
          >
            https://www.linkedin.com/in/cedrick-godwin-untalan-02012a21a/
          </a>
        </div>
        <div className="flex items-center mb-8 space-x-4">
          <Icon iconName="phone" className="text-5xl"></Icon>
          <p className="text-xl ">0920-972-8001</p>
        </div>
      </section>
    </div>
  );
}
