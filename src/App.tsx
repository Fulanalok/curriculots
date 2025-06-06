import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DarkModeToggle from "./components/DarkModeToggle";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen transition-colors duration-500">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <DarkModeToggle />
        </div>
        {children}
      </div>
    </div>
  );
}
  function App() {

    return (
      <Layout>
        <div className="flex flex-col items-center justify-center  text-center [dark:bg-slate-800]">
          <Header />
          <main className="max-w-3xl mx-auto p-4">
            <About />
            <Experience />
            <Projects />
            <Skills />
          </main>
          <Footer />
        </div>
      </Layout>
    );
  }

  export default App;

