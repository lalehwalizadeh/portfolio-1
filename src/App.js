
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./components/index.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import Works from "./components/Works"
import { PageAnimation } from "./components/Animation"
const App = () => {


  return (
    <PageAnimation>
    <div className="App">
      <header id="header">
        <Navbar />
      </header>
  
      <main>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/works" element = {<Works/>} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
    </PageAnimation>
  )
}

export default App
