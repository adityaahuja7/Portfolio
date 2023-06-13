import Navbar from "../Components/Navbar.js";
import DarkMode from "../Components/DarkMode.js";
import TiltCard from "../Components/TiltCard.jsx";
import Carousel from "../Components/Carousel.jsx";
import "../Styles/Navbar.css";
import "../Styles/Home.css";
import { ThemeProvider } from "next-themes";

const Text1 = ["Hello","Babe","Nigga"];

function App() {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="root-container bg-no-repeat bg-blobLight dark:bg-blobDark transition-all delay-100 duration-200 linear">
        <div className="header-container">
          <Navbar />
        </div>
        <div className="dark-mode-container absolute bottom-10 right-10">
          <DarkMode />
        </div>
        <div className="ProjectContainer hover:cursor-pointer absolute left-1/2 top-1/2">
          <Carousel content = {Text1} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
