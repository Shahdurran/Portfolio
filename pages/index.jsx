import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../components/styles.module.css";
import ParticlesContainer from "../components/ParticlesContainer";
import Type from "../components/Title";
import { slideIn } from "../variants";
import Avatar from "../components/Avatar";

const Home = () => {
  return (
    <div className="bg-primary/60 min-h-screen flex flex-col">
      <ParticlesContainer />
      <div className="flex-grow mt-20 relative flex flex-col xl:flex-row items-center xl:items-start justify-between xl:space-x-20 px-4 sm:px-8 lg:px-20 mb-40 sm:mb-0 ">
        <div className="text-center flex flex-col justify-center pt-20 xl:pt-40 xl:text-left w-full xl:w-1/2">
          {/* title */}
          <motion.h1
            variants={slideIn("down", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl md:text-5xl lg:text-6xl text-accent mb-6" // Adjust font size and add margin-bottom for spacing
          >
            <Type />
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={slideIn("down", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm md:max-w-md lg:max-w-xl mx-auto xl:mx-0 mb-8 xl:mb-16 text-white"
          >
            I am a passionate and skilled web developer dedicated to creating
            visually stunning and highly functional websites. Explore my
            projects to see how I blend creativity with technical expertise to
            deliver exceptional digital experiences. Whether you need a sleek
            corporate site, an engaging e-commerce platform, or a cutting-edge
            web application, I bring your vision to life with precision and
            innovation. Let’s build something amazing together!
          </motion.p>
        </div>

        {/* image */}
        <div className="w-full xl:w-1/2 h-full flex justify-center xl:justify-end mt-10 xl:mt-0">
          <motion.div
            variants={slideIn("up", 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-[737px] xl:max-h-[600px]"
          >
            <Avatar />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;
