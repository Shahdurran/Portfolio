import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import { aboutData } from "../../aboutData";
import CountUp from "react-countup";
import Avatar from "../../components/Avatar";
import { fadeIn } from "../../variants";
import SplitTextJS from "split-text-js";
import { gsap } from "gsap";
import GlowCard from "../../components/GlowCard";
import {
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaReact,
  FaWordpress,
  FaBootstrap,
} from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { FaVuejs } from "react-icons/fa6";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiFramer,
  SiNextdotjs,
  SiRedux,
  SiMui,
  SiTailwindcss,
  SiTestinglibrary,
  SiJest,
  SiVisualstudiocode,
  SiWebpack,
  SiNetlify,
  SiBabel,
  SiVercel,
} from "react-icons/si";
import Image from "next/image";

const About = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const titles = gsap.utils.toArray(".text-wrapper p");
    const tl = gsap.timeline({ repeat: -1 });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      tl.from(
        splitTitle.chars,
        {
          opacity: 0,
          y: 80,
          rotateX: -90,
          stagger: 0.02,
        },
        "<"
      ).to(
        splitTitle.chars,
        {
          opacity: 0,
          y: -80,
          rotateX: 90,
          stagger: 0.02,
        },
        "<1"
      );
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left background">
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 mt-14">
        <div className="flex-1 flex flex-col justify-center">
          <div className="container">
            <div className="text-wrapper">
              <p className="text-lg xl:text-xl">Online Innovator</p>
              <p
                className="text-lg xl:text-xl"
                style={{ color: "rgb(184 115 51 / var(--tw-bg-opacity))" }}
              >
                Code Craftsman
              </p>
              <p className="text-lg xl:text-xl">Detail-Oriented</p>
              <p
                className="text-lg xl:text-xl"
                style={{ color: "rgb(184 115 51 / var(--tw-bg-opacity))" }}
              >
                Masters of algorithms
              </p>
              <p className="text-lg xl:text-xl">Digital Pioneer</p>
            </div>
          </div>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Highly skilled and motivated individual with more than 3 years of
            professional experience. I am passionate about bringing digital
            visions to life. I excel at transforming complex ideas into visually
            stunning websites.
          </motion.p>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] mt-8 xl:mt-0"
        >
          <div className="flex gap-x-8 h-2/5 sm:h-2 xl:gap-x-12 mx-auto xl:mx-0 mb-4 sm:overflow-visible overflow-y-auto">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 ${
                  itemI === aboutData.length - 1 && "ml-14"
                }`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div
            className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start w-full mb-14 sm:mb-0"
            style={{
              overflowX: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {index === 0 ? (
              <div className=" w-full flex flex-col items-center xl:items-start gap-4">
                {aboutData[index].info.map((item, itemI) => (
                  <div
                    key={itemI}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
                  >
                    <div className="experience_title">{item.title}</div>
                    <div className="hidden md:flex">-</div>
                    <div>{item.stage}</div>

                    <div className="flex gap-x-4 flex-wrap justify-center xl:justify-start">
                      {item.icons?.map((icon, iconI) => (
                        <div
                          className="flex flex-col items-center mb-5"
                          key={iconI}
                        >
                          <div className="w-24 h-24 pt-4 rounded-lg border border-[#1f223c] bg-[#343A5C] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                            <div className="text-5xl flex justify-center">
                              {typeof icon.Icon === "string" ? (
                                <Image
                                  src={icon.Icon}
                                  alt={icon.name}
                                  width={500} 
                                  height={300}
                                  style={{ width: "50%", height: "100%" }}
                                />
                              ) : (
                                <icon.Icon
                                  style={{
                                    color:
                                      icon.Icon === FaCss3
                                        ? "#1572B6"
                                        : icon.Icon === FaHtml5
                                        ? "#E34F26"
                                        : icon.Icon === FaJs
                                        ? "#F7DF1E"
                                        : icon.Icon === FaReact ||
                                          icon.Icon === TbBrandReactNative
                                        ? "#61DAFB"
                                        : icon.Icon === FaVuejs
                                        ? "#4BB483"
                                        : icon.Icon === SiRedux
                                        ? "#764abc"
                                        : icon.Icon === FaBootstrap
                                        ? "#8512F7"
                                        : icon.Icon === SiMui
                                        ? "#0080FF"
                                        : icon.Icon === SiTailwindcss
                                        ? "#36B7F0"
                                        : icon.Icon === SiJest
                                        ? "#944058"
                                        : icon.Icon === SiTestinglibrary
                                        ? "#F54544"
                                        : icon.Icon === SiVisualstudiocode
                                        ? "#24A4EA"
                                        : icon.Icon === SiWebpack
                                        ? "#1B74BA"
                                        : icon.Icon === SiNetlify
                                        ? "#05B7B4"
                                        : icon.Icon === SiBabel
                                        ? "#F4D420"
                                        : icon.Icon === SiVercel ||
                                          icon.Icon === SiNextdotjs
                                        ? "#000000"
                                        : "",
                                  }}
                                />
                              )}
                            </div>
                            <div className="text-white text-[12px]">
                              {icon.name}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="w-full">
                <div className="flex flex-col gap-6">
                  {aboutData[index].info.map((item, itemI) => (
                    <GlowCard
                      key={item.id}
                      identifier={`experience-${item.id}`}
                    >
                      <div className="p-3 relative text-white">
                        <div className="flex justify-center">
                          <p className="text-xs sm:text-sm text-[#16f2b3]">
                            {item.stage}
                          </p>
                        </div>
                        <div className="flex items-center gap-x-8 px-3 py-5">
                          <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                            <BsPersonWorkspace size={36} />
                          </div>
                          <div>
                            <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                              {item.title}
                            </p>
                            <p className="text-sm sm:text-base">
                              {item.company}
                            </p>
                            <p className="text-sm sm:text-base">
                              {item.location}
                            </p>
                            <p className="text-sm sm:text-base mt-2">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
