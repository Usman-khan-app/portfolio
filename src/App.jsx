import Header from "./components/Header";
import "remixicon/fonts/remixicon.css";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Skill from "./components/Skill";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="main">
      <Header />
      <Hero />
      <Education/>
      <Skill/>
      <Footer/>
    </div>
  );
}
