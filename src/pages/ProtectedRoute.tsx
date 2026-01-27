import { Navigate } from "react-router-dom";
import Home from ".//Home";
type props = {
    child:any
}
 export default function ProtectedRoute({child}:props){
    const isAuth = false;
    {isAuth ? child:<Home/>}
 }