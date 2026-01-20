type props = {
    name:string;
}
export default function Navbar({name}:props){
    return <>
    <h1>NavBar: {name}</h1>
    </>
}
