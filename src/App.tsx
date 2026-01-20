import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
export default function App(){
  return <>
        <div className="flex  justify-around border-2">
          <Navbar name="Kalyan"/>
          <Home/>
          <About/>
          <Skills/>
        </div>
    </>
}