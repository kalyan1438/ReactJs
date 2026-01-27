import { useNavigate, Outlet } from "react-router-dom"
import { Button } from "@/components/ui/button";
export default function DashBoard(){
    const navigate = useNavigate();
    return <>
        <div className="flex justify-evenly">
        <Button  onClick={()=>{navigate("profile")}}>Profile</Button>
        <Button  onClick={()=>{navigate("settings")}}>Settings</Button>
        </div>
        <Outlet/>
    </>
}