import React from "react";
import linkedin from "./../../Images/linkedin.png";
import github from "./../../Images/github.png";

type FooterProps = {
  theme: string;
};

const Footer: React.FC<FooterProps> = ({ theme }) => {
  return (
    <div className="Footer-entire">
      <div className="copyright-footer">
        <a href="https://www.linkedin.com/in/lucile-tronczyk/">
          <img className={`socials-${theme}`} src={linkedin} alt="linkedin" />
        </a>
        <a href="https://github.com/LucileTech">
          <img className={`socials-${theme}`} src={github} alt="github" />
        </a>
        <div>Copyright © 2023 Lucile Tronczyk. All Rights Reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
