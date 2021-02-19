import React, { useEffect } from "react"  
import Hero from "./content/Hero"
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
            <Hero />
            <Bio />
            <Projects />
            <Skills />
            <ContactMe />
        </div>
    )
}

export default Content