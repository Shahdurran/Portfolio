import { motion } from "framer-motion";

import TestimonialSlider from "../../components/TestimonialSlider";
import { fadeIn } from "../../variants";

const Recommendations = () => {
  return (
    <div className="h-full  py-32 text-center">
      <div className="container mx-auto h-full flex flex-col ">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          What colleagues <span className="text-accent">say.</span>
        </motion.h2>

        {/* slider */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Recommendations;
