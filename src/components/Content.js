import React, { useEffect } from "react"  
import Bio from "./content/Bio"
import ContactMe from "./content/ContactMe"
import Projects from "./content/Projects"
import Skills from "./content/Skills"
import Aos from "aos";
import "aos/dist/aos.css";

function Content() {
    useEffect(() => {
        Aos.init({duration: 500});
    }, []);
    return (
        <div id="content" className="content fade-in">
            <Bio />
            <Projects />
            <Skills />
            <ContactMe />
            <br></br>
            <br></br>
        </div>
    )
}

export default Content