import { About, Contact, Footer, Header, Hero, Navbar, Projects, Skills } from "./components"

function App() {
  return (
    <div className="dark:bg-[#080B2A] text-white bg-no-repeat bg-cover overflow-hidden">
      <Header />
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <div className="h-[4000px]"></div>
    </div>
  )
}

export default App
