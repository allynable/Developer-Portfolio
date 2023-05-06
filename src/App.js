import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import PreLoader from "./components/PreLoader";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <PreLoader />
      <div className="App">
        <NavBar />
        <Banner />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;