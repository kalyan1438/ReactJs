import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
export default function List(){
    const [list,setList] = useState<string[]>([]);
    const [item,setItem] = useState("");
    const valid = ()=>{
        if(item ==="") return;
        setList([...list,item]);
    }
    const rem = (idx:number)=>{
        setList(list.filter((_,i)=>i!==idx))
    }
    return <>
    <Input placeholder="Enter Element" value={item} onChange={(e)=>setItem(e.target.value)}/>
        <Button onClick={valid}>Add</Button>
        {list.length>0 &&
        <ul className="list-decimal list-inside">
        {list.map((i, idx) => (
         <li key={idx}>{i} <Button onClick={()=>rem(idx)} variant={"destructive"}>Remove</Button></li>
            ))}
        </ul>
        }
         </>
}