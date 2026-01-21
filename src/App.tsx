import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
type  Id = {
    id1:number;
    name:string;
  }
export default function App(){
  const id1 : Id = {
    id1:558,
    name:"Kalyan"
  }
  return <>
        <div className="flex  justify-around border-2">
          <Navbar name="Kalyan"/>
          <Home id={id1.id1} name={id1.name}/>
          <About/>
          <Skills/>
        </div>
    </>
}