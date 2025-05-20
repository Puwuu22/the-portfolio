import {
  About,
  Footer,
  Header,
  Hero,
  Navbar,
  Projects,
  Skills,
} from "./components";

function App() {
  return (
    <div className="dark:bg-[#080B2A] bg-no-repeat bg-cover overflow-hidden relative">
      <Header />
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
