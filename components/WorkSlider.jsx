import Image from "next/image"; // Import Image from next/image
import Link from "next/link";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiJavascript,
  SiMaterialui,
  SiMongodb,
  SiMui,
  SiVuedotjs,
} from "react-icons/si";

const WorkSlider = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className="space-y-10">
      {/* Slide 1 */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Image 1 */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Seazen Portal</h2>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              Tech Stack:
              <FaReact className="ml-2 text-blue-500" />
              <SiJavascript className="ml-2 text-yellow-500" />
              <SiMui className="ml-2 text-blue-500" />
            </h3>
            <p className="text-sm lg:pr-5">
              A sleek and modern food delivery web application built using
              React, this project provides a comprehensive solution for online
              food ordering and delivery. Featuring an intuitive user interface,
              the application enhances user experience from the moment they open
              the app to the delivery of their meal. Users can easily browse
              through various cuisines, filter options based on preferences, and
              enjoy secure user authentication for a personalized experience.
              Real-time order tracking, multiple payment methods, and efficient
              delivery logistics ensure a smooth and enjoyable process.
              Additionally, restaurant partners benefit from a user-friendly
              dashboard to manage their menus and orders effectively. Seazen
              innovates Italian dining experiences globally, delivering
              exceptional hospitality and unique flavors, making this
              application a robust and streamlined solution in the online food
              delivery market.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div
            className="flex items-center justify-center relative overflow-hidden group"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <Image
              src="/seazen.png"
              alt="Project 1"
              width={1004}
              height={768}
              style={{ height: "390px", borderRadius: "30px" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 rounded-3xl"
              aria-hidden
            />
            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
              <Link
                href="https://orderseazen.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
              >
                <div className="delay-100">LIVE</div>
                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                  PROJECT
                </div>
                <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                  <BsArrowRight aria-hidden />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Image 2 */}
        <div className="md:w-1/2 flex items-center justify-center relative">
          <div
            className="flex items-center justify-center relative overflow-hidden group"
            onMouseEnter={() => setHoveredIndex(1)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <Image
              src="/ezlo-mios.png"
              alt="Project 2"
              width={867}
              height={768}
              style={{ height: "390px", borderRadius: "30px" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 rounded-3xl"
              aria-hidden
            />
            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
              <Link
                href="https://ezlogic.mios.com/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
              >
                <div className="delay-100">LIVE</div>
                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                  PROJECT
                </div>
                <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                  <BsArrowRight aria-hidden />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Mios Dashboard</h2>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              Tech Stack:
              <FaReact className="ml-2 text-blue-500" />
              <SiJavascript className="ml-2 text-yellow-500" />
              <SiMui className="ml-2 text-blue-500" />
            </h3>
            <p className="text-sm lg:pr-5">
              Leveraged expertise in MiOS by Ezlo, a cutting-edge platform
              renowned for enabling advanced integration, automation, and
              visualization in the smart home industry. Demonstrated proficiency
              in creating and managing Meshbots, utilizing sophisticated
              triggers and actions to optimize smart home ecosystems. Key
              contributions include advanced integration of a wide array of
              smart home devices and systems, ensuring seamless communication
              and functionality across diverse technologies. Developed and
              implemented complex automation routines, enhancing efficiency and
              user experience. Additionally, utilized React as a core technology
              stack to build intuitive and responsive user interfaces, further
              enhancing the platform&apos;s capability and user engagement.
            </p>
          </div>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Image 3 */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">All Service</h2>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              Tech Stack:
              <FaReact className="ml-2 text-blue-500" />
              <SiJavascript className="ml-2 text-yellow-500" />
              <FaNodeJs className="ml-2 text-green-500" />
              <SiMongodb className="ml-2 text-green-700" />
            </h3>
            <p className="text-sm lg:pr-5">
              Introducing All Service, a modern platform designed to
              revolutionize how users connect with service providers. Built
              using React Native for the frontend and powered by Node.js and
              MongoDB for the backend, this mobile application offers a seamless
              experience for accessing a wide range of services. With an
              intuitive interface, users can explore service categories,
              customize preferences, and benefit from secure authentication.
              Real-time updates, flexible payment options, and streamlined
              service management ensure a hassle-free process. Service providers
              have access to a user-friendly dashboard for efficient profile and
              booking management. All Service sets a new standard for on-demand
              service platforms, providing a convenient solution for connecting
              users with the services they need.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div
            onMouseEnter={() => setHoveredIndex(2)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <Image
              src="/All Service.png"
              alt="Project 3"
              width={1640}
              height={924}
              style={{ borderRadius: "30px" }}
            />
          </div>
        </div>
      </div>

      {/* Slide 4 */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        {/* Image 4 */}
        <div className="md:w-1/2 flex items-center justify-center relative">
          <div
            className="flex items-center justify-center relative overflow-hidden group"
            onMouseEnter={() => setHoveredIndex(3)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <Image
              src="/ezlo dashboard.png"
              alt="Project 4"
              width={894}
              height={768}
              style={{ height: "390px", borderRadius: "30px" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 rounded-3xl"
              aria-hidden
            />
            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
              <Link
                href="http://ezlodashboard.mios.com"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
              >
                <div className="delay-100">LIVE</div>
                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                  PROJECT
                </div>
                <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                  <BsArrowRight aria-hidden />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Ezlo Dashboard</h2>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              Tech Stack:
              <SiVuedotjs className="ml-2 text-green-500" />
              <SiJavascript className="ml-2 text-yellow-500" />
              <img src="/vuex.png" alt="React Logo" className="h-6 ml-2" />
              <img
                src="/bootstrap-vue.png"
                alt="Other Tech Logo"
                className="h-6 ml-2"
              />
            </h3>
            <p className="text-sm lg:pr-5">
              Ezlo Dashboard introduces a new way to manage your home automation
              devices effortlessly. Built with Vue for a sleek and responsive
              interface, it allows users to view and interact with all connected
              devices seamlessly. Create customized tiles to represent your
              devices and build custom dashboards tailored to your preferences.
              Enjoy real-time control and monitoring, enhancing your smart home
              experience with a highly personalized and efficient management
              system. Ezlo Dashboard combines advanced technology with a
              user-centric design, setting a new standard for intuitive and
              personalized home automation management.
            </p>
          </div>
        </div>
      </div>

      {/* Slide 5 */}
      <div className="flex flex-col md:flex-row items-center gap-4 pb-24">
        {/* Image 5 */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">Protected Dashboard</h2>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              Tech Stack:
              <SiVuedotjs className="ml-2 text-green-500" />
              <SiJavascript className="ml-2 text-yellow-500" />
              <img src="/vuex.png" alt="React Logo" className="h-6 ml-2" />
              <img
                src="/bootstrap-vue.png"
                alt="Other Tech Logo"
                className="h-6 ml-2"
              />
            </h3>
            <p className="text-sm lg:pr-5">
              Protected Dashboard is a sophisticated platform designed to give
              users complete control over their automated home devices. Built
              with Vue for a sleek and responsive user interface, this dashboard
              allows users to manage and monitor connected devices seamlessly.
              Users can arm or disarm alarms, make emergency calls to medics or
              police, view recordings, or take pictures via connected cameras,
              all from a single interface. Additionally, the platform features
              meshbot creation, enabling users to set up custom triggers and
              actions for device automation based on their logic. The dashboard
              supports white labeling, allowing for customization to fit
              different branding needs. Utilizing WebSockets, the system ensures
              real-time communication between the client, server, and devices,
              providing a smooth and reliable user experience. Protected
              Dashboard sets a new benchmark for smart home management, offering
              a powerful and customizable solution for home automation.
            </p>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div
            className="flex items-center justify-center relative overflow-hidden group"
            onMouseEnter={() => setHoveredIndex(4)}
            onMouseLeave={() => setHoveredIndex(-1)}
          >
            <Image
              src="/protected-dashboard.png"
              alt="Project 5"
              width={1101}
              height={768}
              style={{ height: "390px", borderRadius: "30px" }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700 rounded-3xl"
              aria-hidden
            />
            <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
              <Link
                href="http://protectdashboard.mios.com"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
              >
                <div className="delay-100">LIVE</div>
                <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                  PROJECT
                </div>
                <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                  <BsArrowRight aria-hidden />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkSlider;
