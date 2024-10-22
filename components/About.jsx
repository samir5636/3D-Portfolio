import Link from "next/link";
import { motion } from "framer-motion";

import { socials } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import EmailIcon from "./../public/assets/icons/email.svg";

function About() {
  return (
    <section
      className="md:my-36 md:w-2/3 w-full h-full xl:ml-36 lg:ml-12 p-8 md:mt-[40svh] xl:mt-[150px]"
      id="about"
    >
      <motion.div
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <p className={"sectionSubText text-gray-300"}>Introduction</p>
        <h2 className={"sectionHeadText text-white"}>Overview.</h2>
      </motion.div>
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="mt-4 dark:text-ctnSecondaryDark text-gray-300 text-[17px] w-full leading-[30px] flex flex-col justify-between gap-6"
      >
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg mx-auto mt-8">
  <h2 className="text-3xl font-bold text-gray-800 mb-4">Hello! I&apos;m Samir Ziani</h2>
  <p className="text-gray-600 mb-6">
    I&apos;m a student engineer specializing in full-stack development with knowledge in data analysis. 
    I&apos;m passionate about building efficient web and mobile applications and learning new technologies to enhance my skills.
  </p>
  
  <h3 className="text-xl font-semibold text-gray-700 mb-3">Technologies I work with:</h3>
  <div className="flex flex-wrap gap-3 mb-6">
    <span className="bg-blue-500 text-white rounded-full px-4 py-2 text-sm">React</span>
    <span className="bg-yellow-500 text-white rounded-full px-4 py-2 text-sm">Angular</span>
    <span className="bg-green-600 text-white rounded-full px-4 py-2 text-sm">Spring Boot</span>
    <span className="bg-orange-600 text-white rounded-full px-4 py-2 text-sm">JEE</span>
    <span className="bg-gray-700 text-white rounded-full px-4 py-2 text-sm">Docker</span>
    <span className="bg-red-500 text-white rounded-full px-4 py-2 text-sm">Git</span>
    <span className="bg-indigo-500 text-white rounded-full px-4 py-2 text-sm">Computer Vision</span>
    <span className="bg-purple-500 text-white rounded-full px-4 py-2 text-sm">React Native</span>
    <span className="bg-blue-400 text-white rounded-full px-4 py-2 text-sm">Tailwind CSS</span>
    <span className="bg-purple-700 text-white rounded-full px-4 py-2 text-sm">Bootstrap</span>
  </div>

  <p className="text-gray-600">
    My studies have provided me with a strong foundation in data analysis, allowing me to approach problems with a data-driven mindset and improve decision-making processes.
  </p>
</div>


        <div className="w-fit break-words">
          <Link
            href="mailto:samirziyyani@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary w-full transition-all duration-100 ease-in flex md:items-center gap-2 md:flex-row flex-wrap word-break hover:-translate-y-2"
          >
            <EmailIcon className="w-[30px] h-[30px]" />
            samirziyyani@gmail.com
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          {socials.map((social) => (
            <Link
              href={social.link}
              target="_blank"
              key={social.id}
              className="w-8 h-8 hover:-translate-y-2 ease-in transition-all duration-100 cursor-pointer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
        <Link
          href="document/samir-ziani.pdf"
          target="_blank"
          rel="noreferrer"
          className="w-fit"
        >
          <div className="btn w-fit bg-tertiary text-white px-7 py-2 rounded-md overflow-hidden relative cursor-pointer">
            <div className="original bg-primary text-white px-7 py-2">
              Resume
            </div>
            <div className="letters">
              <span>R</span>
              <span>e</span>
              <span>s</span>
              <span>u</span>
              <span>m</span>
              <span>e</span>
            </div>
          </div>
        </Link>
      </motion.div>
    </section>
  );
}

export default About;
