import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./Style.css";

export default function App() {
  return (
    <>
      <Header />
      <main className="main">
        <section id="home" className="home">
          <div className="container">
            <h2>Welcome</h2>
            <p>
              Hello, welcome to my web-page. I'm a passionate web developer
              focused on building clean, user-friendly websites using modern
              tools like React and Vite.
            </p>
          </div>
        </section>
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
