import logo from './logo.svg';
import './App.css';

import Header from './Component/Header/Header'
import About from './Component/About/About'
import Projects from './Component/Projects/Projects'
import Skills from './Component/Skills/Skills'
import Contact from './Component/Contact/Contact'
import Footer from './Component/Footer/Footer'
import ScrollToTop from './Component/ScrollToTop/ScrollToTop'
function App() {


  return (
    <div id='top' className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <ScrollToTop />
      <Footer />

    </div>
  );
}

export default App;
