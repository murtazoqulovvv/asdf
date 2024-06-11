import Navbar from "./Components/Navbar/Navbar";
import {Route,Routes} from "react-router-dom";
import Home from "./Components/Home/Home"
import About from "./Components/About/About"
    



export default function App(){

    return(
        <>
           <Navbar/>
           
           
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/navbar" element={<Navbar />}/>
                <Route path="/about" element={<About />}/>

            </Routes>
          
    
        </>
    )
}