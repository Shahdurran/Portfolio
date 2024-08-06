import { motion } from "framer-motion";

import ProjectSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full  py-36 w-full flex justify-center ">
      {/* <Circles /> */}
      <div className="container m-0 ">
        <div className="gap-x-8">
          {/* text */}
          <div className="text-center flex  flex-col lg:text-center mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              My work
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max- mx-auto lg:mx-0 mb-16"
            >
              Explore a curated collection of my latest web design projects and
              creative ventures, each crafted with precision and passion to
              deliver exceptional user experiences.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full "
          >
            <ProjectSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
