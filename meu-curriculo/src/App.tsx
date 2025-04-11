import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DarkModeToggle from "./components/DarkModeToggle";

function App() {

  return (
    <>
      <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        <Header />
        <main className="max-w-3xl mx-auto p-4">
          <DarkModeToggle />
          <About />
          <Experience />
          <Projects />
          <Skills />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
