import About from "@/components/aboutpage/About";
import Experience from "@/components/experiencePage/Experience";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projectpage/Projects";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
};

export default Home;
