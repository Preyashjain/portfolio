import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      {/* Text + Button Content */}
      <div
        className={`absolute inset-0 top-[120px] z-10 max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left Accent Line */}
        <div className="flex flex-col justify-center items-center mt-28 md:mt-5 lg:mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Intro Text + Button */}
        <div className="mt-28 md:mt-5 lg:mt-5">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">Preyash</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build intelligent apps with Flutter and Python <br />
            and love solving real-world problems with tech.
          </p>

          {/* ✅ Resume Download Button with Toast */}
          <div className="mt-5 z-20">
            <a
              href="/resume/Preyash_Jain_Resume.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                toast.success("📄 Resume download started!", {
                  autoClose: 2000,
                })
              }
              className="inline-block text-white bg-[#915EFF] px-6 py-3 rounded-lg font-semibold hover:bg-[#7c49e0] transition duration-300 ease-in-out shadow-md"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0">
        <ComputersCanvas />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>

      {/* ✅ Toast Container */}
      <ToastContainer position="top-right" />
    </section>
  );
};

export default Hero;
