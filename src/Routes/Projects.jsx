import { motion } from "framer-motion";
import "../Styles/Navbar.css";
import HomeImg from "../Images/thumbs.png";


function Home() {
  let variant = {
    hidden: {
      opacity: 0.5,
    },
    show: {
      opacity: 1,
    },
    exit: {
      opacity: 0.5,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={variant}
      transition={{ duration: 0.3 }}
      className="project-container overflow-hidden h-screen w-screen absolute bg-primary-background1 dark:bg-primary-background2"
    >
      <section id="projects" className = "w-full flex justify-center">
        PROJECTS
      </section>
    </motion.div>
  );
}

export default Home;
