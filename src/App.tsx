import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
type  Id = {
    id1:number;
    name:string;
  }
export default function App(){
  return <div className="flex  justify-around  font-mono bg-pink border-2" style={{height:"100px",}}>
          <Navbar name={"Kalyan"} />
          <About/>
          <Skills/>
        </div>
    
}