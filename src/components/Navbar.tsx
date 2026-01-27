import { Link } from "react-router-dom";
export default function Navbar(){
    return <>
        <nav  className="fixed top-0 w-full flex justify-evenly bg-gray-900 text-white text-center py-3 " style={{height:"40px"}}>
        <Link to="/dash">Dash</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
      </nav>
    </>
}
