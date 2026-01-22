import { useState } from "react";
import { Button} from "./ui/button";
export default function Toggle(){
    const [toggle,setToggle] = useState(false);
    return <>
        <h1>Toggle</h1>

        <Button onClick={()=>setToggle(!toggle)} >{(toggle)?"Show":"Hide"} </Button>
    </>
}