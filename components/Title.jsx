import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        strings: [
          "Welcome to my website ",
          "Transforming Ideas",
          "Into Digital Reality",
          "Front End Developer",
        ],

        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
};

export default Type;
