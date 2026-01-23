import { useEffect } from "react";
export default function BasicUseEffect(){
    useEffect(()=>{
        console.log("Hello useEffect");
    }
    ,[]);
    return <></>
}