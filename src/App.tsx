import { useState } from "react"
import { Button } from "./components/ui/button"
import { Input } from "./components/ui/input"; 
export default function App(){
  //const [count,setCount] = useState(0);
  const [text , setText] = useState('');
  const [s, setS] = useState('');
  return <>
    <Input id=""placeholder="Enter text" onChange={(e)=>{
       setText(e.target.value);
    }}/>
    <Button onClick={()=>{setS(text)}}>Sumbit</Button>
    <h1 className="text-9xl">{s}</h1>
  
  </>
    
}