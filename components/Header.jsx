import Link from "next/link";
import React, { useState } from "react";
import { RiCloseLine, RiGithubLine, RiLinkedinLine, RiMenu3Line } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

import styles from "./styles.module.css";

export const socialData = [
  {
    name: "Linkedin",
    link: "https://pk.linkedin.com/in/shah-durran-ahmed-a38b471a5",
    Icon: RiLinkedinLine,
  },
  {
    name: "Github",
    link: "https://github.com/Shahdurran",
    Icon: RiGithubLine,
  },
  {
    name: "Email",
    link: "mailto:dev.shahdurran@gmail.com",
    Icon: MdOutlineMailOutline,
  },
  {
    name: "Download Resume",
    link: "/Shah's_Resume.pdf", 
    Icon: FaFileDownload,
  },
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className="absolute z-30 w-full xl:px-0 xl:h-[90px] ">
      <div className="w-full">
        <div className="flex justify-between items-center gap-y-4 py-4 px-4 sm:px-6 md:px-10 lg:px-12">
          {/* logo */}
          <Link href="/">
            <h2 className="text-xl md:text-2xl lg:text-3xl ">
              <b>Shah</b> Durran Ahmed
            </h2>
          </Link>

          {/* hamburger menu for mobile */}
          <button className="lg:hidden" onClick={toggleDrawer}>
            <RiMenu3Line size={30} />
          </button>

          {/* socials */}
          <div className="hidden lg:flex items-center gap-x-5 text-lg pt-2 pr-5 ">
            <div className={styles.social_btns}>
              <div className={styles.button}>
                {socialData.map((social, i) => (
                  <div key={i} className={styles.qube}>
                    {social.name === "Download Resume" ? (
                      <a
                        title={social.name}
                        href={social.link}
                        download
                        className={styles.link}
                      >
                        <div className={styles.front}>
                          <social.Icon aria-hidden />
                        </div>
                        <div className={styles.back}>
                          <social.Icon aria-hidden />
                        </div>
                      </a>
                    ) : (
                      <Link
                        title={social.name}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={styles.link}
                      >
                        <div className={styles.front}>
                          <social.Icon aria-hidden />
                        </div>
                        <div className={styles.back}>
                          <social.Icon aria-hidden />
                        </div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Side Drawer */}
        <div
          className={`fixed top-0 left-0 h-full w-64 z-40 transform ${
            isDrawerOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out lg:hidden`}
          style={{
            background: '#2C3E50'
          }}
        >
          <button className="absolute top-4 right-4" onClick={toggleDrawer}>
            <RiCloseLine size={30} />
          </button>
          <div className="flex flex-col items-start mt-16 px-4">
            {socialData.map((social, i) => (
              <div key={i} className="mb-4 flex items-center">
                {social.name === "Download Resume" ? (
                  <a
                    title={social.name}
                    href={social.link}
                    download
                    className="flex items-center"
                    onClick={toggleDrawer}
                  >
                    <social.Icon size={24} />
                    <span className="ml-2">{social.name}</span>
                  </a>
                ) : (
                  <Link
                    title={social.name}
                    href={social.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center"
                    onClick={toggleDrawer}
                  >
                    <social.Icon size={24} />
                    <span className="ml-2">{social.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
