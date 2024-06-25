import React from 'react';
import './App.css';
// import Header from './components/header';
import Name from './components/Name';
import Footer from './components/Footer';
import About from './components/about';
import Services from './components/Services';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <Name />
      <Hero />
      <main>
        <About />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
