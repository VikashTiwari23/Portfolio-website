import { useEffect, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Footer from "./Footer";
import Header from "./Header";
import { Loader } from "./Loader";
import Mail from "./Mail";
import Projects from "./Projects";
import Skills from "./Skills";
import Social from "./Social";

const HomePage = () =>{
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false);
        },5000)
        return ()=>clearTimeout(timer);
    },[])
    return(
        <div className={`min-h-screen bg-bgColor ${loading? 'flex' : '' } justify-center items-center overflow-x-hidden`}>
            {
                loading !== true ? <>
                <Header/>
                <About />
                <Projects />
                <Skills/>
                <Experience />
                <Contact/>
                <Footer />
                <Mail />
                <Social />
            </>: 
            <Loader />
            }   
        </div>
    );
}   
export default HomePage;