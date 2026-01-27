import { Route,Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import DashBoard from "./pages/DashBoard"
import Profile from "./pages/Profile"
import Settings  from "./pages/Settings"
export default function App(){
      return <>
      <header>
            <Navbar/>
      </header>
      <main className="pb-16 pt-50 pl-65" >
            <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/dash" element={<DashBoard/>}>
                  <Route  path="profile" element={<Profile/>}/>
                  <Route  path="Settings" element={<Settings/>}/>
            </Route>
      </Routes>
      </main>
      <Footer />
      </>
    
}