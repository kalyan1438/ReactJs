import Home from "./Home";
export default function Navbar(props:{name:string}){
    return <>
    <h1 style={{background:"black",color:"red",display:"inline"}}>NavBar</h1>
    <Home name={props.name}  />
    </>
}
