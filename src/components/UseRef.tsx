import { useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
export default function UseRef(){
    const inputref = useRef<HTMLInputElement | null>(null);
    const handleClick = ()=>{
        inputref.current?.focus();
    }
    return <>
    <Input type="text" placeholder="Enter text" ref={inputref}/>
    <Button  onClick={handleClick}>Click Me</Button>
    </>
}