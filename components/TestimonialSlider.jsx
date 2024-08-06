import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const testimonialData = [
  {
    name: "Maksym Pinchuk",
    position: "JavaScript Engineer",
    linkedin: "https://www.linkedin.com/in/pinchuk-dev/",
    image: "/maksym.jpeg",
    message:
      "Working with Shah on our React.js web application for home automation was a great experience. Shah quickly understood the complex details of our project, which helped us move forward efficiently. He communicated clearly and effectively, making sure everyone on the team was on the same page. Shah was full of creative ideas that he readily shared, adding significant value to our project. He also addressed any feedback from code reviews swiftly, ensuring continuous improvement in our development process. I can recommend Shah as a front-end engineer. His technical skills and proactive approach make him a great asset to any tech team.",
  },
  {
    name: "Ercüment Bayrak",
    position: "JavaScript Developer",
    linkedin: "https://tr.linkedin.com/in/erc%C3%BCment-bayrak-368bb73a",
    image: "/Ercument.jpeg",
    message:
      "Shah is highly skilled in React.JS and VueJS frameworks. He works with great devotion and meticulousness in order to fulfill the duties he undertakes. His communication with his colleagues is very strong, he is sharing and helpful. Shah has the capabilities and reliability to successfully take part in all kinds of projects and business processes. I trust Shah and recommend him.",
  },
  {
    name: "Dania Khan",
    position: "Assistant Manager HR",
    linkedin: "https://pk.linkedin.com/in/dania-khan-941320209",
    image: "/Dania.jpeg",
    message:
      "Shah has been an exceptional Frontend Team Lead, showcasing remarkable leadership capabilities and technical expertise. His talent in steering projects forward and motivating his team towards excellence is commendable. Shah's outstanding communication skills, commitment to quality, innovation, and effective collaboration have greatly contributed to our project successes. I recommend him for any role requiring a skilled, result-oriented, and forward-thinking Frontend Lead.",
  },
];

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation
      autoplay={{
        delay: 10000, 
        disableOnInteraction: false,
      }}
      modules={[Navigation, Autoplay]}
      className="h-full w-full mb-72 sm:mb-0"
    >
      {testimonialData.map((person, i) => (
        <SwiperSlide key={i}>
          <div className="relative flex items-center justify-center h-screen bg-cover bg-center">
            <div className="absolute inset-0 bg-opacity-50"></div>
            <div className="relative z-10 max-w-4xl text-center text-white p-8 md:p-16 rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-lg mt-48 sm:mt-0">
              <div className="flex flex-col items-center mb-8">
                {person.image && (
                  <div className="mb-4">
                    <Image
                      src={person.image}
                      width={100}
                      height={100}
                      alt={person.name}
                      className="rounded-full border-4 border-white"
                    />
                  </div>
                )}
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-semibold  hover:underline "
                >
                  {person.name}
                </a>
                <div className="text-sm uppercase font-light tracking-widest">
                  {person.position}
                </div>
              </div>
              <FaQuoteLeft className="text-4xl text-white mb-4" aria-hidden="true" />
              <div className="text-lg leading-relaxed">
                {person.message}
                <FaQuoteRight className="text-4xl text-white flex justify-end w-[200%]" aria-hidden="true" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
