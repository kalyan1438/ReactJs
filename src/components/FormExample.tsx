import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
export default function FromExample(){
    const [form,setForm] = useState({email:"",password: ""});
    const handleSubmit = (e:any)=>{
        e.preventDefault();
    }
    const handleChange = (e:any)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
    const [submit,setSubmit] = useState(false);
    return <>
    <form onSubmit={handleSubmit}>
        <Input placeholder="Enter Email"  type="email" name="email"
        onChange={handleChange} value={form.email}/>
        <Input placeholder="Enter Password" type="password" name="password"
        onChange={handleChange} value={form.password}/>
        <Button  variant={"outline"} onClick={()=>{setSubmit(true)}}>Submit</Button>
    </form>
        {submit && <div className="bg-pink-500">
            <h1 >Email:{form.email}</h1>
            <h1>Password:{form.password}</h1>
        </div>
        }
    </>
}