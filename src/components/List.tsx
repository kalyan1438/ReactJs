import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export default function List(){
    const [list,setList] = useState<string[]>([]);
    const [item,setItem] = useState("");
    return <>
    <Input placeholder="Enter Element" value={item} onChange={(e)=>setItem(e.target.value)}/>
        <Button onClick={()=>setList([...list,item])}>Add</Button>
        <ul>
        {list.map((i, idx) => (
        <li key={idx}>{i}</li>
            ))}
        </ul>

        </>
}